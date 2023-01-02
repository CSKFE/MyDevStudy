import React, { useEffect, useState, useRef } from 'react';
import defaultAxios from 'axios';

defaultAxios.defaults.withCredentials = true;

const useAxios = (options, axiosinstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });

  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  }
  useEffect(() => {
    axiosinstance(options).then(response => {
      setState({
        ...state,
        loading: false,
        data: response,
      })
    }).catch(error => {
      setState({
        ...state,
        loading: false,
        error
      })
    })
  }, [trigger]);

  return {...state, refetch};
}

const UseAxiosComponent = () => {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts.am/api/v2/list_movies.json" });
  console.log(`loading... ${loading}\ndata... ${data} \nerror... ${error}`);
  return (
    <>
      <h1>Hello UseAxiosComponent</h1>
      <button onClick={refetch}>reFetch</button>
    </>
  );
};

export default UseAxiosComponent;