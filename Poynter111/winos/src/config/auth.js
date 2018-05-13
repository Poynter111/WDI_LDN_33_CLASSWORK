Auth.$inject = ['$authProvider'];

function Auth($authProvider){
  $authProvider.loginUrl = '/api/login';
  $authProvider.signupUrl = '/api/register';

  $authProvider.github({
    clientId: '0b97edc707e9a7fd7cb7',
    url: '/api/github'
  });
}

export default Auth;
