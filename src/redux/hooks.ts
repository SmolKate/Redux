import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { ContactsAction } from "src/redux/actions";
import { RootState } from "src/redux/store";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ContactsAction>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
