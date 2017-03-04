import React from 'react';
import teso from '../assets/images/teso.jpg';
import boten from '../assets/images/boten.jpg';
import kaapskil from '../assets/images/kaapskil.jpg';
import ecomare from '../assets/images/ecomare.jpg';
import fietsen from '../assets/images/fietsen.jpg';
import I18n from './i18n';

function getBackgroundImage(image) {
  return `linear-gradient(223deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url(${image})`;
}

const style = {
  backgroundImage: getBackgroundImage(teso),
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function Activities() {
  return (
    <article className="activities">
      <h1>{<I18n text="activities" />}</h1>
      <section>
        <a style={style} href="https://www.teso.nl/nl/" target="_blank" rel="noopener noreferrer">TESO</a>
        <a style={{ ...style, backgroundImage: getBackgroundImage(boten) }} href="http://www.hetwadop.nl/" target="_blank" rel="noopener noreferrer"><I18n text="shrimp" /></a>
        <a style={{ ...style, backgroundImage: getBackgroundImage(kaapskil) }} href="http://www.kaapskil.nl/" target="_blank" rel="noopener noreferrer">Kaapskil</a>
        <a style={{ ...style, backgroundImage: getBackgroundImage(ecomare) }} href="http://www.ecomare.nl/" target="_blank" rel="noopener noreferrer">Ecomare</a>
        <a style={{ ...style, backgroundImage: getBackgroundImage(fietsen) }} href="http://www.waddenhaventexel.nl/havenplezier/de-bevoorrading" target="_blank" rel="noopener noreferrer"><I18n text="bikes" /></a>
      </section>
    </article>
  );
}

export default Activities;
