'use strict';

function checkSpam(str) {
  let changeStr = str.toLowerCase();

  return changeStr.includes('viagra') || changeStr.includes('xxx');
}