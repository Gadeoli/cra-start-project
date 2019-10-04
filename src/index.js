import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import AlertsToasts from 'views/components/custom/Messages/AlertsToasts/AlertsToasts';

// Bootstrap 4
// ReactStrap installed to
import 'bootstrap/dist/css/bootstrap.css';

//Internacinalization
import { addLocaleData, IntlProvider } from 'react-intl';
import { getLocale } from './configs/config';
import localeEn from 'react-intl/locale-data/en'
import localePt from 'react-intl/locale-data/pt'
import messagesPtBr from './locales/pt-BR';
import messagesEnUs from './locales/en-US';

// internacionalization config
const locale = getLocale();
const language = locale.split(/[-_]/)[0];  // language without region code
addLocaleData([...localeEn, ...localePt]);
const messages = {
    'pt-BR': messagesPtBr,
    'en-US': messagesEnUs,
};

// toast config
let alertRef = AlertsToasts.getRef();
const options = {
    position: 'bottom right',
    timeout: 5000,
    offset: '20px',
    transition: 'scale',
    zIndex: 1000000
}


ReactDOM.render(
    <IntlProvider locale={language} messages={messages[locale]}>
        <AlertProvider template={AlertTemplate} {...options} ref={alertRef}><App /></AlertProvider>
    </IntlProvider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
