import { useState } from "react";
import _ from "lodash";

function usePaginatedFetch(url, pageSize) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const paginatedData = _.chunk(data, pageSize);
    console.log(paginatedData);

    setData(paginatedData);
    setLoading(false);
  };
  useState(() => {
    getData();
  }, []);

  return [loading, data];
}

export default usePaginatedFetch;
