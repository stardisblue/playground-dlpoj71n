let exercice = require('./bissextile.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.bissextile.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


try {
  assert.equal(success, tests.length);
  printMessage('Standard Output', 'C\'est une réussite.🤔');
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
      values:[2016],
      answer:bissextileAnswer(2016)
    },
    {
      name:"Test 1",
      values:[2020],
      answer:bissextileAnswer(2020)
    },
    {
      name:"Test 2",
      values:[1857],
      answer:bissextileAnswer(1857)
    },
    {
      name:"Test 3",
      values:[207],
      answer:bissextileAnswer(207)
    },
    {
      name:"Test 4",
      values:[847],
      answer:bissextileAnswer(847)
    },
    {
      name:"Test 5",
      values:[1784],
      answer:bissextileAnswer(1784)
    },
    {
      name:"Test 6",
      values:[403],
      answer:bissextileAnswer(403)
    },
    {
      name:"Test 7",
      values:[1476],
      answer:bissextileAnswer(1476)
    },
    {
      name:"Test 8",
      values:[1734],
      answer:bissextileAnswer(1734)
    },
    {
      name:"Test 9",
      values:[1873],
      answer:bissextileAnswer(1873)
    }
  ]

  return tests;
}

function bissextileAnswer(annee){
  let a;
  if (annee%4 === 0)
  {
    if (annee%100 !== 0)
    {
      a=1 ;
      return a;
    }
    else if (annee%400 === 0)
    {
      a = 1 ;
      return a;
    }
  else{
    a = 0;
    return a;
  }

  }
  else if (annee%400 === 0)
  {
    a=1 ;
    return a;
  }
else{
    a=0;
    return a;
  }


}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
