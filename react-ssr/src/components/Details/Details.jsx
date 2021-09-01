import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [articles, setArticles] = useState([]);

  React.useEffect(() => {
    axios.get(`${process.env.API_URL}v2/everything?q=${id}&apiKey=${process.env.API_KEY}`).then((response) => {
      setArticles(response.data.articles[0]);
    });
  }, [id]);

  return (
    <div>
      <h1>Requested topic ID: {id}</h1>
      <img src={articles.urlToImage} alt={articles.title} style={{ maxWidth: 800 }}></img>
      <div>Title: {articles.title}</div>
      <div>Author: {articles.author}</div>
      <div>Description: {articles.description}</div>
      <div>Published: {articles.publishedAt}</div>
      <div>Content: {articles.content}</div>
    </div>
  );
};

export default Details;
