Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html'
    })
    .state('winesIndex', {
      url: '/wines',
      templateUrl: 'views/wines/index.html',
      controller: 'WinesIndexCtrl as winesIndex'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
