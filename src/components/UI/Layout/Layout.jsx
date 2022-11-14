//REACT COMPONENTS
import Header from '../../shared/Header/DesktopHeader/Header';
import NewsLetterSection from '../../shared/NewsLetter/NewsLetterSection';
import FooterSection from '../../shared/Footer/FooterSection';
import Wrapper from '../Wrapper/Wrapper';

//THIRD PARTY
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
        <NewsLetterSection />
        <FooterSection />
      </Wrapper>
    </>
  );
};

export default Layout;
