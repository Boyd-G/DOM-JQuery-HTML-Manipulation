$('jQuery HTML').ready( function () {
    
    //1 ADD BUTTON ON PAGE
    $('body').append($('<button id="btn0">click me</button>'));
    
    //NICE MESSAGE ALERT FOR btn0
    $('body').on('click', '#btn0', function () {
      alert('Way to go, you clicked me!');
    })
    
    //2 PUT EVENT LISTENER ON 'myButton'
    $('#myButton').click( function() {
      alert($('#myTextId').val());
    })
    
    //3colorDIV EVENT LISTENER FOR MOUSEOVER
    $('#colorDiv').hover( function () {
      $(this).css('background-color', "black");
    },
    function () {
      $(this).css('background-color', "white");
    });
   
    //4 EVENT LISTENER TO CHANGE COLOR
    $('#lilP').click( function () {
      $(this).css("color", "rgb( " + randomColor() + "," + randomColor() + "," + randomColor() + " )");
    })
    function randomColor() {
      return Math.floor(Math.random() * 255);
    }
   
    //5EVENT LISTENER TO'nameBtn' ADD NAME SPAN TO 'nameDiv'
    $('#nameBtn').click(function () {
      $('#nameDiv').append('<span>Boyd</span>');
    })
   
    //6 FRIEND ARRAY
    let friends = ["Hunter", "Kimberly", "Danielle", "Anna", "Omar", "Jared", "Michael", "Pearce", "Harrison", "Jim"];
    let fLength = friends.length;
    
    //ADD EVENT LISTENER TO 'friendBtn'
    $('#friendBtn').click( function () {
      let i = 0;
      while (i < fLength) {
        $('#friendList').append($('<li>' + friends[i] + '</li>'));
        i++;
      }
    })
  })