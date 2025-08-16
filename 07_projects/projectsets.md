# Projects Related ton DOM

# Solution

## Project 1 : Background Color Changer

```
const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
```
This code selects all elements with the class "button" and adds an event listener to each one.
When a button is clicked, it logs the event object and the target element to the console.
It then uses a switch statement to change the background color of the body element based on the id of
the button that was clicked.

## Project 2: BMI Calculator

```
const form = document.querySelector('form');
// this usecase will take empty value from field at the time of page load
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi > 25) {
      result.innerHTML = `<span>Your BMI is High,You are OverWeight: ${bmi}</span>`;
    } else if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is Low,You are UnderWeight: ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>Your BMI is Normal: ${bmi}</span>`;
    }
  }
});
```
This code selects the form element and adds an event listener to it.
When the form is submitted, it prevents the default form submission behavior and gets the values of the height and weight fields.
It then checks if the values are valid (not empty and a positive number) and calculates the BMI
If the BMI is high, it displays a message saying the user is overweight. If the BMI is
low, it displays a message saying the user is underweight. Otherwise, it displays a message saying
the user has a normal BMI.

# Project 3: Digital Clock

```
// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
This code selects the clock element and uses the setInterval function to update the clock every second.
It gets the current date and time using the Date object and sets the innerHTML of the clock element
to the current time in the format of the locale time string.

# Project 4: Number Guessing Game

```
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number!!!');
  } else if (guess < 1) {
    alert('Enter a number greater than or equal to 1');
  } else if (guess > 100) {
    alert('Enter a number less than or equal to 100');
  } else {
    // checkGuess(guess);
    prevGuess.push(guess);
    if (numGuess === 10) {
      cleanupGuess(guess);
      displayMessage(`Game Over!!! Random number was ${randomNumber}`);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right!!.');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is TOOO low');
  } else if (guess > randomNumber) {
    displayMessage('Number is TOOO High');
  }
}
function cleanupGuess(guess) {
  guess = '';
  numGuess++;
  guessSlot.innerHTML = prevGuess;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

# Project 5: Key Press Event 

```
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});
```

# Project 6 : Color Changer 

```
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(changeColor, 1000);
  }
  function changeColor() {
    const bodyStyle = document.body.style;
    bodyStyle.backgroundColor = randomColor();
    bodyStyle.color = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};
// const start = document.querySelector('#start')
// const stop = document.// const start = document.   ('#start')querySelector('#stop');
// start.addEventListener('click', startChangingColor);
// stop.addEventListener('click', stopChangingColor);
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
```