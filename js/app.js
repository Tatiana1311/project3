$(document).ready(function(){

$('#background').change(function(){
    if($('#background').val() == 'am') {
      $('#canvas').css({
        backgroundColor:"#FFCC99"
      });
    } else if($('#background').val() == 'pm') {
      $('#canvas').css({
        backgroundColor:"#663333"
      });
    } //end if
  }); //end change

  $('#draw').click(function(){
    $('canvas').clearCanvas()

    .drawEllipse({
      //fillStyle: 'red',
      strokeStyle: 'red',
      strokeWidth: 5,
      x: 102, y: 200,
      width: 95, height: 200
    })
    .drawEllipse({
      //fillStyle: 'red',
      strokeStyle: 'red',
      strokeWidth: 5,
      x: 195, y: 200,
      width: 90, height: 200
    })
    .clearCanvas({
      x: 50, y: 250,
      width: 410,
      height: 120
    })
    .drawLine({
      strokeStyle: 'red',
      strokeWidth: 5,
      rounded: true,
      x1: 55, y1: 190,
      x2: 150, y2: 300,
      x3: 240, y3: 190
      //fillStyle: 'red'
    })
    .drawArc({
      strokeStyle: '#9900CC',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 25,
      start: 270, end: 90
    })
    .drawArc({
      strokeStyle: '#3300CC',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 50,
      start: 270, end: 90
    }).drawArc({
      strokeStyle: '#0066FF',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 75,
      start: 270, end: 90
    }).drawArc({
      strokeStyle: '#009900',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 100,
      start: 270, end: 90
    }).drawArc({
      strokeStyle: '#CCFF00',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 125,
      start: 270, end: 90
    }).drawArc({
      strokeStyle: '#FF6600',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 150,
      start: 270, end: 90
    }).drawArc({
      strokeStyle: '#CC0000',
      strokeWidth: 10,
      x: 500,
      y: 500,
      radius: 175,
      start: 270, end: 90
    });
      
   });//end click

    $('#paint').click(function(){
       $('canvas').drawEllipse({
      fillStyle: 'red',
      strokeStyle: 'red',
      strokeWidth: 5,
      x: 102, y: 200,
      width: 95, height: 200
    })
    .drawEllipse({
      fillStyle: 'red',
      strokeStyle: 'red',
      strokeWidth: 5,
      x: 195, y: 200,
      width: 90, height: 200
    })
    .clearCanvas({
      x: 50, y: 250,
      width: 410,
      height: 120
    })
    .drawLine({
      strokeStyle: 'red',
      strokeWidth: 5,
      rounded: true,
      x1: 55, y1: 190,
      x2: 150, y2: 300,
      x3: 240, y3: 190,
      fillStyle: 'red'
      
    });//end draw
    }); //end click

    $('#clear').click(function(){
      $('#canvas').clearCanvas();
    }); //end click-clear


}); //end ready