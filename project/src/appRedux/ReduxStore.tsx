import { applyMiddleware, combineReducers, createStore } from "redux";
import { BookReducer } from "./reducers/BookReducer";
import { logger } from "redux-logger";

const combineReducer = combineReducers({
    BookReducer,
});

// Typescript yöntemi ile selector yapmak için...
export type StateType = ReturnType<typeof combineReducer>;

// create store
export const store = createStore(combineReducer, applyMiddleware(logger));
