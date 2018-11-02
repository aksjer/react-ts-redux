import React from 'react';
import { connect } from 'react-redux';
import { bookSelect } from '../actions/book';
import { Book } from '../models/book';
import { BookState } from '../reducers/book';
import { RootState } from '../reducers/root';

const Books = ({ books, bookSelect }: any) => {
  const result = books.map((b: Book) => (
    <li className="list-group-item" key={b.id} onClick={() => bookSelect(b)}>
      {b.title}
    </li>
  ));

  return <ul className="list-group">{result}</ul>;
};

function mapStateToProps(state: RootState): BookState {
  return state.bookState;
}

const mapDispatchToProps = { bookSelect };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
