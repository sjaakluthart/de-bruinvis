import React from 'react';
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
