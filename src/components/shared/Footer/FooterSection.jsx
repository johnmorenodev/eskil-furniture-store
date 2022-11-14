//CSS
import './FooterSection.css';

const FooterSection = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <img
          src='https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/eskil-logo-footer.png'
          alt='logo'
        />
        <p className='footer__credits'>
          © 2022 Made by johnmorenodev, All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
