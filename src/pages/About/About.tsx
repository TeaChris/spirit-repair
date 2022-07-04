import React from 'react';
import Icon from '../../components/SOAIcon/Icon';

function About() {
  return (
    <div className="row">
      <h2 className="mb-4 about-header">
        <b>ABOUT</b>
      </h2>

      <div className="col-md-1  ">
        <div className="home-buttom-icon mb-3">
          <Icon />
        </div>
      </div>
      <div className="col-sm-11  goal">
        <p>
          Spirits of Africa <b>(SOA)</b> is an NFT project that is inspired by a desire to 
          share the richness of Africa through African mythology. 
          SOA was founded by a small group of Africans that wish to educate the world about African mythology. 
        </p>
        <h3>
          <b>Goals:</b>
        </h3>
        <p>
        African mythology full of intrigue and wonder, but doesn’t get the recognition it deserves. 
        The continent is brimming with so many beautiful stories about Africa and African mythology, 
        but very often these stories are poorly expressed, or remain untold – our inspiration at <b>SOA</b> is to change that!
        </p>
        <p>
        We want to help people worldwide to discover more about Africa by providing an avenue to enable them learn about African 
        stories – when it happened, where it happened, and how it happened.
        </p>
        <p>
          Come aboard and join us tell these stories and shine the light on
          Africa.
        </p>
      </div>
    </div>
  );
}

export default About;
