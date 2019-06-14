import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      js_library: [
        {name: "React", votes: 0},
        {name: "Vue", votes: 0},
        {name: "Angular", votes: 0},
        {name: "Ember", votes: 0}
      ]
    };
  }

  vote(i) {
    console.log("voting has occured", i);
    let j = [...this.state.js_library];
    j[i].votes++;
    this.setState({js_library: j});
  }

  render() {
    return (
      <div>
        <h1>Vote Your JS Library!</h1>
        {
          this.state.js_library.map((j, i) =>
          <div key ={i}className= "js_library">

            <h4>{j.name}</h4>
            <button 
              onClick={this.vote.bind(this, i)}><img src="plus.png" alt="plus sign" /> Likes: {j.votes}
            </button>
            
          </div>
          )
        }
      </div>
    );

  }
}

export default App;
