import React from 'react';
import Slick from 'react-slick';
import placeholder from './assets/images/placeholder.jpg';

function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true
  };
  return (
    <Slick {...settings}>
      <div><img src={placeholder} alt="placeholder" /></div>
      <div><img src={placeholder} alt="placeholder" /></div>
      <div><img src={placeholder} alt="placeholder" /></div>
      <div><img src={placeholder} alt="placeholder" /></div>
      <div><img src={placeholder} alt="placeholder" /></div>
      <div><img src={placeholder} alt="placeholder" /></div>
      <div><img src={placeholder} alt="placeholder" /></div>
    </Slick>
  );
}

export default Slider;
