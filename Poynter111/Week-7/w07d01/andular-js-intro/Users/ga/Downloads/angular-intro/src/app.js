import angular from 'angular';
import MainCtrl from './controllers/main';
import donerCtrl from './controllers/doner';
import genInfoCtrl from './controllers/genInfo';
import './scss/style.scss';

angular.module('angularIntro', [])
  .controller('MainCtrl', MainCtrl)
  .controller('donerCtrl', donerCtrl)
  .controller('genInfoCtrl', genInfoCtrl);
