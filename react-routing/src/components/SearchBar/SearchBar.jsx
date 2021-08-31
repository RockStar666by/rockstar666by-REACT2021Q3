import React, { useState } from 'react';
import axios from 'axios';
import Articles from '../Articles/Articles.jsx';
import s from './SearchBar.module.css';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState('relevancy');
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState('***');
  const [currentPage, setCurrentPage] = useState(1);
  const [current, setCurrent] = useState('***');
  const [postsPerPage, setPostsPerPage] = useState(20);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setArticles([]);
    setTotalResults(0);
    setLoading(true);
    const response = await axios.get(
      `${process.env.API_URL}v2/everything?q=${searchValue}&apiKey=${process.env.API_KEY}&sortBy=${sortBy}&pageSize=${postsPerPage}&page=${currentPage}`,
    );
    setArticles(response.data.articles);
    setTotalResults(response.data.totalResults);
    setLoading(false);
    setCurrent(currentPage);
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
              onChange={(event) => setSortBy(event.target.value)}
              onBlur={(event) => setSortBy(event.target.value)}
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
              onChange={(event) => setPostsPerPage(event.target.value)}
              onBlur={(event) => setPostsPerPage(event.target.value)}
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
              onChange={(event) => setCurrentPage(event.target.value)}
              onBlur={(event) => setCurrentPage(event.target.value)}
            ></input>
          </label>
          <input
            name="headerSearch"
            type="text"
            id={s.headerSearch}
            placeholder="Search..."
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            required
          />
          <button type="submit" id={s.submit}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className={s.selectPage}></div>
      <Articles
        articles={articles}
        loading={loading}
        currentPage={current}
        totalResults={totalResults}
        searchValue={searchValue}
        sortBy={sortBy}
        postsPerPage={postsPerPage}
      />
    </main>
  );
};

export default SearchBar;
