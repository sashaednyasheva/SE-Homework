import React from 'react';
import VisitorsImage from './4.png';

class WebsiteVisitors extends React.Component {
  render(){
      return(
    <div>
      <h3>Website Visitors</h3>
      <h2>{this.props.visitors}</h2>
      <img src={VisitorsImage} alt="Web Visitors" width="600px" height="400px"/>
    </div>
  )
}
}

export default WebsiteVisitors;