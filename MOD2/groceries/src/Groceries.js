import React from 'react'
import groceries from './StarterGroceries'
import AddToList from './AddToList';
import DisplayList from './DisplayList';
import PurchasedList from './PurchasedList';
import HeaderImage from './4.png'

class Groceries extends React.Component{
    constructor(){
        super();
        this.state = {
        groceries: groceries,
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
	handleChange=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value})
	}

	handleSubmit=(state,event)=>{
		const newItem = { 
            item: state.item, 
			quantity: state.quantity, 
            units: state.units, 
			isPurchased: state.isPurchased === "true" ? true : false 
		}

		this.setState({
		groceries: [...this.state.groceries, newItem],
		item: '',
		quantity: 0,
        units: '',
        isPurchased:false 
        }, ()=> console.log(this.state.groceries));
       
        event.preventDefault();
    }

	render() {
        return(
            <div>
            <header>
            <img className="headerImage" src={HeaderImage} alt="Woman shopping" width="120px" height="100px" />   
            <h3 className="title">SHOPPING LIST</h3>
            <div className="paragraph">
            <p>
            Add items of choice to Cart using the form below. Only "Purchased: True" items will be added to your list.    
            You can change your Purchase selection clicking "Save For Later" button. 
            <br></br>
            Click "Update List" to see the updated list of all Purchased Items ready for Checkout.
            </p> 
            </div>
            </header>    
        <div className="main">
            <AddToList handleSubmit={this.handleSubmit}/>
            <DisplayList groceries={this.state.groceries}/>
            <PurchasedList groceries={this.state.groceries}/>
        </div> 
        </div>   
        );
    }        
}

export default Groceries;