import React, { Component } from 'react'
import EventService from '../services/EventService'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

export default class ListEventsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            events: []
        }
        this.addEvent = this.addEvent.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
    }

    updateEvent(id){
        this.props.history.push(`/update_event/${id}`);
    }

    componentDidMount(){
        EventService.getEvents().then((res) => {
            this.setState({ events: res.data});
        });
    }

    addEvent(){
        this.props.history.push(`/add_event`);
    }

    deleteEvent(id){
        EventService.deleteEvent(id).then( res => {
            this.setState({events: this.state.events.filter(event => event.id !== id)});
        });
    }
    viewEvent(id){
        this.props.history.push(`/event/${id}`);
    }


    render() {
        return (
            <div>
                <br></br>
                 <h3 className="text-center">EVENTS LIST</h3>
                 {/* <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEvent}> ADD EVENT </button>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> INVOICE NUMBER</th>
                                    <th> EVENT NAME</th>
                                    {/* <th> DESCRIPTION</th> */}
                                    {/* <th>START DATE</th>
                                    <th>END DATE</th>
                                    <th>EVENT TYPE</th>
                                    <th>EVENT MANAGER</th>
                                    <th>EVENT BUDGET</th>
                                    <th>EVENT STATUS</th> */}
                                    <th> OPTIONS</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.events.map(
                                        event => 
                                        <tr key = {event.id}>
                                             <td> {event.invoiceNumber}</td>
                                             <td> {event.eventName} </td>   
                                             {/* <td> {event.eventDescription}</td> */}
                                             {/* <td>{event.startDate}</td>
                                             <td>{event.endDate}</td>
                                             <td>{event.department}</td>
                                             <td>{event.eventManager}</td>
                                             <td>{event.eventBudget}</td>
                                             <td>{event.eventStatus}</td> */}
                                             <td>
                                             <Button variant="primary" size="sm" style={{marginLeft: "8px"}} onClick={ () => this.viewEvent(event.id)} > VIEW </Button>
                                             <Button variant="info" size="sm" style={{marginLeft: "8px"}} onClick={ () => this.updateEvent(event.id)} > UPDATE </Button>
                                             <Button variant="danger" size="sm" style={{marginLeft: "8px"}} onClick={ () => this.deleteEvent(event.id)} > DELETE </Button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>

                 </div>

            </div>
        )
    }
}