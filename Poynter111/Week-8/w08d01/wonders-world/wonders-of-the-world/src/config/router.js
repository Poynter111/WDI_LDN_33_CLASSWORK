Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('wondersIndex', {
      url: '/wonders',
      templateUrl: '/views/wonders/index.html',
      controller: 'WondersIndexCtrl as wondersIndex'
    })
    .state('wonderShow', {
      url: '/wonders/:id',
      templateUrl: '/views/wonders/show.html',
      controller: 'WondersShowCtrl as wonderShow'
    });

  $urlRouterProvider.otherwise('/wonders');
}

export default Router;
