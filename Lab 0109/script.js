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
    for (var k = 0; k < json.meteors.length; k++){
      if(json.meteors[k].mass == undefined){
        array[k] = 0;
      }else{
        array[k] = json.meteors[k].mass;
      }
    }

 // //bubbleSort
 //    for (var i = array.length-1; i > 0; i--){
 //      for(var j = 0; j < i; j++){
 //          if (Number(array[j]) > Number(array[j+1])){
 //            var temp = array[j];
 //            array[j] = array[j+1];
 //            array[j+1] = temp;
 //          }
 //        }
 //      }

 // //selectionSort
 //  for(var i = 0; i < array.length-1; i++){
     //    var index = i;
     //      for(var j = i+1; j < array.length; j++){
     //        if(Number(array[j]) < Number(array[index])){
     //          index = j;
     //        }
     //      }
     //      var temp = array[index];
     //      array[index] = array[i];
     //      array[i] = temp;
     //    }


// //insertSort
//     for(var i = 1; i < array.length; i++){
//       for(var j = i; j > 0; j--){
//         if(Number(array[j]) < Number(array[j-1])){
//           var temp = array[j];
//           array[j] = array[j-1];
//           array[j-1] = temp;
//         }
//       }
//     }


// // mySort
//     var frontCount = 0;
//     var backCount = array.length-1;
//     for(var i = 0; i < array.length/2; i++){
//       for(var j = frontCount; j < backCount; j++){
//         if(Number(array[j]) > Number(array[j+1])){
//           var temp = array[j];
//           array[j] = array[j+1];
//           array[j+1] = temp;
//         }
//       }
//       backCount--;
//       for(var k = backCount; k > frontCount; k--){
//         if(Number(array[k]) < Number(array[k-1])){
//           var temp = array[k];
//           array[k] = array[k-1];
//           array[k-1] = temp;
//         }
//       }
//       frontCount++;
//     }

console.log(array);
});
}
