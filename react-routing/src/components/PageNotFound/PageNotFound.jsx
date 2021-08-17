import React from 'react';
import s from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={s.container}>
      <h1>Oops! It seems you got lost...</h1>
      <img src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif" alt="404" width="400px" height="400px" />
    </div>
  );
};

export default PageNotFound;
