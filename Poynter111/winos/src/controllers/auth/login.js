LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state){
  this.date = {};

  function handleLogin (){
    $auth.login(this.data)
      .then(() => $state.go('winesIndex'));
  }
  this.handleLogin = handleLogin;
}

export default LoginCtrl;
