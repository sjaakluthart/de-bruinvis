import React from 'react';

function CopyRight() {
  return (
    <section className="copyright">
      <h1>
        &copy;
        De Bruinvis {new Date().getFullYear()} - De Ruyterstraat 104 1792 AN Oudeschild, Texel
      </h1>
      <h2>
        Vormgeving: Anna Bruin -
        Realisatie: Sjaak Luthart
      </h2>
    </section>
  );
}

export default CopyRight;
