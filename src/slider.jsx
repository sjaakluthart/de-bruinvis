import React from 'react';
import Slick from 'react-slick';
import placeholder from './assets/images/placeholder1.jpg';
import beeld1 from './assets/images/beeld1.jpg';
import beeld2 from './assets/images/beeld2.jpg';
import beeld3 from './assets/images/beeld3.jpg';
import beeld4 from './assets/images/beeld4.jpg';

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

  const style = {
    backgroundImage: `url(${placeholder})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '350px'
  };

  return (
    <Slick {...settings}>
      <div style={style} />
      <div style={{ ...style, backgroundImage: `url(${beeld1})` }} />
      <div style={{ ...style, backgroundImage: `url(${beeld2})` }} />
      <div style={{ ...style, backgroundImage: `url(${beeld3})` }} />
      <div style={{ ...style, backgroundImage: `url(${beeld4})` }} />
    </Slick>
  );
}

export default Slider;
