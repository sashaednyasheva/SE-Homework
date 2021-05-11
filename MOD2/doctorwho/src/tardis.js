import React from 'react'
import DivOne from './DivOne'


class Tardis extends React.Component {
           
    constructor(props){
        super(props);
        this.state = {
        tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
              } 
        }

        // this.changeIt = this.changeIt.bind(this);
    }    
    
        changeIt = () =>{
            if (this.state.tardis.caps) {
              this.setState({
                tardis: {
                  name: this.state.tardis.name.toLowerCase(),
                  caps: false
                }
              })
            } else {
              this.setState({
                tardis: {
                  name: this.state.tardis.name.toUpperCase(),
                  caps: true
                }
              })
            }
          }


   render(){
     return(
             <DivOne name={this.state.tardis.name}/>
     )
   }
  
  }
  
  export default Tardis;