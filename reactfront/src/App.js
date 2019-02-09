import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state={
        people:[]
      }
  }

 getPeoples = () =>{
    axios.get('/users')
    .then(response=>{
      this.setState({
        people:response.data.body
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  componentDidMount(){
    this.getPeoples()
  }

  render() {
    console.log(this.state)
    return (
      <>
      <div className="App">
        this is the app
      </div>
      </>
    );
  }
}

export default App;
