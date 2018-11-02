import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timer } from 'rxjs';
import { bookLoad, bookLoadSuccess } from '../actions/book';
import Books from '../components/books';
import isLoading from '../components/isLoading';
import { BOOKS } from '../datas/book';
import { Book } from '../models/book';
import { BookState } from '../reducers/book';
import { RootState } from '../reducers/root';
import { BookService } from '../services/book.service';

class BookPage extends Component {
  constructor(public props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.bookLoad();

    this.props.bookService
      .getAll()
      .subscribe(() => this.props.bookLoadSuccess(BOOKS));
  }

  displayActiveBook(book: Book) {
    if (book) {
      return <div>Selected book : {book.title}</div>;
    }
  }

  render() {
    return (
      <div>
        <h4>Books list</h4>
        {isLoading(this.props.loading)}
        <Books books={this.props.books} />
        {this.displayActiveBook(this.props.activeBook)}
      </div>
    );
  }
}

function mapStateToProps(state: RootState): BookState {
  return { ...state.bookState };
}

const mapDispatchToProps = { bookLoad, bookLoadSuccess };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookPage);
