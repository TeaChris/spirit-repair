import React from 'react';
import SimpleSlider from '../../components/Slider/Slider';
import Item from '../../components/HomeSLiderItem/Item';
import Mint from '../Mint/Mint';
import { sliderData } from './sliderData';
import Collections from '../Collections/Collections';
import Explore from '../Explore/Explore';
import About from '../About/About';
import Team from '../Team/Team';
import MoveToTop from '../../components/MoveToTop/ScrollToTop';
import Faq from '../../pages/Faq/Faq';
import Utility from '../Utility/Utility';

function Home() {
  return (
    <main className=" pb-4">
      <MoveToTop />
      <section className="mint" id="mint">
        <div className="container">
          <Mint />
        </div>
      </section>
      {/* <section className='hero-section' id='home'>
        <h1 className='hero-header'>
          Spirits <br /> Of <span className='text-white'>Africa</span>
        </h1>
      </section> */}
      <section id="collections" className="">
        <Collections />
      </section>
      <section className="container slider-section">
        <div className="">
          <SimpleSlider Component={Item} data={sliderData} />
        </div>
      </section>
      <section className="d-flex justify-content-center discord-button">
        <a
          href="https://discord.gg/jUPshgNuzK"
          rel="noreferrer"
          target="_blank"
          className="btn join-discord"
          data-aos="flip-right"
        >
          Join Our Discord
        </a>
      </section>
      <section className="container  " id="about">
        <About />
      </section>
      <section id="faq" className="">
        <Faq />
      </section>
      <section id="explore" className="container">
        <Explore />
      </section>
      <section className="d-flex justify-content-center discord-button">
        <a
          href="https://discord.gg/jUPshgNuzK"
          rel="noreferrer"
          target="_blank"
          className="btn join-discord"
          data-aos="flip-right"
        >
          Join Our Discord
        </a>
      </section>
      <section className="container">
        <Utility />
      </section>
      <section className="" id="about">
        <Team />
      </section>
    </main>
  );
}

export default Home;
