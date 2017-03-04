import React from 'react';
import I18n from './i18n';

function CopyRight() {
  return (
    <section className="copyright">
      <h1>
        &copy;
        De Bruinvis {new Date().getFullYear()} - De Ruyterstraat 104 1792 AN Oudeschild, Texel
      </h1>
      <h2>
        <I18n text="design" />: Anna Bruin -
        <I18n text="realisation" />: Sjaak Luthart
      </h2>
    </section>
  );
}

export default CopyRight;
