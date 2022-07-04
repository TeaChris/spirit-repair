import React from 'react';
type cardProps = {
  name: string;
  description: string;
};

function Card({ name, description }: cardProps) {
  function getAnimation() {
    const animationList = [
      'zoom-in-right',
      'zoom-in-left',
      'slide-up',
      'flip-right',
      'fade-up-right',
      'fade-down-left',
      'zoom-out',
    ];
    return animationList[Math.floor(Math.random() * 7)];
  }

  return (
    <div
      className="text-center text-uppercase sango-card "
      data-aos={getAnimation()}
    >
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
