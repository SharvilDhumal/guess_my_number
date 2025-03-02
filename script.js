'use strict';

// console.log(document.querySelector('.message').textContent);

// DOM (document object model ) helps us to access html elements and styles to manipulate them ..
// It is basically connection point between js and html..
/*
document.querySelector('.message').textContent = 'Correct Number! 🥳';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/


// Event Listener -->
/*
An ** event listener ** in JavaScript is a function that waits for an event(like a click, hover, or keypress) to occur on an element and then runs specified code. 

### Syntax:
```javascript
element.addEventListener('event', function() {
  // Code to run when the event happens
});
```

### Example:
```javascript
document.querySelector('button').addEventListener('click', () => {
  alert('Button clicked!');
});
```

It’s a modern, flexible way to handle user interactions.
*/

// dot (.) for class selector ..( addEventListener is A method..)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// to make the number between 1 to 20 we added 1.
// document.querySelector('.number').textContent = secretNumber;

let score = (document.querySelector('.score').textContent);
// console.log(score);

let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check ').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // When there is no input 
        if (!guess) {
            // document.querySelector('.message').textContent = ' ⛔ No Number! ';
            displayMessage(' ⛔ No Number! ');
        }

        // When player wins -->
        else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = 'Correct Number! 🥳';
            displayMessage(' Correct Number! 🥳');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = secretNumber;
            // Whenever we specify a style . we need to specify a string only .We need to use camelCase property for css.
            document.querySelector('.number').style.width = '30 rem';

            if (score > highScore) {
                highScore = score;
            }
            document.querySelector('.highscore').textContent = highScore;
        }

        // When gue
        else if (guess !== secretNumber) {
            if (score > 1) {
                // document.querySelector('.message').textContent =
                // guess > secretNumber ? ' 📈 Too High! ' : ' 📉 Too Low! ';
                displayMessage(guess > secretNumber ? ' 📈 Too High! ' : ' 📉 Too Low! ');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = ' 😭 You Lost the game! ';
                displayMessage(' 😭 You Lost the game! ');
                document.querySelector('.score').textContent = 0;
            }

        }

        // The DRY Principle--->
        // DRY ---> (Don't Repeat Yourself Principle!)

        // Imp --> 💥💥➡️➡️
        // We do refactoring  to improve the code structure without changing its meaning.
        // Refactoring is done to avoid duplicacy in the code, and make the code more presentable..


        //  Refactoring this code--> to avoid duplicacy!!!!! 
        // When guess is too high -->
        // else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = ' 📈 Too High! ';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = ' 😭 You Lost the game! ';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
        // // when guess is too Low -->
        // else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector('.message').textContent = ' 📉 Too Low! ';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     } else {
        //         document.querySelector('.message').textContent = ' 😭 You Lost the game! ';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // }
    });


document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing...');
        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;

        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15 rem';

    });


///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/


