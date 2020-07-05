import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookStoreService from './services/bookstore-service';
import { BookStoreServiceProvider } from './components/bookstore-service-context';

import store from './store';

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookStoreServiceProvider value={bookStoreService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);