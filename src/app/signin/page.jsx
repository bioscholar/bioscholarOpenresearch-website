// Corrected 'page' component

import React from 'react';
import Signin from '@components/Auth/Signin/Signin'; // Ensure the path is correct

const Page = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default Page; // Default export is required
