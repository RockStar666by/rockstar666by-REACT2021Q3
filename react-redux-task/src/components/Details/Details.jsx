import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const dataValue = useSelector((state) => state.data);
  const { id } = useParams();
  const articlesFiltered = dataValue.filter((data) => {
    return data.title === id;
  });
  const article = articlesFiltered[0];

  return (
    <div>
      <h1>Requested topic ID: {id}</h1>
      <img src={article.urlToImage} alt={article.title} style={{ maxWidth: 800 }}></img>
      <div>Title: {article.title}</div>
      <div>Author: {article.author}</div>
      <div>Description: {article.description}</div>
      <div>Published: {article.publishedAt}</div>
      <div>Content: {article.content}</div>
    </div>
  );
};

export default Details;
