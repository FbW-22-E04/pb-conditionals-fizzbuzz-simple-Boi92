let number = 15 ;

if (number % 3 == 0 && number % 5 == 0)
console.log("FizzBuzz");
else if ((number % 3 == 0 || number % 5 == 0))
{
    if (number % 3 == 0)
    console.log("Fizz");
    if (number % 5 == 0)
    console.log("Buzz");
}
else console.log(number);