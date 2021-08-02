import React from 'react';

function SearchBar() {
  return (
    <form className="search-bar">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search music:</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Rick Astley - Never Gonna Give You Up"
        name="search"
        autoComplete="off"
      />
      <button type="submit" id="submit">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
