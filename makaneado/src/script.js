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
var verbos = ["aguand??", "aj??", "ajog??", "aju??", "ajund??", "akab??", "akanfor??", "akiet??", "akkans??", "aklam??", "akodd??", "akokin??", "akol??", "akot??", "akotumbr??", "aku????", "alumbr??", "amalay??", "amanes??", "amblas??", "and??", "a??ingot??", "apagrin??", "apat??", "apat??", "apel??", "apes??", "aporri??", "apur??", "apur??", "ar??", "aror??", "arrum??", "as??", "as??", "asom??", "asot??", "atend??", "atrab??", "ats??", "bal??", "brajut??", "jobb??", "jog??", "jok??", "jugg??", "ju??", "jut??", "k??", "kand??", "kankani??", "karank??", "karuch??", "karuk??", "kay??", "kebr??", "kel??", "kem??", "kit??", "ko??", "kok??", "kokobi??", "kol??", "kombl??", "kompon??", "kond??", "kondol??", "kr??", "krib??", "kuch??", "kuj??", "kumb??", "kumbile??", "kund??", "kup??", "lab??", "lagg??", "lair??", "lendr??", "les??", "lili??", "lis??", "lol??", "lomp??", "lung??", "makani??", "mblas??", "mi??", "min??", "ming??", "min??", "mulimbi??", "pel??", "penki??", "pi", "pir??", "plund??", "por??", "pre????", "proki??", "prund??", "raurr??", "reb??", "rebodd??", "refunfuni??", "rega????", "sab??", "sab??", "saki??", "samb??", "sambu??", "sangari??", "sangariamus??", "sangarri??", "sanguluti??", "saus??", "sel??", "sembl??", "send??", "sind??", "sinsin??", "sofok??", "son??", "sungui??", "supilit??", "sus??", "susuri??", "tambali??", "tapi??", "tarray??", "tatabiy??", "t??n", "tend??", "tetembl??", "til??", "titiriti??", "top??", "trag??", "trakuti??", "tr??", "trep??", "troch??", "trompi??", "tropi??", "tuntuni??"];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), verbos);

var maMakaneo = [{palenquero:"aguand??", espa??ol:"aguantar, resistir"}, {palenquero:"aj??", espa??ol:"insultar"}, {palenquero:"ajog??", espa??ol:"ahogar"}, {palenquero:"aju??", espa??ol:"huir"}, {palenquero:"ajund??", espa??ol:"unir, juntar, agrupar, reunir. Tambi??n ajutar el fog??n."}, {palenquero:"akab??", espa??ol:"terminer, acabar, finalizar"}, {palenquero:"akanfor??", espa??ol:"perder, ser derrotado"}, {palenquero:"akiet??", espa??ol:"calmar, aquietar, tranquilizar"}, {palenquero:"akkans??", espa??ol:"alcanzar, lograr"}, {palenquero:"aklam??", espa??ol:"aclamar"}, {palenquero:"akodd??", espa??ol:"recordar, acordar"}, {palenquero:"akokin??", espa??ol:"amilanar, acobardar, amedrentar, asustar"}, {palenquero:"akol??", espa??ol:"recordar, acordar"}, {palenquero:"akot??", espa??ol:"acostar(se)"}, {palenquero:"akotumbr??", espa??ol:"adaptarse, habituarse, acostumbrarse"}, {palenquero:"aku????", espa??ol:"cerrar, sellar // guardar, llenar, llenarse la boca con comida // golpear"}, {palenquero:"alumbr??", espa??ol:"alumbrar, iluminar // parir, dar a luz"}, {palenquero:"amalay??", espa??ol:"ansiar, desear (intensamente)"}, {palenquero:"amanes??", espa??ol:"amanecer"}, {palenquero:"amblas??", espa??ol:"abrazar"}, {palenquero:"and??", espa??ol:"andar, caminar"}, {palenquero:"a??ingot??", espa??ol:"agacharse, encogerse, doblarse"}, {palenquero:"apagrin??", espa??ol:"ampararse, protegerse, refugiarse"}, {palenquero:"apat??", espa??ol:"Retirar, quitar, apartar // intervenir"}, {palenquero:"apat??", espa??ol:"dividir, partir, separar"}, {palenquero:"apel??", espa??ol:"perder, desaparecer"}, {palenquero:"apes??", espa??ol:"parecerse, asemejarse"}, {palenquero:"aporri??", espa??ol:"golpear, aporrear"}, {palenquero:"apur??", espa??ol:"apurarse, caminar r??pido, tener prisa"}, {palenquero:"apur??", espa??ol:"apurarse, caminar r??pido, tener prisa"}, {palenquero:"ar??", espa??ol:"re??r"}, {palenquero:"aror??", espa??ol:"adorar"}, {palenquero:"arrum??", espa??ol:"someter, subyugar"}, {palenquero:"as??", espa??ol:"asar, cocinar, freir"}, {palenquero:"as??", espa??ol:"hacer"}, {palenquero:"asom??", espa??ol:"asomarse"}, {palenquero:"asot??", espa??ol:"asotar, golpear, pegar"}, {palenquero:"atend??", espa??ol:"atender"}, {palenquero:"atrab??", espa??ol:"acostarse atravesado en la cama."}, {palenquero:"ats??", espa??ol:"alzar, elevar"}, {palenquero:"bal??", espa??ol:"barrer"}, {palenquero:"brajut??", espa??ol:"rega??ar, insultar"}, {palenquero:"jobb??", espa??ol:"hervir"}, {palenquero:"jog??", espa??ol:"ahogar"}, {palenquero:"jok??", espa??ol:"estrangular"}, {palenquero:"jugg??", espa??ol:"juzgar"}, {palenquero:"ju??", espa??ol:"huir"}, {palenquero:"jut??", espa??ol:"robar"}, {palenquero:"k??", espa??ol:"callarse, hacer silencio"}, {palenquero:"kand??", espa??ol:"cantar"}, {palenquero:"kankani??", espa??ol:"leer"}, {palenquero:"karank??", espa??ol:"robar"}, {palenquero:"karuch??", espa??ol:"peinar"}, {palenquero:"karuk??", espa??ol:"olvidar"}, {palenquero:"kay??", espa??ol:"callar"}, {palenquero:"kebr??", espa??ol:"quebrar, romper"}, {palenquero:"kel??", espa??ol:"querer, amar, desear"}, {palenquero:"kem??", espa??ol:"quemar"}, {palenquero:"kit??", espa??ol:"quitar, retirar"}, {palenquero:"ko??", espa??ol:"tomar, coger"}, {palenquero:"kok??", espa??ol:"rasparse"}, {palenquero:"kokobi??", espa??ol:"forcejar"}, {palenquero:"kol??", espa??ol:"acordarse, recordar"}, {palenquero:"kombl??", espa??ol:"comprar"}, {palenquero:"kompon??", espa??ol:"acomoder, arreglar, componer, poner en orden"}, {palenquero:"kond??", espa??ol:"esconder"}, {palenquero:"kondol??", espa??ol:"compadecerse"}, {palenquero:"kr??", espa??ol:"creer"}, {palenquero:"krib??", espa??ol:"escribir"}, {palenquero:"kuch??", espa??ol:"escuchar"}, {palenquero:"kuj??", espa??ol:"coger, tomar, agarrar"}, {palenquero:"kumb??", espa??ol:"gritar, hacer esc??ndalo"}, {palenquero:"kumbile??", espa??ol:"enga??ar"}, {palenquero:"kum??", espa??ol:"comer"}, {palenquero:"kund??", espa??ol:"esconder"}, {palenquero:"kup??", espa??ol:"escupir"}, {palenquero:"lab??", espa??ol:"lavar"}, {palenquero:"lagg??", espa??ol:"largar"}, {palenquero:"lair??", espa??ol:"ladrar"}, {palenquero:"lendr??", espa??ol:"entrar"}, {palenquero:"les??", espa??ol:"rezar"}, {palenquero:"lili??", espa??ol:"usar, utilizar"}, {palenquero:"lis??", espa??ol:"planchar"}, {palenquero:"lol??", espa??ol:"doler"}, {palenquero:"lomp??", espa??ol:"romper"}, {palenquero:"lung??", espa??ol:"morir"}, {palenquero:"makani??", espa??ol:"trabajar"}, {palenquero:"mblas??", espa??ol:"abrazar"}, {palenquero:"mi??", espa??ol:"orinar"}, {palenquero:"min??", espa??ol:"ver, mirar"}, {palenquero:"ming??", espa??ol:"adorar"}, {palenquero:"min??", espa??ol:"venir"}, {palenquero:"mulimbi??", espa??ol:"tene sexo, hacer el amor"}, {palenquero:"pel??", espa??ol:"perder, perderse"}, {palenquero:"penki??", espa??ol:"ganar, tener ??xito"}, {palenquero:"pi", espa??ol:"ventosear, tener flatulencias"}, {palenquero:"pir??", espa??ol:"pedir"}, {palenquero:"plund??", espa??ol:"preguntar"}, {palenquero:"por??", espa??ol:"poder"}, {palenquero:"pre????", espa??ol:"embarazar, pre??ar"}, {palenquero:"proki??", espa??ol:"repartir"}, {palenquero:"prund??", espa??ol:"preguntar"}, {palenquero:"raurr??", espa??ol:"destruir, arruinar, deshacer"}, {palenquero:"reb??", espa??ol:"deber"}, {palenquero:"rebodd??", espa??ol:"desbordar"}, {palenquero:"refunfuni??", espa??ol:"refunfu??ar"}, {palenquero:"rega????", espa??ol:"rega??ar"}, {palenquero:"sab??", espa??ol:"salvar"}, {palenquero:"sab??", espa??ol:"saber, conocer"}, {palenquero:"saki??", espa??ol:"saquear"}, {palenquero:"samb??", espa??ol:"saltar"}, {palenquero:"sambu??", espa??ol:"zambullirse, clavarse, echarse al agua"}, {palenquero:"sangari??", espa??ol:"bailar, mover las caderas"}, {palenquero:"sangariamus??", espa??ol:"obstaculizar, obstruir, derribar, hacer sancadilla"}, {palenquero:"sangarri??", espa??ol:"bailar, mover las caderas"}, {palenquero:"sanguluti??", espa??ol:"tener sexo, hacer el amor"}, {palenquero:"saus??", espa??ol:"ahumar la comida."}, {palenquero:"sel??", espa??ol:"cerrar"}, {palenquero:"sembl??", espa??ol:"cultivar, sembrar"}, {palenquero:"send??", espa??ol:"sentarse"}, {palenquero:"sind??", espa??ol:"sentir"}, {palenquero:"sinsin??", espa??ol:"empinarse, ponerse de puntillas"}, {palenquero:"sofok??", espa??ol:"sudar"}, {palenquero:"son??", espa??ol:"sonar"}, {palenquero:"sungui??", espa??ol:"tener sexo, hacer el amor"}, {palenquero:"supilit??", espa??ol:"superarse"}, {palenquero:"sus??", espa??ol:"remover el fuego"}, {palenquero:"susuri??", espa??ol:"chismosiar"}, {palenquero:"tambali??", espa??ol:"tambaliar"}, {palenquero:"tapi??", espa??ol:"dividir"}, {palenquero:"tarray??", espa??ol:"extenderse, explayar, abrir ampliamente (una atarraya)"}, {palenquero:"tatabiy??", espa??ol:"tropezarse"}, {palenquero:"t??n", espa??ol:"tener"}, {palenquero:"tend??", espa??ol:"tocar, palpar"}, {palenquero:"tetembl??", espa??ol:"tiritar, temblar"}, {palenquero:"til??", espa??ol:"disparar, lanzar, obturar"}, {palenquero:"titiriti??", espa??ol:"tiritar, temblar"}, {palenquero:"top??", espa??ol:"encontrar"}, {palenquero:"trag??", espa??ol:"desaparecer"}, {palenquero:"trakuti??", espa??ol:"mirar detenidamente"}, {palenquero:"tr??", espa??ol:"traer"}, {palenquero:"trep??", espa??ol:"trepar, escalar"}, {palenquero:"troch??", espa??ol:"talar"}, {palenquero:"trompi??", espa??ol:"pelear"}, {palenquero:"tropi??", espa??ol:"lastimar, maltratar"}, {palenquero:"tuntuni??", espa??ol:"buscar, hallar"}];

function traducir() {
  var x = document.getElementById("myInput").value;
  if ( x === x ){
    var translation = maMakaneo.find(translation => translation.palenquero === x);
    document.getElementById("input2").innerHTML = '&#8594; "' + x.charAt(0).toUpperCase() + x.slice(1) + '" a send?? endi kateyano: ' + translation.espa??ol + '.'
  } 
}

function ague() {
  var x = document.getElementById("myInput").value;

  document.getElementById("demo0").innerHTML = "Makananeo endi agu??:";
  document.getElementById("demo").innerHTML = "I " + x + ".";
  document.getElementById("demo1").innerHTML = "Bo " + x + ".";
  document.getElementById("demo2").innerHTML = "Ele " + x + ".";
  document.getElementById("demo3").innerHTML = "Suto " + x + ".";
  document.getElementById("demo4").innerHTML = "En?? " + x + ".";
  document.getElementById("demo5").innerHTML = "An?? " + x + ".";
}

function agueYa(){
  var x = document.getElementById("myInput").value;

  document.getElementById("demo6").innerHTML = "Makananeo endi ague y??:";
  document.getElementById("demo7").innerHTML = "I a t?? " + x + ".";
  document.getElementById("demo8").innerHTML = "Bo a t?? " + x + ".";
  document.getElementById("demo9").innerHTML = "Ele a t?? " + x + ".";
  document.getElementById("demo10").innerHTML = "Suto a t?? " + x + ".";
  document.getElementById("demo11").innerHTML = "En?? a t?? " + x + ".";
  document.getElementById("demo12").innerHTML = "An?? a t?? " + x + ".";
}

function aye(){
  var x = document.getElementById("myInput").value;

  document.getElementById("demo13").innerHTML = "Makananeo endi ay??:";
  document.getElementById("demo14").innerHTML = "I a " + x + ".";
  document.getElementById("demo15").innerHTML = "Bo a " + x + ".";
  document.getElementById("demo16").innerHTML = "Ele a " + x + ".";
  document.getElementById("demo17").innerHTML = "Suto a " + x + ".";
  document.getElementById("demo18").innerHTML = "En?? a " + x + ".";
  document.getElementById("demo19").innerHTML = "An?? a " + x + ".";
}

function ayeToMaRia(){
  var ayeToMaRia = document.getElementById("myInput").value;
  x = ayeToMaRia.replace(/??/, "a").replace(/??/, "e").replace(/??/, "i").replace(/??/,"o").replace(/??/,"u").replace(/??/, "A").replace(/??/, "E").replace(/??/, "I").replace(/??/, "O").replace(/??/, "U").replace(/['|????!^`~"#$%&/()????=???{}_,.??+<>????*:;]/g,"");

  document.getElementById("demo20").innerHTML = "Makananeo endi ay?? t?? ma r??a:";
  document.getElementById("demo21").innerHTML = "I " + x + "ba" + ".";
  document.getElementById("demo22").innerHTML = "Bo " + x + "ba" + ".";
  document.getElementById("demo23").innerHTML = "Ele " + x + "ba" + ".";
  document.getElementById("demo24").innerHTML = "Suto " + x + "ba" + ".";
  document.getElementById("demo25").innerHTML = "En?? " + x + "ba" + ".";
  document.getElementById("demo26").innerHTML = "An?? " + x + "ba" + ".";
}

function maana(){
  var x = document.getElementById("myInput").value;

  document.getElementById("demo27").innerHTML = "Makananeo endi ma??na:";
  document.getElementById("demo28").innerHTML = "I a tan " + x + ".";
  document.getElementById("demo29").innerHTML = "Bo a tan " + x + ".";
  document.getElementById("demo30").innerHTML = "Ele a tan " + x + ".";
  document.getElementById("demo31").innerHTML = "Suto a tan " + x + ".";
  document.getElementById("demo32").innerHTML = "En?? a tan " + x + ".";
  document.getElementById("demo33").innerHTML = "An?? a tan " + x + ".";
}

function guatia(){
  var x = document.getElementById("myInput").value;
  document.getElementById("demo100").innerHTML = "Guati?? ak?? bajo ya: &darr; &darr; &darr;";
}
