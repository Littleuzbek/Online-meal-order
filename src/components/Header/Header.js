import React, { Fragment, useEffect } from 'react';
import classes from './Header.module.css';
import mainPicture from '../../pictures/main.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <Fragment>
      <header className={classes.navBar}>
        <p data-aos='fade-right' data-aos-duration='2000' className="font-effect-3d">
          Food de la PLAZA
        </p>
        <ul>
          <li>
            <a href='#s'>about</a>
          </li>
        </ul>
      </header>

      <div className={classes.headerPic}>
        <img src={mainPicture} alt='Delicious food' />
      </div>
    </Fragment>
  );
};

export default Header;
