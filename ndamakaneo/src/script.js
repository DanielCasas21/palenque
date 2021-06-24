var verbs = ["aguandá", "ajá", "ajogá", "ajuí", "ajundá", "akabá", "akanforá", "akietá", "akkansá", "aklamá", "akoddá", "akokiná", "akolá", "akotá", "akotumbrá", "akuñá", "alumbrá", "amalayá", "amanesé", "amblasá", "andá", "añingotá", "apagriná", "apatá", "apatí", "apelé", "apesé", "aporriá", "apurá", "apuró", "arí", "arorá", "arrumá", "asá", "asé", "asomá", "asotá", "atendé", "atrabé", "atsá", "balé", "brajutá", "jobbé", "jogá", "joká", "juggá", "juí", "jutá", "ká", "kandá", "kankaniá", "karankó", "karuchá", "karuká", "kayá", "kebrá", "kelé", "kemá", "kitá", "koé", "koká", "kokobiá", "kolá", "komblá", "komponé", "kondé", "kondolé", "kré", "kribí", "kuchá", "kujé", "kumbé", "kumbileé", "kundí", "kupí", "labá", "laggá", "lairá", "lendrá", "lesá", "liliá", "lisá", "lolé", "lompé", "lungá", "makaniá", "mblasá", "miá", "miná", "mingá", "miní", "mulimbiá", "pelé", "penkiá", "pi", "pirí", "plundá", "poré", "preñá", "prokió", "prundá", "raurrá", "rebé", "reboddá", "refunfuniá", "regañá", "sabá", "sabé", "sakiá", "sambá", "sambuí", "sangariá", "sangariamusá", "sangarriá", "sangulutiá", "sausá", "selá", "semblá", "sendá", "sindí", "sinsiná", "sofoká", "soná", "sunguiá", "supilitá", "susá", "susuriá", "tambaliá", "tapiá", "tarrayá", "tatabiyá", "tén", "tendá", "tetemblá", "tilá", "titiritiá", "topá", "tragá", "trakutiá", "tré", "trepá", "trochá", "trompiá", "tropiá", "tuntuniá"];

var maMakaneo = [{palenquero:"aguandá", español:"aguantar, resistir"}, {palenquero:"ajá", español:"insultar"}, {palenquero:"ajogá", español:"ahogar"}, {palenquero:"ajuí", español:"huir"}, {palenquero:"ajundá", español:"unir, juntar, agrupar, reunir. También ajutar el fogón."}, {palenquero:"akabá", español:"terminer, acabar, finalizar"}, {palenquero:"akanforá", español:"perder, ser derrotado"}, {palenquero:"akietá", español:"calmar, aquietar, tranquilizar"}, {palenquero:"akkansá", español:"alcanzar, lograr"}, {palenquero:"aklamá", español:"aclamar"}, {palenquero:"akoddá", español:"recordar, acordar"}, {palenquero:"akokiná", español:"amilanar, acobardar, amedrentar, asustar"}, {palenquero:"akolá", español:"recordar, acordar"}, {palenquero:"akotá", español:"acostar(se)"}, {palenquero:"akotumbrá", español:"adaptarse, habituarse, acostumbrarse"}, {palenquero:"akuñá", español:"cerrar, sellar // guardar, llenar, llenarse la boca con comida // golpear"}, {palenquero:"alumbrá", español:"alumbrar, iluminar // parir, dar a luz"}, {palenquero:"amalayá", español:"ansiar, desear (intensamente)"}, {palenquero:"amanesé", español:"amanecer"}, {palenquero:"amblasá", español:"abrazar"}, {palenquero:"andá", español:"andar, caminar"}, {palenquero:"añingotá", español:"agacharse, encogerse, doblarse"}, {palenquero:"apagriná", español:"ampararse, protegerse, refugiarse"}, {palenquero:"apatá", español:"Retirar, quitar, apartar // intervenir"}, {palenquero:"apatí", español:"dividir, partir, separar"}, {palenquero:"apelé", español:"perder, desaparecer"}, {palenquero:"apesé", español:"parecerse, asemejarse"}, {palenquero:"aporriá", español:"golpear, aporrear"}, {palenquero:"apurá", español:"apurarse, caminar rápido, tener prisa"}, {palenquero:"apuró", español:"apurarse, caminar rápido, tener prisa"}, {palenquero:"arí", español:"reír"}, {palenquero:"arorá", español:"adorar"}, {palenquero:"arrumá", español:"someter, subyugar"}, {palenquero:"asá", español:"asar, cocinar, freir"}, {palenquero:"asé", español:"hacer"}, {palenquero:"asomá", español:"asomarse"}, {palenquero:"asotá", español:"asotar, golpear, pegar"}, {palenquero:"atendé", español:"atender"}, {palenquero:"atrabé", español:"acostarse atravesado en la cama."}, {palenquero:"atsá", español:"alzar, elevar"}, {palenquero:"balé", español:"barrer"}, {palenquero:"brajutá", español:"regañar, insultar"}, {palenquero:"jobbé", español:"hervir"}, {palenquero:"jogá", español:"ahogar"}, {palenquero:"joká", español:"estrangular"}, {palenquero:"juggá", español:"juzgar"}, {palenquero:"juí", español:"huir"}, {palenquero:"jutá", español:"robar"}, {palenquero:"ká", español:"callarse, hacer silencio"}, {palenquero:"kandá", español:"cantar"}, {palenquero:"kankaniá", español:"leer"}, {palenquero:"karankó", español:"robar"}, {palenquero:"karuchá", español:"peinar"}, {palenquero:"karuká", español:"olvidar"}, {palenquero:"kayá", español:"callar"}, {palenquero:"kebrá", español:"quebrar, romper"}, {palenquero:"kelé", español:"querer, amar, desear"}, {palenquero:"kemá", español:"quemar"}, {palenquero:"kitá", español:"quitar, retirar"}, {palenquero:"koé", español:"tomar, coger"}, {palenquero:"koká", español:"rasparse"}, {palenquero:"kokobiá", español:"forcejar"}, {palenquero:"kolá", español:"acordarse, recordar"}, {palenquero:"komblá", español:"comprar"}, {palenquero:"komponé", español:"acomoder, arreglar, componer, poner en orden"}, {palenquero:"kondé", español:"esconder"}, {palenquero:"kondolé", español:"compadecerse"}, {palenquero:"kré", español:"creer"}, {palenquero:"kribí", español:"escribir"}, {palenquero:"kuchá", español:"escuchar"}, {palenquero:"kujé", español:"coger, tomar, agarrar"}, {palenquero:"kumbé", español:"gritar, hacer escándalo"}, {palenquero:"kumbileé", español:"engañar"}, {palenquero:"kumé", español:"comer"}, {palenquero:"kundí", español:"esconder"}, {palenquero:"kupí", español:"escupir"}, {palenquero:"labá", español:"lavar"}, {palenquero:"laggá", español:"largar"}, {palenquero:"lairá", español:"ladrar"}, {palenquero:"lendrá", español:"entrar"}, {palenquero:"lesá", español:"rezar"}, {palenquero:"liliá", español:"usar, utilizar"}, {palenquero:"lisá", español:"planchar"}, {palenquero:"lolé", español:"doler"}, {palenquero:"lompé", español:"romper"}, {palenquero:"lungá", español:"morir"}, {palenquero:"makaniá", español:"trabajar"}, {palenquero:"mblasá", español:"abrazar"}, {palenquero:"miá", español:"orinar"}, {palenquero:"miná", español:"ver, mirar"}, {palenquero:"mingá", español:"adorar"}, {palenquero:"miní", español:"venir"}, {palenquero:"mulimbiá", español:"tene sexo, hacer el amor"}, {palenquero:"pelé", español:"perder, perderse"}, {palenquero:"penkiá", español:"ganar, tener éxito"}, {palenquero:"pi", español:"ventosear, tener flatulencias"}, {palenquero:"pirí", español:"pedir"}, {palenquero:"plundá", español:"preguntar"}, {palenquero:"poré", español:"poder"}, {palenquero:"preñá", español:"embarazar, preñar"}, {palenquero:"prokió", español:"repartir"}, {palenquero:"prundá", español:"preguntar"}, {palenquero:"raurrá", español:"destruir, arruinar, deshacer"}, {palenquero:"rebé", español:"deber"}, {palenquero:"reboddá", español:"desbordar"}, {palenquero:"refunfuniá", español:"refunfuñar"}, {palenquero:"regañá", español:"regañar"}, {palenquero:"sabá", español:"salvar"}, {palenquero:"sabé", español:"saber, conocer"}, {palenquero:"sakiá", español:"saquear"}, {palenquero:"sambá", español:"saltar"}, {palenquero:"sambuí", español:"zambullirse, clavarse, echarse al agua"}, {palenquero:"sangariá", español:"bailar, mover las caderas"}, {palenquero:"sangariamusá", español:"obstaculizar, obstruir, derribar, hacer sancadilla"}, {palenquero:"sangarriá", español:"bailar, mover las caderas"}, {palenquero:"sangulutiá", español:"tener sexo, hacer el amor"}, {palenquero:"sausá", español:"ahumar la comida."}, {palenquero:"selá", español:"cerrar"}, {palenquero:"semblá", español:"cultivar, sembrar"}, {palenquero:"sendá", español:"sentarse"}, {palenquero:"sindí", español:"sentir"}, {palenquero:"sinsiná", español:"empinarse, ponerse de puntillas"}, {palenquero:"sofoká", español:"sudar"}, {palenquero:"soná", español:"sonar"}, {palenquero:"sunguiá", español:"tener sexo, hacer el amor"}, {palenquero:"supilitá", español:"superarse"}, {palenquero:"susá", español:"remover el fuego"}, {palenquero:"susuriá", español:"chismosiar"}, {palenquero:"tambaliá", español:"tambaliar"}, {palenquero:"tapiá", español:"dividir"}, {palenquero:"tarrayá", español:"extenderse, explayar, abrir ampliamente (una atarraya)"}, {palenquero:"tatabiyá", español:"tropezarse"}, {palenquero:"tén", español:"tener"}, {palenquero:"tendá", español:"tocar, palpar"}, {palenquero:"tetemblá", español:"tiritar, temblar"}, {palenquero:"tilá", español:"disparar, lanzar, obturar"}, {palenquero:"titiritiá", español:"tiritar, temblar"}, {palenquero:"topá", español:"encontrar"}, {palenquero:"tragá", español:"desaparecer"}, {palenquero:"trakutiá", español:"mirar detenidamente"}, {palenquero:"tré", español:"traer"}, {palenquero:"trepá", español:"trepar, escalar"}, {palenquero:"trochá", español:"talar"}, {palenquero:"trompiá", español:"pelear"}, {palenquero:"tropiá", español:"lastimar, maltratar"}, {palenquero:"tuntuniá", español:"buscar, hallar"}];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function autoFill() {
  var rand3 = Math.floor(Math.random() * verbs.length);
  var content = verbs[rand3] 
  document.getElementById('input1').value = content;

  if ( content === content ){
    var translation = maMakaneo.find(translation => translation.palenquero === content);
    document.getElementById("input2").innerHTML = '&#8594; "' + content.charAt(0).toUpperCase() + content.slice(1) + '" a sendá endi kateyano: ' + translation.español + '.'
  }
}

function ague() {
  var x = document.getElementById("input1").value;

  document.getElementById("demo0").innerHTML = "Makananeo endi agué:";
  document.getElementById("demo").innerHTML = "I " + x + ".";
  document.getElementById("demo1").innerHTML = "Bo " + x + ".";
  document.getElementById("demo2").innerHTML = "Ele " + x + ".";
  document.getElementById("demo3").innerHTML = "Suto " + x + ".";
  document.getElementById("demo4").innerHTML = "Enú " + x + ".";
  document.getElementById("demo5").innerHTML = "Ané " + x + ".";
}

function agueYa(){
  var x = document.getElementById("input1").value;

  document.getElementById("demo6").innerHTML = "Makananeo endi ague yá:";
  document.getElementById("demo7").innerHTML = "I ta " + x + ".";
  document.getElementById("demo8").innerHTML = "Bo ta " + x + ".";
  document.getElementById("demo9").innerHTML = "Ele ta " + x + ".";
  document.getElementById("demo10").innerHTML = "Suto ta " + x + ".";
  document.getElementById("demo11").innerHTML = "Enú ta " + x + ".";
  document.getElementById("demo12").innerHTML = "Ané ta " + x + ".";
}

function aye(){
  var x = document.getElementById("input1").value;

  document.getElementById("demo13").innerHTML = "Makananeo endi ayé:";
  document.getElementById("demo14").innerHTML = "I a " + x + ".";
  document.getElementById("demo15").innerHTML = "Bo a " + x + ".";
  document.getElementById("demo16").innerHTML = "Ele a " + x + ".";
  document.getElementById("demo17").innerHTML = "Suto a " + x + ".";
  document.getElementById("demo18").innerHTML = "Enú a " + x + ".";
  document.getElementById("demo19").innerHTML = "Ané a " + x + ".";
}

function ayeToMaRia(){
  var ayeToMaRia = document.getElementById("input1").value;
  x = ayeToMaRia.replace(/á/, "a").replace(/é/, "e").replace(/í/, "i").replace(/ó/,"o").replace(/ú/,"u").replace(/Á/, "A").replace(/É/, "E").replace(/Í/, "I").replace(/Ó/, "O").replace(/Ú/, "U").replace(/['|°¬!^`~"#$%&/()Çç=?¿{}_,.´+<>¡¨*:;]/g,"");

  document.getElementById("demo20").innerHTML = "Makananeo endi ayé tó ma ría:";
  document.getElementById("demo21").innerHTML = "I " + x + "ba" + ".";
  document.getElementById("demo22").innerHTML = "Bo " + x + "ba" + ".";
  document.getElementById("demo23").innerHTML = "Ele " + x + "ba" + ".";
  document.getElementById("demo24").innerHTML = "Suto " + x + "ba" + ".";
  document.getElementById("demo25").innerHTML = "Enú " + x + "ba" + ".";
  document.getElementById("demo26").innerHTML = "Ané " + x + "ba" + ".";
}

function maana(){
  var x = document.getElementById("input1").value;

  document.getElementById("demo27").innerHTML = "Makananeo endi maána:";
  document.getElementById("demo28").innerHTML = "I tan " + x + ".";
  document.getElementById("demo29").innerHTML = "Bo tan " + x + ".";
  document.getElementById("demo30").innerHTML = "Ele tan " + x + ".";
  document.getElementById("demo31").innerHTML = "Suto tan " + x + ".";
  document.getElementById("demo32").innerHTML = "Enú tan " + x + ".";
  document.getElementById("demo33").innerHTML = "Ané tan " + x + ".";
}

function guatia(){
  var x = document.getElementById("input1").value;
  document.getElementById("demo100").innerHTML = "Guatiá akí bajo ya: &darr; &darr; &darr;";
}