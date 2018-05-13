LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state){
  this.date = {};

  function handleLogin (){
    $auth.login(this.data)
      .then(() => $state.go('winesIndex'));
  }
  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('winesIndex'));
  }



  this.handleLogin = handleLogin;
  this.authenticate = authenticate;
}

export default LoginCtrl;
