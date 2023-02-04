import React from 'react';
import { hydrate, render } from 'react-dom';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import store from './store';
import App from './components/app';
import './meyer-reset.css';
import './index.css';
import nl from './i18n/nl.json';
import de from './i18n/de.json';
import LanguageChanger from './components/language-changer';

i18next.init({
  lng: navigator.language || navigator.userLanguage,
  fallbackLng: 'nl',
  resources: {
    de: {
      translation: de
    },
    nl: {
      translation: nl
    }
  }
});

const app = (
  <Provider store={store}>
    <LanguageChanger>
      <App />
    </LanguageChanger>
  </Provider>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
