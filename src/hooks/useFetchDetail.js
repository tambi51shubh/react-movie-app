import { useEffect, useState } from "react";
import { fetchMedia } from "../utilities";
import { CREDITS_API, DETAIL_API, VIDEO_API } from "../constants";

const useFetchDetail = (mediaType, mediaId) => {
    const [media, setMedia] = useState({});
    const [trailer, setTrailer] = useState("");
    const [credits, setCredits] = useState({});

    const videoTrailer = (trailerstr) => {
        const videoUrl = ` https://www.youtube.com/watch?v=${trailerstr}`
        return videoUrl;
        }
    
    useEffect(() => {
        if(!mediaType || !mediaId){
            return;
        }
        const fetchDetail = async () => {
            const [details, videos, creditInfo] = await Promise.all ([fetchMedia(DETAIL_API(mediaId, mediaType)), fetchMedia(VIDEO_API(mediaId, mediaType)), fetchMedia(CREDITS_API(mediaId, mediaType))]);
            console.log(details, videos, creditInfo);
            setMedia(details);
            const video = videos.results.find((video) => video.type === "Trailer");
            video && setTrailer(videoTrailer(video.key));
            setCredits(creditInfo);
        }
        fetchDetail();
    },[mediaId, mediaType])
    
    return {
        media,
        trailer, 
        credits
    };
}

export default useFetchDetail;