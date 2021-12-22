import React from 'react';
import aboutPic from 'assets/img/aboutImg.jpg';
import './styles.scss';

const AboutUsPage = () => {
  return (
    <section className='aboutUs'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-lg-6 col-xl-4'>
          <img src={aboutPic} alt={aboutPic} />
        </div>
        <div className='col-lg-6 col-xl-5'>
          <h2>MOVIESinfo</h2>
          <p className='about__text'>
            Welcome to our splendid web-page where you can find all informations
            about your favourite movies and TV-shows. You can search various
            categories and genres according to your wishes and taste. We add new
            releases to be always updated in the world of cinema. We hope this
            site would help you to watch only best production and spend your
            time with pleasure and joy. We invite you to use this database and
            enjoy your time learning new amazing information about movies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
