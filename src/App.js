import React, { Component } from 'react';
import './App.css';
import List from './components/List'

const toDoList = [
  {'name': 'Koans-lab', 'status': 'done'},
  {'name': 'sort()', 'status': 'inprogress'},
  {'name': 'slice()', 'status': 'to-do'},
  {'name': 'map()', 'status': 'done'}, 
  {'name': 'filter()', 'status': 'to-do'}, 
  {'name': 'promisses', 'status': 'done'}, 
  {'name': 'async-away', 'status': 'in-progress'}, 
  {'name': 'flex', 'status': 'done'}, 
  {'name': 'bootstrap', 'status': 'to-do'}
];

class App extends Component {

  state = {
    list: toDoList,
  } 

  render() {
    return (
      <div className="wrapper">
        <h1>To-Do List ...</h1>
        <table>
                <tr>
                    <th>Description</th>
                    <th>Status</th>
                </tr>
        
      {this.state.list.map((list, index) =>{
        return (
          <List
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
