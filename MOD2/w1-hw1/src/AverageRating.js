import React from 'react';
import AvgImage from './2.png';

class AverageRating extends React.Component {
  render(){
      return(
    <div>
      <h3>Average Rating</h3>
      <h2>{this.props.rating}</h2>
      <img src={AvgImage} alt="Average Rating" width="120px" height="100px" />
    </div>
  )
}
}

export default AverageRating;