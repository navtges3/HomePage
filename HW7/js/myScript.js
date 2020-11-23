//This function will generate the base table
function startup() {
  var startx = 1;
  var endx = 10;
  var starty = 1;
  var endy = 10;

  var table = document.createElement('table');
  table.id = "myTable";

  for (var i = starty - 1; i <= endy; i++){
    var tr = document.createElement('tr');
    //Inner loop to generate columns
    for (var j = startx - 1; j <= endx; j++){
      var val;
      if(i == starty - 1) {
        val = j;
      }
      else if(j == startx - 1) {
        val = i;
      }
      else{
        val = i * j;
      }
      //Create the cells and add them to the table
      var td = document.createElement('td');
      var text = document.createTextNode(val);
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  var div = document.getElementById('fragment0');
  div.appendChild(table);
}

//This function will change the value of the slider according to the value of the text box
function valueChanged(number) {
  var box, slider;
  switch (number) {
    case 1:
      box = "n1";
      slider = "#slider1";
      break;
    case 2:
      box = "n2";
      slider = "#slider2";
      break;
    case 3:
      box = "n3";
      slider = "#slider3";
      break;
    case 4:
      box = "n4";
      slider = "#slider4";
      break;
    default:
      box = "n1";
      slider = "#slider1";
  }
  var value = document.forms["myForm"][box].value;
  $(slider).slider( "value", value );
}

//This function is used to generate a table given four values
function updateTable() {
  //Get the values from the form
  var numbers = new Array(4);
  numbers[0] = document.forms["myForm"]["n1"].value;
  numbers[1] = document.forms["myForm"]["n2"].value;
  numbers[2] = document.forms["myForm"]["n3"].value;
  numbers[3] = document.forms["myForm"]["n4"].value;

  // swaps if start is bigger than end
  if(numbers[0] > numbers[1]){
    var temp = numbers[0];
    numbers[0] = numbers[1];
    numbers[1] = temp;
  }
  if(numbers[2] > numbers[3]){
    var temp = numbers[2];
    numbers[2] = numbers[3];
    numbers[3] = temp;
  }

  //get rid of old Table
  var elem = document.getElementById('myTable');
  if(typeof elem != 'undefined'){
    elem.parentNode.removeChild(elem);
  }

  //make a new table
  var table = document.createElement('table');
  table.id = "myTable";

  for (var i = numbers[2] - 1; i <= numbers[3]; i++){
    var tr = document.createElement('tr');
    //Inner loop to generate columns
    for (var j = numbers[0] - 1; j <= numbers[1]; j++){
      var val;
      if(i == numbers[2] - 1) {
        val = j;
      }
      else if(j == numbers[0] - 1) {
        val = i;
      }
      else{
        val = i * j;
      }
      //Create the cells and add them to the table
      var td = document.createElement('td');
      var text = document.createTextNode(val);
      td.appendChild(text);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  var div = document.getElementById('fragment0');
  div.appendChild(table);
}
