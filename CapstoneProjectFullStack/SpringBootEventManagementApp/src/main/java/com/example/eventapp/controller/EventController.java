package com.example.eventapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.eventapp.exception.ResourceNotFoundException;
import com.example.eventapp.model.Event;
import com.example.eventapp.repository.EventRepository;


@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/")

public class EventController {

	@Autowired
	EventRepository eventRepository;
	
	//get all events 
	@GetMapping("/events")
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}
	
	@PostMapping("/add_event")
	public Event createEvent(@RequestBody Event event) {
		return eventRepository.save(event);
	}
	
	@GetMapping("/event/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable long id){
		Event i = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Event was not found"));
		return ResponseEntity.ok(i);
	}
	
	@GetMapping("/event_invoice/{invoiceNumber}")
	public List<Event> getEventbyInvoiceNumber(@PathVariable int invoiceNumber){
		List<Event> events = eventRepository.findByInvoiceNumber(invoiceNumber);
		if(events.isEmpty()) {
			System.out.println(new ResourceNotFoundException ("Event with invoice number "+ invoiceNumber+ "was not found"));
		}
		return eventRepository.findByInvoiceNumber(invoiceNumber);
	}
	
	@PutMapping("/update_event/{id}")
	public ResponseEntity<Event> updateEvent(@PathVariable long id, @RequestBody Event event){
		Event e = eventRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException ("Event not found"));
		e.setEventName(event.getEventName());
		e.setEventDescription(event.getEventDescription());
		e.setInvoiceNumber(event.getInvoiceNumber());
		e.setStartDate(event.getStartDate());
		e.setEndDate(event.getEndDate());
		e.setDepartment(event.getDepartment());
		e.setEventBudget(event.getEventBudget());
		e.setEventManager(event.getEventManager());
		e.setEventStatus(event.getEventStatus());
		
		Event updatedEvent = eventRepository.save(e); 
		return ResponseEntity.ok(updatedEvent);
	}
	
	@DeleteMapping("/delete_event/{id}")
	public String deleteEvent(@PathVariable long id) {
		eventRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException ("Event not found"));
		eventRepository.deleteById(id);
		return "The event with id : " + id + "is removed from the database";
	}
		
}



