// Created by: Zaida Hammel
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-JS/sw.js", {
    scope: "/ICS2O-Unit5-07-JS/",
  });
}

/**
 * This function does multiplication.
 */
function myButtonClicked () {
  const counter = parseInt(document.getElementById("counter").value);
  let sum = 0;
    
    for (let addedInteger = 1; addedInteger <= counter; addedInteger++) {
      sum += addedInteger;
    }
            
  document.getElementById("answers").innerHTML = 
    "The sum is: " + sum;
}