WinesNewCtrl.$inject = ['Wine', '$state'];

function WinesNewCtrl(Wine, $state) {
  this.data = {};

  function handleCreate(){
    if(this.form.$invalid) return false;
    Wine.create(this.data)
      .then(() => $state.go('winesIndex'));
  }

  function updateLocation(location){
    console.log('updateing location -->', location);
    this.data.location = location;
    console.log('Controller date --->',this);
  }
  function isDanger(field){
    return (this.form[field].$touched || this.form.$submitted) && this.form[field].$error.required;
  }


  this.handleCreate = handleCreate;
  this.updateLocation = updateLocation;
  this.isDanger = isDanger;
}

export default WinesNewCtrl;
