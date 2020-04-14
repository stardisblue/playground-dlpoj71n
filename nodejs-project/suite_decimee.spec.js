let exercice = require('./suite_decimee.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  try {
    assert.equal(exercice.suiteDecimee.apply(null, test.values), test.answer);
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  } catch (error) {
    printMessage('Error', 'X '+test.name+' failed');
    throw error;
  }
}, this);


if (success==tests.length) {
  printMessage('Standard Output', 'C\'est une réussite. 🤔');
} else {
  printMessage('Standard Output💡', 'Encore un petit effort.  🤔');
  console.log('TECHIO> success false');

}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[10],
      answer:suiteDecimeeAnswer(10)
    },
    {
      name:"Test 1",
      values:[100],
      answer:suiteDecimeeAnswer(100)
    },
    {
      name:"Test 2",
      values:[624],
      answer:suiteDecimeeAnswer(624)
    },
    {
      name:"Test 3",
      values:[335],
      answer:suiteDecimeeAnswer(335)
    },
    {
      name:"Test 4",
      values:[877],
      answer:suiteDecimeeAnswer(877)
    },
    {
      name:"Test 5",
      values:[887],
      answer:suiteDecimeeAnswer(887)
    },
    {
      name:"Test 6",
      values:[488],
      answer:suiteDecimeeAnswer(488)
    },
    {
      name:"Test 7",
      values:[875],
      answer:suiteDecimeeAnswer(875)
    },
    {
      name:"Test 8",
      values:[755],
      answer:suiteDecimeeAnswer(755)
    }
  ]

  return tests;
}

function suiteDecimeeAnswer(n)
{
  let somme = 0;
  for(let i=1; i<=n; i++)
  {
    let digits = i.toString().split('').map(Number);
    if(digits.indexOf(9)===-1)
    {
      somme += 1/i;
    }
  }
  return somme;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
