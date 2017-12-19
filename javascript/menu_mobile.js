var menu = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var contagem = true;


function trocaMenu(){

    contagem = !contagem;
    menu2.style.display = contagem ? "block" : "none";
        
}