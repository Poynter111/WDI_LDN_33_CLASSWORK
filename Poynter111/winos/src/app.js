import angular from 'angular';
// 3rd party dependincies
import '@uirouter/angularjs';
//Our modules
import Router from './config/router';
import 'bulma';
import './scss/style.scss';
import MainCtrl from './controllers/main';
import WinesIndexCtrl from './controllers/wines/index';
import WinesNewCtrl from './controllers/wines/new';
import WinesShowCtrl from './controllers/wines/show';
import WinesEditCtrl from './controllers/wines/edit';
//Models
import Wine from './models/wine';

angular.module('winos', ['ui.router'])
  .config(Router)
  .controller('MainCtrl', MainCtrl)
  .controller('WinesIndexCtrl', WinesIndexCtrl)
  .controller('WinesNewCtrl', WinesNewCtrl)
  .controller('WinesShowCtrl', WinesShowCtrl)
  .controller('WinesEditCtrl', WinesEditCtrl)
  .service('Wine', Wine);
