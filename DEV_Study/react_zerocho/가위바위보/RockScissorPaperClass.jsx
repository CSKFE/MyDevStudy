import React, { Component } from 'react';

const rspCoord = {
  바위:'0',
  가위:'-142px',
  보:'-284px'
};

const scores = {
  가위:1,
  바위:0,
  보:-1 
}


const compChoice = (imgCoord) => {
  return Object.entries(rspCoord).find((v) => v[1] === imgCoord)[0];
};

class RockScissorsPaper extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: '0',
  };

  interval;

  //onClick으로 이벤트 핸들링 시 고차함수로 변환하여 코드를 깔끔하게 만들어주자
  onClickBtn = () => (choice) => {
    clearInterval(this.interval);
    const { imgCoord } = this.state;
    const myScore = scores[choice];
    const compScore = scores[compChoice(imgCoord)];
    const diff = myScore - compScore;
    if(diff === 0) {
      this.setState({result: '무승부'})
    } else if([-1, 2].includes(diff)) {
      this.setState(prev => ({ result: '승리', score: prev.score + 1 }))
    } else {
      this.setState(prev => ({ result: '패배', score: prev.score - 1 }))
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHandle, 100);
    }, 2000)
  }

  changeHandle = () => {
    const { imgCoord } = this.state;
      if(imgCoord === rspCoord.바위) 
      {
        this.setState({imgCoord: rspCoord.가위});
      } else if(imgCoord === rspCoord.가위) 
      {
        this.setState({imgCoord: rspCoord.보});
      } else if(imgCoord === rspCoord.보) 
      {
        this.setState({imgCoord: rspCoord.바위});
      }
  }

  componentDidMount() { // 비동기 요청을 주로 처리한다
    this.interval = setInterval(this.changeHandle, 100); // 비동기처리인 setInterval
  }

  componentWillUnmount() { // 비동기요청의 clean-up
    clearInterval(this.interval); // clean-up을 해주지않으면 브라우저를 종료하기전까지는 무한적으로 실행됨 
  }


  render(){
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) no-repeat ${imgCoord} 0`}}></div>
        <div className="btn-wrap">
          <button className='rock' onClick={this.onClickBtn('바위')}>rock</button>
          <button className='scissors' onClick={this.onClickBtn('가위')}>scissors</button>
          <button className='paper' onClick={this.onClickBtn('보')}>paper</button>
        </div>
        <div>{result}</div>
        <div>{score} 점!</div>
      </>
    );
  }
}

export default RockScissorsPaper;