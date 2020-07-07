import React from 'react';
import BookListItem from '../book-list-item';

import { addToProgress, addToDone, addToRead, addTagFilter } from '../../../actions/filter'
import { connect } from 'react-redux'

import './book-list.css';

const BookList = ({books, byStatus, addTagFilter, addToProgress, addToDone, addToRead}) => {

    let action;

    switch(byStatus) {
        case "toRead":
            action = addToProgress
            break;
        case "inProgress":
            action =  addToDone
            break;
        case "done":
            action =  addToRead
            break
        default: break;
    }


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
                        <li key={id}>
                            <BookListItem
                                book={book}
                                action={action}
                                addTagFilter={addTagFilter}
                            />

                        </li>
                    );
                })
            }
            
        </ul>
    );
};

const mapStateToProps = ({filter: {byStatus}}) => {
    return { byStatus }
}

export default connect(mapStateToProps, { addTagFilter, addToProgress, addToDone, addToRead })(BookList)