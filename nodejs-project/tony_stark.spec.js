let exercice = require('./tony_stark.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.desamorcageTonyStark.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


try {
  assert.equal(success, tests.length);
  printMessage('Standard Output', 'C\'est une réussite ! ');
  success++;
} catch (error) {
  printMessage('Standard Output💡', 'Encore un petit effort.🤔');
  console.log('\nTECHIO> success false')
  console.error("Tous les tests ne sont pas justes !");
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[132],
      answer:desamorcageTonyStarkAnswer(132)
    },
    {
      name:"Test 1",
      values:[1325],
      answer:desamorcageTonyStarkAnswer(1325)
    },
    {
      name:"Test 2",
      values:[9562],
      answer:desamorcageTonyStarkAnswer(9562)
    },
    {
      name:"Test 3",
      values:[6853],
      answer:desamorcageTonyStarkAnswer(6853)
    },
    {
      name:"Test 4",
      values:[7470],
      answer:desamorcageTonyStarkAnswer(7470)
    },
    {
      name:"Test 5",
      values:[5394],
      answer:desamorcageTonyStarkAnswer(5394)
    },
    {
      name:"Test 6",
      values:[1919],
      answer:desamorcageTonyStarkAnswer(1919)
    },
    {
      name:"Test 7",
      values:[9306],
      answer:desamorcageTonyStarkAnswer(9306)
    },
    {
      name:"Test 8",
      values:[1981],
      answer:desamorcageTonyStarkAnswer(1981)
    },
    {
      name:"Test 9",
      values:[6584],
      answer:desamorcageTonyStarkAnswer(6584)
    }
  ]

  return tests;
}

function desamorcageTonyStarkAnswer(n)
{
  let y = 0
  for(let i=0;i<n;i++)
  {
    if(i%3===0 || i%5===0)
    {
      y=y+i;
    }
  }
  return y;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
