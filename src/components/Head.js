import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    const searchSuggestionsTimer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
      }
    }, 200 );

    return () => {
      clearTimeout(searchSuggestionsTimer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
      const jsonData = await data.json();
      setSuggestions(jsonData[1]);

      dispatch(
        cacheResults({
          [searchQuery]: jsonData[1]
        })
      );
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-2">
      <div className="flex col-span-1 py-2">
        <img className="h-6 cursor-pointer" alt="menu" onClick={() => toggleMenuHandler()} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&s" />
        <img className="h-6 mx-4" alt="youtube-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png?20230929095411" />
      </div>
      <div className="col-span-10 px-10 py-2">
        <div>
          <input className="w-2/3 py-2 px-4 border border-gray-400 rounded-l-full h-8" type="text" placeholder="Search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)} 
          onBlur={() => setShowSuggestions(false)} />
          <button className="h-8 px-4 border border-gray-400 bg-gray-100 rounded-r-full">Search</button>
        </div>
        <div className="fixed bg-white w-[44rem] shadow-lg rounded-xl">
          <ul>
            {showSuggestions && suggestions.map(s => <li className="px-4 py-1 hover:bg-gray-200" key={s} >{s}</li>)}
          </ul>
        </div>
      </div>
      <div className="col-span-1 py-2">
        <img className="h-8" alt="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQajVijyoJgMl3Gpyve3xw1osi4bljAFkRVaQ&s" />
      </div>
    </div>
  )
}

export default Head
