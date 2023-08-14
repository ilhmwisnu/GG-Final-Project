import { useState, useEffect } from "react";
import { client } from "./http_client";

const useIntervalFetch = (endpoint, timeout, callback) => {
  let [isLoading, setIsLoading] = useState(false);
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  useEffect(() => {
    
    let getData = async () => {
      try {
        setIsLoading(true);
        let res = await client.get(endpoint);
        let data = res.data.data;
        setData(data);
        if (callback) callback();
        console.log(res.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    let interval = setInterval(() => {
      getData();
    }, timeout);

    return ()=> clearInterval(interval)

  }, [endpoint, timeout, callback]);

  return { data, isLoading, error };
};

export default useIntervalFetch;
