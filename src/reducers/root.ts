import { combineReducers, Reducer } from 'redux';
import bookReducer, { BookState } from './book';

export interface RootState {
  bookState: BookState;
}

export const rootReducer: Reducer<RootState> = combineReducers({
  bookState: bookReducer
});
