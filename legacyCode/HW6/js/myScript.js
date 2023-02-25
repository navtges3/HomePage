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
  document.body.appendChild(table);
}

//This function is used to generate a table given four values
function myFunction() {
  //Get the values from the form
  var numbers = new Array(4);
  numbers[0] = document.forms["myForm"]["n1"].value;
  numbers[1] = document.forms["myForm"]["n2"].value;
  numbers[2] = document.forms["myForm"]["n3"].value;
  numbers[3] = document.forms["myForm"]["n4"].value;

//if nothing is sumbitted
  for(var x = 0; x < 4; x++){
    if(numbers[x] == null || numbers[x] == ""){
      if(x == 0 || x == 2)
        numbers[x] = 1;
      else {
        numbers[x] = 10;
      }
    }
  }

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
  document.body.appendChild(table);
}
