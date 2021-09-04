canvas = document.getElementById("myCanvas"); 
ctx= canvas.getContext("2d");


colour="blue";

mouseEvent = "";

width_of_line = 2;
radius = 50;

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown()
{
    colour=document.getElementById("colour").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    console.log("perfect");
    console.log(colour + " " + width_of_line + " " + radius);
    mouseEvent="mousedown";
}


function my_mouseup()
{
    colour=document.getElementById("colour").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
   
    mouseEvent="mouseup";
}

function my_mouseleave()
{
    colour=document.getElementById("colour").value;
    width_of_line = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
   
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    console.log("helo");
   
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown")
    {
        console.log("Current position of x and y coordinates = ")
        console.log("x = " + current_postion_of_mouse_x + "y = "+ current_postion_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_postion_of_mouse_x,current_postion_of_mouse_y,radius,0,2 * Math.PI);
        ctx.stroke();
    }
    mouseEvent = "mousedown";
}