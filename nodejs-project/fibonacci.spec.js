let exercice = require('./fibonacci.js');

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.sommeImpairsFibonacci.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


if (success === tests.length) {
  printMessage('Standard Output', 'C\'est une réussite. 🤔');
} else {
  printMessage('Standard Output💡', 'Encore un petit effort.  🤔');
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[11,21],
      answer:sommeImpairsFibonacciAnswer(11,21)
    },
    {
      name:"Test 1",
      values:[10,54],
      answer:sommeImpairsFibonacciAnswer(10,54)
    },
    {
      name:"Test 2",
      values:[930,934],
      answer:sommeImpairsFibonacciAnswer(930,934)
    },
    {
      name:"Test 3",
      values:[294,550],
      answer:sommeImpairsFibonacciAnswer(294,550)
    },
    {
      name:"Test 4",
      values:[632,709],
      answer:sommeImpairsFibonacciAnswer(632,709)
    },
    {
      name:"Test 5",
      values:[971,975],
      answer:sommeImpairsFibonacciAnswer(971,975)
    },
    {
      name:"Test 6",
      values:[541,971],
      answer:sommeImpairsFibonacciAnswer(541,971)
    },
    {
      name:"Test 7",
      values:[959,995],
      answer:sommeImpairsFibonacciAnswer(959,995)
    },
    {
      name:"Test 8",
      values:[975,999],
      answer:sommeImpairsFibonacciAnswer(975,999)
    }
  ]

  return tests;
}

function sommeImpairsFibonacciAnswer(n)
{
  let u2 = 1;
  let u1 = 1;
  let u0 = 1;
  let impairs = [1];
  while(u0 <= n)
  {
    if(u0 % 2 !== 0)
    {
      impairs.push(u0);
    }
    u0 = u1 + u2;
    u2 = u1;
    u1 = u0;
  }
  let r = 0;
  for (let key in impairs){
    if (!isNaN(parseFloat(impairs[key]))) {
      r += parseFloat(impairs[key])
    }
  }
  return r;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
