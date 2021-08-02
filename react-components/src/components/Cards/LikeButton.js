import React from 'react';

function LikeButton({ likeCounter }) {
  return (
    <button className="like">
      <span className="fas fa-heart">&nbsp;&nbsp;</span>
      {likeCounter}
    </button>
  );
}

export default LikeButton;
