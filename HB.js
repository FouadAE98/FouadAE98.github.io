
// create an array with happy tree friends
var happytreefriends = ['cuddles', 'handy', 'giggles', 'lumpy', 'mime', 'monkey', 'nutty', 'pop'];

// duplicate the content of this array
var doublefriends = happytreefriends.concat(happytreefriends);

// shuffle the array
shuffle(doublefriends);
 
// initialize all blocks, put them in an array
var blocks = document.getElementsByClassName('memory-block');

// initialize url params
var urlPrefix = "https://rogerthat.be/images/praktijk5/";
var urlSuffix = ".png";

// initialize an empty array that will contain the active blocks
var activeBlocks = [];

// loop through each block to add functionality
for(var i = 0; i < blocks.length; i++) {
  
  // combine url
  var url = urlPrefix + doublefriends[i] + urlSuffix;
  
  // add the background image to each block + add a class
  blocks[i].style.backgroundImage = 'url('+url+')';
  blocks[i].className += " " + doublefriends[i];
  
  
  
  // functionality after a click
  blocks[i].onclick = function(event) {
    // @todo build game
    var block = event.target;
    
    // enkel tonen als er minder dan 2 actieve zijn
    if(activeBlocks.length < 2) {
      // toon het figuurtje
      showBlock(block);
    }
    
    if(activeBlocks.length == 2) {
      checkBlocks();
      
      // wacht 2 seconden voordat het terug onzichtbaar gezet wordt
      setTimeout(hideBlocks, 2000);
    }    
  }
}


function checkBlocks() {
  
  var active1 = activeBlocks[0];
  var active2 = activeBlocks[1];
  
  if(active1.className == active2.className) {
    // ze zijn gelijk, dus haal ze uit het spel
    // uit het spel halen = van klasse veranderen
    activeBlocks[0].className = "memory-found";
    activeBlocks[1].className = "memory-found";    
  }
}


function hideBlocks() {
  // loopen door alle blocks, en de transparantie terug op 0 zetten
  // blocks bevat enkel vakjes met klasse "memory-block", niet "memory-found"
  for(var i = 0; i < blocks.length; i++) {
    blocks[i].style.opacity = 0;
  }
  
  // actieve blocks resetten
  activeBlocks = [];  
}

/**
*  maak het vakje zichtbaar op het scherm
*/ 
function showBlock(block) { 
  // controleer of het blokje nog niet in de array zit
  if(activeBlocks.indexOf(block) < 0) {
    block.style.opacity = 1;
    // voeg de block toe aan de actieve blocks array
    activeBlocks.push(block);
  }
  // hoeveel blockjes zitten er in de actieve array?
  console.log(activeBlocks.length);
}




/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i; 
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}