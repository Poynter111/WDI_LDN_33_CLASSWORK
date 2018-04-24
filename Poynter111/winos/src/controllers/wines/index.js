WinesIndexCtrl.$inject = ['$http'];

function WinesIndexCtrl($http) {
  this.all = [];

  $http.get('/api/wines')
    .then(res => this.all = res.data);
}

export default WinesIndexCtrl;
