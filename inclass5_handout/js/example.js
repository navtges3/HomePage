// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul")[0];
var end = document.createElement("li");
end.appendChild(document.createTextNode("milk"));
ul.appendChild(end);

// ADD NEW ITEM START OF LIST
var start = document.createElement("li");
start.appendChild(document.createTextNode("butter"));
ul.appendChild(start);

//for loop wouldn't work
ul.getElementsByTagName('li')[5].innerHTML = ul.getElementsByTagName('li')[4].innerHTML;
ul.getElementsByTagName('li')[4].innerHTML = ul.getElementsByTagName('li')[3].innerHTML;
ul.getElementsByTagName('li')[3].innerHTML = ul.getElementsByTagName('li')[2].innerHTML;
ul.getElementsByTagName('li')[2].innerHTML = ul.getElementsByTagName('li')[1].innerHTML;
ul.getElementsByTagName('li')[1].innerHTML = ul.getElementsByTagName('li')[0].innerHTML;
ul.getElementsByTagName('li')[0].innerHTML = "butter";

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(var i = 0; i < 6; i++) {
  ul.getElementsByTagName("li")[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var header = document.getElementsByTagName("h2")[0];
var items = ul.getElementsByTagName('li').length;
header.appendChild(document.createTextNode(items));
