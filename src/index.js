/* eslint react/jsx-filename-extension: [0] */
/* global navigator */
import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { Provider } from 'react-redux';
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

ReactDOM.render(
  <Provider store={store}>
    <LanguageChanger>
      <App />
    </LanguageChanger>
  </Provider>,
  document.getElementById('root')
);
