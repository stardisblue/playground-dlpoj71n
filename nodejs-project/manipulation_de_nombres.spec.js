﻿let exercice = require('./manipulation_de_nombres.js');

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.manipulationDeNombre.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


if (success==tests.length) {
  printMessage('Standard Output', 'C\'est une réussite. 🤔');
} else {
  printMessage('Standard Output💡', 'Encore un petit effort.  🤔');
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[1,2,0],
      answer:manipulationDeNombresAnswer(1,2,0)
    },
    {
      name:"Test 1",
      values:[1,2,1],
      answer:manipulationDeNombresAnswer(1,2,1)
    },
    {
      name:"Test 2",
      values:[1,2,2],
      answer:manipulationDeNombresAnswer(1,2,2)
    },
    {
      name:"Test 3",
      values:[14,63,55],
      answer:manipulationDeNombresAnswer(14,63,55)
    },
    {
      name:"Test 4",
      values:[13,35,100],
      answer:manipulationDeNombresAnswer(13,35,100)
    },
    {
      name:"Test 5",
      values:[16,56,12],
      answer:manipulationDeNombresAnswer(16,56,12)
    },
    {
      name:"Test 6",
      values:[49,73,28],
      answer:manipulationDeNombresAnswer(49,73,28)
    },
    {
      name:"Test 7",
      values:[73,74,76],
      answer:manipulationDeNombresAnswer(73,74,76)
    },
    {
      name:"Test 8",
      values:[92,83,92],
      answer:manipulationDeNombresAnswer(92,83,92)
    },
    {
      name:"Test 9",
      values:[40,13,38],
      answer:manipulationDeNombresAnswer(40,13,38)
    }
  ]

  return tests;
}

function manipulationDeNombresAnswer(a){
  if(a==1)
  {
    return a;
  }
  while(a!=1)
  {
    if (a%2==1)
    {
      a=3*a+1;
    }
    else
    {
      a=a/2;
    }
    return a;
  }
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}