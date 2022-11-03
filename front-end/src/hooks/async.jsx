import React from "react";

export default function useAsync(handler, immediate = true) {

  const [status, setStatus] = React.useState({

    data: null,
    loading: true,
    error: null
  });

  const { data, loading, error } = status;

  const run = async (...args) => {

    setStatus({ data, loading: true, error });

    try {

      const data = await handler(...args);
      setStatus({ data, loading: false, error });
      return data;

    } catch (error) {

      setStatus({ data, loading: false, error });
      throw error;
    };
  };

  React.useEffect(() => {

    if (immediate) run();

  }, []);

  return {

    data,
    loading,
    error
  };
};