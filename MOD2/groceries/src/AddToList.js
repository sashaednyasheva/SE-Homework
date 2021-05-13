import React from 'react'

class AddToList extends React.Component{
    constructor(){
        super();
        this.state = {
        item: " ", 
        units: " ", 
        quantity: 0, 
        isPurchased: false
        }
    }

    handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
	}

    render() {
        return (
        <div className="formDiv">
            <form className="form" onSubmit = {(event) => this.props.handleSubmit(this.state, event)}>
            <label>
            Item:
            <input type="text" name="item" value={this.state.item} onChange={this.handleChange} />
            </label>  
            <label>
            Qty:
            <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
            </label> 
            <label>
            Units:
            <input type="text" name="units" value={this.state.units} onChange={this.handleChange}/>
            </label> 
            <label>    
            Purchase Item?
            <select type="text" name="isPurchased" value={this.state.isPurchased} onChange={this.handleChange}>
            <option value="true">True</option>
            <option value="false">False</option>
            </select>    
            </label> 
            <input type="submit" value="ADD TO CART"/>
            </form>        
        </div>
        )
    }
}

export default AddToList;
