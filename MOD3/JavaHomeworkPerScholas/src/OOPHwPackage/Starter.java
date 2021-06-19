package OOPHwPackage;

import java.util.Scanner;

public class Starter {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);

		System.out.println("CREATE A NEW EMPLOYEE PROFILE");

		System.out.println("Enter Employee ID#: ");
		int id = scan.nextInt();

		scan.nextLine();

		System.out.println("Enter Employee name: ");
		String name = scan.nextLine();

		System.out.println("Enter Employee age: ");
		int age = scan.nextInt();

		System.out.println("Enter Employee gender (M for male, F for female) : ");
		char gender = scan.next().charAt(0);

		System.out.println("Enter Employee's Base Salary: ");
		double salary = scan.nextDouble();

		Employee emp1 = new Employee(id, name, age, gender, salary);

		emp1.display();
		System.out.println("Gross salary including bonus is: " + emp1.calculate(2000));
		emp1.calculate(emp1);
		emp1.checker();
		
		System.out.println("------------------------");

		Scanner scan2 = new Scanner(System.in);

		System.out.println("CREATE A NEW STUDENT PROFILE");

		System.out.println("Enter Student ID#: ");
		int sid = scan2.nextInt();

		scan2.nextLine();

		System.out.println("Enter Student name: ");
		String sname = scan2.nextLine();

		System.out.println("Enter Student age: ");
		int sage = scan2.nextInt();

		System.out.println("Enter Student gender (M for male, F for female) : ");
		char sgender = scan2.next().charAt(0);

		System.out.println("Enter Subject1 Score: ");
		double sscore1 = scan2.nextDouble();

		System.out.println("Enter Subject1 Score: ");
		double sscore2 = scan2.nextDouble();

		System.out.println("Enter Subject1 Score: ");
		double sscore3 = scan2.nextDouble();

		scan2.nextLine();
		System.out.println("Enter Student Major: ");
		String major = scan2.nextLine();

		Student student1 = new Student(sid, sname, sage, sgender, sscore1, sscore2, sscore3, major);

		student1.display();

		double avg = student1.calculate(3);
		System.out.println("Average Student Score: " + String.format("%.3f", avg));
		student1.checker();

//		System.out.println("Encapsulation Test");
//		
//		String pname1, pname2;
//		int page1, page2;
//		char pgender1, pgender2;
//
//		Scanner scan3 = new Scanner(System.in);
//		
//		Person1 p1 = new Person1();	
//		System.out.println("Type Person1 name");
//		pname1 = scan3.nextLine();
//		p1.setPname(pname1);
//		System.out.println("Type Person1 age");
//		page1 = scan3.nextInt();
//		p1.setPage(page1);
//		System.out.println("Type M for male, F for female");
//		pgender1 = scan3.next().charAt(0);
//		p1.setPgender(pgender1);
//
//		Person1 p2 = new Person1();
//		
//		System.out.println("Type Person2 name");
//		scan3.nextLine();
//		pname2 = scan3.nextLine();
//		p2.setPname(pname2);
//		System.out.println("Type Person2 age");
//		page2 = scan3.nextInt();
//		p2.setPage(page2);
//		System.out.println("Type M for male, F for female");
//		pgender2 = scan3.next().charAt(0);
//		p2.setPgender(pgender2);
//
//		System.out.println("Person1 information:");
//		System.out.println(p1.getPname());
//		System.out.println(p1.getPage());
//		System.out.println(p1.getPgender());
//		System.out.println("------------------");
//		
//		System.out.println("Person2 information:");
//		System.out.println(p2.getPname());
//		System.out.println(p2.getPage());
//		System.out.println(p2.getPgender());
//		

	}

}