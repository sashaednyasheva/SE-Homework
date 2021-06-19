package com.example.springbootmediaproject;

import org.springframework.stereotype.Component;

@Component

public class AdCampaign {

	private String adname;
	private String clientname;
	private double adbudget;
	private int adpage;
	
	public String getAdname() {
		return adname;
	}
	public void setAdname(String adname) {
		this.adname = adname;
	}
	public String getClientname() {
		return clientname;
	}
	public void setClientname(String clientname) {
		this.clientname = clientname;
	}
	public double getAdbudget() {
		return adbudget;
	}
	public void setAdbudget(double adbudget) {
		this.adbudget = adbudget;
	}
	
	public int getAdpage() {
		return adpage;
	}
	public void setAdpage(int adpage) {
		this.adpage = adpage;
	}
	
	public void adInfo() {
		System.out.println("Ad Campaign Name: "+this.adname);
		System.out.println("Client: "+this.clientname);
	}
	
	public void showBudget() {
		System.out.println("Advertizing budget: "+ this.adbudget);
		System.out.println("Ad Price per page: "+ (this.adbudget/this.adpage));
	}
	
}
