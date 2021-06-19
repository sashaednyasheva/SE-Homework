package OOPHwPackage;

public class Student extends Person implements PersonInterface {

	int stud_id;
	double subject1;
	double subject2;
	double subject3;
	String major;

	Student(int id, String name, int age, char gender, double subject1, double subject2, double subject3,
			String major) {
		super(name, age, gender);
		this.stud_id = id;
		this.subject1 = subject1;
		this.subject2 = subject2;
		this.subject3 = subject3;
		this.major = major;
	}

	public void display() {
		System.out.println(ORGANIZATION);
		System.out.println("Student ID# is: " + this.stud_id);
		super.display();
		System.out.println("Subject 1 Score: " + this.subject1);
		System.out.println("Subject 2 Score: " + this.subject2);
		System.out.println("Subject 3 Score: " + this.subject3);
		System.out.println("Student Major: " + this.major);
	}

	public double calculate(int totalSubjects) {
		double average = ((this.subject1 + this.subject2 + this.subject3) / totalSubjects);
		return average;
	}

	public void checker() {
		if (this.page > 21) {
			System.out.println("Student is over 21 years old");
		} else
			System.out.println("Student is under 21 years old");
	}

}