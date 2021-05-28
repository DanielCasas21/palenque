var verbs = ["miní", "kuchá", "kumé", "kandá", "guatiá", "sarangiá", "lungá", "aporriá", "ndrumí", 
"yolá", "aguandá", "ajá" , "ajogá", "ajuí", "ajundá", "akabá", "akanforá", "akietá", "akkansá", 
"aklamalo", "akoddá", "akokiná", "akolá", "akotá", "akotumbrá", "akuñá", "alumbrá", "amalayá", 
"amanesé", "amblasá", "andá", "añingotá", "apagriná", "apatá", "apatí", "apelé", "apesé", "aporriá", 
"apurá", "apuró", "arí", "arorá", "asé", "asá", "asomá", "asotá", 
"asotalo", "atendé", "atorugase", "atrabé", "atsá", "balé", "jobbé", "jogá", "joká", "jugá mbilé", 
"juggá", "juí", "jutá", "ká", "kandá", "karankó", "karuchá", "karuká", "kayá", "kebrá", "kelé", "kemá",
 "kitalo", "koé", "koká", "kokobiá", "kolá", "komblá", "komponé", "kondé", "kondolé", "kré", "kribí",
"kuchá", "kujé", "kumbé", "kumbileé", "kundí", "kupí", "labá", "laggá", "lairá", "ba pa lajuela", "lendrá", 
"lesá", "liliá", "lisa", "lolé", "lompé", "lungá", "mblasá", "miá", "miná", "minga", 
"miní", "risí monó", "mulimbiá", "pelé", "penkiá", "pi", "pirí", "plundá", "poré", "preñar", "prokió", 
"prundá", "raurrá", "rebé", "reboddá", "refunfuniá", "regañá", "sabá", "sabé", "sakiá", 
"sambuí", "sangariá", "sangariamusá", "sangarriá", "sangulutiá", "sausá", "selá", "semblá", 
"tá sendao", "sindí", "sinsiná", "sofoká", "soná",   "sunguiá", "supilitá", 
"susá", "susuría", "tambaliá", "tán yendo", "tapiá",  "tarrayá", "tatabiyá", "tén", "tendá", 
"tetemblá", "tilá", "titiritiá", "topá", "makaneá", "tragá", "trakutiá", "tré", "trepá", "trochá",
"trompiá", "tropiá", "tuntuniá",   "tán", "yolá", "guatiá", "ndrumí"];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function autoFill() {
  var rand3 = Math.floor(Math.random() * verbs.length);
  var content = verbs[rand3] 
  document.getElementById('input1').value = content;
}

function ague() {
  var x = document.getElementById("input1").value;

  document.getElementById("demo0").innerHTML = "Ma kananeo endi agué:";
  document.getElementById("demo").innerHTML = "Í " + x + ".";
  document.getElementById("demo1").innerHTML = "Bo " + x + ".";
  document.getElementById("demo2").innerHTML = "Ele " + x + ".";
  document.getElementById("demo3").innerHTML = "Suto " + x + ".";
  document.getElementById("demo4").innerHTML = "Enú " + x + ".";
  document.getElementById("demo4").innerHTML = "Ané " + x + ".";
}

function agueYa(){
  var x = document.getElementById("input1").value;

  document.getElementById("demo6").innerHTML = "Ma kananeo endi ague yá:";
  document.getElementById("demo7").innerHTML = "Í a tá " + x + ".";
  document.getElementById("demo8").innerHTML = "Bo a tá " + x + ".";
  document.getElementById("demo9").innerHTML = "Ele a tá " + x + ".";
  document.getElementById("demo10").innerHTML = "Suto a tá " + x + ".";
  document.getElementById("demo11").innerHTML = "Enú a tá " + x + ".";
  document.getElementById("demo12").innerHTML = "Ané a tá " + x + ".";
}

function aye(){
  var x = document.getElementById("input1").value;

  document.getElementById("demo13").innerHTML = "Ma kananeo endi ayé:";
  document.getElementById("demo14").innerHTML = "Í a " + x + ".";
  document.getElementById("demo15").innerHTML = "Bo a " + x + ".";
  document.getElementById("demo16").innerHTML = "Ele a " + x + ".";
  document.getElementById("demo17").innerHTML = "Suto a " + x + ".";
  document.getElementById("demo18").innerHTML = "Enú a " + x + ".";
  document.getElementById("demo19").innerHTML = "Ané a " + x + ".";
}

function ayeToMaRia(){
  var ayeToMaRia = document.getElementById("input1").value;
  x = ayeToMaRia.replace(/á/, "a").replace(/é/, "e").replace(/í/, "i").replace(/ó/,"o").replace(/ú/,"u").replace(/Á/, "A").replace(/É/, "E").replace(/Í/, "I").replace(/Ó/, "O").replace(/Ú/, "U").replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/g,"");

  document.getElementById("demo20").innerHTML = "Ma kananeo endi ayé:";
  document.getElementById("demo21").innerHTML = "Í " + x + "ba" + ".";
  document.getElementById("demo22").innerHTML = "Bo " + x + "ba" + ".";
  document.getElementById("demo23").innerHTML = "Ele " + x + "ba" + ".";
  document.getElementById("demo24").innerHTML = "Suto " + x + "ba" + ".";
  document.getElementById("demo25").innerHTML = "Enú " + x + "ba" + ".";
  document.getElementById("demo26").innerHTML = "Ané " + x + "ba" + ".";
}

function maana(){
  var x = document.getElementById("input1").value;

  document.getElementById("demo27").innerHTML = "Ma kananeo endi maána:";
  document.getElementById("demo28").innerHTML = "Í a tan " + x + ".";
  document.getElementById("demo29").innerHTML = "Bo a tan " + x + ".";
  document.getElementById("demo30").innerHTML = "Ele a tan " + x + ".";
  document.getElementById("demo31").innerHTML = "Suto a tan " + x + ".";
  document.getElementById("demo32").innerHTML = "Enú a tan " + x + ".";
  document.getElementById("demo33").innerHTML = "Ané a tan " + x + ".";
}

function guatia(){
  var x = document.getElementById("input1").value;
 document.getElementById("demo100").innerHTML = "Guatiá akí bajo ya: &darr; &darr; &darr;";
}