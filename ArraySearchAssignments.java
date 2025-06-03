/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package arraysearchassignments;

import static arraysearchassignments.ArrayUtilities.scanner;

/**
 *
 * @author pc
 */
public class ArraySearchAssignments {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
     
         //  Ask for size of array
        System.out.print("Enter the size of array: ");
        int size = scanner.nextInt();

        int[] numbers = new int[size];

        //  Fill the array with user input
        ArrayUtilities.fillArray(numbers, size);

        //  Display array
        System.out.print("Elements in array: ");
        ArrayUtilities.printArray(numbers, size);

        //  Display sum of elements
        int sum = ArrayUtilities.sumArray(numbers, size);
        System.out.println("Sum of array elements: " + sum);

        //  Get min and max from the array
        int lower = ArrayUtilities.findMin(numbers, size);
        int upper = ArrayUtilities.findMax(numbers, size);

        //  Ask user for a number to search, within dynamic limits
        int validatedNumber = ArrayUtilities.validateInput(lower, upper);

        //  Search number in array
        boolean found = ArrayUtilities.searchElement(numbers, size, validatedNumber);

        //  Show result
        if (found) {
            System.out.println("Element found");
        } else {
            System.out.println("Element not found");
        }

        scanner.close();
    }
}
