import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_LIST } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_LIST);
    const jsonData = await data.json();
    // console.log(jsonData);
    // console.log(jsonData.items);
    setVideos(jsonData.items);
  }

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map(video => 
      <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video}/></Link>
      )}
    </div>
  )
}

export default VideoContainer;
