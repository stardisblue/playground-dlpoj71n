let exercice = require('./toc_boum.js');

let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.tocBoum.apply(null, test.values) === test.answer){
    printMessage('Success', '✓ '+test.name+' succed');
    success++;
  }
  else{
    printMessage('Error', 'X '+test.name+' failed');
  }
}, this);


if (success === tests.length) {
  printMessage('Standard Output', 'C\'est une réussite. 🤔');
} else {
  printMessage('Standard Output💡', 'Encore un petit effort.  🤔');
}


function createTests() {
  let tests = [
    {
      name:"Test 0",
      values:[287],
      answer:tocBoumAnswer(287)
    },
    {
      name:"Test 1",
      values:[100],
      answer:tocBoumAnswer(100)
    },
    {
      name:"Test 2",
      values:[2219],
      answer:tocBoumAnswer(2219)
    },
    {
      name:"Test 3",
      values:[9459],
      answer:tocBoumAnswer(9459)
    },
    {
      name:"Test 4",
      values:[2952],
      answer:tocBoumAnswer(2952)
    },
    {
      name:"Test 5",
      values:[3867],
      answer:tocBoumAnswer(3867)
    },
    {
      name:"Test 6",
      values:[1244],
      answer:tocBoumAnswer(1244)
    },
    {
      name:"Test 7",
      values:[6142],
      answer:tocBoumAnswer(6142)
    },
    {
      name:"Test 8",
      values:[3458],
      answer:tocBoumAnswer(3458)
    }
  ]

  return tests;
}

function tocBoumAnswer(n)
{
  let couple
  let paires = [];
  for(let a=0; a<=n; a++)
  {
    for(let b=0; (13*a+7*b)<=n; b++)
    {
      let r = 13*$a + 7*$b;
      if(r == n)
      {
        paires.push([a, b]);
      }
    }
  }
  if(paires.length>1)
  {
    let paire1 = paires[0];
    for(let k=0; k< paires.length-1; k++)
    {
      //$paire1 = $paires[$k];
      let paire2 = paires[k+1];
      let diff1 = Math.abs(paire1[0]-paire1[1]);
      let diff2 = Math.abs(paire2[0]-paire2[1]);
      if(diff1>diff2)
      {
        paire1 = paire2;
      }

    }
    couple = paire1;
  }

  else
  {
    couple = paires[0];
  }

  return couple;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
