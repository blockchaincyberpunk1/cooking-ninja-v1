import { useState, useEffect } from 'react';

// Custom hook for fetching data from a URL
export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  // Function to handle POST requests
  const postData = (postData) => {
    setOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsPending(true);
      setError(null); // Reset error before new request

      try {
        // Spread the options within the fetch call
        const response = await fetch(url, { ...options, method, signal });
        if (!response.ok) { // Check if the response status is not OK
          throw new Error(`Network response was not ok (${response.status})`);
        }
        const json = await response.json();

        setIsPending(false);
        setData(json);
      } catch (err) {
        if (!signal.aborted) { // Only update state if the fetch wasn't aborted
          setIsPending(false);
          setError(err.message); // Set the error message from the exception
        }
      }
    };

    // Conditional fetch based on request method
    if (method === 'GET' || (method === 'POST' && options.body)) {
      fetchData();
    }

    // Cleanup function to abort the fetch on unmount or when the url/method changes
    return () => {
      controller.abort();
    };

  // Dependencies array includes method and options to handle updates to these values
  }, [url, method, options]);

  return { data, isPending, error, postData };
};
