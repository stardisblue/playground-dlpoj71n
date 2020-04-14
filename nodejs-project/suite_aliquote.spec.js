let exercice = require('./suite_aliquote.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.suiteAliquote.apply(null, test.values) === test.answer){
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
      values:[12],
      answer:suiteAliquoteAnswer(12)
    },
    {
      name:"Test 1",
      values:[228],
      answer:suiteAliquoteAnswer(228)
    },
    {
      name:"Test 2",
      values:[195],
      answer:suiteAliquoteAnswer(195)
    },
    {
      name:"Test 3",
      values:[177],
      answer:suiteAliquoteAnswer(177)
    },
    {
      name:"Test 4",
      values:[87],
      answer:suiteAliquoteAnswer(87)
    },
    {
      name:"Test 5",
      values:[371],
      answer:suiteAliquoteAnswer(371)
    },
    {
      name:"Test 6",
      values:[516],
      answer:suiteAliquoteAnswer(516)
    },
    {
      name:"Test 7",
      values:[783],
      answer:suiteAliquoteAnswer(783)
    }
  ]

  return tests;
}

function S(n)
{
  let diviseurs = [];
  for(let i=1; i<n; i++)
  {
    if(n % i ===0)
    {
      diviseurs.push(i);
    }
  }
  let somme = 0;
  for (const key in diviseurs) {
    if (!isNaN(parseFloat(diviseurs[key]))) {
      somme += parseFloat(diviseurs[key])
    }
  }

  return somme;
}

function suiteAliquoteAnswer(n0)
{
  let erreur = 0;
  n0 = Math.abs(n0);
  let n = n0;
  let suite = []

  if(n0 > Math.pow(10,6))
  {
    erreur = 1;
  }
  else if(n0 <= 1)
  {
    erreur = 1;
  }
  else
  {
    suite.push(n0);
    while(n!==1)
    {
      n = S(n);

      if(n === n0)
      {
        erreur = 1;
        n=1;
      }
      else if(n>Math.pow(10,6))
      {
        erreur = 1;
        n=1;
      }
      else if(n === S(n))
      {
        n=1;
        erreur=1;
      }
      else
      {
        suite.push(n);
      }
    }
  }

  if(erreur === 0)
  {
    return suite;
  }
  else
  {
    return(-1);
  }
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
