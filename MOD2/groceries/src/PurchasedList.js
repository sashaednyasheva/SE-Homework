import React from 'react'
import PurchaseImage from './1.png'

class PurchasedList extends React.Component{
    state = {list : []}

    handleUpdate=()=>{
        console.log("handleUpdate")
        let finalList = this.props.groceries.filter((grocery, index) => grocery.isPurchased ? true : false)
         this.setState({
            list: finalList
        })
    }

    render() {
        return (
        <div className="updatedCart">
        <h3><img src={PurchaseImage} alt="shopping cart" width="50px" height="50px"/>Update Cart:</h3> 
        <button className="updateButton" onClick = {this.handleUpdate}>UPDATE CART</button>
        {this.state.list.map((grocery,index) => <li key={index}> Purchased Item: {grocery.item} , {grocery.quantity}, {grocery.units} </li>)}
        </div>
        )
    }
}

export default PurchasedList;

