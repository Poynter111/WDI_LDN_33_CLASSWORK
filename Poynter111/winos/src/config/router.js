secureState.$inject = ['$q', '$auth', '$state'];

function secureState($q, $auth, $state) {
  return new $q((resolve) => {
    if($auth.isAuthenticated()) return resolve();

    $state.go('login');
  });
}

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
      controller: 'WinesNewCtrl as winesNew',
      resolve: { secureState }
    })
    .state('winesShow',{
      url: '/wines/:id',
      templateUrl: 'views/wines/show.html',
      controller: 'WinesShowCtrl as winesShow'
    })
    .state('winesEdit',{
      url: '/wines/:id/edit',
      templateUrl: 'views/wines/edit.html',
      controller: 'WinesEditCtrl as winesEdit',
      resolve: { secureState }
    })
    .state('login',{
      url: '/login',
      templateUrl: 'views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register',{
      url: '/register',
      templateUrl: 'views/auth/register.html',
      controller: 'RegisterCtrl as register'
    });

  $urlRouterProvider.otherwise('/');
}

export default Router;
