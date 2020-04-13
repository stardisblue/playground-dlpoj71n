let exercice = require('./le_jardin_des_hesperides.js');

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.leJardinDesHesperides.apply(null, test.values) === test.answer){
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
      values:[6],
      answer:leJardinDesHesperidesAnswer(6)
    },
    {
      name:"Test 1",
      values:[50],
      answer:leJardinDesHesperidesAnswer(50)
    },
    {
      name:"Test 2",
      values:[75],
      answer:leJardinDesHesperidesAnswer(75)
    },
    {
      name:"Test 3",
      values:[10],
      answer:leJardinDesHesperidesAnswer(10)
    },
    {
      name:"Test 4",
      values:[16],
      answer:leJardinDesHesperidesAnswer(16)
    },
    {
      name:"Test 5",
      values:[68],
      answer:leJardinDesHesperidesAnswer(68)
    },
    {
      name:"Test 6",
      values:[30],
      answer:leJardinDesHesperidesAnswer(30)
    },
    {
      name:"Test 7",
      values:[23],
      answer:leJardinDesHesperidesAnswer(23)
    },
    {
      name:"Test 8",
      values:[30],
      answer:leJardinDesHesperidesAnswer(30)
    }
  ]

  return tests;
}

function leJardinDesHesperidesAnswer(nb_etages){
  let sommes=0;
  while (nb_etages>0)
  {
    let nb_pommes=Math.pow(nb_etages,2);
    if (nb_pommes%3 === 0)
    {
      sommes=sommes+nb_pommes;
    }
    nb_etages--;
  }
  return(sommes);
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
