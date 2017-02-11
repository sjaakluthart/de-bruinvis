import React from 'react';
import duinen from './assets/images/duinen.jpg';

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
        <h1>
          Zin in een lekker weekendje weg of een weekje vakantie?
        </h1>
        <h2>
          Proef de sfeer van dit bijzondere en unieke huisje. Voel de vrijheid!
        </h2>
      </header>
      <section>
        <h1>Over de Bruinvis</h1>
        <h2>
          Vakantiehuisje De Bruinvis staat in het rustige havenplaatsje Oudeschild.
        </h2>
        <h2>
          Het is een zeer goed gerestaureerd, autheniek,
          vrijstaand en sfeervol vissershuisje voor 4 a 5 personen.
        </h2>
        <section>
          <div>
            <h3>
              Het huisje bestaat uit:
            </h3>
            <p>
              Een zitkamer met open haard, tv en cd-speler (gratis wifi aanwezig).
              Een eetkamer en een nieuwe authentieke, goed uitgeruste open keuken
              (vaatwasser, combi magnetron).
              Een halletje welke toegang geeft tot de wc en badkamer (douche en wastafel).
              Boven twee slaapkamers (2 x 1 en 2 x 1) en een bed op de overloop.
            </p>
          </div>
          <div>
            <p>
              Het huisje is vrijstaand met aan de achterzijde een besloten,
              grote zonnige tuin met een picknicktafel.
              Aan de voorzijde een autoloos straatje,
              een grasveld ter grootte van 2 voetbalvelden en een speeltuin.
              De Bruinvis is heel geschikt voor rustzoekers en gezinnen met jonge kinderen.
            </p>
          </div>
        </section>
        <h2>
          Waddenzee op 200m, supermarkt op 1000m,
          haven op 1200m en het strand op 10 minuten met de auto.
        </h2>
      </section>
      <section style={style} />
    </article>
  );
}

export default About;
