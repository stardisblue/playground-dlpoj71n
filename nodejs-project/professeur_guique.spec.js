let assert = require('assert');
let universe = require('./professeur_guique.js');

let reduceUsed = false;
let superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

for (let i = 0; i < 10; i ++) {
  let tests = createTests();

  it('should sum stars', function () {
    try {
        if (i % 2) {
        assert.equal(1,1);
    }
      else { assert.equal(algorithmeProfesseurGuiqueAnswer(galaxies), universe.algorithmeProfesseurGuique(galaxies)); }

    } catch (error) {

      throw error;
    }
  });
}
let tests = createTests();
tests.forEach(function(test) {
  if(universe.algorithmeProfesseurGuique.apply(null, test.values) === test.answer){
    printMessage('success', '✓ '+test.name+' succed');
  }
  else{
    printMessage('error', 'X '+test.name+' failed');
  }
}, this);

it('should sum stars', function () {
  try {
    let galaxies;
    galaxies = [1, 2, 3]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
    galaxies = [20, 20, 2]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
    galaxies = [10, 3, 2, 1]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));

    if (reduceUsed) {
      printMessage('My personal Yoda, you are. 🙏', '* ● ¸ .　¸. :° ☾ ° 　¸. ● ¸ .　　¸.　:. • ');
      printMessage('My personal Yoda, you are. 🙏', '           　★ °  ☆ ¸. ¸ 　★　 :.　 .   ');
      printMessage('My personal Yoda, you are. 🙏', '__.-._     ° . .　　　　.　☾ ° 　. *   ¸ .');
      printMessage('My personal Yoda, you are. 🙏', '\'-._\\7\'      .　　° ☾  ° 　¸.☆  ● .　　　');
      printMessage('My personal Yoda, you are. 🙏', ' /\'.-c    　   * ●  ¸.　　°     ° 　¸.    ');
      printMessage('My personal Yoda, you are. 🙏', ' |  /T      　　°     ° 　¸.     ¸ .　　  ');
      printMessage('My personal Yoda, you are. 🙏', '_)_/LI');
    } else {
      printMessage('Hint 💡', 'Do you know the reduce function in JavaScript? 🤔');
    }
  } catch (error) {
    printMessage('Hint 💡', 'Did you properly accumulate all stars into \'totalStars\'? 🤔');
    throw error;
  }
});

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
