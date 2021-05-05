import React from 'react';
import ReviewImage from './1.png';

class Reviews extends React.Component {
  render(){
      return(
    <div>
      <h3>Reviews</h3>
      <h2>{this.props.reviews}</h2>
      <img src={ReviewImage} alt="Review" width="120px" height="100px" />
    </div>
  )
}
}
export default Reviews;