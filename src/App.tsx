import React, { Component } from 'react';
import BookPage from './containers/book-page';
import { BookService } from './services/book.service';

class App extends Component {
  render() {
    return <BookPage bookService={new BookService()} />;
  }
}

export default App;
