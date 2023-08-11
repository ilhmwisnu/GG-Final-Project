import { useState, useEffect } from "react";
import { client } from "./http_client";

const useFetch = (endpoint) => {

  let [isLoading, setIsLoading] = useState(false);
  let [data, setData] = useState(null);
  let [error, setError] = useState(null);

  useEffect( () => {
    async function getData(){
      setIsLoading(true)
      try {
        let res = await client.get(endpoint)
        setData(res.data.data)
        console.log(res.data);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError(error)
      }
    }

    getData()
  }, [endpoint])

  return { data, isLoading, error }
};

export default useFetch
