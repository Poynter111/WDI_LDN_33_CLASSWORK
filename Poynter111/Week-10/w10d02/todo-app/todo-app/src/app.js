import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';
import './assets/scss/style.scss';
import TaskForm from './components/TaskForm';
import Task from './components/Task';

class App extends React.Component{

    state = {
      todos: [
        {completed: false}
      ],
      newTask: ''
    }

    handleChange = ({ target: { value, name } }) => {
      this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const task = { task: this.state.newTask, completed: false };
      const todos = [...this.state.todos, task];
      this.setState({todos, newTask: '' });
    }

    toggleCompleted = (index) => {
      const todos = this.state.todos.map((todo, i) => {
        if(i === index) todo.completed = !todo.completed;
        return todo;
      });
      this.setState({ todos });
    }

    remainingTasks = () => {
      return this.state.todos.filter(task => !task.completed).length;
    }

  //-------------------START OF RENDER--------------------------------------------
    render(){
      return <main>
        <h1>You have {this.remainingTasks()} job!</h1>
        <ul>
          {this.state.todos.map((todo, i) =>
            <Task
              key={i}
              task={todo.task}
              completed={todo.completed}
              toggleCompleted={() => this.toggleCompleted(i)}
            />
          )}
        </ul>
        <TaskForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTask={this.state.newTask}
        />
      </main>;
    }
//----------------------END OF RENDER-------------------------------------------
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
