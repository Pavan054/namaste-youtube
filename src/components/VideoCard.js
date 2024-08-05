import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    return (
        <div className="mx-2 my-6 w-72">
            <div>
                <img alt="thumbnail" className="rounded-lg" src={thumbnails.medium.url} />
            </div>
            <div className="mt-2 pt-2 h-26">
                <ul>
                    <li className="font-bold h-12 overflow-hidden">{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount} Views</li>
                </ul>
            </div>
        </div>
    )
}

export const AdVideoCard = ({info}) => {
    return <div className="border border-gray-400">
        <VideoCard info={info} />
    </div>
}

export default VideoCard;
