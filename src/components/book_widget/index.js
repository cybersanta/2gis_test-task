import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookList from './book-list';
import PanelTabs from './panel-tabs';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


import { withBookStoreService } from '../hoc';
import { fetchBooks } from '../../actions/book-list';

import { compose } from '../../utils';

import './main.css';


class BookWidget extends Component {

    componentDidMount() {
        if(this.props.books.length === 0) {
            this.props.fetchBooks();
        }

    }

    filtredBooks = (books, filter) => {
        switch (filter) {
          case 'toRead':
            return books.filter(book => book.status === 'toRead')
          case 'inProgress':
            return books.filter(book => book.status === 'inProgress')
          case 'done':
            return books.filter(book => book.status === 'done')
          default:
              return books;    
        }
    }

    render() {
        const { books, isLoading, error, byStatus, byTags } = this.props
        const filtredBooks = this.filtredBooks(books, byStatus)

        if (isLoading) {
            return <Spinner />;
        }
      
        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <React.Fragment>
                <div className="book-widget">
                    <PanelTabs  activeFilter={byStatus}
                                toRead={this.filtredBooks(books, 'toRead').length}
                                inProgress={this.filtredBooks(books, 'inProgress').length}
                                done={this.filtredBooks(books, 'done').length}
                    />
                    <BookList   books={filtredBooks} 
                                filter={byStatus}
                    />
                </div>
            </React.Fragment>
        )
    }
}
    
const mapStateToProps = ({bookList: {books, isLoading, error}, filter: {byStatus, byTags}}) => {
    return {books, isLoading, error, byStatus, byTags}
}

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
    }
}

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps),
)(BookWidget)