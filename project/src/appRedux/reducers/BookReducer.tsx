import { IBook } from "../../models/IBook";
import { EBook } from "../types/EBook";

export interface IBookAction {
    type: EBook;
    payload: IBook;
}

export const BookReducer = (state: IBook[] = defaultBooks(), action: IBookAction) => {
    switch (action.type) {
        case EBook.BOOK_LIST:
            return state;
        case EBook.BOOK_SAVE:
            // state.push(action.payload);
            // return state;
            var id = state[state.length - 1].id;
            if (id) {
                id = id + 1;
            } else {
                id = 1;
            }
            action.payload.id = id;
            return [...state, action.payload];
        case EBook.BOOK_DELETE:
            const newState: IBook[] = Object.assign([], state);
            const index = newState.findIndex((item) => item.id === action.payload.id);
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

const defaultBooks = () => {
    const rows: IBook[] = [
        { id: 1, surname: "Snow", name: "Jon", phone: "05469743278" },
        { id: 2, surname: "Lannister", name: "Cersei", phone: "05469743278" },
        { id: 3, surname: "Lannister", name: "Jaime", phone: "05469743278" },
    ];
    return rows;
};
