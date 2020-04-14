let exercice = require('./un_peu_de_calcul.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.calcul_1.apply(null, test.values) === test.answer){
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
      values:[0],
      answer:calcul_1Answer(0)
    },
    {
      name:"Test 1",
      values:[10],
      answer:calcul_1Answer(10)
    },
    {
      name:"Test 2",
      values:[15],
      answer:calcul_1Answer(15)
    },
    {
      name:"Test 3",
      values:[97],
      answer:calcul_1Answer(97)
    },
    {
      name:"Test 4",
      values:[31],
      answer:calcul_1Answer(31)
    },
    {
      name:"Test 5",
      values:[54],
      answer:calcul_1Answer(54)
    },
    {
      name:"Test 6",
      values:[45],
      answer:calcul_1Answer(45)
    },
    {
      name:"Test 7",
      values:[49],
      answer:calcul_1Answer(49)
    },
    {
      name:"Test 8",
      values:[48],
      answer:calcul_1Answer(48)
    },
    {
      name:"Test 9",
      values:[72],
      answer:calcul_1Answer(72)
    }
  ]

  return tests;
}

function calcul_1Answer(n){
  if (n===0){
    return 2;
  }
  else if(n===1){
    return 3;
  }
  else {
      let a=2;
      let b=3;
      let i=2;
      let c;
      while (i<=n){
        if(n%2===0){
          c=b*2+a;
        }
        else {
          c=b-a;
        }
        a=b;
        b=c;
        n--;}
      return c;
    }
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
