// AngularJS
import angular from 'angular';
import '@uirouter/angularjs';

// Boxicons
import 'boxicons/css/boxicons.min.css';
import 'boxicons/dist/boxicons.js';

// Styles
import '../styles/theme/dark.mode.css';
import '../styles/theme/light.mode.css';
import '../styles/theme/colors.css';
import '../styles/reset.css';

//Modules
import './modules/root.module.js';
import './modules/client.module.js';

// Controllers
import './controllers/root.controller.js';
import './controllers/home.controller.js';

//Services
import './services/dateTime.service.js';
import './services/http.service.js';
import './services/weatherData.service.js';
import './services/translation.service.js';

// Routes
import './config/router.config.js';

// Components
import './components/header-component/header.component.css';
import './components/header-component/header.component.js';

import './components/informations-component/informations.component.css';
import './components/informations-component/informations.component.js';

import './components/timer-component/timer.component.css';
import './components/timer-component/timer.component.js';

import './components/location-component/location.component.css';
import './components/location-component/location.component.js';

import './components/week-component/week.component.css';
import './components/week-component/week.component.js';

import './components/image-component/image.component.css';
import './components/image-component/image.component.js';

import './components/forecast-component/forecast.component.css';
import './components/forecast-component/forecast.component.js';

import './components/search-button-component/search-button.component.css';
import './components/search-button-component/search-button.component.js';