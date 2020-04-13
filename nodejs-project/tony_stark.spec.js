let exercice = require('./tony_stark.js');

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
      answer:desamorcageTonyStarkAnswer(6)
    },
    {
      name:"Test 1",
      values:[50],
      answer:desamorcageTonyStarkAnswer(50)
    },
    {
      name:"Test 2",
      values:[75],
      answer:desamorcageTonyStarkAnswer(75)
    },
    {
      name:"Test 3",
      values:[10],
      answer:desamorcageTonyStarkAnswer(10)
    },
    {
      name:"Test 4",
      values:[16],
      answer:desamorcageTonyStarkAnswer(16)
    },
    {
      name:"Test 5",
      values:[68],
      answer:desamorcageTonyStarkAnswer(68)
    },
    {
      name:"Test 6",
      values:[30],
      answer:desamorcageTonyStarkAnswer(30)
    },
    {
      name:"Test 7",
      values:[23],
      answer:desamorcageTonyStarkAnswer(23)
    },
    {
      name:"Test 8",
      values:[30],
      answer:desamorcageTonyStarkAnswer(30)
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
