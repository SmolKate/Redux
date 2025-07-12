import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "src/ducks/store";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, UnknownAction>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
