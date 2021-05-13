import React from 'react'
import cartImage from './2.png'


class DisplayList extends React.Component{

    handleClick=(index, event)=> {
        console.log(this.props.groceries[index].isPurchased = !this.props.groceries[index].isPurchased)

    }

    render() {
        return (
            <div className="addedList">
            <h3><img src={cartImage} alt="shopping cart" width="50px" height="50px"/>All Added Items:</h3>    
            <ul className="grocery-list">
            {this.props.groceries.map((grocery, index) => 
            <li key={index}>Added to the list:  {grocery.item} , {grocery.quantity} {grocery.units}
            <button className="removeButton" onClick= { (event) => this.handleClick(index, event)}> REMOVE</button> 
            {/* {grocery.isPurchased ? "purchased" : "added"} */} </li>
        )}
        </ul>
            </div>
        )
    }
}

export default DisplayList;

