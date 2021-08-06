import React from 'react';
import s from './Card.module.css';

const Card = ({ item }) => {
  return (
    <div className={s.wrapper}>
      <div>Name: {item.firstName}</div>
      <div>Surname: {item.lastName}</div>
      <div>Gender: {item.gender}</div>
      <div>Birthday: {item.birthDate}</div>
      <div>Country: {item.country}</div>
    </div>
  );
};

export default Card;
