let exercice = require('./manipulation_de_nombres.js');

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
      values:[3],
      answer:manipulationDeNombresAnswer(3)
    },
    {
      name:"Test 1",
      values:[2],
      answer:manipulationDeNombresAnswer(2)
    },
    {
      name:"Test 2",
      values:[20],
      answer:manipulationDeNombresAnswer(20)
    },
    {
      name:"Test 3",
      values:[57],
      answer:manipulationDeNombresAnswer(57)
    },
    {
      name:"Test 4",
      values:[13],
      answer:manipulationDeNombresAnswer(13)
    },
    {
      name:"Test 5",
      values:[56],
      answer:manipulationDeNombresAnswer(56)
    },
    {
      name:"Test 6",
      values:[73],
      answer:manipulationDeNombresAnswer(73)
    },
    {
      name:"Test 7",
      values:[736],
      answer:manipulationDeNombresAnswer(736)
    },
    {
      name:"Test 8",
      values:[929],
      answer:manipulationDeNombresAnswer(929)
    },
    {
      name:"Test 9",
      values:[408],
      answer:manipulationDeNombresAnswer(408)
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
