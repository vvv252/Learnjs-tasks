"use strict";

// используя ?
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

// используя ||
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?');
}