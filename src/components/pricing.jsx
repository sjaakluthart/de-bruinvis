import React from 'react';
import familie from '../assets/images/familiebruin.jpg';

function Pricing() {
  const style = {
    backgroundImage: `url(${familie})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '300px',
    padding: 0
  };
  return (
    <article className="pricing">
      <section>
        <h1>Prijs indicatie</h1>
        <section>
          <div>
            <h1>Laagseizoen</h1>
            <p>weekend: € 290,- midweek: € 290,- week: € 530,-</p>
          </div>
          <div>
            <h1>Middenseizoen</h1>
            <p>weekend: € 330,- midweek: € 330,- week: € 625,-</p>
          </div>
          <div>
            <h1>Hoogseizoen</h1>
            <p>week: € 760,- (alleen hele week mogelijk)</p>
          </div>
        </section>
        <section>
          <p>
            Kosten voor de eindschoonmaak zijn: € 50,-.
            De huur is excl. toeristenbelasting € 1,75,- per persoon per nacht,
            u betaalt maximaal voor 7 nachten.
            Exclusief huisdieren (€ 3,00 p.d.p.n. max. 2 huisdieren).
          </p>
          <p>
            Het weekend loopt van vrijdag 16:00 uur t/m maandag 10:00 uur.
            Een midweek loopt van maandag 16:00 uur t/m vrijdag 10:00 uur.
          </p>
        </section>
        <h2>
          Neem voor meer informatie, definitieve prijzen en beschikbaarheid contact met ons op.
        </h2>
      </section>
      <section style={style} />
    </article>
  );
}

export default Pricing;
