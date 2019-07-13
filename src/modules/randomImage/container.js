import React from 'react';
import { useFetch } from '../../api';
import { RandomImage } from './component';
import { Loading } from '../../loading.component';

const getRandomValue = array => array[Math.floor(Math.random() * array.length)];

export const RandomImageContainer = () => {
  const [data, loading] = useFetch();
  const { hits = [] } = data || {};
  if (loading || !hits.length) return <Loading />;

  const randomImage = getRandomValue(
    hits.filter(hit => hit.tags.includes('otter'))
  );

  return <RandomImage {...randomImage} />;
};
