import {useState, useEffect} from 'react';
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
     

    const options = {
      method: "GET",
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {
        ...query,
        // query: "Python developer in Texas, USA",
        // page: "1",
        // num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": "d130ff0b5emshcba3a285810c5e6p13e348jsnedaccefbac5b",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert('Something went wrong')
        } finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData()
    };

    return {data, error, refetch, isLoading}
}

export default useFetch;