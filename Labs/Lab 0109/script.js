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
    
  /* bubbleSort
    for (var i = array.length-1; i > 0; i--){
      for(var j = 0; j < i; j++){
        if (array[j].length > array[j+1].length){
          var temp = array[j].length;
            array[j].length = array[j+1].length;
            array[j+1].length = temp;
          }
        }
      }

    /* selectionSort
      for(var i = 0; i < array.length-1; i++){
        var index = i;
          for(var j = i+1; j < array.length; j++){
            if(array[j].length < array[index].length){
              index = j;
            }
          }
          var temp = array[index].length;
          array[index].length = array[i].length;
          array[i].length = temp;
        }
      */

 /* insertSort
    for(var i = 1; i < array.length; i++){
      for(var j = i; j > 0; j--){
        if(array[j].length < array[j-1].length){
          var temp = array[j].length;
          array[j].length = array[j-1].length;
          array[j-1].length = temp;
        }
      }
    }
  */
console.log(array);
});
}
