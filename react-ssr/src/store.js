import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

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

export default (state = preloadedState) => {
  const store = createStore(data, state, composeWithDevTools(applyMiddleware(thunk)));
  return store;
};

// const store = configureStore({
//   reducer: data,
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState,
// });

// export default { store, preloadedState };
