import {
  ContactsAction,
  DATA_LOADING,
  FAILED_REQUEST,
  SET_DATA,
  SUCCESSFUL_REQUEST,
} from "src/redux/actions";
import { ContactDto } from "src/types/dto/ContactDto";
import { FavoriteContactsDto } from "src/types/dto/FavoriteContactsDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

const initialState = {
  contacts: [] as ContactDto[],
  favoriteContacts: [] as FavoriteContactsDto,
  groupContacts: [] as GroupContactsDto[],
  isDataLoading: false,
  isError: false,
};

export const contactsReducer = (
  state = initialState,
  action: ContactsAction
): typeof initialState => {
  switch (action.type) {
    case DATA_LOADING:
      return {
        ...state,
        isDataLoading: true,
        isError: false,
      };
    case SET_DATA:
      return {
        ...state,
        contacts: action.payload.contacts ?? [],
        favoriteContacts: action.payload.favoriteContacts ?? [],
        groupContacts: action.payload.groupContacts ?? [],
      };
    case FAILED_REQUEST:
      return {
        ...state,
        isError: true,
        isDataLoading: false,
      };
    case SUCCESSFUL_REQUEST:
      return {
        ...state,
        isDataLoading: false,
      };
    default:
      return state;
  }
};
