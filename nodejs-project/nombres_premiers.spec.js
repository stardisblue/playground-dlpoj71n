let exercice = require('./nombres_premiers.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.sommeNombresPremiers.apply(null, test.values) === test.answer){
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
      values:[100],
      answer:sommeNombresPremiersAnswer(100)
    },
    {
      name:"Test 1",
      values:[500],
      answer:sommeNombresPremiersAnswer(500)
    },
    {
      name:"Test 2",
      values:[1000],
      answer:sommeNombresPremiersAnswer(1000)
    },
    {
      name:"Test 3",
      values:[6655],
      answer:sommeNombresPremiersAnswer(6655)
    },
    {
      name:"Test 4",
      values:[8437],
      answer:sommeNombresPremiersAnswer(8437)
    },
    {
      name:"Test 5",
      values:[9213],
      answer:sommeNombresPremiersAnswer(9213)
    },
    {
      name:"Test 6",
      values:[8734],
      answer:sommeNombresPremiersAnswer(8734)
    },
    {
      name:"Test 7",
      values:[6948],
      answer:sommeNombresPremiersAnswer(6948)
    },
    {
      name:"Test 8",
      values:[4694],
      answer:sommeNombresPremiersAnswer(4694)
    },
    {
      name:"Test 9",
      values:[2027],
      answer:sommeNombresPremiersAnswer(2027)
    }
  ]

  return tests;
}
function sommeNombresPremiersAnswer(n)
{
  let s;
  let prime;
  if(n===2)
  {
    s = 2;
  }
  else if(n===3)
  {
    s = 5;
  }
else
  {
    s = 5;
    for(let i=4; i<=n; i++)
    {
      prime=1;
      for(let j = 2; j < i; j++)
      {
        if(i % j === 0)
        {
          prime = 0;
          break;
        }
      }
      if(prime===1)
      {
        s += i;
      }

    }
  }
  return s;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
