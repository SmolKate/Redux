import { combineReducers } from "redux";
// import { contactsReducer } from "./contactsReducer";
import { contactsReducer } from "./contacts";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof rootReducer>;
