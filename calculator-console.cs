using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator_Console
{
    class Calculator_Console
    {
        static void Main(string[] args)
        {
            //Ask user to choose a type of operation            
            Console.WriteLine("Choose a type of operation: Add, Subtract, Multiply, Divide");

            //Get user input for "type of operation"
            string typeOfOperation = getTypeOfOperation();

            // TASK: Ask you to input numbers to "type of operation". 
            Console.WriteLine($"Type in the first number you want to {typeOfOperation}.");

            //Get user input for first number 
            int operandOne = getInputNumber();

            Console.WriteLine($"Type in the second number you want to {typeOfOperation}.");

            int operandTwo = getInputNumber();
            
            // TASK: show answer
            if(typeOfOperation.ToUpper() == "ADD")
            {
                Console.WriteLine($"{operandOne} + {operandTwo} = {operandOne + operandTwo}" );
            }else if(typeOfOperation.ToUpper() == "SUBTRACT")
            {
                Console.WriteLine($"{operandOne} - {operandTwo} = {operandOne - operandTwo}");
            }
            else if (typeOfOperation.ToUpper() == "MULTIPLY")
            {
                Console.WriteLine($"{operandOne} * {operandTwo} = {operandOne * operandTwo}");
            }
            else
            {
                Console.WriteLine($"{operandOne} / {operandTwo} = {operandOne / operandTwo}");
            }
        }

        //Get user input for "type of operation" and ensure only designate types are allowed
        static string getTypeOfOperation()
        {
            string operationType = Console.ReadLine();
            
            while (operationType.ToUpper() != "ADD" && operationType.ToUpper() != "SUBTRACT" && operationType.ToUpper() != "MULTIPLY" && operationType.ToUpper() != "DIVIDE")
            {
                Console.WriteLine($"{operationType} Incorrect operation type, please check your spelling.");
                operationType = Console.ReadLine();
            }

            return operationType;
        }

        //Get user input for number operands and check for non-numbers
        static int getInputNumber()
        {
            string input = Console.ReadLine();//Read input
            int operand = 0;//init variable
            bool wrongAnswer = false;//init variable

            //Check if the inputted answer is a int, if not continue looping. If it is a int, then parse into a int and break
            while (!wrongAnswer)
            {
                if (!int.TryParse(input, out operand))//check if inputted answer is a int
                {
                    Console.WriteLine("Please type a number!");
                    input = Console.ReadLine();//Read input again if fail
                }
                else
                {
                    operand = Int32.Parse(input);//parse input answer into a int
                    wrongAnswer = true;
                }                
            }

            return operand;
        }
    }
}
