import React, { Component } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  console.log('getWinNumbers');
  const canditate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while(canditate.length > 0) {
    shuffle.push(canditate.splice(Math.floor(Math.random() * (canditate.length)), 1),[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumber = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumber, bonusNumber];
}

class LottoClass extends Component {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonusNumber: null,
    redo: false
  }

  timeouts = [];

  runTimeouts = () => {
    console.log('runTimeouts')
    const { winNumbers } = this.state;
    for(let i = 0; i < this.state.winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        this.setState((prev) => {
          return {
            winBalls: [...prev.winBalls, winNumbers[i]]
          }
        })
      }, (i + 1) * 1000)
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState({
        bonusNumber: winNumbers[6],
        redo: true
      })
    }, 7000)
  }

  componentDidMount() {
    console.log('DidMount');
    this.runTimeouts();
  }
  
  componentDidUpdate(prevState, prevProps) {
    console.log('DidUpdate');
    if(this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  componentWillUnmount() {
    this.timeouts.forEach((v) => {
      clearTimeout(this.timeouts[v]);
    });
  }

  onClickRedo = () => {
    console.log('click Event');
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonusNumber: null,
      redo: false
    });
    this.timeouts = [];
  }

  render() {
    console.log('render');
    const { winBalls, redo, bonusNumber } = this.state;
    return (
      <>
       <div className="number-wrap">
        <p>당첨 숫자</p>
        <div className="ball-wrap">
          {winBalls.map((v, i) => <Ball key={i} number={v} />)}
        </div>
        {redo && 
          <>
            <p>보너스!</p>
            {bonusNumber && <Ball number={bonusNumber} />}
            <button onClick={this.onClickRedo}>한번 더?</button>
          </>
        }
       </div>
      </>
    )
  }
}

export default LottoClass;