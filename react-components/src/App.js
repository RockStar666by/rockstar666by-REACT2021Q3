import React from 'react';
import CardList from './components/Cards/CardList';
import SearchBar from './components/SearchBar/SearchBar';

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('./assets', false, /\.(png|jpe?g|svg|ico)$/));

function App() {
  const albums = [
    {
      id: 1,
      artist: 'Metallica',
      name: 'Ride The Lightning',
      year: 1984,
      like: '807.3K',
      played: '19.5M',
      cover: './assets/1.jpg',
    },
    {
      id: 2,
      artist: 'Foo Fighters',
      name: 'The Colour And The Shape',
      year: 1997,
      like: '1.8M',
      played: '26.5M',
      cover: './assets/2.jpg',
    },
    {
      id: 3,
      artist: 'Ozzy Osbourne',
      name: 'Blizzard Of Ozz',
      year: 1980,
      like: '608.4K',
      played: '4.9M',
      cover: './assets/3.jpg',
    },
    {
      id: 4,
      artist: 'Pain',
      name: 'Nothing Remains The Same',
      year: 2002,
      like: '187.7K',
      played: '3.5M',
      cover: './assets/4.jpg',
    },
    {
      id: 5,
      artist: 'Slayer',
      name: 'God Hates Us All',
      year: 2001,
      like: '326.5K',
      played: '8.2M',
      cover: './assets/5.jpg',
    },
    {
      id: 6,
      artist: 'Van Halen',
      name: '1984',
      year: 1984,
      like: '674.8K',
      played: '5.5M',
      cover: './assets/6.jpg',
    },
    {
      id: 7,
      artist: 'Children Of Bodom',
      name: 'Follow The Reaper',
      year: 2001,
      like: '376.1K',
      played: '9.4M',
      cover: './assets/7.jpg',
    },
    {
      id: 8,
      artist: 'AC/DC',
      name: 'Highway To Hell',
      year: 1979,
      like: '932.5K',
      played: '12.9M',
      cover: './assets/8.jpg',
    },
    {
      id: 9,
      artist: "Guns 'n' Roses",
      name: 'Appetite For Destruction',
      year: 1987,
      like: '1.9M',
      played: '31M',
      cover: './assets/9.jpg',
    },
    {
      id: 10,
      artist: 'In Flames',
      name: 'Clayman',
      year: 2000,
      like: '351.5K',
      played: '12.3M',
      cover: './assets/10.jpg',
    },
    {
      id: 11,
      artist: 'Nine Inch Nails',
      name: 'With Teeth',
      year: 2005,
      like: '708.8K',
      played: '18.5M',
      cover: './assets/11.jpg',
    },
    {
      id: 12,
      artist: 'Alice In Chains',
      name: 'Dirt',
      year: 1992,
      like: '1.1M',
      played: '21.8M',
      cover: './assets/12.jpg',
    },
    {
      id: 13,
      artist: 'Pantera',
      name: 'Vulgar Display of Power',
      year: 1992,
      like: '539.8K',
      played: '12.8M',
      cover: './assets/13.jpg',
    },
    {
      id: 14,
      artist: 'Soundgarden',
      name: 'A-Sides',
      year: 1997,
      like: '168.4',
      played: '2.4M',
      cover: './assets/14.jpg',
    },
    {
      id: 15,
      artist: 'The Offspring',
      name: 'Americana',
      year: 1998,
      like: '1.8M',
      played: '28M',
      cover: './assets/15.jpg',
    },
  ];

  return (
    <div>
      <div className="searchWrapper">
        <SearchBar />
      </div>
      <CardList albums={albums} />
    </div>
  );
}

export default App;
