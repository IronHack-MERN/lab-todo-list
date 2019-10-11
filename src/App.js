import React, { Component } from 'react';
import './App.css';
import List from './components/List'

const toDoList = [
  {'name': 'Koans-lab'},
  {'name': 'sort()'},
  {'name': 'slice()'},
  {'name': 'map()'}, 
  {'name': 'filter()'}, 
  {'name': 'promisses'}, 
  {'name': 'async-away'}, 
  {'name': 'flex'}, 
  {'name': 'bootstrap'}
];

class App extends Component {

  state = {
    list: toDoList,
  } 

  render() {
    return (
      <div className="wrapper">
        <h1>To-Do List ...</h1>
      {this.state.list.map((list, index) =>{
        return (
          
          <List
            name={list.name} 
          />
        );
      })}
    </div>
    );
  }



}

export default App;
