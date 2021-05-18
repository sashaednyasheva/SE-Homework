import React from 'react';

class Score extends React.Component{
  constructor(props){
    super(props);
    this.state={score:0}
  }
  
//   changeScore = (amt) => {
//     this.setState({ 
//         score: this.state.score + amt
// 	});
//   }

  scoreIncrease = () => {
    this.setState({
      score: this.state.score + this.props.points
    });
  }
 
  scoreDecrease = () => {
    this.setState({
      score: this.state.score - this.props.points
    });
  }

  scoreReset = () => {
    this.setState({score:0, points:0});
  }

  render(){
    return(
      <div className="score">
            <h3>Score: {this.state.score}</h3>
            <div>
            <button id="dec" onClick={this.scoreDecrease}>Decrease</button>
			<button id="inc" onClick={this.scoreIncrease}>Inscrease</button>
			<button id="reset" onClick={this.scoreReset}>Reset</button>
            </div>
      </div>
    );
  }
}
export default Score;

