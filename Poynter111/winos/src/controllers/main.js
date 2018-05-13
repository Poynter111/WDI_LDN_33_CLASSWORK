MainCtrl.$inject = ['$transitions', '$auth', '$state'];


function MainCtrl($transitions, $auth, $state){
  this.isHome = true;
  this.navBarIsOpen = false;
  this.isAuthenticated = $auth.isAuthenticated;

  $transitions.onSuccess({}, (transition) => {
    this.isHome = (transition.to().name === 'home');
    this.navBarIsOpen = false;
  });

  function toggleNav(){
    this.navBarIsOpen = !this.navBarIsOpen;
  }

  function logout(){
    $auth.logout();
    $state.go('home');
  }

  this.toggleNav = toggleNav;
  this.logout = logout;
}

export default MainCtrl;
