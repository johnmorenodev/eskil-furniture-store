import React from 'react';
import { Outlet } from 'react-router-dom';

import './Account.css';

const Account = () => {
  return (
    <div className='my-account'>
      <Outlet />
    </div>
  );
};

export default Account;
