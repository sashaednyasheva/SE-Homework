import React from 'react';

class SentimentAnalysis extends React.Component {
  render(){
      return(
    <div>
      <h3>Sentiment Analysis</h3>
      <h2>{this.props.num1}</h2>
      <h2>{this.props.num2}</h2>
      <h2>{this.props.num3}</h2>
    </div>
  )
}
}

export default SentimentAnalysis;