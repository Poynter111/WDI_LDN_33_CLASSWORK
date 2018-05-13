import angular from 'angular';

import '@uirouter/angularjs';

import Router from './config/router';
import './scss/style.scss';
import WondersIndexCtrl from './controllers/wonders/index';
import WondersShowCtrl from './controllers/wonders/show';
import gMap from './directives/gMap';

angular.module('wonders', ['ui.router'])
  .config(Router)
  .controller('WondersIndexCtrl', WondersIndexCtrl)
  .controller('WondersShowCtrl', WondersShowCtrl)
  .directive('gMap', gMap);
