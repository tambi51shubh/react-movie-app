import { useEffect, useState} from 'react';
import { TRENDING_API } from '../constants';
import { fetchMedia } from '../utilities';


const useFetchList = (mediaType) => {
    const [list, setList] = useState([]);
    const [currPage, setCurrPage] = useState(1);
    const loadMore = () => {
        setCurrPage(currPage + 1);
    }

    useEffect(() => {
        if (!mediaType){
            return; 
        }
        const fetchData = async () => {
            const result = await fetchMedia(TRENDING_API(mediaType, currPage));
            setList(list.concat(result.results));
        }
        fetchData();     
    }, [mediaType, currPage])

  return {
      list,
      loadMore
  };
  
}

export default useFetchList;