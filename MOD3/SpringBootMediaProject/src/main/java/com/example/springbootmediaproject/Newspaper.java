package com.example.springbootmediaproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component

public class Newspaper {
	private String nname; 
	private String frequency;
	private int pages;
	
	@Autowired
	public AdCampaign adcampaign;
	
	public String getNname() {
		return nname;
	}
	public void setNname(String nname) {
		this.nname = nname;
	}
	public String getFrequency() {
		return frequency;
	}
	public void setFrequency(String frequency) {
		this.frequency = frequency;
	}
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}
	
	public void newsInfo() {
		System.out.println("Publication Frequency: "+ this.frequency);
		System.out.println("Amount of pages: "+this.pages);
	}
	
	public void newsAd() {
		System.out.println("Newspaper Title: "+ this.nname);
		adcampaign.adInfo();
		adcampaign.showBudget();
	}
	
}
