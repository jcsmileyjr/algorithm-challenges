using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NumberGuesser
{
    class Program
    {
        static void Main(string[] args)
        {
            //get app info
            GetAppInfo();//run this function to get app's informaiton

            GreetUser();//ask user their name and to play


            while(true){            
                //Create a new Random object
                Random random = new Random();

                int correctNumber = random.Next(1, 10);

                //Init guess variable
                int guess = 0;

                //ask user for number
                Console.WriteLine("Guess a number between 1 and 10?");

                //while guess is not correct
                while(guess != correctNumber)
                {
                    string input = Console.ReadLine();

                    //make sure a string is a number
                    if (!int.TryParse(input, out guess))
                    {
                        //Print error message
                        PrintColorMessage(ConsoleColor.Red, "Please use an actually number");
                    
                        //keep going
                        continue;
                    }

                    guess = Int32.Parse(input);

                    if(guess != correctNumber)
                    {
                        //Print error message
                        PrintColorMessage(ConsoleColor.Red, "Wrong number, please try again");
                    
                    }
                }

                //Print success message
                PrintColorMessage(ConsoleColor.Yellow, "You are correct");

                //ask if user wants to play again
                Console.WriteLine("Play Again, [Y or N]");

                string answer = Console.ReadLine().ToUpper();

                if(answer == "Y"){
                    continue;
                }else if(answer =="N"){
                    return;
                }else {
                    return;
                }
            }
        }

        //Get and display app's information
        static void GetAppInfo(){
            //set app variables
            string appName = "Number Guesser";
            string appVersion = "1.0.0";
            string appAuthor = "JC Smiley";

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("{0}: Version {1} by {2}", appName, appVersion, appAuthor);
            Console.ResetColor();
        }

        //Ask the user namea and greet
        static void GreetUser(){
            //ask user name
            Console.WriteLine("What is your name?");

            string inputName = Console.ReadLine();

            Console.WriteLine($"Hello {inputName}, let's play a game...");
        }


        static void PrintColorMessage(ConsoleColor color, string message){
            Console.ForegroundColor = color;
            Console.WriteLine(message);
            Console.ResetColor();
        }
    }
}
