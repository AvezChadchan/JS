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