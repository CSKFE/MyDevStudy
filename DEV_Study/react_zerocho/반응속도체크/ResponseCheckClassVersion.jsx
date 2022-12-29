import React, { Component } from 'react';

class ResponseCheckClass extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClickScreen = (e) => {
    const { state, message, result } = this.state;
    if(state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '보라색으로 변하면 클릭해주세요'
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '클릭하세요!'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1500) + 2500);
    } else if(state === 'ready') {
      this.setState({
        state: 'waiting',
        message: '너무 빨랐습니다! 보라색일때 클릭하세요'
      })
      clearTimeout(this.timeout);
    } else if(state === 'now') {
      this.endTime = new Date();
      this.setState((prev) => ({
        state: 'waiting',
        message: '클릭해서 시작하세요',
        result: [...prev.result, this.endTime - this.startTime],
      }))
    }
  };
  reset = () => {
    this.setState({
      result: []
    });
  }
  renderAverage = () => {
    const { result } = this.state;
    return result.length !== 0 
      && 
      <>
        <div className='ever-time'>평균 시간: {(this.state.result.reduce((pre, cur) => pre + cur) / this.state.result.length.toFixed(2))}ms</div>
        <button className='reset' onClick={this.reset}>reset</button>
      </>
  }

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={this.onClickScreen}
        >
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheckClass;