import angular from 'angular';
// 3rd party dependincies
import '@uirouter/angularjs';
import 'satellizer';
//Our modules
import Router from './config/router';
import Auth from './config/auth';
import 'bulma';
import './scss/style.scss';
import MainCtrl from './controllers/main';
import WinesIndexCtrl from './controllers/wines/index';
import WinesNewCtrl from './controllers/wines/new';
import WinesShowCtrl from './controllers/wines/show';
import WinesEditCtrl from './controllers/wines/edit';
import LoginCtrl from './controllers/auth/login';
import RegisterCtrl from './controllers/auth/register';
//Models
import Wine from './models/wine';
//Directives
import gMap from './directives/gMap';
import gAutocomplete from './directives/gAutocomplete';

angular.module('winos', ['ui.router', 'satellizer'])
  .config(Router)
  .config(Auth)
  .controller('MainCtrl', MainCtrl)
  .controller('WinesIndexCtrl', WinesIndexCtrl)
  .controller('WinesNewCtrl', WinesNewCtrl)
  .controller('WinesShowCtrl', WinesShowCtrl)
  .controller('WinesEditCtrl', WinesEditCtrl)
  .controller('LoginCtrl', LoginCtrl)
  .controller('RegisterCtrl', RegisterCtrl)
  .service('Wine', Wine)
  .directive('gMap', gMap)
  .directive('gAutocomplete', gAutocomplete);
