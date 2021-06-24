function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function(e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
var verbos = ["aguandá", "ajá", "ajogá", "ajuí", "ajundá", "akabá", "akanforá", "akietá", "akkansá", "aklamá", "akoddá", "akokiná", "akolá", "akotá", "akotumbrá", "akuñá", "alumbrá", "amalayá", "amanesé", "amblasá", "andá", "añingotá", "apagriná", "apatá", "apatí", "apelé", "apesé", "aporriá", "apurá", "apuró", "arí", "arorá", "arrumá", "asá", "asé", "asomá", "asotá", "atendé", "atrabé", "atsá", "balé", "brajutá", "jobbé", "jogá", "joká", "juggá", "juí", "jutá", "ká", "kandá", "kankaniá", "karankó", "karuchá", "karuká", "kayá", "kebrá", "kelé", "kemá", "kitá", "koé", "koká", "kokobiá", "kolá", "komblá", "komponé", "kondé", "kondolé", "kré", "kribí", "kuchá", "kujé", "kumbé", "kumbileé", "kundí", "kupí", "labá", "laggá", "lairá", "lendrá", "lesá", "liliá", "lisá", "lolé", "lompé", "lungá", "makaniá", "mblasá", "miá", "miná", "mingá", "miní", "mulimbiá", "pelé", "penkiá", "pi", "pirí", "plundá", "poré", "preñá", "prokió", "prundá", "raurrá", "rebé", "reboddá", "refunfuniá", "regañá", "sabá", "sabé", "sakiá", "sambá", "sambuí", "sangariá", "sangariamusá", "sangarriá", "sangulutiá", "sausá", "selá", "semblá", "sendá", "sindí", "sinsiná", "sofoká", "soná", "sunguiá", "supilitá", "susá", "susuriá", "tambaliá", "tapiá", "tarrayá", "tatabiyá", "tén", "tendá", "tetemblá", "tilá", "titiritiá", "topá", "tragá", "trakutiá", "tré", "trepá", "trochá", "trompiá", "tropiá", "tuntuniá"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), verbos);

var maMakaneo = [{palenquero:"aguandá", español:"aguantar, resistir"}, {palenquero:"ajá", español:"insultar"}, {palenquero:"ajogá", español:"ahogar"}, {palenquero:"ajuí", español:"huir"}, {palenquero:"ajundá", español:"unir, juntar, agrupar, reunir. También ajutar el fogón."}, {palenquero:"akabá", español:"terminer, acabar, finalizar"}, {palenquero:"akanforá", español:"perder, ser derrotado"}, {palenquero:"akietá", español:"calmar, aquietar, tranquilizar"}, {palenquero:"akkansá", español:"alcanzar, lograr"}, {palenquero:"aklamá", español:"aclamar"}, {palenquero:"akoddá", español:"recordar, acordar"}, {palenquero:"akokiná", español:"amilanar, acobardar, amedrentar, asustar"}, {palenquero:"akolá", español:"recordar, acordar"}, {palenquero:"akotá", español:"acostar(se)"}, {palenquero:"akotumbrá", español:"adaptarse, habituarse, acostumbrarse"}, {palenquero:"akuñá", español:"cerrar, sellar // guardar, llenar, llenarse la boca con comida // golpear"}, {palenquero:"alumbrá", español:"alumbrar, iluminar // parir, dar a luz"}, {palenquero:"amalayá", español:"ansiar, desear (intensamente)"}, {palenquero:"amanesé", español:"amanecer"}, {palenquero:"amblasá", español:"abrazar"}, {palenquero:"andá", español:"andar, caminar"}, {palenquero:"añingotá", español:"agacharse, encogerse, doblarse"}, {palenquero:"apagriná", español:"ampararse, protegerse, refugiarse"}, {palenquero:"apatá", español:"Retirar, quitar, apartar // intervenir"}, {palenquero:"apatí", español:"dividir, partir, separar"}, {palenquero:"apelé", español:"perder, desaparecer"}, {palenquero:"apesé", español:"parecerse, asemejarse"}, {palenquero:"aporriá", español:"golpear, aporrear"}, {palenquero:"apurá", español:"apurarse, caminar rápido, tener prisa"}, {palenquero:"apuró", español:"apurarse, caminar rápido, tener prisa"}, {palenquero:"arí", español:"reír"}, {palenquero:"arorá", español:"adorar"}, {palenquero:"arrumá", español:"someter, subyugar"}, {palenquero:"asá", español:"asar, cocinar, freir"}, {palenquero:"asé", español:"hacer"}, {palenquero:"asomá", español:"asomarse"}, {palenquero:"asotá", español:"asotar, golpear, pegar"}, {palenquero:"atendé", español:"atender"}, {palenquero:"atrabé", español:"acostarse atravesado en la cama."}, {palenquero:"atsá", español:"alzar, elevar"}, {palenquero:"balé", español:"barrer"}, {palenquero:"brajutá", español:"regañar, insultar"}, {palenquero:"jobbé", español:"hervir"}, {palenquero:"jogá", español:"ahogar"}, {palenquero:"joká", español:"estrangular"}, {palenquero:"juggá", español:"juzgar"}, {palenquero:"juí", español:"huir"}, {palenquero:"jutá", español:"robar"}, {palenquero:"ká", español:"callarse, hacer silencio"}, {palenquero:"kandá", español:"cantar"}, {palenquero:"kankaniá", español:"leer"}, {palenquero:"karankó", español:"robar"}, {palenquero:"karuchá", español:"peinar"}, {palenquero:"karuká", español:"olvidar"}, {palenquero:"kayá", español:"callar"}, {palenquero:"kebrá", español:"quebrar, romper"}, {palenquero:"kelé", español:"querer, amar, desear"}, {palenquero:"kemá", español:"quemar"}, {palenquero:"kitá", español:"quitar, retirar"}, {palenquero:"koé", español:"tomar, coger"}, {palenquero:"koká", español:"rasparse"}, {palenquero:"kokobiá", español:"forcejar"}, {palenquero:"kolá", español:"acordarse, recordar"}, {palenquero:"komblá", español:"comprar"}, {palenquero:"komponé", español:"acomoder, arreglar, componer, poner en orden"}, {palenquero:"kondé", español:"esconder"}, {palenquero:"kondolé", español:"compadecerse"}, {palenquero:"kré", español:"creer"}, {palenquero:"kribí", español:"escribir"}, {palenquero:"kuchá", español:"escuchar"}, {palenquero:"kujé", español:"coger, tomar, agarrar"}, {palenquero:"kumbé", español:"gritar, hacer escándalo"}, {palenquero:"kumbileé", español:"engañar"}, {palenquero:"kumé", español:"comer"}, {palenquero:"kundí", español:"esconder"}, {palenquero:"kupí", español:"escupir"}, {palenquero:"labá", español:"lavar"}, {palenquero:"laggá", español:"largar"}, {palenquero:"lairá", español:"ladrar"}, {palenquero:"lendrá", español:"entrar"}, {palenquero:"lesá", español:"rezar"}, {palenquero:"liliá", español:"usar, utilizar"}, {palenquero:"lisá", español:"planchar"}, {palenquero:"lolé", español:"doler"}, {palenquero:"lompé", español:"romper"}, {palenquero:"lungá", español:"morir"}, {palenquero:"makaniá", español:"trabajar"}, {palenquero:"mblasá", español:"abrazar"}, {palenquero:"miá", español:"orinar"}, {palenquero:"miná", español:"ver, mirar"}, {palenquero:"mingá", español:"adorar"}, {palenquero:"miní", español:"venir"}, {palenquero:"mulimbiá", español:"tene sexo, hacer el amor"}, {palenquero:"pelé", español:"perder, perderse"}, {palenquero:"penkiá", español:"ganar, tener éxito"}, {palenquero:"pi", español:"ventosear, tener flatulencias"}, {palenquero:"pirí", español:"pedir"}, {palenquero:"plundá", español:"preguntar"}, {palenquero:"poré", español:"poder"}, {palenquero:"preñá", español:"embarazar, preñar"}, {palenquero:"prokió", español:"repartir"}, {palenquero:"prundá", español:"preguntar"}, {palenquero:"raurrá", español:"destruir, arruinar, deshacer"}, {palenquero:"rebé", español:"deber"}, {palenquero:"reboddá", español:"desbordar"}, {palenquero:"refunfuniá", español:"refunfuñar"}, {palenquero:"regañá", español:"regañar"}, {palenquero:"sabá", español:"salvar"}, {palenquero:"sabé", español:"saber, conocer"}, {palenquero:"sakiá", español:"saquear"}, {palenquero:"sambá", español:"saltar"}, {palenquero:"sambuí", español:"zambullirse, clavarse, echarse al agua"}, {palenquero:"sangariá", español:"bailar, mover las caderas"}, {palenquero:"sangariamusá", español:"obstaculizar, obstruir, derribar, hacer sancadilla"}, {palenquero:"sangarriá", español:"bailar, mover las caderas"}, {palenquero:"sangulutiá", español:"tener sexo, hacer el amor"}, {palenquero:"sausá", español:"ahumar la comida."}, {palenquero:"selá", español:"cerrar"}, {palenquero:"semblá", español:"cultivar, sembrar"}, {palenquero:"sendá", español:"sentarse"}, {palenquero:"sindí", español:"sentir"}, {palenquero:"sinsiná", español:"empinarse, ponerse de puntillas"}, {palenquero:"sofoká", español:"sudar"}, {palenquero:"soná", español:"sonar"}, {palenquero:"sunguiá", español:"tener sexo, hacer el amor"}, {palenquero:"supilitá", español:"superarse"}, {palenquero:"susá", español:"remover el fuego"}, {palenquero:"susuriá", español:"chismosiar"}, {palenquero:"tambaliá", español:"tambaliar"}, {palenquero:"tapiá", español:"dividir"}, {palenquero:"tarrayá", español:"extenderse, explayar, abrir ampliamente (una atarraya)"}, {palenquero:"tatabiyá", español:"tropezarse"}, {palenquero:"tén", español:"tener"}, {palenquero:"tendá", español:"tocar, palpar"}, {palenquero:"tetemblá", español:"tiritar, temblar"}, {palenquero:"tilá", español:"disparar, lanzar, obturar"}, {palenquero:"titiritiá", español:"tiritar, temblar"}, {palenquero:"topá", español:"encontrar"}, {palenquero:"tragá", español:"desaparecer"}, {palenquero:"trakutiá", español:"mirar detenidamente"}, {palenquero:"tré", español:"traer"}, {palenquero:"trepá", español:"trepar, escalar"}, {palenquero:"trochá", español:"talar"}, {palenquero:"trompiá", español:"pelear"}, {palenquero:"tropiá", español:"lastimar, maltratar"}, {palenquero:"tuntuniá", español:"buscar, hallar"}];

function traducir() {
  var x = document.getElementById("myInput").value;
  if ( x === x ){
    var translation = maMakaneo.find(translation => translation.palenquero === x);
    document.getElementById("input2").innerHTML = '&#8594; "' + x.charAt(0).toUpperCase() + x.slice(1) + '" a sendá endi kateyano: ' + translation.español + '.'
  } 
}

function ague() {
  var x = document.getElementById("myInput").value;

  document.getElementById("demo0").innerHTML = "Makananeo endi agué:";
  document.getElementById("demo").innerHTML = "I " + x + ".";
  document.getElementById("demo1").innerHTML = "Bo " + x + ".";
  document.getElementById("demo2").innerHTML = "Ele " + x + ".";
  document.getElementById("demo3").innerHTML = "Suto " + x + ".";
  document.getElementById("demo4").innerHTML = "Enú " + x + ".";
  document.getElementById("demo5").innerHTML = "Ané " + x + ".";
}

function agueYa(){
  var x = document.getElementById("myInput").value;

  document.getElementById("demo6").innerHTML = "Makananeo endi ague yá:";
  document.getElementById("demo7").innerHTML = "I a tá " + x + ".";
  document.getElementById("demo8").innerHTML = "Bo a tá " + x + ".";
  document.getElementById("demo9").innerHTML = "Ele a tá " + x + ".";
  document.getElementById("demo10").innerHTML = "Suto a tá " + x + ".";
  document.getElementById("demo11").innerHTML = "Enú a tá " + x + ".";
  document.getElementById("demo12").innerHTML = "Ané a tá " + x + ".";
}

function aye(){
  var x = document.getElementById("myInput").value;

  document.getElementById("demo13").innerHTML = "Makananeo endi ayé:";
  document.getElementById("demo14").innerHTML = "I a " + x + ".";
  document.getElementById("demo15").innerHTML = "Bo a " + x + ".";
  document.getElementById("demo16").innerHTML = "Ele a " + x + ".";
  document.getElementById("demo17").innerHTML = "Suto a " + x + ".";
  document.getElementById("demo18").innerHTML = "Enú a " + x + ".";
  document.getElementById("demo19").innerHTML = "Ané a " + x + ".";
}

function ayeToMaRia(){
  var ayeToMaRia = document.getElementById("myInput").value;
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
  var x = document.getElementById("myInput").value;

  document.getElementById("demo27").innerHTML = "Makananeo endi maána:";
  document.getElementById("demo28").innerHTML = "I a tan " + x + ".";
  document.getElementById("demo29").innerHTML = "Bo a tan " + x + ".";
  document.getElementById("demo30").innerHTML = "Ele a tan " + x + ".";
  document.getElementById("demo31").innerHTML = "Suto a tan " + x + ".";
  document.getElementById("demo32").innerHTML = "Enú a tan " + x + ".";
  document.getElementById("demo33").innerHTML = "Ané a tan " + x + ".";
}

function guatia(){
  var x = document.getElementById("myInput").value;
  document.getElementById("demo100").innerHTML = "Guatiá akí bajo ya: &darr; &darr; &darr;";
}
