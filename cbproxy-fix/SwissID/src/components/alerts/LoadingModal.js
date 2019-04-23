import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';

export const LoadingModal = ({ active, children }) => {
  return (
    <LoadingOverlay
      active={ active }
      spinner={ <BounceLoader /> }
    >
      { children }
    </LoadingOverlay>
  )
};