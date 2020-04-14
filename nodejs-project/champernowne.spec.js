let exercice = require('./champernowne.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.constanteDeChampernowne.apply(null, test.values) === test.answer){
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
      values:[11,21],
      answer:constanteDeChampernowneAnswer(11,21)
    },
    {
      name:"Test 1",
      values:[10,54],
      answer:constanteDeChampernowneAnswer(10,54)
    },
    {
      name:"Test 2",
      values:[930,934],
      answer:constanteDeChampernowneAnswer(930,934)
    },
    {
      name:"Test 3",
      values:[294,550],
      answer:constanteDeChampernowneAnswer(294,550)
    },
    {
      name:"Test 4",
      values:[632,709],
      answer:constanteDeChampernowneAnswer(632,709)
    },
    {
      name:"Test 5",
      values:[971,975],
      answer:constanteDeChampernowneAnswer(971,975)
    },
    {
      name:"Test 6",
      values:[541,971],
      answer:constanteDeChampernowneAnswer(541,971)
    },
    {
      name:"Test 7",
      values:[959,995],
      answer:constanteDeChampernowneAnswer(959,995)
    },
    {
      name:"Test 8",
      values:[975,999],
      answer:constanteDeChampernowneAnswer(975,999)
    }
  ]

  return tests;
}

function tableauConstante(centaine_max)
{
  let constante = [];
  for(let i=0; i<=9; i++)
  {
    constante.push(i);
  }

  for(let i=1; i<=9; i++)
  {
    for(let j=0; j<=9; j++)
    {
      constante.push(i);
      constante.push(j);
    }

  }

  for(let i=1; i<= centaine_max; i++)
  {
    for(let j=0; j<=9; j++)
    {
      for(let k=0; k<=9; k++)
      {
        constante.push(i);
        constante.push(j);
        constante.push(k);
      }

    }

  }

  //echo(implode(" ",$constante));
  return constante;
}

function constanteDeChampernowneAnswer(n1,n2)
{
  let constante = tableauConstante(5);

  let somme = 0;
  for(let i=n1; i<= n2; i++)
  {
    somme += constante[i];
  }

  return somme;


}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
