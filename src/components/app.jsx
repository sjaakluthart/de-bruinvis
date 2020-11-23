import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Slider from './slider';
import About from './about';
import Activities from './activities';
import Pricing from './pricing';
import Contact from './contact';
import Footer from './footer';
import CopyRight from './copyright';

function App() {
  return (
    <main>
      <Helmet title="Vakantiehuisje De Bruinvis" description="Vakantiehuisje De Bruinvis staat in het rustige havenplaatsje Oudeschild. Het is een zeer goed gerestaureerd, autheniek, vrijstaand en sfeervol vissershuisje voor 4 a 5 personen." />
      <Header />
      <Slider />
      <About />
      <Activities />
      <Pricing />
      <Contact />
      <Footer />
      <CopyRight />
    </main>
  );
}

export default App;
