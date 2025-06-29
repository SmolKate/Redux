import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
  }),
  composeWithDevTools()
);

export type RootState = ReturnType<typeof store.getState>;
