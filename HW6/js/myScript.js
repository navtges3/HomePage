//This function is used to generate a table given four values
function myFunction() {
  //Get the values from the form
  var title = "Results";
  var valid = true;
  var numbers = new Array(5);
  numbers[0] = 1;
  numbers[1] = document.forms["myForm"]["n1"].value;
  numbers[2] = document.forms["myForm"]["n2"].value;
  numbers[3] = document.forms["myForm"]["n3"].value;
  numbers[4] = document.forms["myForm"]["n4"].value;

  if(document.forms["myForm"]["n1"].value.length == 0) {
    document.body.appendChild(document.createTextNode("It is empty"));
  }
  if(valid == true){
    //Generate the table
    var table = document.createElement('table');
    table.id = "myTable";
    //Outer loop to generate rows
    for (var i = 0; i < 5; i++){
      var tr = document.createElement('tr');
      //Inner loop to generate columns
      for (var j = 0; j < 6; j++){
        var val;
        //Make sure that the values stored in numbers are printed properly
        if(j == 0){
          val = numbers[i];
        }
        //Calculate the rest of the table values
        else{
          val = numbers[i] * j;
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
}
