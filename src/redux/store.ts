import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { contactsReducer } from "./contactsReducer";

export const store = createStore(
  combineReducers({
    contacts: contactsReducer,
  }),
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
