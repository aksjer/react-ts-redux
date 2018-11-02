import { Book } from '../models/book';

export const BOOK_LOAD = '[BOOK] LOAD';
export const BOOK_LOAD_SUCCESS = '[BOOK] LOAD SUCCESS';
export const BOOK_SELECT = '[BOOK] SELECT';

export const bookLoad = () => ({ type: BOOK_LOAD, payload: null });

export const bookLoadSuccess = (books: Book[]) => ({
  type: BOOK_LOAD_SUCCESS,
  payload: books
});

export const bookSelect = (book: Book) => ({
  type: BOOK_SELECT,
  payload: book
});
