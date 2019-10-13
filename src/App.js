import React, { Component } from 'react';
import './App.css';
import List from './components/List'
import tasks from './data/tasks.json';

let toDoList = tasks;

class App extends Component {
  state = {
    list: toDoList,
    title: '',
    status: 'to-do'
  } 

  // handleForm(event) {
  //   console.log(event.target.value)
  //   this.setState({
  //     form: event.target.value
  //   })
  // }

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
    console.log('******************************');
    console.log('name ', {name});
    console.log('value ', {value});
    console.log('******************************');
    this.setState({
      [name]: { name: value, title: 'to-do'},
    });
  }

  // addTaskToList = () => {
  //   const newElement = {'name': 'newElement', 'status': 'to-dododo'};
  //   const { list } = this.state;
  //   this.setState({
  //     list: [newElement, ...newElement]
  //   })
  // }

  render() {
    const { form } = this.state;
    
    return (
      <div className="wrapper">
        <h1>To-Do List ...</h1>
        <div className="form-new-task">
        <form onSubmit={this.handleFormSubmit}>
            <label>New task</label>
            {/* <input placeholder="write a new task"></input> */}
            {/* <input value={form} onChange={this.handleForm}/> */}
            {/* <input type='text' name = 'task' checked={this.state.task}/> */}
            <input type="text" name="title" value={this.state.task} onChange={(e) => this.handleChange(e)} />
            <input type = 'submit' value='Submit'/>
          </form>
        </div>

        <table>
          <tr>
            <th>Description</th>
               <th>Status</th>
          </tr>
        
      {this.state.list.map((list, index) => {
        return (
          <List
            index={list.index}
            name={list.name} 
            status={list.status}
          />
        );
      })}
      </table>
    </div>
    );
  }
}

export default App;
