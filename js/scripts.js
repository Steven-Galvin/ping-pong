// Business logic

var pingPong = function(number) {
  var pingPongArray = [];
  for (var index = 1; index <= number; index += 1) {
    if (index % 3 === 0 && index % 5 !== 0) {
      pingPongArray.push("Ping!")
    } else if (index % 5 === 0 && index % 3 !== 0) {
      pingPongArray.push("Pong!")
    } else if (index % 15 === 0) {
      pingPongArray.push("Ping-pong!")
    } else {
      pingPongArray.push(index)
    }
  };
  return pingPongArray;
};

// UI logic

$(document).ready(function() {
  $('form').submit(function(event) {
    var number = parseInt($('#userInput').val());
    var results = pingPong(number)
    console.log(results);
    results.forEach(function(output) {
      $('.output').append("<li>" + output + "</li>")
    });

    event.preventDefault();
  });
});
