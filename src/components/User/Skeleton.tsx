import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
  return (
     <Skeleton count={5} />
  );
};

export default SkeletonLoader;
