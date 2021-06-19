package OOPHwPackage;

public class Employee extends Person implements PersonInterface {
	int emp_id;
	double emp_salary;

	Employee(int id, String name, int age, char gender, double salary) {
		super(name, age, gender);
		this.emp_id = id;
		this.emp_salary = salary;
	}

	public void display() {
		System.out.println(ORGANIZATION);
		System.out.println();
		System.out.println("Employee ID#: " + this.emp_id);
		super.display();
		System.out.println("Employee's Base Salary: " + this.emp_salary);
	}

	public double calculate(int bonus) {
		double netsalary = bonus + this.emp_salary;
		return netsalary;
	}

	public void calculate(Employee obj) {
		System.out.println("Employee Monthly Salary: " + String.format("%.2f", obj.emp_salary / 12));
	}

	public void checker() {
		if (this.pgender == 'm' || this.pgender == 'M') {
			System.out.println("Employee is a Male");
		} else
			System.out.println("Empoyee is a Female");

	}

}