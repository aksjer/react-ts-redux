import { BOOK_LOAD, BOOK_LOAD_SUCCESS, BOOK_SELECT } from '../actions/book';
import { Book } from '../models/book';

export interface BookState {
  activeBook: Book | null;
  books: Book[];
  loading: boolean;
}

const initialState: BookState = {
  activeBook: null,
  books: [],
  loading: false
};

function bookReducer(state: BookState = initialState, action: any): BookState {
  switch (action.type) {
    case BOOK_LOAD:
      return { ...state, loading: true };
    case BOOK_LOAD_SUCCESS:
      return { ...state, books: action.payload, loading: false };
    case BOOK_SELECT:
      return { ...state, activeBook: action.payload };
    default:
      return state;
  }
}

export default bookReducer;
