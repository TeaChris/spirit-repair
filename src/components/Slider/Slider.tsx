import React from 'react';
import Slider from 'react-slick';
import LazyLoad from 'react-lazyload';
import Spinner from '../../components/Spinner/Spinner';

type SliderProp = {
  Component: any;
  data: any;
};

export default function SimpleSlider({ Component, data }: SliderProp) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map((item: any) => {
        return (
          <LazyLoad
            key={item.id}
            height={100}
            offset={[-100, 100]}
            placeholder={<Spinner />}
          >
            <Component data={item} key={item.id} />
          </LazyLoad>
        );
      })}
    </Slider>
  );
}
