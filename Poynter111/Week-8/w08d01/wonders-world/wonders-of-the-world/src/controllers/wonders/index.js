WondersIndexCtrl.$inject = ['$http'];

function WondersIndexCtrl($http){
  this.all = [];
  $http.get('/api/wonders')
    .then( res => this.all = res.data);
  console.log(this);
}


export default WondersIndexCtrl;
