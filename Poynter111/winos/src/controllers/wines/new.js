WinesNewCtrl.$inject = ['Wine', '$state'];

function WinesNewCtrl(Wine, $state) {
  this.data = {};

  function handleCreate(){
    Wine.create(this.data)
      .then(() => $state.go('winesIndex'));
  }
  this.handleCreate = handleCreate;
}

export default WinesNewCtrl;
