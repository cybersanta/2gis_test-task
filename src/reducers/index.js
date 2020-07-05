import { combineReducers } from 'redux';

import bookList from './book-list';
import filter from './filter'

export default combineReducers({
    bookList,
    filter
})