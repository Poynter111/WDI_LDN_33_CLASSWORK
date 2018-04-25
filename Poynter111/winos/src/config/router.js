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
    })
    .state('winesNew', {
      url: '/wines/new',
      templateUrl: 'views/wines/new.html',
      controller: 'WinesNewCtrl as winesNew'
    })
    .state('winesShow',{
      url: '/wines/:id',
      templateUrl: 'views/wines/show.html',
      controller: 'WinesShowCtrl as winesShow'
    })
    .state('winesEdit',{
      url: '/wines/:id/edit',
      templateUrl: 'views/wines/edit.html',
      controller: 'WinesEditCtrl as winesEdit'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
