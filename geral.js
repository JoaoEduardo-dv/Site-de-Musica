var trocaCorLink = document.getElementsByClassName(".hoverLinks").style.background-color != "rgb(59, 59, 59)";

function trocaCor(){
    if(trocaCorLink = true){
        document.getElementsByClassName(".hoverLinks").style.background-color == "rgb(59, 59, 59)";
    }
}

// var audio = document.getElementsByClassName("audio").style.display == "none";

// function tocarMusic(){

// }

// carrosel

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}