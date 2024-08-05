import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsList from './CommentsList';
import { COMMENTS_MOCK_DATA } from '../utils/constants';
import LiveChat from './LiveChat';


const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[]);

  return (
    <div className="px-5 my-2 w-full">
      <div className="flex w-full">
        <div className="">
          <iframe className="rounded-xl"
          width="1100" 
          height="600" 
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div className="py-2 my-2 border border-gray-100">
        <p className="text-2xl font-bold">Comments:</p>
        <CommentsList comments={COMMENTS_MOCK_DATA} />
      </div>
    </div>
  )
}

export default WatchPage
