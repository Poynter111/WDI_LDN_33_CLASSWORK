import React from 'react';
import ReactDOM from 'react-dom';

import Student from './components/Student';

class App extends React.Component { //Creating a new constructor function.

  constructor(){
    super();

    this.state = {
      students: [{
        name: 'Andrew Xu',
        github: 'chen-yangxu'
      }, {
        name: 'James',
        github: 'jcaruana09'
      }, {
        name: 'Caroline Roden',
        github: 'CarolineR94'
      }
      ]
    };
  }

  componentWillMount(){
    console.log('WILL MOUNT');
  }
  componentDidMount(){
    console.log('DID MOUNT');
  }
  componentWillUpdate(){
    console.log('WILL UPDATE');
  }
  componentDidUpdate(){
    console.log('WILL UPDATE');
  }

  render(){
    console.log('RENDER');
    return(
      <div>
        <h1>WDI-33</h1>
        {this.state.students.map(student =>
          <Student
            key={student.github}
            name={student.name}
            github={student.github}
          />
        )}
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
