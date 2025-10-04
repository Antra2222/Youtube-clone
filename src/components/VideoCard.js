import React from 'react'

const VideoCard = ({ info }) => {
    const snippet = info?.snippet;
    const statistics = info?.statistics;
  
    if (!snippet) return null;
  
    const { channelTitle, title, thumbnails } = snippet;
    const thumbnailUrl = thumbnails?.medium?.url;
  
    return (
      <div className="p-2 m-2 w-72 shadow-lg">
        <img alt="thumbnail" src={thumbnailUrl} className="rounded-md" />
        <ul className="mt-2">
          <li className="font-bold text-sm">{title}</li>
          <li className="text-xs text-gray-600">{channelTitle}</li>
          <li className="text-xs text-gray-500">{statistics?.viewCount} views</li>
        </ul>
      </div>
    );
  };
  

export default VideoCard
