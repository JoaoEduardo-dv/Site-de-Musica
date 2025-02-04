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

// menu

function botaoMenu() {
    const menu = document.getElementById("menu");
    // const menunada = document.getElementById("menunada");

    if (window.innerWidth <= 600) { // Garante que a lógica só funcione para telas pequenas
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "block"; // Mostra o menu
        } else {
            menu.style.display = "none"; // Esconde o menu
        }
        // if(menunada.style.display === "none" || menunada.style.display === ""){
        //     menunada.style.display = "block";
        // }
        // else{
        //     menunada.style.display = "none";
        // }
    }
}
