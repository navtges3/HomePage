//91.61 Assignment: Implementing a Bit of Scrabble with Drag-and-Drop (with Extra Credits)
//Nicholas E. Avtges, Umass Lowell Computer Science, nicholas_avtges@student.uml.edu
//Created 12/2/2020
var array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

var images = ["image1", "image2", "image3", "image4", "image5", "image6", "image7"];
var draggables = ["draggable1", "draggable2", "draggable3", "draggable4", "draggable5", "draggable6", "draggable7"]
var alphabet = [
  {"letter":"A", "value":1, "amount":9},
	{"letter":"B", "value":3, "amount":2},
	{"letter":"C", "value":3, "amount":2},
	{"letter":"D", "value":2, "amount":4},
	{"letter":"E", "value":1, "amount":12},
	{"letter":"F", "value":4, "amount":2},
	{"letter":"G", "value":2, "amount":3},
	{"letter":"H", "value":4, "amount":2},
	{"letter":"I", "value":1, "amount":9},
	{"letter":"J", "value":8, "amount":1},
	{"letter":"K", "value":5, "amount":1},
	{"letter":"L", "value":1, "amount":4},
	{"letter":"M", "value":3, "amount":2},
	{"letter":"N", "value":1, "amount":5},
	{"letter":"O", "value":1, "amount":8},
	{"letter":"P", "value":3, "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1, "amount":6},
	{"letter":"S", "value":1, "amount":4},
	{"letter":"T", "value":1, "amount":6},
	{"letter":"U", "value":1, "amount":4},
	{"letter":"V", "value":4, "amount":2},
	{"letter":"W", "value":4, "amount":2},
	{"letter":"X", "value":8, "amount":1},
	{"letter":"Y", "value":4, "amount":2},
	{"letter":"Z", "value":10, "amount":1},
	{"letter":"_", "value":0, "amount":2}
];

var used = new Array(27).fill(0);

var doubleWord = [3, 13];
var doubleLetter = [7, 9];

var score = 0;
var highScore = 0;

//get a random letter
function randomLetter(){
  while(1){
    var number = Math.floor(Math.random() * 27);
    if(used[number] < alphabet[number]["amount"]){
      used[number] += 1;
      return alphabet[number]["letter"];
    }
  }
}

//fills the hand with random tiles
function fillHand(){
  for (var i = 0; i < 7; i++) {
    var image = document.getElementById(images[i]);
    var tile = "";
    var letter = randomLetter();
    console.log("randomLetter = " + letter);
    if(letter[0] == "_"){
      tile = "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg";
    }
    else{
      tile = "graphics_data/Scrabble_Tiles/Scrabble_Tile_"+letter+".jpg";
    }
    image.src = tile;
  }
  for(var i = 0; i < 15; i++){
    array[i] = "_";
  }
  document.getElementById("word").innerHTML = "";
  score = 0;
  document.getElementById("score").innerHTML = 0;
  moveHome();
}

//updates the score
function updateScore(number){
  score = score + number;
  document.getElementById("score").innerHTML = score;
}

//updates the word value for displaying to the user
function updateWord(letter, position){

  if(array[position - 1]  == letter[0]){
    return;
  }
  var prev = array[position - 1];
  var index = 0;
  array[position - 1] = letter;
  var word = "";
  var htmlText = document.getElementById("word");

  var bonus = 1;

  if(position == doubleLetter[0] || position == doubleLetter[1]){
    bonus = 2;
  }

  if(letter == "_"){
    for(var i = 0; i < 27; i++){
      if(alphabet[i]["letter"] == prev){
        index = i;
      }
    }
    updateScore(bonus * (0 - alphabet[index]["value"]));
  }
  else{
    for(var i = 0; i < 27; i++){
      if(alphabet[i]["letter"] == letter){
        index = i;
      }
    }
    updateScore(bonus * alphabet[index]["value"]);
  }

  for(var i = 0; i < 15; i++){
    if(array[i] != "_"){
      word += array[i];
    }
  }

  htmlText.innerHTML = word;
}

//resets after submition
function clearBoard(){
  for(var i = 0; i < 7; i++){
    var image = document.getElementById(images[i]);
    var letter = getTileLetter(image);
    if(word.includes(letter)){
      var tile = "";
      var letter = randomLetter();
      console.log("randomLetter = " + letter);
      if(letter[0] == "_"){
        tile = "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg";
      }
      else{
        tile = "graphics_data/Scrabble_Tiles/Scrabble_Tile_"+letter+".jpg";
      }
      image.src = tile;
    }
  }
  for(var i = 0; i < 15; i++){
    array[i] = "_";
  }
  document.getElementById("word").innerHTML = "";
  score = 0;
  document.getElementById("score").innerHTML = 0;
  moveHome();
}

//move all tiles back to the hand
function moveHome(){
  var top = "70px";
  var left = "0px";
  for(var i = 0; i < 7; i++){
    var div = document.getElementById(draggables[i]);
    div.style.postion = "absolute";
    div.style.left = left;
    div.style.top = top;
  }
}

//get the letter of a given tile
function getTileLetter(src){
  var letter = "";
  switch (src) {
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_A.jpg":
      letter = "A";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_B.jpg":
      letter = "B";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_Blank.jpg":
      letter = " ";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_C.jpg":
      letter = "C";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_D.jpg":
      letter = "D";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_E.jpg":
      letter = "E";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_F.jpg":
      letter = "F";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_G.jpg":
      letter = "G";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_H.jpg":
      letter = "H";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_I.jpg":
      letter = "I";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_J.jpg":
      letter = "J";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_K.jpg":
      letter = "K";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_L.jpg":
      letter = "L";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_M.jpg":
      letter = "M";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_N.jpg":
      letter = "N";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_O.jpg":
      letter = "O";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_P.jpg":
      letter = "P";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_Q.jpg":
      letter = "Q";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_R.jpg":
      letter = "R";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_S.jpg":
      letter = "S";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_T.jpg":
      letter = "T";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_U.jpg":
      letter = "U";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_V.jpg":
      letter = "V";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_W.jpg":
      letter = "W";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_X.jpg":
      letter = "X";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_Y.jpg":
      letter = "Y";
      break;
    case "graphics_data/Scrabble_Tiles/Scrabble_Tile_Z.jpg":
      letter = "Z";
      break;
    default:
      letter = "_";
    }
  return letter;
}
