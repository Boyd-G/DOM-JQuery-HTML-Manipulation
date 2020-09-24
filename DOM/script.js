window.addEventListener("DOMContentLoaded", function () {
  //1 ADD BUTTON TO PAGE
  let btn1 = document.createElement("button");
  let myText = document.createTextNode("Click Me!");
  btn1.appendChild(myText);
  //1 APPEND BUTTON TO BODY
  document.body.appendChild(btn1);

  //ADD EVENT LISTENTER TO BUTTON TO DISPLAY AN ALERT ON 'CLICK'
  btn1.addEventListener("click", function () {
    alert("Good job, you've followed basic instructions!");
  });
  //2 ADD EVENT LISTENER TO 'myBtn' AND TEXT ALERT
  let btn = document.getElementById("alertBtn");
  btn.addEventListener("click", function () {
    let formText = document.getElementById("myTextId").value;
    alert('You\'ve clicked a button');
  });

  //3 bgDiv EVENT LISTENER ON MOUSEENTER AND CHANGE BG COLOR
  let bgDiv = document.getElementById("bgDiv");
  let ogColor;
  bgDiv.addEventListener("mouseenter", function () {
    ogColor = bgDiv.style.backgroundColor;
    bgDiv.style.backgroundColor = "slateblue";
  });

  //3 bgDiv EVENT LISTENER ON MOUSELEAVE TO RESET BG COLOR
  bgDiv.addEventListener("mouseleave", function () {
    bgDiv.style.backgroundColor = ogColor;
  });

  //4 EVENT LISTENER TO CHANGE 'P' COLOR
  let myP = document.getElementById("myP");
  myP.addEventListener("click", function () {
    myP.style.color =
      "rgb( " +
      randomColor() +
      "," +
      randomColor() +
      "," +
      randomColor() +
      " )";
  });
  function randomColor() {
    return Math.floor(Math.random() * 255);
  }

  //EVENT LISTENER ADDED TO 'myBtn' TO ADD SPAN TO THE DIV
  let div5 = document.getElementById("div5");
  let myBtn5 = document.getElementById("myBtn");
  myBtn.addEventListener("click", function () {
    //MAKES A SPAN
    let mySpan = document.createElement("span");
    let spanText = document.createTextNode("Boyd");
    mySpan.appendChild(spanText);
    //APPEND THE SPAN TO 'div5'
    div5.appendChild(mySpan);
  });

  //6 CREATES AN ARRAY OF 10 FRIENDS
  let friends = [
    "Bill",
    "Jean",
    "Lisa",
    "Steven",
    "William",
    "Jared",
    "Danielle",
    "Hunter",
    "John",
    "Jen",
  ];
  let fLength = friends.length;

  //EVENT LISTENER ON 'friendBtn'
  let friendBtn = document.getElementById("friendBtn");
  friendBtn.addEventListener("click", function () {
    let i = 0;
    while (i < fLength) {
      //CREATE 'li'
      let friendLi = document.createElement("li");
      // APPEND TEXT TO 'friendLi'
      let fNode = document.createTextNode(friends[i]);
      friendLi.appendChild(fNode);
      //APPEND 'friendLi' TO 'ul'
      let uL6 = document.getElementById("uL6");
      uL6.appendChild(friendLi);
      i++;
    }
  });
});
