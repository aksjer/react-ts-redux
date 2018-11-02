import React from 'react';

const isLoading = (loading: boolean) => {
  if (loading) {
    return <div>Loading...</div>;
  }
};

export default isLoading;
