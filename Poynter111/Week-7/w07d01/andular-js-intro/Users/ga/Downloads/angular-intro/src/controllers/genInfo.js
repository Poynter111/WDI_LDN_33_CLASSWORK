function genInfoCtrl(){
  this.message = 'Hello World';
  this.weekdays = [{
    name: 'Monday',
    time: '10:00 a.m. - 5:30 p.m.'
  }, {
    name: 'Tuesday',
    time: '10:00 a.m. - 5:30 p.m.'
  }, {
    name: 'Wednesday',
    time: '10:00 a.m. - 5:30 p.m.'
  }, {
    name: 'Thursday',
    time: '10:00 a.m. - 5:30 p.m.'
  }, {
    name: 'Friday',
    time: '10:00 a.m. - 5:30 p.m.'
  }, {
    name: 'Saturday',
    time: '10:00 a.m. - 5:30 p.m.'
  }, {
    name: 'Sunday',
    time: '10:00 a.m. - 5:30 p.m.'
  }];
  this.admissions = [{
    age: 'Adult',
    price: '-$25'
  }, {
    age: 'Seniors',
    price: '-$17'
  }, {
    age: 'Students',
    price: '-$12'
  }];
  this.headers = {
    info: 'General Info:',
    hours: 'Hours:',
    suggested: 'Suggested Admission'
  };
}

export default genInfoCtrl;
