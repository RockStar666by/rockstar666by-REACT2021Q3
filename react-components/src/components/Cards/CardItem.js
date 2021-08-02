import React from 'react';
import LikeButton from './LikeButton';
import PlayedCount from './PlayedCount';

function CardItem({ album }) {
  return (
    <div className="card">
      <img className="card-image" src={album.cover} alt={album.name} />
      <div className="album">{album.name}</div>
      <div className="artist">{album.artist}</div>
      <div className="year">{album.year}</div>
      <div className="counters">
        <LikeButton likeCounter={album.like} />
        <PlayedCount playedCounter={album.played} />
      </div>
    </div>
  );
}

export default CardItem;
