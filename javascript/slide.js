var slide1 = document.getElementById("slid1");

var slide2 = document.getElementById("slid2");

var slide3 = document.getElementById("slid3");

var slide4 = document.getElementById("slid4");

function slider(){
    slide1.style.display="block";
    slide2.style.display="none";
    slide3.style.display="none";
    slide4.style.display="none";
    setTimeout("slider2()" ,3000);
}

function slider2(){
    slide1.style.display="none";
    slide2.style.display="block";
    slide3.style.display="none";
    slide4.style.display="none";
    setTimeout("slider3()" ,3000);
}

function slider3(){
    slide1.style.display="none";
    slide2.style.display="none";
    slide3.style.display="block";
    slide4.style.display="none";
    setTimeout("slider4()" ,3000);
}

function slider4(){
    slide1.style.display="none";
    slide2.style.display="none";
    slide3.style.display="none";
    slide4.style.display="block";
    setTimeout("slider()" ,3000);
}

function trocaBgi(){
    var bgi1
    bgi1 = document.getElementById("corpo");

    bgi1.style.backgroundImage = "url('imagens/siva.gif')";
    bgi1.style.backgroundSize = "150px"
    setTimeout("trocaBgi2()",5000);
}

function trocaBgi2(){
var bgi2
bgi2 = document.getElementById("corpo");

bgi2.style.backgroundImage = "url('imagens/siva2.gif')";
bgi2.style.backgroundSize = "350px";

setTimeout("trocaBgi()",4000);
}