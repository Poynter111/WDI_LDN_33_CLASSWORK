
import angular from 'angular';
// 3rd party dependincies
import '@uirouter/angularjs';

//Our modules
import Router from './config/router';
import 'bulma';
import WinesIndexCtrl from './controllers/wines/index';

angular.module('winos', ['ui.router'])
  .config(Router)
  .controller('WinesIndexCtrl', WinesIndexCtrl);
