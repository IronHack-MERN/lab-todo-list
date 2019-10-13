import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import tasks from './data/tasks.json';
import Button from './components/Button';

let toDoList = tasks;

class App extends Component {
  state = {
    list: toDoList,
  } 

  handleFormSubmit = (event) => {
    event.preventDefault();
    // const newElement = {'name': 'newElement', 'status': 'to-dododo'};
    const { list, title } = this.state;

    this.setState({
      list: [...list, title]
    });
  }

  handleChange(event) {
    let { name, value } = event.target;
    // console.log('******************************');
    // console.log('name ', {name});
    // console.log('value ', {value});
    // console.log('******************************');
    this.setState({
      [name]: { name: value, status: 'to-do'},
    });
  }

  removeTask = (task) => {
    const {list} = this.state;
    console.log('antes de borrar', list);

    const taskFiltered = tasks.filter( (taskActual) => taskActual.name !== task.name);
    console.log(taskFiltered);
    
    this.setState({
      list: taskFiltered,
    })
  };

  render() {
    const { form } = this.state;
    
    return (
      <div className="wrapper">
        <h1>To-Do List ...</h1>
        <div className="form-new-task">
        <form onSubmit={this.handleFormSubmit}>
            <label>New task</label>
            {/* <input type="text" name="title" value={this.state.task} onChange={(e) => this.handleChange(e)} /> */}
            <input type = 'submit' value='Submit'/>
          </form>
        </div>

        <div className="wrapper">
        <table>
          <tr>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        
      {this.state.list.map((list, index) => {
        return (
          <List
            key={`${list.name}-${index}`} 
            name={list.name} 
            status={list.status}
            // remove={this.removeTask.bind(this.state, list)}
            remove = {this.removeTask.bind(this.state, list)}
          />
        );
      })}
      </table>
    </div>
          </div>

    );
  }
}

export default App;
