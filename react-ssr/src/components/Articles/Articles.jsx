import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Articles.module.css';

const Articles = () => {
  const articles = useSelector((state) => state.data);
  const currentPage = useSelector((state) => state.currentPage);
  const totalResults = useSelector((state) => state.totalResults);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div>
      Page&nbsp;{currentPage}&nbsp;of&nbsp;{totalResults}
      <div className={s.container}>
        {articles.map(({ author, title, description, publishedAt, urlToImage }, index) => {
          return (
            <div className={s.wrapper} key={index}>
              <Link style={{ textDecoration: 'none' }} to={`/details/${title}`}>
                <img className={s.image} src={urlToImage} alt={title}></img>
                <div className={s.alldesc}>
                  <div className={s.title}>{title}</div>
                  <div className={s.description}>{description}</div>
                  <div className={s.author}>by {author}</div>
                  <div className={s.published}>{publishedAt.slice(0, -4).replace('T', '  ')}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
