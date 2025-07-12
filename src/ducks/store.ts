import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  contactsMiddleware,
  contactsReducer,
  contactsReducerPath,
} from "./contacts";

const rootReducer = combineReducers({
  [contactsReducerPath]: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(contactsMiddleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
