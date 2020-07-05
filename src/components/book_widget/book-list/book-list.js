import React from 'react';
import BookListItem from '../book-list-item';
// import { addToProgress, addToDone, addToRead } from '../../../actions/filter'

import './book-list.css';

const BookList = ({books, filter}) => {


    if (books.length === 0) {
        return (
            <React.Fragment>
                <div className="book-list-empty">List is empty</div>
            </React.Fragment>
        )
    }
    return (
        <ul className="book-list">
            {
                books.map((book, id) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                filter={filter}
                            />

                        </li>
                    );
                })
            }
            
        </ul>
    );
};

export default BookList