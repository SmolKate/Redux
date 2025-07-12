import { ThunkAction } from "redux-thunk";
import { db } from "src/model/db";
import { RootState } from "src/redux/store";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const DATA_LOADING = "DATA_LOADING";
export const SET_DATA = "SET_DATA";
export const FAILED_REQUEST = "FAILED_REQUEST";
export const SUCCESSFUL_REQUEST = "SUCCESSFUL_REQUEST";

interface Data {
  contacts?: ContactDto[];
  favoriteContacts?: FavoriteContactsDto;
  groupContacts?: GroupContactsDto[];
}

interface DataLoadingActionCreator {
  type: typeof DATA_LOADING;
}

interface SetDataActionCreator {
  type: typeof SET_DATA;
  payload: Data;
}

interface IsErrorActionCreator {
  type: typeof FAILED_REQUEST;
}

interface IsSuccessfulActionCreator {
  type: typeof SUCCESSFUL_REQUEST;
}

export type ContactsAction =
  | DataLoadingActionCreator
  | SetDataActionCreator
  | IsErrorActionCreator
  | IsSuccessfulActionCreator;

export const dataLoadingActionCreator = (): DataLoadingActionCreator => {
  return { type: DATA_LOADING };
};

export const setDataActionCreator = (data: Data): SetDataActionCreator => {
  return { type: SET_DATA, payload: data };
};

export const isErrorActionCreator = (): IsErrorActionCreator => {
  return { type: FAILED_REQUEST };
};

export const isSuccessfulActionCreator = (): IsSuccessfulActionCreator => {
  return { type: SUCCESSFUL_REQUEST };
};

export const getDataAction =
  (): ThunkAction<void, RootState, void, ContactsAction> =>
  async (dispatch) => {
    dispatch({ type: DATA_LOADING });
    try {
      const contacts = await db.contact.toArray();
      const groupContacts = await db.groupContacts.toArray();
      const favoriteContacts = await db.favoriteContact.toArray();
      const favoriteContactsIds = favoriteContacts.map((item) => item.id);
      dispatch(
        setDataActionCreator({
          contacts,
          groupContacts,
          favoriteContacts: favoriteContactsIds,
        })
      );
      dispatch({ type: SUCCESSFUL_REQUEST });
    } catch (error) {
      dispatch({ type: FAILED_REQUEST });
    }
  };
