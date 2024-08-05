import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className="w-48 shadow-lg min-h-screen">
        <div className="py-2 px-2">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div className="py-5 px-2">
          <h1 className="font-bold">You</h1>
          <ul>
            <li>History</li>
            <li>Playlists</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
          </ul>
        </div>
        <div className="py-5 px-2">
          <h1 className="font-bold">Explore</h1>
          <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies & TV</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
          </ul>
        </div>
    </div>
  );
};

export default Sidebar;
