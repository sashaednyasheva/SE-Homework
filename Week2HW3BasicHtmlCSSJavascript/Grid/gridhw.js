
var colors = ["blue", "orange", "red", "yellow"];
var currentColor = 0; 
    
function changebackground()
{
    var outerdiv = document.getElementById("mainarea");
    var cells = outerdiv.getElementsByTagName("div");

    for(i=0; i<cells.length; i++) 
    {
    cells[i].style.backgroundColor = colors[currentColor];  
    }
    if(currentColor < colors.length - 1)
    {
    currentColor += 1; 
    }
    else 
    {
    currentColor = 0;
    }     
}
