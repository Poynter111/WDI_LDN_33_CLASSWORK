WinesShowCtrl.$inject = ['Wine', '$state'];

function WinesShowCtrl(Wine, $state) {
  this.wine = {};
  Wine.findById($state.params.id)
    .then(res => this.wine = res.data);

  function handleDelete(){
    Wine.removeById($state.params.id)
      .then(() => $state.go('winesIndex'));
  }
  this.handleDelete = handleDelete;
}

export default WinesShowCtrl;
