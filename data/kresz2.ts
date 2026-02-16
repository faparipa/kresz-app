import { Jogszabaly, KreszKivonat, TorvenyItem } from '../types/kresz.js';

export const kreszKivonatok: KreszKivonat = {
  /** =========================
   *  1. § – A rendelet hatálya
   *  ========================= */
  '1': {
    paragrafus: '1',
    cim: '1. § – A rendelet hatálya',

    bekezdesek: {
      '1': {
        id: '1_1',
        szoveg:
          'A rendelet a Magyarország területén található közutakon, valamint a közforgalom elől el nem zárt magánutakon zajló közlekedésre vonatkozik.',
      },

      '2': {
        id: '1_2',
        szoveg:
          'A kiemelt nemzeti emlékhely területén történő közlekedésre külön kormányrendelet a jelen rendelettől eltérő szabályokat is megállapíthat.',
      },
    },
  },

  /** =========================
   *  2. § – Fogalmak
   *  ========================= */
  '2': {
    paragrafus: '2',
    cim: '2. § – Fogalmak',

    bekezdesek: {
      '1': {
        id: '2_1',
        szoveg:
          'A rendeletben használt fogalmak pontos meghatározását a KRESZ fogalommagyarázata tartalmazza.',
      },
    },
  },

  /** ======================================================
   *  3. § – A közlekedésben résztvevőkre vonatkozó szabályok
   *  ====================================================== */
  '3': {
    paragrafus: '3',
    cim: '3. § – A közlekedésben résztvevőkre vonatkozó általános rendelkezések',

    bekezdesek: {
      '1': {
        id: '3_1',
        szoveg:
          'A közúti közlekedésben részt vevő személy köteles az alábbi szabályokat betartani:',
        alpontok: {
          a: {
            id: '3_1_a',
            szoveg:
              'A közúti forgalomra, valamint az út és környezetének védelmére vonatkozó jogszabályokat betartani.',
          },
          b: {
            id: '3_1_b',
            szoveg:
              'A közúti jelzések utasításainak, valamint a forgalmat irányító vagy ellenőrző személyek rendelkezéseinek eleget tenni.',
          },
          c: {
            id: '3_1_c',
            szoveg:
              'Úgy közlekedni, hogy mások személy- és vagyonbiztonságát ne veszélyeztesse, másokat indokolatlanul ne akadályozzon vagy zavarjon.',
          },
        },
      },

      '2': {
        id: '3_2',
        szoveg:
          'Gépkocsi vezetése közben kézben tartott mobiltelefont használni tilos. Kétkerekű jármű, valamint nem gépkocsinak minősülő háromkerekű jármű vezetője menet közben – beleértve a forgalmi okból történő megállást is – szintén nem használhat kézben tartott mobiltelefont.',
      },

      '3': {
        id: '3_3',
        szoveg:
          'Tilos a közúti közlekedés hatósági ellenőrzésének megakadályozása, megzavarása vagy az ellenőrzés eredményének befolyásolása. Az ellenőrzés előre jelzésére szolgáló eszközök használata megengedett.',
      },
    },
  },

  /** ======================================
   *  4. § – A járművezetés személyi feltételei
   *  ====================================== */
  '4': {
    paragrafus: '4',
    cim: '4. § – A járművezetés személyi feltételei',

    bekezdesek: {
      '1': {
        id: '4_1',
        szoveg:
          'Járművet az vezethet, aki \n a) a jármű vezetésére jogszabályban meghatározott, érvényes vezetői engedéllyel vagy az engedély-nyilvántartásba bejegyzett érvényes vezetési jogosultsággal rendelkezik, \n b) a jármű biztonságos vezetésére képes állapotban van, továbbá \n c) a vezetési képességre hátrányosan ható szer befolyása alatt nem áll, és szervezetében nincs szeszes ital fogyasztásából származó alkohol.',
      },

      '2': {
        id: '4_2',
        szoveg:
          'A jármű üzemben tartója nem engedheti meg, a vezető pedig nem veheti át a jármű vezetését olyan személynek, aki a vezetés feltételeinek nem felel meg.',
      },

      '3': {
        id: '4_3',
        szoveg:
          'Ha a vezetői engedélyt külföldi hatóság állította ki, azt a vezetőnek vezetés közben magánál kell tartania.',
      },

      '4': {
        id: '4_4',
        szoveg:
          'Kerékpáros esetében a jármű biztonságos vezetésére alkalmas állapot fennállása esetén nem alkalmazandó az alkohol jelenlétére vonatkozó teljes tilalom.',
      },
    },
  },

  /** =====================================================
   *  5. § – A járművek közlekedésben való részvételének feltételei
   *  ===================================================== */
  '5': {
    paragrafus: '5',
    cim: '5. § – A járművek közlekedésben való részvételének feltételei',

    bekezdesek: {
      '1': {
        id: '5_1',
        szoveg:
          'A közlekedésben csak olyan járművel szabad részt venni, amely az alábbi feltételeknek megfelel:',
        alpontok: {
          a: {
            id: '5_1_a',
            szoveg: 'Érvényes hatósági engedéllyel rendelkezik.',
          },
          b: {
            id: '5_1_b',
            szoveg:
              'A jogszabályban előírt számú, típusú és elhelyezésű rendszámtáblával van ellátva.',
          },
          c: {
            id: '5_1_c',
            szoveg:
              'Műszaki, biztonsági és környezetvédelmi állapota megfelel az előírásoknak.',
          },
          d: {
            id: '5_1_d',
            szoveg:
              'Az utat és annak környezetét nem rongálja és nem szennyezi.',
          },
          e: {
            id: '5_1_e',
            szoveg:
              'amely megfelel a (9) bekezdésben meghatározott feltételnek;(A magyar hatósági jelzéssel ellátott gépjárművön nem lehet olyan jelzéstn – ide nem értve a DT és a CK betűjelű rendszámtáblával közlekedő gépjárművet  – így különösen CD jelzésű matrica amely diplomáciai képviseletre utal',
          },
          f: {
            id: '5_1_f',
            szoveg:
              'Rendelkezik a jogszabályban előírt kötelező gépjármű-felelősségbiztosítással.',
          },
        },
      },

      '2': {
        id: '5_2',
        szoveg:
          'Indulás előtt a vezető köteles ellenőrizni a kormányberendezés, a fékek, a gumiabroncsok, a világító- és fényjelző berendezések, valamint a rendszámtáblák állapotát.',
      },

      '3': {
        id: '5_3',
        szoveg:
          'Ha a jármű nem felel meg a közlekedés feltételeinek, az üzemben tartó nem engedheti elindulni, a vezető pedig köteles az elindulást megtagadni.',
      },

      '4': {
        id: '5_4',
        szoveg:
          'A jármű hatósági engedélyét a vezetőnek vezetés közben magánál kell tartania.',
      },

      '5': {
        id: '5_5',
        szoveg:
          'A rendszámtáblát az arra kijelölt helyen, jól látható és olvasható állapotban kell tartani; annak módosítása, letakarása vagy eltávolítása tilos.',
      },
    },
  },

  /** ======================================================
   *  6. § – A rendőr jelzései
   *  ====================================================== */
  '6': {
    paragrafus: '6',
    cim: '6. § – A rendőr jelzései',

    bekezdesek: {
      '1': {
        id: '6_1',
        szoveg:
          'Az útkereszteződésben a forgalmat irányító rendőr az alábbi karjelzéseket alkalmazhat:',
        alpontok: {
          a: {
            id: '6_1_a',
            szoveg:
              'Ha a rendőr mindkét karját oldalirányban kinyújtja: \n aa) A kinyújtott karral párhuzamos irányból érkező járművek és gyalogosok számára szabad az áthaladás. A gyalogos átkelhet az úttesten, a jármű pedig – ha azt jelzőtábla nem tiltja – egyenesen továbbhaladhat, valamint jobbra vagy balra bekanyarodhat. \n ab) A kinyújtott karra merőleges irányból érkezők számára tilos a továbbhaladás. A gyalogos nem léphet az úttestre, a járművel pedig a kijelölt gyalogos-átkelőhely előtt, ennek hiányában a megállás helyét jelző útburkolati jel előtt, ezek hiányában az útkereszteződés előtt meg kell állni....',
            alpontok: {
              aa: {
                id: '6_1_a_aa',
                szoveg:
                  'A kinyújtott karral párhuzamos irányból érkező járművek és gyalogosok számára szabad az áthaladás. A gyalogos átkelhet az úttesten, a jármű pedig – ha azt jelzőtábla nem tiltja – egyenesen továbbhaladhat, valamint jobbra vagy balra bekanyarodhat. ab) A kinyújtott karra merőleges irányból érkezők számára tilos a továbbhaladás. A gyalogos nem léphet az úttestre, a járművel pedig a kijelölt gyalogos-átkelőhely előtt, ennek hiányában a megállás helyét jelző útburkolati jel előtt, ezek hiányában az útkereszteződés előtt meg kell állni.',
              },
              ab: {
                id: '6_1_a_ab',
                szoveg:
                  'A kinyújtott karra merőleges irányból érkezők számára tilos a továbbhaladás. A gyalogos nem léphet az úttestre, a járművel pedig a kijelölt gyalogos-átkelőhely előtt, ennek hiányában a megállás helyét jelző útburkolati jel előtt, ezek hiányában az útkereszteződés előtt meg kell állni.',
              },
            },
          },

          b: {
            id: '6_1_b',
            szoveg:
              'Ha a rendőr egyik karját függőlegesen feltartja, az a forgalom irányának megváltozását jelzi. A gyalogos nem léphet az úttestre, az úttesten tartózkodó gyalogos köteles az áthaladást mielőbb befejezni. A járművel a kijelölt megállási helyen meg kell állni, kivéve ha a biztonságos megállás már nem lehetséges, ebben az esetben az útkereszteződésen mielőbb át kell haladni.',
          },

          c: {
            id: '6_1_c',
            szoveg:
              'Ha a rendőr jobb karjával maga mögé int, bal tenyerét pedig a balról érkező forgalom felé fordítja:',
            alpontok: {
              aa: {
                id: '6_1_c_aa',
                szoveg:
                  'A jobbról érkező járművek a rendőr mögött balra bekanyarodhatnak.',
              },
              ab: {
                id: '6_1_c_ab',
                szoveg:
                  'A jobbról érkező járművek egyenesen továbbhaladhatnak vagy jobbra bekanyarodhatnak.',
              },
              ac: {
                id: '6_1_c_ac',
                szoveg:
                  'Minden más irányból érkező jármű és gyalogos számára a továbbhaladás tilos.',
              },
            },
          },

          d: {
            id: '6_1_d',
            szoveg:
              'Ha a rendőr jobb karját vízszintesen maga elé nyújtja, bal karjával pedig maga elé int:',
            alpontok: {
              aa: {
                id: '6_1_d_aa',
                szoveg:
                  'A balról érkező járművek a rendőr előtt balra bekanyarodhatnak.',
              },
              ab: {
                id: '6_1_d_ab',
                szoveg:
                  'A balról érkező járművek egyenesen továbbhaladhatnak vagy jobbra bekanyarodhatnak.',
              },
              ac: {
                id: '6_1_d_ac',
                szoveg:
                  'Minden más irányból érkező jármű és gyalogos számára a továbbhaladás tilos.',
              },
            },
          },

          e: {
            id: '6_1_e',
            szoveg:
              'Ha a rendőr nem ad karjelzést, akkor a rendőr vállával párhuzamos, illetve arra merőleges irányból érkező forgalomra a mindkét kar oldalirányú kinyújtására vonatkozó szabályokat kell alkalmazni.',
          },

          f: {
            id: '6_1_f',
            szoveg:
              'Ha a rendőr kinyújtott karjával maga felé int, az a sebesség növelésére utasít. Ha a kinyújtott karját fel-le mozgatja, az a sebesség csökkentésére utasít.',
          },
        },
      },

      '2': {
        id: '6_2',
        szoveg:
          'Ha a rendőr nem útkereszteződésben irányítja a forgalmat, a járművezetőknek az alábbi jelzéseket kell figyelembe venniük:',
        alpontok: {
          a: {
            id: '6_2_a',
            szoveg: 'A jármű megállítására adott jelzések:',
            alpontok: {
              aa: {
                id: '6_2_a_aa',
                szoveg:
                  'A rendőr karjának függőleges feltartásával, fehér szegélyű piros tárcsa feltartásával, piros vagy fehér fény körbeforgatásával, illetve síp használatával adhat megállásra utasítást.',
              },
              ab: {
                id: '6_2_a_ab',
                szoveg:
                  'Menet közben a megkülönböztető fényjelzést használó rendőrségi gépkocsiból vagy motorkerékpárról a rendőr karjának, piros tárcsának vagy fényjelző lámpának fel-le mozgatásával, hangszórón keresztül vagy megállásra felszólító felirat megjelenítésével adhat megállásra utasítást.',
              },
            },
          },

          b: {
            id: '6_2_b',
            szoveg:
              'A megkülönböztető fényjelzést használó rendőrségi járműből vagy rendőrségi helikopterről hangszórón adott közlekedési utasításokat a járművezető köteles követni.',
          },
        },
      },

      '3': {
        id: '6_3',
        szoveg:
          'A közúti jelzések és a forgalmi szabályok csak akkor alkalmazhatók, ha nem ellentétesek a rendőr által adott jelzéssel.',
      },

      '4': {
        id: '6_4',
        szoveg:
          'A rendőr jelzéseire vonatkozó szabályokat értelemszerűen alkalmazni kell a szolgálatban lévő katonai forgalomszabályozó, katasztrófavédelmi közúti ellenőr, vám- és pénzügyőr, tűzoltó, valamint a közlekedési hatóság közúti ellenőre által adott jelzésekre is.',
      },

      '5': {
        id: '6_5',
        szoveg:
          'A közterület-felügyelő a jármű megállítására karjának függőleges feltartásával vagy fehér szegélyű piros tárcsával ad jelzést. Az ilyen jelzés észlelésekor a járművel kötelező megállni.',
      },
    },
  },
  /** ======================================================
   *  7. § – A jelzőőr jelzései
   *  ====================================================== */
  '7': {
    paragrafus: '7',
    cim: '7. § – A jelzőőr jelzései',

    bekezdesek: {
      '1': {
        id: '7_1',
        szoveg:
          'A jelzőőr vagy a polgárőr által adott jelzések minden közlekedőre kötelezőek.',
        alpontok: {
          a: {
            id: '7_1_a',
            szoveg:
              'A jelzőőr vagy a polgárőr által jelzőtárcsával adott megállást jelző utasítás esetén a járművel és a gyalogos közlekedéssel is meg kell állni.',
          },
          b: {
            id: '7_1_b',
            szoveg:
              'A jelzőőr vagy a polgárőr által feltartott, illetve vasúti átjáróban az úttesten állványra helyezett piros fényű lámpával adott jelzés esetén szintén kötelező a megállás.',
          },
        },
      },

      '2': {
        id: '7_2',
        szoveg:
          'Ha a forgalmat jelzőőr vagy polgárőr irányítja, azt előzetesen egyéb veszélyt jelző táblával és a jelzőőr jelenlétére utaló kiegészítő táblával kell jelezni a közlekedők számára.',
      },
    },
  },
  /** ======================================================
   *  8. § – A gyalogosforgalom irányítására szolgáló fényjelző készülékek
   *  ====================================================== */
  '8': {
    paragrafus: '8',
    cim: '8. § – A gyalogosforgalom irányítására szolgáló fényjelző készülékek',

    bekezdesek: {
      '1': {
        id: '8_1',
        szoveg:
          'A gyalogosforgalom irányítására szolgáló fényjelző készülék két lámpából áll: felül álló gyalogost ábrázoló piros, alul haladó gyalogost ábrázoló zöld fényből. A jelzések sorrendje: folyamatos zöld, villogó zöld, majd piros. A készülék kiegészítő hangjelzést is adhat: folyamatos zöldnél folyamatos, villogó zöldnél szaggatott hangot.',
      },

      '2': {
        id: '8_2',
        szoveg:
          'A gyalogosforgalmat irányító fényjelző készülék fényjelzéseinek jelentése:',
        alpontok: {
          a: {
            id: '8_2_a',
            szoveg:
              'A folyamatos zöld fény szabad utat jelez, a gyalogos az úttesten áthaladhat.',
          },
          b: {
            id: '8_2_b',
            szoveg:
              'A villogó zöld fény az áthaladásra engedélyezett idő végére figyelmeztet, a gyalogos az úttestre már nem léphet, az úttesten tartózkodó gyalogos köteles az áthaladást mielőbb befejezni.',
          },
          c: {
            id: '8_2_c',
            szoveg:
              'A piros fény az áthaladás tilalmát jelzi, a gyalogos az úttestre nem léphet.',
          },
        },
      },

      '3': {
        id: '8_3',
        szoveg:
          'Ha a fényjelző készülék lámpái az álló vagy haladó gyalogos mellett kerékpárt is ábrázolnak, akkor a fényjelzések jelentése az úttestet keresztező kerékpárúton közlekedő kerékpárosokra is érvényes.',
      },

      '4': {
        id: '8_4',
        szoveg:
          'Ha a gyalogosforgalom irányítására külön fényjelző készüléket nem helyeztek el, akkor a járműforgalmat irányító fényjelző készülék gyalogosokra vonatkozó jelzéseit kell alkalmazni.',
      },
    },
  },
  /** ======================================================
   *  9. § – A járműforgalom irányítására szolgáló fényjelző készülékek
   *  ====================================================== */
  '9': {
    paragrafus: '9',
    cim: '9. § – A járműforgalom irányítására szolgáló fényjelző készülékek',

    bekezdesek: {
      '1': {
        id: '9_1',
        szoveg:
          'A járműforgalom irányítására szolgáló fényjelző készülékek típusai:',
        alpontok: {
          a: {
            id: '9_1_a',
            szoveg:
              'Az úttest forgalmának irányítására szolgáló fényjelző készülék három lámpából áll: felül piros, középen sárga, alul zöld fényből. A lámpák lehetnek kör alakúak vagy nyilat mutatók. A jelzések sorrendje: zöld, sárga, piros, majd piros és sárga együtt.',
          },
          b: {
            id: '9_1_b',
            szoveg:
              'A kerékpárút vagy kerékpársáv forgalmának irányítására szolgáló fényjelző készülék három lámpából áll: piros, sárga és zöld fényből, amelyek kör alakúak vagy kerékpárt ábrázolnak. A jelzések sorrendje megegyezik az úttesti fényjelző készülékével.',
          },
          c: {
            id: '9_1_c',
            szoveg:
              'A villamosok, valamint megkülönböztető jelzést használó járművek áthaladását biztosító fényjelző készülék két lámpából áll: felül piros, alul sárga fényből, és sorrendben villogó sárga, folyamatos sárga, majd piros jelzést ad.',
          },
          d: {
            id: '9_1_d',
            szoveg:
              'A veszélyes hely jelzésére szolgáló fényjelző készülék egyetlen, kör alakú sárga lámpából áll, amely villogó sárga fényt ad.',
          },
          e: {
            id: '9_1_e',
            szoveg:
              'A forgalmi sáv foglaltságát vagy a váltakozó irányú forgalmat szabályozó fényjelző készülék három egymás melletti lámpából áll: piros X jelből, villogó sárga ferdén lefelé mutató nyílból és zöld lefelé mutató nyílból.',
          },
        },
      },

      '2': {
        id: '9_2',
        szoveg:
          'A járműforgalmat irányító fényjelző készülékeket általában az úttest mellett, a menetirány szerinti jobb oldalon helyezik el. A jelzéseket a bal oldalon vagy az úttest felett meg lehet ismételni. A fényjelzés minden, a jelzéssel szemben közlekedő járműre vonatkozik.',
      },

      '3': {
        id: '9_3',
        szoveg:
          'Többsávos úttesten, ahol minden forgalmi sávhoz külön fényjelző készülék tartozik, a jelzések érvényessége sávonként értelmezendő.',
        alpontok: {
          a: {
            id: '9_3_a',
            szoveg:
              'A jobb oldalon elhelyezett fényjelző készülék jelzése a jobb szélső forgalmi sávra vonatkozik.',
          },
          b: {
            id: '9_3_b',
            szoveg:
              'A bal oldalon elhelyezett fényjelző készülék jelzése a belső forgalmi sávra vonatkozik.',
          },
          c: {
            id: '9_3_c',
            szoveg:
              'A forgalmi sáv felett elhelyezett fényjelző készülék jelzése az alatta haladó járművekre érvényes.',
          },
        },
      },

      '4': {
        id: '9_4',
        szoveg:
          'A járműforgalmat irányító fényjelző készülékek fényjelzéseinek jelentése:',
        alpontok: {
          a: {
            id: '9_4_a',
            szoveg:
              'A zöld fény szabad utat jelez. Ha jelzőtábla nem tiltja, egyenesen továbbhaladni, valamint jobbra vagy balra bekanyarodni szabad.',
          },
          b: {
            id: '9_4_b',
            szoveg:
              'A nyíl alakú zöld fény kizárólag a jelzett irányban enged haladást. Bekanyarodáskor a zöld jelzésen áthaladó gyalogosoknak elsőbbséget kell adni.',
          },
          c: {
            id: '9_4_c',
            szoveg:
              'A sárga fény a forgalomirány megváltozását jelzi. A járművel meg kell állni a kijelölt megállási vonalnál, ennek hiányában a fényjelző készülék előtt, kivéve, ha a megállás már nem lenne biztonságos.',
          },
          d: {
            id: '9_4_d',
            szoveg:
              'A piros fény a továbbhaladás tilalmát jelzi, a járművel meg kell állni.',
          },
          e: {
            id: '9_4_e',
            szoveg:
              'A piros és sárga fény együtt a továbbhaladás tilalmát jelzi, és azt, hogy hamarosan zöld jelzés következik.',
          },
          f: {
            id: '9_4_f',
            szoveg:
              'A villogó sárga fény veszélyre figyelmeztet, az adott helyen fokozott óvatossággal szabad továbbhaladni.',
          },
        },
      },

      '5': {
        id: '9_5',
        szoveg:
          'Ha a fő fényjelző készülék mellett kiegészítő lámpa zöld nyilat mutat, a nyíl által jelzett irányban a jármű a többi fényjelzéstől függetlenül továbbhaladhat.',
      },

      '6': {
        id: '9_6',
        szoveg:
          'Ha a fő fényjelző készülék mellett elhelyezett kiegészítő lámpa fehér „BUSZ” feliratot mutat, az autóbusz-forgalmi sávban közlekedő járművek továbbhaladhatnak.',
      },

      '7': {
        id: '9_7',
        szoveg:
          'Zöld fényjelzés esetén sem szabad az útkereszteződésbe behajtani, ha a jármű a forgalmi torlódás miatt előreláthatóan nem tudná elhagyni azt.',
      },

      '8': {
        id: '9_8',
        szoveg:
          'A forgalmi sávokat jelző fényjelző készülékek minden forgalmi sáv felett elhelyezésre kerülnek.',
        alpontok: {
          a: {
            id: '9_8_a',
            szoveg:
              'A lefelé mutató zöld nyíl az adott forgalmi sávban szabad haladást jelez.',
          },
          b: {
            id: '9_8_b',
            szoveg:
              'A ferdén lefelé mutató villogó sárga nyíl azt jelzi, hogy a járművezetőnek a forgalmi sávot haladéktalanul el kell hagynia.',
          },
          c: {
            id: '9_8_c',
            szoveg:
              'A piros X jelzés a forgalmi sávban a haladás teljes tilalmát jelenti.',
          },
        },
      },

      '9': {
        id: '9_9',
        szoveg:
          'Ha a forgalmat fényjelző készülék irányítja, az elsőbbséget szabályozó jelzőtáblák és a főútvonalat jelző tábla jelzéseit nem kell figyelembe venni.',
      },
    },
  },
  /** ======================================================
   *  10. § – A közúti jelzőtáblákra vonatkozó közös rendelkezések
   *  ====================================================== */
  '10': {
    paragrafus: '10',
    cim: '10. § – A közúti jelzőtáblákra vonatkozó közös rendelkezések',

    bekezdesek: {
      '1': {
        id: '10_1',
        szoveg:
          'A közúti jelzőtáblák a járművezetők számára a közlekedéssel kapcsolatos alapvető információkat közlik.',
        alpontok: {
          a: {
            id: '10_1_a',
            szoveg:
              'Az útvonal típusát jelzik, például autópályát, autóutat vagy lakott területet.',
          },
          b: {
            id: '10_1_b',
            szoveg:
              'A közlekedők közötti elsőbbségi viszonyokat határozzák meg.',
          },
          c: {
            id: '10_1_c',
            szoveg:
              'Kötelező magatartásra vagy haladási irányra adnak utasítást.',
          },
          d: {
            id: '10_1_d',
            szoveg:
              'Valamely közlekedési magatartást megtiltanak vagy korlátoznak.',
          },
          e: {
            id: '10_1_e',
            szoveg:
              'Az úton vagy az út mellett fennálló veszélyre hívják fel a figyelmet.',
          },
          f: {
            id: '10_1_f',
            szoveg:
              'A közlekedők számára hasznos tájékoztató információkat adnak.',
          },
        },
      },

      '2': {
        id: '10_2',
        szoveg:
          'A jelzőtábla alatt elhelyezett kiegészítő tábla a jelzőtábla jelentését pontosítja, értelmezi vagy korlátozza.',
      },

      '3': {
        id: '10_3',
        szoveg:
          'A jelzőtáblákat általában az úttest mellett, a haladási irány szerinti jobb oldalon helyezik el. A jelzőtábla a szemből érkező forgalom minden járművére érvényes, és szükség esetén a bal oldalon vagy az úttest felett megismételhető.',
      },

      '4': {
        id: '10_4',
        szoveg:
          'Több forgalmi sávval rendelkező úton a forgalmi sáv felett elhelyezett jelzőtábla kizárólag az adott sávban közlekedő járművekre vonatkozik.',
      },

      '5': {
        id: '10_5',
        szoveg:
          'A fényjelző készülékkel együtt elhelyezett kötelező haladási irányt jelző tábla azokra a járművekre érvényes, amelyekre a fényjelző készülék jelzése is vonatkozik.',
      },

      '6': {
        id: '10_6',
        szoveg:
          'A megállási és várakozási tilalmat, valamint a várakozóhelyet jelző táblákat az úttest jobb vagy bal oldalán is el lehet helyezni, és hatályuk arra az oldalra terjed ki, ahol a táblát elhelyezték.',
      },

      '7': {
        id: '10_7',
        szoveg:
          'A megengedett méreteket meghaladó járművek kíséretét végző járművön elhelyezett jelzőtábla jelzése mellett történő elhaladáskor a jelzőtábla utasításait be kell tartani.',
      },

      '8': {
        id: '10_8',
        szoveg:
          'A fényt kibocsátó jelzőtáblákon a jelzések színei felcserélhetők, ha a tábla így is egyértelműen felismerhető.',
      },

      '9': {
        id: '10_9',
        szoveg:
          'A közúti jelzőtáblák az észlelhetőség javítása érdekében sárga vagy fényvisszaverő sárga háttéren is elhelyezhetők.',
      },

      '10': {
        id: '10_10',
        szoveg:
          'Az utasítást adó és a járműforgalomra vonatkozó tilalmi jelzőtáblákon feltüntetett sebességértékeket kilométer per órában kell értelmezni.',
      },
    },
  },
  /** ======================================================
   *  11. § – Az útvonaltípust jelző táblák
   *  ====================================================== */
  '11': {
    paragrafus: '11',
    cim: '11. § – Az útvonaltípust jelző táblák',

    bekezdesek: {
      '1': {
        id: '11_1',
        szoveg:
          'Az útvonaltípust jelző táblák az út jellegét és forgalmi besorolását jelzik.',
        alpontok: {
          a: {
            id: '11_1_a',
            szoveg:
              '„Autópálya” jelzőtábla, amely azt jelzi, hogy az útszakasz autópályának minősül.',
          },
          b: {
            id: '11_1_b',
            szoveg:
              '„Autópálya vége” jelzőtábla, amely az autópálya jelleg megszűnését jelzi.',
          },
          c: {
            id: '11_1_c',
            szoveg:
              '„Autóút” jelzőtábla, amely azt jelzi, hogy az útszakasz autóútnak minősül.',
          },
          d: {
            id: '11_1_d',
            szoveg:
              '„Autóút vége” jelzőtábla, amely az autóút jelleg megszűnését jelzi.',
          },
          e: {
            id: '11_1_e',
            szoveg:
              '„Főútvonal” jelzőtábla, amely azt jelzi, hogy az útszakasz főútvonal.',
          },
          f: {
            id: '11_1_f',
            szoveg:
              '„Főútvonal vége” jelzőtábla, amely a főútvonal jelleg megszűnését jelzi.',
          },
        },
      },

      '2': {
        id: '11_2',
        szoveg:
          'Ha egy útkereszteződésben a főútvonal iránya nem egyenes, akkor a főútvonal jelzőtábla alatt elhelyezett kiegészítő tábla ábrával jelzi a főútvonal tényleges vonalvezetését.',
      },

      '3': {
        id: '11_3',
        szoveg:
          'Az autópálya, autóút, autóút vége és főútvonal vége jelzőtáblák előjelzésére azonos jelzésű tábla alkalmazható, amely kiegészítő táblán feltünteti a jelzett útszakasz távolságát.',
      },

      '4': {
        id: '11_4',
        szoveg:
          'Az autópályát jelző tábla alatt elhelyezett kiegészítő tábla jelezheti, hogy az út használata díjköteles. Az autópálya és az autópálya vége jelzőtábla alatt elhelyezett kiegészítő tábla a díjfizetési kötelezettség megszűnését is jelezheti, valamint tartalmazhatja az ellenőrzés módjára vonatkozó információt.',
      },

      '5': {
        id: '11_5',
        szoveg:
          'Az autóutat jelző tábla alatt elhelyezett kiegészítő tábla utalhat arra, hogy az út használata egyes járműkategóriák – különösen tehergépkocsik – számára díjköteles. A kiegészítő tábla meghatározhatja azt a legkisebb megengedett össztömeget, amely felett a díjfizetés kötelező. Az autóút és az autóút vége jelzőtábla alatt elhelyezett kiegészítő tábla jelezheti a díjfizetési kötelezettség végét, valamint az ellenőrzés módját.',
      },

      '6': {
        id: '11_6',
        szoveg:
          'A főútvonalat jelző tábla alatt elhelyezett kiegészítő tábla jelezheti, hogy a megadott össztömeget meghaladó tehergépkocsik csak úthasználati díj megfizetésével közlekedhetnek. A főútvonal és a főútvonal vége jelzőtábla alatt elhelyezett kiegészítő tábla jelezheti a díjfizetési kötelezettség végét, valamint az ellenőrzés módját.',
      },
    },
  },
  /** ======================================================
   *  12. § – Az elsőbbséget szabályozó jelzőtáblák
   *  ====================================================== */
  '12': {
    paragrafus: '12',
    cim: '12. § – Az elsőbbséget szabályozó jelzőtáblák',

    bekezdesek: {
      '1': {
        id: '12_1',
        szoveg:
          'Az elsőbbséget szabályozó jelzőtáblák azt határozzák meg, hogy a közlekedőknek mikor és kivel szemben kell elsőbbséget adniuk.',
        alpontok: {
          a: {
            id: '12_1_a',
            szoveg:
              '„Elsőbbségadás kötelező” jelzőtábla azt jelzi, hogy az útkereszteződésben elsőbbséget kell adni a keresztező vagy betorkolló úton érkező járművek részére. Ha a jelzőtábla alatt kiegészítő tábla mutatja az útkereszteződés vázlatát, akkor a vastag vonallal jelölt úton érkező járműveknek kell elsőbbséget adni. Ha a kiegészítő tábla a kerékpáros közlekedést is jelzi, akkor az úttest kerékpáros célra kijelölt részén áthaladó kerékpárosnak is elsőbbséget kell biztosítani.',
          },
          b: {
            id: '12_1_b',
            szoveg:
              '„ÁLLJ! Elsőbbségadás kötelező” jelzőtábla esetén a járművel kötelező megállni az útkereszteződés előtt. A megállást a megállás helyét jelző útburkolati jel előtt kell végrehajtani, ennek hiányában még az útkereszteződésbe való behajtás előtt. A megállás után elsőbbséget kell adni azoknak a járműveknek, amelyek a keresztező vagy betorkolló úton közlekednek.',
          },
          c: {
            id: '12_1_c',
            szoveg:
              '„A szembejövő forgalom elsőbbsége” jelzőtábla azt jelzi, hogy az útszűkületnél a szembejövő jármű részére elsőbbséget kell adni.',
          },
          d: {
            id: '12_1_d',
            szoveg:
              '„Elsőbbség a szembejövő forgalommal szemben” jelzőtábla azt jelzi, hogy az útszűkületnél a jármű elsőbbséget élvez a szembejövő járművel szemben.',
          },
        },
      },

      '2': {
        id: '12_2',
        szoveg:
          'Az „Elsőbbségadás kötelező” jelzőtábla előjelzésére azonos jelzésű tábla alkalmazható, amely kiegészítő táblán feltünteti az elsőbbségadási kötelezettség helyéig hátralévő távolságot.',
      },

      '3': {
        id: '12_3',
        szoveg:
          'Az „ÁLLJ! Elsőbbségadás kötelező” jelzőtábla előjelzésére olyan tábla alkalmazható, amely az elsőbbségadás kötelezettségét és a „STOP” feliratot is tartalmazza, valamint jelzi a megállási hely távolságát.',
      },

      '4': {
        id: '12_4',
        szoveg:
          'Ha az „ÁLLJ! Elsőbbségadás kötelező” jelzőtáblát vasúti átjárónál helyezték el, a járművel kötelező megállni a megállás helyét jelző útburkolati jel előtt, ennek hiányában közvetlenül a jelzőtábla előtt. A továbbhaladás csak akkor megengedett, ha a járművezető meggyőződött arról, hogy vasúti jármű nem közeledik.',
      },
    },
  },
  /** ======================================================
   *  13. § – Utasítást adó jelzőtáblák
   *  ====================================================== */
  '13': {
    paragrafus: '13',
    cim: '13. § – Utasítást adó jelzőtáblák',

    bekezdesek: {
      '1': {
        id: '13_1',
        szoveg:
          'Az utasítást adó jelzőtáblák meghatározzák, hogy az adott útszakaszon vagy területen a közlekedők milyen módon kötelesek közlekedni.',
        alpontok: {
          a: {
            id: '13_1_a',
            szoveg:
              '„Kötelező haladási irány” jelzőtábla azt jelzi, hogy az útkereszteződésben kizárólag a táblán feltüntetett nyíl vagy nyilak irányába szabad továbbhaladni. Ha a tábla alatt autóbuszt vagy kerékpárt ábrázoló kiegészítő tábla van, akkor a menetrend szerint közlekedő autóbusz, illetve a kerékpáros a kiegészítő táblán jelzett irányban haladhat tovább.',
          },
          'a/1': {
            id: '13_1_a/1',
            szoveg:
              '„Kötelező haladási irány veszélyes anyagot szállító jármű részére” jelzőtábla azt jelenti, hogy az útkereszteződésben a veszélyes anyagot szállító jármű kizárólag a táblán megjelölt irányban haladhat tovább.',
          },
          b: {
            id: '13_1_b',
            szoveg:
              '„Kikerülési irány” jelzőtábla azt jelzi, hogy a táblát, illetve azt az akadályt vagy tárgyat, amelyen a táblát elhelyezték, kizárólag a nyíllal jelzett irányban szabad kikerülni.',
          },
          c: {
            id: '13_1_c',
            szoveg:
              '„Körforgalom” jelzőtábla olyan utat jelez, ahol a közlekedés során a körforgalom által körbezárt területnek a járművezetőtől balra kell esnie.',
          },
          d: {
            id: '13_1_d',
            szoveg:
              '„Kötelező legkisebb sebesség” jelzőtábla azt jelzi, hogy az úton legalább a táblán feltüntetett sebességgel kell haladni. Ettől csak akkor lehet eltérni, ha az útviszonyok, a forgalom, az időjárás vagy a látási körülmények miatt ez a sebesség a közlekedés biztonságát veszélyeztetné. A kötelezettséget kizárólag a „Kötelező legkisebb sebesség vége” jelzőtábla szünteti meg.',
          },
          e: {
            id: '13_1_e',
            szoveg:
              '„Kerékpárút” jelzőtábla a kétkerekű kerékpárok közlekedésére kijelölt utat jelez. A segédmotoros rokkantkocsi, a gépi meghajtású kerekes szék és a kétkerekű segédmotoros kerékpár lakott területen kívül akkor használhatja a kerékpárutat, ha azt jelzőtábla nem tiltja. A kerékpárúton egyéb jármű nem közlekedhet.',
          },
          f: {
            id: '13_1_f',
            szoveg:
              '„Kerékpárút vége” jelzőtábla a kerékpárút kijelölt szakaszának végét jelzi.',
          },
          g: {
            id: '13_1_g',
            szoveg:
              '„Gyalogút” jelzőtábla olyan önálló utat jelez, amely kizárólag a gyalogosok közlekedésére szolgál. A gyalogúton jármű közlekedése tilos.',
          },
          h: {
            id: '13_1_h',
            szoveg:
              '„Gyalogút vége” jelzőtábla a gyalogosok számára kijelölt út végét jelzi.',
          },
          i: {
            id: '13_1_i',
            szoveg:
              '„Gyalog- és kerékpárút” jelzőtábla a gyalogosok, a kerekes székesek és a kétkerekű kerékpárok közlekedésére kijelölt utat jelzi. Ha burkolati jel választja el a gyalogos és a kerékpáros forgalmat, mindenki csak a számára kijelölt útrészen közlekedhet.',
          },
          j: {
            id: '13_1_j',
            szoveg:
              '„Gyalog- és kerékpárút vége” jelzőtábla a közös gyalogos-kerékpáros út végét jelzi.',
          },
          'g/1': {
            id: '13_1_g/1',
            szoveg:
              '„Gyalogos övezet (zóna)” jelzőtábla olyan terület kezdetét jelzi, ahol az utak elsősorban a gyalogosok közlekedésére szolgálnak. A járműforgalom alapvetően tilos. Ha időszakot jelölő kiegészítő tábla van elhelyezve, az azon kívüli időben az ott lakók, az engedéllyel rendelkezők és a kerékpárosok legfeljebb 10 km/óra sebességgel, a gyalogosok veszélyeztetése nélkül közlekedhetnek. A jelzett időszakban a várakozás tilos. Mozgáskorlátozott személyt szállító jármű közlekedhet és várakozhat.',
          },
          'h/1': {
            id: '13_1_h/1',
            szoveg:
              '„Gyalogos övezet (zóna) vége” jelzőtábla a gyalogos övezet hatályának végét jelzi.',
          },
          'i/1': {
            id: '13_1_i/1',
            szoveg:
              '„Gyalogos és kerékpáros övezet (zóna)” jelzőtábla olyan területet jelöl, ahol az utak a gyalogosok és a kerékpárosok közlekedésére szolgálnak. Más jármű nem közlekedhet. A kerékpárosok a kijelölt útrészen legfeljebb 20 km/óra, más útrészen legfeljebb 10 km/óra sebességgel haladhatnak, a gyalogosok veszélyeztetése nélkül.',
          },
          'j/1': {
            id: '13_1_j/1',
            szoveg:
              '„Gyalogos és kerékpáros övezet (zóna) vége” jelzőtábla az övezet hatályának végét jelzi.',
          },
          k: {
            id: '13_1_k',
            szoveg:
              '„Hólánc használata kötelező” jelzőtábla azt jelzi, hogy a jármű legalább egy hajtott tengelyén a gumiabroncsokat hólánccal kell felszerelni.',
          },
          'k/1': {
            id: '13_1_k/1',
            szoveg:
              '„Hólánc használata kötelező vége” jelzőtábla a hólánc használatára vonatkozó kötelezettség végét jelzi.',
          },
          'k/2': {
            id: '13_1_k/2',
            szoveg:
              'Ha a „Hólánc használata kötelező” jelzőtáblát közúti határátkelőhelyen helyezték el, Magyarország területére csak olyan jármű léphet be, amelynél készenlétben van legalább egy hajtott tengely gumiabroncsaira felszerelhető hólánc.',
          },
        },
      },

      '2': {
        id: '13_2',
        szoveg:
          'Ha a gyalogutat vagy a gyalog- és kerékpárutat jelző tábla alatt időszakot megjelölő kiegészítő tábla van, a megjelölt időszakon kívül célforgalomban más járművek is közlekedhetnek legfeljebb 20 km/óra sebességgel, a gyalogosok és kerékpárosok veszélyeztetése nélkül. Ha a gyalogosforgalom akadályozza a kerékpárosok haladását, a kerékpárosok az úttesten is közlekedhetnek.',
      },
    },
  },
  /** ======================================================
   *  14. § – A járművek forgalmára vonatkozó tilalmi jelzőtáblák
   *  ====================================================== */
  '14': {
    paragrafus: '14',
    cim: '14. § – A járművek forgalmára vonatkozó tilalmi jelzőtáblák',

    bekezdesek: {
      '1': {
        id: '14_1',
        szoveg:
          'A tilalmi jelzőtáblák a járművek közlekedését tiltják vagy korlátozzák meghatározott irányokban, manőverekre, járműtípusokra vagy övezetekre vonatkozóan.',
        alpontok: {
          a: {
            id: '14_1_a',
            szoveg:
              '„Jobbra bekanyarodni tilos” jelzőtábla azt jelzi, hogy az adott útkereszteződésben jobbra kanyarodni nem szabad.',
          },
          b: {
            id: '14_1_b',
            szoveg:
              '„Balra bekanyarodni tilos” jelzőtábla azt jelzi, hogy az útkereszteződésben balra bekanyarodni és megfordulni tilos.',
          },
          c: {
            id: '14_1_c',
            szoveg:
              '„Megfordulni tilos” jelzőtábla az úton történő megfordulás tilalmát jelzi.',
          },
          d: {
            id: '14_1_d',
            szoveg:
              '„Sebességkorlátozás” jelzőtábla azt jelzi, hogy az úton a táblán megjelölt sebességnél gyorsabban haladni tilos. Kiegészítő tábla jelezheti az időjárási feltételt, az időbeli hatályt vagy az érintett járműkategóriákat.',
          },
          e: {
            id: '14_1_e',
            szoveg:
              '„Legkisebb követési távolság” jelzőtábla azt jelzi, hogy a járművek egymást a megjelölt távolságnál közelebb nem követhetik.',
          },
          f: {
            id: '14_1_f',
            szoveg:
              '„Előzni tilos” jelzőtábla az úton történő előzést tiltja, kivéve a kétkerekű motorkerékpár, segédmotoros kerékpár, kerékpár, állati erővel vont jármű, kézikocsi és villamos előzését.',
          },
          g: {
            id: '14_1_g',
            szoveg:
              '„Tehergépkocsival előzni tilos” jelzőtábla a meghatározott össztömeget meghaladó tehergépkocsik és egyes járműszerelvények előzését tiltja, a jogszabályban meghatározott kivételekkel.',
          },
          h: {
            id: '14_1_h',
            szoveg:
              '„Kötelező megállás”  (VÁM/ZOLL) jelzőtábla azt jelzi, hogy a megjelölt helyen megállás nélkül továbbhaladni tilos.',
          },
          i: {
            id: '14_1_i',
            szoveg:
              '„Szélességkorlátozás” jelzőtábla azt jelzi, hogy a megadott méretnél szélesebb járművel közlekedni tilos.',
          },
          j: {
            id: '14_1_j',
            szoveg:
              '„Magasságkorlátozás” jelzőtábla a megjelölt magasságot meghaladó járművek közlekedését tiltja.',
          },
          k: {
            id: '14_1_k',
            szoveg:
              '„Hosszúságkorlátozás” jelzőtábla azt jelzi, hogy a megjelölt hosszúságot meghaladó járművel vagy járműszerelvénnyel közlekedni tilos.',
          },
          l: {
            id: '14_1_l',
            szoveg:
              '„Súlykorlátozás” jelzőtábla azt jelzi, hogy a megjelölt össztömeget meghaladó járművel közlekedni tilos.',
          },
          m: {
            id: '14_1_m',
            szoveg:
              '„Tengelyterhelés-korlátozás” jelzőtábla olyan járművek közlekedését tiltja, amelyek tengelyterhelése meghaladja a megjelölt értéket.',
          },
          n: {
            id: '14_1_n',
            szoveg:
              '„Mindkét irányból behajtani tilos” jelzőtábla az útra történő behajtást minden irányból tiltja.',
          },
          o: {
            id: '14_1_o',
            szoveg:
              'Gépjárművel, mezőgazdasági vontatóval és lassú járművel behajtani tilos” (41. ábra); a tábla azt jelzi, hogy az útra gépjárművel – kivéve a kétkerekű motorkerékpárt –, valamint mezőgazdasági vontatóval és lassú járművel behajtani tilos;',
          },
          p: {
            id: '14_1_p',
            szoveg:
              '„Motorkerékpárral behajtani tilos” (42. ábra); a tábla azt jelzi, hogy az útra kétkerekű motorkerékpárral, oldalkocsis motorkerékpárral és motoros triciklivel behajtani tilos;',
          },
          q: {
            id: '14_1_q',
            szoveg:
              '„Autóbusszal behajtani tilos” (42/a ábra); a tábla azt jelzi, hogy az útra autóbusszal – kivéve a menetrend szerint közlekedő autóbuszt – behajtani tilos;',
          },
          r: {
            id: '14_1_r',
            szoveg:
              '„„Tehergépkocsival behajtani tilos” (43. ábra); a tábla azt jelzi, hogy az útra tehergépkocsival – kivéve a legfeljebb 3500 kilogramm megengedett legnagyobb össztömegű, zárt kocsiszekrényű tehergépkocsit –, valamint vontatóval, mezőgazdasági vontatóval és lassú járművel behajtani tilos; ha a tábla súlyhatárt is megjelöl (44. ábra), csak az ezt meghaladó megengedett legnagyobb össztömegű járművel tilos behajtani;',
          },
          s: {
            id: '14_1_s',
            szoveg:
              '„Mezőgazdasági vontatóval behajtani tilos” (45. ábra); a tábla azt jelzi, hogy az útra mezőgazdasági vontatóval és lassú járművel behajtani tilos;',
          },
          t: {
            id: '14_1_t',
            szoveg:
              '„Járműszerelvénnyel behajtani tilos” (46. ábra); a tábla azt jelzi, hogy az útra járműszerelvénnyel – kivéve a vonójárműből és egytengelyes vagy félpótkocsiból álló járműszerelvényt – behajtani tilos; ha a tábla súlyhatárt is megjelöl (47 . ábra), csak olyan járműszerelvénnyel tilos behajtani, amelyben a pótkocsi (bármelyik pótkocsi) megengedett legnagyobb össztömege ezt a súlyhatárt meghaladja;',
          },
          u: {
            id: '14_1_u',
            szoveg: '„Segédmotoros kerékpárral behajtani tilos” ',
          },
          v: {
            id: '14_1_v',
            szoveg: '„Kerékpárral behajtani tilos” ',
          },
          w: {
            id: '14_1_w',
            szoveg: '„Kézikocsival bemenni tilos” ',
          },
          x: {
            id: '14_1_x',
            szoveg: '„Állati erővel vont járművel behajtani tilos” ',
          },
          y: {
            id: '14_1_y',
            szoveg:
              ',,Veszélyes anyagot szállító járművel behajtani tilos (52. ábra), a tábla azt jelzi, hogy az útra veszélyes anyagot szállító járművel behajtani tilos; ',
          },
          z: {
            id: '14_1_z',
            szoveg: '„Állati erővel vont járművel behajtani tilos” ',
          },

          'z/1': {
            id: '14_1_z/1',
            szoveg:
              '„Korlátozott sebességű övezet” jelzőtábla olyan terület kezdetét jelzi, ahol a teljes övezetben a megjelölt sebességnél gyorsabban haladni tilos.',
          },
          'z/2': {
            id: '14_1_z/2',
            szoveg:
              '„Korlátozott forgalmú övezet” jelzőtábla olyan területet jelöl, ahol meghatározott járművek közlekedése tilos.',
          },
          'z/3': {
            id: '14_1_z/3',
            szoveg:
              '„Környezetvédelmi övezet” jelzőtábla olyan területet jelöl, ahol csak meghatározott környezetvédelmi besorolású járművek közlekedhetnek.',
          },
        },
      },

      '2': {
        id: '14_2',
        szoveg:
          'Ha egy tilalmi jelzőtáblán több jármű jelképe is szerepel, a behajtási tilalom valamennyi feltüntetett járműtípusra együttesen vonatkozik.',
      },

      '3': {
        id: '14_3',
        szoveg:
          'Ha a tilalmi jelzőtábla alatt „Kivéve célforgalom” vagy „Kivéve áruszállítás” feliratú kiegészítő tábla van, a tilalom nem vonatkozik azokra a járművekre, amelyek úti célja a megjelölt úton vagy övezetben található.',
      },

      '4': {
        id: '14_4',
        szoveg:
          'Időszakot megjelölő kiegészítő tábla esetén a tilalom csak a megjelölt időtartamban áll fenn, a tiltott időszak kezdetéig az útszakaszt el kell hagyni.',
      },

      '5': {
        id: '14_5',
        szoveg:
          'A jobbra és balra bekanyarodást tiltó jelzőtáblák hatálya kizárólag arra az útkereszteződésre terjed ki, amely előtt azokat elhelyezték.',
      },
      '6': {
        id: '14_6',
        szoveg:
          'A megfordulási tilalomra, az előzési tilalomra, a tehergépkocsira vonatkozó előzési tilalomra és a sebességkorlátozásra vonatkozó jelzőtáblák hatálya a jelzőtáblánál kezdődik és a következő útkereszteződés kezdetéig tart. Ha a jelzőtábla alatt kiegészítő tábla rövidebb távolságot jelöl meg, a tilalom csak erre a szakaszra vonatkozik. A tilalom a megfelelő feloldó jelzőtábla elhelyezésével korábban is megszűnhet.',
      },

      '7': {
        id: '14_7',
        szoveg:
          'A „Sebességkorlátozás vége”, az „Előzési tilalom vége”, a „Tehergépkocsira vonatkozó előzési tilalom vége”, valamint a „Mozgó járművekre vonatkozó tilalmak vége” jelzőtáblák az addig érvényben lévő tilalmak hatályát megszüntetik.',
      },

      '8': {
        id: '14_8',
        szoveg:
          'Ha a „Sebességkorlátozás” jelzőtáblát a „Lakott terület kezdete” jelzőtáblával együtt helyezték el, a sebességkorlátozás a teljes lakott területre érvényes.',
      },

      '9': {
        id: '14_9',
        szoveg:
          'Ha a jobbra vagy balra bekanyarodási tilalomra, a megfordulási tilalomra, az előzési tilalomra, a sebességkorlátozásra, valamint az övezeteket jelző tilalmi táblákra vonatkozó jelzőtábla alatt időszakot jelölő kiegészítő tábla van elhelyezve, a tilalom kizárólag a megjelölt időszakban áll fenn.',
      },

      '10': {
        id: '14_10',
        szoveg:
          'Ha a behajtási tilalmat jelző táblák alatt időszakot jelölő kiegészítő tábla van, a tilalom csak a megjelölt időszakban érvényes. Az a jármű, amely a nem tiltott időszakban hajtott be, a tiltott időszak kezdetéig köteles az érintett útszakaszt vagy övezetet elhagyni.',
      },

      '11': {
        id: '14_11',
        szoveg:
          'Ha a „Kivéve célforgalom” vagy a „Kivéve áruszállítás” feliratú kiegészítő tábla időszakot is megjelöl, az útra célforgalomban vagy áruszállítás céljából kizárólag a megjelölt időszakban szabad behajtani, és azt annak végéig el kell hagyni.',
      },

      '12': {
        id: '14_12',
        szoveg:
          'A behajtási tilalmat jelző táblák hatálya nem vonatkozik azokra a járművekre, amelyek köztisztasági, közegészségügyi, közútkezelői vagy postai szolgáltatási feladatot látnak el, amennyiben a feladat ellátása érdekében a behajtás elkerülhetetlen. A feladat befejezése után az érintett útszakaszt haladéktalanul el kell hagyni.',
      },

      '13': {
        id: '14_13',
        szoveg:
          'A mozgáskorlátozott személyt szállító jármű, valamint a betegszállító gépjármű behajthat a behajtási tilalom ellenére is, ha az úti cél az érintett úton található vagy kizárólag ezen az úton közelíthető meg. Ilyen esetben legfeljebb 20 km/óra sebességgel szabad közlekedni.',
      },
      '13a': {
        id: '14_13a',
        szoveg:
          'Bizonyos behajtást tiltó jelzőtáblák ellenére a mezőgazdasági vontató, a lassú jármű, a mezőgazdasági erőgép, valamint az ezekből és pótkocsiból álló járműszerelvény mezőgazdasági munkavégzés céljából behajthat, ha a munkavégzés helyének megközelítése másként nem lehetséges, vagy az alternatív útvonal választása az út hosszát több mint 50%-kal növelné. A behajtás csak akkor megengedett, ha az nem veszélyezteti a személy- és vagyonbiztonságot, és a forgalmat lényegesen nem akadályozza.',
      },

      '14': {
        id: '14_14',
        szoveg:
          'Mezőgazdasági tevékenység végzése érdekében a mezőgazdasági vontatóval, lassú járművel vagy mezőgazdasági erőgéppel a behajtási tilalom ellenére is be lehet hajtani, ha a munkavégzés helye más útvonalon csak jelentős kerülővel érhető el, és a behajtás nem veszélyezteti a közlekedés biztonságát.',
      },

      '15': {
        id: '14_15',
        szoveg:
          'Ha a behajtási tilalmat jelző tábla alatt olyan kiegészítő tábla van, amely engedéllyel, taxival vagy meghatározott közlekedési szolgáltató járműveivel történő behajtást engedélyez, akkor az érintett járművek, továbbá a kerékpárok és az állati erővel vont járművek behajthatnak. Az engedélyt az út kezelője adja ki.',
      },
    },
  },
  /** ======================================================
   *  15. § – Megállási és várakozási tilalmat jelző táblák
   *  ====================================================== */
  '15': {
    paragrafus: '15',
    cim: '15. § – Megállási és várakozási tilalmat jelző táblák',

    bekezdesek: {
      '1': {
        id: '15_1',
        szoveg:
          'A megállást vagy várakozást tiltó jelzőtáblák a járművek megállására és várakozására vonatkozó tilalmakat határozzák meg.',
        alpontok: {
          a: {
            id: '15_1_a',
            szoveg:
              '„Megállni tilos” jelzőtábla azt jelzi, hogy a forgalmi vagy műszaki okból szükséges megállást kivéve megállni és várakozni tilos.',
          },
          b: {
            id: '15_1_b',
            szoveg:
              '„Várakozni tilos” jelzőtábla azt jelzi, hogy a jármű várakozása tilos. A jelzőtábla alatt elhelyezett kiegészítő tábla jelezheti, hogy a tilalom nem vonatkozik a járművek meghatározott körére.',
          },
          c: {
            id: '15_1_c',
            szoveg:
              '„Korlátozott várakozási övezet” jelzőtábla azt jelzi, hogy az övezetben a várakozás csak a kiegészítő táblán megjelölt időtartamig vagy feltételekkel engedélyezett, az övezet végét jelző tábláig.',
          },
        },
      },

      '2': {
        id: '15_2',
        szoveg:
          'A megállást vagy várakozást tiltó jelzőtáblák hatálya a táblánál kezdődik és a következő útkereszteződésig tart, kivéve ha kiegészítő tábla rövidebb távolságot jelöl meg, ha a tilalmat más jelzőtábla korábban feloldja, vagy ha a hatályt külön jelzés módosítja.',
      },

      '3': {
        id: '15_3',
        szoveg:
          'A jelzőtábla alatt elhelyezett, nyilat tartalmazó kiegészítő tábla jelezheti, hogy a tilalom a táblától kezdve, a tábláig, vagy a tábla előtt és után egyaránt fennáll.',
      },

      '4': {
        id: '15_4',
        szoveg:
          'Ha a jelzőtábla alatt elhelyezett kiegészítő tábla időszakot jelöl meg, a megállási vagy várakozási tilalom csak a megjelölt időszakban érvényes.',
      },

      '5': {
        id: '15_5',
        szoveg:
          'Ha a „Várakozni tilos” jelzőtábla alatt elhelyezett kiegészítő tábla időtartamot jelöl meg, a tilalom csak a megjelölt időtartamot meghaladó várakozásra vonatkozik.',
      },

      '6': {
        id: '15_6',
        szoveg:
          'A „Várakozni tilos” jelzőtábla alatti kiegészítő tábla jelezheti, hogy a várakozás a kijelölt rakodóhely szabadon hagyása érdekében tilos, a megjelölt időszakban és távolságon belül. Árutszállító jármű a folyamatos rakodás idejére maradhat, más jármű csak akkor, ha vezetője a járműnél marad és a rakodást azonnal lehetővé teszi.',
      },

      '7': {
        id: '15_7',
        szoveg:
          'A jelzőtábla alatti kiegészítő tábla utalhat arra is, hogy a megállási vagy várakozási tilalom az útpadkára is kiterjed.',
      },

      '8': {
        id: '15_8',
        szoveg:
          'A „Korlátozott várakozási övezet” jelzőtábla alkalmazható olyan kiegészítő jelzésekkel együtt, amelyek a várakozás módját, időtartamát vagy feltételeit határozzák meg. Ilyen esetben a kiegészítő táblán feltüntetett szabályok az irányadók.',
      },

      '9': {
        id: '15_9',
        szoveg:
          'A megállást vagy várakozást tiltó jelzőtábla alatti kiegészítő tábla jelezheti, hogy a szabálytalanul várakozó járművet elszállítással eltávolíthatják.',
      },

      '10': {
        id: '15_10',
        szoveg:
          'A várakozási szabályokat meghatározó jelzőtábla alatti kiegészítő tábla jelezheti, hogy a szabályszegő járművet kerékbilincs alkalmazásával rögzíthetik.',
      },
    },
  },
  /** ======================================================
   *  16. § – Veszélyt jelző táblák
   *  ====================================================== */
  '16': {
    paragrafus: '16',
    cim: '16. § – Veszélyt jelző táblák',

    bekezdesek: {
      '1': {
        id: '16_1',
        szoveg:
          'A veszélyt jelző táblák az úton vagy annak közelében fennálló, fokozott figyelmet igénylő veszélyekre hívják fel a közlekedők figyelmét.',
        alpontok: {
          a: {
            id: '16_1_a',
            szoveg:
              '„Veszélyes útkanyarulat balra” vagy „Veszélyes útkanyarulat jobbra” jelzőtábla azt jelzi, hogy az úton éles kanyar következik.',
          },
          b: {
            id: '16_1_b',
            szoveg:
              '„Egymás utáni veszélyes útkanyarulatok” jelzőtábla azt jelzi, hogy az úton egymást követően két vagy több veszélyes kanyar van, és a tábla az első kanyar irányát is mutatja.',
          },
          c: {
            id: '16_1_c',
            szoveg:
              '„Veszélyes lejtő” vagy „Veszélyes emelkedő” jelzőtábla jelentős lejtőt vagy emelkedőt jelez. A táblán feltüntetett szám a legnagyobb lejtés vagy emelkedés százalékos mértékét mutatja.',
          },
          d: {
            id: '16_1_d',
            szoveg:
              '„Útszűkület” jelzőtábla azt jelzi, hogy az úttest szélessége a korábbi útszakaszhoz képest számottevően csökken.',
          },
          e: {
            id: '16_1_e',
            szoveg:
              '„Szembejövő forgalom” jelzőtábla azt jelzi, hogy az útszakaszon kétirányú forgalomra kell számítani.',
          },
          f: {
            id: '16_1_f',
            szoveg:
              '„Kompátkelés vagy nyitható híd” jelzőtábla azt jelzi, hogy az úton kompátkelő vagy nyitható híd található.',
          },
          g: {
            id: '16_1_g',
            szoveg:
              '„Rakpart vagy meredek part” jelzőtábla arra figyelmeztet, hogy az út közvetlenül vízpart vagy szakadék mellett halad.',
          },
          h: {
            id: '16_1_h',
            szoveg:
              '„Bukkanó” jelzőtábla azt jelzi, hogy az úton domborzati okból a beláthatóság korlátozott.',
          },
          i: {
            id: '16_1_i',
            szoveg:
              '„Egyenetlen úttest” jelzőtábla arra figyelmeztet, hogy az úttest rossz állapotú vagy sebességcsökkentő küszöbök vannak kialakítva.',
          },
          j: {
            id: '16_1_j',
            szoveg:
              '„Csúszós úttest” jelzőtábla azt jelzi, hogy az útfelület különösen csúszóssá válhat.',
          },
          k: {
            id: '16_1_k',
            szoveg:
              '„Kavicsfelverődés” jelzőtábla arra figyelmeztet, hogy laza burkolat miatt kavicsok verődhetnek fel.',
          },
          l: {
            id: '16_1_l',
            szoveg:
              '„Kőomlás” jelzőtábla azt jelzi, hogy az úttestre kövek hullhatnak.',
          },
          m: {
            id: '16_1_m',
            szoveg:
              '„Úton folyó munkák” jelzőtábla az úton vagy annak közelében végzett munkálatokra figyelmeztet.',
          },
          n: {
            id: '16_1_n',
            szoveg:
              '„Mélyrepülés” jelzőtábla azt jelzi, hogy az út felett alacsonyan repülő légijárművek jelenhetnek meg.',
          },
          o: {
            id: '16_1_o',
            szoveg:
              '„Oldalszél” jelzőtábla arra figyelmeztet, hogy az úton gyakori az erős oldalirányú szél.',
          },
          p: {
            id: '16_1_p',
            szoveg:
              '„Gyalogosátkelés” jelzőtábla kijelölt gyalogos-átkelőhely jelenlétét jelzi.',
          },
          q: {
            id: '16_1_q',
            szoveg:
              '„Gyermekek” jelzőtábla arra figyelmeztet, hogy gyermekek megjelenésére fokozottan számítani kell.',
          },
          r: {
            id: '16_1_r',
            szoveg:
              '„Állatok” jelzőtábla házi vagy vadon élő állatok úttestre lépésének veszélyére figyelmeztet.',
          },
          s: {
            id: '16_1_s',
            szoveg:
              '„Forgalomirányító fényjelző készülék” jelzőtábla jelzőlámpás irányítás jelenlétét jelzi.',
          },
          t: {
            id: '16_1_t',
            szoveg:
              '„Egyenrangú utak kereszteződése” jelzőtábla olyan kereszteződést jelez, ahol a jobbról érkező járműnek van elsőbbsége.',
          },
          u: {
            id: '16_1_u',
            szoveg:
              '„Útkereszteződés alárendelt úttal” jelzőtábla azt jelzi, hogy a jármű elsőbbséget élvez a keresztező útról érkezőkkel szemben.',
          },
          v: {
            id: '16_1_v',
            szoveg:
              '„Sorompó nélküli vasúti átjáró” jelzőtábla vasúti átjárót jelez, ahol nincs teljes vagy félsorompó.',
          },
          x: {
            id: '16_1_x',
            szoveg:
              '„Sorompóval biztosított vasúti átjáró” jelzőtábla olyan vasúti átjárót jelez, ahol sorompó működik.',
          },
          y: {
            id: '16_1_y',
            szoveg:
              '„Villamos” jelzőtábla villamospályával való keresztezést jelez.',
          },
          z: {
            id: '16_1_z',
            szoveg:
              '„Egyéb veszély” jelzőtábla olyan veszélyre figyelmeztet, amely más jelzőtáblával nem jelezhető. A veszély jellege kiegészítő táblán van feltüntetve.',
          },
          'z/1': {
            id: '16_1_z/1',
            szoveg:
              '„Gyalogosok” jelzőtábla fokozott gyalogosforgalomra figyelmeztet.',
          },
          'z/2': {
            id: '16_1_z/2',
            szoveg:
              '„Kerékpárosok” jelzőtábla fokozott kerékpárosforgalomra figyelmeztet.',
          },
          'z/3': {
            id: '16_1_z/3',
            szoveg:
              'Kiegészítő tábla jelezheti, hogy az úton olyan kereszteződés van, ahol kerékpárosok keresztirányú közlekedésére kell számítani.',
          },
          'z/4': {
            id: '16_1_z/4',
            szoveg:
              '„Útzár” jelzőtábla azt jelzi, hogy az utat hatósági intézkedéssel lezárták.',
          },
          'z/5': {
            id: '16_1_z/5',
            szoveg:
              '„Körforgalom” jelzőtábla a következő kereszteződésben körforgalmi rendet jelez.',
          },
          z6: {
            id: '16_1_z/6',
            szoveg:
              '„Torlódás” jelzőtábla arra figyelmeztet, hogy az úton feltorlódott járművekre kell számítani.',
          },
        },
      },
      '2': {
        id: '16_2',
        szoveg:
          'A veszélyt jelző tábla és a veszélyes útszakasz kezdete között autópályán 250–500 méter, lakott területen kívül 150–250 méter, lakott területen 50–100 méter távolság van, kivéve ha kiegészítő tábla ennél rövidebb távolságot jelez.',
      },

      '3': {
        id: '16_3',
        szoveg:
          'A jelzőtábla alatt elhelyezett kiegészítő tábla jelezheti, hogy a veszély hosszabb útszakaszon áll fenn.',
      },

      '4': {
        id: '16_4',
        szoveg:
          'A vasúti átjáró közeledtét kiegészítő jelzőtáblák is jelezhetik.',
        alpontok: {
          a: {
            id: '16_4_a',
            szoveg:
              '„Vasúti átjáró kezdete” jelzőtábla a vasúti átjáró kezdetét jelzi, valamint külön tábla jelezheti a két- vagy többvágányú vasúti átjárót.',
          },
          b: {
            id: '16_4_b',
            szoveg:
              'A vasúti átjárót előjelző táblák sorozata azt mutatja, hogy a járművezető vasúti átjáróhoz közeledik, és az átjáró előtti útszakaszt több egyenlő részre osztja.',
          },
        },
      },

      '5': {
        id: '16_5',
        szoveg:
          'A hóesésre vagy esőzésre utaló kiegészítő tábla azt jelzi, hogy az adott időjárási körülmények között a balesetveszély fokozott.',
      },
    },
  },

  /** ======================================================
   *  17. § – Tájékoztatást adó jelzőtáblák
   *  ====================================================== */
  '17': {
    paragrafus: '17',
    cim: '17. § – Tájékoztatást adó jelzőtáblák',

    bekezdesek: {
      '1': {
        id: '17_1',
        szoveg:
          'A tájékoztatást adó jelzőtáblák az út jellegére, rendeltetésére, használatára és a közlekedők számára fontos egyéb információkra hívják fel a figyelmet.',
        alpontok: {
          a: {
            id: '17_1_a',
            szoveg:
              '„Kijelölt gyalogosátkelőhely” jelzőtábla azt jelzi, hogy az úttesten útburkolati jellel kijelölt gyalogosátkelőhely található.',
          },
          'a/1': {
            id: '17_1_a/1',
            szoveg:
              '„Gyalogos alul- vagy felüljáró” jelzőtábla a gyalogosok számára kialakított aluljárót vagy felüljárót jelzi.',
          },
          'a/2': {
            id: '17_1_a/2',
            szoveg:
              '„Alagút” jelzőtábla alagúton való áthaladást jelez, a táblán feltüntetett felirat az alagút hosszát jelzi.',
          },
          'a/3': {
            id: '17_1_a/3',
            szoveg: '„Alagút vége” jelzőtábla az alagút kijáratát jelzi.',
          },
          b: {
            id: '17_1_b',
            szoveg:
              '„Egyirányú forgalmi út” jelzőtábla azt jelzi, hogy az úton a forgalom egy irányban halad.',
          },
          c: {
            id: '17_1_c',
            szoveg:
              '„Zsákutca” jelzőtábla olyan utat jelez, amelyen áthaladó forgalom nincs.',
          },
          'c/1': {
            id: '17_1_c/1',
            szoveg:
              '„Zsákutca kerékpáros továbbhaladási lehetőséggel” jelzőtábla azt jelzi, hogy a zsákutcán kerékpárral tovább lehet haladni.',
          },
          d: {
            id: '17_1_d',
            szoveg:
              '„Autóbusz-, trolibusz- vagy villamosmegállóhely” jelzőtábla menetrend szerinti járatok megállóhelyét jelzi.',
          },
          'd/1': {
            id: '17_1_d/1',
            szoveg:
              '„Taxiállomás” jelzőtábla a személytaxik számára kijelölt várakozóhelyet jelzi.',
          },
          'd/2': {
            id: '17_1_d/2',
            szoveg:
              '„Magánút” jelzőtábla azt jelzi, hogy az út nem nyilvános közforgalmú.',
          },
          e: {
            id: '17_1_e',
            szoveg:
              '„Várakozóhely” jelzőtábla a járművek számára kijelölt várakozóhelyet jelzi, szükség esetén a várakozás módjának vagy jogosult járművek körének meghatározásával.',
          },
          'e/1': {
            id: '17_1_e/1',
            szoveg:
              '„Várakozóhely nehéz tehergépkocsik részére” jelzőtábla a közlekedési korlátozás alá eső tehergépkocsik számára kijelölt várakozóhelyet jelzi.',
          },
          'e/2': {
            id: '17_1_e/2',
            szoveg:
              '„Várakozási övezet (zóna)” jelzőtábla olyan területet jelez, ahol a várakozás feltételekhez kötött.',
          },
          f: {
            id: '17_1_f',
            szoveg:
              '„Besorolás rendjét jelző tábla” azt mutatja meg, hogy az útkereszteződés előtt melyik forgalmi sávba kell besorolni.',
          },
          'f/1': {
            id: '17_1_f/1',
            szoveg:
              '„Kerékpáros közvetett kapcsolat” jelzőtábla a balra kanyarodó kerékpárosok közlekedési módját jelzi.',
          },
          g: {
            id: '17_1_g',
            szoveg:
              '„Autóbusz forgalmi sáv” jelzőtábla az autóbuszok számára kijelölt forgalmi sáv kezdetét jelzi.',
          },
          'g/1': {
            id: '17_1_g/1',
            szoveg:
              '„Kerékpársáv” jelzőtábla a kerékpárosok számára kijelölt sávot jelzi.',
          },
          'g/2': {
            id: '17_1_g/2',
            szoveg:
              '„Kerékpársáv vége” jelzőtábla a kijelölt kerékpársáv végét jelzi.',
          },
          'g/3': {
            id: '17_1_g/3',
            szoveg:
              '„Kerékpárosok által is használható autóbusz forgalmi sáv” jelzőtábla a közös használatot engedélyezi.',
          },
          'g/4': {
            id: '17_1_g/4',
            szoveg:
              '„Út melletti kerékpárút” jelzőtábla az úttal párhuzamosan vezetett kerékpárutat jelzi.',
          },
          'g/5': {
            id: '17_1_g/5',
            szoveg:
              '„Út melletti kerékpárút vége” jelzőtábla a kerékpárút végét jelzi.',
          },
          'g/6': {
            id: '17_1_g/6',
            szoveg:
              '„Nyitott kerékpársáv” jelzőtábla egyirányú kerékpársávot jelez az úttesten.',
          },
          'g/7': {
            id: '17_1_g/7',
            szoveg:
              '„Nyitott kerékpársáv vége” jelzőtábla a nyitott kerékpársáv végét jelzi.',
          },
          h: {
            id: '17_1_h',
            szoveg:
              '„Kapaszkodósáv” jelzőtábla emelkedőn kialakított kiegészítő forgalmi sáv kezdetét jelzi.',
          },
          i: {
            id: '17_1_i',
            szoveg:
              '„Kapaszkodósáv vége” jelzőtábla a kiegészítő sáv végét jelzi.',
          },
          j: {
            id: '17_1_j',
            szoveg:
              '„Lakó-pihenő övezet” jelzőtábla olyan területet jelez, ahol a gyalogosok elsőbbséget élveznek.',
          },
          k: {
            id: '17_1_k',
            szoveg:
              '„Lakó-pihenő övezet vége” jelzőtábla az övezet hatályának végét jelzi.',
          },
          r: {
            id: '17_1_r',
            szoveg:
              '„Kerülő útirányt jelző tábla” a tiltott irány helyett használható kerülő útvonalat mutatja.',
          },
          s: {
            id: '17_1_s',
            szoveg:
              '„Lakott terület kezdete” jelzőtábla lakott területre való belépést jelez.',
          },
          t: {
            id: '17_1_t',
            szoveg:
              '„Lakott terület vége” jelzőtábla a lakott terület határának végét jelzi.',
          },
          u: {
            id: '17_1_u',
            szoveg:
              '„Helynévtábla” jelzőtábla földrajzi hely nevét tünteti fel.',
          },
          v: {
            id: '17_1_v',
            szoveg:
              '„Útirány előjelző tábla” a következő útkereszteződésben elérhető irányokat jelzi.',
          },
          x: {
            id: '17_1_x',
            szoveg:
              '„Útirányjelző tábla” útkereszteződésnél mutatja a továbbhaladás irányát.',
          },
          y: {
            id: '17_1_y',
            szoveg:
              '„Útvonal megerősítő tábla” az út számát és irányát erősíti meg.',
          },
          z: {
            id: '17_1_z',
            szoveg:
              '„Terelőút” jelzőtábla lezárt útszakasz esetén a kerülő út irányát jelzi.',
          },
        },
      },

      '2': {
        id: '17_2',
        szoveg:
          'Az út mellett vagy annak közelében elhelyezkedő egyes létesítményekről kék vagy barna alapszínű tájékoztató jelzőtáblák adhatnak információt.',
      },

      '2a': {
        id: '17_2a',
        szoveg:
          'A templomra vagy vallásgyakorlásra szolgáló helyre utaló tájékoztató jelzőtábla barna alapszínű. A kiegészítő jelzőtábla feltüntetheti a vallási közösség nevét, az érintett épület megnevezését és a vallási szertartások időpontját.',
      },

      '3': {
        id: '17_3',
        szoveg:
          'Egyirányú forgalmú úton elhelyezett kiegészítő tábla engedélyezheti, hogy autóbusz és/vagy kerékpár a jelzett iránnyal szemben közlekedjen.',
        alpontok: {
          a: {
            id: '17_3_a',
            szoveg:
              'Kerékpáros a kijelölt kerékpársávon, ennek hiányában az úttest jobb szélén haladhat.',
          },
          b: {
            id: '17_3_b',
            szoveg:
              'Menetrend szerint közlekedő autóbusz az autóbusz forgalmi sávban közlekedhet.',
          },
          c: {
            id: '17_3_c',
            szoveg:
              'Kerékpáros az autóbusz forgalmi sávban is közlekedhet, az autóbusz haladási irányával megegyezően.',
          },
        },
      },

      '4': {
        id: '17_4',
        szoveg:
          'Az útirányt és útvonalat jelző tájékoztató táblák alapszíne zöld, kék vagy fehér lehet.',
      },
    },
  },
  '18': {
    paragrafus: '18',
    cim: 'Útburkolati jelek',

    bekezdesek: {
      '1': {
        id: '18_1',
        szoveg: 'Az útburkolati jelek a következők:',
        alpontok: {
          a: {
            id: '18_1_a',
            szoveg:
              'Úttest szélét jelző vonal: hosszirányú folytonos vonal, útkereszteződésnél szaggatott.',
          },
          b: {
            id: '18_1_b',
            szoveg:
              'Terelővonal: hosszirányú szaggatott vonal, amely a forgalmi sávokat, illetve az úttest felezővonalát jelöli; rajta folyamatos haladás tilos.',
          },
          c: {
            id: '18_1_c',
            szoveg:
              'Záróvonal: hosszirányú folytonos vonal, amelyet járművel átlépni vagy érinteni tilos; kivételesen a mellette futó terelővonal felől átléphető.',
          },
          d: {
            id: '18_1_d',
            szoveg:
              'Autóbusz forgalmi sáv jelzése: „BUSZ” felirat, amely külön szabályok szerinti közlekedést jelez.',
          },
          e: {
            id: '18_1_e',
            szoveg:
              'Előjelző nyíl: a forgalmi sávból megengedett továbbhaladási irányt mutatja.',
          },
          f: {
            id: '18_1_f',
            szoveg:
              'Terelőnyíl: a forgalmi sáv elhagyásának kötelező irányát jelzi.',
          },
          g: {
            id: '18_1_g',
            szoveg: 'Gyalogosátkelőhely jelölése.',
          },
          h: {
            id: '18_1_h',
            szoveg:
              'Megállás helyét jelző vonal: ahol a járművel meg kell állni.',
          },
          'h/1': {
            id: '18_1_h/1',
            szoveg:
              'Előretolt kerékpáros felállóhely balra bekanyarodó kerékpárosok részére.',
          },
          i: {
            id: '18_1_i',
            szoveg: 'Kötelező megállás helyét jelző vonal.',
          },
          j: {
            id: '18_1_j',
            szoveg: 'Várakozóhely: egy jármű részére kijelölt hely.',
          },
          k: {
            id: '18_1_k',
            szoveg: 'Járműforgalom elől elzárt terület.',
          },
          l: {
            id: '18_1_l',
            szoveg:
              'Megállóhely: menetrend szerinti járművek vagy taxi részére.',
          },
          m: {
            id: '18_1_m',
            szoveg: 'Megállási tilalmat jelző folytonos vonal.',
          },
          n: {
            id: '18_1_n',
            szoveg: 'Várakozási tilalmat jelző szaggatott vonal.',
          },
          o: {
            id: '18_1_o',
            szoveg: 'Veszélyes helyre figyelmeztető útburkolati jel.',
          },
          p: {
            id: '18_1_p',
            szoveg: 'Veszélyes hely előjelzésére szolgáló vonalak.',
          },
          'p/1': {
            id: '18_1_p/1',
            szoveg: 'Az utat keresztező kerékpárút jelölése.',
          },
          'p/2': {
            id: '18_1_p/2',
            szoveg: 'Kerékpárosok közlekedésére kijelölt úttest jelölése.',
          },
          s: {
            id: '18_1_s',
            szoveg: 'X-jel: várakozás tilos, a területet szabadon kell hagyni.',
          },
        },
      },

      '18_2': {
        id: '18_2',
        szoveg: 'Az útburkolati jelek színe az alábbiak szerint alakul:',
        alpontok: {
          a: {
            id: '18_2_a',
            szoveg:
              'Az úttest szélét jelző vonal, a terelővonal, a záróvonal, az előjelző nyíl, a megállás helyét jelző vonal, a kötelező megállás helyét jelző vonal, valamint a járműforgalom elől elzárt terület jelölése fehér vagy sárga színű.',
          },
          b: {
            id: '18_2_b',
            szoveg:
              'A megállóhelyet, a megállási tilalmat jelző vonalat, a várakozási tilalmat jelző vonalat, valamint a veszélyes hely előjelzésére szolgáló vonalakat sárga színnel kell jelölni.',
          },
          c: {
            id: '18_2_c',
            szoveg:
              'Minden egyéb útburkolati jelet fehér színnel kell jelölni.',
          },
        },
      },

      '3': {
        id: '18_3',
        szoveg:
          'Különösen veszélyes helyeken sárga színű, szaggatott vonallal határolt útburkolati jel alkalmazható.',
      },

      '4': {
        id: '18_4',
        szoveg:
          'A kerékpársávot az úttesttől folytonos vagy szaggatott sárga vonal választja el.',
      },

      '5': {
        id: '18_5',
        szoveg:
          'A járdára festett fehér vonal a várakozásra igénybe vehető járdarészt jelöli.',
      },

      '6': {
        id: '18_6',
        szoveg:
          'A gyalog- és kerékpárút forgalmát folytonos sárga vonal választja el.',
      },

      '7': {
        id: '18_7',
        szoveg:
          'Mozgáskorlátozottak részére fenntartott várakozóhely jelzése önálló útburkolati jelként is alkalmazható.',
      },

      '8': {
        id: '18_8',
        szoveg:
          'Ideiglenes forgalomszabályozásnál burkolati jelzőtestek is alkalmazhatók.',
      },

      '9': {
        id: '18_9',
        szoveg:
          'A kerékpáros nyom a kerékpárosok részére ajánlott útfelületet jelzi.',
      },

      '10': {
        id: '18_10',
        szoveg:
          'A nyitott kerékpársávot szaggatott vonal és kerékpár jel mutatja; azt más járművek is igénybe vehetik meghatározott feltételekkel.',
      },
    },
  },
  /** ======================================================
   *  19. § – Vasúti átjárót biztosító jelzőberendezések
   *  ====================================================== */
  '19': {
    paragrafus: '19',
    cim: '19. § – Vasúti átjárót biztosító jelzőberendezések',

    bekezdesek: {
      '1': {
        id: '19_1',
        szoveg:
          'A vasúti átjáró biztosítására szolgáló jelzőberendezések a fénysorompó, a félsorompó és a teljes sorompó.',
      },

      '2': {
        id: '19_2',
        szoveg:
          'A fénysorompó a vasúti jármű közeledését és áthaladását két egymás mellett levő, felváltva villogó piros fénnyel jelzi; egyébként villogó fehér fényt ad.',
      },

      '3': {
        id: '19_3',
        szoveg:
          'A félsorompó a vasúti jármű közeledésekor és áthaladásának ideje alatt az úttest menetirány szerinti jobb oldalát piros-fehér színű sorompórúddal lezárja. A félsorompóval együtt fénysorompó is működik.',
      },

      '4': {
        id: '19_4',
        szoveg:
          'A teljes sorompó a vasúti jármű közeledésekor és áthaladásának ideje alatt az utat vagy az úttestet teljes szélességében piros-fehér színű sorompórúddal lezárja.',
        alpontok: {
          a: {
            id: '19_4_a',
            szoveg:
              'A sorompó lezárásának megkezdését és záródását hangjelzéssel jelzi.',
          },
          b: {
            id: '19_4_b',
            szoveg:
              'A sorompó lezárásának megkezdését, záródását és zárva tartását két egymás mellett levő, felváltva villogó piros fénnyel jelzi.',
          },
        },
      },

      '5': {
        id: '19_5',
        szoveg:
          'A félsorompó és a teljes sorompó sorompórúdján piros fényvisszaverő, illetve piros fényt adó lámpa van.',
      },

      '6': {
        id: '19_6',
        szoveg: 'A továbbhaladás tilalmát jelzi, ha',
        alpontok: {
          a: {
            id: '19_6_a',
            szoveg: 'a fénysorompó villogó piros fényjelzést ad;',
          },
          b: {
            id: '19_6_b',
            szoveg:
              'a fél- vagy teljes sorompó rúdja mozgásban van vagy lezárt állapotban van;',
          },
          c: {
            id: '19_6_c',
            szoveg:
              'a teljes sorompót kiegészítő berendezés hang- vagy fényjelzést ad.',
          },
        },
      },

      '7': {
        id: '19_7',
        szoveg: 'Az üzemzavart jelzi, ha',
        alpontok: {
          a: {
            id: '19_7_a',
            szoveg: 'a fénysorompón sem a piros, sem a fehér fény nem világít;',
          },
          b: {
            id: '19_7_b',
            szoveg:
              'a félsorompó rúdja nyitott vagy félig nyitott állapotban van, és a fénysorompón sem a piros, sem a fehér fény nem világít;',
          },
          c: {
            id: '19_7_c',
            szoveg:
              'a sorompórudak eltérő állásban vagy félig nyitott helyzetben vannak.',
          },
        },
      },

      '8': {
        id: '19_8',
        szoveg: 'A továbbhaladást engedélyezi',
        alpontok: {
          a: {
            id: '19_8_a',
            szoveg: 'a fénysorompó villogó fehér fényjelzése;',
          },
          b: {
            id: '19_8_b',
            szoveg:
              'a teljes sorompó rúdjainak nyitott helyzete, ha a kiegészítő hang- vagy fényjelző berendezés nem ad jelzést.',
          },
        },
      },
    },
  },

  /** ======================================================
   *  20. § – Egyéb közúti jelzések
   *  ====================================================== */
  '20': {
    paragrafus: '20',
    cim: '20. § – Egyéb közúti jelzések',

    bekezdesek: {
      '1': {
        id: '20_1',
        szoveg:
          'A járda vagy járdasziget szélén levő fekete-fehér színű lánc-, csőkorlát vagy hasonló berendezés azt jelzi, hogy a gyalogosnak az úttestre lépnie tilos.',
      },

      '2': {
        id: '20_2',
        szoveg:
          'Az út kanyarulatát olyan tábla is jelezheti, amelyen nyílalakú fekete-fehér sávok mutatják a továbbhaladás irányát.',
      },

      '3': {
        id: '20_3',
        szoveg:
          'Az úttest vagy annak egy részének lezárását piros-fehér színű korlát, sávozott tábla, terelőfűzér vagy terelőbója jelzi, éjszaka vagy korlátozott látási viszonyok között kiegészítő fényjelzéssel.',
      },

      '4': {
        id: '20_4',
        szoveg:
          'A fekete-fehér színű sorompó azt jelzi, hogy a lezárt területre engedély nélkül behajtani tilos.',
      },

      '5': {
        id: '20_5',
        szoveg:
          'A fekete alapon fehér számértéket feltüntető jelzés azt a sebességet jelzi, amellyel az egyenletes haladás érdekében közlekedni célszerű.',
      },

      '6': {
        id: '20_6',
        szoveg:
          'A „Gyermekszállítás” tábla a gyermekeket szállító autóbusz vagy iskolabusz elején és hátulján figyelmeztet a jármű környezetében közlekedő gyermekekre.',
      },
    },
  },
  /** ======================================================
   *  20/A. § – Egyes közúti jelzésekre vonatkozó külön rendelkezések
   *  ====================================================== */
  '20/A': {
    paragrafus: '20/A',
    cim: '20/A. § – Egyes közúti jelzésekre vonatkozó külön rendelkezések',

    bekezdesek: {
      '1': {
        id: '20/A_1',
        szoveg:
          'A közúti jelzések ábráin szereplő feliratok, számértékek, továbbhaladási irányt jelző nyilak, valamint az útkereszteződések, útszűkületek és egyéb területek alaprajzi vázlatai szemléltető jellegűek. Ezek a jelzések minden esetben az adott helyen ténylegesen fennálló közlekedési helyzetet és szabályozást mutatják.',
      },
    },
  },
  /** ======================================================
   *  21. § – Gyalogosok közlekedése
   *  ====================================================== */
  '21': {
    paragrafus: '21',
    cim: '21. § – Gyalogosok közlekedése',

    bekezdesek: {
      '1': {
        id: '21_1',
        szoveg:
          'A gyalogos a járdán közlekedik, járda hiányában a leállósávon, az útpadkán vagy a kerékpárúton.',
      },
      '2': {
        id: '21_2',
        szoveg:
          'Ha járda, leállósáv, útpadka vagy kerékpárút nincs, illetve azok gyalogos vagy kerekes székes közlekedésre alkalmatlanok, a gyalogos az úttesten közlekedhet.',
      },
      '3': {
        id: '21_3',
        szoveg:
          'Az úttesten közlekedő gyalogos az úttest szélén, egysorban halad. \n a) Lakott területen lehetőleg a menetirány szerinti bal oldalon, lakott területen kívül mindig a bal oldalon, a járműforgalommal szemben. \n b) A segédmotoros kerékpárt vagy kerékpárt toló, valamint a kerekes székkel közlekedő gyalogos a menetirány szerinti jobb oldalon haladhat. ',
        alpontok: {
          a: {
            id: '21_3_a',
            szoveg:
              'Lakott területen lehetőleg a menetirány szerinti bal oldalon, lakott területen kívül mindig a bal oldalon, a járműforgalommal szemben.',
          },
          b: {
            id: '21_3_b',
            szoveg:
              'A segédmotoros kerékpárt vagy kerékpárt toló, valamint a kerekes székkel közlekedő gyalogos a menetirány szerinti jobb oldalon haladhat.',
          },
        },
      },
      '4': {
        id: '21_4',
        szoveg:
          'A gyalogos sérülést, rongálást vagy szennyezést okozó tárgyat csak megfelelően becsomagolva vihet. A gyalogosforgalmat zavaró méretű tárggyal az úttest jobb szélén kell közlekedni, éjszaka és korlátozott látási viszonyok között elölről és hátulról észlelhető lámpával.',
      },
      '5': {
        id: '21_5',
        szoveg:
          'A gyalogos az úttesten kijelölt gyalogosátkelőhelyen kelhet át, ennek hiányában a legrövidebb áthaladást biztosító irányban.',
        alpontok: {
          a: {
            id: '21_5_a',
            szoveg:
              'Lakott területen főútvonalon az útkereszteződésnél, valamint a menetrend szerinti jármű megállóhelyén lévő járdasziget és a járda között.',
          },
          b: {
            id: '21_5_b',
            szoveg: 'Egyéb helyen az úttesten bárhol.',
          },
        },
      },
      '6': {
        id: '21_6',
        szoveg:
          'A gyalogos csak akkor léphet az úttestre, ha meggyőződött annak veszélytelenségéről, nem léphet váratlanul az úttestre, és köteles késedelem nélkül áthaladni.',
      },
      '7': {
        id: '21_7',
        szoveg:
          'A kijelölt gyalogosátkelőhelyen áthaladó gyalogosnak elsőbbsége van. Elsőbbsége van az útkereszteződésben áthaladó gyalogosnak a bekanyarodó járművekkel szemben is, kivéve a megkülönböztető jelzést használó járműveket.',
      },
      '8': {
        id: '21_8',
        szoveg:
          'Ahol a gyalogosnak nincs elsőbbsége, csak akkor léphet az úttestre, ha áthaladásával a járműforgalmat nem zavarja.',
      },
      '9': {
        id: '21_9',
        szoveg: 'A gyalogos számára tilos:',
        alpontok: {
          a: {
            id: '21_9_a',
            szoveg: 'Híd, alagút, aluljáró vagy felüljáró úttestjén áthaladni.',
          },
          b: {
            id: '21_9_b',
            szoveg:
              'Szabad kilátást gátló akadály közelében az úttestre lépni.',
          },
          c: {
            id: '21_9_c',
            szoveg:
              'Korlátot, sorompót kinyitni, azon átmászni vagy elzárt területre lépni.',
          },
          d: {
            id: '21_9_d',
            szoveg:
              'Villamospályán közlekedni, vasúti vagy zárt villamospályán áthaladni.',
          },
          e: { id: '21_9_e', szoveg: 'Autópályán közlekedni vagy áthaladni.' },
          f: {
            id: '21_9_f',
            szoveg:
              'Autóúton közlekedni vagy útkereszteződésen kívül áthaladni.',
          },
          g: {
            id: '21_9_g',
            szoveg:
              'Úttesten áthaladni, ha a közelben gyalogos alul- vagy felüljáró van.',
          },
        },
      },
      '10': {
        id: '21_10',
        szoveg:
          'Vasúti pályán a gyalogos csak akkor haladhat át, ha meggyőződött arról, hogy vasúti jármű nem közeledik, és a jelzőberendezés nem tiltja a továbbhaladást.',
      },
      '11': {
        id: '21_11',
        szoveg:
          'Főútvonalon hat éven aluli gyermeket felügyelet nélkül hagyni tilos.',
      },
      '12': {
        id: '21_12',
        szoveg:
          'Lakott területen kívül az úttesten, leállósávon vagy útpadkán tartózkodó személynek éjszaka és korlátozott látási viszonyok között fényvisszaverő mellényt kell viselnie.',
      },
      '13': {
        id: '21_13',
        szoveg:
          'A gyalog- és kerékpárúton a gyalogos nem akadályozhatja és nem veszélyeztetheti a kerékpáros forgalmat.',
      },
    },
  },

  /** ======================================================
   *  22. § – Gyalogosok zárt csoportjának közlekedése
   *  ====================================================== */
  '22': {
    paragrafus: '22',
    cim: '22. § – Gyalogosok zárt csoportjának közlekedése',

    bekezdesek: {
      '1': {
        id: '22_1',
        szoveg:
          'A gyalogosok zárt csoportja az úttest menetirány szerinti jobb szélén közlekedhet, hídon ütemes lépésben nem haladhat.',
      },
      '2': {
        id: '22_2',
        szoveg:
          'Éjszaka és korlátozott látási viszonyok között elöl fehér vagy sárga, hátul piros vagy sárga fényt adó lámpát kell viselni.',
      },
      '3': {
        id: '22_3',
        szoveg:
          'A közlekedési szabályok betartásáról a csoport vezetője köteles gondoskodni.',
      },
      '4': {
        id: '22_4',
        szoveg:
          'Gyermekek zárt csoportja elsősorban járdán, leállósávon, útpadkán vagy kerékpárúton, ezek hiányában az úttesten közlekedhet.',
      },
    },
  },

  /** ======================================================
   *  23. § – A járművek utasaira vonatkozó szabályok
   *  ====================================================== */
  '23': {
    paragrafus: '23',
    cim: '23. § – A járművek utasaira vonatkozó szabályok',

    bekezdesek: {
      '1': {
        id: '23_1',
        szoveg:
          'Az utas csak álló járműre szállhat fel és csak álló járműről szállhat le.',
      },
      '2': {
        id: '23_2',
        szoveg: 'Az utas számára tilos:',
        alpontok: {
          a: { id: '23_2_a', szoveg: 'A vezetőt a vezetésben zavarni.' },
          b: {
            id: '23_2_b',
            szoveg:
              'Állva utazni, kivéve autóbuszon, trolibuszon és villamoson.',
          },
          c: {
            id: '23_2_c',
            szoveg: 'A jármű lépcsőjén vagy külső részén utazni.',
          },
          d: { id: '23_2_d', szoveg: 'Az ablakon vagy ajtón kihajolni.' },
        },
      },
      '3': {
        id: '23_3',
        szoveg:
          'A jármű ajtaját az utas csak akkor nyithatja ki, ha ezzel nem veszélyezteti a közlekedés biztonságát.',
      },
      '4': {
        id: '23_4',
        szoveg:
          'Menetrend szerinti járműre megállóhelyen kívül csak a jármű személyzetének engedélyével szabad felszállni vagy leszállni.',
      },
      '5': {
        id: '23_5',
        szoveg:
          'Veszélyes anyagot szállító járművön a vezetőn és a kísérőn kívül személyt szállítani tilos.',
      },
    },
  },
  /** ======================================================
   *  24. § – Elindulás
   *  ====================================================== */
  '24': {
    paragrafus: '24',
    cim: '24. § – Elindulás',

    bekezdesek: {
      '1': {
        id: '24_1',
        szoveg:
          'Az úttest széléről elinduló, várakozó helyről vagy más útrészről az úttestre ráhajtó jármű vezetője köteles elsőbbséget adni az úttesten haladó járműveknek és gyalogosoknak. A zárt pályáról az úttestre ráhajtó villamosnak elsőbbsége van az úttesten közlekedő járművekkel szemben, kivéve az azonos irányban vagy szemben haladó, irányt nem változtató járműveket.',
      },
      '2': {
        id: '24_2',
        szoveg:
          'Az elindulást és az úttestre való ráhajtást irányjelzéssel kell jelezni.',
      },
      '3': {
        id: '24_3',
        szoveg:
          'Lakott területen belül a járművek vezetői kötelesek lehetővé tenni a megállóhelyről elinduló menetrend szerinti autóbusz, trolibusz, iskolabusz és gyermekeket szállító autóbusz besorolását lassítással vagy megállással, ha ez hirtelen fékezés nélkül megtehető. Az érintett jármű vezetője csak a veszélytelenségről való meggyőződés után indulhat el.',
      },
    },
  },

  /** ======================================================
   *  25. § – Haladás az úton
   *  ====================================================== */
  '25': {
    paragrafus: '25',
    cim: '25. § – Haladás az úton',

    bekezdesek: {
      '1': {
        id: '25_1',
        szoveg:
          'A járművel a forgalmi, időjárási, látási és útviszonyoknak megfelelően kell közlekedni, figyelembe véve a jármű sajátosságait, az utasokat és a rakományt.',
      },
      '2': {
        id: '25_2',
        szoveg:
          'A járművel az úttesten a menetirány szerinti jobb oldalon, lehetőség szerint jobbra tartva kell haladni. Lassú járművel, állati erővel vont járművel, kézikocsival, hajtott állattal és lassan haladó járművel szorosan az úttest jobb széléhez húzódva kell közlekedni.',
      },
      '3': {
        id: '25_3',
        szoveg:
          'Az autóbuszöblöt, autóbusz forgalmi sávot, kapaszkodó sávot, gyorsító és lassító sávot, nyitott kerékpársávot és kerékpársávot a jobbra tartási kötelezettség szempontjából figyelmen kívül kell hagyni. Kerékpársávon csak kerékpárral szabad közlekedni, az úttest menetirányával azonos irányban.',
      },
      '4': {
        id: '25_4',
        szoveg:
          'Három, egymástól elkülönített úttesttel rendelkező úton a középső és a menetirány szerinti jobb szélső úttesten szabad közlekedni; a középső úttesten kétirányú, a szélsőkön egyirányú forgalom van.',
      },
      '5': {
        id: '25_5',
        szoveg:
          'Ha jelzőtábla másként nem rendelkezik, az úttest jobb és bal oldalát elválasztó járdasziget mellett jobbról, más járdasziget mellett jobbról és balról is szabad elhaladni.',
      },
      '6': {
        id: '25_6',
        szoveg:
          'Járda, járdasziget, gyalogút, gyalog- és kerékpárút, kerékpárút, nyitott kerékpársáv és kerékpársáv mellett tilos úgy haladni, hogy a jármű része vagy rakománya ezek fölé nyúljon.',
      },
    },
  },
  /** ======================================================
   *  26. § – Sebesség
   *  ====================================================== */
  '26': {
    paragrafus: '26',
    cim: '26. § – Sebesség',

    bekezdesek: {
      '1': {
        id: '26_1',
        szoveg:
          'Az egyes járművekkel – ha e rendelet másként nem rendelkezik – legfeljebb a következő sebességgel szabad közlekedni:',
        alpontok: {
          a: {
            id: '26_1_a',
            szoveg:
              'Személygépkocsival, motorkerékpárral, valamint 3500 kg megengedett legnagyobb össztömeget meg nem haladó gépkocsival:',
            alpontok: {
              aa: { id: '26_1_a_aa', szoveg: 'Autópályán 130 km/óra.' },
              ab: { id: '26_1_a_ab', szoveg: 'Autóúton 110 km/óra.' },
              ac: {
                id: '26_1_a_ac',
                szoveg: 'Lakott területen kívül egyéb úton 90 km/óra.',
              },
              ad: { id: '26_1_a_ad', szoveg: 'Lakott területen 50 km/óra.' },
            },
          },
          'a/1': {
            id: '26_1_a/1',
            szoveg:
              'A külön jogszabályban meghatározott követelményeknek megfelelő autóbusszal: \n - Autópályán 100 km/óra. \n - Lakott területen kívül egyéb úton 70 km/óra. \n - Lakott területen 50 km/óra.',
          },
          b: {
            id: '26_1_b',
            szoveg:
              'Egyéb gépjárművel, valamint gépjárműből és pótkocsiból álló járműszerelvénnyel: \n - Autópályán 80 km/óra. \n - Lakott területen kivant egyéb úton 70 km/óra. \n - Lakott területen 50 km/óra.',
          },
          c: {
            id: '26_1_c',
            szoveg: 'Villamossal 50 km/óra.',
          },
          d: {
            id: '26_1_d',
            szoveg:
              'Teherszállításra kialakított motoros triciklivel, elromlott járművet vontató gépjárművel, segédmotoros kerékpárral, valamint lakott területen kerékpárral 40 km/óra.',
          },
          da: {
            id: '26_1_da',
            szoveg:
              'Lakott területen kívül kerékpárral, fejvédő sisak viselése és utasszállítás nélkül 50 km/óra.',
          },
          db: {
            id: '26_1_db',
            szoveg:
              'Lakott területen kívül kerékpárral, fejvédő sisak nélkül 40 km/óra.',
          },
          'd/1': {
            id: '26_1_d/1',
            szoveg: 'Hólánccal felszerelt gépjárművel 50 km/óra.',
          },
          'd/2': {
            id: '26_1_d/2',
            szoveg: 'Kerékpárúton közlekedő járművel 30 km/óra.',
          },
          'd/3': {
            id: '26_1_d/3',
            szoveg: 'Gyalog- és kerékpárúton közlekedő járművel 20 km/óra.',
          },
          e: {
            id: '26_1_e',
            szoveg:
              'Mezőgazdasági vontatóval, valamint mezőgazdasági vontatóból és pótkocsiból álló járműszerelvénnyel 40 km/óra.',
          },
          f: {
            id: '26_1_f',
            szoveg:
              'Lassú járművel, valamint lassú járműből és pótkocsiból álló járműszerelvénnyel 25 km/óra.',
          },
          g: {
            id: '26_1_g',
            szoveg:
              'Fúvott gumiabronccsal fel nem szerelt kerekű járművel 20 km/óra.',
          },
          h: {
            id: '26_1_h',
            szoveg:
              'Pótkocsinak nem minősülő fék nélküli vontatmányt vontató mezőgazdasági vontatóval és lassú járművel 15 km/óra.',
          },
        },
      },

      '2': {
        id: '26_2',
        szoveg:
          'Ha a sebességkorlátozást jelző tábla a megengedettnél nagyobb sebességet jelez, személygépkocsival, motorkerékpárral és 3500 kg megengedett legnagyobb össztömeget meg nem haladó gépkocsival legfeljebb a jelzőtáblán megjelölt sebességgel szabad közlekedni.',
      },

      '3': {
        id: '26_3',
        szoveg:
          'Azon járművel, amelynek megengedett legnagyobb sebességét a műszaki vizsgálat alacsonyabb értékben állapította meg és azt a forgalmi engedély tartalmazza, legfeljebb e sebességgel szabad közlekedni.',
      },

      '4': {
        id: '26_4',
        szoveg:
          'A jármű sebességét úgy kell megválasztani, hogy az a belátható távolságon belül és minden várható akadály előtt megállítható legyen.',
      },

      '5': {
        id: '26_5',
        szoveg:
          'Tilos a járművel indokolatlanul lassan haladni, ha az a forgalmat akadályozza.',
      },

      '6': {
        id: '26_6',
        szoveg:
          'Ha az adott útszakaszon kiegészítő táblával jelzett korlátozás van érvényben, a megjelölt szakaszon legfeljebb 30 km/óra sebességgel szabad közlekedni, az időbeli korlátozás jelzésének megfelelően.',
      },
    },
  },
  /** ======================================================
   *  27 § Követési távolság
   *  ====================================================== */

  '27': {
    paragrafus: '27',
    cim: '27. § – Követési távolság',
    bekezdesek: {
      '1': {
        id: '27_1',
        szoveg:
          'Járművel másik járművet csak olyan távolságban szabad követni, amely elegendő ahhoz, hogy az elöl haladó jármű mögött – ennek hirtelen fékezése esetében is – meg lehessen állni.',
      },
      '2': {
        id: '27_2',
        szoveg:
          'Olyan járművel vagy járműszerelvénnyel, amelynek megengedett együttes tömege a 3500 kg-ot vagy hosszúsága a 7 métert meghaladja, lakott területen kívül olyan követési távolságot kell tartani, hogy a két jármű közé legalább egy személygépkocsi biztonságosan besorolhasson. Kivéve: .',
        alpontok: {
          a: {
            id: '27_2_a',
            szoveg:
              'Nem szükséges ilyen távolság tartása, ha: \n a vezető előzésre készül fel, \n az úttest jobb oldalán két vagy több forgalmi sáv van, \n az úton az élözés tilos.',
          },
          b: {
            id: '27_2_b',
            szoveg: 'Fegyveres erők oszlopban haladó gépjárművei között.',
          },
          c: {
            id: '27_2_c',
            szoveg:
              'Egy nyomon haladó jármű (kétkerekű motorkerékpár, segédmotoros kerékpár vagy kerékpár) követése esetén.',
          },
        },
      },
      '3': {
        id: '27_3',
        szoveg:
          'A jármű sebességét hirtelen fékezéssel csökkenteni csak akkor szabad, ha ezt a személy- vagy vagyonbiztonság megóvása szükségessé teszi.',
      },
      '4': {
        id: '27_4',
        szoveg: '',
      },
    },
  },

  '28': {
    paragrafus: '28',
    cim: '28. § – Elsőbbség az útkereszteződésben',
    bekezdesek: {
      '1': {
        id: '28_1',
        szoveg:
          'Az útkereszteződésben – ha a (2) bekezdésből más nem következik – elsőbbséget kell adni:',
        alpontok: {
          a: { id: '28_1_a', szoveg: 'a jobbról érkező minden jármű részére,' },
          b: { id: '28_1_b', szoveg: 'a balról érkező villamos részére.' },
        },
      },
      '2': {
        id: '28_2',
        szoveg: 'Az érkezési iránytól függetlenül elsőbbséget kell adni:',
        alpontok: {
          a: {
            id: '28_2_a',
            szoveg:
              'a megkülönböztető fény- és hangjelzést együttesen használó gépjármű, valamint az ilyen járművekkel kísért zárt csoport részére.',
          },
          b: {
            id: '28_2_b',
            szoveg:
              'az „Elsőbbségadás kötelező” vagy „Állj! Elsőbbségadás kötelező” táblával jelzett úton érkező járművel szemben a keresztező útról érkező jármű részére.',
          },
          c: {
            id: '28_2_c',
            szoveg:
              'földútról érkező járművel szemben a szilárd burkolatú útról érkező jármű részére.',
          },
          d: {
            id: '28_2_d',
            szoveg:
              'körforgalomban haladó járművel szemben a körforgalmat keresztező villamos részére.',
          },
        },
      },
      '3': {
        id: '28_3',
        szoveg:
          'Az útkereszteződést csak olyan sebességgel szabad megközelíteni, hogy a vezető eleget tehessen elsőbbségadási kötelezettségének.',
      },
    },
  },

  '29': {
    paragrafus: '29',
    cim: '29. § – Irányváltoztatás, irányjelzés',
    bekezdesek: {
      '1': {
        id: '29_1',
        szoveg:
          'Irányváltoztatáskor elsőbbséget kell adni az irányt nem változtató járműveknek.',
      },
      '2': {
        id: '29_2',
        szoveg:
          'Az irányváltoztatást a művelet előtt és alatt folyamatos irányjelzéssel kell jelezni.',
      },
      '3': {
        id: '29_3',
        szoveg:
          'Az irányjelzést irányjelző készülékkel, ennek hiányában karral vagy jelzőtárcsával kell adni.',
      },
    },
  },

  '30': {
    paragrafus: '30',
    cim: '30. § – Hangjelzést adni csak balesetveszély esetében, a baleset megelőzése érdekében, valamint – lakott területen kivül – az előzési szándék jelzése céljából szabad.',
    bekezdesek: {
      '1': {
        id: '30_1',
        szoveg: '',
      },
    },
  },

  /** ======================================================
   *  31. § – Bekanyarodás
   *  ====================================================== */
  '31': {
    paragrafus: '31',
    cim: '31. § – Bekanyarodás',

    bekezdesek: {
      '1': {
        id: '31_1',
        szoveg:
          'Az útkereszteződésben másik útra bekanyarodni szándékozó vezető a járművel köteles az útkereszteződés előtt kellő távolságban besorolni, és a bekanyarodási szándékot irányjelzéssel jelezni.',
        alpontok: {
          a: {
            id: '31_1_a',
            szoveg: 'Az útburkolati jelek által meghatározott forgalmi sávba.',
          },
          b: {
            id: '31_1_b',
            szoveg:
              'Útburkolati jelek hiányában jobbra bekanyarodás esetén az úttest jobb szélére, balra bekanyarodás esetén az úttest felezővonala mellé, illetőleg osztottpályás és egyirányú forgalmú úton az úttest bal szélére.',
          },
        },
      },

      '2': {
        id: '31_2',
        szoveg:
          'Villamospályával ellátott úttesten, ha a besorolás a villamos forgalmát zavarná, a villamos elhaladásához szükséges területet szabadon kell hagyni. Egyirányú forgalmú úton az ellenirányban kijelölt autóbuszsávot és kerékpársávot a besorolás szempontjából figyelmen kívül kell hagyni.',
      },

      '3': {
        id: '31_3',
        szoveg:
          'A járművel másik útra jobbra kis ívben, balra nagy ívben kell bekanyarodni úgy, hogy a jármű a bekanyarodás után a menetirány szerinti jobb oldalon maradjon. Ha az úttest jobb oldalán kerékpársáv van kijelölve, a jobbra bekanyarodásra – a kerékpáros forgalom akadályozása nélkül és ha burkolati jel ezt lehetővé teszi – a kerékpársáv igénybevételével kell felkészülni.',
      },

      '4': {
        id: '31_4',
        szoveg:
          'Ha a jármű méretei vagy egyéb ok miatt a besorolásra és bekanyarodásra vonatkozó szabályok nem tarthatók meg, a bekanyarodást fokozott óvatossággal, szükség esetén irányító személy igénybevételével kell végrehajtani úgy, hogy a többi jármű ne kerüljön veszélybe.',
      },

      '5': {
        id: '31_5',
        szoveg:
          'Bekanyarodás esetén elsőbbséget kell adni (kivéve megkülönböztető fényjelzés, tábla,stb...) a keresztezett forgalom egyes résztvevőinek. \n a) Jobbra vagy balra bekanyarodó járművel az arra az útra áthaladó gyalogosnak, amelyre a jármű bekanyarodik, valamint az azonos irányból érkező villamosnak. \n b) Jobbra bekanyarodó járművel a kerékpársávon vagy az úttest mellett jobbra elhelyezkedő kerékpárúton, gyalog- és kerékpárúton érkező járműnek és gyalogosnak. \n  c) Balra bekanyarodó járművel a szemből érkező és egyenesen továbbhaladó vagy jobbra bekanyarodó járműnek, valamint az úttest mellett balra elhelyezkedő kerékpárúton, gyalog- és kerékpárúton érkező járműnek és gyalogosnak.',
        alpontok: {
          a: {
            id: '31_5_a',
            szoveg:
              'Jobbra vagy balra bekanyarodó járművel az arra az útra áthaladó gyalogosnak, amelyre a jármű bekanyarodik, valamint az azonos irányból érkező villamosnak.',
          },
          b: {
            id: '31_5_b',
            szoveg:
              'Jobbra bekanyarodó járművel a kerékpársávon vagy az úttest mellett jobbra elhelyezkedő kerékpárúton, gyalog- és kerékpárúton érkező járműnek és gyalogosnak.',
          },
          c: {
            id: '31_5_c',
            szoveg:
              'Balra bekanyarodó járművel \n ca) a szemből érkező és egyenesen továbbhaladó vagy jobbra bekanyarodó járműnek, \n cb) az úttest mellett balra elhelyezkedő kerékpárúton, gyalog- és kerékpárúton érkező járműnek és gyalogosnak.',
          },
          ca: {
            id: '31_5_ca',
            szoveg:
              'Balra bekanyarodó járművel \n ca) a szemből érkező és egyenesen továbbhaladó vagy jobbra bekanyarodó járműnek, ',
          },
          cb: {
            id: '31_5_cb',
            szoveg:
              'Balra bekanyarodó járművel  \n cb) az úttest mellett balra elhelyezkedő kerékpárúton, gyalog- és kerékpárúton érkező járműnek és gyalogosnak.',
          },
        },
      },

      '6': {
        id: '31_6',
        szoveg:
          'A balra bekanyarodó jármű vezetője párhuzamos közlekedésre nem alkalmas úton csak akkor hajthatja végre a bekanyarodást, ha meggyőződött arról, hogy balról járművét nem kezdték meg előzni vagy kikerülni.',
      },

      '7': {
        id: '31_7',
        szoveg:
          'Útkereszteződésen kívül történő bekanyarodás esetén a besorolásra, a végrehajtásra és az elsőbbségadásra vonatkozó szabályokat kell alkalmazni.',
      },

      '8': {
        id: '31_8',
        szoveg:
          'Kanyarodó főútvonal esetén külön elsőbbségi szabályok érvényesek.',
        alpontok: {
          a: {
            id: '31_8_a',
            szoveg:
              'A főútvonalon kanyarodó és az arról letérő járműre egyaránt vonatkozik a gyalogosok és a villamos elsőbbsége.',
          },
          b: {
            id: '31_8_b',
            szoveg:
              'A főútvonalról letérő jármű köteles elsőbbséget adni a főútvonalon továbbhaladó járműnek.',
          },
        },
      },
    },
  },
  /** ======================================================
   *  32. § – Kitérés
   *  ====================================================== */
  '32': {
    paragrafus: '32',
    cim: '32. § – Kitérés',

    bekezdesek: {
      '1': {
        id: '32_1',
        szoveg:
          'Az egymás mellett ellentétes irányban elhaladó járművek között megfelelő oldaltávolságot kell tartani; ennek érdekében a szükséghez képest a járművekkel kölcsönösen az úttest széléhez kell húzódni.',
      },

      '2': {
        id: '32_2',
        szoveg:
          'Olyan keskeny úttesten, ahol az egymás melletti elhaladás nehéz vagy lehetetlen, meg kell állni, és az elhaladást az útpadkára húzódással vagy hátramenettel kell lehetővé tenni. Hátramenetet az a jármű végezzen, amellyel ez a körülmények figyelembevételével könnyebben megtehető.',
      },

      '3': {
        id: '32_3',
        szoveg:
          'Ha az úttest mindkét irányból belátható szakaszon egy forgalmi sávra szűkül, és a közúti jelzésekből más nem következik, elsőbbsége annak a járműnek van, amelyik útját irányváltoztatás nélkül tudja folytatni; a másik jármű vezetője az áthaladást lassítással vagy szükség esetén megállással köteles biztosítani.',
      },

      '4': {
        id: '32_4',
        szoveg:
          'Állati erővel vont járművel vagy hajtott állattal való szembetalálkozás esetén, ha a vezető feltartott karral jelzi, vagy egyébként megállapítható, hogy az állat ijedős, a jármű sebességét csökkenteni kell, illetőleg szükség esetén meg kell állni.',
      },
    },
  },
  /** ======================================================
   *  33. § – Megfordulás, hátramenet
   *  ====================================================== */
  '33': {
    paragrafus: '33',
    cim: '33. § – Megfordulás, hátramenet',

    bekezdesek: {
      '1': {
        id: '33_1',
        szoveg:
          'Járművel megfordulni, illetőleg hátramenetet végezni csak úgy szabad, hogy az a többi jármű és az úttesten haladó gyalogosok közlekedését ne akadályozza. Az úttest széléhez, illetőleg a várakozóhelyre történő beálláshoz szükséges hátramenet abban az esetben is elvégezhető, ha az a járműforgalmat – a járművek veszélyeztetése nélkül – rövid ideig akadályozza.',
      },

      '2': {
        id: '33_2',
        szoveg:
          'Autópályán, autóúton, vasúti átjáróban, egyirányú forgalmú úton és körforgalmú úton megfordulni tilos. Egyirányú forgalmú úton, körforgalmú úton, vasúti átjáróban, autópályán és autóúton – az egyirányú forgalmú úton az úttest széléhez vagy várakozóhelyre történő beálláshoz szükséges hátramenet kivételével – hátramenetet végezni tilos.',
      },

      '3': {
        id: '33_3',
        szoveg:
          'Ha a személy- és vagyonbiztonság megkívánja, a hátramenet végrehajtásához a járművezetőnek arra alkalmas irányító személy közreműködéséről kell gondoskodnia. Az irányító személynek úgy kell elhelyezkednie, hogy folyamatosan lássa a jármű mögötti területet, és kapcsolatban legyen a jármű vezetőjével.',
      },
    },
  },
  /** ======================================================
   *  34. § – Előzés
   *  ====================================================== */
  '34': {
    paragrafus: '34',
    cim: '34. § – Előzés',

    bekezdesek: {
      '1': {
        id: '34_1',
        szoveg:
          'Előzni akkor szabad, ha az előzés biztonságosan végrehajtható.',
        alpontok: {
          a: {
            id: '34_1_a',
            szoveg:
              'Az előzéshez igénybe vett forgalmi sáv olyan távolságban szabad, hogy az előzés a szembejövő forgalmat nem zavarja.',
          },
          b: {
            id: '34_1_b',
            szoveg: 'Az előzni kívánt jármű előzését más jármű nem kezdte meg.',
          },
          c: {
            id: '34_1_c',
            szoveg:
              'Az előzni kívánt jármű előtt haladó jármű nem jelzett előzési szándékot.',
          },
          d: {
            id: '34_1_d',
            szoveg:
              'Az előzés során a megelőzendő jármű mellett megfelelő oldaltávolság tartható.',
          },
          e: {
            id: '34_1_e',
            szoveg:
              'Az előzés befejezése után a jármű a megelőzött jármű elé, annak zavarása nélkül vissza tud térni.',
          },
        },
      },

      '2': {
        id: '34_2',
        szoveg:
          'Az előzési szándékot irányjelzéssel kell jelezni, ha az előzés irányváltoztatással jár.',
      },

      '3': {
        id: '34_3',
        szoveg:
          'Az előzést balról kell végrehajtani. \n kivéve: \n (4) Jobbról csak meghatározott esetekben szabad előzni \n a) Balra bekanyarodást jelző és annak megfelelően elhelyezkedő jármű esetén \n b) Az úttest közepén vagy egyirányú úton bal oldalon haladó villamos esetén \n (5) Figyelmeztető jelzést használó jármű jobbról is előzhető, ha az nem veszélyezteti a többi közlekedőt.',
      },

      '4': {
        id: '34_4',
        szoveg: 'Jobbról csak meghatározott esetekben szabad előzni.',
        alpontok: {
          a: {
            id: '34_4_a',
            szoveg:
              'Balra bekanyarodást jelző és annak megfelelően elhelyezkedő jármű esetén.',
          },
          b: {
            id: '34_4_b',
            szoveg:
              'Az úttest közepén vagy egyirányú úton bal oldalon haladó villamos esetén.',
          },
        },
      },

      '5': {
        id: '34_5',
        szoveg:
          'Figyelmeztető jelzést használó jármű jobbról is előzhető, ha az nem veszélyezteti a többi közlekedőt.',
      },

      '6': {
        id: '34_6',
        szoveg: 'Az előzés végrehajtását akadályozni tilos.',
      },

      '7': {
        id: '34_7',
        szoveg:
          'Lakott területen kívül a nagyméretű vagy lassú jármű vezetőjének elő kell segítenie az előzést.',
      },

      '8': {
        id: '34_8',
        szoveg: 'Bizonyos helyeken és helyzetekben előzni tilos.',
        alpontok: {
          a: {
            id: '34_8_a',
            szoveg: 'Kijelölt gyalogosátkelőhelyen és közvetlenül előtte.',
          },
          b: {
            id: '34_8_b',
            szoveg:
              'Villamos megállóhelye előtt, ahol az utasok az úttestről szállnak fel vagy le.',
          },
          c: {
            id: '34_8_c',
            szoveg: 'Be nem látható kanyarban vagy bukkanóban.',
          },
          d: {
            id: '34_8_d',
            szoveg: 'Vasúti átjáróban és közvetlenül előtte.',
          },
          e: {
            id: '34_8_e',
            szoveg:
              'Útkereszteződésben és közvetlenül útkereszteződés előtt tilos előzni, kivéve ha a forgalmat rendőr vagy fényjelző készülék irányítja és az előzés az úttest menetirány szerinti bal oldalának igénybevételével nem jár, vagy ha a jármű főútvonalon vagy olyan más úton halad, amelyen elsőbbségét jelzőtábla jelzi, továbbá körforgalmú úton, illetve ha a járművel csak jobbról szabad előzni.',
          },
        },
      },

      '9': {
        id: '34_9',
        szoveg:
          'Egyes kétkerekű járművek előzésére a tilalmak egy része nem vonatkozik.',
      },
    },
  },
  /** ======================================================
   *  35. § – Kikerülés
   *  ====================================================== */
  '35': {
    paragrafus: '35',
    cim: '35. § – Kikerülés',

    bekezdesek: {
      '1': {
        id: '35_1',
        szoveg:
          'Az úttest menetirány szerinti jobb oldalán álló jármű vagy ott levő egyéb akadály melletti elhaladás csak akkor megengedett, ha az a szembejövő forgalmat nem zavarja, más jármű előzését nem akadályozza, megfelelő oldaltávolság tartható, és az elhaladás biztonságosan végrehajtható.',
      },

      '2': {
        id: '35_2',
        szoveg:
          'Olyan megállóhely előtt, ahol villamos áll és az utasok fel- vagy leszállása az úttestről, illetve az úttestre történik, meg kell állni, és továbbhaladni csak a villamos elindulása után szabad.',
      },
    },
  },
  /** ======================================================
   *  36. § – Párhuzamos közlekedés
   *  ====================================================== */
  '36': {
    paragrafus: '36',
    cim: '36. § – Párhuzamos közlekedés',

    bekezdesek: {
      '1': {
        id: '36_1',
        szoveg:
          'Olyan úttesten, ahol az azonos irányú forgalom számára két vagy több forgalmi sáv van, a külső (jobb szélső) forgalmi sávban kell közlekedni. Más forgalmi sávra ráhajtani csak előzés, balra bekanyarodás vagy megfordulás céljából szabad. Az autóbuszöbölt, az autóbusz forgalmi sávot, a kapaszkodósávot, a gyorsító- és lassítósávot, valamint a kerékpársávot figyelmen kívül kell hagyni.',
      },

      '2': {
        id: '36_2',
        szoveg:
          'Két forgalmi sávos úttesten előzés után vissza kell térni a külső forgalmi sávba. Több jármű előzése esetén a belső sávban maradás megengedett, ha ezzel a gyorsabban haladó járművek közlekedése nem akadályozott, illetve ha a forgalom sűrűsége miatt a visszatérés nem lehetséges.',
      },

      '3': {
        id: '36_3',
        szoveg:
          'Három vagy több forgalmi sáv esetén a két sávra vonatkozó szabályokat kell alkalmazni. A második forgalmi sávban bármely gépjármű közlekedhet, a harmadik és további belső sávokra – balra bekanyarodás kivételével – csak személygépkocsival és motorkerékpárral szabad ráhajtani.',
      },

      '4': {
        id: '36_4',
        szoveg:
          'Lakott területen a belső forgalmi sávban 3500 kg-ot meg nem haladó gépkocsival és motorkerékpárral folyamatos haladás megengedett, ha ezzel a gyorsabban haladó járművek nem akadályozottak. Az ilyen jármű mellett fokozott figyelemmel jobbról el lehet haladni, de a forgalmi sávok ismételt váltogatása tilos.',
      },

      '5': {
        id: '36_5',
        szoveg:
          'Összefüggő járműoszlopok esetén forgalmi sávot változtatni csak bekanyarodásra vagy megállásra való felkészülés céljából szabad.',
      },

      '6': {
        id: '36_6',
        szoveg: 'A párhuzamos közlekedésre alkalmas úttesten tilos:',
        alpontok: {
          a: {
            id: '36_6_a',
            szoveg:
              'Tilos az úttest felezővonalát átlépni, kivéve balra bekanyarodás vagy megfordulás esetén.',
          },
          b: {
            id: '36_6_b',
            szoveg:
              'Tilos ugyanabban a forgalmi sávban egymás mellett haladni, kivéve egy nyomon haladó jármű mellett.',
          },
          c: {
            id: '36_6_c',
            szoveg:
              'Tilos kijelölt gyalogosátkelőhelyen és közvetlenül előtte másik jármű mellett elhaladni.',
          },
        },
      },

      '7': {
        id: '36_7',
        szoveg:
          'Forgalmi sáv megszűnése esetén annak a járműnek van elsőbbsége, amelyik terelővonal átlépése nélkül haladhat tovább. Jelölések hiányában annak, amelyik irányváltoztatás nélkül halad, illetve jobbra eső sávban haladt.',
      },

      '8': {
        id: '36_8',
        cim: 'Autóbusz forgalmi sáv',
        alpontok: {
          a: {
            id: '36_8_a',
            szoveg:
              'A menetrend szerint közlekedő autóbusz és trolibusz, a villamos, továbbá 20 és 6 óra között a kommunális szemét szállítására szolgáló jármű.',
          },
          b: {
            id: '36_8_b',
            szoveg: 'Az autóbusz- és trolibuszforgalom zavarása nélkül:',
            alpontok: {
              ba: {
                id: '36_8_ba',
                szoveg:
                  'Ha az autóbusz forgalmi sávot az úttest menetirány szerinti jobb szélén jelölték ki, erre utaló jelzés esetében a kerékpáros.',
              },
              bb: {
                id: '36_8_bb',
                szoveg:
                  'Külön jogszabály alapján rögzített üzemmódú megkülönböztető jelzést adó készülékkel felszerelt jármű:',
                alpontok: {
                  bba: {
                    id: '36_8_bba',
                    szoveg:
                      'Sürgősségi betegellátásra rendszeresített gépjármű.',
                  },
                  bbb: {
                    id: '36_8_bbb',
                    szoveg:
                      'A hivatásos katasztrófavédelmi szervek, a tűzoltóság és a tűzoltó egyesületek közvetlen helyszíni beavatkozására rendszeresített gépjárműve.',
                  },
                  bbc: {
                    id: '36_8_bbc',
                    szoveg:
                      'A rendőrség közrendvédelmi, közlekedésrendészeti és személyvédelmi szolgálati ágának közvetlen helyszíni beavatkozásra rendszeresített gépjárműve, valamint a rendőrség terrorizmust elhárító szervének gépjárműve.',
                  },
                },
              },
              bc: {
                id: '36_8_bc',
                szoveg: 'A betegszállító gépjármű.',
              },
              bd: {
                id: '36_8_bd',
                szoveg: 'A személytaxi.',
              },
              be: {
                id: '36_8_be',
                szoveg:
                  'A kétkerekű motorkerékpár és a kétkerekű segédmotoros kerékpár.',
              },
              bf: {
                id: '36_8_bf',
                szoveg:
                  'Nemzetközi sportesemény ideje alatt és azzal összefüggésben, a kiemelt hazai rendezésű nemzetközi sportesemény szervező bizottsága közreműködésével egyedi jelzéssel kijelölt jármű a vonatkozó kormányhatározatban foglaltak szerint.',
              },
              bg: {
                id: '36_8_bg',
                szoveg:
                  'A Kormány egyedi döntésével kiemelt fontosságúvá nyilvánított rendezvényen részt vevő delegációk egyedi jelzéssel kijelölt járműve a vonatkozó kormányhatározatban foglaltak szerint.',
              },
              bh: {
                id: '36_8_bh',
                szoveg:
                  'A Kormány egyedi döntése esetén, természeti jelenség által előidézett veszély, katasztrófaveszély vagy katasztrófahelyzet idején a kijelölt szervezetek meghatározott feladat ellátására közvetlenül használt gépjárműve a vonatkozó kormányhatározatban foglaltak szerint.',
              },
            },
          },
          c: {
            id: '36_8_c',
            szoveg:
              'Más jármű erre a forgalmi sávra – a sáv keresztezését és a bekanyarodásra felkészülést kivéve – nem hajthat rá; ahol autóbusz forgalmi sáv van, a menetrend szerint közlekedő autóbusz és trolibusz – a bekanyarodás és kikerülés esetét kivéve – csak ebben a forgalmi sávban haladhat.',
          },
        },
      },

      '9': {
        id: '36_9',
        szoveg:
          'Kapaszkodósáv esetén azon járművek kötelesek haladni, amelyek a megjelölt, ennek hiányában lakott területen kívül 70 km/óra, lakott területen 40 km/óra sebességnél lassabban közlekednek.',
      },
      '10': {
        id: '36_10',
        szoveg:
          'Azon az úton, amelynek menetirány szerinti jobb oldalán két vagy több forgalmi sáv van útburkolati jelekkel kijelölve, a körforgalmú útra történő bekanyarodást a következők szerint kell végrehajtani:',
        alpontok: {
          a: {
            id: '36_10_a',
            szoveg:
              'A besorolás rendjét jelző tábla és az útburkolati jelek jelzéseinek megfelelően kell végrehajtani a bekanyarodást.',
          },
          b: {
            id: '36_10_b',
            szoveg:
              'A jobb oldali szélső forgalmi sávból kell bekanyarodni, ha a járművezető a bekanyarodás helyét követő első kihajtási lehetőségnél kívánja elhagyni a körforgalmú utat.',
          },
        },
      },

      '11': {
        id: '36_11',
        szoveg:
          'A párhuzamos közlekedésre alkalmas körforgalmú úton a párhuzamos közlekedés szabályait kell alkalmazni.',
      },

      '12': {
        id: '36_12',
        szoveg:
          'Ha a járműveknek útkereszteződésben, útszűkületben, szintbeni vasúti átjárónál vagy egyéb forgalmi okból meg kell állniuk, előre sorolás céljából meghatározott járművekkel meghatározott módon szabad előrehaladni az alábbi feltételekkel:',
        alpontok: {
          a: {
            id: '36_12_a',
            szoveg: 'Az előrehaladáshoz elegendő hely áll rendelkezésre.',
          },
          b: {
            id: '36_12_b',
            szoveg:
              'Az irányváltoztatási szándékot jelző járműveket az előrehaladás nem akadályozza.',
          },
        },
      },
    },
  },
  '37': {
    paragrafus: '37',
    cim: '37. § – Közlekedés autópályán és autóúton',

    bekezdesek: {
      '1': {
        id: '37_1',
        szoveg:
          'Autópályán, autóúton, valamint az ezekre való ráhajtásra szolgáló úton – az előjelző táblától kezdődően – csak olyan gépjárművel, illetve gépjárműből és pótkocsiból álló járműszerelvénnyel szabad közlekedni, amely sík úton legalább 60 km/óra sebességgel képes haladni. Ezeken az utakon más jármű közlekedése tilos.',
      },

      '2': {
        id: '37_2',
        szoveg:
          'Autópályán és az azonos irányú forgalom számára legalább két forgalmi sávval rendelkező autóúton a párhuzamos közlekedés szabályai irányadók.',
      },

      '3': {
        id: '37_3',
        szoveg: 'Tilos:',
        alpontok: {
          a: {
            id: '37_3_a',
            szoveg:
              'Autópályára és autóútra útmenti ingatlanról, valamint útnak nem minősülő más területről ráhajtani, illetve onnan behajtani.',
          },
          b: {
            id: '37_3_b',
            szoveg:
              'Autópályán és autóúton hátramenetet végezni, megfordulni, valamint az úttesteket elválasztó sávra ráhajtani.',
          },
        },
      },

      '4': {
        id: '37_4',
        szoveg:
          'Autópálya és autóút úttestjén megállni tilos. A leállósávon megállni vagy várakozni tilos.',
        alpontok: {
          a: {
            id: '37_4_a',
            szoveg:
              'A jármű műszaki meghibásodás miatt továbbhaladásra képtelen.',
          },
          b: {
            id: '37_4_b',
            szoveg: 'A jármű forgalomellenőrzést végez.',
          },
          c: {
            id: '37_4_c',
            szoveg: 'A jármű útfenntartási vagy úttisztítási feladatot lát el.',
          },
          d: {
            id: '37_4_d',
            szoveg:
              'A jármű meghibásodott jármű elszállítását vagy javítását végzi.',
          },
          e: {
            id: '37_4_e',
            szoveg: 'A jármű megkülönböztető jelzést adó berendezést működtet.',
          },
        },
      },

      '5': {
        id: '37_5',
        szoveg:
          'A leállósávon csak forgalomellenőrzést, útfenntartást, úttisztítást, műszaki mentést végző járművek, valamint a forgalmi sávokba besorolni kívánó járművek haladhatnak. A forgalomellenőrzést végző járművet úgy kell elhelyezni, hogy kellő távolságból észlelhető legyen. A leállósávot használó járműveknek a feladat elvégzését követően haladéktalanul el kell hagyniuk a leállósávot.',
      },

      '6': {
        id: '37_6',
        szoveg:
          'Tilos előzni az azonos irányú forgalom számára két forgalmi sávval rendelkező autópályán és autóúton 6 és 22 óra között 7500 kg megengedett legnagyobb össztömeget meghaladó tehergépkocsival, vontatóval, valamint ezekből és pótkocsiból álló járműszerelvénnyel.',
      },

      '7': {
        id: '37_7',
        szoveg:
          'Az előzési tilalom hatálya alá tartozó járműveknek olyan követési távolságot kell tartaniuk, hogy közéjük legalább egy azonos járműkategóriába tartozó járműszerelvény biztonságosan besorolhasson.',
      },

      '8': {
        id: '37_8',
        szoveg:
          'Forgalmi torlódás esetén az azonos irányú forgalom számára két vagy több forgalmi sávval rendelkező autópályán és autóúton mentési folyosót kell kialakítani.',
        alpontok: {
          a: {
            id: '37_8_a',
            szoveg:
              'A belső, bal szélső forgalmi sávban közlekedő járműveknek a forgalmi sáv bal szélére kell húzódniuk.',
          },
          b: {
            id: '37_8_b',
            szoveg:
              'A többi forgalmi sávban közlekedő járműveknek a forgalmi sáv jobb szélére kell húzódniuk.',
          },
        },
      },
    },
  },
  '38': {
    paragrafus: '38',
    cim: '38. § – Közlekedés villamospályával ellátott úttesten',

    bekezdesek: {
      '1': {
        id: '38_1',
        szoveg:
          'Villamospályára más járművel ráhajtani, azon folyamatosan haladni vagy előzni csak akkor szabad, ha a vezetőt a látási viszonyok nem akadályozzák a közeledő villamos kellő távolságból való észlelésében, és a jármű a villamosforgalmat nem zavarja.',
      },

      '2': {
        id: '38_2',
        szoveg:
          'Ha a villamosvágányok az úttest közepén egymás mellett helyezkednek el, az úttest villamospályára történő igénybevétele tilos.',
        alpontok: {
          a: {
            id: '38_2_a',
            szoveg:
              'Párhuzamos közlekedésre alkalmas úttesten, ahol a forgalmi sávok útburkolati jellel vannak megjelölve, a villamospályára nem szabad ráhajtani.',
          },
          b: {
            id: '38_2_b',
            szoveg:
              'Egyéb úttesten az ellentétes irányú villamosforgalom részére szolgáló villamosvágányra nem szabad ráhajtani.',
          },
        },
      },

      '3': {
        id: '38_3',
        szoveg:
          'Az egyenesen haladó jármű és a menetirányt változtató villamos egymás közti viszonyában az egyenesen haladó jármű közlekedése az irányadó.',
      },

      '4': {
        id: '38_4',
        szoveg:
          'Útkereszteződésben villamos és más jármű egymás közti viszonyában az elsőbbség és a bekanyarodás szabályai irányadók, azzal, hogy az egyenesen haladó járműnek elsőbbsége van az azonos irányból érkező és bekanyarodó villamossal szemben.',
      },

      '5': {
        id: '38_5',
        szoveg:
          'A villamospálya által elfoglalt úttestrész a párhuzamos közlekedés szabályainak alkalmazása szempontjából nem minősül forgalmi sávnak.',
      },

      '6': {
        id: '38_6',
        szoveg:
          'Ha az útburkolati jel a járműforgalmat a villamospályára vezeti, más jármű is ráhajthat a villamospályára, amennyiben a villamosforgalmat nem zavarja. Ilyen esetben a villamospálya által elfoglalt úttestrészt a párhuzamos közlekedés alkalmazásakor figyelembe kell venni.',
      },
    },
  },
  '39': {
    paragrafus: '39',
    cim: '39. § – Közlekedés vasúti átjáróban',

    bekezdesek: {
      '1': {
        id: '39_1',
        szoveg:
          'A vasúti átjárót megközelíteni és azon áthaladni csak fokozott óvatossággal szabad. Az áthaladás során a vasúti átjáró biztosítására szolgáló közúti jelzéseket be kell tartani.',
      },

      '2': {
        id: '39_2',
        szoveg:
          'A vasúti átjárón csak folyamatosan, megállás nélkül, legalább 5 km/óra átlagsebességgel szabad áthaladni.',
      },

      '3': {
        id: '39_3',
        szoveg:
          'A vasúti átjáró előtt meg kell állni, ha az áthaladás feltételei nem biztosítottak.',
        alpontok: {
          a: {
            id: '39_3_a',
            szoveg: 'Bármely irányból vasúti jármű közeledik.',
          },
          b: {
            id: '39_3_b',
            szoveg:
              'A teljes sorompó vagy a félsorompó rúdja nem teljesen nyitott helyzetben áll, vagy mozgásban van.',
          },
          c: {
            id: '39_3_c',
            szoveg:
              'A sorompóhoz kapcsolódó fényjelző berendezés villogó piros jelzést ad.',
          },
          d: {
            id: '39_3_d',
            szoveg: 'A sorompóhoz kapcsolódó hangjelző berendezés jelzést ad.',
          },
          e: {
            id: '39_3_e',
            szoveg: 'A fénysorompó villogó fehér jelzést nem ad.',
          },
          f: {
            id: '39_3_f',
            szoveg: 'A vasúti jelzőőr „Megállj” jelzést ad.',
          },
          g: {
            id: '39_3_g',
            szoveg: 'A folyamatos áthaladás nem biztosított.',
          },
          h: {
            id: '39_3_h',
            szoveg:
              'Az átjárónál „Állj! Elsőbbségadás kötelező” jelzőtábla van elhelyezve.',
          },
        },
      },

      '4': {
        id: '39_4',
        szoveg:
          'Biztosítatlan vasúti átjáróra járművel csak akkor szabad ráhajtani, ha a vezető meggyőződött arról, hogy egyik irányból sem közeledik vasúti jármű, és a folyamatos áthaladás biztosított.',
      },

      '5': {
        id: '39_5',
        szoveg:
          'Biztosított vasúti átjáróra járművel csak akkor szabad ráhajtani, ha az áthaladás feltételei fennállnak.',
        alpontok: {
          a: {
            id: '39_5_a',
            szoveg:
              'A teljes sorompó mindkét rúdja nyitott véghelyzetben áll, és sem fény-, sem hangjelzés nem működik.',
          },
          b: {
            id: '39_5_b',
            szoveg: 'A fénysorompó villogó fehér fényjelzést ad.',
          },
          c: {
            id: '39_5_c',
            szoveg: 'A vasúti jelzőőr nem ad „Megállj” jelzést.',
          },
          d: {
            id: '39_5_d',
            szoveg: 'A folyamatos áthaladás biztosított.',
          },
        },
      },

      '6': {
        id: '39_6',
        szoveg:
          'A vasúti átjárót biztosító jelzőberendezés üzemzavara esetén járművel a vasúti átjáróra csak megállást követően szabad ráhajtani.',
        alpontok: {
          a: {
            id: '39_6_a',
            szoveg:
              'Az átjáró olyan kialakítású, hogy a vasúti pálya mindkét irányban kellő távolságra belátható, és a vezető meggyőződött arról, hogy vasúti jármű nem közeledik.',
          },
          b: {
            id: '39_6_b',
            szoveg:
              'Az átjáró forgalmát vasúti jelzőőr irányítja, és nem ad „Megállj” jelzést.',
          },
        },
      },

      '7': {
        id: '39_7',
        szoveg:
          'Ha a jármű a vasúti átjáróban elakad, és azt a vezető azonnal eltávolítani nem képes, köteles minden lehetséges módon gondoskodni arról, hogy a közeledő vasúti jármű vezetője vagy a vasút más alkalmazottja a veszélyhelyzetről a lehető legrövidebb időn belül értesüljön.',
      },
    },
  },
  '39/A': {
    paragrafus: '39/A',
    cim: '39/A. § – Közlekedés lakó-pihenő övezetben',

    bekezdesek: {
      '1': {
        id: '39/A_1',
        szoveg:
          'Lakó-pihenő övezetbe a „Lakó-pihenő övezet” jelzőtáblától a „Lakó-pihenő övezet vége” jelzőtábláig terjedő területre csak meghatározott járművek hajthatnak be.',
        alpontok: {
          a: {
            id: '39/A_1_a',
            szoveg: 'Kerékpár.',
          },
          b: {
            id: '39/A_1_b',
            szoveg:
              'Az ott lakókat vagy az oda látogatókat szállító személygépkocsi, továbbá a személygépkocsi kivételével a legfeljebb 3500 kg megengedett legnagyobb össztömegű gépkocsi, a betegszállító gépjármű, a motorkerékpár, a motoros tricikli és ezekhez kapcsolt pótkocsi, a segédmotoros kerékpár, az állati erővel vont jármű, a kézikocsi, valamint a kommunális szemét szállítására szolgáló jármű és az oda áruszállítást végző legfeljebb 3500 kg megengedett legnagyobb össztömegű tehergépkocsi.',
          },
          c: {
            id: '39/A_1_c',
            szoveg:
              'Az ott lakók és az oda költözők költöztetését végző tehergépkocsi.',
          },
          d: {
            id: '39/A_1_d',
            szoveg: 'Az oda látogatókat szállító autóbusz.',
          },
          e: {
            id: '39/A_1_e',
            szoveg:
              'Az oda építő- és tüzelőanyagot szállító tehergépkocsi és a hozzákapcsolt pótkocsi.',
          },
          f: {
            id: '39/A_1_f',
            szoveg:
              'Az út- és közműépítésre vagy -fenntartásra, köztisztasági, rendvédelmi, betegszállítási, közegészségügyi feladat, valamint postai gyűjtő- és kézbesítő szolgálat ellátására szolgáló jármű, ha a behajtás a feladat ellátása érdekében elkerülhetetlen.',
          },
          g: {
            id: '39/A_1_g',
            szoveg:
              'A mozgáskorlátozott személy által vezetett, illetve az őt szállító jármű és annak vezetője.',
          },
        },
      },

      '2': {
        id: '39/A_2',
        szoveg:
          'A lakó-pihenő övezetben járművel legfeljebb 20 km/óra sebességgel szabad közlekedni.',
      },

      '3': {
        id: '39/A_3',
        szoveg:
          'A lakó-pihenő övezetben a járművezető köteles fokozottan ügyelni a gyalogosok és a kerékpárosok biztonságára.',
        alpontok: {
          a: {
            id: '39/A_3_a',
            szoveg:
              'Járda hiányában a gyalogosok az úttest teljes szélességét használhatják, a járműforgalmat azonban szükségtelenül nem akadályozhatják.',
          },
          b: {
            id: '39/A_3_b',
            szoveg:
              'Járművel várakozni csak az erre kijelölt területen szabad.',
          },
        },
      },
    },
  },

  /** =========================
   *  40. § – Megállás
   *  ========================= */
  '40': {
    paragrafus: '40',
    cim: '40. § – Megállás',

    bekezdesek: {
      '1': {
        id: '40_1',
        szoveg:
          'Járművel megállni – ha közúti jelzés másképp nem rendelkezik – csak az úttest menetirány szerinti jobb szélén, azzal párhuzamosan, egy sorban szabad. A megállást irányjelzéssel jelezni kell.',
      },

      '2': {
        id: '40_2',
        szoveg:
          'Egyirányú forgalmi úton az úttest bal szélén is szabad megállni, ha a jármű mellett az úttest jobb széléig mérve legalább 5,5 méter szabad hely marad.',
      },

      '3': {
        id: '40_3',
        szoveg:
          'Kétkerekű motorkerékpárral, segédmotoros kerékpárral és kerékpárral két sorban egymás mellett, illetve ferdén is meg lehet állni, ha a járművek összesen legfeljebb egy személygépkocsi szélességű helyet foglalnak el. Felfestett várakozóhelyen egy személygépkocsi helyén két ilyen jármű is megállhat.',
      },

      '4': {
        id: '40_4',
        szoveg:
          'Lakott területen kívül járművel – a lehetőségekhez képest – az úttesten kívül kell megállni.',
      },

      '5': {
        id: '40_5',
        szoveg: 'Tilos megállni az alábbi esetekben:',
        alpontok: {
          a: {
            id: '40_5_a',
            szoveg:
              'Olyan helyen, ahol a megálló jármű a fényjelző készülék vagy jelzőtábla észlelését akadályozza.',
          },

          b: {
            id: '40_5_b',
            szoveg:
              'Olyan helyen, ahol a jármű és a záróvonal, illetve a jármű és az úttest másik szélén álló jármű között legalább 3 méter szabad hely nem marad.',
          },

          c: {
            id: '40_5_c',
            szoveg:
              'Be nem látható útkanyarulatban, bukkanóban vagy olyan helyen, ahol a járművet a többi jármű vezetője kellő távolságból nem észlelheti.',
          },

          d: {
            id: '40_5_d',
            szoveg:
              'Körforgalmú úton, útkereszteződésben, valamint az úttestek találkozásától számított 5 méteren belül. Ez alól kivétel, ha a megállás nem akadályozza a más járművek bekanyarodását.',
          },

          e: {
            id: '40_5_e',
            szoveg:
              'Kijelölt gyalogosátkelőhelyen, valamint a gyalogosátkelőhely előtt személygépkocsival, motorkerékpárral, segédmotoros kerékpárral, kerékpárral és kézikocsival 5 méteren belül, egyéb járművel 15 méteren belül.',
          },

          f: {
            id: '40_5_f',
            szoveg:
              'Hídon, aluljáróban, alagútban, valamint ezek be- és kijáratánál.',
          },

          g: {
            id: '40_5_g',
            szoveg:
              'Vasúti átjáróban, valamint attól számított 30 méteren belül, továbbá vasúti vagy villamospályán, illetve azok közvetlen közelében, ha a megállás akadályozza a kötöttpályás jármű közlekedését.',
          },

          h: {
            id: '40_5_h',
            szoveg:
              'Villamos-, autóbusz- vagy trolibusz-megállóhely jelzőtábla előtt 15 méteren belül, illetve utána 5 méteren belül, kivéve ha útburkolati jel másként rendelkezik.',
          },

          i: {
            id: '40_5_i',
            szoveg:
              'Autóbuszöbölben, kivéve a menetrend szerinti járművet, valamint az utasok ki- vagy beszállásának idejére a taxit, betegszállító járművet és az iskolabuszt.',
          },

          j: {
            id: '40_5_j',
            szoveg:
              'Villamosmegállónál lévő járdasziget és a hozzá közelebb eső járda közötti úttestrészen.',
          },

          k: {
            id: '40_5_k',
            szoveg:
              'Járdán 1000 kilogrammnál nagyobb tengelyterhelésű járművel.',
          },

          l: {
            id: '40_5_l',
            szoveg:
              'Kapaszkodósávon, gyorsítósávon, lassítósávon, kerékpársávon, nyitott kerékpársávon, kerékpárúton, valamint gyalog- és kerékpárúton.',
          },

          m: {
            id: '40_5_m',
            szoveg:
              'Különösen veszélyes helyen, útburkolati jellel megjelölt területen.',
          },

          n: {
            id: '40_5_n',
            szoveg:
              'Autóbusz-forgalmi sávban, kivéve a menetrend szerinti járművet, valamint 20 és 6 óra között a kommunális hulladékszállító járművet.',
          },
        },
      },

      '6': {
        id: '40_6',
        szoveg:
          'A megállási tilalmak nem vonatkoznak a forgalmi okból szükséges megállásra, valamint arra az esetre, ha a jármű műszaki hibája miatt a szabályok nem tarthatók be.',
      },

      '7': {
        id: '40_7',
        szoveg:
          'A jármű ajtaját csak akkor szabad kinyitni, ha az nem veszélyezteti a közlekedés, illetve a személy- és vagyonbiztonságot.',
      },
      '8': {
        id: '40_8',
        szoveg:
          ' A járdán – részben vagy teljes terjedelemben – csak akkor szabad megállni, ha:',
        alpontok: {
          a: {
            id: '40_8_a',
            szoveg: 'azt jelzőtábla vagy útburkolati jel megengedi',
          },
          b: {
            id: '40_8_b',
            szoveg:
              'a jármű a járda szélességének legfeljebb a felét foglalja el,',
          },
          c: {
            id: '40_8_c',
            szoveg:
              'a járdán a gyalogosok közlekedésére legalább 1,5 méter szabadon marad, és,',
          },
          d: {
            id: '40_8_d',
            szoveg: 'a jármű tengelyterhelése az 1000 kg-ot nem haladja meg',
          },
        },
      },
    },
  },
  '41': {
    paragrafus: '41',
    cim: '41. § – Várakozás',

    bekezdesek: {
      '1': {
        id: '41_1',
        szoveg:
          'A megállásra vonatkozó szabályokat a várakozásra is alkalmazni kell.',
      },

      '2': {
        id: '41_2',
        szoveg: 'Tilos várakozni:',
        alpontok: {
          a: {
            id: '41_2_a',
            szoveg: 'Három külön úttesttel rendelkező út középső úttestjén.',
          },
          b: {
            id: '41_2_b',
            szoveg: 'Lakott területen kívül főútvonal úttestjén.',
          },
          c: {
            id: '41_2_c',
            szoveg:
              'Olyan helyen, ahol a jármű az útmenti ingatlanra való behajtást vagy az onnan történő kihajtást az ingatlannal rendelkezni jogosult hozzájárulása nélkül akadályozza.',
          },
          d: {
            id: '41_2_d',
            szoveg:
              'Olyan helyen, ahol a jármű szabályosan várakozó másik jármű megközelítését vagy elindulását akadályozhatja.',
          },
          e: {
            id: '41_2_e',
            szoveg: 'Az úttesten ott, ahol a járdán a megállás megengedett.',
          },
        },
      },

      '3': {
        id: '41_3',
        szoveg:
          'A mozgáskorlátozott személy járműve és a betegszállító gépjármű meghatározott esetekben tiltott helyen is várakozhat.',
      },

      '4': {
        id: '41_4',
        szoveg:
          'Várakozást ellenőrző órával ellátott várakozóhelyen meghatározott időszakban csak az óra működtetésével és legfeljebb az órán jelzett időtartamig szabad várakozni. Lejárt órát a jármű eltávozása nélkül ismételten működtetni tilos.',
      },

      '5': {
        id: '41_5',
        szoveg:
          'Meghatározott időtartamú várakozás esetén a várakozás megkezdésének időpontját tárcsával kell jelezni, és annak jelzését a jármű eltávozása nélkül megváltoztatni tilos.',
      },

      '6': {
        id: '41_6',
        szoveg: '',
      },

      '7': {
        id: '41_7',
        szoveg:
          'A járművet őrizetlenül hagyni csak akkor szabad, ha a vezető gondoskodott arról, hogy a jármű önmagától ne indulhasson el, és illetéktelen személy ne indíthassa el.',
      },

      '8': {
        id: '41_8',
        szoveg:
          'Sürgősségi orvosi ellátáshoz kiadott várakozási engedéllyel rendelkező személygépkocsi vezetője – ha a várakozás más módon nem lehetséges – meghatározott várakozási tilalmakat figyelmen kívül hagyhat.',
        alpontok: {
          a: {
            id: '41_8_a',
            szoveg:
              'Olyan helyen, ahol a várakozás általános tilalom alá esik.',
          },
          b: {
            id: '41_8_b',
            szoveg:
              'Olyan helyeken, ahol a várakozás egyes forgalmi vagy területi okok miatt tilos.',
          },
        },
      },
    },
  },
  '42': {
    paragrafus: '42',
    cim: '42. § – Kikerülés',

    bekezdesek: {
      '1': {
        id: '42_1',
        szoveg:
          'A megkülönböztető jelzéseket (villogó kék fényjelzést és szirénát vagy váltakozó hangmagasságú más hangjelzést) használó gépjármű, illetőleg minden ilyen gépjárművekkel kísért (közrefogott) zárt csoportban haladó, megkülönböztető fényjelzést használó gépjármű részére minden járművel, minden helyzetben elsőbbséget kell adni, és akadálytalan továbbhaladását — félrehúzódással és a szükséghez képest megállással — lehetővé kell tenni.',
      },

      '2': {
        id: '42_2',
        szoveg:
          'Megkülönböztető fényjelzést használó, álló járművet megközelíteni, illetőleg mellette elhaladni csak fokozott óvatossággal szabad.',
      },
    },
  },
  '42/A': {
    paragrafus: '42/A',
    cim: '42/A. § – Magatartás veszélyes anyagot szállító járművekkel szemben \n A veszélyes anyagot szállító járművet csak fokozott óvatossággal szabad megközelíteni, mellette elhaladni vagy megelőzni.',

    bekezdesek: {
      '1': {
        id: '42/A_1',
        szoveg: '',
      },
    },
  },
  '43': {
    paragrafus: '43',
    cim: '43. § – Magatartás a gyalogosokkal szemben',

    bekezdesek: {
      '1': {
        id: '43_1',
        szoveg:
          'Kijelölt gyalogosátkelőhelyen a járművel a gyalogosnak elsőbbséget kell adni. Útkereszteződésnél a bekanyarodó járművel – kijelölt gyalogosátkelőhely hiányában is – elsőbbséget kell adni a gyalogosnak, ha azon az úttesten halad át, amelyre a jármű bekanyarodik.',
      },

      '2': {
        id: '43_2',
        szoveg:
          'Azt a helyet, ahol a gyalogosnak elsőbbsége van, a jármű vezetőjének csak olyan sebességgel szabad megközelítenie, hogy az elsőbbségadási kötelezettségének eleget tudjon tenni. A kijelölt gyalogosátkelőhelyet csak fokozott óvatossággal és olyan sebességgel szabad megközelíteni, hogy a jármű szükség esetén a gyalogosátkelőhely előtt megállítható legyen.',
      },

      '3': {
        id: '43_3',
        szoveg:
          'A kijelölt gyalogosátkelőhely előtt megálló vagy forgalmi okból álló jármű mellett meg kell állni, és továbbhaladni csak akkor szabad, ha a vezető meggyőződött arról, hogy a gyalogosok elsőbbsége nem sérül.',
      },

      '4': {
        id: '43_4',
        szoveg:
          'A vezetőnek fokozottan ügyelnie kell az úttesten a gyalogosok biztonságának megóvására.',
        alpontok: {
          a: {
            id: '43_4_a',
            szoveg:
              'A villamosmegállóhelynél lévő járdasziget és az ahhoz közelebb eső járda között áthaladó gyalogosokra, a menetrend szerint közlekedő járművek megállóhelyéről az úttestre lelépő gyalogosokra, valamint az autóbuszra felszálló és arról leszálló gyermekekre.',
          },
          b: {
            id: '43_4_b',
            szoveg:
              'Az egyedül vagy csoportosan haladó gyermekekre, továbbá azokra a személyekre, akik koruk, testi fogyatékosságuk vagy más ok miatt saját biztonságukra felismerhetően nem képesek ügyelni.',
          },
        },
      },
    },
  },
  '44': {
    paragrafus: '44',
    cim: '44. § – A forgalomban részt vevő járművek kivilágítása',

    bekezdesek: {
      '1': {
        id: '44_1',
        szoveg:
          'A forgalomban részt vevő járművet éjszaka és korlátozott látási viszonyok között ki kell világítani.',
      },

      '2': {
        id: '44_2',
        szoveg:
          'A gépjárművet, a mezőgazdasági vontatót, a lassú járművet és a segédmotoros kerékpárt helyzetjelző lámpákkal és tompított fényszóróval kell kivilágítani. Nem kell a tompított fényszóróval kivilágítani az egytengelyes motoros részből és hozzákapcsolt egytengelyes pótkocsiból álló olyan lassú járművet, amely sík úton önerejéből 15 km/óra sebességnél gyorsabban haladni nem képes, továbbá a tompított fényszóróval fel nem szerelt segédmotoros kerékpárt.',
      },

      '3': {
        id: '44_3',
        szoveg:
          'A tompított fényszóró helyett távolsági fényszórót használni – fényjelzés kivételével – csak lakott területen kívül szabad. Tilos a távolsági fényszóró használata',
        alpontok: {
          a: {
            id: '44_3_a',
            szoveg:
              'Másik járművel vagy hajtott (vezetett) állattal való szembetalálkozás esetében olyan távolságon belül, ahonnan a fényszóró a szembejövő jármű, illetőleg állat vezetőjét elvakíthatja.',
          },
          b: {
            id: '44_3_b',
            szoveg:
              'Másik jármű követése esetében olyan távolságon belül, ahonnan a fényszóró – a visszapillantó tükrön át – az elöl haladó jármű vezetőjét elvakíthatja.',
          },
          c: {
            id: '44_3_c',
            szoveg:
              'Ha a fényszóró az úttal párhuzamos vasúti pályán vagy vízi úton haladó jármű vezetőjét elvakíthatja.',
          },
        },
      },

      '4': {
        id: '44_4',
        szoveg:
          'Tompított vagy távolsági fényszóró helyett vagy mellett ködfényszórót, továbbá hátsó helyzetjelző ködlámpát abban az esetben szabad használni, ha a látási viszonyok ezt indokolják.',
      },

      '5': {
        id: '44_5',
        szoveg:
          'Keresőlámpát és munkahely megvilágító lámpát mozgó járművön használni nem szabad.',
      },

      '6': {
        id: '44_6',
        szoveg:
          'Fényjelzést adni a távolsági fényszóró felvillantásával szabad, feltéve, hogy ez a közlekedés többi résztvevőjét nem vakítja el.',
      },

      '7': {
        id: '44_7',
        szoveg:
          'A forgalomban részt vevő motorkerékpárt és a tompított fényszóróval felszerelt segédmotoros kerékpárt – tompított fényszóróval – nappal és jó látási viszonyok között is ki kell világítani.',
      },

      '8': {
        id: '44_8',
        szoveg:
          'Lakott területen kívüli úton a forgalomban részt vevő gépkocsit nappali menetjelző lámpával vagy tompított fényszóróval, mezőgazdasági vontatót és tompított fényszóróval felszerelt lassú járművet – tompított fényszóróval – nappal és jó látási viszonyok között is ki kell világítani.',
      },
    },
  },
  '45': {
    paragrafus: '45',
    cim: '45. § – Az álló járművek kivilágítása',

    bekezdesek: {
      '1': {
        id: '45_1',
        szoveg:
          'Az úttesten álló járművet éjszaka és korlátozott látási viszonyok között ki kell világítani, kivéve, ha közvilágítás van vagy a járművet egyéb külső fényforrás kellően megvilágítja. A gépjárművet, a mezőgazdasági vontatót és a lassú járművet a helyzetjelző lámpákkal kell kivilágítani. A 6 méternél nem hosszabb, két méternél nem szélesebb és pótkocsival vagy más vontatmánnyal össze nem kapcsolt gépjárművet azonban lakott területen elegendő az úttest közepe felé eső egy-egy első és hátsó helyzetjelző lámpával vagy egy, előre fehér, hátra piros fényt adó lámpával kivilágítani.',
      },

      '2': {
        id: '45_2',
        szoveg:
          'Álló járművön – a forgalmi okból megálló járművet kivéve – tompított fényszórót csak erős ködben vagy sűrű hóesésben szabad használni; távolsági fényszórót, ködfényszórót használni tilos.',
      },
    },
  },
  '46': {
    paragrafus: '46',
    cim: '46. § – Személyszállítás',

    bekezdesek: {
      '1': {
        id: '46_1',
        szoveg:
          'Személyt szállítani csak a járműnek e célra kialakított álló- vagy ülőhely részén szabad. Álló utast csak autóbuszon, trolibuszon és villamoson szabad szállítani.',
      },

      '2': {
        id: '46_2',
        szoveg:
          'Gépjárművel, mezőgazdasági vontatóval és lassú járművel legfeljebb a jármű hatósági engedélyében feltüntetett számú személyt szabad szállítani. A szállítható személyek számának meghatározásánál a vezetőt is figyelembe kell venni. Két 10 éven aluli gyermeket – ha az általuk elfoglalt ülésen gyermekbiztonsági rendszer használata nem kötelező – egy személynek kell tekinteni.',
      },

      '3': {
        id: '46_3',
        szoveg:
          'Motorkerékpár pótülésén csak egy, a saját biztonságára ügyelni képes személy szállítható, akinek a lába a lábtartót eléri. A gépkocsi első ülésén csak egy személy szállítható.',
      },

      '4': {
        id: '46_4',
        szoveg:
          'Tehergépkocsin a hatósági engedélyben feltüntetett személyek számánál több személy akkor szállítható, ha az alábbi feltételek együttesen teljesülnek:',
        alpontok: {
          a: {
            id: '46_4_a',
            szoveg:
              'A tehergépkocsi megengedett legnagyobb össztömege 3500 kg-ot meghaladja.',
          },
          b: {
            id: '46_4_b',
            szoveg:
              'A szállított személyek számára megfelelően rögzített és biztonságos ülőhely áll rendelkezésre.',
          },
          c: {
            id: '46_4_c',
            szoveg: 'A rakomány a szállított személyeket nem veszélyezteti.',
          },
          d: {
            id: '46_4_d',
            szoveg:
              'A tehergépkocsi össztömege – személyenként 68 kg-mal számolva – nem haladja meg a megengedett legnagyobb össztömeget.',
          },
          e: {
            id: '46_4_e',
            szoveg: 'A tehergépkocsi rakfelülete nem billenthető.',
          },
        },
      },

      '5': {
        id: '46_5',
        szoveg:
          'A fegyveres erők, a rendvédelmi szervek, a polgári nemzetbiztonsági szolgálatok által üzemeltetett, valamint közveszély, elemi csapás vagy a vasútüzem biztonságát veszélyeztető akadály elhárításánál használt tehergépkocsin a hatósági engedélyben feltüntetett személyek számánál több személy is szállítható, ha a biztonságos ülőhely, a rakomány elhelyezése, a jármű össztömege és a rakfelület kialakítása megfelel az előírásoknak.',
      },

      '6': {
        id: '46_6',
        szoveg:
          'Pótkocsin személyt szállítani tilos, kivéve az alábbi eseteket:',
        alpontok: {
          a: {
            id: '46_6_a',
            szoveg:
              'A járműszerelvény biztonságos közlekedése érdekében szükséges, a pótkocsi hatósági engedélyében meghatározott számú személy szállítható.',
          },
          b: {
            id: '46_6_b',
            szoveg:
              'Mezőgazdasági vontató első, nem billenő rakfelületű pótkocsiján személy szállítható.',
          },
        },
      },
    },
  },

  '47': {
    paragrafus: '47',
    cim: '47. § – Teherszállítás',

    bekezdesek: {
      '1': {
        id: '47_1',
        szoveg:
          'Járművet megterhelni oly mértékig szabad, hogy össztömege a megengedett legnagyobb össztömeget ne haladja meg. Olyan gépjárművön, amelynek teherbírását csak a szállítható személyek számával határozták meg, személyenként 10 kilogramm rakomány is szállítható. Ha az ilyen járművel a megengedettnél kevesebb személyt szállítanak, a rakomány súlya annyiszor 68 kilogrammal növelhető, amennyivel a szállított személyek száma a szállítható személyek számánál kevesebb.',
      },

      '2': {
        id: '47_2',
        szoveg:
          'A rakományt a járművön – annak belsejében vagy rakfelületén – úgy kell elhelyezni, hogy a közlekedés biztonságát, valamint a személy- és vagyonbiztonságot ne veszélyeztesse.',
        alpontok: {
          a: {
            id: '47_2_a',
            szoveg:
              'A rakomány a jármű vezetőjét a szabad kilátásban és a vezetésben, a forgalom többi résztvevőjét pedig a jármű fényjelző berendezéseinek észlelésében nem akadályozhatja.',
          },
          b: {
            id: '47_2_b',
            szoveg:
              'A rakomány a jármű ajtajainak vagy a rakfelület oldalfalainak lezárását nem gátolhatja.',
          },
          c: {
            id: '47_2_c',
            szoveg:
              'A rakomány egyenletesen és úgy legyen elhelyezve, hogy a jármű stabilitását számottevően ne rontsa.',
          },
          d: {
            id: '47_2_d',
            szoveg:
              'A rakományt úgy kell rögzíteni, hogy ne csússzon el, ne essen le, ne ömöljön ki, és megfelelő lefedéssel a leszóródás is meg legyen akadályozva.',
          },
          e: {
            id: '47_2_e',
            szoveg:
              'A rakomány az elkerülhetetlennél nagyobb zajt vagy szennyeződést nem okozhat.',
          },
          f: {
            id: '47_2_f',
            szoveg:
              'A rakomány magassága – a jármű magasságával együtt – a 4 métert nem haladhatja meg.',
          },
          g: {
            id: '47_2_g',
            szoveg:
              'A rakomány a járművön vagy annak rakfelületén nem nyúlhat túl.',
          },
        },
      },

      '3': {
        id: '47_3',
        szoveg:
          'Zárt kocsiszekrényű jármű tetején rakományt csak akkor szabad elhelyezni, ha a járműre tetőcsomagtartó van felszerelve. Személygépkocsi tetőcsomagtartóján rakomány akkor is szállítható, ha a járművön előre és hátra legfeljebb 40–40 cm-re túlnyúlik.',
      },

      '4': {
        id: '47_4',
        szoveg:
          'Mezőgazdasági szálasterményt szállító állati erővel vont jármű esetében a rakomány túlnyúlhat, azonban a rakomány és a jármű együttes szélessége a 2,5 métert nem haladhatja meg.',
      },

      '5': {
        id: '47_5',
        szoveg:
          'Nyitott rakfelületű járművön a rakomány – méretei miatt – elhelyezhető úgy is, hogy előre legfeljebb a jármű elejéig, hátra legfeljebb 2 méterre (de legfeljebb a rakfelület hosszának feléig), oldalra pedig úgy nyúljon ki, hogy a rakomány és a jármű együttes szélessége a 2,5 métert ne haladja meg. Pótkocsit vontató jármű rakománya hátra nem nyúlhat túl a rakfelületen.',
      },

      '6': {
        id: '47_6',
        szoveg:
          'A járművön túlnyúló rakományt – álló járművön is – legalább 40×40 cm-es piros vagy piros-fehér jelzéssel kell megjelölni. Éjszaka és korlátozott látási viszonyok között a hátra kinyúló rakományt piros lámpával és piros fényvisszaverővel, az oldalra kinyúlót előre fehér, hátra piros lámpával és fényvisszaverővel kell jelölni. A jelzés legfeljebb 40 cm-re lehet a rakomány szélétől. Az oldalirányú jelölés elhagyható, ha a rakomány széle az azonos oldali helyzetjelző lámpától legfeljebb 40 cm-re van.',
      },

      '7': {
        id: '47_7',
        szoveg:
          'A gépkocsi hátsó részéhez rögzített rakomány elhelyezése az alábbi feltételekkel megengedett:',
        alpontok: {
          a: {
            id: '47_7_a',
            szoveg:
              'A világító- és fényjelző berendezések, valamint a rendszámtábla látható marad.',
          },
          b: {
            id: '47_7_b',
            szoveg:
              'A rakomány hátrafelé legfeljebb 1 méterre, oldalirányban legfeljebb 0,4 méterre nyúlhat ki.',
          },
          c: {
            id: '47_7_c',
            szoveg: 'A rakomány szélessége a 2,5 métert nem haladhatja meg.',
          },
          d: {
            id: '47_7_d',
            szoveg:
              'A rakomány megjelölése megfelel az előírt jelölési szabályoknak.',
          },
        },
      },
    },
  },

  '48': {
    paragrafus: '48',
    cim: '48. § – A közlekedésben való részvétel külön feltételei',

    bekezdesek: {
      '1': {
        id: '48_1',
        szoveg:
          'Fém kapaszkodó körmökkel vagy vezetőélekkel felszerelt kerekű jármű szilárd burkolatú úton és vasúti átjárón csak akkor közlekedhet, ha a kapaszkodó körmöket vagy vezetőéleket védőabronccsal látták el.',
      },

      '2': {
        id: '48_2',
        szoveg: 'Hóláncot csak havas vagy jeges úton szabad használni.',
      },

      '3': {
        id: '48_3',
        szoveg:
          'Daruval, létrával vagy más, nem a jármű meghajtására szolgáló berendezéssel felszerelt jármű csak akkor vehet részt a közlekedésben, ha a mozgó alkatrészek alaphelyzetben rögzítettek és nem nyúlhatnak túl a járművön.',
      },

      '4': {
        id: '48_4',
        szoveg:
          'Biztonsági övvel felszerelt üléssel rendelkező járműben az ülésen utazó személynek a biztonsági övet be kell csatolnia.',
      },

      '5': {
        id: '48_5',
        szoveg:
          'Biztonsági öv használata nem kötelező az alábbi személyek esetében:',
        alpontok: {
          a: {
            id: '48_5_a',
            szoveg: 'Hátramenetben közlekedő gépkocsi vezetője.',
          },
          b: {
            id: '48_5_b',
            szoveg:
              'Taxi vezetője taxi üzemmódban történő utasszállítás során.',
          },
          c: {
            id: '48_5_c',
            szoveg:
              'Mentő gépkocsi betegellátó terében utazó személy, ha a becsatolás akadályozza az ellátást.',
          },
          d: {
            id: '48_5_d',
            szoveg:
              'Lakott területen menetrend szerinti személyszállítást végző autóbusz utasa.',
          },
          e: {
            id: '48_5_e',
            szoveg:
              'Lakott területen kívül közlekedő menetrend szerinti autóbusz utasa, ha álló utasokat is szállíthat.',
          },
          f: {
            id: '48_5_f',
            szoveg:
              'Autóbuszon szállított, 3. életévét be nem töltött gyermek.',
          },
          g: { id: '48_5_g', szoveg: 'Orvosi igazolással rendelkező személy.' },
        },
      },

      '6': {
        id: '48_6',
        szoveg:
          'Az autóbusz biztonsági övvel felszerelt ülésein utazókat tájékoztatni kell a biztonsági öv használatáról.',
        alpontok: {
          a: {
            id: '48_6_a',
            szoveg: 'Az ülésen elhelyezett jelzés alkalmazásával.',
          },
          b: { id: '48_6_b', szoveg: 'A járművezető tájékoztatása alapján.' },
          c: {
            id: '48_6_c',
            szoveg: 'Kalauz, idegenvezető vagy a csoport vezetője által.',
          },
          d: { id: '48_6_d', szoveg: 'Audiovizuális eszközök alkalmazásával.' },
        },
      },

      '7': {
        id: '48_7',
        szoveg:
          '150 cm-nél alacsonyabb gyermek gépkocsiban vagy mopedautóban csak testméretéhez és testsúlyához igazodó gyermekbiztonsági rendszerben szállítható.',
      },

      '8': {
        id: '48_8',
        szoveg:
          'Gyermekbiztonsági rendszer használata nem kötelező az alábbi esetekben:',
        alpontok: {
          a: {
            id: '48_8_a',
            szoveg:
              'Ha a jármű gyári kialakítása nem alkalmas gyermekbiztonsági rendszer beszerelésére.',
          },
          b: {
            id: '48_8_b',
            szoveg:
              'Ha a gyermek a hátsó ülésen utazik, betöltötte a 3. életévét, legalább 135 cm magas, és biztonsági övvel megfelelően rögzíthető.',
          },
          c: {
            id: '48_8_c',
            szoveg:
              'Taxi üzemmódban használt gépkocsi hátsó ülésén történő utazáskor.',
          },
          d: {
            id: '48_8_d',
            szoveg:
              'Rendvédelmi vagy mentő jármű betegellátó terében történő utazáskor.',
          },
          e: {
            id: '48_8_e',
            szoveg: 'Menetrend szerinti személyszállítást végző autóbuszon.',
          },
          f: {
            id: '48_8_f',
            szoveg:
              'Nem menetrend szerinti személyszállítást végző autóbuszon, ha álló utasokat is szállíthat.',
          },
          g: {
            id: '48_8_g',
            szoveg: 'Ha a 3 év alatti gyermek autóbuszon állva utazik.',
          },
          h: {
            id: '48_8_h',
            szoveg: 'Orvosi igazolással rendelkező gyermek esetén.',
          },
        },
      },

      '9': {
        id: '48_9',
        szoveg:
          'Zárt utastérrel nem rendelkező motorkerékpáron és segédmotoros kerékpáron utazó személynek becsatolt bukósisakot kell viselnie.',
      },

      '10': {
        id: '48_10',
        szoveg:
          'Korlátozott megengedett legnagyobb sebességű jármű csak akkor vehet részt a közlekedésben, ha a megengedett sebességet jelölő tábla a jármű hátsó részén el van helyezve.',
      },

      '11': {
        id: '48_11',
        szoveg:
          'Gépjárművel, mezőgazdasági vontatóval és lassú járművel csak olyan pótkocsi vontatható, amelynek vontatását engedélyezték.',
      },

      '12': {
        id: '48_12',
        szoveg:
          'Iskolabusszal csak akkor szabad közlekedni, ha az alábbi feltételek teljesülnek:',
        alpontok: {
          a: {
            id: '48_12_a',
            szoveg:
              'A jármű az előírt jelzéssel és „Gyermekszállítás” felirattal van ellátva.',
          },
          b: {
            id: '48_12_b',
            szoveg: 'Az ülések biztonsági övvel vannak felszerelve.',
          },
          c: {
            id: '48_12_c',
            szoveg:
              'A 135 cm-nél alacsonyabb gyermek gyermekbiztonsági rendszerben van rögzítve.',
          },
          d: {
            id: '48_12_d',
            szoveg:
              'A legalább 135 cm magas gyermek biztonsági övvel van rögzítve.',
          },
          e: {
            id: '48_12_e',
            szoveg: 'Minden szállított utas ülőhellyel rendelkezik.',
          },
        },
      },

      '13': {
        id: '48_13',
        szoveg: 'Az orvosi igazolásnak az alábbi adatokat kell tartalmaznia:',
        alpontok: {
          a: {
            id: '48_13_a',
            szoveg: 'A jogosult személy neve és születési ideje.',
          },
          b: {
            id: '48_13_b',
            szoveg: 'Az igazolás érvényességének lejárati dátuma.',
          },
          c: {
            id: '48_13_c',
            szoveg: 'A kiállító orvos neve, aláírása és bélyegzője.',
          },
          d: { id: '48_13_d', szoveg: 'Az igazolás kiállításának dátuma.' },
          e: { id: '48_13_e', szoveg: 'Az előírt jelzés feltüntetése.' },
        },
      },

      '14': {
        id: '48_14',
        szoveg:
          'Nehéz tehergépkocsi lakott területen kívül csak autópályán, autóúton vagy főútvonalon közlekedhet.',
      },

      '15': {
        id: '48_15',
        szoveg:
          'A közlekedési korlátozás nem alkalmazandó az alábbi esetekben:',
        alpontok: {
          a: {
            id: '48_15_a',
            szoveg:
              'Ha a nehéz tehergépkocsi az áru fel- vagy lerakásának helyére vagy onnan közlekedik azonos vagy szomszédos vármegyében.',
          },
          b: {
            id: '48_15_b',
            szoveg:
              'Ha a nehéz tehergépkocsi az üzembentartó telephelyére vagy onnan közlekedik azonos vagy szomszédos vármegyében.',
          },
        },
      },

      '16': {
        id: '48_16',
        szoveg:
          'A közlekedési korlátozás nem vonatkozik terelőúton haladó, díjfizetés alól mentes vagy külön engedéllyel rendelkező nehéz tehergépkocsira.',
      },

      '17': {
        id: '48_17',
        szoveg:
          'A közlekedési korlátozás nem vonatkozik az oktatási vagy vizsgáztatási célra használt, igazolással rendelkező nehéz tehergépkocsira.',
      },
    },
  },

  '49': {
    paragrafus: '49',
    cim: '49. § – Megkülönböztető jelzéseket használó gépjárművek',

    bekezdesek: {
      '1': {
        id: '49_1',
        szoveg:
          'A gépjármű megkülönböztető jelzéseket adó berendezéseit csak akkor szabad működtetni, ha a feladat sürgős ellátása, a személy-, élet- és vagyonbiztonság, valamint a védett személyek és kíséretük biztonsága ezt szükségessé teszi, és a forgalmi viszonyok azt indokolják.',
      },

      '2': {
        id: '49_2',
        szoveg:
          'A megkülönböztető fény- és hangjelzést együttesen használó gépjármű vezetője a közúti jelzéseket figyelmen kívül hagyhatja, ha magatartásával nem veszélyezteti a közlekedés, valamint a személy- és vagyonbiztonságot, és meggyőződött arról, hogy a többi közlekedő az akadálytalan továbbhaladást biztosította.',
      },

      '2a': {
        id: '49_2a',
        szoveg:
          'Ha a gépjármű kizárólag megkülönböztető fényjelzést használ, a járművezető figyelmen kívül hagyhatja a megengedett legnagyobb sebességre és a behajtási tilalomra vonatkozó rendelkezéseket, ha magatartásával nem veszélyezteti a közlekedés, valamint a személy- és vagyonbiztonságot.',
      },

      '3': {
        id: '49_3',
        szoveg:
          'Megkülönböztető jelzéseket használó gépjárművek találkozásakor egymás közötti viszonyukban az általános közlekedési szabályok az irányadók.',
      },

      '4': {
        id: '49_4',
        szoveg:
          'Ha a megkülönböztető jelzést használó jármű olyan helyen áll meg, ahol a megállás egyébként tilos, a megkülönböztető fényjelzést működtetni kell, megkülönböztető hangjelzést álló járművön nem szabad használni.',
      },

      '4a': {
        id: '49_4a',
        szoveg:
          'Szolgálati feladat ellátása vagy védett személyek és kíséretük biztonsága érdekében a szolgálati gépjármű megkülönböztető fényjelzés működtetése nélkül is megállhat tiltott helyen, ha a forgalmi viszonyok ezt indokolják, a járművezető nem veszélyezteti a közlekedés biztonságát, és a jármű kellő távolságból észlelhető.',
      },

      '5': {
        id: '49_5',
        szoveg:
          'Megkülönböztető jelzéseket használó gépkocsit lakott területen belül nappal és jó látási viszonyok között is tompított fényszóróval ki kell világítani.',
      },
    },
  },
  '50': {
    paragrafus: '50',
    cim: '50. § – Figyelmeztető jelzést használó járművek',

    bekezdesek: {
      '1': {
        id: '50_1',
        szoveg:
          'A jármű figyelmeztető jelzést adó berendezését az alábbi esetekben működtetni kell:',
        alpontok: {
          a: {
            id: '50_1_a',
            szoveg: 'Ha a jármű:',
            alpontok: {
              aa: {
                id: '50_1_a_aa',
                szoveg:
                  'Út vagy közmű építését, tisztítását vagy fenntartását végzi.',
              },
              ab: {
                id: '50_1_a_ab',
                szoveg:
                  'Települési, ideértve a szelektíven gyűjtött hulladék összegyűjtését végzi.',
              },
              ac: {
                id: '50_1_a_ac',
                szoveg:
                  'Állati eredetű melléktermék kritikus szervezet általi gyűjtését és szállítását végzi.',
              },
            },
          },

          b: {
            id: '50_1_b',
            szoveg:
              'Út vagy közmű építési, tisztítási munkával érintett útszakaszon anyagszállítást végez.',
          },

          c: {
            id: '50_1_c',
            szoveg:
              'Hatósági elszállítást vagy kerékbilincs alkalmazását rendszeresen végző jármű a tevékenység közben.',
          },

          d: {
            id: '50_1_d',
            szoveg:
              'Megengedett hosszúsági vagy szélességi méretet meghaladó jármű vagy járműszerelvény menet közben.',
          },

          e: {
            id: '50_1_e',
            szoveg:
              'Megengedett méretet meghaladó járművet vagy járműszerelvényt kísérő jármű kíséret közben.',
          },

          f: {
            id: '50_1_f',
            szoveg:
              'Elromlott jármű vontatását rendszeresen végző jármű tényleges vontatás közben.',
          },

          g: {
            id: '50_1_g',
            szoveg:
              'Közúton elromlott jármű hibaelhárítását végző jármű a hibaelhárítás során.',
          },

          h: {
            id: '50_1_h',
            szoveg:
              'Radioaktív anyagot szállító jármű menet közben, illetve az ilyen szállítmányt kísérő jármű kíséret közben.',
          },

          i: {
            id: '50_1_i',
            szoveg:
              'Személy- és vagyonvédelmi vagy pénz- és értékszállítási tevékenységet végző jármű a feladat ellátása közben.',
          },

          j: {
            id: '50_1_j',
            szoveg:
              'Közterületi polgárőri szolgálatot ellátó jármű a szolgálat teljesítése közben.',
          },

          k: {
            id: '50_1_k',
            szoveg:
              'Rádióellenőrzési, rádiófelderítési, rádió-megfigyelési, zavarvizsgálati vagy mérőszolgálati tevékenységet végző jármű.',
          },

          l: {
            id: '50_1_l',
            szoveg:
              'Munkavédelmi vagy munkaügyi hatósági ellenőrzési és kivizsgálási tevékenységet végző jármű.',
          },

          m: {
            id: '50_1_m',
            szoveg:
              'Személy- és vagyonvédelmi tevékenységet végző vállalkozás vagy személy távfelügyeleti tevékenységet végző járműve.',
          },

          n: {
            id: '50_1_n',
            szoveg:
              'Biztonsági okmányok szállítását végző jármű a feladat ellátása közben.',
          },
        },
      },

      '2': {
        id: '50_2',
        szoveg:
          'Az (1) bekezdés a) alpontja szerinti (közfeladatot, közmű építési) tevékenységet végző jármű vezetője meghatározott feltételek mellett eltérhet egyes közlekedési szabályoktól.',
        alpontok: {
          a: {
            id: '50_2_a',
            szoveg:
              'Meghatározott várakozási szabályt figyelmen kívül hagyhat.',
          },
          b: {
            id: '50_2_b',
            szoveg:
              '22 és 6 óra között, legfeljebb 10 km/óra sebességgel, megfelelő biztosítás mellett a menetiránnyal szemben is közlekedhet.',
          },
          c: {
            id: '50_2_c',
            szoveg: 'Legfeljebb 10 km/óra sebességgel a járdán is közlekedhet.',
          },
          d: {
            id: '50_2_d',
            szoveg:
              'Olyan helyen is megállhat, ahol a megállás egyébként tilos.',
          },
          e: {
            id: '50_2_e',
            szoveg:
              'Behajthat olyan útra vagy övezetbe, ahová egyébként nem hajthatna be.',
          },
        },
      },

      '3': {
        id: '50_3',
        szoveg:
          'Egyes figyelmeztető jelzést használó járművek esetében a (2) bekezdésben meghatározott eltérések alkalmazhatók, ha a tevékenység végzése ezt szükségessé teszi, és a közlekedés biztonsága nem sérül.',
      },

      '4': {
        id: '50_4',
        szoveg:
          'Ha a jármű nem az (1) bekezdésben meghatározott tevékenységet végzi, a figyelmeztető jelzést adó berendezést nem szabad működtetni.',
      },

      '5': {
        id: '50_5',
        szoveg:
          'A figyelmeztető jelzést használó járművet a közlekedésben nem illeti meg az általános szabályoktól eltérő elsőbbség.',
      },
    },
  },

  '51': {
    paragrafus: '51',
    cim: '51. § – Útvonalengedélyhez kötött járművek',

    bekezdesek: {
      '1': {
        id: '51_1',
        szoveg:
          'Közúti forgalomban útvonalengedéllyel, az abban meghatározott útvonalon és feltételek szerint szabad közlekedni az alábbi járművekkel:',
        alpontok: {
          a: {
            id: '51_1_a',
            szoveg:
              'Olyan járművel, amelynek megengedett legnagyobb össztömege vagy tengelyterhelése meghaladja az előírt műszaki határértéket.',
          },
          b: {
            id: '51_1_b',
            szoveg:
              'Olyan járművel, amelynek magassága, szélessége vagy hosszúsága az előírt mérethatárt meghaladja, ideértve a rakománnyal együtt mért méretet is.',
          },
          c: {
            id: '51_1_c',
            szoveg: 'Lánctalpas járművel.',
          },
        },
      },

      '2': {
        id: '51_2',
        szoveg:
          'Ha az útvonalengedély eltérő sebességet nem határoz meg, túlsúlyos vagy túlméretes jármű legfeljebb 30 km/óra, lánctalpas jármű legfeljebb 15 km/óra sebességgel közlekedhet.',
      },

      '3': {
        id: '51_3',
        szoveg:
          'Az útvonalengedélyhez kötött közlekedésre vonatkozó szabályok nem alkalmazandók a fegyveres erők által üzemben tartott járművekre.',
      },
    },
  },

  '51/A': {
    paragrafus: '51/A',
    cim: '51/A. § – A mozgáskorlátozottak külön engedélye és jelzése \n A mozgásában korlátozott személyt, valamint az őt szállító jármű vezetőjét külön közlekedési és várakozási jogosultság illeti meg, ha a mozgáskorlátozott személy részére kiállított parkolási igazolvány a járműben elhelyezésre került',

    bekezdesek: {
      '1': {
        id: '51/A_1',
        szoveg: ' ',
      },
    },
  },
  '52': {
    paragrafus: '52',
    cim: '52. § – Veszélyes anyagot szállító járművek',

    bekezdesek: {
      '1': {
        id: '52_1',
        szoveg:
          'Veszélyes anyagot szállító járműveknek menet közben, egymás mögött haladva legalább 50 méter követési távolságot kell tartaniuk.',
      },

      '2': {
        id: '52_2',
        cim: 'Megállási tilalom',
        alpontok: {
          a: {
            id: '52_2_a',
            szoveg:
              'Lakott területen kívül tilos megállni másik veszélyes anyagot szállító járműtől, sátortábortól, tömegközlekedési jármű megállóhelyétől, elektromos vagy egyéb távvezetéktől, valamint nyílt lángtól számított 50 méteren belül.',
          },
          b: {
            id: '52_2_b',
            szoveg:
              'Lakott területen az a) pontban felsoroltakon túl tilos megállni csatornanyílás (csatorna-összefolyó) felett vagy annak közvetlen közelében.',
          },
        },
      },

      '3': {
        id: '52_3',
        cim: 'Várakozási tilalom',
        alpontok: {
          a: {
            id: '52_3_a',
            szoveg:
              'Lakott területen kívül – a kijelölt várakozóhely kivételével – tilos várakozni épülettől, vasúti átjárótól, útkereszteződéstől, hídtól, aluljárótól vagy alagúttól számított 50 méteren belül.',
          },
          b: {
            id: '52_3_b',
            szoveg:
              'Lakott területen belül – a kijelölt várakozóhely kivételével – a veszélyes anyagot szállító járművel várakozni tilos.',
          },
        },
      },

      '4': {
        id: '52_4',
        szoveg:
          'A veszélyes anyag szállítása során bekövetkezett rendkívüli veszélyről – különösen baleset, elszóródás, kiömlés vagy tűz esetén – a rendőrhatóságot vagy a legközelebbi rendőrt haladéktalanul értesíteni kell. Az értesítésnek tartalmaznia kell a szállított anyag azonosításához szükséges legfontosabb adatokat.',
      },

      '5': {
        id: '52_5',
        szoveg:
          'Amennyiben jogszabály szigorúbb feltételeket nem állapít meg, a nem lezárt rakterű veszélyes anyagot szállító járművet, valamint a veszélyes anyaggal töltött tartányt szállító járművet őrizetlenül hagyni tilos.',
      },
    },
  },
  '54': {
    paragrafus: '54',
    cim: '54. § – Kerékpárok és segédmotoros kerékpárok',

    bekezdesek: {
      '1': {
        id: '54_1',
        szoveg:
          'Kerékpárral elsősorban a kerékpárúton, a kerékpársávon, illetve erre utaló jelzés esetén az autóbusz forgalmi sávon kell közlekedni. Ezek hiányában a leállósávon vagy a kerékpározásra alkalmas útpadkán, lakott területen kívül pedig – ha az út- és forgalmi viszonyok ezt lehetővé teszik – a főútvonalon az úttest jobb széléhez húzódva kell haladni.',
      },

      '2': {
        id: '54_2',
        szoveg:
          'Lakott területen azon az úton, ahol az úttest kerékpár közlekedésre alkalmatlan, továbbá ahol a kerékpározás tilos, a gyalogos forgalom zavarása nélkül és legfeljebb 10 km/óra sebességgel a járdán is szabad kerékpározni.',
      },

      '3': {
        id: '54_3',
        szoveg:
          'Kerékpárral az útpadkán, az úttesten és a járdán is csak egy sorban szabad közlekedni.',
      },

      '4': {
        id: '54_4',
        szoveg: 'Balra kanyarodás és megfordulás tilalma',
        alpontok: {
          a: {
            id: '54_4_a',
            szoveg:
              'Lakott területen kívül a főútvonalon kerékpárral balra bekanyarodni vagy megfordulni tilos.a kerékpáros köteles leszállni a kerékpárról, és azt tolva – a gyalogosokra vonatkozó szabályok szerint – az úttesten áthaladni.',
          },
          b: {
            id: '54_4_b',
            szoveg:
              'Kerékpárútról a vele párhuzamos útra balra bekanyarodni tilos.a kerékpáros köteles leszállni a kerékpárról, és azt tolva – a gyalogosokra vonatkozó szabályok szerint – az úttesten áthaladni.',
          },
        },
      },

      '5': {
        id: '54_5',
        szoveg:
          'Kétkerekű kerékpáron a 16. életévét betöltött személy szállíthat legfeljebb 10 éves, a kerékpárt nem hajtó utast a kerékpár pótülésén. Kettőnél több kerekű kerékpáron a 17. életévét betöltött személy szállíthat utast.',
      },

      '6': {
        id: '54_6',
        szoveg:
          'A kerékpárral éjszaka és korlátozott látási viszonyok között abban az esetben szabad közlekedni, ha a kerékpáron vagy a kerékpároson',
        alpontok: {
          a: {
            id: '54_6_a',
            szoveg:
              'Elöl fehér, hátul piros színű, folyamatos vagy villogó fényt adó lámpát és fényvisszaverőt kell elhelyezni a kerékpáron vagy a kerékpároson.',
          },
          b: {
            id: '54_6_b',
            szoveg:
              'Lakott területen kívül kerékpáros fényvisszaverő mellényt vagy ruházatot kell viselni.',
          },
        },
      },

      '7': {
        id: '54_7',
        szoveg: 'Tilos kerékpározni:',
        alpontok: {
          a: {
            id: '54_7_a',
            szoveg:
              'Főútvonalon 12. életévét be nem töltött személynek tilos kerékpározni.',
          },
          b: {
            id: '54_7_b',
            szoveg: 'Elengedett kormánnyal kerékpározni tilos.',
          },
          c: {
            id: '54_7_c',
            szoveg:
              'Kerékpárhoz oldalkocsit vagy – a kerékpárutánfutó kivételével – más vontatmányt kapcsolni tilos.',
          },
          d: {
            id: '54_7_d',
            szoveg: 'Kerékpárt más járművel vagy állattal vontatni tilos.',
          },
          e: {
            id: '54_7_e',
            szoveg:
              'Kerékpáron olyan tárgyat szállítani tilos, amely oldalra kinyúlik, előre vagy hátra egy méternél hosszabban kinyúlik, a vezetést akadályozza vagy a biztonságot veszélyezteti.',
          },
          f: {
            id: '54_7_f',
            szoveg: 'Kerékpárral állatot vezetni tilos.',
          },
        },
      },

      '8': {
        id: '54_8',
        szoveg:
          'Segédmotoros kerékpárokra vonatkozó eltérések – a quad és a mopedautó kivételével – ',
        alpontok: {
          a: {
            id: '54_8_a',
            szoveg:
              'Lakott területen segédmotoros kerékpárral a kerékpársávon közlekedni tilos.',
          },
          b: {
            id: '54_8_b',
            szoveg: 'Kétkerekű segédmotoros kerékpáron utast szállítani tilos.',
          },
          c: {
            id: '54_8_c',
            szoveg: 'Segédmotoros kerékpárhoz utánfutót kapcsolni tilos.',
          },
        },
      },

      '9': {
        id: '54_9',
        szoveg:
          'Három- vagy négykerekű segédmotoros kerékpárral személyt szállítani akkor szabad, ha a jármű vezetője a 17. életévét betöltötte.',
      },

      '10': {
        id: '54_10',
        szoveg:
          'A gyalog- és kerékpárúton a kerékpáros nem akadályozhatja és nem veszélyeztetheti a gyalogos forgalmat.',
      },

      '11': {
        id: '54_11',
        szoveg:
          'Ha az út mellett, annak vonalvezetését követve kerékpárutat vagy gyalog- és kerékpárutat jelöltek ki, a kétkerekű kerékpároknak azon kell közlekedniük. Lakott területen, nem főútvonalon azonban – ha kerékpárnyom is fel van festve, és a jelzésekből más nem következik – az úttest is igénybe vehető.',
      },
    },
  },
  '55': {
    paragrafus: '55',
    cim: '55. § – Állati erővel vont járművek és kézikocsik',

    bekezdesek: {
      '1': {
        id: '55_1',
        szoveg:
          'Állati erővel vont járművel és kézikocsival szorosan az úttest szélén kell közlekedni. Ha az ilyen jármű a forgalmat lényegesen akadályozná, a leállósávra, illetve – ha közlekedésre alkalmas – az útpadkára kell lehúzódni.',
      },

      '2': {
        id: '55_2',
        szoveg:
          'Az állati erővel vont járművet és a kézikocsit éjszaka és korlátozott látási viszonyok között a külön jogszabályban meghatározott lámpákkal kell kivilágítani.',
      },

      '3': {
        id: '55_3',
        szoveg: 'Tilos',
        alpontok: {
          a: {
            id: '55_3_a',
            szoveg:
              'Főútvonalon állati erővel vont járművel és kézikocsival közlekedni, kivéve ha más út vagy útszakasz nem áll rendelkezésre.',
          },
          b: {
            id: '55_3_b',
            szoveg:
              'Főútvonalon 12. életévét be nem töltött személynek kézikocsival közlekedni.',
          },
          c: {
            id: '55_3_c',
            szoveg:
              'Az állati erővel vont járművet – az állatok vonóerejét és az útviszonyokat figyelembe véve – túlterhelni.',
          },
        },
      },

      '4': {
        id: '55_4',
        szoveg:
          'Lakott területen kívül éjszaka és korlátozott látási viszonyok között a kézikocsival közlekedő személynek fényvisszaverő mellényt vagy ruházatot kell viselnie.',
      },
    },
  },

  '56': {
    paragrafus: '56',
    cim: '56. § – Műszaki hiba',

    bekezdesek: {
      '1': {
        id: '56_1',
        szoveg:
          'A jármű vezetője köteles a járművet haladéktalanul megállítani – lehetőség szerint olyan helyen, ahol a forgalmat nem akadályozza –, ha olyan műszaki hibát észlel, amely balesethez vezethet, különösen ha a jármű alábbi berendezései romlottak el:',
        alpontok: {
          a: { id: '56_1_a', szoveg: 'A kormányszerkezet.' },
          b: { id: '56_1_b', szoveg: 'Az üzemi fékberendezés.' },
          c: { id: '56_1_c', szoveg: 'Az összes féklámpa.' },
          d: {
            id: '56_1_d',
            szoveg:
              'Az irányjelző berendezés, kivéve, ha kézzel megfelelő irányjelzés adható.',
          },
          e: {
            id: '56_1_e',
            szoveg:
              'A bal oldali első vagy hátsó helyzetjelző lámpa, kivéve, ha a jármű kivilágítása nem szükséges, vagy az elromlott lámpa – a távolsági fényszórót és a hátsó ködlámpát kivéve – más lámpával helyettesíthető.',
          },
        },
      },

      '2': {
        id: '56_2',
        szoveg:
          'Az (1) bekezdésben felsorolt műszaki hiba fennállása esetén a járművel a hiba elhárításáig – a (3) bekezdésben meghatározott kivétellel – közlekedni tilos.',
      },

      '3': {
        id: '56_3',
        szoveg:
          'Ha a műszaki hiba a közlekedés biztonságát közvetlenül nem veszélyezteti, a járművel fokozott óvatossággal, lehetőleg kis forgalmú úton és időszakban a legközelebbi olyan helyig szabad közlekedni, ahol a hiba elhárítható. Amennyiben a meghibásodás autópályán vagy autóúton következik be, a járművel a legközelebbi lehajtón vagy útkereszteződésben le kell térni.',
      },

      '4': {
        id: '56_4',
        szoveg:
          'Ha a jármű sebességmérő műszere romlik el, a jármű a telephelyre történő első visszatérésig, de legfeljebb 24 órán keresztül közlekedhet.',
      },

      '5': {
        id: '56_5',
        szoveg:
          'Az elromlott járművet lehetőség szerint az úttesten kívül vagy olyan helyen kell elhelyezni, ahol a várakozás nem tilos. Éjszaka és korlátozott látási viszonyok között az álló járművek kivilágítására vonatkozó szabályok szerint ki kell világítani. Amennyiben a vezető ezeknek a kötelezettségeknek nem tud eleget tenni, köteles mindent megtenni a közlekedés biztonságának megóvása érdekében.',
      },

      '6': {
        id: '56_6',
        szoveg:
          'Lakott területen kívül az úttesten vagy a leállósávon álló elromlott gépjárművet – a kétkerekű motorkerékpár kivételével –, valamint a mezőgazdasági vontatót, a lassú járművet és a fel nem kapcsolt pótkocsit elakadást jelző háromszöggel kell megjelölni. Az elakadást jelző háromszöget a jármű mögött úgy kell elhelyezni, hogy az elromlott jármű a többi jármű vezetője számára kellő távolságból észlelhető legyen. Lakott területen az elromlott jármű elakadást jelző háromszöggel történő megjelölése megengedett.',
      },

      '7': {
        id: '56_7',
        szoveg:
          'Az úttesten álló elromlott jármű az elakadást jelző háromszögön kívül megjelölhető mindkét oldali első és hátsó irányjelzőjének egyidejű működtetésével vagy villogó narancssárga fényjelzést adó elakadást jelző lámpával.',
      },
    },
  },
  '57': {
    paragrafus: '57',
    cim: '57. § – Elromlott jármű vontatása',

    bekezdesek: {
      '1': {
        id: '57_1',
        szoveg:
          'Elromlott jármű vontatása során – a 26. § (1) bekezdésének d) pontjában foglalt rendelkezés  tehát a 40 km/óra sebességhatár betartását túlmenően – fokozott óvatossággal, lehetőleg kisforgalmú úton és időszakban kell közlekedni. Autópályáról és autóútról az elromlott járművet vontató járművel a legközelebbi lehajtásra szolgáló úton, illetőleg útkereszteződésben le kell térni.',
      },

      '2': {
        id: '57_2',
        szoveg:
          'Elromlott gépjárművet, mezőgazdasági vontatót és lassú járművet vontatni csak olyan járművel szabad, amelynek tényleges súlya eléri a vontatott jármű tényleges súlyának a felét; ha azonban az üzemi fékberendezés romlott el, vontatásra csak olyan járművet szabad használni, amelynek tényleges súlya eléri a vontatott jármű tényleges súlyát.',
      },

      '3': {
        id: '57_3',
        szoveg:
          'Kétkerekű motorkerékpárt, segédmotoros kerékpárt és kerékpárt vontatni, valamint ilyen járművel más járművet vontatni tilos.',
      },

      '4': {
        id: '57_4',
        szoveg:
          'Olyan járművet, amelynek kormányszerkezete romlott el, csak emelve szabad vontatni. Emelve vontatásnál a vontatott járművet úgy kell rögzíteni, hogy a megemelt rész oldalirányban ki ne lenghessen. Járművet emelve úgy vontatni, hogy a kormányozott kerekein gördüljön, csak abban az esetben szabad, ha a kormányzott kerekeket elfordulás ellen megfelelően rögzítették.',
      },

      '5': {
        id: '57_5',
        szoveg:
          'A vontatott járművet olyan személynek kell vezetnie, aki megfelel a 4. §-ban foglalt rendelkezéseknek( A járművezetés személyi feltételei). Vontatott járművön – a vezetőn kívül – személyt szállítani tilos; az emelve vontatott járművön még vezető sem utazhat.',
      },

      '6': {
        id: '57_6',
        szoveg:
          'A vontatórudat, illetőleg a vontatókötelet a járműveken úgy kell rögzíteni, hogy az le ne szakadhasson. A vontatórúdnak, illetőleg a vontatókötélnek olyan hosszúnak kell lennie, hogy a két jármű kanyarodás közben össze ne érhessen; nem lehet azonban hosszabb, mint a vontatott jármű. Ha a vontatórúd, illetőleg a vontatókötél három méternél hosszabb, azt feltűnő módon meg kell jelölni.',
      },

      '7': {
        id: '57_7',
        szoveg:
          'Olyan járművet, amelynek üzemi fékberendezése romlott el, vagy amelynek megengedett legnagyobb össztömege a 3500 kilogrammot meghaladja, csak – a húzó- és a nyomóerők felvételére egyaránt alkalmas – merev vontatórúddal szabad vontatni.',
      },

      '8': {
        id: '57_8',
        szoveg:
          'A vontatott jármű féklámpáját és irányjelző berendezését – kivéve ha a járművet emelve vontatják – működtetni kell, továbbá – éjszaka és korlátozott látási viszonyok között – a vontatott járművet is ki kell világítani.',
      },
    },
  },
  '58': {
    paragrafus: '58',
    cim: '58. § – Közúti baleset',

    bekezdesek: {
      '1': {
        id: '58_1',
        szoveg:
          'A balesettel érintett jármű vezetője köteles a járművel azonnal megállni, a baleset folytán megsérült vagy veszélybe került személy részére segítséget nyújtani és az esetleges további balesetek elkerülése érdekében minden tőle telhetőt megtenni.',
      },

      '2': {
        id: '58_2',
        szoveg:
          'Ha a baleset halált vagy személyi sérülést okozott, a balesetről a rendőrhatóságot haladéktalanul értesíteni kell és a lehetőséghez képest gondoskodni kell a nyomok megőrzéséről; a helyszínt csak az intézkedő rendőr engedélyével szabad elhagyni. Ha a baleset veszélyes anyagot szállító járművel következett be, a balesettel nem érintett járművek vezetőinek is haladéktalanul értesíteni kell a rendőrhatóságot a balesetről, és közölni kell a jármű narancssárga alapszínű tábláján feltüntetett számokat.',
      },

      '3': {
        id: '58_3',
        szoveg:
          'Ha a rendőrhatóság értesítése nem kötelező, de valamelyik érdekelt rendőri intézkedést kíván és a rendőrhatóságot haladéktalanul értesíti, a balesettel érintett járművek vezetőinek a rendőri intézkedést meg kell várniuk. A rendőrhatóság értesítése, illetve rendőri intézkedés hiányában a balesetben érintettek kötelesek személyazonosságukat egymás számára hitelt érdemlően igazolni és megnevezni azt a biztosítót, amellyel a járműre felelősségbiztosítási szerződést kötöttek. Ha a baleset folytán megrongálódott jármű vezetője nincs jelen, a károkozó köteles személyi adatait és biztosítója nevét erre alkalmas módon a helyszínen hátrahagyni és az esetet a biztosítónak bejelenteni.',
      },

      '4': {
        id: '58_4',
        szoveg:
          'Ha rendőri intézkedés válik szükségessé, a rendőri intézkedés megtörténtéig a vezetőnek szeszes italt fogyasztania tilos.',
      },

      '5': {
        id: '58_5',
        szoveg:
          'Személysérülést okozó baleset és jármű kigyulladása esetében a balesettel nem érintett járművek vezetői is kötelesek a tőlük elvárható segítséget nyújtani. A jármű vezetője a segítségnyújtáshoz a járművön készenlétben tartott elsősegélynyújtó felszerelést, valamint a tűzoltó készülékkel ellátott jármű vezetője a tűzoltó készüléket köteles használni, illetve a segítségnyújtó rendelkezésére bocsátani.',
      },

      '6': {
        id: '58_6',
        szoveg:
          'A forgalom zavartalanságát a lehetőséghez képest baleset bekövetkezése esetén is biztosítani kell.',
      },

      '7': {
        id: '58_7',
        szoveg:
          'A baleset folytán megsérült jármű közlekedésére, kivilágítására és vontatására az 56. § (2)–(7) bekezdésének, valamint az 57. §-nak a rendelkezéseit megfelelően alkalmazni kell.',
      },
    },
  },
  '59': {
    paragrafus: '59',
    cim: '59. § – A járművek eltávolítása',

    bekezdesek: {
      '1': {
        id: '59_1',
        szoveg:
          'A rendőrség, a közterület-felügyelet, valamint a közút kezelője az üzemben tartó értesítése mellett és költségére elszállítással eltávolíthatja azt a járművet, amely',
        alpontok: {
          a: {
            id: '59_1_a',
            szoveg:
              'A  megállást vagy várakozást tiltó jelzőtábla hatálya alá eső területen szabálytalanul várakozik.',
          },
          b: {
            id: '59_1_b',
            szoveg:
              'A 37. § (4) bekezdésében, a 40. § (1)–(2) és (5) bekezdésében, valamint a 40. § (8) bekezdés b) és c) pontjában meghatározott megállási tilalom megszegésével, vagy az ott meghatározott megállási feltételek figyelmen kívül hagyásával szabálytalanul várakozik.',
          },
          c: {
            id: '59_1_c',
            szoveg: 'Kijelölt rakodóhelyen szabálytalanul tartózkodik.',
          },
          d: {
            id: '59_1_d',
            szoveg:
              'A mozgáskorlátozottak gépkocsijai részére fenntartott, jelzőtáblával vagy útburkolati jellel megjelölt várakozóhelyen jogosulatlanul várakozik.',
          },
        },
      },

      '2': {
        id: '59_2',
        szoveg:
          'Közveszély vagy elemi csapás elhárítása, illetőleg az ebből származó kár csökkentése érdekében, valamint a közút különleges igénybevétele esetében a rendőrhatóság felhívhatja az üzemben tartót a jármű eltávolítására. Ha az üzemben tartó a kellő időben közölt felhívásnak nem tesz eleget, a rendőrhatóság a járművet az üzemben tartó költségére eltávolíttathatja. Ha az üzemben tartó a jármű eltávolítására előzetesen nem hívható fel, a rendőrhatóság a járművet saját költségére távolíttathatja el; az üzemben tartót a jármű eltávolításáról ilyen esetben is értesíteni kell. A járművet a tűzoltóság is eltávolíthatja, erről azonban a rendőrhatóságot is értesítenie kell. E rendelkezéseket kell alkalmazni a baleset folytán megsérült és elhagyott járművek eltávolítására is.',
      },

      '3': {
        id: '59_3',
        szoveg:
          'Azt a hatósági jelzéssel nem rendelkező járművet, amely a közúti forgalomban csak ilyen jelzéssel vehet részt, főútvonalon tilos, mellékútvonalon közterület-használati engedély nélkül legfeljebb tíz napig szabad tárolni. Az úton e rendelkezések megszegésével tárolt járművet a rendőrség, a közterület-felügyelet vagy a közút kezelője a tulajdonos költségére eltávolíthatja.',
      },
    },
  },
  '60': {
    paragrafus: '60',
    cim: '60. § – A járművet javító műhelyre vonatkozó rendelkezések',

    bekezdesek: {
      '1': {
        id: '60_1',
        szoveg:
          'A jármű biztonsági berendezéseinek javítását, karbantartását, illetve ellenőrzését végző vállalat, szövetkezet vagy kisiparos felelős azért, hogy a javítást, a karbantartást, illetve az ellenőrzést szabályszerűen elvégezték.',
      },

      '2': {
        id: '60_2',
        szoveg:
          'A javítást végző vállalat, szövetkezet vagy kisiparos köteles a rendőrhatóságnak haladéktalanul bejelenteni a tudomására jutott olyan járműrongálódást, amelyről alaposan feltehető, hogy személysérüléssel járó baleset folytán keletkezett.',
      },
    },
  },
  '61': {
    paragrafus: '61',
    cim: '61. § – A járművek üzemben tartóira vonatkozó külön rendelkezések',

    bekezdesek: {
      '3': {
        id: '61_3',
        szoveg:
          'Veszélyes anyagot szállító jármű üzemben tartója köteles gondoskodni arról, hogy a jármű vezetője megfelelően képzett legyen, az adott szállításhoz megfelelő bizonyítvánnyal rendelkezzen, a szükséges tudnivalókat ismerje, és a jármű az előírt felszerelésekkel rendelkezzen.',
      },

      '4': {
        id: '61_4',
        szoveg:
          'A járművet üzemben tartó közületi szerv köteles a rendőrhatóságnak haladéktalanul bejelenteni a tudomására jutott olyan járműrongálódást, amelyről alaposan feltehető, hogy személysérüléssel járó baleset folytán keletkezett, tekintet nélkül arra, hogy a közületi szervnek van-e saját javító műhelye.',
      },
    },
  },
  '62': {
    paragrafus: '62',
    cim: '62. § – Állatok hajtása (vezetése)',

    bekezdesek: {
      '1': {
        id: '62_1',
        szoveg:
          'Állatot szorosan az úttest szélén kell hajtani, illetve vezetni; ha azonban ez a forgalmat lényegesen akadályozná, az állattal a leállósávra, illetve az útpadkára kell lehúzódni.',
      },

      '2': {
        id: '62_2',
        szoveg:
          'Az úton állatot olyan személy hajthat, illetve vezethet, aki az állatot irányítani képes és meg tudja akadályozni azt, hogy az állat a személy- és vagyonbiztonságot veszélyeztesse. Az állatok csoportos hajtásához annyi hajtó szükséges, amennyi e feltételek teljesítéséhez elegendő. Az állatot hajtónak, illetve vezetőnek – ha a lakott területen kívüli út úttestjén vagy leállósávján tartózkodik – éjszaka és korlátozott látási viszonyok esetén fényvisszaverő mellényt vagy ruházatot kell viselnie.',
      },

      '3': {
        id: '62_3',
        szoveg:
          'Vasúti átjárón állatokat csak kisebb, legfeljebb tíz állatból álló csoportokban szabad áthajtani.',
      },

      '4': {
        id: '62_4',
        szoveg:
          'Éjszaka és korlátozott látási viszonyok között az állat, illetve állatcsoport bal oldalán előre fehér vagy sárga fényt, hátra piros vagy sárga fényt adó, a járművek vezetői által kellő távolságból észlelhető lámpát kell vinni.',
      },

      '5': {
        id: '62_5',
        szoveg: 'Tilos',
        alpontok: {
          a: {
            id: '62_5_a',
            szoveg:
              'Főútvonalon állatot hajtani, illetve vezetni, kivéve ha más út vagy útszakasz nem áll rendelkezésre.',
          },
          b: {
            id: '62_5_b',
            szoveg:
              'Állati erővel vont jármű bal oldalához és más járműhöz állatot, valamint állati erővel vont jármű után kettőnél több állatot kötni.',
          },
          c: {
            id: '62_5_c',
            szoveg:
              'Állatot az úton őrizetlenül hagyni, kivéve ha oly módon megkötötték, hogy elindulni ne tudjon.',
          },
        },
      },

      '6': {
        id: '62_6',
        szoveg:
          'Állatot az út közelében – magánterületen is – csak oly módon szabad tartani, hogy az útra ne juthasson.',
      },

      '7': {
        id: '62_7',
        szoveg:
          'Az e §-ban foglalt rendelkezések nem vonatkoznak a kutyának pórázon való vezetésére, kivéve azt az előírást, hogy az úton állatot csak olyan személy hajthat vagy vezethet, aki az állatot irányítani képes és meg tudja akadályozni azt, hogy az állat a személy- és vagyonbiztonságot veszélyeztesse; a kutyát pórázon vezető személyre a gyalogosokra vonatkozó rendelkezések az irányadók.',
      },
    },
  },
  '63': {
    paragrafus: '63',
    cim: '63. § – Az utak igénybevételével kapcsolatos egyéb szabályok',

    bekezdesek: {
      '1': {
        id: '63_1',
        szoveg:
          'Aki a közutat vagy a közúti jelzést megrongálta, beszennyezte vagy a közútra a közlekedés biztonságát, zavartalanságát hátrányosan befolyásoló tárgyat juttatott, köteles a keletkező veszély elhárításáról gondoskodni, illetve ameddig az nem lehetséges, a veszélyről a közlekedés többi résztvevőjét tájékoztatni.',
      },

      '2': {
        id: '63_2',
        szoveg:
          'Földútról szilárd burkolatú útra való ráhajtás előtt a járműről a rátapadt sarat, amely a szilárd burkolatú utat beszennyezheti, el kell távolítani.',
      },

      '3': {
        id: '63_3',
        szoveg:
          'Tilos az úton olyan tárgyat csúsztatni, illetve vontatni, amely ezáltal az utat megrongálhatja.',
      },

      '4': {
        id: '63_4',
        szoveg: 'A közúti forgalom ellenőrzése során',
        alpontok: {
          a: {
            id: '63_4_a',
            szoveg: 'A közúti forgalom ellenőrzését végző berendezést.',
          },
          b: {
            id: '63_4_b',
            szoveg:
              'Azt a járművet, amelyben a közúti forgalom ellenőrzését végző berendezés üzemel.',
          },
        },
      },

      '5': {
        id: '63_5',
        szoveg:
          'A (4) bekezdés b) pontjában meghatározott jármű a járműforgalom elől elzárt területen, továbbá a közútnak azon a részén is elhelyezhető, ahol a járművek megállása vagy várakozása tilos.',
      },
    },
  },
};

export const torveny: Record<string, TorvenyItem> = {
  '12/2007 IRM rendelet': {
    tv: '12/2007 IRM rendelet a megkülönböztető és figyelmeztető jelzést adó készülékek felszerelésének és használatának szabályairól',
    url: 'https://njt.hu/jogszabaly/2007-12-20-1U',

    paragrafusok: {
      '2': {
        children: {
          '1': {
            text: 'A gépjárműre megkülönböztető jelzést adó készüléket csak hatósági engedéllyel lehet felszerelni.',
          },
        },
      },
    },
  },

  '326/2011. (XII.28.) Korm. r.': {
    tv: '326/2011. (XII.28.) Korm. rend. a közúti közlekedési igazgatási feladatokról, a közúti közlekedési okmányok kiadásáról és visszavonásáról',
    url: 'https://njt.hu/jogszabaly/2011-326-20-22',

    paragrafusok: {
      '5': {
        text: '',
        children: {
          '5': {
            text: 'A vezetői engedély vezetési jogosultság igazolására a következő határidőig alkalmas \n a) a vezetői engedély hátoldalán a 11. pontban feltüntetett kategória érvényesség időpontjáig, amely az egészségi alkalmassági vizsgálaton megállapított időpont, /n b) az egészségi alkalmassági vizsgálat nélkül is vezethető kategóriákra a vezetői engedély első oldalán a 4.b) pontban feltüntetett érvényesség időpontjáig, de legfeljebb a vezetői engedély kiállítását követő tíz évig.',
          },
        },
      },

      '69': {
        children: {
          '3': {
            text: 'Az M betűjelű ideiglenes rendszámtáblával ellátott jármű vezetője köteles igazolni...',
          },
        },
      },

      '70': {
        children: {
          '3': {
            text: 'P betűjelű ideiglenes rendszám csak megfelelő képesítéssel vezethető.',
          },
          '5': {
            text: 'P rendszámmal személy- és teherszállítás tilos.',
          },
        },
      },

      '93': {
        children: {
          '2': {
            text: 'Az M betűjelű ideiglenes rendszámtáblát csak az indítási naplóban bejegyzett járműre lehet felszerelni.',
          },
        },
      },
    },
  },

  '2012. évi II. törvény': {
    tv: '2012. évi II. törvény a szabálysértésekről, a szabálysértési eljárásról és a szabálysértési nyilvántartási rendszerről',
    url: 'https://njt.hu/jogszabaly/2012-2-00-00.79',

    paragrafusok: {
      '172': {
        text: '',
        children: {
          '1': {
            text: 'Aki törvényben vagy törvény felhatalmazása alapján hozott önkormányzati rendeletben a szexuális szolgáltatással összefüggő korlátozást, illetve tilalmat megszegi, szabálysértést követ el.',
          },
          '2': {
            text: 'Nem büntethető a szexuális szolgáltatásra felajánlkozás tilalmának megszegése miatt az elkövető, ha a cselekmény elkövetésekor a tizennyolcadik életévét nem töltötte be.',
          },
          '3': {
            text: 'Ha a helyszínen kétséget kizáróan megállapítást nyer, hogy a szexuális szolgáltatásra felajánlkozás tilalmát megszegő személy a tizennyolcadik életévét nem töltötte be, a szabálysértési eljárás megindításának vele szemben nincs helye.',
          },
          '4': {
            text: 'A szexuális szolgáltatásra felajánlkozás tilalmát megszegő, a (2) bekezdés alapján nem büntethető személyt, ha a tényállás tisztázásához szükséges, előkészítő eljárásban tanúként kell meghallgatni.',
          },
          '5': {
            text: ' Ha a (3) vagy a (4) bekezdés alapján megállapítást nyer, hogy a szexuális szolgáltatásra felajánlkozás tilalmát megszegő személy a tizennyolcadik életévét nem töltötte be, a rendőrség – a gyermekek védelméről és a gyámügyi igazgatásról szóló törvény alapján – a szexuális szolgáltatásra felajánlkozás tilalmát megszegő személy védelmében azonnal végrehajtható általános védelmi intézkedést hoz, amely döntéséről értesíti a gyámhatóságot, valamint gondoskodik az elhelyezéséről vagy a szállításáról.',
          },
        },
      },
      '176': {
        text: '',
        children: {
          '1': {
            text: 'Aki vasúti járművet, légi járművet, gépi meghajtású vízi járművet, úszó munkagépet, illetve a közúti forgalomban gépi meghajtású járművet úgy vezet, hogy annak vezetésére hatósági engedéllyel nem rendelkezik, szabálysértést követ el.',
          },
          '2': {
            text: 'Aki vasúti jármű, légi jármű, gépi meghajtású vízi jármű, úszó munkagép, illetve a közúti forgalomban gépi meghajtású jármű vezetését olyan személy részére átengedi, aki annak vezetésére hatósági engedéllyel nem rendelkezik, szabálysértést követ el.',
          },
        },
      },
      '177': {
        text: '',
        children: {
          '1': {
            text: 'Aki \n a) ötvenezer forintot meg nem haladó értékre lopást, sikkasztást, jogtalan elsajátítást, \n b) ötvenezer forintot meg nem haladó kárt okozva csalást, szándékos rongálást, \n c) ötvenezer forintot meg nem haladó vagyoni hátrányt okozva hűtlen kezelést \n követ el, úgyszintén, aki e cselekmények elkövetését megkísérli, szabálysértést követ el. ',
          },

          '1a': {
            text: '  Aki lopásból, sikkasztásból, csalásból, hűtlen kezelésből, rablásból, kifosztásból, zsarolásból vagy jogtalan elsajátításból származó dolgot vagyoni haszonszerzés végett ötvenezer forintot meg nem haladó értékben megszerez, elrejt vagy elidegenítésében közreműködik, szabálysértést követ el.',
          },
          '2': {
            text: 'Aki idegen, nem gépi meghajtású járművet mástól azért vesz el, hogy jogtalanul használja, szabálysértést követ el.',
          },
          '2a': {
            text: 'Aki földmérési jelet vagy az államhatár megjelölésére szolgáló jelet elvisz, áthelyez vagy elmozdít, szabálysértést követ el.',
          },
          '3': {
            text: 'Aki a kulturális örökség védett elemeit, a vármegye-, város-, községhatár vagy a birtokhatár megjelölésére szolgáló hivatalos jelet vagy létesítményt, tömegközlekedési vagy távközlési eszközt, közúti jelzést, parkot vagy ahhoz tartozó felszerelést, természetvédelmi hatósági és tájékoztató táblát vagy egyéb közérdeket szolgáló jelet vagy létesítményt gondatlanul megsemmisít, megrongál, elvisz, áthelyez vagy elmozdít, szabálysértést követ el.',
          },
        },
      },
      '185': {
        text: '',
        children: {
          '1': {
            text: 'Aki gyermekkorú személy társaságában koldul, szabálysértést követ el.',
          },
          '2': {
            text: 'Aki közterületen vagy nyilvános helyen, olyan módon koldul, hogy a járókelőket, illetve a nyilvános helyen jelenlévőket pénz átadása céljából leszólítja, továbbá az is, aki házról házra, illetve lakásról lakásra járva kéreget, szabálysértést követ el.',
          },
          '3': {
            text: 'A szabálysértési hatóság, valamint a helyszíni bírságolásra jogosult szerv vagy személy haladéktalanul értesíti az (1) bekezdésben meghatározott szabálysértés tényéről, az érintett gyermek és az elkövető adatairól a gyermek lakóhelye szerint illetékes gyermekjóléti szolgálatot.',
          },
          '4': {
            text: 'Az (1) és (2) bekezdésben meghatározott szabálysértés miatt a közterület-felügyelő is szabhat ki helyszíni bírságot.',
          },
        },
      },
      '192': {
        text: '',
        children: {
          '1': {
            text: 'Aki a közterületen, nyilvános helyen vagy közforgalmú közlekedési eszközön a közerkölcsbe ütköző magatartást tanúsít, szabálysértést követ el.',
          },
          '2': {
            text: ' Az (1) bekezdésben meghatározott szabálysértés miatt a közterület-felügyelő is szabhat ki helyszíni bírságot.',
          },
        },
      },
      '194': {
        text: ' (1) Aki abból a célból, hogy a büntetés-végrehajtási intézetben fogvatartottal kapcsolatot teremtsen \n a) a büntetés-végrehajtási intézetbe történő bekiabálással, \n b) feliratok vagy fényjelzések alkalmazásával, \n c) a büntetés-végrehajtási intézetbe tárgyak bedobálásával vagy annak megkísérlésével vagy \n d) az a)–c) pontban meghatározott magatartásokhoz hasonló más módon a közterület használatának, vagy a lakó- vagy más épületben tartózkodók nyugalmának megzavarására alkalmas magatartást tanúsít, szabálysértést követ el. \n \n 194/A. § Aki a fogvatartás rendjét szándékosan megsértve olyan tárgyat juttat be a büntetés-végrehajtási intézet területére, amely alkalmas a fogvatartás biztonságának veszélyeztetésére, szabálysértést követ el.',
        children: {
          a: {
            text: 'a büntetés-végrehajtási intézetbe történő bekiabálással,',
          },
          b: {
            text: 'feliratok vagy fényjelzések alkalmazásával,',
          },
          c: {
            text: 'a büntetés-végrehajtási intézetbe tárgyak bedobálásával vagy annak megkísérlésével vagy',
          },
          d: {
            text: 'az a)–c) pontban meghatározott magatartásokhoz hasonló más módon a közterület használatának, vagy a lakó- vagy más épületben tartózkodók nyugalmának megzavarására alkalmas magatartást tanúsít, szabálysértést követ el.',
          },
        },
      },
      '195': {
        text: '',
        children: {
          1: {
            text: 'Aki lakott területen, az ott levő épületben, vagy az ahhoz tartozó telken, tömegközlekedési eszközön, továbbá természeti és védett természeti területen indokolatlanul zajt okoz, amely alkalmas arra, hogy mások nyugalmát, illetve a természeti vagy a védett természeti értéket zavarja, szabálysértést követ el.',
          },
          2: {
            text: 'Az (1) bekezdésben meghatározott szabálysértés miatt a közterület-felügyelő, természeti és védett természeti területen a természetvédelmi őr és helyi jelentőségű védett természeti területen az önkormányzati természetvédelmi őr is szabhat ki helyszíni bírságot.',
          },
        },
      },
      '196': {
        text: '',
        children: {
          1: {
            text: 'Aki \n a)   a közterületet, a közforgalom céljait szolgáló épületet, vagy a közforgalmú közlekedési eszközt beszennyezi, \n b)  a felügyelete alatt lévő állat által az a) pontban megjelölt helyen okozott szennyezés megszüntetéséről nem gondoskodik, szabálysértést követ el.',
          },
          2: {
            text: 'a) Köztisztasági szabálysértés miatt nem vonható felelősségre az a fogyatékos személyek jogairól és esélyegyenlőségük biztosításáról szóló törvény alapján fogyatékos személynek minősülő személy, aki az (1) bekezdés b) pontjában meghatározott cselekményt a felügyelete alatt lévő vakvezető, illetve mozgáskorlátozottakat segítő kutyára vonatkozóan követi el.',
          },
        },
      },
      '200': {
        text: '',
        children: {
          '1': {
            text: 'Aki \n a) a szeszes ital árusítására vagy a közterületen történő fogyasztására vonatkozó – törvényben, kormányrendeletben vagy önkormányzati rendeletben meghatározott – tilalmat megszegi, \n b) vendéglátó üzletben tizennyolcadik életévét be nem töltött személy részére szeszes italt szolgál ki, \n c) a szeszes ital eladása során közterületen vagy nyilvános helyen szemmel láthatóan részeg állapotban lévő személynek szeszes italt szolgál ki, \n d) közterületen vagy nyilvános helyen fiatalkorút szándékosan lerészegít, \n szabálysértést követ el.',
          },
        },
      },
      '202': {
        text: '',
        children: {
          '1': {
            text: ' Aki a szabad vizek jegén való tartózkodás szabályait megszegi, szabálysértést követ el. \n \n 202/A. § Tiltott fürdés \n (1) Aki tiltott helyen fürdik, szabálysértést követ el. ',
          },
        },
      },
      '207': {
        text: '',
        children: {
          '1': {
            text: 'Aki személyazonosító igazolványra vonatkozó jogszabályban előírt kötelezettségét megszegi, az igazoltatásra feljogosított személy felszólítására személyi adatainak bemondását, a digitális államról és a digitális szolgáltatások nyújtásának egyes szabályairól szóló törvényben meghatározott digitális okmány vagy adattároló kód hozzáférhetővé tételét vagy a személyazonosság igazolására alkalmas hatósági igazolvány átadását megtagadja, vagy az említett adatokra vonatkozólag az intézkedés során valótlant állít, szabálysértést követ el.',
          },
        },
      },
      '208': {
        text: '',
        children: {
          '1': {
            text: 'Aki a külföldiek bejelentésére, jelentkezésére vagy az ország területén tartózkodására vonatkozó szabályokat megszegi – ideértve azt az esetet is, ha a külföldi a kiutasító határozatban, illetve a bírói kiutasítás végrehajtásáról rendelkező végzésben meghatározott határnapot követő napig Magyarország területét nem hagyta el, attól függetlenül, hogy kitoloncolásra sor került-e –, szabálysértést követ el.',
          },
        },
      },
      '217': {
        text: '',
        children: {
          a: {
            text: 'vasúti vagy légi járművet, gépi meghajtású vízi járművet, úszó munkagépet, illetve nem gépi meghajtású vízi járművet úgy vezet, hogy szervezetében szeszes ital fogyasztásából származó alkohol van, szabálysértést követ el',
          },
          b: {
            text: 'vasúti vagy légi jármű, gépi meghajtású vízi jármű, úszó munkagép, illetve közúton vagy a közforgalom elől el nem zárt magánúton gépi meghajtású jármű vezetését olyan személynek engedi át, akinek a szervezetében szeszes ital fogyasztásából származó alkohol van,szabálysértést követ el.',
          },
        },
      },

      '218': {
        text: 'Az elsőbbség és az előzés szabályainak megsértése. 218. § Annak a járműnek a vezetője, aki az elsőbbségre vagy az előzésre vonatkozó szabályokat megszegi, szabálysértést követ el.',
      },

      '219': {
        text: '',
        children: {
          '1': {
            text: 'Aki a közúti közlekedés szabályait megszegi és ezzel veszélyt okoz, szabálysértést követ el.',
          },
        },
      },
      '221': {
        text: 'Érvénytelen hatósági engedéllyel vagy jelzéssel való közlekedés. 221. § Aki érvénytelen hatósági engedéllyel vagy jelzéssel, illetve olyan járművel vesz részt a közúti forgalomban, amelynek a műszaki érvényességi ideje lejárt, szabálysértést követ el. \n b) közterületen lévő gépjárműben engedély nélkül birtokol, szabálysértést követ el.',
      },
      '223': {
        text: 'Aki a megkülönböztető fényjelzést vagy a hangjelzést adó készüléket \n a) gépjárműre jogosulatlanul felszerel (felhelyez),\n b) közterületen lévő gépjárműben engedély nélkül birtokol, szabálysértést követ el.',
        children: {
          a: {
            text: 'gépjárműre jogosulatlanul felszerel (felhelyez),',
          },
          b: {
            text: 'közterületen lévő gépjárműben engedély nélkül birtokol, szabálysértést követ el.',
          },
        },
      },
      '224': {
        text: '',
        children: {
          '1': {
            text: 'Aki a közúti közlekedés szabályairól szóló 1/1975. (II. 5.) KPM–BM együttes rendeletben (a továbbiakban: KRESZ) meghatározott közúti közlekedés szabályait megszegi, ha a 217–222. §-a szerinti szabálysértés nem valósul meg, szabálysértést követ el.',
          },
        },
      },
      '225': {
        '1': {
          text: 'Közúti közlekedési igazgatási szabályok megsértése. Aki a külön jogszabályban meghatározott közúti közlekedési igazgatási szabályokat megsérti, szabálysértést követ el.',
        },
      },
      '230': {
        text: 'Szmogriadó szabályainak mozgó légszennyező forrásokkal való megsértése.230. § Aki szmogriadó elrendelése esetén vagy annak megelőzése érdekében bevezetett, a mozgó légszennyező forrás használatára vonatkozó forgalomkorlátozásokat vagy intézkedéseket megsérti, szabálysértést követ el.',
      },
    },
  },
  '1999. évi LXXXIV. tv.': {
    tv: '1999. évi LXXXIV. tv. a közúti közlekedési nyilvántartásról',
    url: 'https://njt.hu/jogszabaly/1999-84-00-00.74',
    paragrafusok: {
      '33': {
        children: {
          '1': {
            text: 'A nyilvántartásba bejegyzett adatok módosítására okot adó körülmény bekövetkeztétől számított 15 napon belül köteles a bejegyzésre jogosult hatóságnál: \n a) a járművezető, a járműtulajdonos, az üzembentartó a természetes személyazonosító adatának megváltozását bejelenteni. \n b) a jármű új tulajdonosa a jármű tulajdonjoga megváltozását bejelenteni \n c) a járműtulajdonos az üzembentartó személye megváltozását és a járműokmányban megjelölt műszaki adatok változását bejelenteni \n d) a kereskedő a használt vagy bontásra vásárolt jármű azonosító adatainak változását bejelenteni',
            children: {
              a: {
                text: 'a járművezető, a járműtulajdonos, az üzembentartó a természetes személyazonosító adatának megváltozását bejelenteni',
              },
              b: {
                text: 'a jármű új tulajdonosa a jármű tulajdonjoga megváltozását bejelenteni',
              },
              c: {
                text: 'a járműtulajdonos az üzembentartó személye megváltozását és a műszaki adatok változását bejelenteni',
              },
              d: {
                text: 'a kereskedő a használt vagy bontásra vásárolt jármű azonosító adatainak változását bejelenteni',
              },
            },
          },
        },
      },
    },
  },
  '1996. évi LIII.tv': {
    tv: '1996. évi LIII.tv',
    url: 'https://net.jogtar.hu/jogszabaly?docid=99600053.tv',
    paragrafusok: {
      '38': {
        children: {
          '1': {
            text: 'Védett természeti területen a természetvédelmi hatóság engedélye szükséges különösen: \n j) járművel történő közlekedéshez, az arra kijelölt mezőgazdasági és erdészeti használatú utak, az engedélyezett tevékenységek végzéséhez szükséges munkagépek, valamint a feladatukat ellátó – külön jogszabályokban erre feljogosított – személyek járművei kivételével.',
          },
        },
      },
    },
  },
};

export const jogszabaly: Record<string, Jogszabaly> = {
  '1': {
    tv: '63/2012. (IV.2.) Korm. r.',
    text: 'az egyes közlekedési szabálysértések miatt alkalmazandó szabálysértési pénzbírság, illetve helyszíni bírság kötelező mértékéről',
    url: 'https://njt.hu/jogszabaly/2012-63-20-22',
  },
  '2': {
    tv: '156/2009. (VII.29.) Korm r.',
    text: 'a közúti árufuvarozáshoz, személyszállításhoz kapcsolódó rendelkezések megsértése esetén kiszabható bírságok összegéről',
    url: 'https://njt.hu/jogszabaly/2012-63-20-22',
  },
  '3': {
    tv: '410/2007. (XII. 29.) Korm. r.',
    text: 'a közigazgatási bírsággal sújtandó közlekedési szabályszegések köréről,..  kiszabható bírságok összegéről \n Pl: gyorshajtás : 1.melléklet ',
    url: 'https://njt.hu/jogszabaly/2007-410-20-22.25',
  },
  '4': {
    tv: '236/2000. (XII.23.) Korm. r.',
    text: 'a közúti közlekedési előéleti pontrendszerről ...',
    url: 'https://njt.hu/jogszabaly/2000-236-20-22',
  },
};
