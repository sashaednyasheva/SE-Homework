package com.example.springbootmediaproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component

public class Magazine {
	
	private String mname;
	private int team_size;
	private String theme;
	private String audience;  
	
	@Autowired
	public AdCampaign adcampaign;
	
	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public int getTeam_size() {
		return team_size;
	}

	public void setTeam_size(int team_size) {
		this.team_size = team_size;
	}

	public String getTheme() {
		return theme;
	}


	public void setTheme(String theme) {
		this.theme = theme;
	}


	public String getAudience() {
		return audience;
	}


	public void setAudience(String audience) {
		this.audience = audience;
	}

	public void magazineInfo(){
		System.out.println("Magazine's Theme: "+this.theme);
		System.out.println("Editorial Team Size: "+this.team_size);
		System.out.println("Magazine's Target Audience: "+this.audience);
	}
	
	public void magazineAd() {
		System.out.println("Magazine's Title: "+this.mname);
		adcampaign.adInfo();
		adcampaign.showBudget();
	}
	
}



