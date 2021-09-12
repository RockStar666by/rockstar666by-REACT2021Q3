import { configureStore } from '@reduxjs/toolkit';

import data from './redux/reducer';

const preloadedState = {
  data: [],
  searchValue: '',
  isLoading: false,
  sortBy: 'relevancy',
  currentPage: 1,
  totalResults: '***',
  postsPerPage: 20,
};

const store = configureStore({
  reducer: data,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

export default store;
