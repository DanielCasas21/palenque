
function myFunction() {
var x = document.getElementById("myText").value;

document.getElementById("demo0").innerHTML = "Ma kananeo endi agué:";
document.getElementById("demo").innerHTML = "Í " + x + ".";
document.getElementById("demo1").innerHTML = "Bo " + x + ".";
document.getElementById("demo2").innerHTML = "Ele " + x + ".";
document.getElementById("demo3").innerHTML = "Suto " + x + ".";
document.getElementById("demo4").innerHTML = "Enú " + x + ".";
document.getElementById("demo5").innerHTML = "Ané " + x + ".";
}

function paratatikos(){
var x = document.getElementById("myText").value;

document.getElementById("demo6").innerHTML = "Ma kananeo endi ague yá:";
document.getElementById("demo7").innerHTML = "Í a tá " + x + ".";
document.getElementById("demo8").innerHTML = "Bo a tá " + x + ".";
document.getElementById("demo9").innerHTML = "Ele a tá " + x + ".";
document.getElementById("demo10").innerHTML = "Suto a tá " + x + ".";
document.getElementById("demo11").innerHTML = "Enú a tá " + x + ".";
document.getElementById("demo12").innerHTML = "Ané a tá " + x + ".";
}

function aoristos(){
var x = document.getElementById("myText").value;

document.getElementById("demo13").innerHTML = "Ma kananeo endi ayé:";
document.getElementById("demo14").innerHTML = "Í a " + x + ".";
document.getElementById("demo15").innerHTML = "Bo a " + x + ".";
document.getElementById("demo16").innerHTML = "Ele a " + x + ".";
document.getElementById("demo17").innerHTML = "Suto a " + x + ".";
document.getElementById("demo18").innerHTML = "Enú a " + x + ".";
document.getElementById("demo19").innerHTML = "Ané a " + x + ".";
}

function ayeToMaRia(){
var ayeToMaRia = document.getElementById("myText").value;
x = ayeToMaRia.replace(/á/, "a").replace(/é/, "e").replace(/í/, "i").replace(/ó/,"o").replace(/ú/,"u").replace(/Á/, "A").replace(/É/, "E").replace(/Í/, "I").replace(/Ó/, "O").replace(/Ú/, "U").replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/g,"");

document.getElementById("demo20").innerHTML = "Ma kananeo endi ayé to ma ria:";
document.getElementById("demo21").innerHTML = "Í " + x + "ba" + ".";
document.getElementById("demo22").innerHTML = "Bo " + x + "ba" + ".";
document.getElementById("demo23").innerHTML = "Ele " + x + "ba" + ".";
document.getElementById("demo24").innerHTML = "Suto " + x + "ba" + ".";
document.getElementById("demo25").innerHTML = "Enú " + x + "ba" + ".";
document.getElementById("demo26").innerHTML = "Ané " + x + "ba" + ".";
}

function maana(){
var x = document.getElementById("myText").value;

document.getElementById("demo27").innerHTML = "Ma kananeo endi maána:";
document.getElementById("demo28").innerHTML = "Í a tan " + x + ".";
document.getElementById("demo29").innerHTML = "Bo a tan " + x + ".";
document.getElementById("demo30").innerHTML = "Ele a tan " + x + ".";
document.getElementById("demo31").innerHTML = "Suto a tan " + x + ".";
document.getElementById("demo32").innerHTML = "Enú a tan " + x + ".";
document.getElementById("demo33").innerHTML = "Ané a tan " + x + ".";
}

function guatia(){
var x = document.getElementById("myText").value;

document.getElementById("demo100").innerHTML = "Guatiá akí bajo ya: &darr; &darr; &darr;";
}

