const squares = document.querySelectorAll('.square');
let row = 1;
let col = 1;

squares.forEach((square, index) => {
  square.id = `${row}:${col}`;
  
  col++;
  if (col > 10) {
    col = 1;
    row++;
  }
});



var square_1_1 = document.getElementById("1:1");
var square_1_2 = document.getElementById("1:2");
var square_1_3 = document.getElementById("1:3");
var square_1_4 = document.getElementById("1:4");
var square_1_5 = document.getElementById("1:5");
var square_1_6 = document.getElementById("1:6");
var square_1_7 = document.getElementById("1:7");
var square_1_8 = document.getElementById("1:8");
var square_1_9 = document.getElementById("1:9");
var square_1_10 = document.getElementById("1:10");

var square_2_1 = document.getElementById("2:1");
var square_2_2 = document.getElementById("2:2");
var square_2_3 = document.getElementById("2:3");
var square_2_4 = document.getElementById("2:4");
var square_2_5 = document.getElementById("2:5");
var square_2_6 = document.getElementById("2:6");
var square_2_7 = document.getElementById("2:7");
var square_2_8 = document.getElementById("2:8");
var square_2_9 = document.getElementById("2:9");
var square_2_10 = document.getElementById("2:10");

var square_3_1 = document.getElementById("3:1");
var square_3_2 = document.getElementById("3:2");
var square_3_3 = document.getElementById("3:3");
var square_3_4 = document.getElementById("3:4");
var square_3_5 = document.getElementById("3:5");
var square_3_6 = document.getElementById("3:6");
var square_3_7 = document.getElementById("3:7");
var square_3_8 = document.getElementById("3:8");
var square_3_9 = document.getElementById("3:9");
var square_3_10 = document.getElementById("3:10");

var square_4_1 = document.getElementById("4:1");
var square_4_2 = document.getElementById("4:2");
var square_4_3 = document.getElementById("4:3");
var square_4_4 = document.getElementById("4:4");
var square_4_5 = document.getElementById("4:5");
var square_4_6 = document.getElementById("4:6");
var square_4_7 = document.getElementById("4:7");
var square_4_8 = document.getElementById("4:8");
var square_4_9 = document.getElementById("4:9");
var square_4_10 = document.getElementById("4:10");

var square_5_1 = document.getElementById("5:1");
var square_5_2 = document.getElementById("5:2");
var square_5_3 = document.getElementById("5:3");
var square_5_4 = document.getElementById("5:4");
var square_5_5 = document.getElementById("5:5");
var square_5_6 = document.getElementById("5:6");
var square_5_7 = document.getElementById("5:7");
var square_5_8 = document.getElementById("5:8");
var square_5_9 = document.getElementById("5:9");
var square_5_10 = document.getElementById("5:10");

var square_6_1 = document.getElementById("6:1");
var square_6_2 = document.getElementById("6:2");
var square_6_3 = document.getElementById("6:3");
var square_6_4 = document.getElementById("6:4");
var square_6_5 = document.getElementById("6:5");
var square_6_6 = document.getElementById("6:6");
var square_6_7 = document.getElementById("6:7");
var square_6_8 = document.getElementById("6:8");
var square_6_9 = document.getElementById("6:9");
var square_6_10 = document.getElementById("6:10");

var square_7_1 = document.getElementById("7:1");
var square_7_2 = document.getElementById("7:2");
var square_7_3 = document.getElementById("7:3");
var square_7_4 = document.getElementById("7:4");
var square_7_5 = document.getElementById("7:5");
var square_7_6 = document.getElementById("7:6");
var square_7_7 = document.getElementById("7:7");
var square_7_8 = document.getElementById("7:8");
var square_7_9 = document.getElementById("7:9");
var square_7_10 = document.getElementById("7:10");

var square_8_1 = document.getElementById("8:1");
var square_8_2 = document.getElementById("8:2");
var square_8_3 = document.getElementById("8:3");
var square_8_4 = document.getElementById("8:4");
var square_8_5 = document.getElementById("8:5");
var square_8_6 = document.getElementById("8:6");
var square_8_7 = document.getElementById("8:7");
var square_8_8 = document.getElementById("8:8");
var square_8_9 = document.getElementById("8:9");
var square_8_10 = document.getElementById("8:10");

var square_9_1 = document.getElementById("9:1");
var square_9_2 = document.getElementById("9:2");
var square_9_3 = document.getElementById("9:3");
var square_9_4 = document.getElementById("9:4");
var square_9_5 = document.getElementById("9:5");
var square_9_6 = document.getElementById("9:6");
var square_9_7 = document.getElementById("9:7");
var square_9_8 = document.getElementById("9:8");
var square_9_9 = document.getElementById("9:9");
var square_9_10 = document.getElementById("9:10");

var square_10_1 = document.getElementById("10:1");
var square_10_2 = document.getElementById("10:2");
var square_10_3 = document.getElementById("10:3");
var square_10_4 = document.getElementById("10:4");
var square_10_5 = document.getElementById("10:5");
var square_10_6 = document.getElementById("10:6");
var square_10_7 = document.getElementById("10:7");
var square_10_8 = document.getElementById("10:8");
var square_10_9 = document.getElementById("10:9");
var square_10_10 = document.getElementById("10:10");




    var follower = document.getElementById('follower');

    document.addEventListener('mousemove', function(e) {
      follower.style.left = e.pageX + 'px';
      follower.style.top = e.pageY + 'px';
    });


    var wood = document.getElementById("wood");
wood.addEventListener("mouseover", function() {
    follower.style.opacity = 1;
    follower.innerText = "Wood: 0";
});
wood.addEventListener("mouseout", function() {
    follower.style.opacity = 0;
    follower.innerText = "";
});


    var stone = document.getElementById("stone");
stone.addEventListener("mouseover", function() {
    follower.style.opacity = 1;
    follower.innerText = "Stone: 0";
});
stone.addEventListener("mouseout", function() {
    follower.style.opacity = 0;
    follower.innerText = "";
});

var house = document.getElementById("house");
house.addEventListener("mouseover", function() {
    follower.style.opacity = 1;
    follower.innerHTML = "<b>House</b><br>Wood: 5<br>Stone: 3<br><b>Benefits</b><br>+1 Civilian<br><br>Click to craft";
});
house.addEventListener("mouseout", function() {
    follower.style.opacity = 0;
    follower.innerText = "";
});