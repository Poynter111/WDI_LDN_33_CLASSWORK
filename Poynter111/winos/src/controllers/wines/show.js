WinesShowCtrl.$inject = ['Wine', '$state','$http'];

function WinesShowCtrl(Wine, $state, $http) {
  this.wine = {};
  this.forecast = {};
  this.date = {};

  Wine.findById($state.params.id)
    .then(res => this.wine = res.data)
    .then(() => $http.get('/api/forecast', {
      params: {
        lat: this.wine.location.lat,
        lng: this.wine.location.lng
      }
    }))
    .then(res => this.forecast = res.data);


  function handleDelete(){
    Wine.removeById($state.params.id)
      .then(() => $state.go('winesIndex'));
  }

  function handleCommentCreate(){
    Wine.commentCreate($state.params.id, this.data)
      .then(res => this.wine = res.data);
  }

  function handleCommentDelete(comment){
    Wine.commentDelete($state.params.id, comment._id)
      .then(res => this.wine = res.data);
  }

  this.handleDelete = handleDelete;
  this.handleCommentCreate = handleCommentCreate;
  this.handleCommentDelete = handleCommentDelete;
}

export default WinesShowCtrl;
