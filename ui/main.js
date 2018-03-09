// Counter code
var button = document.getElementById('Counter');
var counter = 0;


 button.onclick = function () {
  
  // make a request to the counter end point
  
  // capture the response and store it in a variable
   
  // Render the variable in the correct span
  
  counter = counter + 1;
  var span = document.getElementById('Count');
  span.innerHTML = counter.toString();
  
  };
