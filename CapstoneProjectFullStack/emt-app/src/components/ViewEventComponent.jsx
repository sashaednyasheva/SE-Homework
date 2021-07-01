import React, { Component } from 'react'
import EventService from '../services/EventService'
import Card from 'react-bootstrap/Card'

export default class ViewEventComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            event: {}
        }
    }

    componentDidMount(){
        EventService.getEventById(this.state.id).then( res => {
            this.setState({event: res.data});
        })
    }

    render() {
        return (
            <div className="justify-content-center">
                <br></br>
                <Card style={{width: '35rem'}} bg="light" className = "card col-md-6 offset-md-3 offset-md-3"> 
                <Card.Body>
                    <Card.Title> { this.state.event.eventName } </Card.Title>
                    <Card.Text> <h6>Event Description:</h6> { this.state.event.eventDescription } </Card.Text>
                    <Card.Text> <h6>ID# :</h6> {this.state.id} </Card.Text>
                    <Card.Text> <h6>Invoice# : </h6> { this.state.event.invoiceNumber } </Card.Text>
                    <Card.Text> <h6>Event Start Date: </h6> { this.state.event.startDate} </Card.Text>
                    <Card.Text> <h6>Event End Date:  </h6> { this.state.event.endDate } </Card.Text>
                    <Card.Text> <h6>Event Type:</h6>  { this.state.event.department } </Card.Text>
                    <Card.Text> <h6>Event Manager:</h6>  { this.state.event.eventManager} </Card.Text>
                    <Card.Text> <h6>Event Budget: </h6> { this.state.event.eventBudget}</Card.Text>
                    <Card.Text> <h6>Booking Status: </h6> { this.state.event.eventStatus }</Card.Text>
                </Card.Body>
                </Card>

                </div>
        )
    }
}

