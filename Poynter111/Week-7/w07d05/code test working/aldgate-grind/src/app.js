import angular from 'angular';
import MainCtrl from './controllers/main';

import './assets/scss/style.scss';

angular.module('aldgateGrind', [])
  .controller('MainCtrl', MainCtrl);
