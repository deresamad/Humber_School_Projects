/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package factorial;


/**
 *
 * @author pc
 */
import java.util.Scanner;
public class Factorial {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner age = new Scanner (System.in);
    
        int boyage;
        int girlage;
        int studentage;
     System.out.println("Enter age of student");
     studentage=age.nextInt();
     
        if (studentage < 18){
         System.out.println("You are underaged");
        }else{
                 System.out.println("you are good to enter");
                 }
     }
    }
    
     
     
