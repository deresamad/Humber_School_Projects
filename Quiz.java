/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package quiz;

import java.util.Scanner;

/**
 *
 * @author pc
 */
public class Quiz {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner input = new Scanner(System.in);  // Create Scanner to read user input
        int numInput = 0;
         
        System.out.println("Enter the number");  // Ask the user for input
        numInput = input.nextInt();              // Read integer input

         doubleNumber(numInput);              // Call method and pass the input
    }

    // Method that doubles the number
    static void doubleNumber(int value) {
        
        int result = value * 2; // Double the value
        System.out.println("Number is doubled: " + result);
    }
}

    
    

