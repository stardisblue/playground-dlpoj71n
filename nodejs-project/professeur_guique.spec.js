let exercice = require('./professeur_guique.js');

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.algorithmeProfesseurGuique.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


if (success==tests.length) {
  printMessage('Standard Output', 'C\'est un réussite. 🤔');
} else {
  printMessage('Standard Output💡', 'Encore un petit effort.  🤔');
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[1,2,0],
      answer:algorithmeProfesseurGuiqueAnswer(1,2,0)
    },
    {
      name:"Test 1",
      values:[1,2,1],
      answer:algorithmeProfesseurGuiqueAnswer(1,2,1)
    },
    {
      name:"Test 2",
      values:[1,2,2],
      answer:algorithmeProfesseurGuiqueAnswer(1,2,2)
    },
    {
      name:"Test 3",
      values:[14,63,55],
      answer:algorithmeProfesseurGuiqueAnswer(14,63,55)
    },
    {
      name:"Test 4",
      values:[13,35,100],
      answer:algorithmeProfesseurGuiqueAnswer(13,35,100)
    },
    {
      name:"Test 5",
      values:[16,56,12],
      answer:algorithmeProfesseurGuiqueAnswer(16,56,12)
    },
    {
      name:"Test 6",
      values:[49,73,28],
      answer:algorithmeProfesseurGuiqueAnswer(49,73,28)
    },
    {
      name:"Test 7",
      values:[73,74,76],
      answer:algorithmeProfesseurGuiqueAnswer(73,74,76)
    },
    {
      name:"Test 8",
      values:[92,83,92],
      answer:algorithmeProfesseurGuiqueAnswer(92,83,92)
    },
    {
      name:"Test 9",
      values:[40,13,38],
      answer:algorithmeProfesseurGuiqueAnswer(40,13,38)
    }
  ]

  return tests;
}

function algorithmeProfesseurGuiqueAnswer(a, b, c){
  let k=1;
  let n=0;
  while(k <1000-n)
  {
    a=b;
    b=c+a;
    c=3*c+4*a-b;
    n=a+b;
    k++;
  }
  return c;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
