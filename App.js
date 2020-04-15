import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import NewComponent from './Person/NewComponent'


class App extends Component{
  constructor(props) {
  super(props);
  this.state = {
    newToDo: "",
    list: []
  };
}

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addItem(){
    const newToDo = {
      id: 1 + Math.random(),
      value: this.state.newToDo.slice()
    };
  const list = [...this.state.list];
  list.push(newToDo);

  this.setState({
    list,
    newToDo: ""
  });
} 

deleteItem(id){
  const list = [...this.state.list];
  const updatedList = list.filter(item => item.id !== id);
  this.setState({
    list: updatedList
  });
}
 
  render () {
    const st = {
      backgroundColor: 'white',
      color: 'black',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '8px'
    };


    return (
      <div className="App" >
        <NewComponent></NewComponent>
        <div>
          Enter Item...
          <br/>
          <input type="text" placeholder="Type item here..." 
          value={this.state.newToDo} onChange={e => this.updateInput("newToDo", e.target.value)}/>
          <button 
          onClick={()=> this.addItem()}>Press</button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button type="checkbox" style={st}
                  onClick={() => this.deleteItem(item.id)}>Done</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>   
    );
  
  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does it work now') );
}
}

export default App;
