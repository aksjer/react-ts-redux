import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { BOOKS } from '../datas/book';

export class BookService {
  getAll() {
    return timer(3000).pipe(mapTo(BOOKS));
  }
}
