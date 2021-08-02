import React from 'react';

function PlayedCount({ playedCounter }) {
  return (
    <button className="played">
      <span className="fas fa-play">&nbsp;&nbsp;</span>
      {playedCounter}
    </button>
  );
}

export default PlayedCount;
