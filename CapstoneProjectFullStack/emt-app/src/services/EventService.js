import axios from 'axios';

class EventService {

    getEvents(){
        return axios.get("http://localhost:8080/api/events");
    }

    addEvent(eventObj){
        console.log(eventObj)
        return axios.post("http://localhost:8080/api/add_event", eventObj);   
    }

    getEventByInvoiceNumber(invoiceNumber){
        return axios.get("http://localhost:8080/api/event_invoice"+ '/' + invoiceNumber);
    }

    getEventById(id){
        return axios.get("http://localhost:8080/api/event"+ '/' + id );
    }

    updateEvent(eventObj, id){
        return axios.put("http://localhost:8080/api/update_event"+ '/' + id, eventObj);
    }

    deleteEvent(id){
        return axios.delete("http://localhost:8080/api/delete_event"+ '/' + id );
    }
}

export default new EventService()