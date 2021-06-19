package HomeworkPackage;

import java.util.Scanner;

public class JavaCalculator2 {

	static int add(int num1, int num2) {
		int result = num1 + num2;
		return result;
	}

	static int subtract(int num1, int num2) {
		int result = num1 - num2;
		return result;
	}

	static int multiply(int num1, int num2) {
		int result = num1 * num2;
		return result;
	}

	static void divide(int num1, int num2) {
		System.out.println(num1 + "/" + num2);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num1, num2, result, choice;
		System.out.println("please enter any two numbers:");
		num1 = scan.nextInt();
		num2 = scan.nextInt();

		System.out.println("make your selection");
		System.out.println("1. Addition");
		System.out.println("2. Subtraction");
		System.out.println("3. Multiplication");
		System.out.println("4. Division");
		System.out.println("5. Exit");

		choice = scan.nextInt();

		switch (choice) {
		case 1:
			System.out.println("The answer is: " + add(num1, num2));
			break;
		case 2:
			System.out.println("The answer is: " + subtract(num1, num2));
			break;
		case 3:
			System.out.println("The answer is: " + multiply(num1, num2));
			break;
		case 4:
			divide(num1, num2);
			break;
		case 5:
			System.out.println("Program is terminated.");
			System.exit(0);
		default:
			System.out.println("Invalid Entry, Try Again");
			break;
		}

		scan.close();

	}

}
