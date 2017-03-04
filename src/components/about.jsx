import React from 'react';
import I18n from './i18n';
import duinen from '../assets/images/duinen.jpg';

function About() {
  const style = {
    backgroundImage: `url(${duinen})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '250px',
    padding: 0
  };
  return (
    <article className="about">
      <header>
        <h1>{<I18n text="aboutHeader1" />}</h1>
        <h2>{<I18n text="aboutHeader2" />}</h2>
      </header>
      <section>
        <h1>{<I18n text="aboutHeader3" />}</h1>
        <h2>{<I18n text="aboutHeader4" />}</h2>
        <h2>{<I18n text="aboutHeader5" />}</h2>
        <section>
          <div>
            <h3>{<I18n text="aboutHeader6" />}</h3>
            <p>{<I18n text="aboutParagraph1" />}</p>
          </div>
          <div>
            <p>{<I18n text="aboutParagraph2" />}</p>
          </div>
        </section>
        <h2>{<I18n text="aboutHeader7" />}</h2>
      </section>
      <section style={style} />
    </article>
  );
}

export default About;
