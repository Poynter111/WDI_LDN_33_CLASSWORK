import React from 'react';
import ReactDOM from 'react-dom';

// import PageHead from './components/PageHead';
import GenInfo from './components/GenInfo';
// import DonerInfo from './components/DonerInfo';

class App extends React.Component { //Creating a new constructor function.

  constructor(){
    super();

    this.state = {
      genInfo: [{
        day: 'Monday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }, {
        day: 'Tuesday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }, {
        day: 'Wednesday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }, {
        day: 'Thursday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }, {
        day: 'Friday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }, {
        day: 'Saturday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }, {
        day: 'Sunday',
        hours: '10:00 a.m. - 5:30 p.m.'
      }]
    }, {
      admission: [{
        age: 'Adult',
        price: '£25'
      }, {
        age: 'Seniors',
        price: '£17'
      }, {
        age: 'Students',
        price: '£12'
      }]
    };
  }


  render(){
    return(
      <div>
        <h1>General Info:</h1>
        <div>
          <ul>
            {this.state.genInfo.map(general =>
              <GenInfo
                key={general.day}
                day={general.day}
                hours={general.hours}
              />
            )}
          </ul>
        </div>
        <h1>Sugested Admission:</h1>
        <div>
          <ul>
            {this.state.admission.map(admiss =>
              <GenInfo
                key={admiss.age}
                age={admiss.age}
                price={admiss.price}
              />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
