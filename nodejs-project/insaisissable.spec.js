let exercice = require('./insaisissable.js');
let assert = require('assert');


let tests = createTests();
let success = 0;
tests.forEach(function(test) {
  if(exercice.Matrice.apply(null, test.values) === test.answer){
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
      values:[[24,83,38,59,48,30,42,40,24,22,14,45,81,100,44,30,59],58],
  answer:MatriceAnswer([24,83,38,59,48,30,42,40,24,22,14,45,81,100,44,30,59],58)
},
{
  name:"Test 1",
      values:[[99,39,58,49,81,57,13,72,100,74,59,33,95,40,21,25,66,22,73,17,10,46],94],
    answer:MatriceAnswer([99,39,58,49,81,57,13,72,100,74,59,33,95,40,21,25,66,22,73,17,10,46],94)
},
{
  name:"Test 2",
      values:[[60,33,89,99,49,68,35,64,89,95],50],
    answer:MatriceAnswer([60,33,89,99,49,68,35,64,89,95],50)
},
{
  name:"Test 3",
      values:[[63,21,16,67,65,92,50,70,92,42,89,38,18,73],36],
    answer:MatriceAnswer([63,21,16,67,65,92,50,70,92,42,89,38,18,73],36)
},
{
  name:"Test 4",
      values:[[71,58,43,39,63,26,83,34,15,62,75,15],95],
    answer:MatriceAnswer([71,58,43,39,63,26,83,34,15,62,75,15],95)
},
{
  name:"Test 5",
      values:[[30,27,73,29,70,85,63,94,92,46,29,42,91,32,19,20,82,78,25,75,60,84],97],
    answer:MatriceAnswer([30,27,73,29,70,85,63,94,92,46,29,42,91,32,19,20,82,78,25,75,60,84],97)
},
{
  name:"Test 6",
      values:[[92,54,14,80,54,53,66,92,92,13,28,68,13,52,40,65,37,60,82,78,10,11,83,42,66,45,65],80],
    answer:MatriceAnswer([92,54,14,80,54,53,66,92,92,13,28,68,13,52,40,65,37,60,82,78,10,11,83,42,66,45,65],80)
},
{
  name:"Test 7",
      values:[[30,56,67,82,30,36,72,37,34,38,31,83,16,71,31,40,67,11,97,28,25,29,58,58,85,90],61],
    answer:MatriceAnswer([30,56,67,82,30,36,72,37,34,38,31,83,16,71,31,40,67,11,97,28,25,29,58,58,85,90],61)
}
]

return tests;
}

function MatriceAnswer(matrice, n)
{
  let s
  if(n === 1)
  {
    s = "xxx";
  }
  else if( n === 23)
  {
    s=575;
  }
  else
  {
    for(let i=0; i< n; i++)
    {
      for(let j=0; j<matrice.length; j++)
      {
        matrice[j] = (11*matrice[j]+4)%37;
      }
    }
    s = 0;
    for (const key in matrice) {
      if (!isNaN(parseFloat(matrice[key]))) {
        s += parseFloat(matrice[key])
      }
    }
  }
  return s;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
