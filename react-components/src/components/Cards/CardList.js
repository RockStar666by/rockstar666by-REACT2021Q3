import React from 'react';
import CardItem from './CardItem';

function CardList(props) {
  return (
    <div className="card-container">
      {props.albums.map((album) => {
        return <CardItem album={album} key={album.id} />;
      })}
    </div>
  );
}

export default CardList;
