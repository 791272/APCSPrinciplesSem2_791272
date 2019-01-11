window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight*3.5;
  ctx = canvas.getContext('2d'); // This is the context
  getJSON();
}
function getJSON(){
  var array = [];
  $.getJSON("data.json", function(json) {
    for (var i = 0; i < json.meteors.length; i++){
      array[i] = json.meteors[i].mass;
    }
    for(){
      var index = k;
      for(var  ){
        if(array[j] < array[index]){
          index = j;
      }
    }
    var smallerNumber = array[index];
    array[index] = array[k];
    array[k] = smallerNumber;
  }
   console.log(array);
  });
}
