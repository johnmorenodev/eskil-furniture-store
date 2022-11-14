//CSS
import './Account.css';

//THIRD PARTY
import { Outlet } from 'react-router-dom';

const Account = () => {
  return (
    <div className='my-account'>
      <Outlet />
    </div>
  );
};

export default Account;
