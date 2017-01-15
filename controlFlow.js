// syntax
var question= full;
if (question===full) {
console.log('ended not ok'); 
} else {
console.log('it\’s ok');
}

// syntax2
var question = prompt('what is the capital of france?');
if (question === 'Paris') {
console.log('You are right'); 
} else {
console.log ('you are wrong'); 
}

var quarter = function (number) {
    return number / 4;
}
// modulo
if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

// perfect match
var myPlaces = ['Bahia', 'Vietnam', 'Georgia'];
var friendPlaces = ['New York', 'Paris', 'Bahia'];
for (var i=0; i< myPlaces.length; i++) {
  console.log('My places: ' + myPlaces[i]);
}

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);
  
  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);
    
    if (myPlaces[i] === friendPlaces[j]) {
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}
// randomNumber
var randomNumber= 0;
if(randomNumber%3 === 0 && randomNumber !== 0) {
  if(randomNumber%3 === 0 && randomNumber%5 === 0 && randomNumber !== 0) {
    alert('fizzbuzz');
  } else {
    alert('thats the case');
  }
} else if(randomNumber%5 === 0 && randomNumber !== 0) {
  alert("buzz");
} else if(randomNumber%5 === 0 && randomNumber%3 === 0) {
  alert('fizzbuzz');
} else {
  console.log(randomNumber);
}
// switch
var question = prompt('Do you know your astrological sign?');
if(question==='yes') { {
  console.log('That is great'); 
   } 
                      var sign= prompt('Enter your astrological sign').toLowerCase();
                  console.log('Reading your future...');
switch(sign) {
  case 'Gemini':
    console.log('You\'re gonna have a great day!');
    break;
  case 'Leo':
    console.log('Struggling with some issues, but nothing serious');
    break;
  case 'Pisces':
    console.log('A lot of hard work in the next 2 days');
    break;
  case 'Virgo':
    console.log('You will succeed in this new challenge');
    break;
  default:
    console.log('Please enter a valid astrological sign');
    break;
}
                 
} else if(sign=== 'no') {
  console.log('How is that even possible? Check it right away');
} else {
  console.log('Enter a valid answer');
}

// game
alert('Ola! Agora voce entra na roda pra jogar capoeira.');
var principio = prompt('Como voce quer comencar? Banguela ou Sao Bento Grande?'); 
  if (principio === 'Banguela'){ {
    alert('Muito bom! Voce empeza como deveria');
  } alert('Gosta de jogo?');
  var randomNumber = Math.floor(Math.random());
  if (randomNumber === 0) {
    alert('Nao, com esta menina nao gosto nada');
  } else {
    alert('Sim, muito');
  } }
else if(principio === 'Sao Bento Grande') { {
    alert('Voce gosta do jogo forte!');
} alert('Quer empecar com martelo?');
var randomNumber = Math.floor(Math.random()*2);
                                           if (randomNumber === 0) {
                                             alert('Nao foi uma decision mutio boa, mas ha sobrevivido');
                                           } else if(randomNumber === 1) {
                                             alert('O seu jogo acabou muito mal');
                                           } else {
                                             alert('Bom! Venceu!');
                                           }

  } else {
    alert('Decida de novo');
  }



