WinesIndexCtrl.$inject = ['Wine'];

function WinesIndexCtrl(Wine) {
  this.all = [];

  Wine.find()
    .then(res => this.all = res.data);
}

export default WinesIndexCtrl;
