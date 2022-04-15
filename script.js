function colorChange (color) { 

    document.body.style.backgroundColor = color; 

    document.getElementById("paragraph").innerHTML = `Your current background color is ${color}.`; 

    if(color == "white") { 

        document.getElementById("paragraph").style.color = "black"; 

    } 

    else{ 

        document.getElementById("paragraph").style.color = color; 

    } 

} 