![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

# Control Flow Lab

> ***Note:*** _This can be a pair programming activity or done independently._

This is a lab for you to practice control flow with JavaScript. Complete the following challenges, using `for`, `while`, `if`, `else`.

### Colour converter

- Write a program which accepts a hexadecimal colour code in the format RRGGBB.
- It should log an RGB colour code in the format rgb(RRR, GGG, BBB) to the console;

Example: User inputs "FF0000", program outputs "rgb(255, 0, 0)"

>**Note**: Make sure you check out `window.prompt` to get the user input, and `window.alert` to output the response.

### FizzBuzz

- Write a program that will log numbers from 1 - 101 in the console.
- Any number that is divisible by 3 should log "Fizz" instead of the number.
- Any number that is divisible by 5 should log "Buzz" instead of the number.
- Any number that is divisible by 3 **and** 5 should log "FizzBuzz" instead of the number.

>**Note**: Make sure you check out the modulus operator (%).

### Guess the number

- Write a program that chooses a random number from 1 - 10.
- The user should then be able to guess the number.
- If the user guesses correctly, they should be asked if they want to play again.
- Otherwise they should be able to guess again.

>**Note**: Make sure you check out `window.confirm` to ask if the user wants to play again.

### Password strength checker

- Write a program which accepts a user's password.
- If the password does not match these criteria, it should reject the password, informing the user why.
  - Must have at least 6 characters.
  - Must have at least 1 uppercase character.
  - Must have at least 1 lowercase character.
  - Must have at least 1 number.
- If the password is accepted, it should console log "Password accepted"

### Mastermind

- Write a program which selects a string of 4 numbers between 1 - 4, eg: 1234, 2112, 4231, 2222 etc.
- The user should then be able to guess the combination.
- The program should indicate how many (but not which) of the 4 numbers are correct.
- When the user guesses correctly, the program should inform the user how many attempts they took.
- Once the game is over, the user should asked if they would like to play again.


## Tips

- Make sure you plan before you start using pseudocode.
- Once you have broken a problem down, use Google to help you with a specific step. Asking 'How do I make a color converter in JavaScript' is unlikely to be helpful, whereas 'How do I convert a HEX to decimal in JavaScript' probably would.
- Use console log to check that your values are as expected as you code. You can check the data type with `typeof`.
- **Be careful with loops!** If you find that you are in an infinite loop, close the browser window immediately. If your browser is unresponsive choose Force Quit... from the Apple menu, select Chrome, click 'Force Quit'.
- Once you have a solution, comment it out (<kbd>CMD</kbd> + <kbd>/</kbd>) so that it does not interfere with the next one.
