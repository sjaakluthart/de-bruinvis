import React from 'react';
import familie from '../assets/images/familiebruin.jpg';
import I18n from './i18n';

function Pricing() {
  return (
    <article className="pricing">
      <section>
        <h1><I18n text="pricing" /></h1>
        <section>
          <div>
            <h1><I18n text="low" /></h1>
            <p><I18n text="low-pricing" /></p>
          </div>
          <div>
            <h1><I18n text="mid" /></h1>
            <p><I18n text="mid-pricing" /></p>
          </div>
          <div>
            <h1><I18n text="high" /></h1>
            <p><I18n text="high-pricing" /></p>
          </div>
        </section>
        <section>
          <p><I18n text="pricingParagraph1" /></p>
          <p><I18n text="pricingParagraph2" /></p>
        </section>
        <h2><I18n text="pricingHeader" /></h2>
      </section>
      <img src={familie} className="hero" alt="Familie Bruin" />
    </article>
  );
}

export default Pricing;
