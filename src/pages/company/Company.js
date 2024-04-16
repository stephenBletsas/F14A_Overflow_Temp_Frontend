import React from 'react';
import { useParams } from 'react-router-dom';

const Company = () => {
  const { query } = useParams();

  return (
    <div>
      <h1>Company</h1>
      <p>Results for: {query}</p>
      {/* Implement your search logic here */}
    </div>
  );
};

export default Company;
