import { load } from 'redux-localstorage-simple';

let BOOCK_LIST = load({ namespace: '2gis_test-task'})

if(!BOOCK_LIST || !BOOCK_LIST.bookList || !BOOCK_LIST.bookList.books.length) {
  BOOCK_LIST.bookList = {
    books: [],
    isLoading: false,
    error: null
  }
}


const bookList = (state = BOOCK_LIST.bookList , action) => {

    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
          return {
            books: [],
            isLoading: true,
            error: null
          };
    
        case 'FETCH_BOOKS_SUCCESS':
          return {
            books: action.payload,
            isLoading: false,
            error: null
          };
    
        case 'FETCH_BOOKS_FAILURE':
          return {
            books: [],
            isLoading: false,
            error: action.payload
          };

        case 'ADD_TO_PROGRESS':
          return {
            ...state,
            books: toggleStatus(state.books, action.id, 'inProgress')
          }

        case 'ADD_TO_DONE':
          return {
            ...state,
            books: toggleStatus(state.books, action.id, 'done')
          }

        case 'ADD_TO_READ':
          return {
            ...state,
            books: toggleStatus(state.books, action.id, 'toRead')
          }
    
        default:
          return state;
      }
}


const toggleStatus = (books, id, newStatus) => {
  const idx = books.findIndex((item) => item.id === id);
  const item = { ...books[idx], status: newStatus } ;

  return [
    ...books.slice(0, idx),
    item,
    ...books.slice(idx + 1)
  ];
};

export default bookList