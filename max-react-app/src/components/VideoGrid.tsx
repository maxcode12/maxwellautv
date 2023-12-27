import React, { useEffect, useState } from 'react'
import { Text } from '@chakra-ui/react';
import apiClient from '../services/api-client';
interface Videos{
    id:number;
    name:string;
}

interface FetchVideosResponse{
    count: number;
    next:string;
    previous: string;
    results: Videos[]
}

const VideoGrid = () => {

    const [videos, setVideos] = useState<Videos[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchVideosResponse>('/games')
        .then(res=>setVideos(res.data.results))
        .catch(err => setError(err.message));
    })
  return (
<>
{error && <Text>{error}</Text>}
    <ul>
       {videos.map(video => <li key={video.id}>{video.name}</li>)} 
    </ul>
</>
    
  )
}

export default VideoGrid