const resulP = document.getElementById('resulP');
const clear = document.getElementById('clear');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const equal = document.getElementById('equal');
const x = document.getElementById('x');
const dil = document.getElementById('dil');
const vidsotok = document.getElementById('vidsotok');

let firstNumber = null;
let operator = null;
let currentValue = '';

clear.onclick = function () {
   clearResult();
}

function clearResult() {
   currentValue = '';
   resulP.value = '';
}

function appValue(value) {
   currentValue += value;
   resulP.value = currentValue;
}

num1.onclick = function () {
   appValue('1');
}

num2.onclick = function () {
   appValue('2');
}

num3.onclick = function () {
   appValue('3');
}

num4.onclick = function () {
   appValue('4');
}

num5.onclick = function () {
   appValue('5');
}

num6.onclick = function () {
   appValue('6');
}

num7.onclick = function () {
   appValue('7');
}

num8.onclick = function () {
   appValue('8');
}

num9.onclick = function () {
   appValue('9');
}

num0.onclick = function () {
   appValue('0');
}
vidsotok.onclick = function () {
   appValue('%');
}

equal.onclick = function () {
   calculateResult();
}

plus.onclick = function () {
   performOperation('+');
}

minus.onclick = function () {
   performOperation('-');
}
x.onclick = function () {
   performOperation('*');
}

dil.onclick = function () {
   performOperation('/');
}

function performOperation(op) {
   if (firstNumber === null) {
      firstNumber = parseFloat(currentValue);
      operator = op;
      currentValue = '';
   } else if (currentValue !== '') {
      if (operator === '+') {
         firstNumber += parseFloat(currentValue);
      } else if (operator === '-') {
         firstNumber -= parseFloat(currentValue);
      }
      else if (operator === '*') {
         firstNumber *= parseFloat(currentValue);
      }
      else if (operator === '/') {
         firstNumber /= parseFloat(currentValue);
      }
      else if (operator === '%') {
         firstNumber %= parseFloat(currentValue);
      }
      currentValue = '';
      operator = op;
   }
}

function calculateResult() {
   if (operator !== null && currentValue !== '') {
      if (operator === '+') {
         firstNumber += parseFloat(currentValue);
      } else if (operator === '-') {
         firstNumber -= parseFloat(currentValue);
      }
      else if (operator === '*') {
         firstNumber *= parseFloat(currentValue);
      }
      else if (operator === '/') {
         firstNumber /= parseFloat(currentValue);
      }
      else if (operator === '%') {
         firstNumber %= parseFloat(currentValue);
         if (operator === '*') {
            const perc = 0.10
            let summ = (firstNumber * perc) / 100
            return su
         }
      }
      resulP.value = firstNumber;
      currentValue = '';
      firstNumber = null;
      operator = null;
   }
}









