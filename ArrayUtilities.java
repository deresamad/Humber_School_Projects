/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package arraysearchassignments;

import java.util.Scanner;

/**
 *
 * @author pc
 */
class ArrayUtilities {
    static Scanner scanner = new Scanner(System.in);

    // Validate number within dynamic range (min to max)
    public static int validateInput(int lower, int upper) {
        int number;

        // Added prompt
        System.out.println("Please enter a number between " + lower + " and " + upper + ".");

        while (true) {
            System.out.print("Enter number to search: ");
            number = scanner.nextInt();

            if (number >= lower && number <= upper) {
                return number;
            } else {
                System.out.println("Invalid entry. Try again.");
            }
        }
    }

    // Fill the array
    public static void fillArray(int[] arr, int size) {
        for (int i = 0; i < size; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            arr[i] = scanner.nextInt();
        }
    }

    // Print array
    public static void printArray(int[] arr, int size) {
        for (int i = 0; i < size; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Sum of array
    public static int sumArray(int[] arr, int size) {
        int sum = 0;
        for (int i = 0; i < size; i++) {
            sum += arr[i];
        }
        return sum;
    }

    // Search for element
    public static boolean searchElement(int[] arr, int size, int number) {
        for (int i = 0; i < size; i++) {
            if (arr[i] == number) {
                return true;
            }
        }
        return false;
    }

    // Find minimum value in array
    public static int findMin(int[] arr, int size) {
        int min = arr[0];
        for (int i = 1; i < size; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    // Find maximum value in array
    public static int findMax(int[] arr, int size) {
        int max = arr[0];
        for (int i = 1; i < size; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}