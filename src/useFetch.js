import { useEffect, useState } from "react";

const useFetch = (url)=> {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    // it fires on every render - used for fetching data
    useEffect(() => {

        const abortCont = new AbortController();

      fetch(url, {signal: abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw new Error("Oops, could not fecth the data for that resource");
          }
          return res.json();
        })
        .then((datum) => {
          setData(datum);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.message === 'AbortError'){
              console.log("Fetch Aborted")
          }else{
            setIsPending(false);
            setError(err.message);
            console.log(err.message);
          }
        });
      console.log("Blogs", data);

        return ()=> abortCont.abort();

    }, [url]);

    return {
        data,
        error, isPending
    }
}

export default useFetch;