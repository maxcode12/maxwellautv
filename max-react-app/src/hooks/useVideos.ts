import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Video{
    id: number;
    name:string;
    background_image: string;
}

interface FetchVideosResponse{
    count: number;
    results: Video[];
}
const useVideos = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();


        apiClient.get<FetchVideosResponse>('/games', {
            signal: controller.signal
        })
        .then(res=>setVideos(res.data.results))
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)});
        return () => controller.abort();
    })
    return {videos, error}
}

export default useVideos;