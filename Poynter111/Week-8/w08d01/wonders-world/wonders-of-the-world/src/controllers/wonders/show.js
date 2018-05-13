WondersShowCtrl.$inject = ['$http', '$state'];

function WondersShowCtrl($http, $state){
  this.wonder = {};
  $http.get(`/api/wonders/${$state.params.id}`)
    .then(res => this.wonder = res.data);
}


export default WondersShowCtrl;
