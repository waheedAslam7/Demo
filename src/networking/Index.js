import axios from 'axios';
import {useEffect, useState} from 'react';
import {API_BASE_URL, API_VERSION} from '~/Config/env';



export async function network_Request(method, route, params) {
  const options = {
    method: method,
    url: `${API_BASE_URL}${API_VERSION}${route}`,
    params,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return await axios.request(options);
}

export const useFetch = url => {
  const [isLoading, setisLoading] = useState(false);
  const [apiData, setapiData] = useState(null);
  const [serverError, setserverError] = useState(null);
  useEffect(() => {
    setisLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setapiData(response);
        setisLoading(false);
      } catch (error) {
        setserverError(error);
        setisLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return{isLoading,apiData,serverError}
};
