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
import slider11 from '../assets/images/slider11.jpg';
import slider12 from '../assets/images/slider12.jpg';
import slider13 from '../assets/images/slider13.jpg';
import slider14 from '../assets/images/slider14.jpg';
import slider15 from '../assets/images/slider15.jpg';
import slider16 from '../assets/images/slider16.jpg';

function Slider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
    autoplay: true
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
      <div className="slide">
        <div style={style} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider2})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider3})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider4})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider5})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider6})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider7})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider8})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider9})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider11})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider12})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider13})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider14})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider15})` }} />
      </div>
      <div className="slide">
        <div style={{ ...style, backgroundImage: `url(${slider16})` }} />
      </div>
    </Slick>
  );
}

export default Slider;
