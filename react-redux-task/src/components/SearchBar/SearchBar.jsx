import React from 'react';
// import axios from 'axios';
import StyledContentLoader from 'styled-content-loader';
import { useDispatch, useSelector } from 'react-redux';
import Articles from '../Articles/Articles.jsx';
import s from './SearchBar.module.css';

import { getArticles, setSearchValue, setSortBy, setCurrentPage, setPostsPerPage } from '../../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValue);
  const sortBy = useSelector((state) => state.sortBy);
  const currentPage = useSelector((state) => state.currentPage);
  const postsPerPage = useSelector((state) => state.postsPerPage);
  const isLoading = useSelector((state) => state.isLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getArticles(searchValue, sortBy, currentPage, postsPerPage));
  };

  return (
    <main>
      <div className={s.searchWrapper}>
        <form className={s.searchBar} onSubmit={handleSubmit}>
          <label className={s.placeholder} htmlFor="country">
            Sort by:&nbsp; &nbsp;
            <select
              className={s.input}
              name="sortBy"
              value={sortBy}
              onChange={(event) => dispatch(setSortBy(event.target.value))}
              onBlur={(event) => dispatch(setSortBy(event.target.value))}
            >
              <option>relevancy</option>
              <option>popularity</option>
              <option>publishedAt</option>
            </select>
          </label>
          <label className={s.placeholder} htmlFor="numberOfResults">
            Results per page:&nbsp; &nbsp;
            <select
              className={s.input}
              name="numberOfResults"
              value={postsPerPage}
              onChange={(event) => dispatch(setPostsPerPage(event.target.value))}
              onBlur={(event) => dispatch(setPostsPerPage(event.target.value))}
            >
              <option>20</option>
              <option>30</option>
              <option>50</option>
            </select>
          </label>
          <label className={s.placeholder} htmlFor="pagination">
            Page #:&nbsp;
            <input
              className={s.input2}
              name="pagination"
              value={currentPage}
              onChange={(event) => dispatch(setCurrentPage(event.target.value))}
              onBlur={(event) => dispatch(setCurrentPage(event.target.value))}
            ></input>
          </label>
          <input
            name="headerSearch"
            type="text"
            id={s.headerSearch}
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => dispatch(setSearchValue(event.target.value))}
            required
          />
          <button type="submit" id={s.submit}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className={s.selectPage}></div>
      <StyledContentLoader isLoading={isLoading}>
        <Articles />
      </StyledContentLoader>
    </main>
  );
};

export default SearchBar;
