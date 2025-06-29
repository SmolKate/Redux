import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "src/redux/store";

export const useAppDispatch = useDispatch<Dispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
