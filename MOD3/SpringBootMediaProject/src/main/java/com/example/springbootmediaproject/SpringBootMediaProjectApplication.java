package com.example.springbootmediaproject;

import java.util.Scanner;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class SpringBootMediaProjectApplication {

	public static void main(String[] args) {
	ConfigurableApplicationContext Context = SpringApplication.run(SpringBootMediaProjectApplication.class, args);
	
	String magname, magtheme, magaudience, newsname, newsfrequency, adname1, adname2, clientname1, clientname2;  
	int magteam, newspages, adpages1, adpages2;
	double adbudget1, adbudget2;
	
	Scanner scan = new Scanner(System.in);	
	
	Magazine m1 = Context.getBean(Magazine.class);
	System.out.println("Enter Magazine name");
	magname = scan.nextLine();
	m1.setMname(magname);
	System.out.println("Enter Magazine's theme (fashion, politics, sports, news etc.)");
	magtheme = scan.nextLine();
	m1.setTheme(magtheme);
	System.out.println("Enter Magazine's audience type");
	magaudience = scan.nextLine();
	m1.setAudience(magaudience);
	System.out.println("Enter Magazine's editorial team size");
	magteam = scan.nextInt();
	m1.setTeam_size(magteam);
	
	AdCampaign ad1 = Context.getBean(AdCampaign.class);
	System.out.println("Enter Advertizing Campaign name");
	adname1 = scan.nextLine();
	ad1.setAdname(adname1);
	scan.nextLine();
	System.out.println("Enter Ad Client's name");
	clientname1 = scan.nextLine();
	ad1.setClientname(clientname1);
	System.out.println("Enter amount of pages for Ad campaign");
	adpages1 = scan.nextInt();
	ad1.setAdpage(adpages1);
	System.out.println("Enter Ad campaign's budget");
	adbudget1 = scan.nextDouble();
	ad1.setAdbudget(adbudget1);
	
	System.out.println("---------------------------");
	m1.magazineAd();
	m1.magazineInfo();

	Newspaper n1 = Context.getBean(Newspaper.class);
	scan.nextLine();
	System.out.println("---------------------------");
	System.out.println("Enter Newspaper name");
	newsname = scan.nextLine();
	n1.setNname(newsname);
	System.out.println("Enter Newspaper's publication frequency(daily, weekly)");
	newsfrequency = scan.nextLine();
	n1.setFrequency(newsfrequency);
	System.out.println("Enter Newspaper's amount of pages");
	newspages = scan.nextInt();
	n1.setPages(newspages);
	
	AdCampaign ad2 = Context.getBean(AdCampaign.class);
	System.out.println("Enter Advertizing Campaign name");
	adname2 = scan.nextLine();
	ad2.setAdname(adname2);
	scan.nextLine();
	System.out.println("Enter Ad Client's name");
	clientname2 = scan.nextLine();
	ad2.setClientname(clientname2);
	System.out.println("Enter amount of pages for Ad campaign");
	adpages2 = scan.nextInt();
	ad2.setAdpage(adpages2);
	System.out.println("Enter Ad campaign's budget");
	adbudget2 = scan.nextDouble();
	ad2.setAdbudget(adbudget2);
	
	System.out.println("---------------------------");
	n1.newsAd();
	n1.newsInfo();
	
	}	
}
