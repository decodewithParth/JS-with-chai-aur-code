# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```
 
## project 2 solution

```javascript
// this use case will give you empty
// const height = document.querySelector('#height');
// const weight = document.querySelector('#weight');
// const button = document.querySelector('button');
// console.log(button);
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please give a valid height!';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'Please give a valid weight!';
  } else {
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    result.innerHTML = bmi;
    if (bmi < 18.6) {
      result.appendChild(document.createTextNode('You are under weight'));
    } else if (bmi > 24.9) {
      result.appendChild(document.createTextNode('You are over weight'));
    } else {
      result.appendChild(
        document.createTextNode('You are parfer according to BMI')
      );
    }
  }
});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML=date.toLocaleTimeString();
}, 1000);


```

