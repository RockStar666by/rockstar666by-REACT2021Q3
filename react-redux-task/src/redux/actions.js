import axios from 'axios';

export const GET_ARTICLES = 'GET_ARTICLES';
export const SET_SEARCHVALUE = 'SET_SEARCHVALUE';
export const SET_SORTBY = 'SET_SORTBY';
export const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
export const SET_POSTSPERPAGE = 'SET_POSTSPERPAGE';
export const SET_ISLOADING = 'SET_ISLOADING';

export function setSearchValue(value) {
  return { type: SET_SEARCHVALUE, searchValue: value };
}

export function setSortBy(value) {
  return { type: SET_SORTBY, sortBy: value };
}

export function setCurrentPage(value) {
  return { type: SET_CURRENTPAGE, currentPage: value };
}

export function setPostsPerPage(value) {
  return { type: SET_POSTSPERPAGE, postsPerPage: value };
}
export function setIsLoading(value) {
  return { type: SET_ISLOADING, isLoading: value };
}

export function getArticles(searchValue, sortBy, currentPage, postsPerPage) {
  return async function (dispatch) {
    dispatch(setIsLoading(true));
    await axios
      .get(
        `${process.env.API_URL}v2/everything?q=${searchValue}&apiKey=${process.env.API_KEY}&sortBy=${sortBy}&pageSize=${postsPerPage}&page=${currentPage}`,
      )
      .then((res) => dispatch({ type: GET_ARTICLES, data: res.data }));
    dispatch(setIsLoading(false));
  };
}
