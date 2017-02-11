import React from 'react';
import Slick from 'react-slick';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import slider4 from '../assets/images/slider4.jpg';
import slider5 from '../assets/images/slider5.jpg';
import slider6 from '../assets/images/slider6.jpg';
import slider7 from '../assets/images/slider7.jpg';
import slider8 from '../assets/images/slider8.jpg';
import slider9 from '../assets/images/slider9.jpg';
import slider10 from '../assets/images/slider10.jpg';

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
    backgroundImage: `url(${slider1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '350px'
  };

  return (
    <Slick {...settings}>
      <div style={style} />
      <div style={{ ...style, backgroundImage: `url(${slider2})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider3})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider4})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider5})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider6})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider7})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider8})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider9})` }} />
      <div style={{ ...style, backgroundImage: `url(${slider10})` }} />
    </Slick>
  );
}

export default Slider;
