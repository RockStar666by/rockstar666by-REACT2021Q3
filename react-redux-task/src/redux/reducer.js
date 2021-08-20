import { GET_ARTICLES, SET_SEARCHVALUE, SET_SORTBY, SET_CURRENTPAGE, SET_POSTSPERPAGE, SET_ISLOADING } from './actions';

const initialState = {};

function data(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCHVALUE:
      return { ...state, searchValue: action.searchValue };
    case SET_SORTBY:
      return { ...state, sortBy: action.sortBy };
    case SET_CURRENTPAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_POSTSPERPAGE:
      return { ...state, postsPerPage: action.postsPerPage };
    case SET_ISLOADING:
      return { ...state, isLoading: action.isLoading };
    case GET_ARTICLES:
      return { ...state, data: action.data.articles, totalResults: action.data.totalResults };
    default:
      return state;
  }
}

export default data;
