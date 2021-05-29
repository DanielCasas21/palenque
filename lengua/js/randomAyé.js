            var verbs, nouns, determiners, adverbs, preposition;

            nouns = ["Í", "Bo", "Ele", "Suto", "Enú", "Ané", "Majende", "Ma moná", "Mona mí", "Majaná", 
            "Ma jende prieto", "Moná mí", "Piacha", "Kandaó", "Yamaró", "Lorina", "Katalina", "Chakero", 
            "Tó ndo", "Tó ma jende", "Ma piacha", "Tatá mí", "Mae mí", "Cho mí", "Agualongo", "Aguela", 
            "Aguelo", "Ajá", "Ajibe", "Ajutaró", "Akkabuko", "Akkabúko", "Akkueddo", "Akulú", "Alá", "Alabao", 
            "Aló", "Alokumblelo", "Alokutoroson", "Aloyo", "Alumbramiento", "Ambe", "Ambrakambraka", "Ambulú", 
            "Ambuya", "Aña", "Anabakurú", "Anchoba", "Anda", "Angikos", "Angola", "Anguía", "Angula", "Animá", 
            "Ánima", "Anío", "Anipía", "Anje", "Ansetro", "Añú", "Anukironukí", "Apartheid", "Apelatibo", 
            "Apokoló", "Aposendo", "Apú", "Araráes", "Arelike", "Arelite", "Arepuela", "Asalá", "Asaúra", 
            "Ashantis", "Asiento", "Asú", "Atabuke", "Bajo", "Bakalasao", "Bakongo", "Balanta", "Bambalú", 
            "Bambara", "Bambasú", "Banchoke", "Banda", "Bandokí", "Bangala", "Banganga", "Bangulé", "Bangulú", 
            "Bansí", "Bantú", "Baranganga", "Barañí", "Baria", "Barra", "Barrakón", "Batá", "Batata", "Batea", 
            "Batey", "Baú", "Bebía", "Bemba", "Bembé", "Chibo", "Chichaló", "Jolongoló", "Jorobá", "Juedsa", 
            "Jurú-Jurú", "Kabeo", "Kabungo", "Kachimba", "Kakaña", "Kalabela", "Kalabongó", "Kalentura", "Kalo", 
            "Kampía", "Kanatulé", "Kandombe", "Kane", "Kankamán", "Kankamaná", "Kantamaná", "Karabe", 
            "Karrusiana", "Kasimbií", "Kasonario", "Keja", "Keso", "Kimbombó", "Kiñumba", "Kisíma", "Kokorikambó",
             "Kokorikamo", "Kokotero", "Kombilesa", "Kompiño", "Konejo", "Konga", "Kotea", "Koto", "Koya", "Kuato",
              "Kukulungú", "Kula", "Kumbamba", "Kumbé", "Kumina", "Kunkunubá", "Kurikó", "Kusa", "Kusubé", "Kutú", 
              "Labandóngo", "Labo", "Lairón", "Lancho", "Lató", "Leko", "Lelo", "Lengue", "Lenguí", "Lío", 
              "Loango", "Lombligo", "Lomo", "Losario", "Lumbá", "Lumbo", "Luna", "Luría", "Lusingá", "Lutete", 
              "Maí", "Mailo", "Maina", "Majojó", "Makanei", "Makondo", "Malafe", "Mamaró", "Manakó", "Manbalá", 
              "Manenga", "Mangombe", "Mankueba", "Masiruma", "Matakán", "Matete", "Mbaso", "Mbelé", "Mbila", 
              "Mbile", "Mbino", "Mbola", "Mbolo", "Mboló", "Mboyo", "Mbula", "Mbulo", "Mburú", "Melenge", 
              "Mgusano", "Mija", "Mijo", "Milonga ", "Mokindá", "Moná", "Monikongo", "Motete", "Muaná", 
              "Muchacherá", "Muelajumiao", "Muinda", "Mujé", "Munguá", "Musikijá", "Musingá", "Mutete", "Pa", 
              "Pae", "Pakua", "Palenge", "Palo", "Pamma", "Pape", "Patía", "Pegasaya", "Pekkao", "Pela", 
              "Pelo", "Pelochofele", "Pendolá", "Penía", "Perá", "Perika", "Peringo", "Perreo", "Pesendo",
              "Piá-Piaso", "Piacha", "Piangulí", "Piasito", "Piaso", "Pidora", "Piejo", "Pila", "Piló", "Pinaso",
              "Pinga", "Pintonga", "Pisikende", "Pito", "Plana", "Planda", "Pocholá", "Poito", "Pondo", 
              "Porraso", "Posendro", "Potío", "Preñar", "Puela", "Puende", "Pueta", "Punto", "Rabopelao", 
              "Rataimo", "Rebujena", "Regató", "Sá", "Sako", "Sambapalo", "Sambileé", "Samilongongó", "Sandumba",
              "Sangariamusá", "Sarapito", "Sasío", "Sejá", "Selelé", "Seleleé", "Semía", "Sentraña", "Settó", 
              "Sía", "Sibunná", "Siénaga", "Sierra", "Siko-siko", "Sindío", "Singuisarria", "Sinkileé", 
              "Sinkretimo", "Só", "Sofoko", "Sonío", "Sorombátiko", "Sotija", "Soyao", "Suamo", "Sumblelo", 
              "Sun-sun", "Susú", "Tabileé", "Tabrete", "Tambangoleé", "Tapangolé", "Taranga", "Tatá", "Tefú",
              "Tefú-ngande", "Tegua", "Tekliya", "Tekliyero", "Tendío", "Tete", "Tiela", "Tiembo",
              "Timbilimba", "Tinanía", "Tisó", "To", "Tó ndó", "Tolondrón", "Tontina", "Topatopa", "Topetá",
              "Topolongó", "Totó", "Totoporopo", "Trarisió", "Tratrá", "Tropeo", "Trueno", "Tubío", "Tumuto",
              "Tunante", "Tungananá", "Tungulera", "Tutía", "Usengue", "Yolofo", "Yombo", "Yubia",];
            
            determiners = ["ngueno", "ngande", "malo", "maluko", "sí", "mí", "suto", "ri mí", "ri ele", "ri bo",
            "ri suto", "ri enú", "ri ané", ""];


            verbs = ["miní", "kuchá", "kumé", "kandá", "guatiá", "sarangiá", "lungá", "aporriá", "ndrumí", 
            "yolá", "aguandá", "ajá" , "ajogá", "ajuí", "ajundá", "akabá", "akanforá", "akietá", "akkansá", 
            "aklamalo", "akoddá", "akokiná", "akolá", "akotá", "akotumbrá", "akuñá", "alumbrá", "amalayá", 
            "amanesé", "amblasá", "andá", "añingotá", "apagriná", "apatá", "apatí", "apelé", "apesé", "aporriá", 
            "apurá", "apuró", "arí", "arorá", "asé arrumao", "asá ngunba", "asé kusa", "asélo", "asomá", "asotá", 
            "asotalo", "atendé", "atorugase", "atrabé", "atsá", "balé", "jobbé", "jogá", "joká", "jugá mbilé", 
            "juggá", "juí", "jutá", "ká", "kandá", "karankó", "karuchá", "karuká", "kayá", "kebrá", "kelé", "kemá",
             "kitalo", "koé", "koká", "kokobiá", "kolá", "komblá", "komponé", "kondé", "kondolé", "kré", "kribí",
            "kuchá", "kujé", "kumbé", "kumbileé", "kundí", "kupí", "labá", "laggá", "lairá", "ba pa lajuela", "lendrá", 
            "lesá", "liliá", "lisa", "lolé", "lompé", "lungá",  "asé matapuekaso", "mblasá", "miá", "miná", "minga", 
            "miní", "risí monó", "mulimbiá", "pelé", "penkiá", "pi", "pirí", "plundá", "poré", "preñar", "prokió", 
            "prundá", "raurrá", "rebé", "reboddá", "refunfuniá", "regañá", "sabá", "sabé", "sakiá", "asé samba", 
            "sambuí", "sangariá", "sangariamusá", "sangarriá", "sangulutiá", "sausá", "selá", "semblá", 
            "tá sendao", "sindí", "sinsiná", "sofoká", "soná", "asé suipi-suipi", "asé sukisuki", "sunguiá", "supilitá", 
            "susá", "susuría", "tambaliá", "tán yendo", "tapiá", "asé tapujo", "tarrayá", "tatabiyá", "tén", "tendá", 
            "tetemblá", "tilá", "titiritiá", "topá", "makaneá", "tragá", "trakutiá", "tré", "trepá", "trochá",
            "trompiá", "tropiá", "tuntuniá", "asé tutía", "asé sokisoki", "tán pa palenge", "tando pa palenge",
            "a sendá jarocho", "a sendaba jarocho", "yolá", "guatiá", "ndrumí"];

            adverbs = ["nú", 'akí', 'agué', 'to ma tiembo', 'po tadde', 'to ma ria', 'un chochá ri tiembo', 
            'ya', 'má tadde', 'andi ekurana', 'andi palenge', 'andi kuagro', 'andi loyo', 'andi Kattagena',
            "alendro", "antonse", "apíaso", "apotamente", "ariba", "asina", "ata", "atrabé", "bajo", "bajopié",
            "ku juicio", "lande", "lendro", "pasá", "tambié", "torabía", "trá", "tuabía"];

            // preposition = ["aliba", "bajo", "sobre", "detrá", "ku", "sin", "trabé", "pa", "across", "towards"];
            
          var consultas = [];

           function randGen() {
              return Math.floor(Math.random() * 5);
           }

            function sentence() {
              var rand1 = Math.floor(Math.random() * nouns.length);
              var rand2 = Math.floor(Math.random() * determiners.length);
              var rand3 = Math.floor(Math.random() * verbs.length);
              var rand4 = Math.floor(Math.random() * adverbs.length);
              // var rand5 = Math.floor(Math.random() * 2);
              // var rand6 = Math.floor(Math.random() * 2);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = nouns[rand1] + " " + determiners[rand2] + " " + "a " + verbs[rand3] + " " + adverbs[rand4] + "."

              document.getElementById('sentence').innerHTML = content;
              document.getElementById('demo').innerHTML = consultas;
              consultas.push(" " + content.slice(0, -1));
            }
            sentence()
            

            

