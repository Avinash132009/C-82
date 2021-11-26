canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");

color = "red";
width= 1;
mouse_event= "";
pre_y , pre_x;

canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e) {
    color = document.getElementById("color").value;
    width= docuent.getElementById("width").value;
    mouse_event= "mouse_down";
}

canvas.addEventListener("mouseup" , mouse_up);

function mouse_up(e){
    mouse_event= "mouse_up";
}

canvas.addEventListener("mouseleave" , mouse_leave);

function mouse_leave(e){
    mouse_event= "mouse_leave";
}


canvas.addEventListener("mousemove" , mouse_move);

function mouse_move(e) {
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    if (mouse_event == "mouse_down"){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;

    ctx.moveTo(pre_x , pre_y);
    ctx.lineTo(mouse_x , mouse_y);
    ctx.stroke();
}

 //console.log("x - " + mouse_x + " y - " + mouse_y);
  function clear_area(e){
      ctx.clearRect(0 , 0 , ctx.canvas.width , ctx.canvas.height);
  }