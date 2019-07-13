import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { API_KEY, API_ROOT, IMAGE_TYPE } from './constants';

const apiUrl = (query, page) =>
  `${API_ROOT}?${queryString.stringify({
    key: API_KEY,
    image_type: IMAGE_TYPE.PHOTO,
    category: 'animals',
    safesearch: true,
    page,
    q: query
  })}`;

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      console.log(apiUrl('otter'));
      const result = await fetch(apiUrl('otter')).then(response =>
        response.json()
      );
      console.log(result);
      setData(result);
      setLoading(false);
    };
    fetchImage();
  }, []);

  return [data, loading];
};
