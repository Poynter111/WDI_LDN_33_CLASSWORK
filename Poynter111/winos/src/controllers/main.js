MainCtrl.$inject = ['$transitions'];


function MainCtrl($transitions){
  this.navBarIsOpen = false;
  this.isHome = true;


  $transitions.onSuccess({}, (transition) => {
    this.isHome = (transition.to().name === 'home');
    this.navBarIsOpen = false;
  });



  function toggleNav(){
    this.navBarIsOpen = !this.navBarIsOpen;
  }



  this.toggleNav = toggleNav;
}

export default MainCtrl;
