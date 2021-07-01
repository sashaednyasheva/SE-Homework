import React, { Component } from 'react'
import EventService from '../services/EventService'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from '../image2.jpg'

export default class AddEventComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            eventName: '',
            eventDescription: '',
            invoiceNumber: '',
            startDate: '',
            endDate: '',
            department: '',
            eventBudget: '',
            eventManager: '',
            eventStatus: ''
        }
        this.changeEventNameHandler = this.changeEventNameHandler.bind(this);
        this.changeEventDescriptionHandler = this.changeEventDescriptionHandler.bind(this);
        this.changeInvoiceNumberHandler = this.changeInvoiceNumberHandler.bind(this);
        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.changeDepartmentHandler = this.changeDepartmentHandler.bind(this);
        this.changeEventManagerHandler = this.changeEventManagerHandler.bind(this);
        this.changeEventBudgetHandler = this.changeEventBudgetHandler.bind(this);
        this.changeEventStatusHandler =  this.changeEventStatusHandler.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
    }

    saveEvent = (e) => {
        e.preventDefault();
        let eventObj = {
            eventName: this.state.eventName, 
            eventDescription: this.state.eventDescription, 
            invoiceNumber: parseInt(this.state.invoiceNumber),
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            department: this.state.department,
            eventBudget: parseInt(this.state.eventBudget),
            eventManager: this.state.eventManager,
            eventStatus: this.state.eventStatus
            };

            EventService.addEvent(eventObj).then(res =>{
            this.props.history.push('/events')
        })
    }
    
    changeEventNameHandler= (e) => {
        this.setState({eventName: e.target.value});
    }

    changeEventDescriptionHandler= (e) => {
        this.setState({eventDescription: e.target.value});
    }

    changeInvoiceNumberHandler= (e) => {
        this.setState({invoiceNumber: e.target.value});
    }

    changeStartDateHandler = (e) => {
        this.setState({startDate: e.target.value});
    }

    changeEndDateHandler = (e) => {
        this.setState({endDate: e.target.value});
    }

    changeDepartmentHandler = (e) => {
        this.setState({department: e.target.value});
    }

    changeEventBudgetHandler = (e) => {
        this.setState({eventBudget: e.target.value});
    }

    changeEventManagerHandler = (e) => {
        this.setState({eventManager: e.target.value});
    }

    changeEventStatusHandler = (e) => {
        this.setState({eventStatus: e.target.value});
    }

    cancel(){
        this.props.history.push('/events');
    }

    render() {
        return (
                   <div className = "container">
                    <br></br>
                    <Card border="primary" style={{width: '50rem'}} className = "card col-md-6 offset-md-3 offset-md-3">
                    <Card.Img variant="top" src={Image} style={{marginTop: '8px'}}  />
                        <Card.Header>ADD A NEW EVENT</Card.Header>
                        <Card.Body>
                                    <Form>
                                        <Row className="mb-3">
                                          <Form.Group as={Col} controlId="formGridEventName">
                                            <Form.Label>Event Name</Form.Label>
                                            <Form.Control type="event_name" placeholder="Enter event name" value={this.state.eventName} onChange={this.changeEventNameHandler}/>
                                          </Form.Group>
                                          <Form.Group as={Col} controlId="formGridEventName">
                                            <Form.Label>Invoice #</Form.Label>
                                            <Form.Control type="invoice_num" placeholder="Enter Invoice # (Numbers only)" value={this.state.invoiceNumber} onChange={this.changeInvoiceNumberHandler}/>
                                          </Form.Group>  
                                        </Row>  

                                        <Form.Group className="mb-3" controlId="formGridEventDescription">
                                            <Form.Label>Event Decription</Form.Label>
                                            <Form.Control type="description" placeholder="Add notes about the event" value={this.state.eventDescription} onChange={this.changeEventDescriptionHandler}/>
                                        </Form.Group>

                                        <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridStartDate">
                                            <Form.Label>Event Start Date</Form.Label>
                                            <Form.Control type="date"  value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                          </Form.Group>
                                          <Form.Group as={Col} controlId="formGridEndDate">
                                            <Form.Label>Event End Date</Form.Label>
                                            <Form.Control type="date"  value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                          </Form.Group>    
                                        </Row>

                                        <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEventType">
                                            <Form.Label>Event Type</Form.Label>
                                            <select type ="text" value={this.state.department} onChange={this.changeDepartmentHandler}>
                                            <option>VIP Event</option>
                                            <option >Corporate and Business</option>
                                            <option >Private Event</option>
                                            <option >Seasonal</option>   
                                            <option >Other</option>  
                                            </select>
                                          </Form.Group>

                                          <Form.Group as={Col} controlId="formGridEventManager">
                                            <Form.Label>Event Manager</Form.Label>
                                            <select type ="event_manager" value={this.state.eventManager} onChange={this.changeEventManagerHandler}>
                                            <option>Sasha E.</option>
                                            <option >Peter W.</option>  
                                            <option >Camila C.</option>
                                            <option >Beverly S.</option>
                                            <option >John M.</option>   
                                            </select>
                                          </Form.Group>    
                                        </Row>

                                        <Row className="mb-3">
                                        <Form.Group as={Col} controlId="formGridEventBudget">
                                            <Form.Label>Event Budget</Form.Label>
                                            <select type ="text" value={this.state.eventBudet} onChange={this.changeEventBudgetHandler}>
                                            <option>1000 - 5000</option>
                                            <option >5000-10000</option>
                                            <option >10000-25000</option>
                                            <option >25000-50000</option>   
                                            <option >Other</option>  
                                            </select>
                                          </Form.Group>

                                          <Form.Group as={Col} controlId="formGridEventStatus">
                                            <Form.Label>Booking Status</Form.Label>
                                            <select type ="text" value={this.state.eventStatus} onChange={this.changeEventStatusHandler}>
                                            <option>Inquiry</option>
                                            <option >Reservation</option>
                                            <option >Contract Signed/ Deposit placed</option>
                                            <option >Pain in Full</option>   
                                            </select>
                                          </Form.Group>
                                        </Row>

                                        <Button variant="outline-info" onClick={this.saveEvent}>SUBMIT</Button>
                                        <Button variant="outline-secondary" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>CANCEL</Button>
                                    </Form> 
                                    </Card.Body>                               
                </Card>
            </div>
        )
    }
}

