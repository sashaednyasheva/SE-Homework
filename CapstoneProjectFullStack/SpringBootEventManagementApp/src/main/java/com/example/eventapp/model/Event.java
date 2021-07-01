package com.example.eventapp.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
//@Table(name="events")
public class Event {
	
			@Id
			@GeneratedValue(strategy = GenerationType.IDENTITY)
			private Long id;   
			
			@Column(name = "event_name")
			private String eventName;

			@Column(name = "description")
			private String eventDescription;

			@Column(name = "invoice_num")
			private int invoiceNumber;
			
			@Column(name = "event_budget")
			private int eventBudget;
			
			@Column(name = "event_manager")
			private String eventManager;
			
			@Column(name = "event_status")
			private String eventStatus;
		
			@Column(name = "department")
			private String department;
			
			@JsonFormat(pattern = "yyyy-mm-dd")
			private Date startDate;
			
			@JsonFormat(pattern = "yyyy-mm-dd")
			private Date endDate;
					
			public Event() {
	
			}
		
		
			public int getEventBudget() {
				return eventBudget;
			}

			public void setEventBudget(int eventBudget) {
				this.eventBudget = eventBudget;
			}

			public String getEventManager() {
				return eventManager;
			}



			public void setEventManager(String eventManager) {
				this.eventManager = eventManager;
			}



			public String getEventStatus() {
				return eventStatus;
			}



			public void setEventStatus(String eventStatus) {
				this.eventStatus = eventStatus;
			}



			public String getDepartment() {
				return department;
			}



			public void setDepartment(String department) {
				this.department = department;
			}



			public Date getStartDate() {
				return startDate;
			}



			public void setStartDate(Date startDate) {
				this.startDate = startDate;
			}



			public Date getEndDate() {
				return endDate;
			}



			public void setEndDate(Date endDate) {
				this.endDate = endDate;
			}

			public Long getId() {
				return id;
			}

			public void setId(Long id) {
				this.id = id;
			}

			public String getEventName() {
				return eventName;
			}

			public void setEventName(String eventName) {
				this.eventName = eventName;
			}

			public String getEventDescription() {
				return eventDescription;
			}

			public void setEventDescription(String eventDescription) {
				this.eventDescription = eventDescription;
			}

			public int getInvoiceNumber() {
				return invoiceNumber;
			}

			public void setInvoiceNumber(int invoiceNumber) {
				this.invoiceNumber = invoiceNumber;
			}
	
			
			
}





