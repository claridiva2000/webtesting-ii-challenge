import React, { Component } from 'react';
import Display from './Display';

export class Dashboard extends Component {
  state = {
    balls: 0,
    strikes: 0,
    hits: 0
  };

  ball = () => {
    if (this.state.balls < 4) {
      this.setState({
        balls: this.state.balls + 1
      });
    } else {
      this.setState({
        balls: this.state.balls * 0
      });
    }
  };

  strike = () => {
    if (this.state.strikes < 3) {
      this.setState({
        strikes: this.state.strikes + 1
      });
    } else {
     this.setState({
       strikes: this.state.strikes *0
     })
    }
  };

  hit =() =>{
    this.setState({
      hits: this.state.hits + 1
    })
  }

  reset=()=>{
    this.setState({
      hits: this.state.hits * 0,
      balls: this.state.balls * 0,
      strikes: this.state.strikes * 0
    })
  }

  render() {
    return (
      <div>
        <h1>Score</h1>
        {/* <p>strikes:{this.state.strikes} Balls:{this.state.balls} Hits: {this.state.hits}</p> */}
        <button data-testid="ballbtn" onClick={this.ball}>Ball</button>
        <button onClick={this.strike}>Strike</button>
        <button onClick={this.hit}>Hit</button>
        <button onClick={this.reset}>Reset</button>

        <Display balls={this.state.balls} strikes={this.state.strikes} hits={this.state.hits} />
      </div>
    );
  }
}

export default Dashboard;
