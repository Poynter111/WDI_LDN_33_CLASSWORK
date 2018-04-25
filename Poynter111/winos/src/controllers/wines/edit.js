WinesEditCtrl.$inject = ['Wine', '$state'];

function WinesEditCtrl(Wine, $state){
  this.wine = {};
  Wine.findById($state.params.id)
    .then(res => this.wine = res.data);

  function handleUpdate(){
    Wine.updateById($state.params.id, this.wine)
      .then(() => $state.go('winesShow', { id: $state.params.id }));
  }
  this.handleUpdate = handleUpdate;
}

export default WinesEditCtrl;
