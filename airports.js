const AIRPORT_DATA = {
  "Afghanistan": [
    {
      "icao": "OAHR",
      "iata": "HEA",
      "name": "Guzara - Herat - Khwaja Abdullah Ansari"
    },
    {
      "icao": "OAKB",
      "iata": "KBL",
      "name": "Kabul"
    },
    {
      "icao": "OAKN",
      "iata": "KDH",
      "name": "Kandahar - Ahmad Shah Baba"
    },
    {
      "icao": "OAMS",
      "iata": "MZR",
      "name": "Mazar-i-Sharif"
    },
    {
      "icao": "OAIX",
      "iata": "OAI",
      "name": "Bagram Airfield"
    },
    {
      "icao": "OAJL",
      "iata": "JAA",
      "name": "Jalalabad"
    },
    {
      "icao": "OAKS",
      "iata": "KHT",
      "name": "Khost"
    },
    {
      "icao": "OAUZ",
      "iata": "UND",
      "name": "Kunduz"
    },
    {
      "icao": "OAMN",
      "iata": "MMZ",
      "name": "Maymana Zahiraddin Faryabi"
    }
  ],
  "Albania": [
    {
      "icao": "LATI",
      "iata": "TIA",
      "name": "Rinas - Tirana International Airport Mother Teresa"
    },
    {
      "icao": "LAVL",
      "iata": "VLO",
      "name": "Vlorë - (Duplicate)Vlora"
    },
    {
      "icao": "LAKU",
      "iata": "KFZ",
      "name": "Kukës"
    },
    {
      "icao": "LAKV",
      "iata": "",
      "name": "Kuçovë Air Base"
    }
  ],
  "Algeria": [
    {
      "icao": "DAAG",
      "iata": "ALG",
      "name": "Algiers - Houari Boumediene"
    },
    {
      "icao": "DABB",
      "iata": "AAE",
      "name": "Annaba Rabah Bitat"
    },
    {
      "icao": "DABT",
      "iata": "BLJ",
      "name": "Batna Mostefa Ben Boulaid"
    },
    {
      "icao": "DAUB",
      "iata": "BSK",
      "name": "Biskra - Mohamed Khider"
    },
    {
      "icao": "DAAE",
      "iata": "BJA",
      "name": "Béjaïa - Soummam–Abane Ramdane"
    },
    {
      "icao": "DAOI",
      "iata": "CFK",
      "name": "Chlef Aboubakr Belkaid"
    },
    {
      "icao": "DABC",
      "iata": "CZL",
      "name": "Constantine - Mohamed Boudiaf"
    },
    {
      "icao": "DAOO",
      "iata": "ORN",
      "name": "Oran Es-Sénia (Ahmed Ben Bella)"
    },
    {
      "icao": "DAAV",
      "iata": "GJL",
      "name": "Tahir - Jijel Ferhat Abbas"
    },
    {
      "icao": "DAAT",
      "iata": "TMR",
      "name": "Tamanrasset - Aguenar – Hadj Bey Akhamok"
    },
    {
      "icao": "DAAJ",
      "iata": "DJG",
      "name": "Tiska Djanet"
    },
    {
      "icao": "DAON",
      "iata": "TLM",
      "name": "Zenata – Messali El Hadj"
    },
    {
      "icao": "DAUA",
      "iata": "AZR",
      "name": "Adrar - Touat-Cheikh Sidi Mohamed Belkebir"
    },
    {
      "icao": "DAAB",
      "iata": "",
      "name": "Blida"
    },
    {
      "icao": "DAAK",
      "iata": "",
      "name": "Boufarik Air Base"
    },
    {
      "icao": "DAOR",
      "iata": "CBH",
      "name": "Béchar Boudghene Ben Ali Lotfi"
    },
    {
      "icao": "DABS",
      "iata": "TEE",
      "name": "Cheikh Larbi Tébessi"
    },
    {
      "icao": "DAUG",
      "iata": "GHA",
      "name": "El Atteuf - Noumérat - Moufdi Zakaria"
    },
    {
      "icao": "DAUE",
      "iata": "ELG",
      "name": "El Menia - El Golea"
    },
    {
      "icao": "DAOV",
      "iata": "MUW",
      "name": "Ghriss"
    },
    {
      "icao": "DAUO",
      "iata": "ELU",
      "name": "Guemar Airport - مطار قمار بالوادي"
    },
    {
      "icao": "DAUH",
      "iata": "HME",
      "name": "Hassi Messaoud-Oued Irara Krim Belkacem"
    },
    {
      "icao": "DAFH",
      "iata": "HRM",
      "name": "Hassi R'Mel"
    },
    {
      "icao": "DAAP",
      "iata": "VVZ",
      "name": "Illizi Takhamalt"
    },
    {
      "icao": "DAUI",
      "iata": "INZ",
      "name": "In Salah"
    },
    {
      "icao": "DAUL",
      "iata": "LOO",
      "name": "Laghouat - Molay Ahmed Medeghri"
    },
    {
      "icao": "DAAY",
      "iata": "MZW",
      "name": "Mecheria"
    },
    {
      "icao": "DAOL",
      "iata": "TAF",
      "name": "Oran Tafraoui"
    },
    {
      "icao": "DAUU",
      "iata": "OGX",
      "name": "Ouargla - Ain Beida"
    },
    {
      "icao": "DAAD",
      "iata": "BUJ",
      "name": "Ouled Sidi Brahim - Bou Saada"
    },
    {
      "icao": "DAAZ",
      "iata": "",
      "name": "Relizane"
    },
    {
      "icao": "DAAS",
      "iata": "QSF",
      "name": "Sétif - Ain Arnat"
    },
    {
      "icao": "DAOB",
      "iata": "TID",
      "name": "Tiaret - Abdelhafid Boussouf Bou Chekif"
    },
    {
      "icao": "DAUT",
      "iata": "TMX",
      "name": "Timimoun"
    },
    {
      "icao": "DAOF",
      "iata": "TIN",
      "name": "Tindouf"
    },
    {
      "icao": "DAUK",
      "iata": "TGR",
      "name": "Touggourt Sidi Madhi"
    },
    {
      "icao": "DAUZ",
      "iata": "IAM",
      "name": "Zarzaitine - In Aménas"
    }
  ],
  "American Samoa": [
    {
      "icao": "NSTU",
      "iata": "PPG",
      "name": "Pago Pago"
    }
  ],
  "Angola": [
    {
      "icao": "FNBJ",
      "iata": "NBJ",
      "name": "Luanda (Ícolo e Bengo) - Dr. Antonio Agostinho Neto"
    },
    {
      "icao": "FNLU",
      "iata": "LAD",
      "name": "Luanda - Quatro de Fevereiro"
    },
    {
      "icao": "FNBG",
      "iata": "BUG",
      "name": "Benguela"
    },
    {
      "icao": "FNCA",
      "iata": "CAB",
      "name": "Cabinda"
    },
    {
      "icao": "FNCT",
      "iata": "CBT",
      "name": "Catumbela"
    },
    {
      "icao": "FNDU",
      "iata": "DUE",
      "name": "Chitato - Dundo"
    },
    {
      "icao": "FNHU",
      "iata": "NOV",
      "name": "Huambo - Albano Machado"
    },
    {
      "icao": "FNKU",
      "iata": "SVP",
      "name": "Kuito"
    },
    {
      "icao": "FNUB",
      "iata": "SDD",
      "name": "Lubango Mukanka"
    },
    {
      "icao": "FNUE",
      "iata": "LUO",
      "name": "Luena"
    },
    {
      "icao": "FNMA",
      "iata": "MEG",
      "name": "Malanje"
    },
    {
      "icao": "FNBC",
      "iata": "SSY",
      "name": "Mbanza Congo"
    },
    {
      "icao": "FNME",
      "iata": "SPP",
      "name": "Menongue"
    },
    {
      "icao": "FNMO",
      "iata": "MSZ",
      "name": "Moçâmedes - Welwitschia Mirabilis"
    },
    {
      "icao": "FNNG",
      "iata": "GXG",
      "name": "Negage"
    },
    {
      "icao": "FNGI",
      "iata": "VPE",
      "name": "Ngiva - Ngjiva Pereira"
    },
    {
      "icao": "FNPA",
      "iata": "PBN",
      "name": "Port Amboim - Porto Amboim"
    },
    {
      "icao": "FNSA",
      "iata": "VHC",
      "name": "Saurimo"
    },
    {
      "icao": "FNSO",
      "iata": "SZA",
      "name": "Soyo"
    },
    {
      "icao": "FNSU",
      "iata": "NDD",
      "name": "Sumbe"
    },
    {
      "icao": "FNUG",
      "iata": "UGO",
      "name": "Uige"
    },
    {
      "icao": "FNXA",
      "iata": "XGN",
      "name": "Xangongo"
    }
  ],
  "Anguilla": [
    {
      "icao": "TQPF",
      "iata": "AXA",
      "name": "The Valley - Clayton J. Lloyd"
    }
  ],
  "Antarctica": [
    {
      "icao": "NZSP",
      "iata": "",
      "name": "Amundsen-Scott South Pole Station - Amundsen–Scott South Pole Station"
    }
  ],
  "Antigua and Barbuda": [
    {
      "icao": "TAPA",
      "iata": "ANU",
      "name": "Osbourn - V. C. Bird"
    },
    {
      "icao": "TAPB",
      "iata": "BBQ",
      "name": "Codrington - Burton-Nibbs"
    }
  ],
  "Argentina": [
    {
      "icao": "SAEZ",
      "iata": "EZE",
      "name": "Buenos Aires (Ezeiza) - Ezeiza International Airport - Ministro Pistarini"
    },
    {
      "icao": "SABE",
      "iata": "AEP",
      "name": "Buenos Aires - Aeroparque Jorge Newbery"
    },
    {
      "icao": "SAVC",
      "iata": "CRD",
      "name": "Comodoro Rivadavia - General Enrique Mosconi"
    },
    {
      "icao": "SACO",
      "iata": "COR",
      "name": "Cordoba - Ingeniero Aeronáutico Ambrosio L.V. Taravella"
    },
    {
      "icao": "SAME",
      "iata": "MDZ",
      "name": "Mendoza - Governor Francisco Gabrielli"
    },
    {
      "icao": "SAZN",
      "iata": "NQN",
      "name": "Neuquén - Presidente Perón"
    },
    {
      "icao": "SARE",
      "iata": "RES",
      "name": "Resistencia"
    },
    {
      "icao": "SAWG",
      "iata": "RGL",
      "name": "Rio Gallegos - Piloto Civil Norberto Fernández"
    },
    {
      "icao": "SAAR",
      "iata": "ROS",
      "name": "Rosario Islas Malvinas"
    },
    {
      "icao": "SASA",
      "iata": "SLA",
      "name": "Salta - Martín Miguel de Güemes"
    },
    {
      "icao": "SAZS",
      "iata": "BRC",
      "name": "San Carlos de Bariloche - Teniente Luis Candelaria"
    },
    {
      "icao": "SANT",
      "iata": "TUC",
      "name": "San Miguel de Tucumán - Teniente Benjamín Matienzo"
    },
    {
      "icao": "SASJ",
      "iata": "JUJ",
      "name": "San Salvador de Jujuy - Gobernador Horacio Guzman"
    },
    {
      "icao": "SAZB",
      "iata": "BHI",
      "name": "Bahía Blanca - Comandante Espora"
    },
    {
      "icao": "SANC",
      "iata": "CTC",
      "name": "Catamarca - Coronel Felipe Varela"
    },
    {
      "icao": "SAZY",
      "iata": "CPC",
      "name": "Chapelco/San Martin de los Andes - Aviador C. Campos"
    },
    {
      "icao": "SAAC",
      "iata": "COC",
      "name": "Concordia - Comodoro Pierrestegui"
    },
    {
      "icao": "SARC",
      "iata": "CNQ",
      "name": "Corrientes"
    },
    {
      "icao": "SATU",
      "iata": "UZU",
      "name": "Curuzu Cuatia"
    },
    {
      "icao": "SAZW",
      "iata": "CUT",
      "name": "Cutral-Co"
    },
    {
      "icao": "SAVB",
      "iata": "EHL",
      "name": "El Bolsón Airfield"
    },
    {
      "icao": "SADP",
      "iata": "EPA",
      "name": "El Palomar"
    },
    {
      "icao": "SAVE",
      "iata": "EQS",
      "name": "Esquel Brigadier Antonio Parodi"
    },
    {
      "icao": "SARF",
      "iata": "FMA",
      "name": "Formosa National"
    },
    {
      "icao": "SAZG",
      "iata": "GPO",
      "name": "General Pico"
    },
    {
      "icao": "SATG",
      "iata": "OYA",
      "name": "Goya"
    },
    {
      "icao": "SAAG",
      "iata": "GHU",
      "name": "Gualeguaychu"
    },
    {
      "icao": "SADL",
      "iata": "LPG",
      "name": "La Plata"
    },
    {
      "icao": "SANL",
      "iata": "IRJ",
      "name": "La Rioja - Capitan V A Almonacid"
    },
    {
      "icao": "SAVH",
      "iata": "LHS",
      "name": "Las Heras"
    },
    {
      "icao": "SAMM",
      "iata": "LGS",
      "name": "Malargue - Comodoro D.R. Salomón"
    },
    {
      "icao": "SAZM",
      "iata": "MDQ",
      "name": "Mar del Plata - Ástor Piazzola"
    },
    {
      "icao": "SARM",
      "iata": "MCS",
      "name": "Monte Caseros"
    },
    {
      "icao": "SAZO",
      "iata": "NEC",
      "name": "Necochea"
    },
    {
      "icao": "SASO",
      "iata": "ORA",
      "name": "Orán"
    },
    {
      "icao": "SAAP",
      "iata": "PRA",
      "name": "Parana - General Urquiza"
    },
    {
      "icao": "SARL",
      "iata": "AOL",
      "name": "Paso De Los Libres"
    },
    {
      "icao": "SAZP",
      "iata": "PEH",
      "name": "Pehuajó - Comodoro Pedro Zanni"
    },
    {
      "icao": "SAWP",
      "iata": "PMQ",
      "name": "Perito Moreno Jalil Hamer"
    },
    {
      "icao": "SARP",
      "iata": "PSS",
      "name": "Posadas - Libertador Gral D Jose De San Martin"
    },
    {
      "icao": "SAWD",
      "iata": "PUD",
      "name": "Puerto Deseado"
    },
    {
      "icao": "SARI",
      "iata": "IGR",
      "name": "Puerto Iguazu - Cataratas Del Iguazú"
    },
    {
      "icao": "SAVY",
      "iata": "PMY",
      "name": "Puerto Madryn - El Tehuelche"
    },
    {
      "icao": "SAWU",
      "iata": "RZA",
      "name": "Puerto Santa Cruz - Santa Cruz"
    },
    {
      "icao": "SAVT",
      "iata": "REL",
      "name": "Rawson - Almirante Marco Andres Zar"
    },
    {
      "icao": "SATR",
      "iata": "RCQ",
      "name": "Reconquista"
    },
    {
      "icao": "SAHS",
      "iata": "RDS",
      "name": "Rincon De Los Sauces"
    },
    {
      "icao": "SAOC",
      "iata": "RCU",
      "name": "Rio Cuarto - Area De Material"
    },
    {
      "icao": "SAWE",
      "iata": "RGA",
      "name": "Rio Grande - Hermes Quijada"
    },
    {
      "icao": "SANU",
      "iata": "UAQ",
      "name": "San Juan - Domingo Faustino Sarmiento"
    },
    {
      "icao": "SAWJ",
      "iata": "ULA",
      "name": "San Julian - Capitan D Daniel Vazquez"
    },
    {
      "icao": "SAOU",
      "iata": "LUQ",
      "name": "San Luis - Brigadier Mayor D Cesar Raul Ojeda"
    },
    {
      "icao": "SAMR",
      "iata": "AFA",
      "name": "San Rafael - Suboficial Ay Santiago Germano"
    },
    {
      "icao": "SAAV",
      "iata": "SFN",
      "name": "Santa Fe - Sauce Viejo"
    },
    {
      "icao": "SAZR",
      "iata": "RSA",
      "name": "Santa Rosa"
    },
    {
      "icao": "SAZL",
      "iata": "SST",
      "name": "Santa Teresita"
    },
    {
      "icao": "SANE",
      "iata": "SDE",
      "name": "Santiago del Estero - Vicecomodoro Angel D. La Paz Aragonés"
    },
    {
      "icao": "SAZT",
      "iata": "TDL",
      "name": "Tandil - Héroes de Malvinas"
    },
    {
      "icao": "SAST",
      "iata": "TTG",
      "name": "Tartagal - General Enrique Mosconi"
    },
    {
      "icao": "SANR",
      "iata": "RHD",
      "name": "Termas de Río Hondo international"
    },
    {
      "icao": "SAZH",
      "iata": "OYO",
      "name": "Tres Arroyos"
    },
    {
      "icao": "SAWH",
      "iata": "USH",
      "name": "Ushuaia - Malvinas Argentinas"
    },
    {
      "icao": "SAVV",
      "iata": "VDM",
      "name": "Viedma / Carmen de Patagones - Gobernador Castello"
    },
    {
      "icao": "SAOD",
      "iata": "VDR",
      "name": "Villa Dolores"
    },
    {
      "icao": "SAZV",
      "iata": "VLG",
      "name": "Villa Gesell"
    },
    {
      "icao": "SAOR",
      "iata": "VME",
      "name": "Villa Mercedes - Villa Reynolds"
    },
    {
      "icao": "SAHZ",
      "iata": "APZ",
      "name": "Zapala"
    }
  ],
  "Armenia": [
    {
      "icao": "UDSG",
      "iata": "LWN",
      "name": "Gyumri - Shirak"
    },
    {
      "icao": "UDYZ",
      "iata": "EVN",
      "name": "Yerevan - Zvartnots"
    }
  ],
  "Aruba": [
    {
      "icao": "TNCA",
      "iata": "AUA",
      "name": "Oranjestad - Queen Beatrix"
    }
  ],
  "Australia": [
    {
      "icao": "YPAD",
      "iata": "ADL",
      "name": "Adelaide"
    },
    {
      "icao": "YBBN",
      "iata": "BNE",
      "name": "Brisbane"
    },
    {
      "icao": "YBRM",
      "iata": "BME",
      "name": "Broome"
    },
    {
      "icao": "YBCS",
      "iata": "CNS",
      "name": "Cairns"
    },
    {
      "icao": "YPDN",
      "iata": "DRW",
      "name": "Darwin International Airport / RAAF Darwin"
    },
    {
      "icao": "YMAV",
      "iata": "AVV",
      "name": "Geelong/Melbourne - Melbourne Avalon"
    },
    {
      "icao": "YBCG",
      "iata": "OOL",
      "name": "Gold Coast"
    },
    {
      "icao": "YMHB",
      "iata": "HBA",
      "name": "Hobart (Cambridge) - Hobart"
    },
    {
      "icao": "YBSU",
      "iata": "MCY",
      "name": "Maroochydore - Sunshine Coast"
    },
    {
      "icao": "YMML",
      "iata": "MEL",
      "name": "Melbourne"
    },
    {
      "icao": "YPPH",
      "iata": "PER",
      "name": "Perth"
    },
    {
      "icao": "YPPD",
      "iata": "PHE",
      "name": "Port Hedland"
    },
    {
      "icao": "YSSY",
      "iata": "SYD",
      "name": "Sydney (Mascot) - Sydney Kingsford Smith"
    },
    {
      "icao": "YBWW",
      "iata": "WTB",
      "name": "Toowoomba Wellcamp"
    },
    {
      "icao": "YWLM",
      "iata": "NTL",
      "name": "Williamtown - Newcastle"
    },
    {
      "icao": "YABA",
      "iata": "ALH",
      "name": "Albany"
    },
    {
      "icao": "YBAS",
      "iata": "ASP",
      "name": "Alice Springs"
    },
    {
      "icao": "YARA",
      "iata": "ARY",
      "name": "Ararat"
    },
    {
      "icao": "YARM",
      "iata": "ARM",
      "name": "Armidale"
    },
    {
      "icao": "YBNS",
      "iata": "BSJ",
      "name": "Bairnsdale"
    },
    {
      "icao": "YBNA",
      "iata": "BNK",
      "name": "Ballina Byron Gateway"
    },
    {
      "icao": "YBRN",
      "iata": "BZD",
      "name": "Balranald"
    },
    {
      "icao": "YBAR",
      "iata": "BCI",
      "name": "Barcaldine"
    },
    {
      "icao": "YBTH",
      "iata": "BHS",
      "name": "Bathurst"
    },
    {
      "icao": "YBIE",
      "iata": "BEU",
      "name": "Bedourie"
    },
    {
      "icao": "YBLA",
      "iata": "BLN",
      "name": "Benalla"
    },
    {
      "icao": "YTNG",
      "iata": "THG",
      "name": "Biloela - Thangool"
    },
    {
      "icao": "YBDV",
      "iata": "BVI",
      "name": "Birdsville"
    },
    {
      "icao": "YBCK",
      "iata": "BKQ",
      "name": "Blackall"
    },
    {
      "icao": "YBTR",
      "iata": "BLT",
      "name": "Blackwater"
    },
    {
      "icao": "YBOU",
      "iata": "BQL",
      "name": "Boulia"
    },
    {
      "icao": "YBKE",
      "iata": "BRK",
      "name": "Bourke"
    },
    {
      "icao": "YBRW",
      "iata": "BWQ",
      "name": "Brewarrina"
    },
    {
      "icao": "YPKG",
      "iata": "KGI",
      "name": "Broadwood - Kalgoorlie Boulder"
    },
    {
      "icao": "YBHI",
      "iata": "BHQ",
      "name": "Broken Hill"
    },
    {
      "icao": "YBUD",
      "iata": "BDB",
      "name": "Bundaberg"
    },
    {
      "icao": "YWYY",
      "iata": "BWT",
      "name": "Burnie - Wynyard"
    },
    {
      "icao": "YSCB",
      "iata": "CBR",
      "name": "Canberra"
    },
    {
      "icao": "YCAR",
      "iata": "CVQ",
      "name": "Carnarvon"
    },
    {
      "icao": "YCDU",
      "iata": "CED",
      "name": "Ceduna"
    },
    {
      "icao": "YBCV",
      "iata": "CTL",
      "name": "Charleville"
    },
    {
      "icao": "YCCA",
      "iata": "CCL",
      "name": "Chinchilla"
    },
    {
      "icao": "YCMT",
      "iata": "CMQ",
      "name": "Clermont"
    },
    {
      "icao": "YCEE",
      "iata": "CVC",
      "name": "Cleve"
    },
    {
      "icao": "YCCY",
      "iata": "CNJ",
      "name": "Cloncurry"
    },
    {
      "icao": "YCBA",
      "iata": "CAZ",
      "name": "Cobar"
    },
    {
      "icao": "YSCN",
      "iata": "CDU",
      "name": "Cobbitty - Camden"
    },
    {
      "icao": "YCOE",
      "iata": "CUQ",
      "name": "Coen"
    },
    {
      "icao": "YCFS",
      "iata": "CFS",
      "name": "Coffs Harbour"
    },
    {
      "icao": "YCBP",
      "iata": "CPD",
      "name": "Coober Pedy"
    },
    {
      "icao": "YCKN",
      "iata": "CTN",
      "name": "Cooktown"
    },
    {
      "icao": "YCOM",
      "iata": "OOM",
      "name": "Cooma Snowy Mountains"
    },
    {
      "icao": "YCBB",
      "iata": "COJ",
      "name": "Coonabarabran"
    },
    {
      "icao": "YCNM",
      "iata": "CNB",
      "name": "Coonamble"
    },
    {
      "icao": "YCTM",
      "iata": "CMD",
      "name": "Cootamundra"
    },
    {
      "icao": "YCOR",
      "iata": "CWW",
      "name": "Corowa"
    },
    {
      "icao": "YCRG",
      "iata": "CYG",
      "name": "Corryong"
    },
    {
      "icao": "YCWR",
      "iata": "CWT",
      "name": "Cowra"
    },
    {
      "icao": "YCMU",
      "iata": "CMA",
      "name": "Cunnamulla"
    },
    {
      "icao": "YSHK",
      "iata": "MJK",
      "name": "Denham - Shark Bay"
    },
    {
      "icao": "YDLQ",
      "iata": "DNQ",
      "name": "Deniliquin"
    },
    {
      "icao": "YDBY",
      "iata": "DRB",
      "name": "Derby"
    },
    {
      "icao": "YCIN",
      "iata": "DCN",
      "name": "Derby - RAAF Base Curtin"
    },
    {
      "icao": "YDPO",
      "iata": "DPO",
      "name": "Devonport"
    },
    {
      "icao": "YDBI",
      "iata": "DRN",
      "name": "Dirranbandi"
    },
    {
      "icao": "YSDU",
      "iata": "DBO",
      "name": "Dubbo City Regional"
    },
    {
      "icao": "YDYS",
      "iata": "DYA",
      "name": "Dysart"
    },
    {
      "icao": "YMAY",
      "iata": "ABX",
      "name": "East Albury - Albury"
    },
    {
      "icao": "YPKU",
      "iata": "KNX",
      "name": "East Kimberley Regional (Kununurra)"
    },
    {
      "icao": "YECH",
      "iata": "ECH",
      "name": "Echuca"
    },
    {
      "icao": "YELD",
      "iata": "ELC",
      "name": "Elcho Island"
    },
    {
      "icao": "YEML",
      "iata": "EMD",
      "name": "Emerald"
    },
    {
      "icao": "YESP",
      "iata": "EPR",
      "name": "Esperance"
    },
    {
      "icao": "YMEN",
      "iata": "MEB",
      "name": "Essendon Fields - Melbourne Essendon"
    },
    {
      "icao": "YPLM",
      "iata": "LEA",
      "name": "Exmouth - Learmonth"
    },
    {
      "icao": "YFTZ",
      "iata": "FIZ",
      "name": "Fitzroy Crossing"
    },
    {
      "icao": "YFBS",
      "iata": "FRB",
      "name": "Forbes"
    },
    {
      "icao": "YSWG",
      "iata": "WGA",
      "name": "Forest Hill - Wagga Wagga"
    },
    {
      "icao": "YFRT",
      "iata": "FOS",
      "name": "Forrest"
    },
    {
      "icao": "YGLA",
      "iata": "GLT",
      "name": "Gladstone"
    },
    {
      "icao": "YGLI",
      "iata": "GLI",
      "name": "Glen Innes"
    },
    {
      "icao": "YGLB",
      "iata": "GUL",
      "name": "Goulburn"
    },
    {
      "icao": "YGFN",
      "iata": "GFN",
      "name": "Grafton - Clarence Valley Regional"
    },
    {
      "icao": "YGTH",
      "iata": "GFF",
      "name": "Griffith"
    },
    {
      "icao": "YGTE",
      "iata": "GTE",
      "name": "Groote Eylandt"
    },
    {
      "icao": "YGDH",
      "iata": "GUH",
      "name": "Gunnedah"
    },
    {
      "icao": "YHLC",
      "iata": "HCQ",
      "name": "Halls Creek"
    },
    {
      "icao": "YHML",
      "iata": "HLT",
      "name": "Hamilton"
    },
    {
      "icao": "YBHM",
      "iata": "HTI",
      "name": "Hamilton Island"
    },
    {
      "icao": "YHAY",
      "iata": "HXX",
      "name": "Hay Airport"
    },
    {
      "icao": "YHBA",
      "iata": "HVB",
      "name": "Hervey Bay"
    },
    {
      "icao": "YHPN",
      "iata": "HTU",
      "name": "Hopetoun"
    },
    {
      "icao": "YHID",
      "iata": "HID",
      "name": "Horn Island"
    },
    {
      "icao": "YHSM",
      "iata": "HSM",
      "name": "Horsham"
    },
    {
      "icao": "YIVL",
      "iata": "IVR",
      "name": "Inverell"
    },
    {
      "icao": "YPKA",
      "iata": "KTA",
      "name": "Karratha"
    },
    {
      "icao": "YKMP",
      "iata": "KPS",
      "name": "Kempsey"
    },
    {
      "icao": "YKER",
      "iata": "KRA",
      "name": "Kerang"
    },
    {
      "icao": "YKII",
      "iata": "KNS",
      "name": "King Island"
    },
    {
      "icao": "YKRY",
      "iata": "KGY",
      "name": "Kingaroy"
    },
    {
      "icao": "YKSC",
      "iata": "KGC",
      "name": "Kingscote"
    },
    {
      "icao": "YKOW",
      "iata": "KWM",
      "name": "Kowanyama"
    },
    {
      "icao": "YWGT",
      "iata": "WGT",
      "name": "Laceby - Wangaratta"
    },
    {
      "icao": "YMLT",
      "iata": "LST",
      "name": "Launceston (Western Junction) - Launceston"
    },
    {
      "icao": "YLEC",
      "iata": "LGH",
      "name": "Leigh Creek"
    },
    {
      "icao": "YLST",
      "iata": "LER",
      "name": "Leinster"
    },
    {
      "icao": "YLEO",
      "iata": "LNO",
      "name": "Leonora"
    },
    {
      "icao": "YLRD",
      "iata": "LHG",
      "name": "Lightning Ridge"
    },
    {
      "icao": "YLIS",
      "iata": "LSY",
      "name": "Lismore"
    },
    {
      "icao": "YLHR",
      "iata": "IRG",
      "name": "Lockhart River"
    },
    {
      "icao": "YLRE",
      "iata": "LRE",
      "name": "Longreach"
    },
    {
      "icao": "YBMK",
      "iata": "MKY",
      "name": "Mackay"
    },
    {
      "icao": "YMGD",
      "iata": "MNG",
      "name": "Maningrida"
    },
    {
      "icao": "YMBA",
      "iata": "MRG",
      "name": "Mareeba"
    },
    {
      "icao": "YMRE",
      "iata": "RRE",
      "name": "Marree"
    },
    {
      "icao": "YMEK",
      "iata": "MKR",
      "name": "Meekatharra"
    },
    {
      "icao": "YMMB",
      "iata": "MBW",
      "name": "Melbourne Moorabbin"
    },
    {
      "icao": "YMER",
      "iata": "MIM",
      "name": "Merimbula"
    },
    {
      "icao": "YMIA",
      "iata": "MQL",
      "name": "Mildura"
    },
    {
      "icao": "YGEL",
      "iata": "GET",
      "name": "Moonyoonooka - Geraldton"
    },
    {
      "icao": "YMRB",
      "iata": "MOV",
      "name": "Moranbah"
    },
    {
      "icao": "YMOR",
      "iata": "MRZ",
      "name": "Moree"
    },
    {
      "icao": "YMRY",
      "iata": "MYA",
      "name": "Moruya"
    },
    {
      "icao": "YLTV",
      "iata": "TGN",
      "name": "Morwell - Latrobe Valley"
    },
    {
      "icao": "YMTG",
      "iata": "MGB",
      "name": "Mount Gambier"
    },
    {
      "icao": "YHOT",
      "iata": "MHU",
      "name": "Mount Hotham"
    },
    {
      "icao": "YBMA",
      "iata": "ISA",
      "name": "Mount Isa"
    },
    {
      "icao": "YMNE",
      "iata": "WME",
      "name": "Mount Keith"
    },
    {
      "icao": "YMOG",
      "iata": "MMG",
      "name": "Mount Magnet"
    },
    {
      "icao": "YMDG",
      "iata": "DGE",
      "name": "Mudgee"
    },
    {
      "icao": "YNKR",
      "iata": "",
      "name": "Nackeroo Airfield"
    },
    {
      "icao": "YNBR",
      "iata": "NAA",
      "name": "Narrabri"
    },
    {
      "icao": "YNAR",
      "iata": "NRA",
      "name": "Narrandera"
    },
    {
      "icao": "YNWN",
      "iata": "ZNE",
      "name": "Newman"
    },
    {
      "icao": "YNGU",
      "iata": "RPM",
      "name": "Ngukurr"
    },
    {
      "icao": "YPGV",
      "iata": "GOV",
      "name": "Nhulunbuy - Gove"
    },
    {
      "icao": "YNTN",
      "iata": "NTN",
      "name": "Normanton"
    },
    {
      "icao": "YSNW",
      "iata": "NOA",
      "name": "Nowra Hill - Naval Air Station Nowra - HMAS Albatross"
    },
    {
      "icao": "YBOK",
      "iata": "OKY",
      "name": "Oakey Army Aviation Centre"
    },
    {
      "icao": "YORG",
      "iata": "OAG",
      "name": "Orange"
    },
    {
      "icao": "YPBO",
      "iata": "PBO",
      "name": "Paraburdoo"
    },
    {
      "icao": "YPKS",
      "iata": "PKE",
      "name": "Parkes"
    },
    {
      "icao": "YPJT",
      "iata": "JAD",
      "name": "Perth Jandakot"
    },
    {
      "icao": "YGPT",
      "iata": "GPN",
      "name": "Pirlangimpi - Garden Point"
    },
    {
      "icao": "YPAG",
      "iata": "PUG",
      "name": "Port Augusta"
    },
    {
      "icao": "YPLC",
      "iata": "PLO",
      "name": "Port Lincoln"
    },
    {
      "icao": "YPMQ",
      "iata": "PQQ",
      "name": "Port Macquarie"
    },
    {
      "icao": "YPIR",
      "iata": "PPI",
      "name": "Port Pirie"
    },
    {
      "icao": "YPOD",
      "iata": "PTJ",
      "name": "Portland"
    },
    {
      "icao": "YBPN",
      "iata": "PPP",
      "name": "Proserpine Whitsunday Coast"
    },
    {
      "icao": "YQLP",
      "iata": "ULP",
      "name": "Quilpie"
    },
    {
      "icao": "YAMB",
      "iata": "",
      "name": "RAAF Base Amberley"
    },
    {
      "icao": "YSRI",
      "iata": "XRH",
      "name": "RAAF Base Richmond"
    },
    {
      "icao": "YREN",
      "iata": "RMK",
      "name": "Renmark"
    },
    {
      "icao": "YBRK",
      "iata": "ROK",
      "name": "Rockhampton"
    },
    {
      "icao": "YROM",
      "iata": "RMA",
      "name": "Roma"
    },
    {
      "icao": "YSHT",
      "iata": "SHT",
      "name": "Shepparton"
    },
    {
      "icao": "YSMI",
      "iata": "SIO",
      "name": "Smithton"
    },
    {
      "icao": "YSWL",
      "iata": "SWC",
      "name": "Stawell"
    },
    {
      "icao": "YSWH",
      "iata": "SWH",
      "name": "Swan Hill"
    },
    {
      "icao": "YSBK",
      "iata": "BWU",
      "name": "Sydney Bankstown"
    },
    {
      "icao": "YSTW",
      "iata": "TMW",
      "name": "Tamworth"
    },
    {
      "icao": "YTRE",
      "iata": "TRO",
      "name": "Taree"
    },
    {
      "icao": "YTEF",
      "iata": "TEF",
      "name": "Telfer"
    },
    {
      "icao": "YTEM",
      "iata": "TEM",
      "name": "Temora"
    },
    {
      "icao": "YTNK",
      "iata": "TCA",
      "name": "Tennant Creek"
    },
    {
      "icao": "YTGM",
      "iata": "XTG",
      "name": "Thargomindah"
    },
    {
      "icao": "YTIB",
      "iata": "TYB",
      "name": "Tibooburra"
    },
    {
      "icao": "YPTN",
      "iata": "KTR",
      "name": "Tindal"
    },
    {
      "icao": "YBTL",
      "iata": "TSV",
      "name": "Townsville Airport / RAAF Base Townsville"
    },
    {
      "icao": "YTMU",
      "iata": "TUM",
      "name": "Tumut Aerodrome"
    },
    {
      "icao": "YWLG",
      "iata": "WGE",
      "name": "Walgett"
    },
    {
      "icao": "YWKB",
      "iata": "WKB",
      "name": "Warracknabeal"
    },
    {
      "icao": "YBWP",
      "iata": "WEI",
      "name": "Weipa"
    },
    {
      "icao": "YWSL",
      "iata": "SXE",
      "name": "West Sale"
    },
    {
      "icao": "YWWL",
      "iata": "WWY",
      "name": "West Wyalong"
    },
    {
      "icao": "YWHA",
      "iata": "WYA",
      "name": "Whyalla"
    },
    {
      "icao": "YWLU",
      "iata": "WUN",
      "name": "Wiluna"
    },
    {
      "icao": "YWDH",
      "iata": "WNR",
      "name": "Windorah"
    },
    {
      "icao": "YWTN",
      "iata": "WIN",
      "name": "Winton"
    },
    {
      "icao": "YBTI",
      "iata": "BRT",
      "name": "Wurrumiyanga - Bathurst Island"
    },
    {
      "icao": "YYNG",
      "iata": "NGA",
      "name": "Young"
    },
    {
      "icao": "YAYE",
      "iata": "AYQ",
      "name": "Yulara - Ayers Rock Connellan"
    }
  ],
  "Austria": [
    {
      "icao": "LOWG",
      "iata": "GRZ",
      "name": "Feldkirchen bei Graz - Graz"
    },
    {
      "icao": "LOWI",
      "iata": "INN",
      "name": "Innsbruck"
    },
    {
      "icao": "LOWK",
      "iata": "KLU",
      "name": "Klagenfurt am Wörthersee - Klagenfurt"
    },
    {
      "icao": "LOWL",
      "iata": "LNZ",
      "name": "Linz-Hörsching"
    },
    {
      "icao": "LOWS",
      "iata": "SZG",
      "name": "Salzburg"
    },
    {
      "icao": "LOWW",
      "iata": "VIE",
      "name": "Vienna"
    },
    {
      "icao": "LOAN",
      "iata": "",
      "name": "Wiener Neustadt East"
    },
    {
      "icao": "LOXN",
      "iata": "",
      "name": "Wiener Neustadt West"
    },
    {
      "icao": "LOXZ",
      "iata": "",
      "name": "Zeltweg - Hinterstoisser Air Base"
    }
  ],
  "Azerbaijan": [
    {
      "icao": "UBBB",
      "iata": "GYD",
      "name": "Baku - Heydar Aliyev"
    },
    {
      "icao": "UBBG",
      "iata": "GNJ",
      "name": "Ganja"
    },
    {
      "icao": "UBBN",
      "iata": "NAJ",
      "name": "Nakhchivan"
    },
    {
      "icao": "UBBQ",
      "iata": "GBB",
      "name": "Gabala"
    },
    {
      "icao": "UBBS",
      "iata": "",
      "name": "Khojaly"
    },
    {
      "icao": "UBBI",
      "iata": "",
      "name": "Sumqayit - Nasosnaya Air Base"
    },
    {
      "icao": "UBTT",
      "iata": "ZXT",
      "name": "Zabrat"
    },
    {
      "icao": "UBBY",
      "iata": "ZTU",
      "name": "Zaqatala"
    }
  ],
  "Bahamas": [
    {
      "icao": "MYGF",
      "iata": "FPO",
      "name": "Freeport - Grand Bahama"
    },
    {
      "icao": "MYNN",
      "iata": "NAS",
      "name": "Nassau - Lynden Pindling"
    },
    {
      "icao": "MYSM",
      "iata": "ZSA",
      "name": "San Salvador"
    },
    {
      "icao": "MYMM",
      "iata": "MYG",
      "name": "Abraham Bay Settlement - Mayaguana"
    },
    {
      "icao": "MYAK",
      "iata": "TZN",
      "name": "Andros - Congo Town"
    },
    {
      "icao": "MYAN",
      "iata": "SAQ",
      "name": "Andros Island - San Andros"
    },
    {
      "icao": "MYAF",
      "iata": "ASD",
      "name": "Andros Town"
    },
    {
      "icao": "MYCA",
      "iata": "ATC",
      "name": "Arthur's Town"
    },
    {
      "icao": "MYBG",
      "iata": "GHC",
      "name": "Bullocks Harbour - Great Harbour Cay"
    },
    {
      "icao": "MYCB",
      "iata": "TBI",
      "name": "Cat Island - New Bight"
    },
    {
      "icao": "MYBC",
      "iata": "CCZ",
      "name": "Chub Cay"
    },
    {
      "icao": "MYCI",
      "iata": "CRI",
      "name": "Colonel Hill"
    },
    {
      "icao": "MYLD",
      "iata": "LGI",
      "name": "Deadman's Cay"
    },
    {
      "icao": "MYRD",
      "iata": "DCT",
      "name": "Duncan Town"
    },
    {
      "icao": "MYEM",
      "iata": "GHB",
      "name": "Governor's Harbour"
    },
    {
      "icao": "MYAB",
      "iata": "MAY",
      "name": "Mangrove Cay - Clarence A. Bain"
    },
    {
      "icao": "MYAM",
      "iata": "MHH",
      "name": "Marsh Harbour - Leonard M. Thompson"
    },
    {
      "icao": "MYIG",
      "iata": "IGA",
      "name": "Matthew Town - Inagua"
    },
    {
      "icao": "MYEF",
      "iata": "GGT",
      "name": "Moss Town - Exuma"
    },
    {
      "icao": "MYEN",
      "iata": "NMC",
      "name": "Normans Cay"
    },
    {
      "icao": "MYEH",
      "iata": "ELH",
      "name": "North Eleuthera"
    },
    {
      "icao": "MYER",
      "iata": "RSD",
      "name": "Rock Sound"
    },
    {
      "icao": "MYBS",
      "iata": "BIM",
      "name": "South Bimini"
    },
    {
      "icao": "MYAP",
      "iata": "AXP",
      "name": "Spring Point"
    },
    {
      "icao": "MYES",
      "iata": "TYM",
      "name": "Staniel Cay"
    },
    {
      "icao": "MYLS",
      "iata": "SML",
      "name": "Stella Maris"
    },
    {
      "icao": "MYAT",
      "iata": "TCB",
      "name": "Treasure Cay"
    }
  ],
  "Bahrain": [
    {
      "icao": "OBBI",
      "iata": "BAH",
      "name": "Manama - Bahrain"
    },
    {
      "icao": "OBBS",
      "iata": "",
      "name": "Sitrah - Sheik Isa Air Base"
    }
  ],
  "Bangladesh": [
    {
      "icao": "VGEG",
      "iata": "CGP",
      "name": "Chattogram (Chittagong) - Shah Amanat"
    },
    {
      "icao": "VGHS",
      "iata": "DAC",
      "name": "Dhaka - Hazrat Shahjalal"
    },
    {
      "icao": "VGSY",
      "iata": "ZYL",
      "name": "Sylhet - Osmany"
    },
    {
      "icao": "VGBR",
      "iata": "BZL",
      "name": "Barisal"
    },
    {
      "icao": "VGCB",
      "iata": "CXB",
      "name": "Cox's Bazar"
    },
    {
      "icao": "VGIS",
      "iata": "IRD",
      "name": "Ishurdi"
    },
    {
      "icao": "VGJR",
      "iata": "JSR",
      "name": "Jashore (Jessore) - Jessore"
    },
    {
      "icao": "VGRJ",
      "iata": "RJH",
      "name": "Rajshahi - Shah Makhdum"
    },
    {
      "icao": "VGSD",
      "iata": "SPD",
      "name": "Saidpur"
    }
  ],
  "Barbados": [
    {
      "icao": "TBPB",
      "iata": "BGI",
      "name": "Bridgetown - Grantley Adams"
    }
  ],
  "Belarus": [
    {
      "icao": "UMBB",
      "iata": "BQT",
      "name": "Brest"
    },
    {
      "icao": "UMMS",
      "iata": "MSQ",
      "name": "Minsk National"
    },
    {
      "icao": "UMGG",
      "iata": "GME",
      "name": "Gomel"
    },
    {
      "icao": "UMMG",
      "iata": "GNA",
      "name": "Hrodna"
    },
    {
      "icao": "UMOO",
      "iata": "MVQ",
      "name": "Mogilev"
    },
    {
      "icao": "UMII",
      "iata": "VTB",
      "name": "Vitebsk Vostochny"
    }
  ],
  "Belgium": [
    {
      "icao": "EBCI",
      "iata": "CRL",
      "name": "Brussels South Charleroi"
    },
    {
      "icao": "EBOS",
      "iata": "OST",
      "name": "Oostende - Ostend-Bruges"
    },
    {
      "icao": "EBBR",
      "iata": "BRU",
      "name": "Zaventem - Brussels"
    },
    {
      "icao": "EBAW",
      "iata": "ANR",
      "name": "Antwerp International Airport (Deurne)"
    },
    {
      "icao": "EBKT",
      "iata": "KJK",
      "name": "Flanders International Airport Kortrijk-Wevelgem"
    },
    {
      "icao": "EBLG",
      "iata": "LGG",
      "name": "Grâce-Hollogne - Liège"
    }
  ],
  "Belize": [
    {
      "icao": "MZBZ",
      "iata": "BZE",
      "name": "Belize City - Philip S. W. Goldson"
    },
    {
      "icao": "MZPL",
      "iata": "PLJ",
      "name": "Placencia"
    }
  ],
  "Benin": [
    {
      "icao": "DBBB",
      "iata": "COO",
      "name": "Cotonou Cadjehoun"
    }
  ],
  "Bermuda": [
    {
      "icao": "TXKF",
      "iata": "BDA",
      "name": "Hamilton - L.F. Wade"
    }
  ],
  "Bhutan": [
    {
      "icao": "VQPR",
      "iata": "PBH",
      "name": "Paro"
    },
    {
      "icao": "VQGP",
      "iata": "GLU",
      "name": "Gelephu"
    }
  ],
  "Bolivia": [
    {
      "icao": "SLCB",
      "iata": "CBB",
      "name": "Cochabamba - Jorge Wilsterman"
    },
    {
      "icao": "SLLP",
      "iata": "LPB",
      "name": "La Paz / El Alto - El Alto"
    },
    {
      "icao": "SLOR",
      "iata": "ORU",
      "name": "Oruro - Juan Mendoza"
    },
    {
      "icao": "SLVR",
      "iata": "VVI",
      "name": "Santa Cruz - Viru Viru"
    },
    {
      "icao": "SLAL",
      "iata": "SRE",
      "name": "Sucre - Alcantarí"
    },
    {
      "icao": "SLBJ",
      "iata": "BJO",
      "name": "Bermejo"
    },
    {
      "icao": "SLCO",
      "iata": "CIJ",
      "name": "Cobija - Capitán Aníbal Arab"
    },
    {
      "icao": "SLPO",
      "iata": "POI",
      "name": "Potosí - Capitan Nicolas Rojas"
    },
    {
      "icao": "SLPS",
      "iata": "PSZ",
      "name": "Puerto Suárez - Capitán Av. Salvador Ogaya G. airport"
    },
    {
      "icao": "SLRI",
      "iata": "RIB",
      "name": "Riberalta - Capitán Av. Selin Zeitun Lopez"
    },
    {
      "icao": "SLSA",
      "iata": "SBL",
      "name": "Santa Ana Del Yacuma"
    },
    {
      "icao": "SLET",
      "iata": "SRZ",
      "name": "Santa Cruz - El Trompillo"
    },
    {
      "icao": "SLSU",
      "iata": "",
      "name": "Sucre - Juana Azurduy de Padilla Air Force Base"
    },
    {
      "icao": "SLTJ",
      "iata": "TJA",
      "name": "Tarija - Capitan Oriel Lea Plaza"
    },
    {
      "icao": "SLTR",
      "iata": "TDD",
      "name": "Trinidad - Teniente Av. Jorge Henrich Arauz"
    },
    {
      "icao": "SLVM",
      "iata": "VLM",
      "name": "Villamontes - Teniente Coronel Rafael Pabón"
    },
    {
      "icao": "SLYA",
      "iata": "BYC",
      "name": "Yacuíba - Yacuiba"
    }
  ],
  "Bosnia and Herzegovina": [
    {
      "icao": "LQTZ",
      "iata": "TZL",
      "name": "Dubrave Gornje - Tuzla"
    },
    {
      "icao": "LQBK",
      "iata": "BNX",
      "name": "Mahovljani - Banja Luka"
    },
    {
      "icao": "LQMO",
      "iata": "OMO",
      "name": "Mostar"
    },
    {
      "icao": "LQSA",
      "iata": "SJJ",
      "name": "Sarajevo"
    }
  ],
  "Botswana": [
    {
      "icao": "FBPM",
      "iata": "FRW",
      "name": "Francistown - Phillip Gaonwe Matante"
    },
    {
      "icao": "FBSK",
      "iata": "GBE",
      "name": "Gaborone - Sir Seretse Khama"
    },
    {
      "icao": "FBKE",
      "iata": "BBK",
      "name": "Kasane"
    },
    {
      "icao": "FBMN",
      "iata": "MUB",
      "name": "Maun"
    },
    {
      "icao": "FBJW",
      "iata": "JWA",
      "name": "Jwaneng"
    },
    {
      "icao": "FBSP",
      "iata": "PKW",
      "name": "Selebi Phikwe"
    },
    {
      "icao": "FBSN",
      "iata": "SXN",
      "name": "Sowa - Sua Pan"
    }
  ],
  "Brazil": [
    {
      "icao": "SBCF",
      "iata": "CNF",
      "name": "Belo Horizonte - Tancredo Neves"
    },
    {
      "icao": "SBBE",
      "iata": "BEL",
      "name": "Belém - Val de Cans/Júlio Cezar Ribeiro"
    },
    {
      "icao": "SBBV",
      "iata": "BVB",
      "name": "Boa Vista - Atlas Brasil Cantanhede"
    },
    {
      "icao": "SBBR",
      "iata": "BSB",
      "name": "Brasília - Presidente Juscelino Kubitschek"
    },
    {
      "icao": "SBKP",
      "iata": "VCP",
      "name": "Campinas - Viracopos"
    },
    {
      "icao": "SBCY",
      "iata": "CGB",
      "name": "Cuiabá - Várzea Grande–Marechal Rondon"
    },
    {
      "icao": "SBCT",
      "iata": "CWB",
      "name": "Curitiba-Afonso Pena"
    },
    {
      "icao": "SBFL",
      "iata": "FLN",
      "name": "Florianópolis - Hercílio Luz"
    },
    {
      "icao": "SBFZ",
      "iata": "FOR",
      "name": "Fortaleza - Pinto Martins"
    },
    {
      "icao": "SBFI",
      "iata": "IGU",
      "name": "Foz do Iguaçu - Cataratas"
    },
    {
      "icao": "SBGO",
      "iata": "GYN",
      "name": "Goiânia - Santa Genoveva"
    },
    {
      "icao": "SBJP",
      "iata": "JPA",
      "name": "João Pessoa - Presidente Castro Pinto"
    },
    {
      "icao": "SBMO",
      "iata": "MCZ",
      "name": "Maceió - Zumbi dos Palmares"
    },
    {
      "icao": "SBEG",
      "iata": "MAO",
      "name": "Manaus - Eduardo Gomes"
    },
    {
      "icao": "SBNF",
      "iata": "NVT",
      "name": "Navegantes - Ministro Victor Konder"
    },
    {
      "icao": "SBPA",
      "iata": "POA",
      "name": "Porto Alegre-Salgado Filho"
    },
    {
      "icao": "SBPS",
      "iata": "BPS",
      "name": "Porto Seguro"
    },
    {
      "icao": "SBPV",
      "iata": "PVH",
      "name": "Porto Velho - Governador Jorge Teixeira de Oliveira"
    },
    {
      "icao": "SBRF",
      "iata": "REC",
      "name": "Recife/Guararapes - Gilberto Freyre"
    },
    {
      "icao": "SBRB",
      "iata": "RBR",
      "name": "Rio Branco-Plácido de Castro"
    },
    {
      "icao": "SBGL",
      "iata": "GIG",
      "name": "Rio De Janeiro - Rio Galeão – Tom Jobim"
    },
    {
      "icao": "SBRJ",
      "iata": "SDU",
      "name": "Rio de Janeiro - Santos Dumont"
    },
    {
      "icao": "SBSV",
      "iata": "SSA",
      "name": "Salvador - Deputado Luiz Eduardo Magalhães"
    },
    {
      "icao": "SBSL",
      "iata": "SLZ",
      "name": "São Luís - Marechal Cunha Machado"
    },
    {
      "icao": "SBSP",
      "iata": "CGH",
      "name": "São Paulo - Congonhas–Deputado Freitas Nobre"
    },
    {
      "icao": "SBGR",
      "iata": "GRU",
      "name": "São Paulo/Guarulhos–Governor André Franco Montoro"
    },
    {
      "icao": "SBVT",
      "iata": "VIX",
      "name": "Vitória - Eurico de Aguiar Salles"
    },
    {
      "icao": "SBMD",
      "iata": "MEU",
      "name": "Almeirim - Monte Dourado - Serra do Areão"
    },
    {
      "icao": "SBAT",
      "iata": "AFL",
      "name": "Alta Floresta - Piloto Osvaldo Marques Dias"
    },
    {
      "icao": "SBHT",
      "iata": "ATM",
      "name": "Altamira Interstate"
    },
    {
      "icao": "SBAN",
      "iata": "",
      "name": "Anápolis Airbase"
    },
    {
      "icao": "SBAR",
      "iata": "AJU",
      "name": "Aracaju - Santa Maria"
    },
    {
      "icao": "SBAC",
      "iata": "ARX",
      "name": "Aracati Dragão do Mar Regional"
    },
    {
      "icao": "SWGN",
      "iata": "AUX",
      "name": "Araguaína"
    },
    {
      "icao": "SBAQ",
      "iata": "AQA",
      "name": "Araraquara"
    },
    {
      "icao": "SBAX",
      "iata": "AAX",
      "name": "Araxá - Romeu Zema"
    },
    {
      "icao": "SBAU",
      "iata": "ARU",
      "name": "Araçatuba"
    },
    {
      "icao": "SBBG",
      "iata": "BGX",
      "name": "Bagé - Comandante Gustavo Kraemer"
    },
    {
      "icao": "SBBW",
      "iata": "BPG",
      "name": "Barra do Garças"
    },
    {
      "icao": "SBAE",
      "iata": "JTC",
      "name": "Bauru/Arealva–Moussa Nakhal Tobias State"
    },
    {
      "icao": "SBBH",
      "iata": "PLU",
      "name": "Belo Horizonte - Pampulha - Carlos Drummond de Andrade"
    },
    {
      "icao": "SBLP",
      "iata": "LAZ",
      "name": "Bom Jesus da Lapa"
    },
    {
      "icao": "SBKG",
      "iata": "CPV",
      "name": "Campina Grande - Presidente João Suassuna"
    },
    {
      "icao": "SBCG",
      "iata": "CGR",
      "name": "Campo Grande"
    },
    {
      "icao": "SBCP",
      "iata": "CAW",
      "name": "Campos dos Goytacazes - Bartolomeu Lisandro"
    },
    {
      "icao": "SBCI",
      "iata": "CLN",
      "name": "Carolina - Brig. Lysias Augusto Rodrigues"
    },
    {
      "icao": "SBCA",
      "iata": "CAC",
      "name": "Cascavel - Coronel Adalberto Mendes da Silva"
    },
    {
      "icao": "SBCX",
      "iata": "CXJ",
      "name": "Caxias Do Sul - Hugo Cantergiani Regional"
    },
    {
      "icao": "SBCH",
      "iata": "XAP",
      "name": "Chapecó - Serafin Enoss Bertaso"
    },
    {
      "icao": "SBAA",
      "iata": "CDJ",
      "name": "Conceição do Araguaia"
    },
    {
      "icao": "SNCP",
      "iata": "EEA",
      "name": "Correia Pinto - Planalto Serrano Regional"
    },
    {
      "icao": "SBCR",
      "iata": "CMG",
      "name": "Corumbá"
    },
    {
      "icao": "SBJE",
      "iata": "JJD",
      "name": "Cruz - Comandante Ariston Pessoa"
    },
    {
      "icao": "SBCZ",
      "iata": "CZS",
      "name": "Cruzeiro do Sul"
    },
    {
      "icao": "SBBI",
      "iata": "BFH",
      "name": "Curitiba - Bacacheri"
    },
    {
      "icao": "SBFN",
      "iata": "FEN",
      "name": "Fernando de Noronha"
    },
    {
      "icao": "SBML",
      "iata": "MII",
      "name": "Frank Miloye Milenkowichi–Marília State"
    },
    {
      "icao": "SBGV",
      "iata": "GVR",
      "name": "Governador Valadares - Coronel Altino Machado"
    },
    {
      "icao": "SBGM",
      "iata": "GJM",
      "name": "Guajará-Mirim"
    },
    {
      "icao": "SBGW",
      "iata": "GUJ",
      "name": "Guaratinguetá - Edu Chaves Field"
    },
    {
      "icao": "SBIL",
      "iata": "IOS",
      "name": "Ilhéus - Bahia - Jorge Amado"
    },
    {
      "icao": "SBIZ",
      "iata": "IMP",
      "name": "Imperatriz - Prefeito Renato Moreira"
    },
    {
      "icao": "SBIP",
      "iata": "IPN",
      "name": "Ipatinga - Usiminas"
    },
    {
      "icao": "SBIC",
      "iata": "ITA",
      "name": "Itacoatiara"
    },
    {
      "icao": "SBIH",
      "iata": "ITB",
      "name": "Itaituba"
    },
    {
      "icao": "SBEK",
      "iata": "JCR",
      "name": "Jacareacanga"
    },
    {
      "icao": "SBJV",
      "iata": "JOI",
      "name": "Joinville - Lauro Carneiro de Loyola"
    },
    {
      "icao": "SBJF",
      "iata": "JDF",
      "name": "Juiz de Fora - Francisco de Assis"
    },
    {
      "icao": "SBZM",
      "iata": "IZA",
      "name": "Juiz de Fora - Presidente Itamar Franco"
    },
    {
      "icao": "SBLJ",
      "iata": "LAJ",
      "name": "Lages"
    },
    {
      "icao": "SBLO",
      "iata": "LDB",
      "name": "Londrina - Governor José Richa"
    },
    {
      "icao": "SBMQ",
      "iata": "MCP",
      "name": "Macapá - Alberto Alcolumbre"
    },
    {
      "icao": "SBME",
      "iata": "MEA",
      "name": "Macaé Benedito Lacerda"
    },
    {
      "icao": "SBMY",
      "iata": "MNX",
      "name": "Manicoré"
    },
    {
      "icao": "SBMA",
      "iata": "MAB",
      "name": "Marabá - João Correa da Rocha"
    },
    {
      "icao": "SBMK",
      "iata": "MOC",
      "name": "Montes Claros - Mário Ribeiro"
    },
    {
      "icao": "SBMS",
      "iata": "MVF",
      "name": "Mossoró - Dix-Sept Rosado"
    },
    {
      "icao": "SBNT",
      "iata": "",
      "name": "Natal Air Force Base"
    },
    {
      "icao": "SBOI",
      "iata": "OYK",
      "name": "Oiapoque"
    },
    {
      "icao": "SBTB",
      "iata": "TMT",
      "name": "Oriximiná - Trombetas"
    },
    {
      "icao": "SBPJ",
      "iata": "PMW",
      "name": "Palmas - Brigadeiro Lysias Rodrigues"
    },
    {
      "icao": "SBCJ",
      "iata": "CKS",
      "name": "Parauapebas - Carajás"
    },
    {
      "icao": "SBPB",
      "iata": "PHB",
      "name": "Parnaíba - Prefeito Doutor João Silva Filho"
    },
    {
      "icao": "SBPF",
      "iata": "PFB",
      "name": "Passo Fundo - Lauro Kurtz"
    },
    {
      "icao": "SBUF",
      "iata": "PAV",
      "name": "Paulo Afonso"
    },
    {
      "icao": "SBPK",
      "iata": "PET",
      "name": "Pelotas - João Simões Lopes Neto"
    },
    {
      "icao": "SBPL",
      "iata": "PNZ",
      "name": "Petrolina - Senador Nilo Coelho"
    },
    {
      "icao": "SBPG",
      "iata": "PGZ",
      "name": "Ponta Grossa Airport - Comandante Antonio Amilton Beraldo"
    },
    {
      "icao": "SBMN",
      "iata": "PLL",
      "name": "Ponta Pelada Airport / Manaus Air Base"
    },
    {
      "icao": "SBPP",
      "iata": "PMG",
      "name": "Ponta Porã"
    },
    {
      "icao": "SBPC",
      "iata": "POO",
      "name": "Poços de Caldas - Embaixador Walther Moreira Salles"
    },
    {
      "icao": "SBDN",
      "iata": "PPB",
      "name": "Presidente Prudente"
    },
    {
      "icao": "SBMG",
      "iata": "MGF",
      "name": "Regional de Maringá - Sílvio Name Júnior"
    },
    {
      "icao": "SBRP",
      "iata": "RAO",
      "name": "Ribeirão Preto - Leite Lopes"
    },
    {
      "icao": "SBAF",
      "iata": "",
      "name": "Rio de Janeiro - Campo Délio Jardim de Mattos"
    },
    {
      "icao": "SBJR",
      "iata": "RRJ",
      "name": "Rio de Janeiro - Jacarepaguá - Roberto Marinho"
    },
    {
      "icao": "SBRD",
      "iata": "ROO",
      "name": "Rondonópolis - Maestro Marinho Franco"
    },
    {
      "icao": "SBSM",
      "iata": "RIA",
      "name": "Santa Maria"
    },
    {
      "icao": "SBSN",
      "iata": "STM",
      "name": "Santarém - Maestro Wilson Fonseca"
    },
    {
      "icao": "SBNM",
      "iata": "GEL",
      "name": "Santo Ângelo"
    },
    {
      "icao": "SBST",
      "iata": "SSZ",
      "name": "Santos Nero Moura Air Base / Guarujá"
    },
    {
      "icao": "SBUA",
      "iata": "SJL",
      "name": "São Gabriel da Cachoeira"
    },
    {
      "icao": "SBSJ",
      "iata": "SJK",
      "name": "São José Dos Campos - Professor Urbano Ernesto Stumpf"
    },
    {
      "icao": "SBSR",
      "iata": "SJP",
      "name": "São José do Rio Preto - Prof. Eribelto Manoel Reino State"
    },
    {
      "icao": "SBJH",
      "iata": "JHF",
      "name": "São Roque - São Paulo Catarina Executive"
    },
    {
      "icao": "SBTT",
      "iata": "TBT",
      "name": "Tabatinga"
    },
    {
      "icao": "SBTK",
      "iata": "TRQ",
      "name": "Tarauacá"
    },
    {
      "icao": "SBTF",
      "iata": "TFF",
      "name": "Tefé"
    },
    {
      "icao": "SBTE",
      "iata": "THE",
      "name": "Teresina - Senador Petrônio Portela"
    },
    {
      "icao": "SBTU",
      "iata": "TUR",
      "name": "Tucuruí"
    },
    {
      "icao": "SBUR",
      "iata": "UBA",
      "name": "Uberaba - Mário de Almeida Franco"
    },
    {
      "icao": "SBUL",
      "iata": "UDI",
      "name": "Uberlândia - Ten. Cel. Aviador César Bombonato"
    },
    {
      "icao": "SBUG",
      "iata": "URG",
      "name": "Uruguaiana - Rubem Berta"
    },
    {
      "icao": "SBVG",
      "iata": "VAG",
      "name": "Varginha - Major Brigadeiro Trompowsky"
    },
    {
      "icao": "SBVH",
      "iata": "BVH",
      "name": "Vilhena - Brigadeiro Camarão"
    },
    {
      "icao": "SBVC",
      "iata": "VDC",
      "name": "Vitória da Conquista - Glauber de Andrade Rocha"
    }
  ],
  "British Virgin Islands": [
    {
      "icao": "TUPJ",
      "iata": "EIS",
      "name": "Beef Island - Terrance B. Lettsome"
    },
    {
      "icao": "TUPW",
      "iata": "VIJ",
      "name": "Spanish Town - Virgin Gorda"
    }
  ],
  "Brunei": [
    {
      "icao": "WBSB",
      "iata": "BWN",
      "name": "Bandar Seri Begawan - Brunei"
    }
  ],
  "Bulgaria": [
    {
      "icao": "LBBG",
      "iata": "BOJ",
      "name": "Burgas"
    },
    {
      "icao": "LBPD",
      "iata": "PDV",
      "name": "Plovdiv"
    },
    {
      "icao": "LBSF",
      "iata": "SOF",
      "name": "Sofia"
    },
    {
      "icao": "LBWN",
      "iata": "VAR",
      "name": "Varna"
    },
    {
      "icao": "LBWB",
      "iata": "",
      "name": "Balchik Airfield"
    },
    {
      "icao": "LBGO",
      "iata": "GOZ",
      "name": "Gorna Oryahovitsa"
    },
    {
      "icao": "LBPG",
      "iata": "",
      "name": "Graf Ignatievo Air Base"
    }
  ],
  "Burkina Faso": [
    {
      "icao": "DFOO",
      "iata": "BOY",
      "name": "Bobo Dioulasso"
    },
    {
      "icao": "DFFD",
      "iata": "OUA",
      "name": "Ouagadougou Thomas Sankara"
    }
  ],
  "Burundi": [
    {
      "icao": "HBBA",
      "iata": "BJM",
      "name": "Bujumbura Melchior Ndadaye"
    },
    {
      "icao": "HBBE",
      "iata": "GID",
      "name": "Gitega"
    }
  ],
  "Cambodia": [
    {
      "icao": "VDTI",
      "iata": "KTI",
      "name": "Phnom Penh (Boeng Khyang) - Techo"
    },
    {
      "icao": "VDPP",
      "iata": "PNH",
      "name": "Phnom Penh (Pou Senchey) - Phnom Penh"
    },
    {
      "icao": "VDSV",
      "iata": "KOS",
      "name": "Preah Sihanouk - Sihanouk"
    },
    {
      "icao": "VDSA",
      "iata": "SAI",
      "name": "Siem Reap-Angkor"
    },
    {
      "icao": "VDBG",
      "iata": "BBM",
      "name": "Battambang"
    },
    {
      "icao": "VDRK",
      "iata": "RBE",
      "name": "Ratanakiri"
    }
  ],
  "Cameroon": [
    {
      "icao": "FKKD",
      "iata": "DLA",
      "name": "Douala"
    },
    {
      "icao": "FKKR",
      "iata": "GOU",
      "name": "Garoua"
    },
    {
      "icao": "FKYS",
      "iata": "NSI",
      "name": "Yaoundé Nsimalen"
    },
    {
      "icao": "FKKU",
      "iata": "BFX",
      "name": "Bafoussam"
    },
    {
      "icao": "FKKV",
      "iata": "BPC",
      "name": "Bamenda"
    },
    {
      "icao": "FKKM",
      "iata": "FOM",
      "name": "Foumban Nkounja"
    },
    {
      "icao": "FKKL",
      "iata": "MVR",
      "name": "Maroua - Salak"
    },
    {
      "icao": "FKKN",
      "iata": "NGE",
      "name": "N'Gaoundéré"
    },
    {
      "icao": "FKKC",
      "iata": "TKC",
      "name": "Tiko"
    },
    {
      "icao": "FKKY",
      "iata": "YAO",
      "name": "Yaoundé Ville"
    }
  ],
  "Canada": [
    {
      "icao": "CYYC",
      "iata": "YYC",
      "name": "Calgary"
    },
    {
      "icao": "CYEG",
      "iata": "YEG",
      "name": "Edmonton"
    },
    {
      "icao": "CYHZ",
      "iata": "YHZ",
      "name": "Halifax / Stanfield"
    },
    {
      "icao": "CYLW",
      "iata": "YLW",
      "name": "Kelowna"
    },
    {
      "icao": "CYUL",
      "iata": "YUL",
      "name": "Montréal - Montreal / Pierre Elliott Trudeau"
    },
    {
      "icao": "CYOW",
      "iata": "YOW",
      "name": "Ottawa Macdonald-Cartier"
    },
    {
      "icao": "CYQB",
      "iata": "YQB",
      "name": "Quebec Jean Lesage"
    },
    {
      "icao": "CYXE",
      "iata": "YXE",
      "name": "Saskatoon John G. Diefenbaker"
    },
    {
      "icao": "CYYT",
      "iata": "YYT",
      "name": "St. John's"
    },
    {
      "icao": "CYYZ",
      "iata": "YYZ",
      "name": "Toronto Pearson"
    },
    {
      "icao": "CYVR",
      "iata": "YVR",
      "name": "Vancouver"
    },
    {
      "icao": "CYYJ",
      "iata": "YYJ",
      "name": "Victoria"
    },
    {
      "icao": "CYWG",
      "iata": "YWG",
      "name": "Winnipeg / James Armstrong Richardson"
    },
    {
      "icao": "CYXX",
      "iata": "YXX",
      "name": "Abbotsford"
    },
    {
      "icao": "CYLT",
      "iata": "YLT",
      "name": "Alert"
    },
    {
      "icao": "CYTF",
      "iata": "YTF",
      "name": "Alma"
    },
    {
      "icao": "CYEY",
      "iata": "YEY",
      "name": "Amos/Magny"
    },
    {
      "icao": "CYYW",
      "iata": "YYW",
      "name": "Armstrong"
    },
    {
      "icao": "CYIB",
      "iata": "YIB",
      "name": "Atikokan Municipal"
    },
    {
      "icao": "CYBC",
      "iata": "YBC",
      "name": "Baie-Comeau"
    },
    {
      "icao": "CYBK",
      "iata": "YBK",
      "name": "Baker Lake"
    },
    {
      "icao": "CYLS",
      "iata": "YLK",
      "name": "Barrie-Lake Simcoe Regional"
    },
    {
      "icao": "CYXQ",
      "iata": "YXQ",
      "name": "Beaver Creek"
    },
    {
      "icao": "CBBC",
      "iata": "ZEL",
      "name": "Bella Bella (Campbell Island)"
    },
    {
      "icao": "CYBD",
      "iata": "QBC",
      "name": "Bella Coola"
    },
    {
      "icao": "CYTZ",
      "iata": "YTZ",
      "name": "Billy Bishop Toronto City"
    },
    {
      "icao": "CYVB",
      "iata": "YVB",
      "name": "Bonaventure"
    },
    {
      "icao": "CYBF",
      "iata": "YBY",
      "name": "Bonnyville"
    },
    {
      "icao": "CYBR",
      "iata": "YBR",
      "name": "Brandon Municipal"
    },
    {
      "icao": "CYKF",
      "iata": "YKF",
      "name": "Breslau - Region of Waterloo"
    },
    {
      "icao": "CZBM",
      "iata": "ZBM",
      "name": "Bromont (Roland Désourdy)"
    },
    {
      "icao": "CYPZ",
      "iata": "YPZ",
      "name": "Burns Lake"
    },
    {
      "icao": "CYDB",
      "iata": "YDB",
      "name": "Burwash Landing - Burwash"
    },
    {
      "icao": "CYOD",
      "iata": "YOD",
      "name": "CFB Cold Lake"
    },
    {
      "icao": "CYZX",
      "iata": "YZX",
      "name": "CFB Greenwood"
    },
    {
      "icao": "CYTR",
      "iata": "YTR",
      "name": "CFB Trenton"
    },
    {
      "icao": "CYCB",
      "iata": "YCB",
      "name": "Cambridge Bay"
    },
    {
      "icao": "CYBL",
      "iata": "YBL",
      "name": "Campbell River"
    },
    {
      "icao": "CYCG",
      "iata": "YCG",
      "name": "Castlegar/West Kootenay Regional"
    },
    {
      "icao": "CYLD",
      "iata": "YLD",
      "name": "Chapleau"
    },
    {
      "icao": "CYML",
      "iata": "YML",
      "name": "Charlevoix"
    },
    {
      "icao": "CYCL",
      "iata": "YCL",
      "name": "Charlo"
    },
    {
      "icao": "CYYG",
      "iata": "YYG",
      "name": "Charlottetown"
    },
    {
      "icao": "CYCQ",
      "iata": "YCQ",
      "name": "Chetwynd"
    },
    {
      "icao": "CYMT",
      "iata": "YMT",
      "name": "Chibougamau - Chapais"
    },
    {
      "icao": "CYYQ",
      "iata": "YYQ",
      "name": "Churchill"
    },
    {
      "icao": "CYCN",
      "iata": "YCN",
      "name": "Cochrane"
    },
    {
      "icao": "CYQQ",
      "iata": "YQQ",
      "name": "Comox Valley International Airport / CFB Comox"
    },
    {
      "icao": "CYZS",
      "iata": "YZS",
      "name": "Coral Harbour"
    },
    {
      "icao": "CYCC",
      "iata": "YCC",
      "name": "Cornwall Regional"
    },
    {
      "icao": "CYXC",
      "iata": "YXC",
      "name": "Cranbrook/Canadian Rockies"
    },
    {
      "icao": "CYDN",
      "iata": "YDN",
      "name": "Dauphin Barker"
    },
    {
      "icao": "CYDA",
      "iata": "YDA",
      "name": "Dawson City"
    },
    {
      "icao": "CYDQ",
      "iata": "YDQ",
      "name": "Dawson Creek"
    },
    {
      "icao": "CYDF",
      "iata": "YDF",
      "name": "Deer Lake"
    },
    {
      "icao": "CZBB",
      "iata": "YDT",
      "name": "Delta - Boundary Bay"
    },
    {
      "icao": "CYID",
      "iata": "YDG",
      "name": "Digby / Annapolis Regional"
    },
    {
      "icao": "CYDO",
      "iata": "YDO",
      "name": "Dolbeau-Saint-Felicien"
    },
    {
      "icao": "CYHD",
      "iata": "YHD",
      "name": "Dryden Regional"
    },
    {
      "icao": "CYXR",
      "iata": "YXR",
      "name": "Earlton (Timiskaming Regional)"
    },
    {
      "icao": "CYET",
      "iata": "YET",
      "name": "Edson"
    },
    {
      "icao": "CYOA",
      "iata": "YOA",
      "name": "Ekati"
    },
    {
      "icao": "CYEL",
      "iata": "YEL",
      "name": "Elliot Lake Municipal"
    },
    {
      "icao": "CYEN",
      "iata": "YEN",
      "name": "Estevan"
    },
    {
      "icao": "CZFA",
      "iata": "ZFA",
      "name": "Faro"
    },
    {
      "icao": "CYFE",
      "iata": "YFE",
      "name": "Forestville"
    },
    {
      "icao": "CYPY",
      "iata": "YPY",
      "name": "Fort Chipewyan"
    },
    {
      "icao": "CYAG",
      "iata": "YAG",
      "name": "Fort Frances Municipal"
    },
    {
      "icao": "CYJF",
      "iata": "YJF",
      "name": "Fort Liard"
    },
    {
      "icao": "CYMM",
      "iata": "YMM",
      "name": "Fort McMurray"
    },
    {
      "icao": "CYYE",
      "iata": "YYE",
      "name": "Fort Nelson"
    },
    {
      "icao": "CYFR",
      "iata": "YFR",
      "name": "Fort Resolution"
    },
    {
      "icao": "CYXJ",
      "iata": "YXJ",
      "name": "Fort Saint John - Fort St John / North Peace Regional"
    },
    {
      "icao": "CYFS",
      "iata": "YFS",
      "name": "Fort Simpson"
    },
    {
      "icao": "CYSM",
      "iata": "YSM",
      "name": "Fort Smith"
    },
    {
      "icao": "CYFC",
      "iata": "YFC",
      "name": "Fredericton"
    },
    {
      "icao": "CYQX",
      "iata": "YQX",
      "name": "Gander"
    },
    {
      "icao": "CYGQ",
      "iata": "YGQ",
      "name": "Geraldton Greenstone Regional"
    },
    {
      "icao": "CYGM",
      "iata": "YGM",
      "name": "Gimli Industrial Park"
    },
    {
      "icao": "CYYR",
      "iata": "YYR",
      "name": "Goose Bay"
    },
    {
      "icao": "CYZE",
      "iata": "YZE",
      "name": "Gore Bay Manitoulin"
    },
    {
      "icao": "CZGF",
      "iata": "ZGF",
      "name": "Grand Forks"
    },
    {
      "icao": "CYQU",
      "iata": "YQU",
      "name": "Grande Prairie"
    },
    {
      "icao": "CYQA",
      "iata": "YQA",
      "name": "Gravenhurst - Muskoka"
    },
    {
      "icao": "CYQM",
      "iata": "YQM",
      "name": "Greater Moncton Roméo LeBlanc"
    },
    {
      "icao": "CYHT",
      "iata": "YHT",
      "name": "Haines Junction"
    },
    {
      "icao": "CYGV",
      "iata": "YGV",
      "name": "Havre-Saint-Pierre"
    },
    {
      "icao": "CYHY",
      "iata": "YHY",
      "name": "Hay River / Merlyn Carter"
    },
    {
      "icao": "CYHF",
      "iata": "YHF",
      "name": "Hearst René Fontaine Municipal"
    },
    {
      "icao": "CYOJ",
      "iata": "YOJ",
      "name": "High Level"
    },
    {
      "icao": "CYHN",
      "iata": "YHN",
      "name": "Hornepayne Municipal"
    },
    {
      "icao": "CYCE",
      "iata": "YCE",
      "name": "Huron Park - Centralia / James T. Field Memorial Aerodrome"
    },
    {
      "icao": "CZUC",
      "iata": "ZUC",
      "name": "Ignace Municipal"
    },
    {
      "icao": "CYEV",
      "iata": "YEV",
      "name": "Inuvik Mike Zubko"
    },
    {
      "icao": "CYFB",
      "iata": "YFB",
      "name": "Iqaluit"
    },
    {
      "icao": "CYIV",
      "iata": "YIV",
      "name": "Island Lake"
    },
    {
      "icao": "CZJG",
      "iata": "ZJG",
      "name": "Jenpeg"
    },
    {
      "icao": "CYHM",
      "iata": "YHM",
      "name": "John C. Munro Hamilton"
    },
    {
      "icao": "CYKA",
      "iata": "YKA",
      "name": "Kamloops John Moose Fulton Field Regional"
    },
    {
      "icao": "CYYU",
      "iata": "YYU",
      "name": "Kapuskasing"
    },
    {
      "icao": "CYAQ",
      "iata": "XKS",
      "name": "Kasabonika"
    },
    {
      "icao": "CZEE",
      "iata": "KES",
      "name": "Kelsey"
    },
    {
      "icao": "CYQK",
      "iata": "YQK",
      "name": "Kenora"
    },
    {
      "icao": "CYKJ",
      "iata": "YKJ",
      "name": "Key Lake"
    },
    {
      "icao": "CYKM",
      "iata": "YKD",
      "name": "Kincardine Municipal"
    },
    {
      "icao": "CYKY",
      "iata": "YKY",
      "name": "Kindersley"
    },
    {
      "icao": "CYGK",
      "iata": "YGK",
      "name": "Kingston Norman Rogers"
    },
    {
      "icao": "CYKX",
      "iata": "YKX",
      "name": "Kirkland Lake"
    },
    {
      "icao": "CYVP",
      "iata": "YVP",
      "name": "Kuujjuaq"
    },
    {
      "icao": "CYGW",
      "iata": "YGW",
      "name": "Kuujjuarapik"
    },
    {
      "icao": "CYGL",
      "iata": "YGL",
      "name": "La Grande Rivière"
    },
    {
      "icao": "CYAH",
      "iata": "YAH",
      "name": "La Grande-4"
    },
    {
      "icao": "CYFJ",
      "iata": "YTM",
      "name": "La Macaza - Mont-Tremblant"
    },
    {
      "icao": "CYVC",
      "iata": "YVC",
      "name": "La Ronge"
    },
    {
      "icao": "CYAX",
      "iata": "",
      "name": "Lac du Bonnet"
    },
    {
      "icao": "CYNJ",
      "iata": "YLY",
      "name": "Langley"
    },
    {
      "icao": "CYLR",
      "iata": "YLR",
      "name": "Leaf Rapids"
    },
    {
      "icao": "CYGR",
      "iata": "YGR",
      "name": "Les Îles-de-la-Madeleine - Îles-de-la-Madeleine"
    },
    {
      "icao": "CYQL",
      "iata": "YQL",
      "name": "Lethbridge County"
    },
    {
      "icao": "CYLL",
      "iata": "YLL",
      "name": "Lloydminster"
    },
    {
      "icao": "CYXU",
      "iata": "YXU",
      "name": "London"
    },
    {
      "icao": "CYBX",
      "iata": "YBX",
      "name": "Lourdes-de-Blanc-Sablon"
    },
    {
      "icao": "CYYL",
      "iata": "YYL",
      "name": "Lynn Lake"
    },
    {
      "icao": "CYMG",
      "iata": "YMG",
      "name": "Manitouwadge"
    },
    {
      "icao": "CYSP",
      "iata": "YSP",
      "name": "Marathon"
    },
    {
      "icao": "CZMT",
      "iata": "ZMT",
      "name": "Masset"
    },
    {
      "icao": "CYNM",
      "iata": "YNM",
      "name": "Matagami"
    },
    {
      "icao": "CYME",
      "iata": "YME",
      "name": "Matane"
    },
    {
      "icao": "CYMA",
      "iata": "YMA",
      "name": "Mayo"
    },
    {
      "icao": "CYLJ",
      "iata": "YLJ",
      "name": "Meadow Lake"
    },
    {
      "icao": "CYXH",
      "iata": "YXH",
      "name": "Medicine Hat Regional"
    },
    {
      "icao": "CYGP",
      "iata": "YGP",
      "name": "Michel-Pouliot Gaspé"
    },
    {
      "icao": "CYCH",
      "iata": "YCH",
      "name": "Miramichi"
    },
    {
      "icao": "CYYY",
      "iata": "YYY",
      "name": "Mont-Joli - Mont Joli"
    },
    {
      "icao": "CYMX",
      "iata": "YMX",
      "name": "Montréal - Montreal Mirabel"
    },
    {
      "icao": "CYHU",
      "iata": "YHU",
      "name": "Montréal / Saint-Hubert Metropolitan"
    },
    {
      "icao": "CYMJ",
      "iata": "YMJ",
      "name": "Moose Jaw Air Vice Marshal C. M. McEwen"
    },
    {
      "icao": "CYMO",
      "iata": "YMO",
      "name": "Moosonee"
    },
    {
      "icao": "CYQN",
      "iata": "YQN",
      "name": "Nakina"
    },
    {
      "icao": "CYCD",
      "iata": "YCD",
      "name": "Nanaimo"
    },
    {
      "icao": "CYNA",
      "iata": "YNA",
      "name": "Natashquan"
    },
    {
      "icao": "CYSN",
      "iata": "YCM",
      "name": "Niagara-on-the-Lake - Niagara District"
    },
    {
      "icao": "CYVQ",
      "iata": "YVQ",
      "name": "Norman Wells"
    },
    {
      "icao": "CYQW",
      "iata": "YQW",
      "name": "North Battleford"
    },
    {
      "icao": "CYYB",
      "iata": "YYB",
      "name": "North Bay Jack Garland"
    },
    {
      "icao": "CYXT",
      "iata": "YXT",
      "name": "Northwest Regional Airport Terrace-Kitimat"
    },
    {
      "icao": "CYOO",
      "iata": "YOO",
      "name": "Oshawa Executive"
    },
    {
      "icao": "CYND",
      "iata": "YND",
      "name": "Ottawa / Gatineau"
    },
    {
      "icao": "CYRO",
      "iata": "YRO",
      "name": "Ottawa / Rockcliffe"
    },
    {
      "icao": "CYOS",
      "iata": "YOS",
      "name": "Owen Sound / Billy Bishop Regional"
    },
    {
      "icao": "CYPE",
      "iata": "YPE",
      "name": "Peace River"
    },
    {
      "icao": "CYTA",
      "iata": "YTA",
      "name": "Pembroke"
    },
    {
      "icao": "CYYF",
      "iata": "YYF",
      "name": "Penticton"
    },
    {
      "icao": "CYPQ",
      "iata": "YPQ",
      "name": "Peterborough Regional"
    },
    {
      "icao": "CYPL",
      "iata": "YPL",
      "name": "Pickle Lake"
    },
    {
      "icao": "CZMN",
      "iata": "PIW",
      "name": "Pikwitonei"
    },
    {
      "icao": "CZPC",
      "iata": "WPC",
      "name": "Pincher Creek"
    },
    {
      "icao": "CYPK",
      "iata": "",
      "name": "Pitt Meadows Regional"
    },
    {
      "icao": "CYNL",
      "iata": "YNL",
      "name": "Points North Landing"
    },
    {
      "icao": "CYZT",
      "iata": "YZT",
      "name": "Port Hardy"
    },
    {
      "icao": "CYPD",
      "iata": "YPS",
      "name": "Port Hawkesbury"
    },
    {
      "icao": "CYPN",
      "iata": "YPN",
      "name": "Port-Menier"
    },
    {
      "icao": "CYPG",
      "iata": "YPG",
      "name": "Portage la Prairie - Portage-la-Prairie / Southport"
    },
    {
      "icao": "CYPW",
      "iata": "YPW",
      "name": "Powell River"
    },
    {
      "icao": "CYPA",
      "iata": "YPA",
      "name": "Prince Albert Glass Field"
    },
    {
      "icao": "CYXS",
      "iata": "YXS",
      "name": "Prince George (International)"
    },
    {
      "icao": "CYPR",
      "iata": "YPR",
      "name": "Prince Rupert"
    },
    {
      "icao": "CYPX",
      "iata": "YPX",
      "name": "Puvirnituq"
    },
    {
      "icao": "CYQZ",
      "iata": "YQZ",
      "name": "Quesnel"
    },
    {
      "icao": "CYOP",
      "iata": "YOP",
      "name": "Rainbow Lake"
    },
    {
      "icao": "CYRT",
      "iata": "YRT",
      "name": "Rankin Inlet"
    },
    {
      "icao": "CYRL",
      "iata": "YRL",
      "name": "Red Lake"
    },
    {
      "icao": "CYQR",
      "iata": "YQR",
      "name": "Regina"
    },
    {
      "icao": "CYRB",
      "iata": "YRB",
      "name": "Resolute Bay"
    },
    {
      "icao": "CYRV",
      "iata": "YRV",
      "name": "Revelstoke"
    },
    {
      "icao": "CYXK",
      "iata": "YXK",
      "name": "Rimouski"
    },
    {
      "icao": "CYRI",
      "iata": "YRI",
      "name": "Rivière-du-Loup"
    },
    {
      "icao": "CYRJ",
      "iata": "YRJ",
      "name": "Roberval"
    },
    {
      "icao": "CYDM",
      "iata": "XRR",
      "name": "Ross River"
    },
    {
      "icao": "CYUY",
      "iata": "YUY",
      "name": "Rouyn-Noranda - Rouyn Noranda"
    },
    {
      "icao": "CYBG",
      "iata": "YBG",
      "name": "Saguenay-Bagotville"
    },
    {
      "icao": "CYSJ",
      "iata": "YSJ",
      "name": "Saint John"
    },
    {
      "icao": "CYSL",
      "iata": "YSL",
      "name": "Saint-Léonard"
    },
    {
      "icao": "CZAM",
      "iata": "YSN",
      "name": "Salmon Arm - Shuswap Regional"
    },
    {
      "icao": "CYZP",
      "iata": "YZP",
      "name": "Sandspit"
    },
    {
      "icao": "CZSJ",
      "iata": "ZSJ",
      "name": "Sandy Lake"
    },
    {
      "icao": "CYUX",
      "iata": "YUX",
      "name": "Sanirajak - Hall Beach"
    },
    {
      "icao": "CYZR",
      "iata": "YZR",
      "name": "Sarnia - Chris Hadfield"
    },
    {
      "icao": "CYAM",
      "iata": "YAM",
      "name": "Sault Ste Marie"
    },
    {
      "icao": "CYKL",
      "iata": "YKL",
      "name": "Schefferville"
    },
    {
      "icao": "CYZV",
      "iata": "YZV",
      "name": "Sept-Îles"
    },
    {
      "icao": "CYEM",
      "iata": "YEM",
      "name": "Sheguiandah - Manitoulin East Municipal"
    },
    {
      "icao": "CYSC",
      "iata": "YSC",
      "name": "Sherbrooke"
    },
    {
      "icao": "CYXL",
      "iata": "YXL",
      "name": "Sioux Lookout"
    },
    {
      "icao": "CYZH",
      "iata": "YZH",
      "name": "Slave Lake"
    },
    {
      "icao": "CYSU",
      "iata": "YSU",
      "name": "Slemon Park - Summerside"
    },
    {
      "icao": "CYYD",
      "iata": "YYD",
      "name": "Smithers"
    },
    {
      "icao": "CYSH",
      "iata": "YSH",
      "name": "Smiths Falls-Montague (Russ Beach)"
    },
    {
      "icao": "CZBF",
      "iata": "ZBF",
      "name": "South Tetagouche - Bathurst"
    },
    {
      "icao": "CYQF",
      "iata": "YQF",
      "name": "Springbrook - Red Deer Regional"
    },
    {
      "icao": "CYJN",
      "iata": "YJN",
      "name": "St Jean"
    },
    {
      "icao": "CYQS",
      "iata": "YQS",
      "name": "St Thomas Municipal"
    },
    {
      "icao": "CYIF",
      "iata": "YIF",
      "name": "St-Augustin - St Augustin"
    },
    {
      "icao": "CYAY",
      "iata": "YAY",
      "name": "St. Anthony"
    },
    {
      "icao": "CYJT",
      "iata": "YJT",
      "name": "Stephenville Dymond"
    },
    {
      "icao": "CZST",
      "iata": "ZST",
      "name": "Stewart"
    },
    {
      "icao": "CYSF",
      "iata": "YSF",
      "name": "Stony Rapids"
    },
    {
      "icao": "CYSB",
      "iata": "YSB",
      "name": "Sudbury"
    },
    {
      "icao": "CZJN",
      "iata": "ZJN",
      "name": "Swan River"
    },
    {
      "icao": "CYYN",
      "iata": "YYN",
      "name": "Swift Current"
    },
    {
      "icao": "CYQY",
      "iata": "YQY",
      "name": "Sydney / J.A. Douglas McCurdy"
    },
    {
      "icao": "CYZW",
      "iata": "YZW",
      "name": "Teslin"
    },
    {
      "icao": "CYQD",
      "iata": "YQD",
      "name": "The Pas"
    },
    {
      "icao": "CZLQ",
      "iata": "YTD",
      "name": "Thicket Portage"
    },
    {
      "icao": "CYTH",
      "iata": "YTH",
      "name": "Thompson"
    },
    {
      "icao": "CYQT",
      "iata": "YQT",
      "name": "Thunder Bay"
    },
    {
      "icao": "CYTS",
      "iata": "YTS",
      "name": "Timmins/Victor M. Power"
    },
    {
      "icao": "CYAZ",
      "iata": "YAZ",
      "name": "Tofino / Long Beach"
    },
    {
      "icao": "CYRQ",
      "iata": "YRQ",
      "name": "Trois-Rivières"
    },
    {
      "icao": "CYVO",
      "iata": "YVO",
      "name": "Val-d'Or"
    },
    {
      "icao": "CYVK",
      "iata": "YVE",
      "name": "Vernon Regional"
    },
    {
      "icao": "CYWK",
      "iata": "YWK",
      "name": "Wabush"
    },
    {
      "icao": "CYQH",
      "iata": "YQH",
      "name": "Watson Lake"
    },
    {
      "icao": "CYXZ",
      "iata": "YXZ",
      "name": "Wawa"
    },
    {
      "icao": "CYZU",
      "iata": "YZU",
      "name": "Whitecourt"
    },
    {
      "icao": "CYXY",
      "iata": "YXY",
      "name": "Whitehorse / Erik Nielsen"
    },
    {
      "icao": "CYVV",
      "iata": "YVV",
      "name": "Wiarton"
    },
    {
      "icao": "CYWL",
      "iata": "YWL",
      "name": "Williams Lake"
    },
    {
      "icao": "CYQG",
      "iata": "YQG",
      "name": "Windsor"
    },
    {
      "icao": "CYAV",
      "iata": "",
      "name": "Winnipeg/Saint Andrews - Winnipeg / St. Andrews"
    },
    {
      "icao": "CYWY",
      "iata": "YWY",
      "name": "Wrigley"
    },
    {
      "icao": "CYQI",
      "iata": "YQI",
      "name": "Yarmouth"
    },
    {
      "icao": "CYZF",
      "iata": "YZF",
      "name": "Yellowknife"
    },
    {
      "icao": "CYQV",
      "iata": "YQV",
      "name": "Yorkton Municipal"
    }
  ],
  "Cape Verde": [
    {
      "icao": "GVAC",
      "iata": "SID",
      "name": "Espargos - Amílcar Cabral"
    },
    {
      "icao": "GVNP",
      "iata": "RAI",
      "name": "Praia - Nelson Mandela"
    },
    {
      "icao": "GVBA",
      "iata": "BVC",
      "name": "Rabil - Aristides Pereira"
    },
    {
      "icao": "GVSV",
      "iata": "VXE",
      "name": "São Pedro - Cesaria Evora"
    },
    {
      "icao": "GVSN",
      "iata": "SNE",
      "name": "Preguiça"
    },
    {
      "icao": "GVMA",
      "iata": "MMO",
      "name": "Vila do Maio - Maio"
    }
  ],
  "Caribbean Netherlands": [
    {
      "icao": "TNCB",
      "iata": "BON",
      "name": "Kralendijk - Flamingo"
    },
    {
      "icao": "TNCE",
      "iata": "EUX",
      "name": "Oranjestad - F. D. Roosevelt"
    },
    {
      "icao": "TNCS",
      "iata": "SAB",
      "name": "Zion's Hill - Juancho E. Yrausquin"
    }
  ],
  "Cayman Islands": [
    {
      "icao": "MWCR",
      "iata": "GCM",
      "name": "George Town - Owen Roberts"
    },
    {
      "icao": "MWCL",
      "iata": "LYB",
      "name": "Blossom Village - Edward Bodden Little Cayman Airfield"
    },
    {
      "icao": "MWCB",
      "iata": "CYB",
      "name": "West End - Charles Kirkconnell"
    }
  ],
  "Central African Republic": [
    {
      "icao": "FEFF",
      "iata": "BGF",
      "name": "Bangui M'Poko"
    },
    {
      "icao": "FEFT",
      "iata": "BBT",
      "name": "Berbérati"
    }
  ],
  "Chad": [
    {
      "icao": "FTTJ",
      "iata": "NDJ",
      "name": "N'Djamena"
    },
    {
      "icao": "FTTC",
      "iata": "AEH",
      "name": "Abeche"
    },
    {
      "icao": "FTTY",
      "iata": "FYT",
      "name": "Faya-Largeau"
    },
    {
      "icao": "FTTD",
      "iata": "MQQ",
      "name": "Moundou"
    }
  ],
  "Chile": [
    {
      "icao": "SCFA",
      "iata": "ANF",
      "name": "Antofagasta - Andrés Sabella Gálvez"
    },
    {
      "icao": "SCIE",
      "iata": "CCP",
      "name": "Concepcion - Carriel Sur"
    },
    {
      "icao": "SCDA",
      "iata": "IQQ",
      "name": "Iquique - Diego Aracena"
    },
    {
      "icao": "SCIP",
      "iata": "IPC",
      "name": "Isla De Pascua - Mataveri"
    },
    {
      "icao": "SCTE",
      "iata": "PMC",
      "name": "Puerto Montt - El Tepual"
    },
    {
      "icao": "SCCI",
      "iata": "PUQ",
      "name": "Punta Arenas - President Carlos Ibáñez"
    },
    {
      "icao": "SCEL",
      "iata": "SCL",
      "name": "Santiago - Comodoro Arturo Merino Benítez"
    },
    {
      "icao": "SCQP",
      "iata": "ZCO",
      "name": "Temuco - La Araucanía"
    },
    {
      "icao": "SCAR",
      "iata": "ARI",
      "name": "Arica - Chacalluta"
    },
    {
      "icao": "SCBA",
      "iata": "BBA",
      "name": "Balmaceda"
    },
    {
      "icao": "SCCF",
      "iata": "CJC",
      "name": "Calama - El Loa"
    },
    {
      "icao": "SCRA",
      "iata": "CNR",
      "name": "Chañaral"
    },
    {
      "icao": "SCCC",
      "iata": "CCH",
      "name": "Chile Chico"
    },
    {
      "icao": "SCCH",
      "iata": "YAI",
      "name": "Chillan - Gral. Bernardo O´Higgins"
    },
    {
      "icao": "SCHR",
      "iata": "LGR",
      "name": "Cochrane"
    },
    {
      "icao": "SCAT",
      "iata": "CPO",
      "name": "Copiapo - Desierto de Atacama"
    },
    {
      "icao": "SCCY",
      "iata": "GXQ",
      "name": "Coyhaique - Teniente Vidal"
    },
    {
      "icao": "SCES",
      "iata": "ESR",
      "name": "El Salvador - Ricardo García Posada"
    },
    {
      "icao": "SCSE",
      "iata": "LSC",
      "name": "La Serena-Coquimbo - La Florida"
    },
    {
      "icao": "SCTN",
      "iata": "WCH",
      "name": "Nuevo Chaitén"
    },
    {
      "icao": "SCJO",
      "iata": "ZOS",
      "name": "Osorno - Cañal Bajo Carlos Hott Siebert"
    },
    {
      "icao": "SCFM",
      "iata": "WPR",
      "name": "Porvenir - Captain Fuentes Martinez"
    },
    {
      "icao": "SCNT",
      "iata": "PNT",
      "name": "Puerto Natales - Lieutenant Julio Gallardo"
    },
    {
      "icao": "SCGZ",
      "iata": "WPU",
      "name": "Puerto Williams - Guardia Marina Zañartu"
    },
    {
      "icao": "SCRG",
      "iata": "",
      "name": "Rancagua - La Independencia"
    },
    {
      "icao": "SCTL",
      "iata": "TLX",
      "name": "Talca - Panguilemo"
    },
    {
      "icao": "SCTT",
      "iata": "TTC",
      "name": "Taltal - Las Breas"
    },
    {
      "icao": "SCTC",
      "iata": "PZS",
      "name": "Temuco - Maquehue"
    },
    {
      "icao": "SCBE",
      "iata": "TOQ",
      "name": "Tocopilla - Barriles"
    },
    {
      "icao": "SCVD",
      "iata": "ZAL",
      "name": "Valdivia - Pichoy"
    },
    {
      "icao": "SCLL",
      "iata": "VLR",
      "name": "Vallenar"
    },
    {
      "icao": "SCTO",
      "iata": "ZIC",
      "name": "Victoria"
    },
    {
      "icao": "SCVM",
      "iata": "KNA",
      "name": "Viña del Mar"
    }
  ],
  "China": [
    {
      "icao": "ZBOW",
      "iata": "BAV",
      "name": "Baotou Donghe"
    },
    {
      "icao": "ZBAA",
      "iata": "PEK",
      "name": "Beijing Capital"
    },
    {
      "icao": "ZBAD",
      "iata": "PKX",
      "name": "Beijing Daxing"
    },
    {
      "icao": "ZYCC",
      "iata": "CGQ",
      "name": "Changchun Longjia"
    },
    {
      "icao": "ZGHA",
      "iata": "CSX",
      "name": "Changsha (Changsha) - Changsha Huanghua"
    },
    {
      "icao": "ZUTF",
      "iata": "TFU",
      "name": "Chengdu (Jianyang) - Chengdu Tianfu"
    },
    {
      "icao": "ZUUU",
      "iata": "CTU",
      "name": "Chengdu (Shuangliu) - Chengdu Shuangliu"
    },
    {
      "icao": "ZUCK",
      "iata": "CKG",
      "name": "Chongqing Jiangbei"
    },
    {
      "icao": "ZYTL",
      "iata": "DLC",
      "name": "Dalian (Ganjingzi) - Dalian Zhoushuizi"
    },
    {
      "icao": "ZBDT",
      "iata": "DAT",
      "name": "Datong Yungang"
    },
    {
      "icao": "ZLDH",
      "iata": "DNH",
      "name": "Dunhuang Mogao"
    },
    {
      "icao": "ZHEC",
      "iata": "EHU",
      "name": "Ezhou Huahu"
    },
    {
      "icao": "ZSFZ",
      "iata": "FOC",
      "name": "Fuzhou (Changle) - Fuzhou Changle"
    },
    {
      "icao": "ZGGG",
      "iata": "CAN",
      "name": "Guangzhou (Huadu) - Guangzhou Baiyun"
    },
    {
      "icao": "ZGKL",
      "iata": "KWL",
      "name": "Guilin (Lingui) - Guilin Liangjiang"
    },
    {
      "icao": "ZUGY",
      "iata": "KWE",
      "name": "Guiyang (Nanming) - Guiyang Longdongbao"
    },
    {
      "icao": "ZLXN",
      "iata": "XNN",
      "name": "Haidong (Huzhu Tu Autonomous County) - Xining Caojiabao"
    },
    {
      "icao": "ZJHK",
      "iata": "HAK",
      "name": "Haikou (Meilan) - Haikou Meilan"
    },
    {
      "icao": "ZSHC",
      "iata": "HGH",
      "name": "Hangzhou Xiaoshan"
    },
    {
      "icao": "ZYHB",
      "iata": "HRB",
      "name": "Harbin Taiping"
    },
    {
      "icao": "ZSOF",
      "iata": "HFE",
      "name": "Hefei Xinqiao"
    },
    {
      "icao": "ZBHH",
      "iata": "HET",
      "name": "Hohhot Baita"
    },
    {
      "icao": "ZSSH",
      "iata": "HIA",
      "name": "Huai'an Lianshui"
    },
    {
      "icao": "ZSTX",
      "iata": "TXN",
      "name": "Huangshan Tunxi"
    },
    {
      "icao": "ZBLA",
      "iata": "HLD",
      "name": "Hulunbuir Hailar"
    },
    {
      "icao": "ZLJQ",
      "iata": "JGN",
      "name": "Jiayuguan"
    },
    {
      "icao": "ZGOW",
      "iata": "SWA",
      "name": "Jieyang (Rongcheng) - Jieyang Chaoshan"
    },
    {
      "icao": "ZSJN",
      "iata": "TNA",
      "name": "Jinan (Licheng) - Jinan Yaoqiang"
    },
    {
      "icao": "ZPJH",
      "iata": "JHG",
      "name": "Jinghong (Gasa) - Xishuangbanna Gasa"
    },
    {
      "icao": "ZWSH",
      "iata": "KHG",
      "name": "Kashgar Laining"
    },
    {
      "icao": "ZPPP",
      "iata": "KMG",
      "name": "Kunming Changshui"
    },
    {
      "icao": "ZLLL",
      "iata": "LHW",
      "name": "Lanzhou (Yongdeng) - Lanzhou Zhongchuan"
    },
    {
      "icao": "ZSLG",
      "iata": "LYG",
      "name": "Lianyungang Huaguoshan"
    },
    {
      "icao": "ZPLJ",
      "iata": "LJG",
      "name": "Lijiang Sanyi"
    },
    {
      "icao": "ZHLY",
      "iata": "LYA",
      "name": "Luoyang (Laocheng) - Luoyang Beijiao"
    },
    {
      "icao": "ZSCN",
      "iata": "KHN",
      "name": "Nanchang Changbei"
    },
    {
      "icao": "ZSNJ",
      "iata": "NKG",
      "name": "Nanjing Lukou"
    },
    {
      "icao": "ZGNN",
      "iata": "NNG",
      "name": "Nanning (Jiangnan) - Nanning Wuxu"
    },
    {
      "icao": "ZSNB",
      "iata": "NGB",
      "name": "Ningbo Lishe"
    },
    {
      "icao": "ZBDS",
      "iata": "DSN",
      "name": "Ordos Ejin Horo"
    },
    {
      "icao": "ZSQD",
      "iata": "TAO",
      "name": "Qingdao (Jiaozhou) - Qingdao Jiaodong"
    },
    {
      "icao": "ZYQQ",
      "iata": "NDG",
      "name": "Qiqihar Sanjiazi"
    },
    {
      "icao": "ZSQZ",
      "iata": "JJN",
      "name": "Quanzhou Jinjiang"
    },
    {
      "icao": "ZJSY",
      "iata": "SYX",
      "name": "Sanya (Tianya) - Sanya Phoenix"
    },
    {
      "icao": "ZSSS",
      "iata": "SHA",
      "name": "Shanghai (Minhang) - Shanghai Hongqiao"
    },
    {
      "icao": "ZSPD",
      "iata": "PVG",
      "name": "Shanghai (Pudong) - Shanghai Pudong"
    },
    {
      "icao": "ZULS",
      "iata": "LXA",
      "name": "Shannan (Gonggar) - Lhasa Gonggar"
    },
    {
      "icao": "ZYTX",
      "iata": "SHE",
      "name": "Shenyang Taoxian"
    },
    {
      "icao": "ZGSZ",
      "iata": "SZX",
      "name": "Shenzhen Bao'an"
    },
    {
      "icao": "ZBSJ",
      "iata": "SJW",
      "name": "Shijiazhuang Zhengding"
    },
    {
      "icao": "ZBYN",
      "iata": "TYN",
      "name": "Taiyuan Wusu"
    },
    {
      "icao": "ZBTJ",
      "iata": "TSN",
      "name": "Tianjin Binhai"
    },
    {
      "icao": "ZSWZ",
      "iata": "WNZ",
      "name": "Wenzhou (Longwan) - Wenzhou Longwan"
    },
    {
      "icao": "ZHHH",
      "iata": "WUH",
      "name": "Wuhan (Huangpi) - Wuhan Tianhe"
    },
    {
      "icao": "ZSWX",
      "iata": "WUX",
      "name": "Wuxi - Sunan Shuofang"
    },
    {
      "icao": "ZSAM",
      "iata": "XMN",
      "name": "Xiamen Gaoqi"
    },
    {
      "icao": "ZLXY",
      "iata": "XIY",
      "name": "Xianyang (Weicheng) - Xi'an Xianyang"
    },
    {
      "icao": "ZURK",
      "iata": "RKZ",
      "name": "Xigazê (Samzhubzê) - Xigaze Peace Airport / Shigatse Air Base"
    },
    {
      "icao": "ZSYN",
      "iata": "YNZ",
      "name": "Yancheng (Tinghu) - Yancheng Nanyang"
    },
    {
      "icao": "ZSYT",
      "iata": "YNT",
      "name": "Yantai Penglai"
    },
    {
      "icao": "ZLIC",
      "iata": "INC",
      "name": "Yinchuan Hedong"
    },
    {
      "icao": "ZSYW",
      "iata": "YIW",
      "name": "Yiwu/Jinhua - Yiwu"
    },
    {
      "icao": "ZBYC",
      "iata": "YCU",
      "name": "Yuncheng (Yanhu) - Yuncheng Yanhu"
    },
    {
      "icao": "ZGDY",
      "iata": "DYG",
      "name": "Zhangjiajie (Yongding) - Zhangjiajie Hehua"
    },
    {
      "icao": "ZGZJ",
      "iata": "ZHA",
      "name": "Zhanjiang Wuchuan"
    },
    {
      "icao": "ZHCC",
      "iata": "CGO",
      "name": "Zhengzhou Xinzheng"
    },
    {
      "icao": "ZSZS",
      "iata": "HSN",
      "name": "Zhoushan Putuoshan"
    },
    {
      "icao": "ZGSD",
      "iata": "ZUH",
      "name": "Zhuhai (Jinwan) - Zhuhai Jinwan"
    },
    {
      "icao": "ZWWW",
      "iata": "URC",
      "name": "Ürümqi Tianshan"
    },
    {
      "icao": "ZWAK",
      "iata": "AKU",
      "name": "Aksu (Onsu) - Aksu Hongqipo"
    },
    {
      "icao": "ZWAT",
      "iata": "AAT",
      "name": "Altay Xuedu"
    },
    {
      "icao": "ZBAL",
      "iata": "AXF",
      "name": "Alxa Left Banner Bayanhot"
    },
    {
      "icao": "ZSAQ",
      "iata": "AQG",
      "name": "Anqing Tianzhushan Airport / Anqing North Air Base"
    },
    {
      "icao": "ZYAS",
      "iata": "AOG",
      "name": "Anshan Teng'ao Airport / Anshan Air Base"
    },
    {
      "icao": "ZUAS",
      "iata": "AVA",
      "name": "Anshun (Xixiu) - Anshun Huangguoshu"
    },
    {
      "icao": "ZBES",
      "iata": "YIE",
      "name": "Arxan Yi'ershi"
    },
    {
      "icao": "ZYBA",
      "iata": "DBC",
      "name": "Baicheng Chang'an"
    },
    {
      "icao": "ZGBS",
      "iata": "AEB",
      "name": "Baise (Tianyang) - Baise (Bose) Bama"
    },
    {
      "icao": "ZPBS",
      "iata": "BSD",
      "name": "Baoshan (Longyang) - Baoshan Yunrui"
    },
    {
      "icao": "ZPTC",
      "iata": "TCZ",
      "name": "Baoshan (Tengchong) - Tengchong Tuofeng"
    },
    {
      "icao": "ZWLK",
      "iata": "DHH",
      "name": "Barkol Dahe"
    },
    {
      "icao": "ZBYZ",
      "iata": "RLK",
      "name": "Bayannur Tianjitai"
    },
    {
      "icao": "ZUBZ",
      "iata": "BZX",
      "name": "Bazhong Enyang"
    },
    {
      "icao": "ZGBH",
      "iata": "BHY",
      "name": "Beihai Fucheng"
    },
    {
      "icao": "ZBNJ",
      "iata": "",
      "name": "Beijing Nanjiao"
    },
    {
      "icao": "ZBXJ",
      "iata": "",
      "name": "Beijing Xijiao"
    },
    {
      "icao": "ZBBB",
      "iata": "",
      "name": "Beijing Xijiao"
    },
    {
      "icao": "ZSBB",
      "iata": "BFU",
      "name": "Bengbu Renheji"
    },
    {
      "icao": "ZSBA",
      "iata": "BFY",
      "name": "Bengbu Tenghu"
    },
    {
      "icao": "ZUBJ",
      "iata": "BFJ",
      "name": "Bijie Feixiong"
    },
    {
      "icao": "ZWBL",
      "iata": "BPL",
      "name": "Bole Alashankou"
    },
    {
      "icao": "ZUPL",
      "iata": "APJ",
      "name": "Burang Town - Ali Pulan"
    },
    {
      "icao": "ZWKN",
      "iata": "KJI",
      "name": "Burqin Kanas"
    },
    {
      "icao": "ZYBS",
      "iata": "NBS",
      "name": "Changbaishan"
    },
    {
      "icao": "ZGCD",
      "iata": "CGD",
      "name": "Changde (Dingcheng) - Changde Taohuayuan"
    },
    {
      "icao": "ZSCG",
      "iata": "CZX",
      "name": "Changzhou Benniu"
    },
    {
      "icao": "ZBCD",
      "iata": "CDE",
      "name": "Chengde Puning"
    },
    {
      "icao": "ZGCZ",
      "iata": "HCZ",
      "name": "Chenzhou Beihu"
    },
    {
      "icao": "ZBCF",
      "iata": "CIF",
      "name": "Chifeng Yulong"
    },
    {
      "icao": "ZPYM",
      "iata": "YUA",
      "name": "Chuxiong (Yuanmou) - Yuanmou Air Base"
    },
    {
      "icao": "ZYYY",
      "iata": "",
      "name": "Dadong, Shenyang - Shenyang Dongta"
    },
    {
      "icao": "ZPDL",
      "iata": "DLU",
      "name": "Dali (Xiaguan) - Dali Fengyi"
    },
    {
      "icao": "ZYDD",
      "iata": "DDG",
      "name": "Dandong (Zhenxing) - Dandong Langtou"
    },
    {
      "icao": "ZUDA",
      "iata": "DZH",
      "name": "Dazhou (Dachuan) - Dazhou Jinya"
    },
    {
      "icao": "ZPMS",
      "iata": "LUM",
      "name": "Dehong (Mangshi) - Dehong Mangshi"
    },
    {
      "icao": "ZUGH",
      "iata": "GHN",
      "name": "Deyang (Guanghan) - Guanghan"
    },
    {
      "icao": "ZPDQ",
      "iata": "DIG",
      "name": "Diqing (Shangri-La) - Diqing Shangri-La"
    },
    {
      "icao": "ZSDY",
      "iata": "DOY",
      "name": "Dongying (Kenli) - Dongying Shengli"
    },
    {
      "icao": "ZHES",
      "iata": "ENH",
      "name": "Enshi (Enshi) - Enshi Xujiaping"
    },
    {
      "icao": "ZBER",
      "iata": "ERL",
      "name": "Erenhot Saiwusu"
    },
    {
      "icao": "ZGFS",
      "iata": "FUO",
      "name": "Foshan (Nanhai) - Foshan Shadi"
    },
    {
      "icao": "ZYFY",
      "iata": "FYJ",
      "name": "Fuyuan Dongji"
    },
    {
      "icao": "ZWFY",
      "iata": "FYN",
      "name": "Fuyun Koktokay"
    },
    {
      "icao": "ZLXH",
      "iata": "GXH",
      "name": "Gannan (Xiahe) - Gannan Xiahe"
    },
    {
      "icao": "ZUDC",
      "iata": "DCY",
      "name": "Garzê (Daocheng) - Daocheng Yading"
    },
    {
      "icao": "ZUKD",
      "iata": "KGT",
      "name": "Garzê (Kangding) - Kangding"
    },
    {
      "icao": "ZLGM",
      "iata": "GOQ",
      "name": "Golmud"
    },
    {
      "icao": "ZLGL",
      "iata": "GMQ",
      "name": "Golog (Maqên) - Golog Maqên"
    },
    {
      "icao": "ZUGU",
      "iata": "GYS",
      "name": "Guangyuan (Lizhou) - Guangyuan Panlong"
    },
    {
      "icao": "ZLGY",
      "iata": "GYU",
      "name": "Guyuan (Yuanzhou) - Guyuan Liupanshan"
    },
    {
      "icao": "ZLHN",
      "iata": "",
      "name": "Hainan (Gonghe) - Hainanzhou Gonghe"
    },
    {
      "icao": "ZWHM",
      "iata": "HMI",
      "name": "Hami"
    },
    {
      "icao": "ZBHD",
      "iata": "HDG",
      "name": "Handan"
    },
    {
      "icao": "ZLHZ",
      "iata": "HZG",
      "name": "Hanzhong (Chenggu) - Hanzhong Chenggu"
    },
    {
      "icao": "ZGHC",
      "iata": "HCJ",
      "name": "Hechi (Jinchengjiang) - Hechi Jinchengjiang"
    },
    {
      "icao": "ZYDU",
      "iata": "DTU",
      "name": "Heihe - Wudalianchi Dedu"
    },
    {
      "icao": "ZYHE",
      "iata": "HEK",
      "name": "Heihe Aihui"
    },
    {
      "icao": "ZSHZ",
      "iata": "HZA",
      "name": "Heze (Dingtao) - Heze Mudan"
    },
    {
      "icao": "ZBHZ",
      "iata": "HUO",
      "name": "Holingol Huolinhe"
    },
    {
      "icao": "ZWTN",
      "iata": "HTN",
      "name": "Hotan"
    },
    {
      "icao": "ZGCJ",
      "iata": "HJJ",
      "name": "Huaihua Zhijiang"
    },
    {
      "icao": "ZGHZ",
      "iata": "HUZ",
      "name": "Huizhou (Pingtan) - Huizhou Pingtan"
    },
    {
      "icao": "ZYXC",
      "iata": "XEN",
      "name": "Huludao (Xingcheng) - Xingcheng Air Base"
    },
    {
      "icao": "ZSGS",
      "iata": "JGS",
      "name": "Ji'an - Jinggangshan"
    },
    {
      "icao": "ZYJD",
      "iata": "JGD",
      "name": "Jiagedaqi - Daxing'anling Elunchun"
    },
    {
      "icao": "ZYJM",
      "iata": "JMU",
      "name": "Jiamusi Songjiang"
    },
    {
      "icao": "ZYJS",
      "iata": "JSJ",
      "name": "Jiansanjiang Shidi"
    },
    {
      "icao": "ZSJD",
      "iata": "JDZ",
      "name": "Jingdezhen Luojia"
    },
    {
      "icao": "ZHJZ",
      "iata": "SHS",
      "name": "Jingzhou (Shashi) - Jingzhou Shashi"
    },
    {
      "icao": "ZSJG",
      "iata": "JNG",
      "name": "Jining Da'an"
    },
    {
      "icao": "ZYJZ",
      "iata": "JNZ",
      "name": "Jinzhou (Linghai) - Jinzhou Bay"
    },
    {
      "icao": "ZYJX",
      "iata": "JXA",
      "name": "Jixi Xingkaihu"
    },
    {
      "icao": "ZUKJ",
      "iata": "KJH",
      "name": "Kaili  (Huangping) - Kaili Huangping"
    },
    {
      "icao": "ZWKL",
      "iata": "KRL",
      "name": "Korla Licheng"
    },
    {
      "icao": "ZUXC",
      "iata": "XIC",
      "name": "Liangshan (Xichang) - Xichang Qingshan"
    },
    {
      "icao": "ZPCW",
      "iata": "CWJ",
      "name": "Lincang (Cangyuan) - Cangyuan Washan"
    },
    {
      "icao": "ZPLC",
      "iata": "LNJ",
      "name": "Lincang Boshang"
    },
    {
      "icao": "ZBLF",
      "iata": "LFQ",
      "name": "Linfen (Yaodu) - Linfen Yaodu"
    },
    {
      "icao": "ZSLY",
      "iata": "LYI",
      "name": "Linyi (Hedong) - Linyi Qiyang"
    },
    {
      "icao": "ZUNP",
      "iata": "HZH",
      "name": "Liping"
    },
    {
      "icao": "ZUPS",
      "iata": "LPF",
      "name": "Liupanshui (Zhongshan) - Liupanshui Yuezhao"
    },
    {
      "icao": "ZGZH",
      "iata": "LZH",
      "name": "Liuzhou (Liujiang) - Liuzhou Bailian Airport / Bailian Air Base"
    },
    {
      "icao": "ZLLN",
      "iata": "LNL",
      "name": "Longnan (Cheng) - Longnan Chengzhou"
    },
    {
      "icao": "ZSLO",
      "iata": "LCX",
      "name": "Longyan (Liancheng) - Liancheng Guanzhishan"
    },
    {
      "icao": "ZULZ",
      "iata": "LZO",
      "name": "Luzhou (Yunlong) - Luzhou Yunlong"
    },
    {
      "icao": "ZBLL",
      "iata": "LLV",
      "name": "Lüliang Dawu"
    },
    {
      "icao": "ZBMZ",
      "iata": "NZH",
      "name": "Manzhouli Xijiao"
    },
    {
      "icao": "ZLHX",
      "iata": "HTT",
      "name": "Mengnai - Huatugou"
    },
    {
      "icao": "ZUMY",
      "iata": "MIG",
      "name": "Mianyang (Fucheng) - Mianyang Nanjiao"
    },
    {
      "icao": "ZYMH",
      "iata": "OHE",
      "name": "Mohe Gulian"
    },
    {
      "icao": "ZYMD",
      "iata": "MDG",
      "name": "Mudanjiang Hailang"
    },
    {
      "icao": "ZULA",
      "iata": "LZG",
      "name": "Nanchong (Langzhong) - Langzhong Gucheng"
    },
    {
      "icao": "ZSWY",
      "iata": "WUS",
      "name": "Nanping Wuyishan"
    },
    {
      "icao": "ZSNT",
      "iata": "NTG",
      "name": "Nantong (Tongzhou) - Nantong Xingdong"
    },
    {
      "icao": "ZUHY",
      "iata": "AHJ",
      "name": "Ngawa (Hongyuan) - Hongyuan"
    },
    {
      "icao": "ZUJZ",
      "iata": "JZH",
      "name": "Ngawa (Songpan) - Jiuzhai Huanglong"
    },
    {
      "icao": "ZPNL",
      "iata": "NLH",
      "name": "Ninglang Luguhu"
    },
    {
      "icao": "ZUNZ",
      "iata": "LZY",
      "name": "Nyingchi (Mainling) - Nyingchi Mainling"
    },
    {
      "icao": "ZUZH",
      "iata": "PZI",
      "name": "Panzhihua (Renhe) - Panzhihua Bao'anying"
    },
    {
      "icao": "ZPJM",
      "iata": "JMJ",
      "name": "Pu'er (Lancang) - Lancang Jingmai"
    },
    {
      "icao": "ZUBD",
      "iata": "BPX",
      "name": "Qamdo Bangda"
    },
    {
      "icao": "ZYSQ",
      "iata": "YSQ",
      "name": "Qian Gorlos Mongol Autonomous County - Songyuan Chaganhu"
    },
    {
      "icao": "ZUQJ",
      "iata": "JIQ",
      "name": "Qianjiang Wulingshan"
    },
    {
      "icao": "ZWCM",
      "iata": "IQM",
      "name": "Qiemo Yudu"
    },
    {
      "icao": "ZLQY",
      "iata": "IQN",
      "name": "Qingyang (Xifeng) - Qingyang Xifeng"
    },
    {
      "icao": "ZBDH",
      "iata": "BPE",
      "name": "Qinhuangdao (Changli) - Qinhuangdao Beidaihe"
    },
    {
      "icao": "ZJQH",
      "iata": "BAR",
      "name": "Qionghai (Basuo) - Qionghai Bo'ao"
    },
    {
      "icao": "ZSJU",
      "iata": "JUZ",
      "name": "Quzhou (Kezheng) - Quzhou"
    },
    {
      "icao": "ZSRZ",
      "iata": "RIZ",
      "name": "Rizhao (Donggang) - Rizhao Shanzihe"
    },
    {
      "icao": "ZSRG",
      "iata": "RUG",
      "name": "Rugao (Nantong) - Rugao Air Base"
    },
    {
      "icao": "ZWRQ",
      "iata": "RQA",
      "name": "Ruoqiang Town - Ruoqiang Loulan"
    },
    {
      "icao": "ZSSM",
      "iata": "SQJ",
      "name": "Sanming (Sha) - Sanming Shaxian"
    },
    {
      "icao": "ZWSC",
      "iata": "QSZ",
      "name": "Shache"
    },
    {
      "icao": "ZSSR",
      "iata": "SQD",
      "name": "Shangrao (Hengfeng) - Shangrao Sanqingshan"
    },
    {
      "icao": "ZWSS",
      "iata": "SXJ",
      "name": "Shanshan"
    },
    {
      "icao": "ZGSG",
      "iata": "HSC",
      "name": "Shaoguan Danxia"
    },
    {
      "icao": "ZGSY",
      "iata": "WGN",
      "name": "Shaoyang (Wugang) - Shaoyang Wugang"
    },
    {
      "icao": "ZHSN",
      "iata": "HPG",
      "name": "Shennongjia (Hongping) - Shennongjia Hongping"
    },
    {
      "icao": "ZUAL",
      "iata": "NGQ",
      "name": "Shiquanhe - Ngari Gunsa"
    },
    {
      "icao": "ZHSY",
      "iata": "WDS",
      "name": "Shiyan (Maojian) - Shiyan Wudangshan"
    },
    {
      "icao": "ZYCY",
      "iata": "CHG",
      "name": "Shuangta, Chaoyang - Chaoyang"
    },
    {
      "icao": "ZBSG",
      "iata": "SZH",
      "name": "Shuozhou Zirun"
    },
    {
      "icao": "ZSSZ",
      "iata": "SZV",
      "name": "Suzhou Guangfu"
    },
    {
      "icao": "ZSLQ",
      "iata": "HYN",
      "name": "Taizhou (Luqiao) - Taizhou Luqiao"
    },
    {
      "icao": "ZGWZ",
      "iata": "WUZ",
      "name": "Tangbu - Wuzhou Xijiang"
    },
    {
      "icao": "ZWTK",
      "iata": "HQL",
      "name": "Tashikuergan Hongqilafu"
    },
    {
      "icao": "ZLTS",
      "iata": "THQ",
      "name": "Tianshui (Maiji) - Tianshui Maijishan"
    },
    {
      "icao": "ZYTN",
      "iata": "TNH",
      "name": "Tonghua Sanyuanpu"
    },
    {
      "icao": "ZBTL",
      "iata": "TGO",
      "name": "Tongliao"
    },
    {
      "icao": "ZUTR",
      "iata": "TEN",
      "name": "Tongren (Daxing) - Tongren Fenghuang"
    },
    {
      "icao": "ZUDJ",
      "iata": "DEJ",
      "name": "Tongren Dejiang Airport (Under Construction)"
    },
    {
      "icao": "ZWTL",
      "iata": "TLQ",
      "name": "Turpan Jiaohe"
    },
    {
      "icao": "ZSWF",
      "iata": "WEF",
      "name": "Weifang (Kuiwen) - Weifang Nanyuan"
    },
    {
      "icao": "ZSWH",
      "iata": "WEH",
      "name": "Weihai Dashuibo"
    },
    {
      "icao": "ZBUH",
      "iata": "WUA",
      "name": "Wuhai"
    },
    {
      "icao": "ZSWA",
      "iata": "WHA",
      "name": "Wuhu Xuanzhou"
    },
    {
      "icao": "ZUWL",
      "iata": "CQW",
      "name": "Wulong - Chongqing Xiannüshan"
    },
    {
      "icao": "ZLSN",
      "iata": "SIA",
      "name": "Xi'an (Baqiao) - Xi'an Xiguan"
    },
    {
      "icao": "ZHGH",
      "iata": "LHK",
      "name": "Xiangyang (Laohekou) - Guangzhou MR Air Base / Guanghua"
    },
    {
      "icao": "ZHXF",
      "iata": "XFN",
      "name": "Xiangyang (Xiangzhou) - Xiangyang Liuji"
    },
    {
      "icao": "ZUDR",
      "iata": "DDR",
      "name": "Xigazê (Dingri) - Rikaze Dingri"
    },
    {
      "icao": "ZBXH",
      "iata": "XIL",
      "name": "Xilinhot"
    },
    {
      "icao": "ZUYI",
      "iata": "ACX",
      "name": "Xingyi Wanfenglin"
    },
    {
      "icao": "ZHXY",
      "iata": "XAI",
      "name": "Xinyang Minggang"
    },
    {
      "icao": "ZWNL",
      "iata": "NLT",
      "name": "Xinyuan Nalati"
    },
    {
      "icao": "ZSJX",
      "iata": "JNH",
      "name": "Xiuzhou, Hangzhou - Jiaxing Nanhu"
    },
    {
      "icao": "ZSXZ",
      "iata": "XUZ",
      "name": "Xuzhou Guanyin"
    },
    {
      "icao": "ZLYA",
      "iata": "ENY",
      "name": "Yan'an (Baota) - Yan'an Nanniwan"
    },
    {
      "icao": "ZSYA",
      "iata": "YTY",
      "name": "Yangzhou Taizhou"
    },
    {
      "icao": "ZYYJ",
      "iata": "YNJ",
      "name": "Yanji Chaoyangchuan"
    },
    {
      "icao": "ZUYB",
      "iata": "YBP",
      "name": "Yibin (Cuiping) - Yibin Wuliangye"
    },
    {
      "icao": "ZHYC",
      "iata": "YIH",
      "name": "Yichang (Xiaoting) - Yichang Sanxia"
    },
    {
      "icao": "ZYLD",
      "iata": "LDS",
      "name": "Yichun Lindu"
    },
    {
      "icao": "ZSYC",
      "iata": "YIC",
      "name": "Yichun Mingyueshan"
    },
    {
      "icao": "ZYYK",
      "iata": "YKH",
      "name": "Yingkou (Laobian) - Yingkou Lanqi"
    },
    {
      "icao": "ZSFY",
      "iata": "FUG",
      "name": "Yingzhou, Fuyang - Fuyang Xiguan"
    },
    {
      "icao": "ZGLG",
      "iata": "LLF",
      "name": "Yongzhou Lingling"
    },
    {
      "icao": "ZGYY",
      "iata": "YYA",
      "name": "Yueyang (Yueyanglou) - Yueyang Sanhe"
    },
    {
      "icao": "ZGYL",
      "iata": "YLX",
      "name": "Yulin Fumian"
    },
    {
      "icao": "ZLYL",
      "iata": "UYN",
      "name": "Yulin Yuyang"
    },
    {
      "icao": "ZLYS",
      "iata": "YUS",
      "name": "Yushu (Batang) - Yushu Batang"
    },
    {
      "icao": "ZBZL",
      "iata": "NZL",
      "name": "Zhalantun Genghis Khan"
    },
    {
      "icao": "ZBZJ",
      "iata": "ZQZ",
      "name": "Zhangjiakou Ningyuan"
    },
    {
      "icao": "ZLZY",
      "iata": "YZY",
      "name": "Zhangye (Ganzhou) - Zhangye Ganzhou"
    },
    {
      "icao": "ZPZT",
      "iata": "ZAT",
      "name": "Zhaotong Zhaoyang Airport （Not fully opened)"
    },
    {
      "icao": "ZLZW",
      "iata": "ZHY",
      "name": "Zhongwei (Shapotou) - Zhongwei Shapotou"
    },
    {
      "icao": "ZUMT",
      "iata": "WMT",
      "name": "Zunyi Maotai"
    },
    {
      "icao": "ZUZY",
      "iata": "ZYI",
      "name": "Zunyi Xinzhou"
    }
  ],
  "Christmas Island": [
    {
      "icao": "YPXM",
      "iata": "XCH",
      "name": "Flying Fish Cove - Christmas Island"
    }
  ],
  "Cocos (Keeling) Islands": [
    {
      "icao": "YPCC",
      "iata": "CCK",
      "name": "West Island - Cocos (Keeling) Islands"
    }
  ],
  "Colombia": [
    {
      "icao": "SKBQ",
      "iata": "BAQ",
      "name": "Barranquilla - Ernesto Cortissoz"
    },
    {
      "icao": "SKBO",
      "iata": "BOG",
      "name": "Bogota - El Dorado"
    },
    {
      "icao": "SKCL",
      "iata": "CLO",
      "name": "Cali - Alfonso Bonilla Aragon"
    },
    {
      "icao": "SKCG",
      "iata": "CTG",
      "name": "Cartagena - Rafael Nuñez"
    },
    {
      "icao": "SKRG",
      "iata": "MDE",
      "name": "Medellín - Jose Maria Córdova"
    },
    {
      "icao": "SKSP",
      "iata": "ADZ",
      "name": "San Andrés - Gustavo Rojas Pinilla"
    },
    {
      "icao": "SKUC",
      "iata": "AUC",
      "name": "Arauca - Santiago Perez"
    },
    {
      "icao": "SKAR",
      "iata": "AXM",
      "name": "Armenia - El Eden"
    },
    {
      "icao": "SKBS",
      "iata": "BSC",
      "name": "Bahía Solano - José Celestino Mutis"
    },
    {
      "icao": "SKEJ",
      "iata": "EJA",
      "name": "Barrancabermeja - Yariguíes"
    },
    {
      "icao": "SKBG",
      "iata": "BGA",
      "name": "Bucaramanga - Palonegro"
    },
    {
      "icao": "SKBU",
      "iata": "BUN",
      "name": "Buenaventura - Gerardo Tobar López"
    },
    {
      "icao": "SKLC",
      "iata": "APO",
      "name": "Carepa - Antonio Roldán Betancur"
    },
    {
      "icao": "SKGO",
      "iata": "CRC",
      "name": "Cartago - Santa Ana"
    },
    {
      "icao": "SKCU",
      "iata": "CAQ",
      "name": "Caucasia - Juan H White"
    },
    {
      "icao": "SKPS",
      "iata": "PSO",
      "name": "Chachagüí - Antonio Nariño"
    },
    {
      "icao": "SKCZ",
      "iata": "CZU",
      "name": "Corozal - Las Brujas"
    },
    {
      "icao": "SKCV",
      "iata": "CVE",
      "name": "Coveñas"
    },
    {
      "icao": "SKCC",
      "iata": "CUC",
      "name": "Cúcuta - Camilo Daza"
    },
    {
      "icao": "SKYP",
      "iata": "EYP",
      "name": "El Alcaravan - Yopal"
    },
    {
      "icao": "SKEB",
      "iata": "EBG",
      "name": "El Bagre"
    },
    {
      "icao": "SKBC",
      "iata": "ELB",
      "name": "El Banco - Las Flores"
    },
    {
      "icao": "SKFL",
      "iata": "FLA",
      "name": "Florencia - Gustavo Artunduaga Paredes"
    },
    {
      "icao": "SKGI",
      "iata": "GIR",
      "name": "Girardot - Santiago Vila"
    },
    {
      "icao": "SKAP",
      "iata": "API",
      "name": "Gomez Nino Apiay Air Base"
    },
    {
      "icao": "SKGP",
      "iata": "GPI",
      "name": "Guapi"
    },
    {
      "icao": "SKIB",
      "iata": "IBE",
      "name": "Ibagué - Perales"
    },
    {
      "icao": "SKIP",
      "iata": "IPI",
      "name": "Ipiales - San Luis"
    },
    {
      "icao": "SKPQ",
      "iata": "PAL",
      "name": "La Dorada - German Olano Air Base"
    },
    {
      "icao": "SKLM",
      "iata": "MCJ",
      "name": "La Mina-Maicao - Jorge Isaac"
    },
    {
      "icao": "SKLT",
      "iata": "LET",
      "name": "Leticia - Alfredo Vásquez Cobo"
    },
    {
      "icao": "SKMG",
      "iata": "MGN",
      "name": "Magangué - Baracoa"
    },
    {
      "icao": "SKMZ",
      "iata": "MZL",
      "name": "Manizales - La Nubia"
    },
    {
      "icao": "SKQU",
      "iata": "MQU",
      "name": "Mariquita"
    },
    {
      "icao": "SKMD",
      "iata": "EOH",
      "name": "Medellín - Enrique Olaya Herrera"
    },
    {
      "icao": "SKMU",
      "iata": "MVP",
      "name": "Mitú - Fabio Alberto Leon Bentley"
    },
    {
      "icao": "SKMR",
      "iata": "MTR",
      "name": "Montería - Los Garzones"
    },
    {
      "icao": "SKNV",
      "iata": "NVA",
      "name": "Neiva - Benito Salas"
    },
    {
      "icao": "SKOC",
      "iata": "OCV",
      "name": "Ocaña - Aguas Claras"
    },
    {
      "icao": "SKPZ",
      "iata": "PZA",
      "name": "Paz de Ariporo"
    },
    {
      "icao": "SKPE",
      "iata": "PEI",
      "name": "Pereira - Matecaña"
    },
    {
      "icao": "SKPI",
      "iata": "PTX",
      "name": "Pitalito"
    },
    {
      "icao": "SKPP",
      "iata": "PPN",
      "name": "Popayán - Guillermo León Valencia"
    },
    {
      "icao": "SKPV",
      "iata": "PVA",
      "name": "Providencia - El Embrujo"
    },
    {
      "icao": "SKAS",
      "iata": "PUU",
      "name": "Puerto Asís - Tres De Mayo"
    },
    {
      "icao": "SKPC",
      "iata": "PCR",
      "name": "Puerto Carreño - German Olano"
    },
    {
      "icao": "SKPD",
      "iata": "PDA",
      "name": "Puerto Inírida - Obando Cesar Gaviria Trujillo"
    },
    {
      "icao": "SKUI",
      "iata": "UIB",
      "name": "Quibdó - El Caraño"
    },
    {
      "icao": "SKRH",
      "iata": "RCH",
      "name": "Riohacha - Almirante Padilla"
    },
    {
      "icao": "SKSJ",
      "iata": "SJE",
      "name": "San José Del Guaviare - Jorge E. Gonzalez Torres"
    },
    {
      "icao": "SKSV",
      "iata": "SVI",
      "name": "San Vicente Del Caguán - Eduardo Falla Solano"
    },
    {
      "icao": "SKSM",
      "iata": "SMR",
      "name": "Santa Marta - Simón Bolívar"
    },
    {
      "icao": "SKTM",
      "iata": "TME",
      "name": "Tame - Gustavo Vargas"
    },
    {
      "icao": "SKTQ",
      "iata": "TQS",
      "name": "Tres Esquinas - Captain Ernesto Esguerra Cubides Air Base"
    },
    {
      "icao": "SKUL",
      "iata": "ULQ",
      "name": "Tuluá - Heriberto Gíl Martínez"
    },
    {
      "icao": "SKCO",
      "iata": "TCO",
      "name": "Tumaco - La Florida"
    },
    {
      "icao": "SKVP",
      "iata": "VUP",
      "name": "Valledupar - Alfonso López Pumarejo"
    },
    {
      "icao": "SKVV",
      "iata": "VVC",
      "name": "Villavicencio - Vanguardia"
    }
  ],
  "Comoros": [
    {
      "icao": "FMCH",
      "iata": "HAH",
      "name": "Moroni - Prince Said Ibrahim"
    },
    {
      "icao": "FMCI",
      "iata": "NWA",
      "name": "Fomboni - Mohéli Bandar Es Eslam"
    },
    {
      "icao": "FMCV",
      "iata": "AJN",
      "name": "Ouani"
    }
  ],
  "Cook Islands": [
    {
      "icao": "NCRG",
      "iata": "RAR",
      "name": "Avarua - Rarotonga"
    }
  ],
  "Costa Rica": [
    {
      "icao": "MRLB",
      "iata": "LIR",
      "name": "Liberia - Daniel Oduber Quirós"
    },
    {
      "icao": "MROC",
      "iata": "SJO",
      "name": "San José (Alajuela) - Juan Santamaría"
    },
    {
      "icao": "MRCC",
      "iata": "OTR",
      "name": "Corredores - Coto 47"
    },
    {
      "icao": "MRGF",
      "iata": "GLF",
      "name": "Golfito"
    },
    {
      "icao": "MRAN",
      "iata": "FON",
      "name": "La Fortuna Arenal"
    },
    {
      "icao": "MRLM",
      "iata": "LIO",
      "name": "Limón"
    },
    {
      "icao": "MRLC",
      "iata": "LSL",
      "name": "Los Chiles"
    },
    {
      "icao": "MRNS",
      "iata": "NOB",
      "name": "Nicoya - Nosara"
    },
    {
      "icao": "MRPM",
      "iata": "PMZ",
      "name": "Palmar Sur"
    },
    {
      "icao": "MRBC",
      "iata": "BCL",
      "name": "Pococi - Barra del Colorado"
    },
    {
      "icao": "MRGP",
      "iata": "GPL",
      "name": "Pococi - Guapiles"
    },
    {
      "icao": "MRPJ",
      "iata": "PJM",
      "name": "Puerto Jimenez"
    },
    {
      "icao": "MRBA",
      "iata": "BAI",
      "name": "Punta Arenas - Buenos Aires"
    },
    {
      "icao": "MRQP",
      "iata": "XQP",
      "name": "Quepos Managua"
    },
    {
      "icao": "MRPV",
      "iata": "SYQ",
      "name": "San Jose - Tobías Bolaños"
    },
    {
      "icao": "MRUP",
      "iata": "UPL",
      "name": "Upala"
    }
  ],
  "Croatia": [
    {
      "icao": "LDDU",
      "iata": "DBV",
      "name": "Dubrovnik Ruđer Bošković"
    },
    {
      "icao": "LDPL",
      "iata": "PUY",
      "name": "Pula"
    },
    {
      "icao": "LDRI",
      "iata": "RJK",
      "name": "Rijeka(Omišalj) - Rijeka"
    },
    {
      "icao": "LDSP",
      "iata": "SPU",
      "name": "Split Saint Jerome"
    },
    {
      "icao": "LDZA",
      "iata": "ZAG",
      "name": "Velika Gorica - Zagreb Franjo Tuđman"
    },
    {
      "icao": "LDZD",
      "iata": "ZAD",
      "name": "Zadar"
    },
    {
      "icao": "LDSB",
      "iata": "BWK",
      "name": "Gornji Humac - Brač"
    },
    {
      "icao": "LDOS",
      "iata": "OSI",
      "name": "Osijek(Klisa) - Osijek"
    }
  ],
  "Cuba": [
    {
      "icao": "MUCM",
      "iata": "CMW",
      "name": "Camaguey - Ignacio Agramonte"
    },
    {
      "icao": "MUHA",
      "iata": "HAV",
      "name": "Havana - José Martí"
    },
    {
      "icao": "MUHG",
      "iata": "HOG",
      "name": "Holguin - Frank Pais"
    },
    {
      "icao": "MUVR",
      "iata": "VRA",
      "name": "Matanzas - Juan Gualberto Gomez"
    },
    {
      "icao": "MUSC",
      "iata": "SNU",
      "name": "Santa Clara - Abel Santamaria"
    },
    {
      "icao": "MUCU",
      "iata": "SCU",
      "name": "Santiago - Antonio Maceo"
    },
    {
      "icao": "MUBA",
      "iata": "BCA",
      "name": "Baracoa - Gustavo Rizo"
    },
    {
      "icao": "MUBY",
      "iata": "BYM",
      "name": "Bayamo - Carlos Manuel de Cespedes"
    },
    {
      "icao": "MUCC",
      "iata": "CCC",
      "name": "Cayo Coco - Jardines Del Rey"
    },
    {
      "icao": "MUCL",
      "iata": "CYO",
      "name": "Cayo Largo del Sur - Vilo Acuña"
    },
    {
      "icao": "MUCF",
      "iata": "CFG",
      "name": "Cienfuegos - Jaime Gonzalez"
    },
    {
      "icao": "MUCA",
      "iata": "AVI",
      "name": "Ciro Redondo - Máximo Gómez"
    },
    {
      "icao": "MUGM",
      "iata": "NBW",
      "name": "Guantanamo Bay Naval Station - Leeward Point Field"
    },
    {
      "icao": "MUGT",
      "iata": "GAO",
      "name": "Guantánamo - Mariana Grajales"
    },
    {
      "icao": "MUPB",
      "iata": "UPB",
      "name": "Havana - Playa Baracoa"
    },
    {
      "icao": "MUSN",
      "iata": "SZJ",
      "name": "Isla de la Juventud - Siguanea"
    },
    {
      "icao": "MUVT",
      "iata": "VTU",
      "name": "Las Tunas - Hermanos Ameijeiras"
    },
    {
      "icao": "MUMZ",
      "iata": "MZO",
      "name": "Manzanillo - Sierra Maestra"
    },
    {
      "icao": "MUMO",
      "iata": "MOA",
      "name": "Moa - Orestes Acosta"
    },
    {
      "icao": "MUNG",
      "iata": "GER",
      "name": "Nueva Gerona - Rafael Cabrera"
    },
    {
      "icao": "MUSJ",
      "iata": "SNJ",
      "name": "Sandino - San Julián Air Base"
    },
    {
      "icao": "MUKW",
      "iata": "VRO",
      "name": "Santa Marta - Kawama"
    },
    {
      "icao": "MUTD",
      "iata": "TND",
      "name": "Trinidad - Alberto Delgado"
    }
  ],
  "Curaçao": [
    {
      "icao": "TNCC",
      "iata": "CUR",
      "name": "Willemstad - Hato"
    }
  ],
  "Cyprus": [
    {
      "icao": "LCLK",
      "iata": "LCA",
      "name": "Larnaca"
    },
    {
      "icao": "LCPH",
      "iata": "PFO",
      "name": "Paphos"
    },
    {
      "icao": "LCEN",
      "iata": "ECN",
      "name": "Tymbou (Kirklar) - Ercan"
    },
    {
      "icao": "LCGK",
      "iata": "GEC",
      "name": "Lefkoniko (Geçitkale) - Lefkoniko Airport / Geçitkale Air Base"
    },
    {
      "icao": "LCRA",
      "iata": "AKT",
      "name": "RAF Akrotiri"
    }
  ],
  "Czech Republic": [
    {
      "icao": "LKKV",
      "iata": "KLV",
      "name": "Karlovy Vary"
    },
    {
      "icao": "LKMT",
      "iata": "OSR",
      "name": "Mošnov - Leoš Janáček Airport Ostrava"
    },
    {
      "icao": "LKPD",
      "iata": "PED",
      "name": "Pardubice"
    },
    {
      "icao": "LKPR",
      "iata": "PRG",
      "name": "Václav Havel Airport Prague"
    },
    {
      "icao": "LKCS",
      "iata": "JCL",
      "name": "České Budějovice South Bohemian"
    },
    {
      "icao": "LKTB",
      "iata": "BRQ",
      "name": "Brno-Tuřany"
    },
    {
      "icao": "LKCV",
      "iata": "",
      "name": "Chotusice - Čáslav Air Base"
    },
    {
      "icao": "LKLN",
      "iata": "",
      "name": "Plzen - Plzeň-Líně"
    },
    {
      "icao": "LKKB",
      "iata": "",
      "name": "Prague–Kbely Air Base"
    },
    {
      "icao": "LKPO",
      "iata": "PRV",
      "name": "Přerov Air Base"
    },
    {
      "icao": "LKNA",
      "iata": "",
      "name": "Sedlec - Náměšť Air Base"
    },
    {
      "icao": "LKKU",
      "iata": "UHE",
      "name": "Uherské Hradiště - Kunovice"
    },
    {
      "icao": "LKVO",
      "iata": "VOD",
      "name": "Vodochody"
    }
  ],
  "Côte d'Ivoire": [
    {
      "icao": "DIAP",
      "iata": "ABJ",
      "name": "Abidjan - Félix-Houphouët-Boigny"
    },
    {
      "icao": "DIYO",
      "iata": "ASK",
      "name": "Yamoussoukro"
    },
    {
      "icao": "DIBK",
      "iata": "BYK",
      "name": "Bouaké"
    },
    {
      "icao": "DIDL",
      "iata": "DJO",
      "name": "Daloa"
    },
    {
      "icao": "DIKO",
      "iata": "HGO",
      "name": "Korhogo"
    },
    {
      "icao": "DIMN",
      "iata": "MJC",
      "name": "Man Airport"
    },
    {
      "icao": "DISP",
      "iata": "SPY",
      "name": "San Pedro"
    }
  ],
  "Democratic Republic of the Congo": [
    {
      "icao": "FZNA",
      "iata": "GOM",
      "name": "Goma"
    },
    {
      "icao": "FZAA",
      "iata": "FIH",
      "name": "Kinshasa - Ndjili"
    },
    {
      "icao": "FZIC",
      "iata": "FKI",
      "name": "Kisangani - Bangoka"
    },
    {
      "icao": "FZQA",
      "iata": "FBM",
      "name": "Lubumbashi"
    },
    {
      "icao": "FZBO",
      "iata": "FDU",
      "name": "Bandundu"
    },
    {
      "icao": "FZKA",
      "iata": "BUX",
      "name": "Bunia"
    },
    {
      "icao": "FZKJ",
      "iata": "BZU",
      "name": "Buta Zega"
    },
    {
      "icao": "FZFD",
      "iata": "BDT",
      "name": "Gbadolite"
    },
    {
      "icao": "FZFK",
      "iata": "GMA",
      "name": "Gemena"
    },
    {
      "icao": "FZJH",
      "iata": "IRP",
      "name": "Isiro - Matari"
    },
    {
      "icao": "FZRF",
      "iata": "FMI",
      "name": "Kalemie"
    },
    {
      "icao": "FZMA",
      "iata": "BKY",
      "name": "Kamakombe - Bukavu Kavumu"
    },
    {
      "icao": "FZUA",
      "iata": "KGA",
      "name": "Kananga"
    },
    {
      "icao": "FZCA",
      "iata": "KKW",
      "name": "Kikwit"
    },
    {
      "icao": "FZOA",
      "iata": "KND",
      "name": "Kindu"
    },
    {
      "icao": "FZQM",
      "iata": "KWZ",
      "name": "Kolwezi"
    },
    {
      "icao": "FZGA",
      "iata": "LIQ",
      "name": "Lisala"
    },
    {
      "icao": "FZSA",
      "iata": "",
      "name": "Lumwe - Kamina Air Base"
    },
    {
      "icao": "FZEA",
      "iata": "MDK",
      "name": "Mbandaka"
    },
    {
      "icao": "FZWA",
      "iata": "MJM",
      "name": "Mbuji Mayi"
    },
    {
      "icao": "FZAB",
      "iata": "NLO",
      "name": "N'dolo - Ndolo"
    }
  ],
  "Denmark": [
    {
      "icao": "EKYT",
      "iata": "AAL",
      "name": "Aalborg"
    },
    {
      "icao": "EKAH",
      "iata": "AAR",
      "name": "Aarhus"
    },
    {
      "icao": "EKBI",
      "iata": "BLL",
      "name": "Billund"
    },
    {
      "icao": "EKCH",
      "iata": "CPH",
      "name": "Copenhagen Kastrup"
    },
    {
      "icao": "EKOD",
      "iata": "ODE",
      "name": "Odense Hans Christian Andersen"
    },
    {
      "icao": "EKRK",
      "iata": "RKE",
      "name": "Copenhagen Roskilde"
    },
    {
      "icao": "EKEB",
      "iata": "EBJ",
      "name": "Esbjerg"
    },
    {
      "icao": "EKKA",
      "iata": "KRP",
      "name": "Midtjyllands Airport / Air Base Karup"
    },
    {
      "icao": "EKMB",
      "iata": "MRW",
      "name": "Rødby - Lolland Falster Maribo"
    },
    {
      "icao": "EKRN",
      "iata": "RNN",
      "name": "Rønne - Bornholm"
    },
    {
      "icao": "EKSN",
      "iata": "CNL",
      "name": "Sindal"
    },
    {
      "icao": "EKSV",
      "iata": "SQW",
      "name": "Skive"
    },
    {
      "icao": "EKVJ",
      "iata": "STA",
      "name": "Skjern - Stauning Vestjylland "
    },
    {
      "icao": "EKSB",
      "iata": "SGD",
      "name": "Sønderborg"
    },
    {
      "icao": "EKTS",
      "iata": "TED",
      "name": "Thisted"
    },
    {
      "icao": "EKSP",
      "iata": "SKS",
      "name": "Vojens - Skrydstrup Air Base"
    }
  ],
  "Djibouti": [
    {
      "icao": "HDAM",
      "iata": "JIB",
      "name": "Djibouti City - Djibouti-Ambouli"
    }
  ],
  "Dominica": [
    {
      "icao": "TDCF",
      "iata": "DCF",
      "name": "Canefield"
    },
    {
      "icao": "TDPD",
      "iata": "DOM",
      "name": "Marigot - Douglas-Charles"
    }
  ],
  "Dominican Republic": [
    {
      "icao": "MDLR",
      "iata": "LRM",
      "name": "La Romana - Casa De Campo"
    },
    {
      "icao": "MDPC",
      "iata": "PUJ",
      "name": "Punta Cana"
    },
    {
      "icao": "MDST",
      "iata": "STI",
      "name": "Santiago - Cibao"
    },
    {
      "icao": "MDSD",
      "iata": "SDQ",
      "name": "Santo Domingo - Las Américas"
    },
    {
      "icao": "MDBH",
      "iata": "BRX",
      "name": "Barahona - Maria Montez"
    },
    {
      "icao": "MDCR",
      "iata": "CBJ",
      "name": "Cabo Rojo"
    },
    {
      "icao": "MDJB",
      "iata": "JBQ",
      "name": "La Isabela"
    },
    {
      "icao": "MDPP",
      "iata": "POP",
      "name": "Puerto Plata - Gregorio Luperon"
    },
    {
      "icao": "MDCY",
      "iata": "AZS",
      "name": "Samana - Samaná El Catey"
    }
  ],
  "Ecuador": [
    {
      "icao": "SEGU",
      "iata": "GYE",
      "name": "Guayaquil - José Joaquín de Olmedo"
    },
    {
      "icao": "SEQM",
      "iata": "UIO",
      "name": "Quito - Mariscal Sucre"
    },
    {
      "icao": "SESA",
      "iata": "SNC",
      "name": "Salinas/La Libertad - General Ulpiano Paez"
    },
    {
      "icao": "SETN",
      "iata": "ESM",
      "name": "Tachina - Carlos Concha Torres"
    },
    {
      "icao": "SEJD",
      "iata": "TNW",
      "name": "Ahuano - Jumandy"
    },
    {
      "icao": "SEAM",
      "iata": "ATF",
      "name": "Ambato - Chachoán Regional"
    },
    {
      "icao": "SECO",
      "iata": "OCC",
      "name": "Coca - Francisco De Orellana"
    },
    {
      "icao": "SECU",
      "iata": "CUE",
      "name": "Cuenca - Mariscal Lamar"
    },
    {
      "icao": "SEGS",
      "iata": "GPS",
      "name": "Isla Baltra - Seymour Galapagos Ecological"
    },
    {
      "icao": "SEMA",
      "iata": "MRR",
      "name": "Macará - Jose Maria Velasco Ibarra"
    },
    {
      "icao": "SEMC",
      "iata": "XMS",
      "name": "Macas - Coronel E Carvajal"
    },
    {
      "icao": "SEMT",
      "iata": "MEC",
      "name": "Manta - Eloy Alfaro"
    },
    {
      "icao": "SEPV",
      "iata": "PVO",
      "name": "Portoviejo - Reales Tamarindos"
    },
    {
      "icao": "SERO",
      "iata": "ETR",
      "name": "Santa Rosa - Artillery Colonel Victor Larrea"
    },
    {
      "icao": "SETR",
      "iata": "TPC",
      "name": "Tarapoa"
    },
    {
      "icao": "SETU",
      "iata": "TUA",
      "name": "Tulcán - Lieutenant Colonel Luis A. Mantilla"
    }
  ],
  "Egypt": [
    {
      "icao": "HESX",
      "iata": "SPX",
      "name": "Al Jiza - Sphinx"
    },
    {
      "icao": "HEAX",
      "iata": "HBE",
      "name": "Alexandria"
    },
    {
      "icao": "HESN",
      "iata": "ASW",
      "name": "Aswan"
    },
    {
      "icao": "HEAT",
      "iata": "ATZ",
      "name": "Asyut"
    },
    {
      "icao": "HEBR",
      "iata": "EES",
      "name": "Berenice Troglodytica - Berenice International Airport / Banas Cape Air Base"
    },
    {
      "icao": "HECA",
      "iata": "CAI",
      "name": "Cairo"
    },
    {
      "icao": "HEAL",
      "iata": "DBB",
      "name": "El Alamein"
    },
    {
      "icao": "HEAR",
      "iata": "AAC",
      "name": "El Arish"
    },
    {
      "icao": "HEGN",
      "iata": "HRG",
      "name": "Hurghada"
    },
    {
      "icao": "HELX",
      "iata": "LXR",
      "name": "Luxor"
    },
    {
      "icao": "HEMA",
      "iata": "RMF",
      "name": "Marsa Alam"
    },
    {
      "icao": "HEMM",
      "iata": "MUH",
      "name": "Marsa Matruh - Mersa Matruh"
    },
    {
      "icao": "HECP",
      "iata": "CCE",
      "name": "New Cairo - Capital"
    },
    {
      "icao": "HEPS",
      "iata": "PSD",
      "name": "Port Said"
    },
    {
      "icao": "HESC",
      "iata": "SKV",
      "name": "Saint Catherine"
    },
    {
      "icao": "HESH",
      "iata": "SSH",
      "name": "Sharm El Sheikh"
    },
    {
      "icao": "HESG",
      "iata": "HMB",
      "name": "Suhaj - Sohag"
    },
    {
      "icao": "HETB",
      "iata": "TCP",
      "name": "Taba"
    },
    {
      "icao": "HEBL",
      "iata": "ABS",
      "name": "Abu Simbel"
    },
    {
      "icao": "HECW",
      "iata": "",
      "name": "Cairo West Air Base"
    },
    {
      "icao": "HEGR",
      "iata": "EGH",
      "name": "El Jora"
    }
  ],
  "El Salvador": [
    {
      "icao": "MSLP",
      "iata": "SAL",
      "name": "San Salvador (San Luis Talpa) - El Salvador International Airport Saint Óscar Arnulfo Romero y Galdámez"
    },
    {
      "icao": "MSSS",
      "iata": "ILS",
      "name": "San Salvador - Ilopango"
    }
  ],
  "Equatorial Guinea": [
    {
      "icao": "FGBT",
      "iata": "BSG",
      "name": "Bata"
    },
    {
      "icao": "FGSL",
      "iata": "SSG",
      "name": "Malabo"
    },
    {
      "icao": "FGMY",
      "iata": "GEM",
      "name": "Mengomeyén - President Obiang Nguema"
    }
  ],
  "Eritrea": [
    {
      "icao": "HHAS",
      "iata": "ASM",
      "name": "Asmara"
    },
    {
      "icao": "HHSB",
      "iata": "ASA",
      "name": "Assab"
    },
    {
      "icao": "HHMS",
      "iata": "MSW",
      "name": "Massawa"
    }
  ],
  "Estonia": [
    {
      "icao": "EETN",
      "iata": "TLL",
      "name": "Lennart Meri Tallinn"
    },
    {
      "icao": "EEEI",
      "iata": "",
      "name": "Keila - Ämari Air Base"
    },
    {
      "icao": "EEKE",
      "iata": "URE",
      "name": "Kuressaare"
    },
    {
      "icao": "EEKA",
      "iata": "KDL",
      "name": "Kärdla"
    },
    {
      "icao": "EEPU",
      "iata": "EPU",
      "name": "Pärnu"
    },
    {
      "icao": "EETU",
      "iata": "TAY",
      "name": "Tartu"
    }
  ],
  "Eswatini": [
    {
      "icao": "FDMS",
      "iata": "MTS",
      "name": "Manzini - Matsapha"
    },
    {
      "icao": "FDSK",
      "iata": "SHO",
      "name": "Mpaka - King Mswati III"
    }
  ],
  "Ethiopia": [
    {
      "icao": "HAAB",
      "iata": "ADD",
      "name": "Addis Ababa Bole"
    },
    {
      "icao": "HADR",
      "iata": "DIR",
      "name": "Dire Dawa - Aba Tenna Dejazmach Yilma"
    },
    {
      "icao": "HALA",
      "iata": "AWA",
      "name": "Hawassa"
    },
    {
      "icao": "HAJJ",
      "iata": "JIJ",
      "name": "Jijiga - Gerad Wilwal"
    },
    {
      "icao": "HAAM",
      "iata": "AMH",
      "name": "Arba Minch"
    },
    {
      "icao": "HASO",
      "iata": "ASO",
      "name": "Asosa"
    },
    {
      "icao": "HAAX",
      "iata": "AXU",
      "name": "Axum"
    },
    {
      "icao": "HAGN",
      "iata": "GDQ",
      "name": "Azezo - Gondar"
    },
    {
      "icao": "HABD",
      "iata": "BJR",
      "name": "Bahir Dar"
    },
    {
      "icao": "HAHM",
      "iata": "QHR",
      "name": "Debre Zeyit - Harar Meda"
    },
    {
      "icao": "HAGM",
      "iata": "GMB",
      "name": "Gambela"
    },
    {
      "icao": "HAGO",
      "iata": "GDE",
      "name": "Gode"
    },
    {
      "icao": "HAJM",
      "iata": "JIM",
      "name": "Jimma"
    },
    {
      "icao": "HABC",
      "iata": "BCO",
      "name": "Jinka - Baco"
    },
    {
      "icao": "HAKD",
      "iata": "ABK",
      "name": "Kebri Dahar"
    },
    {
      "icao": "HAMK",
      "iata": "MQX",
      "name": "Mekele Alula Aba Nega"
    }
  ],
  "Falkland Islands": [
    {
      "icao": "EGYP",
      "iata": "MPN",
      "name": "Mount Pleasant Airport / RAF Mount Pleasant"
    }
  ],
  "Faroe Islands": [
    {
      "icao": "EKVG",
      "iata": "FAE",
      "name": "Vágar"
    }
  ],
  "Fiji": [
    {
      "icao": "NFFN",
      "iata": "NAN",
      "name": "Nadi"
    },
    {
      "icao": "NFNA",
      "iata": "SUV",
      "name": "Nausori"
    },
    {
      "icao": "NFNL",
      "iata": "LBS",
      "name": "Labasa"
    }
  ],
  "Finland": [
    {
      "icao": "EFHK",
      "iata": "HEL",
      "name": "Helsinki (Vantaa) - Helsinki Vantaa"
    },
    {
      "icao": "EFIV",
      "iata": "IVL",
      "name": "Ivalo"
    },
    {
      "icao": "EFKT",
      "iata": "KTT",
      "name": "Kittilä"
    },
    {
      "icao": "EFKU",
      "iata": "KUO",
      "name": "Kuopio / Siilinjärvi - Kuopio"
    },
    {
      "icao": "EFLP",
      "iata": "LPP",
      "name": "Lappeenranta"
    },
    {
      "icao": "EFMA",
      "iata": "MHQ",
      "name": "Mariehamn"
    },
    {
      "icao": "EFOU",
      "iata": "OUL",
      "name": "Oulu / Oulunsalo - Oulu"
    },
    {
      "icao": "EFRO",
      "iata": "RVN",
      "name": "Rovaniemi"
    },
    {
      "icao": "EFTP",
      "iata": "TMP",
      "name": "Tampere / Pirkkala - Tampere-Pirkkala"
    },
    {
      "icao": "EFTU",
      "iata": "TKU",
      "name": "Turku"
    },
    {
      "icao": "EFVA",
      "iata": "VAA",
      "name": "Vaasa"
    },
    {
      "icao": "EFET",
      "iata": "ENF",
      "name": "Enontekio"
    },
    {
      "icao": "EFJO",
      "iata": "JOE",
      "name": "Joensuu"
    },
    {
      "icao": "EFJY",
      "iata": "JYV",
      "name": "Jyväskylän Maalaiskunta - Jyväskylä"
    },
    {
      "icao": "EFHA",
      "iata": "KEV",
      "name": "Jämsä - Halli"
    },
    {
      "icao": "EFKI",
      "iata": "KAJ",
      "name": "Kajaani"
    },
    {
      "icao": "EFKJ",
      "iata": "KHJ",
      "name": "Kauhajoki Airfield"
    },
    {
      "icao": "EFKA",
      "iata": "KAU",
      "name": "Kauhava Airfield"
    },
    {
      "icao": "EFKE",
      "iata": "KEM",
      "name": "Kemi / Tornio - Kemi-Tornio"
    },
    {
      "icao": "EFIT",
      "iata": "KTQ",
      "name": "Kitee"
    },
    {
      "icao": "EFKK",
      "iata": "KOK",
      "name": "Kokkola / Kruunupyy - Kokkola-Pietarsaari"
    },
    {
      "icao": "EFKS",
      "iata": "KAO",
      "name": "Kuusamo"
    },
    {
      "icao": "EFMI",
      "iata": "MIK",
      "name": "Mikkeli"
    },
    {
      "icao": "EFPO",
      "iata": "POR",
      "name": "Pori"
    },
    {
      "icao": "EFSA",
      "iata": "SVL",
      "name": "Savonlinna"
    },
    {
      "icao": "EFSI",
      "iata": "SJY",
      "name": "Seinäjoki / Ilmajoki - Seinäjoki"
    },
    {
      "icao": "EFSO",
      "iata": "SOT",
      "name": "Sodankyla"
    },
    {
      "icao": "EFUT",
      "iata": "UTI",
      "name": "Utti / Valkeala - Utti Air Base"
    },
    {
      "icao": "EFVR",
      "iata": "VRK",
      "name": "Varkaus / Joroinen - Varkaus"
    },
    {
      "icao": "EFYL",
      "iata": "YLI",
      "name": "Ylivieska Airfield"
    }
  ],
  "France": [
    {
      "icao": "LFKB",
      "iata": "BIA",
      "name": "Bastia-Poretta International airport"
    },
    {
      "icao": "LFOB",
      "iata": "BVA",
      "name": "Beauvais-Tillé airport"
    },
    {
      "icao": "LFBD",
      "iata": "BOD",
      "name": "Bordeaux–Mérignac"
    },
    {
      "icao": "LFRB",
      "iata": "BES",
      "name": "Brest Bretagne airport"
    },
    {
      "icao": "LFSB",
      "iata": "BSL",
      "name": "Bâle / Mulhouse - EuroAirport Basel–Mulhouse–Freiburg"
    },
    {
      "icao": "LFLC",
      "iata": "CFE",
      "name": "Clermont-Ferrand Auvergne airport"
    },
    {
      "icao": "LFLL",
      "iata": "LYS",
      "name": "Colombier-Saugnieu, Rhône - Lyon Saint-Exupéry"
    },
    {
      "icao": "LFKF",
      "iata": "FSC",
      "name": "Figari Sud-Corse"
    },
    {
      "icao": "LFQQ",
      "iata": "LIL",
      "name": "Lesquin - Lille"
    },
    {
      "icao": "LFML",
      "iata": "MRS",
      "name": "Marignane, Bouches-du-Rhône - Marseille Provence"
    },
    {
      "icao": "LFMT",
      "iata": "MPL",
      "name": "Montpellier/Méditerranée - Montpellier-Méditerranée"
    },
    {
      "icao": "LFMN",
      "iata": "NCE",
      "name": "Nice, Alpes-Maritimes - Nice-Côte d'Azur"
    },
    {
      "icao": "LFPO",
      "iata": "ORY",
      "name": "Paris (Orly, Val-de-Marne) - Paris-Orly"
    },
    {
      "icao": "LFPG",
      "iata": "CDG",
      "name": "Paris (Roissy-en-France, Val-d'Oise) - Charles de Gaulle"
    },
    {
      "icao": "LFPB",
      "iata": "LBG",
      "name": "Paris-Le Bourget"
    },
    {
      "icao": "LFST",
      "iata": "SXB",
      "name": "Strasbourg"
    },
    {
      "icao": "LFBO",
      "iata": "TLS",
      "name": "Toulouse/Blagnac - Toulouse-Blagnac"
    },
    {
      "icao": "LFBA",
      "iata": "AGF",
      "name": "Agen La Garenne airport"
    },
    {
      "icao": "LFKJ",
      "iata": "AJA",
      "name": "Ajaccio Napoléon Bonaparte airport"
    },
    {
      "icao": "LFCI",
      "iata": "LBI",
      "name": "Albi Le Sequestre airport"
    },
    {
      "icao": "LFAY",
      "iata": "",
      "name": "Amiens Glisy Airfield"
    },
    {
      "icao": "LFMH",
      "iata": "EBU",
      "name": "Andrézieux-Bouthéon, Loire - Saint-Étienne-Bouthéon"
    },
    {
      "icao": "LFJR",
      "iata": "ANE",
      "name": "Angers Marcé airport"
    },
    {
      "icao": "LFBU",
      "iata": "ANG",
      "name": "Angoulême Brie-Champniers airport"
    },
    {
      "icao": "LFLP",
      "iata": "NCY",
      "name": "Annecy Meythet airport"
    },
    {
      "icao": "LFDH",
      "iata": "",
      "name": "Auch Gers Airfield"
    },
    {
      "icao": "LFLW",
      "iata": "AUR",
      "name": "Aurillac airport"
    },
    {
      "icao": "LFLA",
      "iata": "AUF",
      "name": "Auxerre Branches airport"
    },
    {
      "icao": "LFMV",
      "iata": "AVN",
      "name": "Avignon Caumont airport"
    },
    {
      "icao": "LFBE",
      "iata": "EGC",
      "name": "Bergerac Dordogne-Périgord airport"
    },
    {
      "icao": "LFBZ",
      "iata": "BIQ",
      "name": "Biarritz Pays Basque airport"
    },
    {
      "icao": "LFOP",
      "iata": "URO",
      "name": "Boos - Rouen Vallée de Seine"
    },
    {
      "icao": "LFLD",
      "iata": "BOU",
      "name": "Bourges airport"
    },
    {
      "icao": "LFSL",
      "iata": "BVE",
      "name": "Brive Souillac airport"
    },
    {
      "icao": "LFRF",
      "iata": "GFR",
      "name": "Bréville-sur-Mer, Manche - Granville"
    },
    {
      "icao": "LFOI",
      "iata": "",
      "name": "Buigny-Saint-Maclou - Abbeville-Buigny Baie de Somme Airfield"
    },
    {
      "icao": "LFMU",
      "iata": "BZR",
      "name": "Béziers Vias airport"
    },
    {
      "icao": "LFRK",
      "iata": "CFR",
      "name": "Caen Carpiquet airport"
    },
    {
      "icao": "LFCC",
      "iata": "ZAO",
      "name": "Cahors Lalbenque airport"
    },
    {
      "icao": "LFAC",
      "iata": "CQF",
      "name": "Calais Marck"
    },
    {
      "icao": "LFKC",
      "iata": "CLY",
      "name": "Calvi Sainte Catherine"
    },
    {
      "icao": "LFMD",
      "iata": "CEQ",
      "name": "Cannes Mandelieu"
    },
    {
      "icao": "LFMK",
      "iata": "CCF",
      "name": "Carcassonne Salvaza"
    },
    {
      "icao": "LFCK",
      "iata": "DCM",
      "name": "Castres Mazamet"
    },
    {
      "icao": "LFLU",
      "iata": "VAF",
      "name": "Chabeuil, Drôme - Valence-Chabeuil"
    },
    {
      "icao": "LFOK",
      "iata": "XCR",
      "name": "Chalons en Champagne - Chalons Vatry airport"
    },
    {
      "icao": "LFLB",
      "iata": "CMF",
      "name": "Chambéry Aix les Bains airport"
    },
    {
      "icao": "LFQV",
      "iata": "",
      "name": "Charleville-Mézières Ardennes-Etienne Riché Airfield"
    },
    {
      "icao": "LFLV",
      "iata": "VHY",
      "name": "Charmeil, Allier - Vichy-Charmeil"
    },
    {
      "icao": "LFLY",
      "iata": "LYN",
      "name": "Chassieu, Lyon - Lyon Bron"
    },
    {
      "icao": "LFRC",
      "iata": "CER",
      "name": "Cherbourg Manche airport"
    },
    {
      "icao": "LFLX",
      "iata": "CHR",
      "name": "Châteauroux Déols airport"
    },
    {
      "icao": "LFBG",
      "iata": "CNG",
      "name": "Cognac/Châteaubernard - Cognac-Châteaubernard (BA 709) Air Base"
    },
    {
      "icao": "LFGA",
      "iata": "CMR",
      "name": "Colmar Houssen airport"
    },
    {
      "icao": "LFPT",
      "iata": "POX",
      "name": "Cormeilles-en-Vexin, Val-d'Oise - Pontoise-Cormeilles Aerodrome"
    },
    {
      "icao": "LFPC",
      "iata": "CSF",
      "name": "Creil Air Base"
    },
    {
      "icao": "LFRG",
      "iata": "DOL",
      "name": "Deauville Normandie airport"
    },
    {
      "icao": "LFSD",
      "iata": "DIJ",
      "name": "Dijon Longvic airport"
    },
    {
      "icao": "LFRD",
      "iata": "DNR",
      "name": "Dinard Pleurtuit Saint-Malo airport"
    },
    {
      "icao": "LFGJ",
      "iata": "DLE",
      "name": "Dole Tavaux"
    },
    {
      "icao": "LFOE",
      "iata": "EVX",
      "name": "Fauville, Eure - Évreux-Fauville (BA 105) Air Base"
    },
    {
      "icao": "LFJL",
      "iata": "ETZ",
      "name": "Goin - Metz-Nancy-Lorraine"
    },
    {
      "icao": "LFLS",
      "iata": "GNB",
      "name": "Grenoble Alpes Isère"
    },
    {
      "icao": "LFTH",
      "iata": "TLN",
      "name": "Hyères, Var - Toulon-Hyères"
    },
    {
      "icao": "LFMI",
      "iata": "",
      "name": "Istres, Bouches-du-Rhône - Istres-Le Tubé Air Base"
    },
    {
      "icao": "LFLN",
      "iata": "SYT",
      "name": "L'Hôpital-le-Mercier, Saône-et-Loire - Saint-Yan"
    },
    {
      "icao": "LFRE",
      "iata": "LBY",
      "name": "La Baule-Escoublac"
    },
    {
      "icao": "LFRI",
      "iata": "EDM",
      "name": "La Roche-sur-Yon Les Ajoncs"
    },
    {
      "icao": "LFBH",
      "iata": "LRH",
      "name": "La Rochelle Île de Ré"
    },
    {
      "icao": "LFHO",
      "iata": "OBS",
      "name": "Lanas, Ardèche - Aubenas-South Ardèche"
    },
    {
      "icao": "LFRJ",
      "iata": "LDV",
      "name": "Landivisiau Air Base"
    },
    {
      "icao": "LFRO",
      "iata": "LAI",
      "name": "Lannion"
    },
    {
      "icao": "LFOV",
      "iata": "LVA",
      "name": "Laval, Mayenne - Laval-Entrammes"
    },
    {
      "icao": "LFMQ",
      "iata": "CTT",
      "name": "Le Castellet, Var - Le Castellet"
    },
    {
      "icao": "LFOH",
      "iata": "LEH",
      "name": "Le Havre-Octeville"
    },
    {
      "icao": "LFRM",
      "iata": "LME",
      "name": "Le Mans, Sarthe - Le Mans-Arnage"
    },
    {
      "icao": "LFAT",
      "iata": "LTQ",
      "name": "Le Touquet-Paris-Plage - Le Touquet-Côte d'Opale"
    },
    {
      "icao": "LFBL",
      "iata": "LIG",
      "name": "Limoges/Bellegarde - Limoges"
    },
    {
      "icao": "LFRH",
      "iata": "LRT",
      "name": "Lorient/Lann/Bihoué - Lorient South Brittany (Bretagne Sud)"
    },
    {
      "icao": "LFBK",
      "iata": "MCU",
      "name": "Lépaud, Creuse - Montluçon-Guéret"
    },
    {
      "icao": "LFQG",
      "iata": "NVS",
      "name": "Marzy, Nièvre - Nevers-Fourchambault"
    },
    {
      "icao": "LFNB",
      "iata": "MEN",
      "name": "Mende/Brénoux - Mende-Brenoux Airfield"
    },
    {
      "icao": "LFQT",
      "iata": "HZB",
      "name": "Merville, Nord - Merville-Calonne"
    },
    {
      "icao": "LFAG",
      "iata": "",
      "name": "Monchy-Lagache, Somme - Péronne Saint-Quentin Airfield"
    },
    {
      "icao": "LFRU",
      "iata": "MXN",
      "name": "Morlaix/Ploujean - Morlaix-Ploujean"
    },
    {
      "icao": "LFRS",
      "iata": "NTE",
      "name": "Nantes Atlantique"
    },
    {
      "icao": "LFBN",
      "iata": "NIT",
      "name": "Niort/Souché - Niort - Marais Poitevin"
    },
    {
      "icao": "LFTW",
      "iata": "FNI",
      "name": "Nîmes/Garons - Nîmes-Arles-Camargue"
    },
    {
      "icao": "LFBP",
      "iata": "PUF",
      "name": "Pau/Pyrénées (Uzein) - Pau Pyrénées"
    },
    {
      "icao": "LFMP",
      "iata": "PGF",
      "name": "Perpignan/Rivesaltes - Perpignan-Rivesaltes (Llabanère)"
    },
    {
      "icao": "LFBI",
      "iata": "PIS",
      "name": "Poitiers/Biard - Poitiers-Biard"
    },
    {
      "icao": "LFAV",
      "iata": "",
      "name": "Prouvy - Valenciennes-Denain Airfield"
    },
    {
      "icao": "LFBX",
      "iata": "PGX",
      "name": "Périgueux/Bassillac - Périgueux-Bassillac"
    },
    {
      "icao": "LFRQ",
      "iata": "UIP",
      "name": "Quimper/Pluguffan - Quimper-Cornouaille"
    },
    {
      "icao": "LFDN",
      "iata": "RCO",
      "name": "Rochefort/Saint-Agnant - Rochefort-Saint-Agnant (BA 721)"
    },
    {
      "icao": "LFCR",
      "iata": "RDZ",
      "name": "Rodez/Marcillac - Rodez–Aveyron"
    },
    {
      "icao": "LFCY",
      "iata": "RYN",
      "name": "Royan/Médis - Royan-Médis"
    },
    {
      "icao": "LFRN",
      "iata": "RNS",
      "name": "Saint-Jacques-de-la-Lande, Ille-et-Vilaine - Rennes-Saint-Jacques"
    },
    {
      "icao": "LFLO",
      "iata": "RNE",
      "name": "Saint-Léger-sur-Roanne - Roanne-Renaison"
    },
    {
      "icao": "LFRZ",
      "iata": "SNR",
      "name": "Saint-Nazaire/Montoir - Saint-Nazaire-Montoir"
    },
    {
      "icao": "LFKS",
      "iata": "SOZ",
      "name": "Solenzara (BA 126) Air Base"
    },
    {
      "icao": "LFBT",
      "iata": "LDE",
      "name": "Tarbes/Lourdes/Pyrénées - Tarbes-Lourdes-Pyrénées"
    },
    {
      "icao": "LFSN",
      "iata": "ENC",
      "name": "Tomblaine, Meurthe-et-Moselle - Nancy-Essey"
    },
    {
      "icao": "LFOT",
      "iata": "TUF",
      "name": "Tours, Indre-et-Loire - Tours Val de Loire"
    },
    {
      "icao": "LFPN",
      "iata": "TNF",
      "name": "Toussus-le-Noble, Yvelines - Toussus-le-Noble"
    },
    {
      "icao": "LFRT",
      "iata": "SBK",
      "name": "Trémuson, Côtes-d'Armor - Saint-Brieuc-Armor"
    },
    {
      "icao": "LFRV",
      "iata": "VNE",
      "name": "Vannes/Meucon - Vannes-Meucon"
    },
    {
      "icao": "LFSG",
      "iata": "EPL",
      "name": "Épinal Mirecourt"
    }
  ],
  "French Guiana": [
    {
      "icao": "SOCA",
      "iata": "CAY",
      "name": "Matoury - Cayenne – Félix Eboué"
    },
    {
      "icao": "SOOA",
      "iata": "MPY",
      "name": "Maripasoula"
    },
    {
      "icao": "SOOG",
      "iata": "OYP",
      "name": "Saint-Georges-de-l'Oyapock"
    },
    {
      "icao": "SOOM",
      "iata": "LDX",
      "name": "Saint-Laurent-du-Maroni"
    }
  ],
  "French Polynesia": [
    {
      "icao": "NTAA",
      "iata": "PPT",
      "name": "Papeete - Fa'a'ā"
    },
    {
      "icao": "NTHE",
      "iata": "AHE",
      "name": "Ahe Atoll - Ahe"
    },
    {
      "icao": "NTGA",
      "iata": "AAA",
      "name": "Anaa"
    },
    {
      "icao": "NTGU",
      "iata": "AXR",
      "name": "Arutua"
    },
    {
      "icao": "NTGF",
      "iata": "FAV",
      "name": "Fakarava"
    },
    {
      "icao": "NTGB",
      "iata": "FGU",
      "name": "Fangatau"
    },
    {
      "icao": "NTMN",
      "iata": "AUQ",
      "name": "Hiva Oa Island - Hiva Oa-Atuona"
    },
    {
      "icao": "NTTH",
      "iata": "HUH",
      "name": "Huahine-Fare"
    },
    {
      "icao": "NTGM",
      "iata": "MKP",
      "name": "Makemo"
    },
    {
      "icao": "NTGI",
      "iata": "XMH",
      "name": "Manihi"
    },
    {
      "icao": "NTGV",
      "iata": "MVT",
      "name": "Mataiva"
    },
    {
      "icao": "NTTP",
      "iata": "MAU",
      "name": "Maupiti"
    },
    {
      "icao": "NTTM",
      "iata": "MOZ",
      "name": "Moorea-Maiao - Moorea Temae"
    },
    {
      "icao": "NTTB",
      "iata": "BOB",
      "name": "Motu Mute - Bora Bora"
    },
    {
      "icao": "NTMD",
      "iata": "NHV",
      "name": "Nuku Hiva"
    },
    {
      "icao": "NTTO",
      "iata": "HOI",
      "name": "Otepa - Hao"
    },
    {
      "icao": "NTGK",
      "iata": "KKR",
      "name": "Raitahiti - Kaukura"
    },
    {
      "icao": "NTTG",
      "iata": "RGI",
      "name": "Rangiroa"
    },
    {
      "icao": "NTGE",
      "iata": "REA",
      "name": "Reao"
    },
    {
      "icao": "NTAR",
      "iata": "RUR",
      "name": "Rurutu"
    },
    {
      "icao": "NTGT",
      "iata": "TKP",
      "name": "Takapoto"
    },
    {
      "icao": "NTKR",
      "iata": "TKX",
      "name": "Takaroa"
    },
    {
      "icao": "NTGJ",
      "iata": "GMR",
      "name": "Totegegie"
    },
    {
      "icao": "NTAT",
      "iata": "TUB",
      "name": "Tubuai"
    },
    {
      "icao": "NTGC",
      "iata": "TIH",
      "name": "Tuherahera - Tikehau"
    },
    {
      "icao": "NTTR",
      "iata": "RFP",
      "name": "Uturoa - Raiatea"
    }
  ],
  "Gabon": [
    {
      "icao": "FOON",
      "iata": "MVB",
      "name": "Franceville - M'Vengue El Hadj Omar Bongo Ondimba"
    },
    {
      "icao": "FOOL",
      "iata": "LBV",
      "name": "Libreville Leon M'ba"
    },
    {
      "icao": "FOOG",
      "iata": "POG",
      "name": "Port Gentil"
    },
    {
      "icao": "FOOB",
      "iata": "BMM",
      "name": "Bitam"
    },
    {
      "icao": "FOGK",
      "iata": "KOU",
      "name": "Koulamoutou Mabimbi"
    },
    {
      "icao": "FOGR",
      "iata": "LBQ",
      "name": "Lambarene"
    },
    {
      "icao": "FOOK",
      "iata": "MKU",
      "name": "Makokou"
    },
    {
      "icao": "FOGM",
      "iata": "MJL",
      "name": "Mouila - Mouilla Ville"
    },
    {
      "icao": "FOGQ",
      "iata": "OKN",
      "name": "Okondja"
    },
    {
      "icao": "FOOH",
      "iata": "OMB",
      "name": "Omboue Hospital"
    },
    {
      "icao": "FOGO",
      "iata": "OYE",
      "name": "Oyem"
    }
  ],
  "Gambia": [
    {
      "icao": "GBYD",
      "iata": "BJL",
      "name": "Yundum - Banjul"
    }
  ],
  "Georgia": [
    {
      "icao": "UGSB",
      "iata": "BUS",
      "name": "Alexander Kartveli Batumi"
    },
    {
      "icao": "UGKO",
      "iata": "KUT",
      "name": "Kopitnari - David the Builder Kutaisi"
    },
    {
      "icao": "UGTB",
      "iata": "TBS",
      "name": "Tbilisi"
    },
    {
      "icao": "UGAM",
      "iata": "",
      "name": "Ambrolauri"
    },
    {
      "icao": "UGSS",
      "iata": "SUI",
      "name": "Sukhumi - Vladislav Ardzinba Sukhum"
    }
  ],
  "Germany": [
    {
      "icao": "EDDB",
      "iata": "BER",
      "name": "Berlin Brandenburg"
    },
    {
      "icao": "EDNY",
      "iata": "FDH",
      "name": "Bodensee Airport Friedrichshafen"
    },
    {
      "icao": "EDDW",
      "iata": "BRE",
      "name": "Bremen"
    },
    {
      "icao": "EDLP",
      "iata": "PAD",
      "name": "Büren - Paderborn Lippstadt"
    },
    {
      "icao": "EDVK",
      "iata": "KSF",
      "name": "Calden - Kassel"
    },
    {
      "icao": "EDLW",
      "iata": "DTM",
      "name": "Dortmund"
    },
    {
      "icao": "EDDC",
      "iata": "DRS",
      "name": "Dresden"
    },
    {
      "icao": "EDDL",
      "iata": "DUS",
      "name": "Düsseldorf"
    },
    {
      "icao": "EDDE",
      "iata": "ERF",
      "name": "Erfurt-Weimar"
    },
    {
      "icao": "EDFH",
      "iata": "HHN",
      "name": "Frankfurt am Main (Lautzenhausen) - Frankfurt-Hahn"
    },
    {
      "icao": "EDDF",
      "iata": "FRA",
      "name": "Frankfurt am Main - Frankfurt Main"
    },
    {
      "icao": "EDDG",
      "iata": "FMO",
      "name": "Greven - Münster Osnabrück"
    },
    {
      "icao": "EDDH",
      "iata": "HAM",
      "name": "Hamburg Helmut Schmidt"
    },
    {
      "icao": "EDDV",
      "iata": "HAJ",
      "name": "Hannover"
    },
    {
      "icao": "EDDK",
      "iata": "CGN",
      "name": "Köln (Cologne) - Cologne Bonn"
    },
    {
      "icao": "EDJA",
      "iata": "FMM",
      "name": "Memmingen Allgau"
    },
    {
      "icao": "EDDM",
      "iata": "MUC",
      "name": "Munich"
    },
    {
      "icao": "EDDN",
      "iata": "NUE",
      "name": "Nuremberg"
    },
    {
      "icao": "EDSB",
      "iata": "FKB",
      "name": "Rheinmünster - Karlsruhe Baden-Baden"
    },
    {
      "icao": "EDDP",
      "iata": "LEJ",
      "name": "Schkeuditz - Leipzig/Halle"
    },
    {
      "icao": "EDDS",
      "iata": "STR",
      "name": "Stuttgart"
    },
    {
      "icao": "EDLV",
      "iata": "NRN",
      "name": "Weeze (Niederrhein)"
    },
    {
      "icao": "ETSB",
      "iata": "",
      "name": "Alflen - Büchel Air Base"
    },
    {
      "icao": "EDMA",
      "iata": "AGB",
      "name": "Augsburg"
    },
    {
      "icao": "EDQA",
      "iata": "",
      "name": "Bamberg-Breitenau Airfield"
    },
    {
      "icao": "EDLI",
      "iata": "BFE",
      "name": "Bielefeld"
    },
    {
      "icao": "EDQD",
      "iata": "BYU",
      "name": "Bindlach - Bayreuth"
    },
    {
      "icao": "EDVE",
      "iata": "BWE",
      "name": "Braunschweig-Wolfsburg"
    },
    {
      "icao": "EDGS",
      "iata": "SGE",
      "name": "Burbach - Siegerland"
    },
    {
      "icao": "ETHB",
      "iata": "",
      "name": "Bückeburg Air Base"
    },
    {
      "icao": "ETHC",
      "iata": "",
      "name": "Celle Army Airfield"
    },
    {
      "icao": "ETND",
      "iata": "",
      "name": "Diepholz Air Base"
    },
    {
      "icao": "ETHS",
      "iata": "",
      "name": "Faßberg Air Base"
    },
    {
      "icao": "EDFE",
      "iata": "",
      "name": "Frankfurt-Egelsbach"
    },
    {
      "icao": "ETHF",
      "iata": "FRZ",
      "name": "Fritzlar Army Airfield"
    },
    {
      "icao": "ETNG",
      "iata": "GKE",
      "name": "Geilenkirchen Air Base"
    },
    {
      "icao": "ETSL",
      "iata": "",
      "name": "Graben - Lechfeld Air Base"
    },
    {
      "icao": "ETIC",
      "iata": "",
      "name": "Grafenwöhr Army Air Field"
    },
    {
      "icao": "EDHI",
      "iata": "XFW",
      "name": "Hamburg-Finkenwerder"
    },
    {
      "icao": "EDQM",
      "iata": "HOQ",
      "name": "Hof-Plauen"
    },
    {
      "icao": "ETIH",
      "iata": "",
      "name": "Hohenfels Army Airfield"
    },
    {
      "icao": "ETNH",
      "iata": "",
      "name": "Hohn Air Base"
    },
    {
      "icao": "ETSH",
      "iata": "",
      "name": "Holzdorf Air Base"
    },
    {
      "icao": "EDGE",
      "iata": "EIB",
      "name": "Hörselberg-Hainich - Eisenach-Kindel"
    },
    {
      "icao": "ETSI",
      "iata": "IGS",
      "name": "Ingolstadt Manching"
    },
    {
      "icao": "ETNS",
      "iata": "WBG",
      "name": "Jagel - Schleswig Air Base"
    },
    {
      "icao": "EDHK",
      "iata": "KEL",
      "name": "Kiel-Holtenau"
    },
    {
      "icao": "EDTL",
      "iata": "LHA",
      "name": "Lahr/Schwarzwald - Lahr"
    },
    {
      "icao": "EDML",
      "iata": "QLG",
      "name": "Landshut Airfield"
    },
    {
      "icao": "ETHL",
      "iata": "",
      "name": "Laupheim Air Base"
    },
    {
      "icao": "EDHL",
      "iata": "LBC",
      "name": "Lübeck Blankensee"
    },
    {
      "icao": "EDFZ",
      "iata": "",
      "name": "Mainz-Finthen Airfield"
    },
    {
      "icao": "EDFM",
      "iata": "MHG",
      "name": "Mannheim-City"
    },
    {
      "icao": "EDLN",
      "iata": "MGL",
      "name": "Mönchengladbach"
    },
    {
      "icao": "EDBN",
      "iata": "FNB",
      "name": "Neubrandenburg Trollenhagen"
    },
    {
      "icao": "ETSN",
      "iata": "",
      "name": "Neuburg an der Donau - Neuburg Air Base"
    },
    {
      "icao": "ETHN",
      "iata": "",
      "name": "Niederstetten Army Air Base"
    },
    {
      "icao": "EDAC",
      "iata": "AOC",
      "name": "Nobitz - Leipzig–Altenburg"
    },
    {
      "icao": "ETNN",
      "iata": "",
      "name": "Nörvenich Air Base"
    },
    {
      "icao": "ETAR",
      "iata": "RMS",
      "name": "Ramstein-Miesenbach - Ramstein Air Base"
    },
    {
      "icao": "ETNL",
      "iata": "RLG",
      "name": "Rostock-Laage"
    },
    {
      "icao": "EDBR",
      "iata": "",
      "name": "Rothenburg/Oberlausitz - Rothenburg/Görlitz Airfield"
    },
    {
      "icao": "EDDR",
      "iata": "SCN",
      "name": "Saarbrücken"
    },
    {
      "icao": "EDUZ",
      "iata": "",
      "name": "Straguth - Zerbst Airfield"
    },
    {
      "icao": "ETAD",
      "iata": "SPM",
      "name": "Trier - Spangdahlem Air Base"
    },
    {
      "icao": "EDXW",
      "iata": "GWT",
      "name": "Westerland Sylt"
    },
    {
      "icao": "EDMO",
      "iata": "OBF",
      "name": "Weßling - Oberpfaffenhofen"
    },
    {
      "icao": "ETOU",
      "iata": "WIE",
      "name": "Wiesbaden Army Airfield"
    },
    {
      "icao": "ETNT",
      "iata": "",
      "name": "Wittmundhafen Air Base"
    },
    {
      "icao": "ETNW",
      "iata": "",
      "name": "Wunstorf Air Base"
    },
    {
      "icao": "ETMN",
      "iata": "FCN",
      "name": "Wurster Nordseeküste - Sea-Airport Cuxhaven/Nordholz / Nordholz Naval Airbase"
    },
    {
      "icao": "EDAH",
      "iata": "HDF",
      "name": "Zirchow - Heringsdorf"
    }
  ],
  "Ghana": [
    {
      "icao": "DGAA",
      "iata": "ACC",
      "name": "Accra - Kotoka"
    },
    {
      "icao": "DGSI",
      "iata": "KMS",
      "name": "Kumasi - Prempeh I"
    },
    {
      "icao": "DGLE",
      "iata": "TML",
      "name": "Tamale - Yakubu Tali"
    },
    {
      "icao": "DGAH",
      "iata": "",
      "name": "Ho Airport"
    },
    {
      "icao": "DGTK",
      "iata": "TKD",
      "name": "Sekondi-Takoradi - Takoradi"
    },
    {
      "icao": "DGSN",
      "iata": "NYI",
      "name": "Sunyani"
    }
  ],
  "Gibraltar": [
    {
      "icao": "LXGB",
      "iata": "GIB",
      "name": "Gibraltar"
    }
  ],
  "Greece": [
    {
      "icao": "LGIR",
      "iata": "HER",
      "name": "Heraklion International Nikos Kazantzakis"
    },
    {
      "icao": "LGKV",
      "iata": "KVA",
      "name": "Kavala Alexander the Great"
    },
    {
      "icao": "LGKR",
      "iata": "CFU",
      "name": "Kerkyra (Corfu) - Corfu Ioannis Kapodistrias"
    },
    {
      "icao": "LGKO",
      "iata": "KGS",
      "name": "Kos Island - Kos International Airport \"Ippokratis\""
    },
    {
      "icao": "LGRP",
      "iata": "RHO",
      "name": "Rhodes International Airport \"Diagoras\""
    },
    {
      "icao": "LGSR",
      "iata": "JTR",
      "name": "Santorini Island - Santorini"
    },
    {
      "icao": "LGSA",
      "iata": "CHQ",
      "name": "Souda - Chania"
    },
    {
      "icao": "LGAV",
      "iata": "ATH",
      "name": "Spata-Artemida - Athens Eleftherios Venizelos"
    },
    {
      "icao": "LGTS",
      "iata": "SKG",
      "name": "Thessaloniki Macedonia"
    },
    {
      "icao": "LGAL",
      "iata": "AXD",
      "name": "Alexandroupolis - Alexandroupoli Democritus"
    },
    {
      "icao": "LGAD",
      "iata": "PYR",
      "name": "Andravida Air Base"
    },
    {
      "icao": "LGHI",
      "iata": "JKH",
      "name": "Chios Island National"
    },
    {
      "icao": "LGST",
      "iata": "JSH",
      "name": "Crete Island - Sitia"
    },
    {
      "icao": "LGEL",
      "iata": "",
      "name": "Elefsina - Elefsis Air Base"
    },
    {
      "icao": "LGIO",
      "iata": "IOA",
      "name": "Ioannina King Pyrrhus National"
    },
    {
      "icao": "LGKL",
      "iata": "KLX",
      "name": "Kalamata"
    },
    {
      "icao": "LGKP",
      "iata": "AOK",
      "name": "Karpathos Island - Karpathos"
    },
    {
      "icao": "LGKF",
      "iata": "EFL",
      "name": "Kefallinia Island - Kefallinia"
    },
    {
      "icao": "LGKZ",
      "iata": "KZI",
      "name": "Kozani National Airport Filippos"
    },
    {
      "icao": "LGMK",
      "iata": "JMK",
      "name": "Mykonos Island National"
    },
    {
      "icao": "LGMT",
      "iata": "MJT",
      "name": "Mytilene"
    },
    {
      "icao": "LGBL",
      "iata": "VOL",
      "name": "Nea Anchialos National"
    },
    {
      "icao": "LGRX",
      "iata": "GPA",
      "name": "Patras Araxos Agamemnon"
    },
    {
      "icao": "LGPZ",
      "iata": "PVK",
      "name": "Preveza - Aktion National"
    },
    {
      "icao": "LGSM",
      "iata": "SMI",
      "name": "Samos Island - Samos"
    },
    {
      "icao": "LGSK",
      "iata": "JSI",
      "name": "Skiathos Island National"
    },
    {
      "icao": "LGTG",
      "iata": "",
      "name": "Tanagra Air Base"
    },
    {
      "icao": "LGZA",
      "iata": "ZTH",
      "name": "Zakynthos International Airport Dionysios Solomos"
    }
  ],
  "Greenland": [
    {
      "icao": "BGSF",
      "iata": "SFJ",
      "name": "Kangerlussuaq"
    },
    {
      "icao": "BGGH",
      "iata": "GOH",
      "name": "Nuuk"
    },
    {
      "icao": "BGTL",
      "iata": "THU",
      "name": "Pituffik Space Base"
    },
    {
      "icao": "BGAA",
      "iata": "JEG",
      "name": "Aasiaat"
    },
    {
      "icao": "BGJN",
      "iata": "JAV",
      "name": "Ilulissat"
    },
    {
      "icao": "BGKK",
      "iata": "KUS",
      "name": "Kulusuk"
    },
    {
      "icao": "BGBW",
      "iata": "UAK",
      "name": "Narsarsuaq"
    },
    {
      "icao": "BGCO",
      "iata": "CNP",
      "name": "Neerlerit Inaat"
    },
    {
      "icao": "BGQQ",
      "iata": "NAQ",
      "name": "Qaanaaq"
    },
    {
      "icao": "BGSS",
      "iata": "JHS",
      "name": "Sisimiut"
    }
  ],
  "Grenada": [
    {
      "icao": "TGPY",
      "iata": "GND",
      "name": "Saint George's - Maurice Bishop"
    }
  ],
  "Guadeloupe": [
    {
      "icao": "TFFR",
      "iata": "PTP",
      "name": "Pointe-à-Pitre - Maryse Condé"
    },
    {
      "icao": "TFFM",
      "iata": "GBJ",
      "name": "Grand-Bourg - Marie-Galante"
    }
  ],
  "Guam": [
    {
      "icao": "PGUM",
      "iata": "GUM",
      "name": "Hagåtña - Antonio B. Won Pat"
    },
    {
      "icao": "PGUA",
      "iata": "UAM",
      "name": "Yigo - Andersen Air Force Base"
    }
  ],
  "Guatemala": [
    {
      "icao": "MGGT",
      "iata": "GUA",
      "name": "Guatemala City - La Aurora"
    },
    {
      "icao": "MGCB",
      "iata": "CBV",
      "name": "Coban"
    },
    {
      "icao": "MGPB",
      "iata": "PBR",
      "name": "Puerto Barrios"
    },
    {
      "icao": "MGSJ",
      "iata": "GSJ",
      "name": "Puerto San José - San José"
    },
    {
      "icao": "MGRT",
      "iata": "RER",
      "name": "Retalhuleu"
    },
    {
      "icao": "MGRB",
      "iata": "RUV",
      "name": "Rubelsanto"
    }
  ],
  "Guernsey": [
    {
      "icao": "EGJA",
      "iata": "ACI",
      "name": "Saint Anne - Alderney"
    },
    {
      "icao": "EGJB",
      "iata": "GCI",
      "name": "Saint Peter Port - Guernsey"
    }
  ],
  "Guinea": [
    {
      "icao": "GUCY",
      "iata": "CKY",
      "name": "Conakry - Ahmed Sékou Touré"
    }
  ],
  "Guinea-Bissau": [
    {
      "icao": "GGOV",
      "iata": "OXB",
      "name": "Bissau - Osvaldo Vieira"
    }
  ],
  "Guyana": [
    {
      "icao": "SYCJ",
      "iata": "GEO",
      "name": "Georgetown - Cheddi Jagan"
    },
    {
      "icao": "SYKA",
      "iata": "KAI",
      "name": "Kaieteur Falls - Kaieteur"
    },
    {
      "icao": "SYLT",
      "iata": "LTM",
      "name": "Lethem"
    },
    {
      "icao": "SYEC",
      "iata": "OGL",
      "name": "Ogle - Eugene F. Correia"
    }
  ],
  "Haiti": [
    {
      "icao": "MTCH",
      "iata": "CAP",
      "name": "Cap Haitien"
    },
    {
      "icao": "MTPP",
      "iata": "PAP",
      "name": "Port-au-Prince - Toussaint Louverture"
    },
    {
      "icao": "MTJE",
      "iata": "JEE",
      "name": "Carrefour Sanon - Jérémie"
    },
    {
      "icao": "MTJA",
      "iata": "JAK",
      "name": "Jacmel"
    },
    {
      "icao": "MTCA",
      "iata": "CYA",
      "name": "Les Cayes - Antoine-Simon"
    },
    {
      "icao": "MTPX",
      "iata": "PAX",
      "name": "Port-de-Paix"
    }
  ],
  "Honduras": [
    {
      "icao": "MHRO",
      "iata": "RTB",
      "name": "Coxen Hole - Juan Manuel Gálvez"
    },
    {
      "icao": "MHPR",
      "iata": "XPL",
      "name": "Palmerola"
    },
    {
      "icao": "MHLM",
      "iata": "SAP",
      "name": "San Pedro Sula - Ramón Villeda Morales"
    },
    {
      "icao": "MHNJ",
      "iata": "GJA",
      "name": "Guanaja - La Laguna"
    },
    {
      "icao": "MHLC",
      "iata": "LCE",
      "name": "La Ceiba - Golosón"
    },
    {
      "icao": "MHTG",
      "iata": "TGU",
      "name": "Tegucigalpa - Toncontín"
    },
    {
      "icao": "MHTE",
      "iata": "TEA",
      "name": "Tela"
    },
    {
      "icao": "MHTJ",
      "iata": "TJI",
      "name": "Trujillo"
    }
  ],
  "Hong Kong": [
    {
      "icao": "VHHH",
      "iata": "HKG",
      "name": "Hong Kong"
    },
    {
      "icao": "VHSK",
      "iata": "",
      "name": "Islands - Shek Kong Air Base"
    }
  ],
  "Hungary": [
    {
      "icao": "LHBP",
      "iata": "BUD",
      "name": "Budapest Liszt Ferenc"
    },
    {
      "icao": "LHDC",
      "iata": "DEB",
      "name": "Debrecen"
    },
    {
      "icao": "LHPP",
      "iata": "PEV",
      "name": "Pécs-Pogány"
    },
    {
      "icao": "LHPR",
      "iata": "QGY",
      "name": "Győr-Pér"
    },
    {
      "icao": "LHKA",
      "iata": "",
      "name": "Kalocsa-Foktő Airfield"
    },
    {
      "icao": "LHKE",
      "iata": "",
      "name": "Kecskemét Air Base"
    },
    {
      "icao": "LHSN",
      "iata": "",
      "name": "Szolnok Air Base"
    },
    {
      "icao": "LHSM",
      "iata": "SOB",
      "name": "Sármellék - Hévíz–Balaton"
    },
    {
      "icao": "LHTL",
      "iata": "",
      "name": "Tököl"
    }
  ],
  "Iceland": [
    {
      "icao": "BIAR",
      "iata": "AEY",
      "name": "Akureyri"
    },
    {
      "icao": "BIKF",
      "iata": "KEF",
      "name": "Reykjavík - Keflavik"
    },
    {
      "icao": "BIBD",
      "iata": "BIU",
      "name": "Bildudalur"
    },
    {
      "icao": "BIEG",
      "iata": "EGS",
      "name": "Egilsstaðir"
    },
    {
      "icao": "BIGR",
      "iata": "GRY",
      "name": "Grímsey/Sandvík - Grímsey"
    },
    {
      "icao": "BIHN",
      "iata": "HFN",
      "name": "Höfn - Hornafjörður"
    },
    {
      "icao": "BIHU",
      "iata": "HZK",
      "name": "Húsavík"
    },
    {
      "icao": "BIRL",
      "iata": "MVA",
      "name": "Myvatn - Mývatn"
    },
    {
      "icao": "BIRK",
      "iata": "RKV",
      "name": "Reykjavík Domestic"
    },
    {
      "icao": "BISI",
      "iata": "SIJ",
      "name": "Siglufjörður"
    },
    {
      "icao": "BIVM",
      "iata": "VEY",
      "name": "Vestmannaeyjar"
    },
    {
      "icao": "BIVO",
      "iata": "VPN",
      "name": "Vopnafjörður"
    },
    {
      "icao": "BIIS",
      "iata": "IFJ",
      "name": "Ísafjörður"
    }
  ],
  "India": [
    {
      "icao": "VAAH",
      "iata": "AMD",
      "name": "Ahmedabad - Sardar Vallabh Patel"
    },
    {
      "icao": "VIAR",
      "iata": "ATQ",
      "name": "Amritsar - Sri Guru Ram Das Ji"
    },
    {
      "icao": "VABP",
      "iata": "BHO",
      "name": "Bhopal - Raja Bhoj"
    },
    {
      "icao": "VEBS",
      "iata": "BBI",
      "name": "Bhubaneswar - Biju Patnaik"
    },
    {
      "icao": "VOCL",
      "iata": "CCJ",
      "name": "Calicut"
    },
    {
      "icao": "VICG",
      "iata": "IXC",
      "name": "Chandigarh - Shaheed Bhagat Singh"
    },
    {
      "icao": "VOMM",
      "iata": "MAA",
      "name": "Chennai"
    },
    {
      "icao": "VOCB",
      "iata": "CJB",
      "name": "Coimbatore"
    },
    {
      "icao": "VIND",
      "iata": "DXN",
      "name": "Gautam Buddha Nagar - Noida"
    },
    {
      "icao": "VEGT",
      "iata": "GAU",
      "name": "Guwahati - Lokpriya Gopinath Bordoloi"
    },
    {
      "icao": "VIHX",
      "iata": "HWR",
      "name": "Halwara"
    },
    {
      "icao": "VIHR",
      "iata": "HSS",
      "name": "Hisar - Maharaja Agrasen"
    },
    {
      "icao": "VOHS",
      "iata": "HYD",
      "name": "Hyderabad - Rajiv Gandhi"
    },
    {
      "icao": "VEIM",
      "iata": "IMF",
      "name": "Imphal - Bir Tikendrajit"
    },
    {
      "icao": "VAID",
      "iata": "IDR",
      "name": "Indore - Devi Ahilya Bai Holkar"
    },
    {
      "icao": "VIJP",
      "iata": "JAI",
      "name": "Jaipur"
    },
    {
      "icao": "VASD",
      "iata": "SAG",
      "name": "Kakadi - Shirdi"
    },
    {
      "icao": "VOKN",
      "iata": "CNN",
      "name": "Kannur"
    },
    {
      "icao": "VOBL",
      "iata": "BLR",
      "name": "Kempegowda International Airport Bengaluru"
    },
    {
      "icao": "VOCI",
      "iata": "COK",
      "name": "Kochi - Cochin"
    },
    {
      "icao": "VECC",
      "iata": "CCU",
      "name": "Kolkata - Netaji Subhash Chandra Bose"
    },
    {
      "icao": "VILK",
      "iata": "LKO",
      "name": "Lucknow - Chaudhary Charan Singh"
    },
    {
      "icao": "VOML",
      "iata": "IXE",
      "name": "Mangaluru"
    },
    {
      "icao": "VOGA",
      "iata": "GOX",
      "name": "Mopa - Manohar"
    },
    {
      "icao": "VABB",
      "iata": "BOM",
      "name": "Mumbai - Chhatrapati Shivaji Maharaj"
    },
    {
      "icao": "VANP",
      "iata": "NAG",
      "name": "Nagpur - Dr. Babasaheb Ambedkar"
    },
    {
      "icao": "VAOZ",
      "iata": "ISK",
      "name": "Nashik"
    },
    {
      "icao": "VANM",
      "iata": "NMI",
      "name": "Navi Mumbai"
    },
    {
      "icao": "VIDP",
      "iata": "DEL",
      "name": "New Delhi - Indira Gandhi"
    },
    {
      "icao": "VOPB",
      "iata": "IXZ",
      "name": "Port Blair - Veer Savarkar International Airport / INS Utkrosh"
    },
    {
      "icao": "VAPO",
      "iata": "PNQ",
      "name": "Pune"
    },
    {
      "icao": "VAHS",
      "iata": "HSR",
      "name": "Rajkot"
    },
    {
      "icao": "VEBD",
      "iata": "IXB",
      "name": "Siliguri - Bagdogra"
    },
    {
      "icao": "VISR",
      "iata": "SXR",
      "name": "Srinagar - Sheikh ul Alam"
    },
    {
      "icao": "VASU",
      "iata": "STV",
      "name": "Surat"
    },
    {
      "icao": "VOTV",
      "iata": "TRV",
      "name": "Thiruvananthapuram"
    },
    {
      "icao": "VOTR",
      "iata": "TRZ",
      "name": "Tiruchirappalli"
    },
    {
      "icao": "VOTP",
      "iata": "TIR",
      "name": "Tirupati"
    },
    {
      "icao": "VABO",
      "iata": "BDQ",
      "name": "Vadodara"
    },
    {
      "icao": "VEBN",
      "iata": "VNS",
      "name": "Varanasi - Lal Bahadur Shastri"
    },
    {
      "icao": "VOGO",
      "iata": "GOI",
      "name": "Vasco da Gama - Goa Dabolim"
    },
    {
      "icao": "VOBZ",
      "iata": "VGA",
      "name": "Vijayawada"
    },
    {
      "icao": "VOVZ",
      "iata": "VTZ",
      "name": "Visakhapatnam"
    },
    {
      "icao": "VEAT",
      "iata": "IXA",
      "name": "Agartala - Maharaja Bir Bikram"
    },
    {
      "icao": "VOAT",
      "iata": "AGX",
      "name": "Agatti"
    },
    {
      "icao": "VIAG",
      "iata": "AGR",
      "name": "Agra Airport / Agra Air Force Station"
    },
    {
      "icao": "VELP",
      "iata": "AJL",
      "name": "Aizawl (Lengpui) - Lengpui"
    },
    {
      "icao": "VIKG",
      "iata": "KQH",
      "name": "Ajmer (Kishangarh) - Kishangarh Airport Ajmer"
    },
    {
      "icao": "VAAK",
      "iata": "AKD",
      "name": "Akola"
    },
    {
      "icao": "VEAB",
      "iata": "IXD",
      "name": "Allahabad - Prayagraj"
    },
    {
      "icao": "VEAN",
      "iata": "IXV",
      "name": "Along"
    },
    {
      "icao": "VEAP",
      "iata": "AHA",
      "name": "Ambikapur - Maa Mahamaya"
    },
    {
      "icao": "VAAU",
      "iata": "IXU",
      "name": "Aurangabad"
    },
    {
      "icao": "VIBY",
      "iata": "BEK",
      "name": "Bareilly Air Force Station"
    },
    {
      "icao": "VOBM",
      "iata": "IXG",
      "name": "Belgaum - Belagavi"
    },
    {
      "icao": "VOBI",
      "iata": "BEP",
      "name": "Bellary"
    },
    {
      "icao": "VIBT",
      "iata": "BUP",
      "name": "Bhatinda Air Force Station"
    },
    {
      "icao": "VABV",
      "iata": "BHU",
      "name": "Bhavnagar"
    },
    {
      "icao": "VABJ",
      "iata": "BHJ",
      "name": "Bhuj"
    },
    {
      "icao": "VIBR",
      "iata": "KUU",
      "name": "Bhuntar - Kullu Manali"
    },
    {
      "icao": "VOBR",
      "iata": "IXX",
      "name": "Bidar Airport / Bidar Air Force Station"
    },
    {
      "icao": "VIBK",
      "iata": "BKB",
      "name": "Bikaner - Nal"
    },
    {
      "icao": "VEBU",
      "iata": "PAB",
      "name": "Bilaspur"
    },
    {
      "icao": "VOSR",
      "iata": "SDW",
      "name": "Chipi - Sindhudurg"
    },
    {
      "icao": "VADN",
      "iata": "NMB",
      "name": "Daman"
    },
    {
      "icao": "VEDH",
      "iata": "DBR",
      "name": "Darbhanga"
    },
    {
      "icao": "VIDN",
      "iata": "DED",
      "name": "Dehradun (Jauligrant) - Dehradun Jolly Grant"
    },
    {
      "icao": "VEDB",
      "iata": "DBD",
      "name": "Dhanbad"
    },
    {
      "icao": "VEMN",
      "iata": "DIB",
      "name": "Dibrugarh"
    },
    {
      "icao": "VEMR",
      "iata": "DMU",
      "name": "Dimapur"
    },
    {
      "icao": "VEDG",
      "iata": "RDP",
      "name": "Durgapur - Kazi Nazrul Islam"
    },
    {
      "icao": "VEAY",
      "iata": "AYJ",
      "name": "Faizabad - Maharshi Valmiki"
    },
    {
      "icao": "VEGY",
      "iata": "GAY",
      "name": "Gaya"
    },
    {
      "icao": "VAGD",
      "iata": "GDB",
      "name": "Gondia"
    },
    {
      "icao": "VEGK",
      "iata": "GOP",
      "name": "Gorakhpur"
    },
    {
      "icao": "VIGR",
      "iata": "GWL",
      "name": "Gwalior"
    },
    {
      "icao": "VOHB",
      "iata": "HBX",
      "name": "Hubballi"
    },
    {
      "icao": "VOHY",
      "iata": "BPM",
      "name": "Hyderabad - Begumpet"
    },
    {
      "icao": "VOCX",
      "iata": "CBD",
      "name": "IAF Camp - Car Nicobar Air Force Base"
    },
    {
      "icao": "VAJB",
      "iata": "JLR",
      "name": "Jabalpur"
    },
    {
      "icao": "VIJR",
      "iata": "JSA",
      "name": "Jaisalmer"
    },
    {
      "icao": "VEHX",
      "iata": "",
      "name": "Jalpaiguri - Hashimara Air Force Station"
    },
    {
      "icao": "VIJU",
      "iata": "IXJ",
      "name": "Jammu"
    },
    {
      "icao": "VAJM",
      "iata": "JGA",
      "name": "Jamnagar"
    },
    {
      "icao": "VEJS",
      "iata": "IXW",
      "name": "Jamshedpur - Sonari"
    },
    {
      "icao": "VIJO",
      "iata": "JDH",
      "name": "Jodhpur"
    },
    {
      "icao": "VEJT",
      "iata": "JRH",
      "name": "Jorhat"
    },
    {
      "icao": "VOCP",
      "iata": "CDP",
      "name": "Kadapa"
    },
    {
      "icao": "VEKR",
      "iata": "IXH",
      "name": "Kailashahar"
    },
    {
      "icao": "VAKE",
      "iata": "IXY",
      "name": "Kandla"
    },
    {
      "icao": "VIGG",
      "iata": "DHM",
      "name": "Kangra"
    },
    {
      "icao": "VAKS",
      "iata": "IXK",
      "name": "Keshod"
    },
    {
      "icao": "VAKP",
      "iata": "KLH",
      "name": "Kolhapur"
    },
    {
      "icao": "VIKO",
      "iata": "KTU",
      "name": "Kota"
    },
    {
      "icao": "VEKI",
      "iata": "KBK",
      "name": "Kushinagar"
    },
    {
      "icao": "VALT",
      "iata": "LTU",
      "name": "Latur - Murod Kond"
    },
    {
      "icao": "VILH",
      "iata": "IXL",
      "name": "Leh Kushok Bakula Rimpochee"
    },
    {
      "icao": "VELR",
      "iata": "IXI",
      "name": "Lilabari North Lakhimpur"
    },
    {
      "icao": "VILD",
      "iata": "LUH",
      "name": "Ludhiana"
    },
    {
      "icao": "VORY",
      "iata": "RJA",
      "name": "Madhurapudi - Rajahmundry"
    },
    {
      "icao": "VOMD",
      "iata": "IXM",
      "name": "Madurai"
    },
    {
      "icao": "VEMZ",
      "iata": "MZU",
      "name": "Muzaffarpur"
    },
    {
      "icao": "VOMY",
      "iata": "MYQ",
      "name": "Mysore"
    },
    {
      "icao": "VIDD",
      "iata": "",
      "name": "New Delhi - Safdarjung"
    },
    {
      "icao": "VOKU",
      "iata": "KJB",
      "name": "Orvakal - Kurnool"
    },
    {
      "icao": "VIPT",
      "iata": "PGH",
      "name": "Pantnagar"
    },
    {
      "icao": "VIPK",
      "iata": "IXP",
      "name": "Pathankot"
    },
    {
      "icao": "VEPT",
      "iata": "PAT",
      "name": "Patna - Jay Prakash Narayan"
    },
    {
      "icao": "VAPR",
      "iata": "PBD",
      "name": "Porbandar"
    },
    {
      "icao": "VOPC",
      "iata": "PNY",
      "name": "Puducherry (Pondicherry) - Pondicherry"
    },
    {
      "icao": "VOPN",
      "iata": "PUT",
      "name": "Puttaparthi - Sri Sathya Sai"
    },
    {
      "icao": "VARK",
      "iata": "RAJ",
      "name": "Rajkot"
    },
    {
      "icao": "VERC",
      "iata": "IXR",
      "name": "Ranchi - Birsa Munda"
    },
    {
      "icao": "VARG",
      "iata": "RTC",
      "name": "Ratnagiri"
    },
    {
      "icao": "VERK",
      "iata": "RRK",
      "name": "Rourkela"
    },
    {
      "icao": "VOSM",
      "iata": "SXV",
      "name": "Salem"
    },
    {
      "icao": "VEBI",
      "iata": "SHL",
      "name": "Shillong"
    },
    {
      "icao": "VOSH",
      "iata": "RQY",
      "name": "Shimoga - Rashtrakavi Kuvempu"
    },
    {
      "icao": "VEKU",
      "iata": "IXS",
      "name": "Silchar"
    },
    {
      "icao": "VASL",
      "iata": "SSE",
      "name": "Solapur"
    },
    {
      "icao": "VETZ",
      "iata": "TEZ",
      "name": "Tezpur"
    },
    {
      "icao": "VAUD",
      "iata": "UDR",
      "name": "Udaipur - Maharana Pratap"
    },
    {
      "icao": "VEZO",
      "iata": "ZER",
      "name": "Ziro"
    }
  ],
  "Indonesia": [
    {
      "icao": "WAPP",
      "iata": "AMQ",
      "name": "Ambon - Pattimura"
    },
    {
      "icao": "WALL",
      "iata": "BPN",
      "name": "Balikpapan - Sultan Aji Muhammad Sulaiman Sepinggan"
    },
    {
      "icao": "WITT",
      "iata": "BTJ",
      "name": "Banda Aceh - Sultan Iskandar Muda"
    },
    {
      "icao": "WAOO",
      "iata": "BDJ",
      "name": "Banjarbaru - Syamsudin Noor"
    },
    {
      "icao": "WIDD",
      "iata": "BTH",
      "name": "Batam - Hang Nadim"
    },
    {
      "icao": "WIMM",
      "iata": "KNO",
      "name": "Beringin - Kualanamu"
    },
    {
      "icao": "WIHH",
      "iata": "HLP",
      "name": "Jakarta - Halim Perdanakusuma"
    },
    {
      "icao": "WIII",
      "iata": "CGK",
      "name": "Jakarta - Soekarno-Hatta"
    },
    {
      "icao": "WARD",
      "iata": "DHX",
      "name": "Kediri - Dhoho"
    },
    {
      "icao": "WADD",
      "iata": "DPS",
      "name": "Kuta, Badung - Denpasar I Gusti Ngurah Rai"
    },
    {
      "icao": "WAAA",
      "iata": "UPG",
      "name": "Makassar - Sultan Hasanuddin"
    },
    {
      "icao": "WAMM",
      "iata": "MDC",
      "name": "Manado - Sam Ratulangi"
    },
    {
      "icao": "WADL",
      "iata": "LOP",
      "name": "Mataram (Pujut, Lombok Tengah) - Lombok"
    },
    {
      "icao": "WIOO",
      "iata": "PNK",
      "name": "Pontianak - Supadio"
    },
    {
      "icao": "WAHS",
      "iata": "SRG",
      "name": "Semarang - Jenderal Ahmad Yani"
    },
    {
      "icao": "WAJJ",
      "iata": "DJJ",
      "name": "Sentani - Dortheys Hiyo Eluay"
    },
    {
      "icao": "WARR",
      "iata": "SUB",
      "name": "Surabaya - Juanda"
    },
    {
      "icao": "WAHH",
      "iata": "JOG",
      "name": "Yogyakarta - Adisutjipto"
    },
    {
      "icao": "WASO",
      "iata": "BXB",
      "name": "Babo"
    },
    {
      "icao": "WILL",
      "iata": "TKG",
      "name": "Bandar Lampung - Radin Inten II"
    },
    {
      "icao": "WICC",
      "iata": "BDO",
      "name": "Bandung - Husein Sastranegara"
    },
    {
      "icao": "WIGG",
      "iata": "BKS",
      "name": "Bengkulu - Fatmawati Soekarno"
    },
    {
      "icao": "WABB",
      "iata": "BIK",
      "name": "Biak - Frans Kaisiepo"
    },
    {
      "icao": "WADB",
      "iata": "BMU",
      "name": "Bima - Sultan Muhammad Salahuddin"
    },
    {
      "icao": "WAHL",
      "iata": "CXP",
      "name": "Cilacap - Tunggul Wulung"
    },
    {
      "icao": "WIBD",
      "iata": "DUM",
      "name": "Dumai - Pinang Kampai"
    },
    {
      "icao": "WASF",
      "iata": "FKQ",
      "name": "Fakfak"
    },
    {
      "icao": "WIMB",
      "iata": "GNS",
      "name": "Gunungsitoli - Binaka"
    },
    {
      "icao": "WASK",
      "iata": "KNG",
      "name": "Kaimana - Utarom"
    },
    {
      "icao": "WICA",
      "iata": "KJT",
      "name": "Kertajati"
    },
    {
      "icao": "WIOK",
      "iata": "KTG",
      "name": "Ketapang - Rahadi Osman"
    },
    {
      "icao": "WAWP",
      "iata": "KXB",
      "name": "Kolaka - Sangia Nibandera"
    },
    {
      "icao": "WITC",
      "iata": "MEQ",
      "name": "Kuala Pesisir - Cut Nyak Dhien"
    },
    {
      "icao": "WATT",
      "iata": "KOE",
      "name": "Kupang - El Tari"
    },
    {
      "icao": "WAPF",
      "iata": "LUV",
      "name": "Langgur - Karel Sadsuitubun"
    },
    {
      "icao": "WITL",
      "iata": "LSX",
      "name": "Lhok Sukon-Sumatra Island - Lhok Sukon"
    },
    {
      "icao": "WAFW",
      "iata": "LUW",
      "name": "Luwok - Syukuran Aminuddin Amir"
    },
    {
      "icao": "WARA",
      "iata": "MLG",
      "name": "Malang - Abdul Rachman Saleh"
    },
    {
      "icao": "WAUU",
      "iata": "MKW",
      "name": "Manokwari - Rendani"
    },
    {
      "icao": "WIMK",
      "iata": "MES",
      "name": "Medan - Soewondo Air Force Base"
    },
    {
      "icao": "WAKK",
      "iata": "MKQ",
      "name": "Merauke - Mopah"
    },
    {
      "icao": "WABI",
      "iata": "NBX",
      "name": "Nabire - Douw Aturure"
    },
    {
      "icao": "WAPN",
      "iata": "NAM",
      "name": "Namniwel"
    },
    {
      "icao": "WIOG",
      "iata": "NPO",
      "name": "Nanga Pinoh-Borneo Island - Nanga Pinoh"
    },
    {
      "icao": "WAJO",
      "iata": "OKL",
      "name": "Oksibil"
    },
    {
      "icao": "WIEE",
      "iata": "PDG",
      "name": "Padang (Katapiang) - Minangkabau"
    },
    {
      "icao": "WIME",
      "iata": "AEG",
      "name": "Padang Sidempuan - Aek Godang"
    },
    {
      "icao": "WAGG",
      "iata": "PKY",
      "name": "Palangkaraya - Tjilik Riwut"
    },
    {
      "icao": "WIPP",
      "iata": "PLM",
      "name": "Palembang - Sultan Mahmud Badaruddin II"
    },
    {
      "icao": "WAFF",
      "iata": "PLW",
      "name": "Palu - Mutiara - SIS Al-Jufrie"
    },
    {
      "icao": "WIKK",
      "iata": "PGK",
      "name": "Pangkal Pinang - Depati Amir"
    },
    {
      "icao": "WIBB",
      "iata": "PKU",
      "name": "Pekanbaru - Sultan Syarif Kasim II International Airport / Roesmin Nurjadin AFB"
    },
    {
      "icao": "WIOP",
      "iata": "PSU",
      "name": "Putussibau-Borneo Island - Pangsuma"
    },
    {
      "icao": "WIBJ",
      "iata": "RGT",
      "name": "Rengat-Sumatra Island - Japura"
    },
    {
      "icao": "WALS",
      "iata": "AAP",
      "name": "Samarinda - Aji Pangeran Tumenggung Pranoto"
    },
    {
      "icao": "WABO",
      "iata": "ZRI",
      "name": "Serui - Stevanus Rumbewas"
    },
    {
      "icao": "WIMS",
      "iata": "FLZ",
      "name": "Sibolga (Pinangsori) - Dr. Ferdinand Lumban Tobing"
    },
    {
      "icao": "WIOS",
      "iata": "SQG",
      "name": "Sintang - Tebelian"
    },
    {
      "icao": "WASS",
      "iata": "SOQ",
      "name": "Sorong - Domine Eduard Osok"
    },
    {
      "icao": "WAHQ",
      "iata": "SOC",
      "name": "Surakarta - Adisumarmo"
    },
    {
      "icao": "WAMH",
      "iata": "NAH",
      "name": "Tabukan Utara, Sangihe Islands - Naha"
    },
    {
      "icao": "WITK",
      "iata": "TXE",
      "name": "Takengon - Rembele"
    },
    {
      "icao": "WIPQ",
      "iata": "PDO",
      "name": "Talang Gudang-Sumatra Island - Pendopo"
    },
    {
      "icao": "WAKT",
      "iata": "TMH",
      "name": "Tanah Merah"
    },
    {
      "icao": "WIDN",
      "iata": "TNJ",
      "name": "Tanjung Pinang-Bintan Island - Raja Haji Fisabilillah"
    },
    {
      "icao": "WAQT",
      "iata": "BEJ",
      "name": "Tanjung Redeb - Borneo Island - Kalimarau"
    },
    {
      "icao": "WAON",
      "iata": "TJG",
      "name": "Tanta-Tabalong - Warukin"
    },
    {
      "icao": "WAQQ",
      "iata": "TRK",
      "name": "Tarakan - Juwata International Airport / Suharnoko Harbani AFB"
    },
    {
      "icao": "WAEE",
      "iata": "TTE",
      "name": "Ternate - Sultan Babullah"
    },
    {
      "icao": "WAFB",
      "iata": "TRT",
      "name": "Toraja"
    },
    {
      "icao": "WAVV",
      "iata": "WMX",
      "name": "Wamena"
    },
    {
      "icao": "WAWD",
      "iata": "WNI",
      "name": "Wangi-wangi Island - Matahora"
    },
    {
      "icao": "WAHI",
      "iata": "YIA",
      "name": "Yogyakarta"
    }
  ],
  "Iran": [
    {
      "icao": "OIAA",
      "iata": "ABD",
      "name": "Abadan Ayatollah Jami"
    },
    {
      "icao": "OIAW",
      "iata": "AWZ",
      "name": "Ahvaz - Qasem Soleimani"
    },
    {
      "icao": "OIKB",
      "iata": "BND",
      "name": "Bandar Abbas"
    },
    {
      "icao": "OIMB",
      "iata": "XBJ",
      "name": "Birjand"
    },
    {
      "icao": "OIFM",
      "iata": "IFN",
      "name": "Isfahan Shahid Beheshti"
    },
    {
      "icao": "OIIP",
      "iata": "PYK",
      "name": "Karaj - Payam"
    },
    {
      "icao": "OIKK",
      "iata": "KER",
      "name": "Kerman - Ayatollah Hashemi Rafsanjani"
    },
    {
      "icao": "OIBK",
      "iata": "KIH",
      "name": "Kish Island - Kish"
    },
    {
      "icao": "OIMM",
      "iata": "MHD",
      "name": "Mashhad"
    },
    {
      "icao": "OIKQ",
      "iata": "GSM",
      "name": "Qeshm(Dayrestan) - Qeshm"
    },
    {
      "icao": "OISS",
      "iata": "SYZ",
      "name": "Shiraz Shahid Dastghaib"
    },
    {
      "icao": "OIIE",
      "iata": "IKA",
      "name": "Tehran - Imam Khomeini"
    },
    {
      "icao": "OIII",
      "iata": "THR",
      "name": "Tehran - Mehrabad"
    },
    {
      "icao": "OIZH",
      "iata": "ZAH",
      "name": "Zahedan"
    },
    {
      "icao": "OIBA",
      "iata": "AEU",
      "name": "Abu Musa Island"
    },
    {
      "icao": "OIHS",
      "iata": "NUJ",
      "name": "Amirabad - Nojeh Air Base"
    },
    {
      "icao": "OITL",
      "iata": "ADU",
      "name": "Ardabil"
    },
    {
      "icao": "OIKM",
      "iata": "BXR",
      "name": "Bam Airport"
    },
    {
      "icao": "OIBL",
      "iata": "BDH",
      "name": "Bandar Lengeh"
    },
    {
      "icao": "OIMN",
      "iata": "BJB",
      "name": "Bojnord"
    },
    {
      "icao": "OIBB",
      "iata": "BUZ",
      "name": "Bushehr"
    },
    {
      "icao": "OIZC",
      "iata": "ZBR",
      "name": "Chabahar Konarak"
    },
    {
      "icao": "OIAD",
      "iata": "DEF",
      "name": "Dezful"
    },
    {
      "icao": "OISF",
      "iata": "FAZ",
      "name": "Fasa"
    },
    {
      "icao": "OIAH",
      "iata": "GCH",
      "name": "Gachsaran"
    },
    {
      "icao": "OING",
      "iata": "GBT",
      "name": "Gorgan"
    },
    {
      "icao": "OIHH",
      "iata": "HDM",
      "name": "Hamadan"
    },
    {
      "icao": "OICI",
      "iata": "IIL",
      "name": "Ilam"
    },
    {
      "icao": "OIZI",
      "iata": "IHR",
      "name": "Iranshahr"
    },
    {
      "icao": "OIBJ",
      "iata": "KNR",
      "name": "Jam Airport"
    },
    {
      "icao": "OIKJ",
      "iata": "JYR",
      "name": "Jiroft"
    },
    {
      "icao": "OIFK",
      "iata": "KKS",
      "name": "Kashan"
    },
    {
      "icao": "OICC",
      "iata": "KSH",
      "name": "Kermanshah - Shahid Ashrafi Esfahani"
    },
    {
      "icao": "OIBQ",
      "iata": "KHK",
      "name": "Khark"
    },
    {
      "icao": "OIBP",
      "iata": "PGU",
      "name": "Khiyaroo - Persian Gulf"
    },
    {
      "icao": "OICK",
      "iata": "KHD",
      "name": "Khoram Abad"
    },
    {
      "icao": "OISR",
      "iata": "LFM",
      "name": "Lamerd"
    },
    {
      "icao": "OISL",
      "iata": "LRR",
      "name": "Lar Airport"
    },
    {
      "icao": "OIBV",
      "iata": "LVP",
      "name": "Lavan"
    },
    {
      "icao": "OIAM",
      "iata": "MRX",
      "name": "Mahshahr"
    },
    {
      "icao": "OINN",
      "iata": "NSH",
      "name": "Nowshahr"
    },
    {
      "icao": "OIAG",
      "iata": "AKW",
      "name": "Omidiyeh - Aghajari"
    },
    {
      "icao": "OIIK",
      "iata": "GZW",
      "name": "Qazvin"
    },
    {
      "icao": "OIKR",
      "iata": "RJN",
      "name": "Rafsanjan"
    },
    {
      "icao": "OINR",
      "iata": "RZR",
      "name": "Ramsar"
    },
    {
      "icao": "OIGG",
      "iata": "RAS",
      "name": "Rasht - Sardar-e-Jangal"
    },
    {
      "icao": "OIMS",
      "iata": "AFZ",
      "name": "Sabzevar National"
    },
    {
      "icao": "OICS",
      "iata": "SDG",
      "name": "Sanandaj"
    },
    {
      "icao": "OIMC",
      "iata": "CKT",
      "name": "Sarakhs"
    },
    {
      "icao": "OINZ",
      "iata": "SRY",
      "name": "Sari Dasht-e Naz"
    },
    {
      "icao": "OIFS",
      "iata": "CQD",
      "name": "Shahrekord"
    },
    {
      "icao": "OITU",
      "iata": "IMQ",
      "name": "Showt - Maku National"
    },
    {
      "icao": "OIBS",
      "iata": "SXI",
      "name": "Siri"
    },
    {
      "icao": "OIKY",
      "iata": "SYJ",
      "name": "Sirjan"
    },
    {
      "icao": "OIMT",
      "iata": "TCX",
      "name": "Tabas"
    },
    {
      "icao": "OITT",
      "iata": "TBZ",
      "name": "Tabriz"
    },
    {
      "icao": "OITR",
      "iata": "OMH",
      "name": "Urmia"
    },
    {
      "icao": "OISY",
      "iata": "YES",
      "name": "Yasuj"
    },
    {
      "icao": "OIYY",
      "iata": "AZD",
      "name": "Yazd - Shahid Sadooghi"
    },
    {
      "icao": "OIZB",
      "iata": "ACZ",
      "name": "Zabol"
    },
    {
      "icao": "OITZ",
      "iata": "JWN",
      "name": "Zanjan"
    }
  ],
  "Iraq": [
    {
      "icao": "ORNI",
      "iata": "NJF",
      "name": "Al Najaf"
    },
    {
      "icao": "ORER",
      "iata": "EBL",
      "name": "Arbil - Erbil"
    },
    {
      "icao": "ORBI",
      "iata": "BGW",
      "name": "Baghdad International Airport / New Al Muthana Air Base"
    },
    {
      "icao": "ORMM",
      "iata": "BSR",
      "name": "Basra"
    },
    {
      "icao": "ORKK",
      "iata": "KIK",
      "name": "Kirkuk"
    },
    {
      "icao": "ORBM",
      "iata": "OSM",
      "name": "Mosul"
    },
    {
      "icao": "ORAT",
      "iata": "TQD",
      "name": "Al Habbaniyah - Al Taqaddum Air Base"
    },
    {
      "icao": "ORUB",
      "iata": "",
      "name": "Al Kut - Ubaydah Bin Al Jarrah"
    },
    {
      "icao": "ORTI",
      "iata": "",
      "name": "Al Taji Army Air Field"
    },
    {
      "icao": "ORAA",
      "iata": "IQA",
      "name": "Hīt - Al Asad Air Base"
    },
    {
      "icao": "ORSU",
      "iata": "ISU",
      "name": "Sulaymaniyah"
    },
    {
      "icao": "ORTF",
      "iata": "",
      "name": "Tall Afar Army Air Field"
    }
  ],
  "Ireland": [
    {
      "icao": "EIKN",
      "iata": "NOC",
      "name": "Charlestown - Ireland West Airport Knock"
    },
    {
      "icao": "EICK",
      "iata": "ORK",
      "name": "Cork"
    },
    {
      "icao": "EIDW",
      "iata": "DUB",
      "name": "Dublin"
    },
    {
      "icao": "EINN",
      "iata": "SNN",
      "name": "Shannon"
    },
    {
      "icao": "EIDL",
      "iata": "CFN",
      "name": "Donegal"
    },
    {
      "icao": "EIKY",
      "iata": "KIR",
      "name": "Farranfore - Kerry"
    },
    {
      "icao": "EIWT",
      "iata": "",
      "name": "Leixlip - Weston"
    },
    {
      "icao": "EISG",
      "iata": "SXL",
      "name": "Sligo"
    },
    {
      "icao": "EIWF",
      "iata": "WAT",
      "name": "Waterford"
    }
  ],
  "Isle of Man": [
    {
      "icao": "EGNS",
      "iata": "IOM",
      "name": "Castletown - Isle of Man"
    }
  ],
  "Israel": [
    {
      "icao": "LLER",
      "iata": "ETM",
      "name": "Eilat - Ramon"
    },
    {
      "icao": "LLBG",
      "iata": "TLV",
      "name": "Tel Aviv - Ben Gurion"
    },
    {
      "icao": "LLNV",
      "iata": "VTM",
      "name": "Beersheba - Nevatim Air Base"
    },
    {
      "icao": "LLRM",
      "iata": "",
      "name": "Beersheba - Ramon Air Base"
    },
    {
      "icao": "LLRD",
      "iata": "",
      "name": "Haifa - Ramat David Air Base"
    },
    {
      "icao": "LLMZ",
      "iata": "MTZ",
      "name": "Masada - Bar Yehuda Airfield"
    },
    {
      "icao": "LLEK",
      "iata": "",
      "name": "Rehovot - Tel Nof Air Base"
    },
    {
      "icao": "LLIB",
      "iata": "RPN",
      "name": "Rosh Pina"
    },
    {
      "icao": "LLHA",
      "iata": "HFA",
      "name": "Uri Michaeli Haifa"
    }
  ],
  "Italy": [
    {
      "icao": "LIBD",
      "iata": "BRI",
      "name": "Bari Karol Wojtyła"
    },
    {
      "icao": "LIPE",
      "iata": "BLQ",
      "name": "Bologna Guglielmo Marconi"
    },
    {
      "icao": "LIBR",
      "iata": "BDS",
      "name": "Brindisi"
    },
    {
      "icao": "LIEE",
      "iata": "CAG",
      "name": "Cagliari Elmas"
    },
    {
      "icao": "LIPX",
      "iata": "VRN",
      "name": "Caselle (VR) - Verona Villafranca Valerio Catullo"
    },
    {
      "icao": "LIMF",
      "iata": "TRN",
      "name": "Caselle Torinese (TO) - Turin"
    },
    {
      "icao": "LICC",
      "iata": "CTA",
      "name": "Catania-Fontanarossa"
    },
    {
      "icao": "LIMC",
      "iata": "MXP",
      "name": "Ferno (VA) - Milan Malpensa"
    },
    {
      "icao": "LIRQ",
      "iata": "FLR",
      "name": "Firenze (FI) - Florence Airport, Peretola"
    },
    {
      "icao": "LIMJ",
      "iata": "GOA",
      "name": "Genova (GE) - Genoa Cristoforo Colombo"
    },
    {
      "icao": "LICA",
      "iata": "SUF",
      "name": "Lamezia Terme (CZ) - Lamezia Terme Sant'Eufemia"
    },
    {
      "icao": "LIRN",
      "iata": "NAP",
      "name": "Napoli - Naples"
    },
    {
      "icao": "LIEO",
      "iata": "OLB",
      "name": "Olbia (SS) - Olbia Costa Smeralda"
    },
    {
      "icao": "LIME",
      "iata": "BGY",
      "name": "Orio al Serio (BG) - Il Caravaggio"
    },
    {
      "icao": "LICJ",
      "iata": "PMO",
      "name": "Palermo - Falcone–Borsellino"
    },
    {
      "icao": "LIRZ",
      "iata": "PEG",
      "name": "Perugia (PG) - Perugia San Francesco d'Assisi – Umbria"
    },
    {
      "icao": "LIBP",
      "iata": "PSR",
      "name": "Pescara - Abruzzo"
    },
    {
      "icao": "LIRP",
      "iata": "PSA",
      "name": "Pisa (PI) - Pisa"
    },
    {
      "icao": "LIPR",
      "iata": "RMI",
      "name": "Rimini (RN) - Federico Fellini"
    },
    {
      "icao": "LIRA",
      "iata": "CIA",
      "name": "Rome - Ciampino–G. B. Pastine"
    },
    {
      "icao": "LIRF",
      "iata": "FCO",
      "name": "Rome–Fiumicino Leonardo da Vinci"
    },
    {
      "icao": "LIPQ",
      "iata": "TRS",
      "name": "Ronchi dei Legionari/Trieste - Trieste"
    },
    {
      "icao": "LIML",
      "iata": "LIN",
      "name": "Segrate (MI) - Milano Linate"
    },
    {
      "icao": "LIPH",
      "iata": "TSF",
      "name": "Treviso (TV) - Treviso"
    },
    {
      "icao": "LIPZ",
      "iata": "VCE",
      "name": "Venezia (VE) - Venice Marco Polo"
    },
    {
      "icao": "LIEA",
      "iata": "AHO",
      "name": "Alghero-Fertilia"
    },
    {
      "icao": "LIQS",
      "iata": "",
      "name": "Ampugnano (SI) - Siena-Ampugnano"
    },
    {
      "icao": "LIET",
      "iata": "",
      "name": "Arbatax - Tortolì"
    },
    {
      "icao": "LIPA",
      "iata": "AVB",
      "name": "Aviano (PN) - Aviano Air Base"
    },
    {
      "icao": "LIPB",
      "iata": "BZO",
      "name": "Bolzano (BZ) - Bolzano"
    },
    {
      "icao": "LIMN",
      "iata": "",
      "name": "Cameri (NO) - Cameri Air Base"
    },
    {
      "icao": "LIRJ",
      "iata": "EBA",
      "name": "Campo nell'Elba (LI) - Marina di Campo"
    },
    {
      "icao": "LIPC",
      "iata": "",
      "name": "Cervia (RA) - Cervia Air Base"
    },
    {
      "icao": "LIPI",
      "iata": "",
      "name": "Codroipo (UD) - Udine-Rivolto Air Base"
    },
    {
      "icao": "LICB",
      "iata": "CIY",
      "name": "Comiso"
    },
    {
      "icao": "LIED",
      "iata": "DCI",
      "name": "Decimomannu Air Base"
    },
    {
      "icao": "LIPY",
      "iata": "AOI",
      "name": "Falconara Marittima (AN) - Marche"
    },
    {
      "icao": "LIBF",
      "iata": "FOG",
      "name": "Foggia (FG) - Foggia Gino Lisa"
    },
    {
      "icao": "LIPK",
      "iata": "FRL",
      "name": "Forlì (FC) - Forlì-Luigi Ridolfi"
    },
    {
      "icao": "LIBN",
      "iata": "LCC",
      "name": "Galatina (LE) - Lecce Galatina Air Base / Galatina Fortunato Cesari"
    },
    {
      "icao": "LIBV",
      "iata": "",
      "name": "Gioia del Colle (BA) - Gioia del Colle Antonio Ramirez Air Base"
    },
    {
      "icao": "LIRS",
      "iata": "GRS",
      "name": "Grosseto (GR) - Grosseto Corrado Baccarini Air Base / Grosseto"
    },
    {
      "icao": "LIBC",
      "iata": "CRV",
      "name": "Isola di Capo Rizzuto (KR) - Crotone Sant'Anna Pythagoras"
    },
    {
      "icao": "LICD",
      "iata": "LMP",
      "name": "Lampedusa"
    },
    {
      "icao": "LIMZ",
      "iata": "CUF",
      "name": "Levaldigi (CN) - Cuneo"
    },
    {
      "icao": "LIPO",
      "iata": "VBS",
      "name": "Montichiari (BS) - Brescia Gabriele d'Annunzio"
    },
    {
      "icao": "LICP",
      "iata": "",
      "name": "Palermo-Boccadifalco"
    },
    {
      "icao": "LICG",
      "iata": "PNL",
      "name": "Pantelleria (TP) - Pantelleria"
    },
    {
      "icao": "LIMP",
      "iata": "PMF",
      "name": "Parma (PR) - Parma"
    },
    {
      "icao": "LICR",
      "iata": "REG",
      "name": "Reggio Calabria"
    },
    {
      "icao": "LIMW",
      "iata": "AOT",
      "name": "Saint-Christophe (AO) - Aosta Corrado Gex"
    },
    {
      "icao": "LIRI",
      "iata": "QSR",
      "name": "Salerno Costa d'Amalfi"
    },
    {
      "icao": "LIMS",
      "iata": "",
      "name": "San Damiano (PC) - Piacenza San Damiano Air Base"
    },
    {
      "icao": "LIBA",
      "iata": "",
      "name": "San Giovanni Rotondo (FG) - Amendola Air Base"
    },
    {
      "icao": "LICZ",
      "iata": "",
      "name": "Sigonella (CT) - Sigonella Navy Air Base"
    },
    {
      "icao": "LIBG",
      "iata": "TAR",
      "name": "Taranto-Grottaglie Marcello Arlotta"
    },
    {
      "icao": "LIMA",
      "iata": "",
      "name": "Torino (TO) - Torino-Aeritalia"
    },
    {
      "icao": "LICT",
      "iata": "TPS",
      "name": "Trapani (TP) - Vincenzo Florio Airport Trapani-Birgi"
    },
    {
      "icao": "LIDT",
      "iata": "",
      "name": "Trento (TN) - Trento-Mattarello"
    },
    {
      "icao": "LILN",
      "iata": "",
      "name": "Venegono Superiore (VA) - Varese-Venegono"
    },
    {
      "icao": "LIMG",
      "iata": "",
      "name": "Villanova d'Albenga (SV) - Riviera Villanova d'Albenga"
    }
  ],
  "Jamaica": [
    {
      "icao": "MKJP",
      "iata": "KIN",
      "name": "Kingston - Norman Manley"
    },
    {
      "icao": "MKJS",
      "iata": "MBJ",
      "name": "Montego Bay - Sangster"
    },
    {
      "icao": "MKBS",
      "iata": "OCJ",
      "name": "Boscobel - Ian Fleming"
    },
    {
      "icao": "MKKJ",
      "iata": "POT",
      "name": "Ken Jones"
    },
    {
      "icao": "MKTP",
      "iata": "KTP",
      "name": "Tinson Pen"
    }
  ],
  "Japan": [
    {
      "icao": "RJSA",
      "iata": "AOJ",
      "name": "Aomori"
    },
    {
      "icao": "RJFF",
      "iata": "FUK",
      "name": "Fukuoka"
    },
    {
      "icao": "RJCH",
      "iata": "HKD",
      "name": "Hakodate"
    },
    {
      "icao": "RJOA",
      "iata": "HIJ",
      "name": "Hiroshima"
    },
    {
      "icao": "RJFK",
      "iata": "KOJ",
      "name": "Kagoshima"
    },
    {
      "icao": "RJNK",
      "iata": "KMQ",
      "name": "Kanazawa - Komatsu Airport / JASDF Komatsu Air Base"
    },
    {
      "icao": "RJFR",
      "iata": "KKJ",
      "name": "Kitakyushu"
    },
    {
      "icao": "RJBE",
      "iata": "UKB",
      "name": "Kobe"
    },
    {
      "icao": "RJFT",
      "iata": "KMJ",
      "name": "Kumamoto"
    },
    {
      "icao": "RJFS",
      "iata": "HSG",
      "name": "Kyushu Saga"
    },
    {
      "icao": "RJNS",
      "iata": "FSZ",
      "name": "Makinohara / Shimada - Mount Fuji Shizuoka"
    },
    {
      "icao": "RJOM",
      "iata": "MYJ",
      "name": "Matsuyama"
    },
    {
      "icao": "RJFM",
      "iata": "KMI",
      "name": "Miyazaki"
    },
    {
      "icao": "RJFU",
      "iata": "NGS",
      "name": "Nagasaki"
    },
    {
      "icao": "ROAH",
      "iata": "OKA",
      "name": "Naha"
    },
    {
      "icao": "RJOK",
      "iata": "KCZ",
      "name": "Nankoku - Kochi Ryoma"
    },
    {
      "icao": "RJAA",
      "iata": "NRT",
      "name": "Narita"
    },
    {
      "icao": "RJSS",
      "iata": "SDJ",
      "name": "Natori - Sendai"
    },
    {
      "icao": "RJSN",
      "iata": "KIJ",
      "name": "Niigata"
    },
    {
      "icao": "RJOB",
      "iata": "OKJ",
      "name": "Okayama Momotaro"
    },
    {
      "icao": "RODN",
      "iata": "DNA",
      "name": "Okinawa - Kadena Air Base"
    },
    {
      "icao": "RJBB",
      "iata": "KIX",
      "name": "Osaka - Kansai"
    },
    {
      "icao": "RJOO",
      "iata": "ITM",
      "name": "Osaka Itami"
    },
    {
      "icao": "RJCC",
      "iata": "CTS",
      "name": "Sapporo - New Chitose"
    },
    {
      "icao": "RJOT",
      "iata": "TAK",
      "name": "Takamatsu"
    },
    {
      "icao": "RJGG",
      "iata": "NGO",
      "name": "Tokoname - Chubu Centrair"
    },
    {
      "icao": "RJOS",
      "iata": "TKS",
      "name": "Tokushima Awaodori Airport / JMSDF Tokushima Air Base"
    },
    {
      "icao": "RJTT",
      "iata": "HND",
      "name": "Tokyo Haneda"
    },
    {
      "icao": "RJSK",
      "iata": "AXT",
      "name": "Akita"
    },
    {
      "icao": "RJKN",
      "iata": "TKN",
      "name": "Amagi - Tokunoshima"
    },
    {
      "icao": "RJKA",
      "iata": "ASJ",
      "name": "Amami"
    },
    {
      "icao": "RJTA",
      "iata": "NJA",
      "name": "Ayase / Yamato - JMSDF Atsugi Air Base / Naval Air Facility Atsugi"
    },
    {
      "icao": "RJNF",
      "iata": "FKJ",
      "name": "Fukui"
    },
    {
      "icao": "RJTY",
      "iata": "OKO",
      "name": "Fussa - Yokota Air Base"
    },
    {
      "icao": "RJFE",
      "iata": "FUJ",
      "name": "Goto - Fukue"
    },
    {
      "icao": "RJTH",
      "iata": "HAC",
      "name": "Hachijojima"
    },
    {
      "icao": "RJEC",
      "iata": "AKJ",
      "name": "Higashikagura - Asahikawa"
    },
    {
      "icao": "RJSC",
      "iata": "GAJ",
      "name": "Higashine - Yamagata"
    },
    {
      "icao": "RORE",
      "iata": "IEJ",
      "name": "Iejima"
    },
    {
      "icao": "RJDB",
      "iata": "IKI",
      "name": "Iki Airport"
    },
    {
      "icao": "RJOI",
      "iata": "IWK",
      "name": "Iwakuni Kintaikyo"
    },
    {
      "icao": "RJSI",
      "iata": "HNA",
      "name": "Iwate Hanamaki"
    },
    {
      "icao": "RJTO",
      "iata": "OIM",
      "name": "Izu Oshima - Oshima"
    },
    {
      "icao": "RJOC",
      "iata": "IZO",
      "name": "Izumo Enmusubi"
    },
    {
      "icao": "RJSH",
      "iata": "HHE",
      "name": "JMSDF Hachinohe Air Base / Hachinohe"
    },
    {
      "icao": "RJKI",
      "iata": "KKX",
      "name": "Kikai"
    },
    {
      "icao": "RJSR",
      "iata": "ONJ",
      "name": "Kitaakita - Odate Noshiro"
    },
    {
      "icao": "RORK",
      "iata": "KTD",
      "name": "Kitadaitōjima - Kitadaito"
    },
    {
      "icao": "ROKJ",
      "iata": "UEO",
      "name": "Kumejima"
    },
    {
      "icao": "RJCK",
      "iata": "KUH",
      "name": "Kushiro"
    },
    {
      "icao": "RJOW",
      "iata": "IWJ",
      "name": "Masuda - Iwami"
    },
    {
      "icao": "ROMD",
      "iata": "MMD",
      "name": "Minamidaito"
    },
    {
      "icao": "RJSM",
      "iata": "MSJ",
      "name": "Misawa Airport / Misawa Air Base"
    },
    {
      "icao": "RJTQ",
      "iata": "MYE",
      "name": "Miyakejima"
    },
    {
      "icao": "ROMY",
      "iata": "MMY",
      "name": "Miyakojima - Miyako"
    },
    {
      "icao": "RORS",
      "iata": "SHI",
      "name": "Miyakojima - Shimojishima"
    },
    {
      "icao": "RJEB",
      "iata": "MBE",
      "name": "Monbetsu"
    },
    {
      "icao": "RJNA",
      "iata": "NKM",
      "name": "Nagoya Airport / JASDF Komaki Air Base"
    },
    {
      "icao": "RJCN",
      "iata": "SHB",
      "name": "Nakashibetsu"
    },
    {
      "icao": "RJBD",
      "iata": "SHM",
      "name": "Nanki Shirahama"
    },
    {
      "icao": "ROIG",
      "iata": "ISG",
      "name": "New Ishigaki"
    },
    {
      "icao": "RJFG",
      "iata": "TNE",
      "name": "New Tanegashima"
    },
    {
      "icao": "RJAW",
      "iata": "IWO",
      "name": "Ogasawara - Ioto (Iwo Jima) Airbase"
    },
    {
      "icao": "RJFO",
      "iata": "OIT",
      "name": "Oita"
    },
    {
      "icao": "RJNO",
      "iata": "OKI",
      "name": "Okinoshima - Oki Global Geopark"
    },
    {
      "icao": "RJEO",
      "iata": "OIR",
      "name": "Okushiri Island - Okushiri"
    },
    {
      "icao": "RJAH",
      "iata": "IBR",
      "name": "Omitama - Ibaraki"
    },
    {
      "icao": "RJER",
      "iata": "RIS",
      "name": "Rishiri"
    },
    {
      "icao": "RJSD",
      "iata": "SDS",
      "name": "Sado"
    },
    {
      "icao": "RJCO",
      "iata": "OKD",
      "name": "Sapporo Okadama"
    },
    {
      "icao": "RJAF",
      "iata": "MMJ",
      "name": "Shinshu-Matsumoto"
    },
    {
      "icao": "RJSY",
      "iata": "SYO",
      "name": "Shonai"
    },
    {
      "icao": "RJSF",
      "iata": "FKS",
      "name": "Sukagawa - Fukushima"
    },
    {
      "icao": "RORT",
      "iata": "TRA",
      "name": "Tarama"
    },
    {
      "icao": "RJCB",
      "iata": "OBO",
      "name": "Tokachi-Obihiro"
    },
    {
      "icao": "RJOR",
      "iata": "TTJ",
      "name": "Tottori Sand Dunes Conan"
    },
    {
      "icao": "RJNT",
      "iata": "TOY",
      "name": "Toyama Kitokito"
    },
    {
      "icao": "RJBT",
      "iata": "TJH",
      "name": "Toyooka - Konotori Tajima"
    },
    {
      "icao": "RJDT",
      "iata": "TSJ",
      "name": "Tsushima"
    },
    {
      "icao": "RJKB",
      "iata": "OKE",
      "name": "Wadomari - Okinoerabu"
    },
    {
      "icao": "RJNW",
      "iata": "NTQ",
      "name": "Wajima - Noto Satoyama"
    },
    {
      "icao": "RJCW",
      "iata": "WKJ",
      "name": "Wakkanai"
    },
    {
      "icao": "RJFC",
      "iata": "KUM",
      "name": "Yakushima"
    },
    {
      "icao": "RJDC",
      "iata": "UBJ",
      "name": "Yamaguchi Ube"
    },
    {
      "icao": "RJOH",
      "iata": "YGJ",
      "name": "Yonago Kitaro Airport / JASDF Miho Air Base"
    },
    {
      "icao": "ROYN",
      "iata": "OGN",
      "name": "Yonaguni"
    },
    {
      "icao": "RORY",
      "iata": "RNJ",
      "name": "Yoron"
    },
    {
      "icao": "RJCM",
      "iata": "MMB",
      "name": "Ōzora - Memanbetsu"
    }
  ],
  "Jersey": [
    {
      "icao": "EGJJ",
      "iata": "JER",
      "name": "St. Peter - Jersey"
    }
  ],
  "Jordan": [
    {
      "icao": "OJAI",
      "iata": "AMM",
      "name": "Amman - Queen Alia"
    },
    {
      "icao": "OJAQ",
      "iata": "AQJ",
      "name": "Aqaba - King Hussein"
    },
    {
      "icao": "OJAM",
      "iata": "ADJ",
      "name": "Marka International (Amman Civil)"
    },
    {
      "icao": "OJMS",
      "iata": "",
      "name": "Al Azraq - Muwaffaq Salti Air Base"
    },
    {
      "icao": "OJKF",
      "iata": "",
      "name": "Al-Jafr - King Feisal Air Base"
    }
  ],
  "Kazakhstan": [
    {
      "icao": "UATE",
      "iata": "SCO",
      "name": "Aktau"
    },
    {
      "icao": "UATT",
      "iata": "AKX",
      "name": "Aktobe"
    },
    {
      "icao": "UAAA",
      "iata": "ALA",
      "name": "Almaty"
    },
    {
      "icao": "UACC",
      "iata": "NQZ",
      "name": "Astana - Nursultan Nazarbayev"
    },
    {
      "icao": "UATG",
      "iata": "GUW",
      "name": "Atyrau"
    },
    {
      "icao": "UAOL",
      "iata": "BXY",
      "name": "Baikonur Krayniy"
    },
    {
      "icao": "UAKK",
      "iata": "KGF",
      "name": "Karaganda - Sary-Arka"
    },
    {
      "icao": "UACK",
      "iata": "KOV",
      "name": "Kokshetau"
    },
    {
      "icao": "UAUU",
      "iata": "KSN",
      "name": "Kostanay"
    },
    {
      "icao": "UAOO",
      "iata": "KZO",
      "name": "Kyzylorda - Korkyt Ata"
    },
    {
      "icao": "UASP",
      "iata": "PWQ",
      "name": "Pavlodar"
    },
    {
      "icao": "UACP",
      "iata": "PPK",
      "name": "Petropavl"
    },
    {
      "icao": "UASS",
      "iata": "PLX",
      "name": "Semey - Semei"
    },
    {
      "icao": "UAII",
      "iata": "CIT",
      "name": "Shymkent"
    },
    {
      "icao": "UADD",
      "iata": "DMB",
      "name": "Taraz"
    },
    {
      "icao": "UAIT",
      "iata": "HSA",
      "name": "Turkıstan - Hazrat Sultan"
    },
    {
      "icao": "UARR",
      "iata": "URA",
      "name": "Uralsk - Manshuk Mametova"
    },
    {
      "icao": "UASK",
      "iata": "UKK",
      "name": "Ust-Kamenogorsk (Oskemen) - Oskemen"
    },
    {
      "icao": "UAKD",
      "iata": "DZN",
      "name": "Zhezkazgan National"
    },
    {
      "icao": "UAAH",
      "iata": "BXH",
      "name": "Balkhash"
    },
    {
      "icao": "UASB",
      "iata": "EKB",
      "name": "Ekibastuz"
    },
    {
      "icao": "UAON",
      "iata": "",
      "name": "Töretam - Yubileyniy Airfield"
    }
  ],
  "Kenya": [
    {
      "icao": "HKEL",
      "iata": "EDL",
      "name": "Eldoret"
    },
    {
      "icao": "HKKI",
      "iata": "KIS",
      "name": "Kisumu"
    },
    {
      "icao": "HKMO",
      "iata": "MBA",
      "name": "Mombasa - Moi"
    },
    {
      "icao": "HKJK",
      "iata": "NBO",
      "name": "Nairobi - Jomo Kenyatta"
    },
    {
      "icao": "HKAM",
      "iata": "ASV",
      "name": "Amboseli National Park - Amboseli"
    },
    {
      "icao": "HKKT",
      "iata": "KTL",
      "name": "Kitale"
    },
    {
      "icao": "HKLU",
      "iata": "LAU",
      "name": "Lamu - Manda"
    },
    {
      "icao": "HKLO",
      "iata": "LOK",
      "name": "Lodwar"
    },
    {
      "icao": "HKLK",
      "iata": "LKG",
      "name": "Lokichogio"
    },
    {
      "icao": "HKML",
      "iata": "MYD",
      "name": "Malindi"
    },
    {
      "icao": "HKMS",
      "iata": "MRE",
      "name": "Masai Mara - Mara Serena Lodge Airstrip"
    },
    {
      "icao": "HKRE",
      "iata": "",
      "name": "Nairobi - Moi Air Base"
    },
    {
      "icao": "HKNW",
      "iata": "WIL",
      "name": "Nairobi Wilson"
    },
    {
      "icao": "HKNK",
      "iata": "NUU",
      "name": "Nakuru - Lanet Military Airstrip"
    },
    {
      "icao": "HKNL",
      "iata": "NYK",
      "name": "Nanyuki"
    },
    {
      "icao": "HKNY",
      "iata": "",
      "name": "Nanyuki - Laikipia Air Base"
    },
    {
      "icao": "HKWJ",
      "iata": "WJR",
      "name": "Wajir"
    }
  ],
  "Kiribati": [
    {
      "icao": "PLCH",
      "iata": "CXI",
      "name": "Kiritimati - Cassidy"
    },
    {
      "icao": "NGTA",
      "iata": "TRW",
      "name": "South Tarawa - Bonriki"
    },
    {
      "icao": "PCIS",
      "iata": "CIS",
      "name": "Abariringa - Canton Island"
    },
    {
      "icao": "NGTE",
      "iata": "TBF",
      "name": "Tabiteuea North"
    }
  ],
  "Kosovo": [
    {
      "icao": "BKPR",
      "iata": "PRN",
      "name": "Prishtina - Priština Adem Jashari"
    }
  ],
  "Kuwait": [
    {
      "icao": "OKKK",
      "iata": "KWI",
      "name": "Kuwait City - Kuwait"
    },
    {
      "icao": "OKAJ",
      "iata": "XIJ",
      "name": "Ahmed Al Jaber AB - Ahmed Al Jaber Air Base"
    },
    {
      "icao": "OKAS",
      "iata": "",
      "name": "Al Damaikhi - Ali Al Salem Air Base"
    }
  ],
  "Kyrgyzstan": [
    {
      "icao": "UCFM",
      "iata": "BSZ",
      "name": "Bishkek - Manas"
    },
    {
      "icao": "UCFO",
      "iata": "OSS",
      "name": "Osh International"
    },
    {
      "icao": "UCFL",
      "iata": "IKU",
      "name": "Tamchy - Issyk-Kul"
    },
    {
      "icao": "UCFB",
      "iata": "",
      "name": "Batken"
    },
    {
      "icao": "UCFD",
      "iata": "",
      "name": "Jalal-Abad"
    }
  ],
  "Laos": [
    {
      "icao": "VLLB",
      "iata": "LPQ",
      "name": "Luang Phabang"
    },
    {
      "icao": "VLPS",
      "iata": "PKZ",
      "name": "Pakse"
    },
    {
      "icao": "VLVT",
      "iata": "VTE",
      "name": "Vientiane - Wattay"
    },
    {
      "icao": "VLSN",
      "iata": "NEU",
      "name": "Sam Neua"
    },
    {
      "icao": "VLSK",
      "iata": "ZVK",
      "name": "Savannakhet"
    }
  ],
  "Latvia": [
    {
      "icao": "EVLA",
      "iata": "LPX",
      "name": "Liepāja"
    },
    {
      "icao": "EVRA",
      "iata": "RIX",
      "name": "Riga"
    },
    {
      "icao": "EVDA",
      "iata": "DGP",
      "name": "Daugavpils"
    }
  ],
  "Lebanon": [
    {
      "icao": "OLBA",
      "iata": "BEY",
      "name": "Beirut Rafic Hariri"
    },
    {
      "icao": "OLKA",
      "iata": "KYE",
      "name": "Tripoli - Rene Mouawad Air Base"
    }
  ],
  "Lesotho": [
    {
      "icao": "FXMM",
      "iata": "MSU",
      "name": "Maseru(Mazenod) - Moshoeshoe I"
    }
  ],
  "Liberia": [
    {
      "icao": "GLRB",
      "iata": "ROB",
      "name": "Monrovia - Roberts"
    },
    {
      "icao": "GLGE",
      "iata": "SNI",
      "name": "Greenville/Sinoe"
    },
    {
      "icao": "GLMR",
      "iata": "MLW",
      "name": "Monrovia - Spriggs Payne"
    }
  ],
  "Libya": [
    {
      "icao": "HLLQ",
      "iata": "LAQ",
      "name": "Al Albraq - Al Abraq"
    },
    {
      "icao": "HLLB",
      "iata": "BEN",
      "name": "Benina"
    },
    {
      "icao": "HLGD",
      "iata": "SRX",
      "name": "Sirt International Airport / Ghardabiya Airbase"
    },
    {
      "icao": "HLLM",
      "iata": "MJI",
      "name": "Tripoli - Mitiga"
    },
    {
      "icao": "HLTD",
      "iata": "LTD",
      "name": "Ghadames"
    },
    {
      "icao": "HLGT",
      "iata": "GHT",
      "name": "Ghat"
    },
    {
      "icao": "HLKF",
      "iata": "AKF",
      "name": "Kufra"
    },
    {
      "icao": "HLMB",
      "iata": "LMQ",
      "name": "Marsa al Brega"
    },
    {
      "icao": "HLLS",
      "iata": "SEB",
      "name": "Sabha"
    }
  ],
  "Lithuania": [
    {
      "icao": "EYKA",
      "iata": "KUN",
      "name": "Kaunas"
    },
    {
      "icao": "EYPA",
      "iata": "PLQ",
      "name": "Palanga"
    },
    {
      "icao": "EYVI",
      "iata": "VNO",
      "name": "Vilnius"
    },
    {
      "icao": "EYPP",
      "iata": "PNV",
      "name": "Panevėžys Air Base"
    },
    {
      "icao": "EYSA",
      "iata": "SQQ",
      "name": "Šiauliai"
    }
  ],
  "Luxembourg": [
    {
      "icao": "ELLX",
      "iata": "LUX",
      "name": "Luxembourg-Findel"
    }
  ],
  "Macau": [
    {
      "icao": "VMMC",
      "iata": "MFM",
      "name": "Nossa Senhora do Carmo - Macau"
    }
  ],
  "Madagascar": [
    {
      "icao": "FMMI",
      "iata": "TNR",
      "name": "Antananarivo - Ivato"
    },
    {
      "icao": "FMNM",
      "iata": "MJN",
      "name": "Mahajanga - Amborovy"
    },
    {
      "icao": "FMMT",
      "iata": "TMM",
      "name": "Toamasina Ambalamanasy"
    },
    {
      "icao": "FMNL",
      "iata": "HVA",
      "name": "Analalava"
    },
    {
      "icao": "FMND",
      "iata": "ZWA",
      "name": "Andapa"
    },
    {
      "icao": "FMNA",
      "iata": "DIE",
      "name": "Antisiranana - Arrachart"
    },
    {
      "icao": "FMNH",
      "iata": "ANM",
      "name": "Antsirabe"
    },
    {
      "icao": "FMNW",
      "iata": "WAI",
      "name": "Antsohihy - Ambalabe"
    },
    {
      "icao": "FMNQ",
      "iata": "BPY",
      "name": "Besalampy"
    },
    {
      "icao": "FMSF",
      "iata": "WFI",
      "name": "Fianarantsoa"
    },
    {
      "icao": "FMSK",
      "iata": "WVK",
      "name": "Manakara"
    },
    {
      "icao": "FMNC",
      "iata": "WMR",
      "name": "Mananara Nord"
    },
    {
      "icao": "FMSM",
      "iata": "MNJ",
      "name": "Mananjary"
    },
    {
      "icao": "FMNR",
      "iata": "WMN",
      "name": "Maroantsetra"
    },
    {
      "icao": "FMMN",
      "iata": "ZVA",
      "name": "Miandrivazo"
    },
    {
      "icao": "FMSR",
      "iata": "MXM",
      "name": "Morombe"
    },
    {
      "icao": "FMMV",
      "iata": "MOQ",
      "name": "Morondava"
    },
    {
      "icao": "FMNN",
      "iata": "NOS",
      "name": "Nosy Be-Fascene"
    },
    {
      "icao": "FMNS",
      "iata": "SVB",
      "name": "Sambava"
    },
    {
      "icao": "FMST",
      "iata": "TLE",
      "name": "Toliara"
    },
    {
      "icao": "FMSD",
      "iata": "FTU",
      "name": "Tôlanaro"
    },
    {
      "icao": "FMNV",
      "iata": "VOH",
      "name": "Vohemar"
    },
    {
      "icao": "FMMS",
      "iata": "SMS",
      "name": "Vohilava - Sainte Marie"
    }
  ],
  "Malawi": [
    {
      "icao": "FWCL",
      "iata": "BLZ",
      "name": "Blantyre - Chileka"
    },
    {
      "icao": "FWKI",
      "iata": "LLW",
      "name": "Lumbadzi - Kamuzu"
    },
    {
      "icao": "FWDW",
      "iata": "DWA",
      "name": "Dwangwa"
    },
    {
      "icao": "FWKA",
      "iata": "KGJ",
      "name": "Karonga"
    },
    {
      "icao": "FWUU",
      "iata": "ZZU",
      "name": "Mzuzu"
    }
  ],
  "Malaysia": [
    {
      "icao": "WMKI",
      "iata": "IPH",
      "name": "Ipoh - Sultan Azlan Shah"
    },
    {
      "icao": "WMKJ",
      "iata": "JHB",
      "name": "Johor Bahru - Senai"
    },
    {
      "icao": "WBKK",
      "iata": "BKI",
      "name": "Kota Kinabalu"
    },
    {
      "icao": "WBGG",
      "iata": "KCH",
      "name": "Kuching"
    },
    {
      "icao": "WMKP",
      "iata": "PEN",
      "name": "Penang"
    },
    {
      "icao": "WMKK",
      "iata": "KUL",
      "name": "Sepang - Kuala Lumpur"
    },
    {
      "icao": "WMSA",
      "iata": "SZB",
      "name": "Subang - Sultan Abdul Aziz Shah"
    },
    {
      "icao": "WMKA",
      "iata": "AOR",
      "name": "Alor Satar - Sultan Abdul Halim"
    },
    {
      "icao": "WBGZ",
      "iata": "BBN",
      "name": "Bario"
    },
    {
      "icao": "WBGB",
      "iata": "BTU",
      "name": "Bintulu"
    },
    {
      "icao": "WMKE",
      "iata": "KTE",
      "name": "Kerteh"
    },
    {
      "icao": "WMKC",
      "iata": "KBR",
      "name": "Kota Baharu - Sultan Ismail Petra"
    },
    {
      "icao": "WMKN",
      "iata": "TGG",
      "name": "Kuala Terengganu - Sultan Mahmud"
    },
    {
      "icao": "WMKD",
      "iata": "KUA",
      "name": "Kuantan"
    },
    {
      "icao": "WBKL",
      "iata": "LBU",
      "name": "Labuan"
    },
    {
      "icao": "WBKD",
      "iata": "LDU",
      "name": "Lahad Datu"
    },
    {
      "icao": "WMKL",
      "iata": "LGK",
      "name": "Langkawi"
    },
    {
      "icao": "WBGJ",
      "iata": "LMN",
      "name": "Limbang"
    },
    {
      "icao": "WMKM",
      "iata": "MKZ",
      "name": "Malacca"
    },
    {
      "icao": "WBGM",
      "iata": "MUR",
      "name": "Marudi"
    },
    {
      "icao": "WBGR",
      "iata": "MYY",
      "name": "Miri"
    },
    {
      "icao": "WBGK",
      "iata": "MKM",
      "name": "Mukah"
    },
    {
      "icao": "WBMU",
      "iata": "MZV",
      "name": "Mulu"
    },
    {
      "icao": "WMKB",
      "iata": "BWH",
      "name": "RMAF Butterworth Air Base"
    },
    {
      "icao": "WBKS",
      "iata": "SDK",
      "name": "Sandakan"
    },
    {
      "icao": "WBGS",
      "iata": "SBW",
      "name": "Sibu"
    },
    {
      "icao": "WBKW",
      "iata": "TWU",
      "name": "Tawau"
    },
    {
      "icao": "WMBT",
      "iata": "TOD",
      "name": "Tioman Island - Tioman"
    }
  ],
  "Maldives": [
    {
      "icao": "VRMG",
      "iata": "GAN",
      "name": "Gan International"
    },
    {
      "icao": "VRMH",
      "iata": "HAQ",
      "name": "Haa Dhaalu Atoll - Hanimaadhoo"
    },
    {
      "icao": "VRMM",
      "iata": "MLE",
      "name": "Malé - Velana"
    },
    {
      "icao": "VRMT",
      "iata": "KDM",
      "name": "Huvadhu Atoll - Kaadedhdhoo"
    },
    {
      "icao": "VRMK",
      "iata": "KDO",
      "name": "Kadhdhoo"
    },
    {
      "icao": "VRMV",
      "iata": "VAM",
      "name": "Villa International Airport Maamigili"
    }
  ],
  "Mali": [
    {
      "icao": "GABS",
      "iata": "BKO",
      "name": "Bamako - Modibo Keita"
    },
    {
      "icao": "GATB",
      "iata": "TOM",
      "name": "Timbuktu - Tombouktou"
    },
    {
      "icao": "GAGO",
      "iata": "GAQ",
      "name": "Gao International"
    },
    {
      "icao": "GAKD",
      "iata": "KYS",
      "name": "Kayes Dag Dag"
    },
    {
      "icao": "GAMB",
      "iata": "MZI",
      "name": "Sévaré - Mopti"
    }
  ],
  "Malta": [
    {
      "icao": "LMML",
      "iata": "MLA",
      "name": "Valletta - Malta"
    }
  ],
  "Marshall Islands": [
    {
      "icao": "PKMJ",
      "iata": "MAJ",
      "name": "Majuro Atoll - Marshall Islands"
    },
    {
      "icao": "PKWA",
      "iata": "KWA",
      "name": "Kwajalein - Bucholz Army Air Field"
    }
  ],
  "Martinique": [
    {
      "icao": "TFFF",
      "iata": "FDF",
      "name": "Fort-de-France - Martinique Aimé Césaire"
    }
  ],
  "Mauritania": [
    {
      "icao": "GQPA",
      "iata": "ATR",
      "name": "Atar"
    },
    {
      "icao": "GQPP",
      "iata": "NDB",
      "name": "Nouadhibou"
    },
    {
      "icao": "GQNO",
      "iata": "NKC",
      "name": "Nouakchott–Oumtounsy"
    }
  ],
  "Mauritius": [
    {
      "icao": "FIMP",
      "iata": "MRU",
      "name": "Plaine Magnien - Sir Seewoosagur Ramgoolam"
    },
    {
      "icao": "FIMR",
      "iata": "RRG",
      "name": "Port Mathurin - Sir Charles Gaetan Duval"
    }
  ],
  "Mayotte": [
    {
      "icao": "FMCZ",
      "iata": "DZA",
      "name": "Dzaoudzi Pamandzi"
    }
  ],
  "Mexico": [
    {
      "icao": "MMAA",
      "iata": "ACA",
      "name": "Acapulco - General Juan N. Álvarez"
    },
    {
      "icao": "MMAS",
      "iata": "AGU",
      "name": "Aguascalientes"
    },
    {
      "icao": "MMBT",
      "iata": "HUX",
      "name": "Bahías de Huatulco"
    },
    {
      "icao": "MMUN",
      "iata": "CUN",
      "name": "Cancún"
    },
    {
      "icao": "MMCU",
      "iata": "CUU",
      "name": "Chihuahua - General Roberto Fierro Villalobos"
    },
    {
      "icao": "MMCS",
      "iata": "CJS",
      "name": "Ciudad Juárez - Abraham González"
    },
    {
      "icao": "MMCZ",
      "iata": "CZM",
      "name": "Cozumel"
    },
    {
      "icao": "MMCL",
      "iata": "CUL",
      "name": "Culiacán - Bachigualato Federal"
    },
    {
      "icao": "MMTL",
      "iata": "TQO",
      "name": "Felipe Carrillo Puerto International Airport Tulum"
    },
    {
      "icao": "MMGL",
      "iata": "GDL",
      "name": "Guadalajara"
    },
    {
      "icao": "MMHO",
      "iata": "HMO",
      "name": "Hermosillo - General Ignacio L. Pesqueira"
    },
    {
      "icao": "MMZH",
      "iata": "ZIH",
      "name": "Ixtapa-Zihuatanejo"
    },
    {
      "icao": "MMLT",
      "iata": "LTO",
      "name": "Loreto"
    },
    {
      "icao": "MMMZ",
      "iata": "MZT",
      "name": "Mazatlàn - General Rafael Buelna"
    },
    {
      "icao": "MMSM",
      "iata": "NLU",
      "name": "Mexico City - Felipe Ángeles"
    },
    {
      "icao": "MMMX",
      "iata": "MEX",
      "name": "Mexico City Benito Juárez"
    },
    {
      "icao": "MMMY",
      "iata": "MTY",
      "name": "Monterrey"
    },
    {
      "icao": "MMMM",
      "iata": "MLM",
      "name": "Morelia - General Francisco J. Mujica"
    },
    {
      "icao": "MMMD",
      "iata": "MID",
      "name": "Mérida - Manuel Crescencio Rejón"
    },
    {
      "icao": "MMOX",
      "iata": "OAX",
      "name": "Oaxaca - Xoxocotlán"
    },
    {
      "icao": "MMPB",
      "iata": "PBC",
      "name": "Puebla - Hermanos Serdán"
    },
    {
      "icao": "MMPR",
      "iata": "PVR",
      "name": "Puerto Vallarta"
    },
    {
      "icao": "MMQT",
      "iata": "QRO",
      "name": "Querétaro Intercontinental"
    },
    {
      "icao": "MMSD",
      "iata": "SJD",
      "name": "San José del Cabo - Los Cabos"
    },
    {
      "icao": "MMLO",
      "iata": "BJX",
      "name": "Silao - Guanajuato"
    },
    {
      "icao": "MMTJ",
      "iata": "TIJ",
      "name": "Tijuana - General Abelardo L. Rodriguez"
    },
    {
      "icao": "MMTO",
      "iata": "TLC",
      "name": "Toluca - Adolfo López Mateos"
    },
    {
      "icao": "MMVR",
      "iata": "VER",
      "name": "Veracruz - General Heriberto Jara"
    },
    {
      "icao": "MMVA",
      "iata": "VSA",
      "name": "Villahermosa - Carlos Rovirosa Pérez"
    },
    {
      "icao": "MMSL",
      "iata": "CSW",
      "name": "Cabo San Lucas"
    },
    {
      "icao": "MMCP",
      "iata": "CPE",
      "name": "Campeche - Ingeniero Alberto Acuña Ongay"
    },
    {
      "icao": "MMCY",
      "iata": "CYW",
      "name": "Celaya - Captain Rogelio Castillo National"
    },
    {
      "icao": "MMCM",
      "iata": "CTM",
      "name": "Chetumal"
    },
    {
      "icao": "MMCC",
      "iata": "ACN",
      "name": "Ciudad Acuña"
    },
    {
      "icao": "MMTM",
      "iata": "TAM",
      "name": "Ciudad Madero - General Francisco Javier Mina"
    },
    {
      "icao": "MMCN",
      "iata": "CEN",
      "name": "Ciudad Obregón"
    },
    {
      "icao": "MMCV",
      "iata": "CVM",
      "name": "Ciudad Victoria - General Pedro Jose Mendez"
    },
    {
      "icao": "MMCE",
      "iata": "CME",
      "name": "Ciudad del Carmen"
    },
    {
      "icao": "MMIA",
      "iata": "CLQ",
      "name": "Colima - Licenciado Miguel de la Madrid"
    },
    {
      "icao": "MMMT",
      "iata": "MTT",
      "name": "Cosoleacaque - Minatitlán/Coatzacoalcos"
    },
    {
      "icao": "MMDO",
      "iata": "DGO",
      "name": "Durango - General Guadalupe Victoria"
    },
    {
      "icao": "MMJA",
      "iata": "JAL",
      "name": "Emiliano Zapata - El Lencero"
    },
    {
      "icao": "MMES",
      "iata": "ESE",
      "name": "Ensenada International Airport / El Ciprés Air Base"
    },
    {
      "icao": "MMIT",
      "iata": "IZT",
      "name": "General Antonio Cárdenas Rodríguez National Airport / Ixtepec Air Base"
    },
    {
      "icao": "MMGM",
      "iata": "GYM",
      "name": "Guaymas - General José María Yáñez"
    },
    {
      "icao": "MMLP",
      "iata": "LAP",
      "name": "La Paz - Manuel Márquez de León"
    },
    {
      "icao": "MMLM",
      "iata": "LMM",
      "name": "Los Mochis - Valle del Fuerte"
    },
    {
      "icao": "MMLC",
      "iata": "LZC",
      "name": "Lázaro Cárdenas"
    },
    {
      "icao": "MMZO",
      "iata": "ZLO",
      "name": "Manzanillo - Playa de Oro"
    },
    {
      "icao": "MMMA",
      "iata": "MAM",
      "name": "Matamoros - General Servando Canales"
    },
    {
      "icao": "MMML",
      "iata": "MXL",
      "name": "Mexicali - General Rodolfo Sánchez Taboada"
    },
    {
      "icao": "MMMV",
      "iata": "LOV",
      "name": "Monclova"
    },
    {
      "icao": "MMAN",
      "iata": "NTR",
      "name": "Monterrey - Del Norte"
    },
    {
      "icao": "MMNG",
      "iata": "NOG",
      "name": "Nogales"
    },
    {
      "icao": "MMNL",
      "iata": "NLD",
      "name": "Nuevo Laredo - Quetzalcóatl"
    },
    {
      "icao": "MMPG",
      "iata": "PDS",
      "name": "Piedras Negras"
    },
    {
      "icao": "MMPA",
      "iata": "PAZ",
      "name": "Poza Rica - El Tajín National"
    },
    {
      "icao": "MMPS",
      "iata": "PXM",
      "name": "Puerto Escondido"
    },
    {
      "icao": "MMRX",
      "iata": "REX",
      "name": "Reynosa - General Lucio Blanco"
    },
    {
      "icao": "MMIO",
      "iata": "SLW",
      "name": "Saltillo - Plan De Guadalupe"
    },
    {
      "icao": "MMSP",
      "iata": "SLP",
      "name": "San Luis Potosí - Ponciano Arriaga"
    },
    {
      "icao": "MMTP",
      "iata": "TAP",
      "name": "Tapachula"
    },
    {
      "icao": "MMCB",
      "iata": "CVJ",
      "name": "Temixco - General Mariano Matamoros"
    },
    {
      "icao": "MMEP",
      "iata": "TPQ",
      "name": "Tepic - Amado Nervo National"
    },
    {
      "icao": "MMTC",
      "iata": "TRC",
      "name": "Torreón - Francisco Sarabia Tinoco"
    },
    {
      "icao": "MMTG",
      "iata": "TGZ",
      "name": "Tuxtla Gutiérrez - Angel Albino Corzo"
    },
    {
      "icao": "MMTB",
      "iata": "",
      "name": "Tuxtla Gutiérrez - Terán Air Base"
    },
    {
      "icao": "MMPN",
      "iata": "UPN",
      "name": "Uruapan - Licenciado y General Ignacio Lopez Rayon"
    },
    {
      "icao": "MMZC",
      "iata": "ZCL",
      "name": "Zacatecas - General Leobardo C. Ruiz"
    }
  ],
  "Micronesia": [
    {
      "icao": "PTSA",
      "iata": "KSA",
      "name": "Okat - Kosrae"
    },
    {
      "icao": "PTKK",
      "iata": "TKK",
      "name": "Weno Island - Chuuk"
    },
    {
      "icao": "PTYA",
      "iata": "YAP",
      "name": "Yap Island - Yap"
    },
    {
      "icao": "PTPN",
      "iata": "PNI",
      "name": "Pohnpei Island - Pohnpei"
    }
  ],
  "Moldova": [
    {
      "icao": "LUKK",
      "iata": "RMO",
      "name": "Chişinău"
    },
    {
      "icao": "LUBL",
      "iata": "BZY",
      "name": "Bălți-Leadoveni"
    },
    {
      "icao": "LUCH",
      "iata": "",
      "name": "Cahul"
    },
    {
      "icao": "LUBM",
      "iata": "",
      "name": "Mărculeşti - Mărculești Air Base"
    },
    {
      "icao": "LUTR",
      "iata": "",
      "name": "Tiraspol Airfield"
    }
  ],
  "Mongolia": [
    {
      "icao": "ZMCK",
      "iata": "UBN",
      "name": "Ulaanbaatar (Sergelen) - Ulaanbaatar Chinggis Khaan"
    },
    {
      "icao": "ZMUB",
      "iata": "ULN",
      "name": "Ulaanbaatar - Buyant-Ukhaa"
    },
    {
      "icao": "ZMAT",
      "iata": "LTI",
      "name": "Altai"
    },
    {
      "icao": "ZMAH",
      "iata": "AVK",
      "name": "Arvaikheer"
    },
    {
      "icao": "ZMBU",
      "iata": "UUN",
      "name": "Baruun Urt"
    },
    {
      "icao": "ZMBH",
      "iata": "BYN",
      "name": "Bayankhongor"
    },
    {
      "icao": "ZMBN",
      "iata": "UGA",
      "name": "Bulgan"
    },
    {
      "icao": "ZMCD",
      "iata": "COQ",
      "name": "Choibalsan"
    },
    {
      "icao": "ZMDZ",
      "iata": "DLZ",
      "name": "Dalanzadgad"
    },
    {
      "icao": "ZMKD",
      "iata": "HVD",
      "name": "Khovd"
    },
    {
      "icao": "ZMMN",
      "iata": "MXV",
      "name": "Mörön"
    },
    {
      "icao": "ZMUG",
      "iata": "ULO",
      "name": "Ulaangom"
    },
    {
      "icao": "ZMUL",
      "iata": "ULG",
      "name": "Ölgii Mongolei"
    }
  ],
  "Montenegro": [
    {
      "icao": "LYPG",
      "iata": "TGD",
      "name": "Podgorica Airport / Podgorica Golubovci Airbase"
    },
    {
      "icao": "LYTV",
      "iata": "TIV",
      "name": "Tivat"
    }
  ],
  "Montserrat": [
    {
      "icao": "TRPG",
      "iata": "MNI",
      "name": "Gerald's Park - John A. Osborne"
    }
  ],
  "Morocco": [
    {
      "icao": "GMAD",
      "iata": "AGA",
      "name": "Agadir (Temsia) - Al Massira"
    },
    {
      "icao": "GMFO",
      "iata": "OUD",
      "name": "Ahl Angad - Oujda Angads"
    },
    {
      "icao": "GMMN",
      "iata": "CMN",
      "name": "Casablanca - Mohammed V"
    },
    {
      "icao": "GMFF",
      "iata": "FEZ",
      "name": "Fes Saïss"
    },
    {
      "icao": "GMMX",
      "iata": "RAK",
      "name": "Marrakesh Menara"
    },
    {
      "icao": "GMMW",
      "iata": "NDR",
      "name": "Nador Al Aaroui"
    },
    {
      "icao": "GMMZ",
      "iata": "OZZ",
      "name": "Ouarzazate"
    },
    {
      "icao": "GMMD",
      "iata": "BEM",
      "name": "Oulad Yaich - Beni Mellal"
    },
    {
      "icao": "GMME",
      "iata": "RBA",
      "name": "Rabat-Salé"
    },
    {
      "icao": "GMTT",
      "iata": "TNG",
      "name": "Tangier Ibn Battuta"
    },
    {
      "icao": "GMTN",
      "iata": "TTU",
      "name": "Tétouan - Sania Ramel"
    },
    {
      "icao": "GMAZ",
      "iata": "OZG",
      "name": "Zagora"
    },
    {
      "icao": "GMTA",
      "iata": "AHU",
      "name": "Al Hoceima - Cherif Al Idrissi"
    },
    {
      "icao": "GMFB",
      "iata": "UAR",
      "name": "Bouarfa"
    },
    {
      "icao": "GMFK",
      "iata": "ERH",
      "name": "Errachidia - Moulay Ali Cherif"
    },
    {
      "icao": "GMMI",
      "iata": "ESU",
      "name": "Essaouira-Mogador"
    },
    {
      "icao": "GMFM",
      "iata": "MEK",
      "name": "Meknes - Bassatine"
    },
    {
      "icao": "GMAT",
      "iata": "TTA",
      "name": "Tan Tan"
    }
  ],
  "Mozambique": [
    {
      "icao": "FQBR",
      "iata": "BEW",
      "name": "Beira"
    },
    {
      "icao": "FQMA",
      "iata": "MPM",
      "name": "Maputo"
    },
    {
      "icao": "FQNP",
      "iata": "APL",
      "name": "Nampula"
    },
    {
      "icao": "FQTT",
      "iata": "TET",
      "name": "Tete"
    },
    {
      "icao": "FQCH",
      "iata": "VPY",
      "name": "Chimoio"
    },
    {
      "icao": "FQIN",
      "iata": "INH",
      "name": "Inhambane"
    },
    {
      "icao": "FQLC",
      "iata": "VXC",
      "name": "Lichinga"
    },
    {
      "icao": "FQMP",
      "iata": "MZB",
      "name": "Mocímboa da Praia"
    },
    {
      "icao": "FQMD",
      "iata": "MUD",
      "name": "Mueda"
    },
    {
      "icao": "FQNC",
      "iata": "MNC",
      "name": "Nacala"
    },
    {
      "icao": "FQPB",
      "iata": "POL",
      "name": "Pemba"
    },
    {
      "icao": "FQQL",
      "iata": "UEL",
      "name": "Quelimane"
    },
    {
      "icao": "FQVL",
      "iata": "VNX",
      "name": "Vilanculo - Vilankulo"
    }
  ],
  "Myanmar": [
    {
      "icao": "VYMD",
      "iata": "MDL",
      "name": "Mandalay"
    },
    {
      "icao": "VYNT",
      "iata": "NYT",
      "name": "Naypyitaw - Nay Pyi Taw"
    },
    {
      "icao": "VYYY",
      "iata": "RGN",
      "name": "Yangon"
    },
    {
      "icao": "VYDW",
      "iata": "TVY",
      "name": "Dawei"
    },
    {
      "icao": "VYHH",
      "iata": "HEH",
      "name": "Heho"
    },
    {
      "icao": "VYKT",
      "iata": "KAW",
      "name": "Kawthoung"
    },
    {
      "icao": "VYKG",
      "iata": "KET",
      "name": "Kengtung"
    },
    {
      "icao": "VYKP",
      "iata": "KYP",
      "name": "Kyaukpyu"
    },
    {
      "icao": "VYLS",
      "iata": "LSH",
      "name": "Lashio"
    },
    {
      "icao": "VYLK",
      "iata": "LIW",
      "name": "Loikaw"
    },
    {
      "icao": "VYME",
      "iata": "MGZ",
      "name": "Mkeik - Myeik"
    },
    {
      "icao": "VYMO",
      "iata": "MOE",
      "name": "Momeik"
    },
    {
      "icao": "VYMS",
      "iata": "MOG",
      "name": "Mong Hsat"
    },
    {
      "icao": "VYMK",
      "iata": "MYT",
      "name": "Myitkyina"
    },
    {
      "icao": "VYNS",
      "iata": "NMS",
      "name": "Namsang"
    },
    {
      "icao": "VYPT",
      "iata": "PBU",
      "name": "Putao"
    },
    {
      "icao": "VYSW",
      "iata": "AKY",
      "name": "Sittwe"
    },
    {
      "icao": "VYTL",
      "iata": "THL",
      "name": "Tachileik"
    },
    {
      "icao": "VYTD",
      "iata": "SNW",
      "name": "Thandwe"
    }
  ],
  "Namibia": [
    {
      "icao": "FYWB",
      "iata": "WVB",
      "name": "Walvis Bay(Rooikop) - Walvis Bay"
    },
    {
      "icao": "FYWH",
      "iata": "WDH",
      "name": "Windhoek - Hosea Kutako"
    },
    {
      "icao": "FYAR",
      "iata": "ADI",
      "name": "Arandis"
    },
    {
      "icao": "FYGF",
      "iata": "GFY",
      "name": "Grootfontein"
    },
    {
      "icao": "FYKT",
      "iata": "KMP",
      "name": "Keetmanshoop"
    },
    {
      "icao": "FYLZ",
      "iata": "LUD",
      "name": "Luderitz"
    },
    {
      "icao": "FYML",
      "iata": "",
      "name": "Mariental"
    },
    {
      "icao": "FYKM",
      "iata": "MPA",
      "name": "Mpacha - Katima Mulilo"
    },
    {
      "icao": "FYOA",
      "iata": "OND",
      "name": "Ondangwa"
    },
    {
      "icao": "FYOG",
      "iata": "OMD",
      "name": "Oranjemund"
    },
    {
      "icao": "FYRU",
      "iata": "NDU",
      "name": "Rundu"
    },
    {
      "icao": "FYTM",
      "iata": "TSB",
      "name": "Tsumeb"
    },
    {
      "icao": "FYWE",
      "iata": "ERS",
      "name": "Windhoek - Eros"
    }
  ],
  "Nauru": [
    {
      "icao": "ANYN",
      "iata": "INU",
      "name": "Yaren - Nauru"
    }
  ],
  "Nepal": [
    {
      "icao": "VNKT",
      "iata": "KTM",
      "name": "Kathmandu - Tribhuvan"
    },
    {
      "icao": "VNBW",
      "iata": "BWA",
      "name": "Siddharthanagar (Bhairahawa) - Gautam Buddha"
    },
    {
      "icao": "VNVT",
      "iata": "BIR",
      "name": "Biratnagar"
    },
    {
      "icao": "VNJP",
      "iata": "JKR",
      "name": "Janakpur"
    },
    {
      "icao": "VNNG",
      "iata": "KEP",
      "name": "Nepalgunj"
    },
    {
      "icao": "VNPK",
      "iata": "PKR",
      "name": "Pokhara Domestic"
    },
    {
      "icao": "VNTJ",
      "iata": "TPJ",
      "name": "Taplejung"
    }
  ],
  "Netherlands": [
    {
      "icao": "EHAM",
      "iata": "AMS",
      "name": "Amsterdam Airport Schiphol"
    },
    {
      "icao": "EHEH",
      "iata": "EIN",
      "name": "Eindhoven"
    },
    {
      "icao": "EHGG",
      "iata": "GRQ",
      "name": "Groningen Airport Eelde"
    },
    {
      "icao": "EHBK",
      "iata": "MST",
      "name": "Maastricht Aachen"
    },
    {
      "icao": "EHRD",
      "iata": "RTM",
      "name": "Rotterdam The Hague"
    },
    {
      "icao": "EHDL",
      "iata": "",
      "name": "Arnhem - Deelen Air Base"
    },
    {
      "icao": "EHKD",
      "iata": "DHR",
      "name": "De Kooy Airfield / Den Helder Naval Air Station"
    },
    {
      "icao": "EHTW",
      "iata": "ENS",
      "name": "Enschede - Twente"
    },
    {
      "icao": "EHGR",
      "iata": "GLZ",
      "name": "Gilze Rijen Air Base"
    },
    {
      "icao": "EHWO",
      "iata": "WOE",
      "name": "Hoogerheide - Woensdrecht Air Base"
    },
    {
      "icao": "EHLW",
      "iata": "LWR",
      "name": "Leeuwarden Air Base"
    },
    {
      "icao": "EHLE",
      "iata": "LEY",
      "name": "Lelystad"
    },
    {
      "icao": "EHVK",
      "iata": "UDE",
      "name": "Uden - Volkel Air Base"
    },
    {
      "icao": "EHBD",
      "iata": "",
      "name": "Weert - Kempen Airport Budel"
    }
  ],
  "New Caledonia": [
    {
      "icao": "NWWW",
      "iata": "NOU",
      "name": "Nouméa (La Tontouta) - La Tontouta"
    },
    {
      "icao": "NWWD",
      "iata": "KNQ",
      "name": "Koné"
    },
    {
      "icao": "NWWL",
      "iata": "LIF",
      "name": "Lifou"
    },
    {
      "icao": "NWWR",
      "iata": "MEE",
      "name": "Maré"
    },
    {
      "icao": "NWWM",
      "iata": "GEA",
      "name": "Nouméa Magenta"
    },
    {
      "icao": "NWWV",
      "iata": "UVE",
      "name": "Ouvéa"
    },
    {
      "icao": "NWWA",
      "iata": "TGJ",
      "name": "Tiga"
    },
    {
      "icao": "NWWU",
      "iata": "TOU",
      "name": "Touho"
    },
    {
      "icao": "NWWE",
      "iata": "ILP",
      "name": "Île des Pins"
    }
  ],
  "New Zealand": [
    {
      "icao": "NZAA",
      "iata": "AKL",
      "name": "Auckland"
    },
    {
      "icao": "NZCH",
      "iata": "CHC",
      "name": "Christchurch"
    },
    {
      "icao": "NZQN",
      "iata": "ZQN",
      "name": "Queenstown"
    },
    {
      "icao": "NZWN",
      "iata": "WLG",
      "name": "Wellington"
    },
    {
      "icao": "NZLX",
      "iata": "ALR",
      "name": "Alexandra Aerodrome"
    },
    {
      "icao": "NZKT",
      "iata": "KAT",
      "name": "Awanui - Kaitaia"
    },
    {
      "icao": "NZWB",
      "iata": "BHE",
      "name": "Blenheim - Woodbourne"
    },
    {
      "icao": "NZDN",
      "iata": "DUD",
      "name": "Dunedin"
    },
    {
      "icao": "NZGS",
      "iata": "GIS",
      "name": "Gisborne"
    },
    {
      "icao": "NZGT",
      "iata": "GTN",
      "name": "Glentanner Station - Glentanner"
    },
    {
      "icao": "NZHN",
      "iata": "HLZ",
      "name": "Hamilton"
    },
    {
      "icao": "NZHK",
      "iata": "HKK",
      "name": "Hokitika Airfield"
    },
    {
      "icao": "NZNV",
      "iata": "IVC",
      "name": "Invercargill"
    },
    {
      "icao": "NZKK",
      "iata": "KKE",
      "name": "Kerikeri"
    },
    {
      "icao": "NZMO",
      "iata": "TEU",
      "name": "Manapouri"
    },
    {
      "icao": "NZAR",
      "iata": "AMZ",
      "name": "Manurewa - Ardmore"
    },
    {
      "icao": "NZMS",
      "iata": "MRO",
      "name": "Masterton - Hood"
    },
    {
      "icao": "NZMC",
      "iata": "MON",
      "name": "Mount Cook"
    },
    {
      "icao": "NZNR",
      "iata": "NPE",
      "name": "Napier - Hawke's Bay"
    },
    {
      "icao": "NZNS",
      "iata": "NSN",
      "name": "Nelson"
    },
    {
      "icao": "NZNP",
      "iata": "NPL",
      "name": "New Plymouth"
    },
    {
      "icao": "NZOU",
      "iata": "OAM",
      "name": "Oamaru"
    },
    {
      "icao": "NZPM",
      "iata": "PMR",
      "name": "Palmerston North"
    },
    {
      "icao": "NZPP",
      "iata": "PPQ",
      "name": "Paraparaumu"
    },
    {
      "icao": "NZWP",
      "iata": "",
      "name": "RNZAF Base Auckland-Whenuapai"
    },
    {
      "icao": "NZOH",
      "iata": "OHA",
      "name": "RNZAF Base Ohakea"
    },
    {
      "icao": "NZRO",
      "iata": "ROT",
      "name": "Rotorua Regional"
    },
    {
      "icao": "NZAP",
      "iata": "TUO",
      "name": "Taupo"
    },
    {
      "icao": "NZTG",
      "iata": "TRG",
      "name": "Tauranga"
    },
    {
      "icao": "NZCI",
      "iata": "CHT",
      "name": "Te One - Inia William Tuuta Memorial"
    },
    {
      "icao": "NZTU",
      "iata": "TIU",
      "name": "Timaru"
    },
    {
      "icao": "NZUK",
      "iata": "TWZ",
      "name": "Twitzel - Pukaki"
    },
    {
      "icao": "NZWO",
      "iata": "WIR",
      "name": "Wairoa"
    },
    {
      "icao": "NZWF",
      "iata": "WKA",
      "name": "Wanaka"
    },
    {
      "icao": "NZWU",
      "iata": "WAG",
      "name": "Wanganui"
    },
    {
      "icao": "NZWS",
      "iata": "WSZ",
      "name": "Westport"
    },
    {
      "icao": "NZWK",
      "iata": "WHK",
      "name": "Whakatāne"
    },
    {
      "icao": "NZWR",
      "iata": "WRE",
      "name": "Whangarei"
    }
  ],
  "Nicaragua": [
    {
      "icao": "MNMG",
      "iata": "MGA",
      "name": "Augusto C. Sandino (Managua)"
    },
    {
      "icao": "MNBL",
      "iata": "BEF",
      "name": "Bluefields"
    },
    {
      "icao": "MNPC",
      "iata": "PUZ",
      "name": "Puerto Cabezas"
    }
  ],
  "Niger": [
    {
      "icao": "DRRN",
      "iata": "NIM",
      "name": "Niamey - Diori Hamani"
    },
    {
      "icao": "DRZA",
      "iata": "AJY",
      "name": "Agadez - Mano Dayak"
    },
    {
      "icao": "DRRM",
      "iata": "MFQ",
      "name": "Maradi"
    },
    {
      "icao": "DRRT",
      "iata": "THZ",
      "name": "Tahoua"
    },
    {
      "icao": "DRZR",
      "iata": "ZND",
      "name": "Zinder"
    }
  ],
  "Nigeria": [
    {
      "icao": "DNAA",
      "iata": "ABV",
      "name": "Abuja - Nnamdi Azikiwe"
    },
    {
      "icao": "DNAS",
      "iata": "ABB",
      "name": "Asaba"
    },
    {
      "icao": "DNBK",
      "iata": "",
      "name": "Birinin Kebbi - Sir Ahmadu Bello"
    },
    {
      "icao": "DNEN",
      "iata": "ENU",
      "name": "Enegu - Akanu Ibiam"
    },
    {
      "icao": "DNIL",
      "iata": "ILR",
      "name": "Ilorin/Ogbomosho - General Tunde Idiagbon"
    },
    {
      "icao": "DNKA",
      "iata": "KAD",
      "name": "Kaduna"
    },
    {
      "icao": "DNMM",
      "iata": "LOS",
      "name": "Lagos - Murtala Muhammed"
    },
    {
      "icao": "DNMA",
      "iata": "MIU",
      "name": "Maiduguri"
    },
    {
      "icao": "DNKN",
      "iata": "KAN",
      "name": "Mallam Aminu Kano"
    },
    {
      "icao": "DNPO",
      "iata": "PHC",
      "name": "Port Harcourt"
    },
    {
      "icao": "DNBC",
      "iata": "BCU",
      "name": "Sir Abubakar Tafawa Balewa Bauchi State"
    },
    {
      "icao": "DNSO",
      "iata": "SKO",
      "name": "Sokoto - Sadiq Abubakar III"
    },
    {
      "icao": "DNAK",
      "iata": "AKR",
      "name": "Akure"
    },
    {
      "icao": "DNBE",
      "iata": "BNI",
      "name": "Benin"
    },
    {
      "icao": "DNCA",
      "iata": "CBQ",
      "name": "Calabar - Margaret Ekpo"
    },
    {
      "icao": "DNGO",
      "iata": "GMO",
      "name": "Gombe Lawanti"
    },
    {
      "icao": "DNGU",
      "iata": "",
      "name": "Gusau"
    },
    {
      "icao": "DNIB",
      "iata": "IBA",
      "name": "Ibadan"
    },
    {
      "icao": "DNJO",
      "iata": "JOS",
      "name": "Jos - Yakubu Gowon"
    },
    {
      "icao": "DNKT",
      "iata": "DKA",
      "name": "Katsina - Umaru Musa Yar'adua"
    },
    {
      "icao": "DNMK",
      "iata": "MDI",
      "name": "Makurdi"
    },
    {
      "icao": "DNMN",
      "iata": "MXJ",
      "name": "Minna"
    },
    {
      "icao": "DNSU",
      "iata": "QRW",
      "name": "Okpe - Warri"
    },
    {
      "icao": "DNIM",
      "iata": "QOW",
      "name": "Owerri - Sam Mbakwe International Cargo"
    },
    {
      "icao": "DNPM",
      "iata": "PHG",
      "name": "Port Harcourt City Airport / Port Harcourt Air Force Base"
    },
    {
      "icao": "DNAI",
      "iata": "QUO",
      "name": "Uyo - Akwa Ibom"
    },
    {
      "icao": "DNYO",
      "iata": "YOL",
      "name": "Yola"
    },
    {
      "icao": "DNZA",
      "iata": "ZAR",
      "name": "Zaria"
    }
  ],
  "Niue": [
    {
      "icao": "NIUE",
      "iata": "IUE",
      "name": "Alofi - Niue"
    }
  ],
  "Norfolk Island": [
    {
      "icao": "YSNF",
      "iata": "NLK",
      "name": "Burnt Pine - Norfolk Island"
    }
  ],
  "North Korea": [
    {
      "icao": "ZKPY",
      "iata": "FNJ",
      "name": "Pyongyang Sunan"
    },
    {
      "icao": "ZKHM",
      "iata": "RGO",
      "name": "Hoemun-ri - Orang (Chongjin)"
    },
    {
      "icao": "ZKSD",
      "iata": "DSO",
      "name": "Sŏndŏng-ni - Sondok"
    },
    {
      "icao": "ZKWS",
      "iata": "WOS",
      "name": "Wonsan Kalma"
    }
  ],
  "North Macedonia": [
    {
      "icao": "LWSK",
      "iata": "SKP",
      "name": "Ilinden - Skopje"
    },
    {
      "icao": "LWOH",
      "iata": "OHD",
      "name": "Ohrid St. Paul the Apostle"
    }
  ],
  "Northern Mariana Islands": [
    {
      "icao": "PGSN",
      "iata": "SPN",
      "name": "I Fadang, Saipan - Saipan"
    },
    {
      "icao": "PGRO",
      "iata": "ROP",
      "name": "Rota Island - Rota"
    },
    {
      "icao": "PGWT",
      "iata": "TIQ",
      "name": "Tinian Island - Tinian"
    }
  ],
  "Norway": [
    {
      "icao": "ENBR",
      "iata": "BGO",
      "name": "Bergen Airport, Flesland"
    },
    {
      "icao": "ENBO",
      "iata": "BOO",
      "name": "Bodø"
    },
    {
      "icao": "ENEV",
      "iata": "EVE",
      "name": "Evenes - Harstad/Narvik"
    },
    {
      "icao": "ENCN",
      "iata": "KRS",
      "name": "Kristiansand(Kjevik) - Kristiansand"
    },
    {
      "icao": "ENGM",
      "iata": "OSL",
      "name": "Oslo (Gardermoen) - Oslo-Gardermoen"
    },
    {
      "icao": "ENTO",
      "iata": "TRF",
      "name": "Sandefjord(Torp) - Sandefjord Airport, Torp"
    },
    {
      "icao": "ENZV",
      "iata": "SVG",
      "name": "Stavanger Airport, Sola"
    },
    {
      "icao": "ENTC",
      "iata": "TOS",
      "name": "Tromsø"
    },
    {
      "icao": "ENVA",
      "iata": "TRD",
      "name": "Trondheim Airport, Værnes"
    },
    {
      "icao": "ENAL",
      "iata": "AES",
      "name": "Ålesund"
    },
    {
      "icao": "ENST",
      "iata": "SSJ",
      "name": "Alstahaug - Sandnessjøen Airport, Stokka"
    },
    {
      "icao": "ENAT",
      "iata": "ALF",
      "name": "Alta"
    },
    {
      "icao": "ENAN",
      "iata": "ANX",
      "name": "Andøya Airport, Andenes"
    },
    {
      "icao": "ENBV",
      "iata": "BVG",
      "name": "Berlevåg"
    },
    {
      "icao": "ENBN",
      "iata": "BNN",
      "name": "Brønnøysund Airport, Brønnøy"
    },
    {
      "icao": "ENBS",
      "iata": "BJF",
      "name": "Båtsfjord"
    },
    {
      "icao": "ENFL",
      "iata": "FRO",
      "name": "Florø"
    },
    {
      "icao": "ENSN",
      "iata": "",
      "name": "Geiteryggen - Skien"
    },
    {
      "icao": "ENSK",
      "iata": "SKN",
      "name": "Hadsel - Stokmarknes Airport, Skagen"
    },
    {
      "icao": "ENHF",
      "iata": "HFT",
      "name": "Hammerfest"
    },
    {
      "icao": "ENHD",
      "iata": "HAU",
      "name": "Haugesund Airport, Karmøy"
    },
    {
      "icao": "ENHV",
      "iata": "HVG",
      "name": "Honningsvåg Airport, Valan"
    },
    {
      "icao": "ENKR",
      "iata": "KKN",
      "name": "Kirkenes Airport, Høybuktmoen"
    },
    {
      "icao": "ENKB",
      "iata": "KSU",
      "name": "Kristiansund Airport, Kvernberget"
    },
    {
      "icao": "ENNA",
      "iata": "LKL",
      "name": "Lakselv Airport, Banak"
    },
    {
      "icao": "ENSO",
      "iata": "SRP",
      "name": "Leirvik - Stord Airport, Sørstokken"
    },
    {
      "icao": "ENLK",
      "iata": "LKN",
      "name": "Leknes"
    },
    {
      "icao": "ENSB",
      "iata": "LYR",
      "name": "Longyearbyen - Svalbard Airport, Longyear"
    },
    {
      "icao": "ENMH",
      "iata": "MEH",
      "name": "Mehamn"
    },
    {
      "icao": "ENRA",
      "iata": "MQN",
      "name": "Mo i Rana Airport, Røssvoll"
    },
    {
      "icao": "ENML",
      "iata": "MOL",
      "name": "Molde Airport, Årø"
    },
    {
      "icao": "ENMS",
      "iata": "MJF",
      "name": "Mosjøen Airport, Kjærstad"
    },
    {
      "icao": "ENDU",
      "iata": "BDU",
      "name": "Målselv - Bardufoss"
    },
    {
      "icao": "ENNO",
      "iata": "NTB",
      "name": "Notodden"
    },
    {
      "icao": "ENRY",
      "iata": "",
      "name": "Oslo - Moss Airport, Rygge"
    },
    {
      "icao": "ENRO",
      "iata": "RRS",
      "name": "Røros"
    },
    {
      "icao": "ENRM",
      "iata": "RVK",
      "name": "Rørvik Airport, Ryum"
    },
    {
      "icao": "ENSH",
      "iata": "SVJ",
      "name": "Svolvær Airport, Helle"
    },
    {
      "icao": "ENSR",
      "iata": "SOJ",
      "name": "Sørkjosen"
    },
    {
      "icao": "ENVD",
      "iata": "VDS",
      "name": "Vadsø"
    },
    {
      "icao": "ENSS",
      "iata": "VAW",
      "name": "Vardø Airport, Svartnes"
    },
    {
      "icao": "ENOL",
      "iata": "OLA",
      "name": "Ørland"
    },
    {
      "icao": "ENOV",
      "iata": "HOV",
      "name": "Ørsta-Volda Airport, Hovden"
    }
  ],
  "Oman": [
    {
      "icao": "OOMS",
      "iata": "MCT",
      "name": "Muscat/Seeb - Muscat"
    },
    {
      "icao": "OOSA",
      "iata": "SLL",
      "name": "Salalah"
    },
    {
      "icao": "OOSH",
      "iata": "OHS",
      "name": "Suhar"
    },
    {
      "icao": "OOKB",
      "iata": "KHS",
      "name": "Khasab"
    },
    {
      "icao": "OOMA",
      "iata": "MSH",
      "name": "RAFO Masirah"
    },
    {
      "icao": "OOTH",
      "iata": "TTH",
      "name": "Thumrait Air Base"
    }
  ],
  "Pakistan": [
    {
      "icao": "OPIS",
      "iata": "ISB",
      "name": "Attock - Islamabad"
    },
    {
      "icao": "OPFA",
      "iata": "LYP",
      "name": "Faisalabad"
    },
    {
      "icao": "OPGW",
      "iata": "GWD",
      "name": "Gurandani - New Gwadar"
    },
    {
      "icao": "OPKC",
      "iata": "KHI",
      "name": "Karachi - Jinnah"
    },
    {
      "icao": "OPLA",
      "iata": "LHE",
      "name": "Lahore - Allama Iqbal"
    },
    {
      "icao": "OPMT",
      "iata": "MUX",
      "name": "Multan"
    },
    {
      "icao": "OPPS",
      "iata": "PEW",
      "name": "Peshawar - Bacha Khan"
    },
    {
      "icao": "OPQT",
      "iata": "UET",
      "name": "Quetta"
    },
    {
      "icao": "OPST",
      "iata": "SKT",
      "name": "Sialkot"
    },
    {
      "icao": "OPSD",
      "iata": "KDU",
      "name": "Skardu"
    },
    {
      "icao": "OPTU",
      "iata": "TUK",
      "name": "Turbat"
    },
    {
      "icao": "OPBW",
      "iata": "BHV",
      "name": "Bahawalpur"
    },
    {
      "icao": "OPSK",
      "iata": "SKZ",
      "name": "Begum Nusrat Bhutto International Airport Sukkur"
    },
    {
      "icao": "OPCH",
      "iata": "CJL",
      "name": "Chitral"
    },
    {
      "icao": "OPDG",
      "iata": "DEA",
      "name": "Dera Ghazi Khan"
    },
    {
      "icao": "OPDI",
      "iata": "DSK",
      "name": "Dera Ismael Khan Airport [IN-ACTIVE]"
    },
    {
      "icao": "OPZB",
      "iata": "PZH",
      "name": "Fort Sandeman - Zhob"
    },
    {
      "icao": "OPGT",
      "iata": "GIL",
      "name": "Gilgit"
    },
    {
      "icao": "OPJA",
      "iata": "JAG",
      "name": "Jacobabad - Shahbaz Air Base"
    },
    {
      "icao": "OPMA",
      "iata": "XJM",
      "name": "Mangla"
    },
    {
      "icao": "OPMI",
      "iata": "MWD",
      "name": "Mianwali Air Base"
    },
    {
      "icao": "OPMJ",
      "iata": "MJD",
      "name": "Moenjodaro"
    },
    {
      "icao": "OPNH",
      "iata": "WNS",
      "name": "Nawabashah - Shaheed Benazirabad"
    },
    {
      "icao": "OPPG",
      "iata": "PJG",
      "name": "Panjgur"
    },
    {
      "icao": "OPPI",
      "iata": "PSI",
      "name": "Pasni"
    },
    {
      "icao": "OPRK",
      "iata": "RYK",
      "name": "Rahim Yar Khan - Shaikh Zaid"
    },
    {
      "icao": "OPRT",
      "iata": "RAZ",
      "name": "Rawalakot"
    },
    {
      "icao": "OPSS",
      "iata": "SDT",
      "name": "Saidu Sharif"
    },
    {
      "icao": "OPSR",
      "iata": "SGI",
      "name": "Sargodha - Mushaf Air Base"
    },
    {
      "icao": "OPSN",
      "iata": "SYW",
      "name": "Sehwan Sharif"
    },
    {
      "icao": "OPSU",
      "iata": "SUL",
      "name": "Sui Airport"
    }
  ],
  "Palau": [
    {
      "icao": "PTRO",
      "iata": "ROR",
      "name": "Babelthuap Island - Roman Tmetuchl"
    }
  ],
  "Panama": [
    {
      "icao": "MPTO",
      "iata": "PTY",
      "name": "Tocumen"
    },
    {
      "icao": "MPMG",
      "iata": "PAC",
      "name": "Albrook - Marcos A. Gelabert"
    },
    {
      "icao": "MPBO",
      "iata": "BOC",
      "name": "Bocas del Toro \"Isla Colón\""
    },
    {
      "icao": "MPCH",
      "iata": "CHX",
      "name": "Changuinola Captain Manuel Niño"
    },
    {
      "icao": "MPCE",
      "iata": "CTD",
      "name": "Chitré - Alonso Valderrama"
    },
    {
      "icao": "MPEJ",
      "iata": "ONX",
      "name": "Colón - Enrique Adolfo Jimenez"
    },
    {
      "icao": "MPDA",
      "iata": "DAV",
      "name": "David - Enrique Malek"
    },
    {
      "icao": "MPSA",
      "iata": "SYP",
      "name": "Santiago - Ruben Cantu"
    }
  ],
  "Papua New Guinea": [
    {
      "icao": "AYNZ",
      "iata": "LAE",
      "name": "Lae - Nadzab Tomodachi"
    },
    {
      "icao": "AYPY",
      "iata": "POM",
      "name": "Port Moresby Jacksons"
    },
    {
      "icao": "AYBA",
      "iata": "VMU",
      "name": "Baimuru"
    },
    {
      "icao": "AYBM",
      "iata": "OPU",
      "name": "Balimo"
    },
    {
      "icao": "AYBK",
      "iata": "BUA",
      "name": "Buka Island - Buka"
    },
    {
      "icao": "AYDU",
      "iata": "DAU",
      "name": "Daru"
    },
    {
      "icao": "AYGA",
      "iata": "GKA",
      "name": "Goronka - Goroka"
    },
    {
      "icao": "AYGN",
      "iata": "GUR",
      "name": "Gurney"
    },
    {
      "icao": "AYKV",
      "iata": "KVG",
      "name": "Kavieng"
    },
    {
      "icao": "AYKM",
      "iata": "KMA",
      "name": "Kerema"
    },
    {
      "icao": "AYHK",
      "iata": "HKN",
      "name": "Kimbe - Hoskins"
    },
    {
      "icao": "AYTK",
      "iata": "RAB",
      "name": "Kokopo - Tokua"
    },
    {
      "icao": "AYCH",
      "iata": "CMU",
      "name": "Kundiawa - Chimbu"
    },
    {
      "icao": "AYMD",
      "iata": "MAG",
      "name": "Madang"
    },
    {
      "icao": "AYMO",
      "iata": "MAS",
      "name": "Manus Island - Momote"
    },
    {
      "icao": "AYMN",
      "iata": "MDU",
      "name": "Mendi"
    },
    {
      "icao": "AYMH",
      "iata": "HGU",
      "name": "Mount Hagen Kagamuga"
    },
    {
      "icao": "AYGR",
      "iata": "PNP",
      "name": "Popondetta - Girua"
    },
    {
      "icao": "AYVN",
      "iata": "VAI",
      "name": "Vanimo"
    },
    {
      "icao": "AYWD",
      "iata": "WBM",
      "name": "Wapenamanda"
    },
    {
      "icao": "AYWK",
      "iata": "WWK",
      "name": "Wewak"
    }
  ],
  "Paraguay": [
    {
      "icao": "SGAS",
      "iata": "ASU",
      "name": "Asunción - Silvio Pettirossi"
    },
    {
      "icao": "SGES",
      "iata": "AGT",
      "name": "Ciudad del Este - Guaraní"
    },
    {
      "icao": "SGEN",
      "iata": "ENO",
      "name": "Encarnación - Teniente Ramon A. Ayub Gonzalez"
    },
    {
      "icao": "SGAY",
      "iata": "AYO",
      "name": "Aeropuerto Nacional Juan de Ayolas"
    },
    {
      "icao": "SGCO",
      "iata": "CIO",
      "name": "Concepción - Lieutenant Colonel Carmelo Peralta National"
    },
    {
      "icao": "SGIB",
      "iata": "",
      "name": "Itaipú"
    },
    {
      "icao": "SGME",
      "iata": "ESG",
      "name": "Mariscal Estigarribia - Dr. Luis María Argaña"
    },
    {
      "icao": "SGPJ",
      "iata": "PJC",
      "name": "Pedro Juan Caballero - Aeropuerto Nacional Dr. Augusto Roberto Fuster"
    },
    {
      "icao": "SGPI",
      "iata": "PIL",
      "name": "Pilar - Aeródromo Don Carlos Miguel Gimenez"
    }
  ],
  "Peru": [
    {
      "icao": "SPQU",
      "iata": "AQP",
      "name": "Arequipa - Rodríguez Ballón"
    },
    {
      "icao": "SPHI",
      "iata": "CIX",
      "name": "Chiclayo - Capitán FAP José A. Quiñones González"
    },
    {
      "icao": "SPZO",
      "iata": "CUZ",
      "name": "Cusco - Alejandro Velasco Astete"
    },
    {
      "icao": "SPQT",
      "iata": "IQT",
      "name": "Iquitos - Coronel FAP Francisco Secada Vignetta"
    },
    {
      "icao": "SPJL",
      "iata": "JUL",
      "name": "Juliaca - Inca Manco Capac"
    },
    {
      "icao": "SPJC",
      "iata": "LIM",
      "name": "Lima - Jorge Chávez"
    },
    {
      "icao": "SPSO",
      "iata": "PIO",
      "name": "Pisco - Captain Renán Elías Olivera"
    },
    {
      "icao": "SPCL",
      "iata": "PCL",
      "name": "Pucallpa - Cap FAP David Abenzur Rengifo"
    },
    {
      "icao": "SPRU",
      "iata": "TRU",
      "name": "Trujillo - Capitán FAP Carlos Martínez de Pinillos"
    },
    {
      "icao": "SPHZ",
      "iata": "ATA",
      "name": "Anta - Comandante FAP German Arias Graziani"
    },
    {
      "icao": "SPAY",
      "iata": "AYX",
      "name": "Atalaya - Teniente General Gerardo Pérez Pinedo"
    },
    {
      "icao": "SPHO",
      "iata": "AYP",
      "name": "Ayacucho - Air Force Colonel Alfredo Mendivil Duarte"
    },
    {
      "icao": "SPJR",
      "iata": "CJA",
      "name": "Cajamarca - Mayor General FAP Armando Revoredo Iglesias"
    },
    {
      "icao": "SPPY",
      "iata": "CHH",
      "name": "Chachapoyas"
    },
    {
      "icao": "SPEO",
      "iata": "CHM",
      "name": "Chimbote - FAP Lieutenant Jaime Andres de Montreuil Morales"
    },
    {
      "icao": "SPNC",
      "iata": "HUU",
      "name": "Huánuco - Alferez Fap David Figueroa Fernandini"
    },
    {
      "icao": "SPBR",
      "iata": "IBP",
      "name": "Iberia"
    },
    {
      "icao": "SPLO",
      "iata": "ILQ",
      "name": "Ilo - General Jorge Fernandez Maldon"
    },
    {
      "icao": "SPJJ",
      "iata": "JAU",
      "name": "Jauja - Francisco Carle"
    },
    {
      "icao": "SPJE",
      "iata": "JAE",
      "name": "Jaén - Shumba"
    },
    {
      "icao": "SPJI",
      "iata": "JJI",
      "name": "Juanjuí - Juanjui"
    },
    {
      "icao": "SPZA",
      "iata": "NZC",
      "name": "Nazca - Maria Reiche Neuman"
    },
    {
      "icao": "SPUR",
      "iata": "PIU",
      "name": "Piura - PAF Captain Guillermo Concha Iberico"
    },
    {
      "icao": "SPTU",
      "iata": "PEM",
      "name": "Puerto Maldonado - Padre Aldamiz"
    },
    {
      "icao": "SPJA",
      "iata": "RIJ",
      "name": "Rioja - Juan Simons Vela"
    },
    {
      "icao": "SPTN",
      "iata": "TCQ",
      "name": "Tacna - Coronel FAP Carlos Ciriani Santa Rosa"
    },
    {
      "icao": "SPYL",
      "iata": "TYL",
      "name": "Talara - Captain Victor Montes Arias"
    },
    {
      "icao": "SPST",
      "iata": "TPP",
      "name": "Tarapoto - Cadete FAP Guillermo Del Castillo Paredes"
    },
    {
      "icao": "SPME",
      "iata": "TBP",
      "name": "Tumbes - Captain Pedro Canga Rodríguez"
    },
    {
      "icao": "SPMS",
      "iata": "YMS",
      "name": "Yurimaguas - Moises Benzaquen Rengifo"
    }
  ],
  "Philippines": [
    {
      "icao": "RPVB",
      "iata": "BCD",
      "name": "Bacolod City - Bacolod-Silay"
    },
    {
      "icao": "RPVI",
      "iata": "ILO",
      "name": "Cabatuan - Iloilo"
    },
    {
      "icao": "RPVM",
      "iata": "CEB",
      "name": "Cebu City/Lapu-Lapu City - Mactan Cebu"
    },
    {
      "icao": "RPMD",
      "iata": "DVO",
      "name": "Davao - Francisco Bangoy"
    },
    {
      "icao": "RPMR",
      "iata": "GES",
      "name": "General Santos"
    },
    {
      "icao": "RPVK",
      "iata": "KLO",
      "name": "Kalibo"
    },
    {
      "icao": "RPMY",
      "iata": "CGY",
      "name": "Laguindingan"
    },
    {
      "icao": "RPLI",
      "iata": "LAO",
      "name": "Laoag City - Laoag"
    },
    {
      "icao": "RPLK",
      "iata": "DRP",
      "name": "Legazpi - Bicol"
    },
    {
      "icao": "RPLC",
      "iata": "CRK",
      "name": "Mabalacat - Clark International Airport / Clark Air Base"
    },
    {
      "icao": "RPLL",
      "iata": "MNL",
      "name": "Manila (Pasay) - Ninoy Aquino"
    },
    {
      "icao": "RPLB",
      "iata": "SFS",
      "name": "Olongapo - Subic Bay International Airport / Naval Air Station Cubi Point"
    },
    {
      "icao": "RPVP",
      "iata": "PPS",
      "name": "Puerto Princesa International Airport / PAF Antonio Bautista Air Base"
    },
    {
      "icao": "RPMZ",
      "iata": "ZAM",
      "name": "Zamboanga"
    },
    {
      "icao": "RPUB",
      "iata": "BAG",
      "name": "Baguio - Loakan"
    },
    {
      "icao": "RPUR",
      "iata": "BQA",
      "name": "Baler - Dr. Juan C. Angara"
    },
    {
      "icao": "RPUO",
      "iata": "BSO",
      "name": "Basco"
    },
    {
      "icao": "RPMF",
      "iata": "BPH",
      "name": "Bislig"
    },
    {
      "icao": "RPSP",
      "iata": "TAG",
      "name": "Bohol-Panglao"
    },
    {
      "icao": "RPMN",
      "iata": "TWT",
      "name": "Bongao - Sanga Sanga"
    },
    {
      "icao": "RPME",
      "iata": "BXU",
      "name": "Butuan - Bancasi"
    },
    {
      "icao": "RPVC",
      "iata": "CYP",
      "name": "Calbayog City - Calbayog"
    },
    {
      "icao": "RPVF",
      "iata": "CRM",
      "name": "Catarman National"
    },
    {
      "icao": "RPVE",
      "iata": "MPH",
      "name": "Caticlan - Godofredo P. Ramos"
    },
    {
      "icao": "RPUY",
      "iata": "CYZ",
      "name": "Cauayan City - Cauayan"
    },
    {
      "icao": "RPLS",
      "iata": "SGL",
      "name": "Cavite - Danilo Atienza Air Base"
    },
    {
      "icao": "RPVV",
      "iata": "USU",
      "name": "Coron - Francisco B. Reyes (Busuanga)"
    },
    {
      "icao": "RPUD",
      "iata": "DTE",
      "name": "Daet"
    },
    {
      "icao": "RPMC",
      "iata": "CBO",
      "name": "Datu Odin Sinsuat - Cotabato (Awang)"
    },
    {
      "icao": "RPMG",
      "iata": "DPL",
      "name": "Dipolog"
    },
    {
      "icao": "RPVD",
      "iata": "DGT",
      "name": "Dumaguete City - Sibulan"
    },
    {
      "icao": "RPUW",
      "iata": "MRQ",
      "name": "Gasan - Marinduque"
    },
    {
      "icao": "RPLT",
      "iata": "",
      "name": "Itbayat Jorge Abad"
    },
    {
      "icao": "RPMJ",
      "iata": "JOL",
      "name": "Jolo"
    },
    {
      "icao": "RPLH",
      "iata": "LLC",
      "name": "Lal-lo - Cagayan North"
    },
    {
      "icao": "RPLU",
      "iata": "LBX",
      "name": "Lubang"
    },
    {
      "icao": "RPMH",
      "iata": "CGM",
      "name": "Mambajao - Camiguin"
    },
    {
      "icao": "RPUM",
      "iata": "MBO",
      "name": "Mamburao"
    },
    {
      "icao": "RPVJ",
      "iata": "MBT",
      "name": "Masbate - Moises R. Espinosa"
    },
    {
      "icao": "RPMQ",
      "iata": "MXI",
      "name": "Mati National"
    },
    {
      "icao": "RPUN",
      "iata": "WNP",
      "name": "Naga"
    },
    {
      "icao": "RPVO",
      "iata": "OMC",
      "name": "Ormoc City - Ormoc"
    },
    {
      "icao": "RPMO",
      "iata": "OZC",
      "name": "Ozamiz - Labo"
    },
    {
      "icao": "RPMP",
      "iata": "PAG",
      "name": "Pagadian"
    },
    {
      "icao": "RPVR",
      "iata": "RXS",
      "name": "Roxas City - Roxas"
    },
    {
      "icao": "RPUS",
      "iata": "SFE",
      "name": "San Fernando"
    },
    {
      "icao": "RPUH",
      "iata": "SJI",
      "name": "San Jose"
    },
    {
      "icao": "RPVS",
      "iata": "EUQ",
      "name": "San Jose - Evelio Javier"
    },
    {
      "icao": "RPMA",
      "iata": "AAV",
      "name": "Surallah - Allah Valley"
    },
    {
      "icao": "RPMS",
      "iata": "SUG",
      "name": "Surigao City - Surigao"
    },
    {
      "icao": "RPVU",
      "iata": "TBH",
      "name": "Tablas Island - Tugdan"
    },
    {
      "icao": "RPVA",
      "iata": "TAC",
      "name": "Tacloban City - Daniel Z. Romualdez"
    },
    {
      "icao": "RPMW",
      "iata": "TDG",
      "name": "Tandag"
    },
    {
      "icao": "RPUT",
      "iata": "TUG",
      "name": "Tuguegarao City - Tuguegarao"
    },
    {
      "icao": "RPUV",
      "iata": "VRC",
      "name": "Virac"
    }
  ],
  "Poland": [
    {
      "icao": "EPKK",
      "iata": "KRK",
      "name": "Balice - Kraków John Paul II"
    },
    {
      "icao": "EPWR",
      "iata": "WRO",
      "name": "Copernicus Wrocław"
    },
    {
      "icao": "EPGD",
      "iata": "GDN",
      "name": "Gdańsk Lech Wałęsa"
    },
    {
      "icao": "EPKT",
      "iata": "KTW",
      "name": "Katowice Wojciech Korfanty"
    },
    {
      "icao": "EPLB",
      "iata": "LUZ",
      "name": "Lublin"
    },
    {
      "icao": "EPMO",
      "iata": "WMI",
      "name": "Nowy Dwór Mazowiecki - Warsaw Modlin"
    },
    {
      "icao": "EPPO",
      "iata": "POZ",
      "name": "Poznań-Ławica"
    },
    {
      "icao": "EPRZ",
      "iata": "RZE",
      "name": "Rzeszów-Jasionka"
    },
    {
      "icao": "EPSC",
      "iata": "SZZ",
      "name": "Szczecin(Glewice) - Solidarity Szczecin–Goleniów"
    },
    {
      "icao": "EPWA",
      "iata": "WAW",
      "name": "Warsaw Chopin"
    },
    {
      "icao": "EPLL",
      "iata": "LCJ",
      "name": "Łódź Władysław Reymont"
    },
    {
      "icao": "EPDE",
      "iata": "",
      "name": "Dęblin - Deblin Military Air Base"
    },
    {
      "icao": "EPBY",
      "iata": "BZG",
      "name": "Ignacy Jan Paderewski Bydgoszcz"
    },
    {
      "icao": "EPIR",
      "iata": "",
      "name": "Inowroclaw Military Air Base"
    },
    {
      "icao": "EPLY",
      "iata": "",
      "name": "Leźnica Wielka Air Base"
    },
    {
      "icao": "EPZG",
      "iata": "IEG",
      "name": "Nowe Kramsko - Zielona Góra-Babimost"
    },
    {
      "icao": "EPTM",
      "iata": "",
      "name": "Nowy Glinnik - Tomaszów Mazowiecki Military Air Base"
    },
    {
      "icao": "EPCE",
      "iata": "",
      "name": "Siemirowice - Cewice Naval Air Base"
    },
    {
      "icao": "EPSN",
      "iata": "",
      "name": "Swidwin Military Air Base"
    },
    {
      "icao": "EPSY",
      "iata": "SZY",
      "name": "Szymany - Olsztyn-Mazury"
    },
    {
      "icao": "EPRA",
      "iata": "RDO",
      "name": "Warsaw Radom"
    }
  ],
  "Portugal": [
    {
      "icao": "LPFR",
      "iata": "FAO",
      "name": "Faro - Gago Coutinho"
    },
    {
      "icao": "LPMA",
      "iata": "FNC",
      "name": "Funchal - Cristiano Ronaldo"
    },
    {
      "icao": "LPPT",
      "iata": "LIS",
      "name": "Lisbon Humberto Delgado"
    },
    {
      "icao": "LPPD",
      "iata": "PDL",
      "name": "Ponta Delgada - João Paulo II"
    },
    {
      "icao": "LPPR",
      "iata": "OPO",
      "name": "Porto - Francisco de Sá Carneiro"
    },
    {
      "icao": "LPVZ",
      "iata": "VSE",
      "name": "Aerodromo Goncalves Lobato (Viseu Airport)"
    },
    {
      "icao": "LPCO",
      "iata": "",
      "name": "Aerodromo Municipal de Coimbra"
    },
    {
      "icao": "LPCB",
      "iata": "",
      "name": "Aerodromo de Castelo Branco"
    },
    {
      "icao": "LPSO",
      "iata": "",
      "name": "Aeródromo Municipal de Ponte de Sor"
    },
    {
      "icao": "LPBJ",
      "iata": "BYJ",
      "name": "Beja Airport / Airbase"
    },
    {
      "icao": "LPBR",
      "iata": "",
      "name": "Braga Municipal Aerodrome"
    },
    {
      "icao": "LPBG",
      "iata": "BGC",
      "name": "Bragança"
    },
    {
      "icao": "LPCS",
      "iata": "CAT",
      "name": "Cascais"
    },
    {
      "icao": "LPHR",
      "iata": "HOR",
      "name": "Horta"
    },
    {
      "icao": "LPVL",
      "iata": "",
      "name": "Maia - Vilar de Luz Airfield"
    },
    {
      "icao": "LPMR",
      "iata": "",
      "name": "Monte Real Air Base"
    },
    {
      "icao": "LPPI",
      "iata": "PIX",
      "name": "Pico Island - Pico"
    },
    {
      "icao": "LPPM",
      "iata": "PRM",
      "name": "Portimão"
    },
    {
      "icao": "LPLA",
      "iata": "TER",
      "name": "Praia da Vitória - Lajes"
    },
    {
      "icao": "LPGR",
      "iata": "GRW",
      "name": "Santa Cruz da Graciosa - Graciosa"
    },
    {
      "icao": "LPFL",
      "iata": "FLW",
      "name": "Santa Cruz das Flores - Flores"
    },
    {
      "icao": "LPSJ",
      "iata": "SJZ",
      "name": "Velas - São Jorge"
    },
    {
      "icao": "LPPS",
      "iata": "PXO",
      "name": "Vila Baleira - Porto Santo"
    },
    {
      "icao": "LPAR",
      "iata": "",
      "name": "Vila Franca de Xira - Alverca Air Base"
    },
    {
      "icao": "LPVR",
      "iata": "VRL",
      "name": "Vila Real"
    },
    {
      "icao": "LPAZ",
      "iata": "SMA",
      "name": "Vila do Porto - Santa Maria"
    }
  ],
  "Puerto Rico": [
    {
      "icao": "TJSJ",
      "iata": "SJU",
      "name": "San Juan - Luis Munoz Marin"
    },
    {
      "icao": "TJBQ",
      "iata": "BQN",
      "name": "Aguadilla - Rafael Hernández"
    },
    {
      "icao": "TJAB",
      "iata": "ARE",
      "name": "Arecibo - Antonio Nery Juarbe Pol"
    },
    {
      "icao": "TJRV",
      "iata": "NRR",
      "name": "Ceiba - José Aponte de la Torre"
    },
    {
      "icao": "TJCP",
      "iata": "CPX",
      "name": "Culebra - Benjamin Rivera Noriega"
    },
    {
      "icao": "TJMZ",
      "iata": "MAZ",
      "name": "Mayaguez - Eugenio Maria De Hostos"
    },
    {
      "icao": "TJPS",
      "iata": "PSE",
      "name": "Ponce - Mercedita"
    },
    {
      "icao": "TJIG",
      "iata": "SIG",
      "name": "San Juan - Fernando Luis Ribas Dominicci"
    },
    {
      "icao": "TJVQ",
      "iata": "VQS",
      "name": "Vieques - Antonio Rivera Rodriguez"
    }
  ],
  "Qatar": [
    {
      "icao": "OTBD",
      "iata": "DIA",
      "name": "Doha"
    },
    {
      "icao": "OTHH",
      "iata": "DOH",
      "name": "Doha - Hamad"
    },
    {
      "icao": "OTBH",
      "iata": "XJD",
      "name": "Ar Rayyan - Al Udeid Air Base"
    }
  ],
  "Republic of the Congo": [
    {
      "icao": "FCBB",
      "iata": "BZV",
      "name": "Brazzaville - Maya-Maya"
    },
    {
      "icao": "FCPP",
      "iata": "PNR",
      "name": "Pointe Noire - Antonio Agostinho-Neto"
    },
    {
      "icao": "FCPD",
      "iata": "DIS",
      "name": "Dolisie - Ngot Nzoungou"
    },
    {
      "icao": "FCOU",
      "iata": "OUE",
      "name": "Ouesso"
    },
    {
      "icao": "FCOO",
      "iata": "FTX",
      "name": "Owando"
    },
    {
      "icao": "FCOD",
      "iata": "OLL",
      "name": "Oyo Ollombo"
    }
  ],
  "Romania": [
    {
      "icao": "LRBC",
      "iata": "BCM",
      "name": "Bacău George Enescu International "
    },
    {
      "icao": "LRBV",
      "iata": "GHV",
      "name": "Brașov (Ghimbav) - Brașov-Ghimbav"
    },
    {
      "icao": "LRBS",
      "iata": "BBU",
      "name": "Bucharest Băneasa Aurel Vlaicu"
    },
    {
      "icao": "LRCL",
      "iata": "CLJ",
      "name": "Cluj-Napoca - Avram Iancu Cluj"
    },
    {
      "icao": "LRCK",
      "iata": "CND",
      "name": "Constanța - Mihail Kogălniceanu"
    },
    {
      "icao": "LRCV",
      "iata": "CRA",
      "name": "Craiova"
    },
    {
      "icao": "LRIA",
      "iata": "IAS",
      "name": "Iaşi"
    },
    {
      "icao": "LROD",
      "iata": "OMR",
      "name": "Oradea"
    },
    {
      "icao": "LROP",
      "iata": "OTP",
      "name": "Otopeni - Bucharest Henri Coandă"
    },
    {
      "icao": "LRSB",
      "iata": "SBZ",
      "name": "Sibiu"
    },
    {
      "icao": "LRSV",
      "iata": "SCV",
      "name": "Suceava Ștefan cel Mare"
    },
    {
      "icao": "LRTR",
      "iata": "TSR",
      "name": "Timişoara - Timișoara Traian Vuia"
    },
    {
      "icao": "LRAR",
      "iata": "ARW",
      "name": "Arad"
    },
    {
      "icao": "LRBO",
      "iata": "",
      "name": "Boboc Air Base"
    },
    {
      "icao": "LRCS",
      "iata": "CSB",
      "name": "Caransebeş"
    },
    {
      "icao": "LRCT",
      "iata": "",
      "name": "Câmpia Turzii Air Base"
    },
    {
      "icao": "LRFT",
      "iata": "",
      "name": "Feteşti Borcea Air Base"
    },
    {
      "icao": "LRTC",
      "iata": "TCE",
      "name": "Mihail Kogălniceanu - Tulcea Danube Delta"
    },
    {
      "icao": "LRTM",
      "iata": "TGM",
      "name": "Recea - Târgu Mureş Transilvania"
    },
    {
      "icao": "LRSM",
      "iata": "SUJ",
      "name": "Satu Mare"
    },
    {
      "icao": "LRBM",
      "iata": "BAY",
      "name": "Tăuții-Măgherăuș - Maramureș"
    }
  ],
  "Russia": [
    {
      "icao": "UNAA",
      "iata": "ABA",
      "name": "Abakan"
    },
    {
      "icao": "URMG",
      "iata": "GRV",
      "name": "Akhmat Kadyrov Grozny"
    },
    {
      "icao": "UNEE",
      "iata": "KEJ",
      "name": "Alexei Leonov Kemerovo"
    },
    {
      "icao": "UHWW",
      "iata": "VVO",
      "name": "Artyom - Vladivostok"
    },
    {
      "icao": "URWA",
      "iata": "ASF",
      "name": "Astrakhan Narimanovo Boris M. Kustodiev"
    },
    {
      "icao": "UNBB",
      "iata": "BAX",
      "name": "Barnaul Gherman Titov"
    },
    {
      "icao": "UIAA",
      "iata": "HTA",
      "name": "Chita-Kadala"
    },
    {
      "icao": "ULMM",
      "iata": "MMK",
      "name": "Emperor Nicholas II Murmansk"
    },
    {
      "icao": "UIII",
      "iata": "IKT",
      "name": "Irkutsk"
    },
    {
      "icao": "UMKK",
      "iata": "KGD",
      "name": "Kaliningrad - Khrabrovo"
    },
    {
      "icao": "UWKD",
      "iata": "KZN",
      "name": "Kazan"
    },
    {
      "icao": "URKK",
      "iata": "KRR",
      "name": "Krasnodar Pashkovsky"
    },
    {
      "icao": "UNKL",
      "iata": "KJA",
      "name": "Krasnoyarsk"
    },
    {
      "icao": "USCC",
      "iata": "CEK",
      "name": "Kurchatov Chelyabinsk"
    },
    {
      "icao": "USCM",
      "iata": "MQF",
      "name": "Magnitogorsk"
    },
    {
      "icao": "URML",
      "iata": "MCX",
      "name": "Makhachkala Uytash"
    },
    {
      "icao": "URMM",
      "iata": "MRV",
      "name": "Mineralnyye Vody - Mineralnye Vody"
    },
    {
      "icao": "UUDD",
      "iata": "DME",
      "name": "Moscow - Domodedovo"
    },
    {
      "icao": "UUEE",
      "iata": "SVO",
      "name": "Moscow - Sheremetyevo"
    },
    {
      "icao": "UUWW",
      "iata": "VKO",
      "name": "Moscow - Vnukovo"
    },
    {
      "icao": "UUBW",
      "iata": "ZIA",
      "name": "Moscow - Zhukovsky"
    },
    {
      "icao": "USNN",
      "iata": "NJC",
      "name": "Nizhnevartovsk"
    },
    {
      "icao": "UWGG",
      "iata": "GOJ",
      "name": "Nizhny Novgorod / Strigino"
    },
    {
      "icao": "UOOO",
      "iata": "NSK",
      "name": "Norilsk - Alykel"
    },
    {
      "icao": "UNNT",
      "iata": "OVB",
      "name": "Novosibirsk Tolmachevo"
    },
    {
      "icao": "UNOO",
      "iata": "OMS",
      "name": "Omsk Central"
    },
    {
      "icao": "USPP",
      "iata": "PEE",
      "name": "Perm"
    },
    {
      "icao": "UHPP",
      "iata": "PKC",
      "name": "Petropavlovsk-Kamchatsky - Yelizovo"
    },
    {
      "icao": "UEEE",
      "iata": "YKS",
      "name": "Platon Oyunsky Yakutsk"
    },
    {
      "icao": "URRP",
      "iata": "ROV",
      "name": "Rostov-on-Don - Platov"
    },
    {
      "icao": "UWWW",
      "iata": "KUF",
      "name": "Samara - Kurumoch"
    },
    {
      "icao": "UWPS",
      "iata": "SKX",
      "name": "Saransk"
    },
    {
      "icao": "UWSG",
      "iata": "GSV",
      "name": "Saratov - Gagarin"
    },
    {
      "icao": "URSS",
      "iata": "AER",
      "name": "Sochi"
    },
    {
      "icao": "ULLI",
      "iata": "LED",
      "name": "St. Petersburg - Pulkovo"
    },
    {
      "icao": "USRR",
      "iata": "SGC",
      "name": "Surgut"
    },
    {
      "icao": "UNTT",
      "iata": "TOF",
      "name": "Tomsk Kamov"
    },
    {
      "icao": "UUDL",
      "iata": "IAR",
      "name": "Tunoshna - Golden Ring Yaroslavl"
    },
    {
      "icao": "USTR",
      "iata": "TJM",
      "name": "Tyumen - Roshchino"
    },
    {
      "icao": "UWUU",
      "iata": "UFA",
      "name": "Ufa International"
    },
    {
      "icao": "UIUU",
      "iata": "UUD",
      "name": "Ulan Ude - Baikal"
    },
    {
      "icao": "UWLL",
      "iata": "ULV",
      "name": "Ulyanovsk Baratayevka"
    },
    {
      "icao": "URWW",
      "iata": "VOG",
      "name": "Volgograd"
    },
    {
      "icao": "UUOO",
      "iata": "VOZ",
      "name": "Voronezh"
    },
    {
      "icao": "USSS",
      "iata": "SVX",
      "name": "Yekaterinburg - Koltsovo"
    },
    {
      "icao": "UHSS",
      "iata": "UUS",
      "name": "Yuzhno-Sakhalinsk"
    },
    {
      "icao": "UNKS",
      "iata": "ACS",
      "name": "Achinsk"
    },
    {
      "icao": "UODN",
      "iata": "",
      "name": "Alexandra Land - Nagurskoye Airfield"
    },
    {
      "icao": "ULDD",
      "iata": "AMV",
      "name": "Amderma"
    },
    {
      "icao": "UHMA",
      "iata": "DYR",
      "name": "Anadyr - Ugolny Yuri Ryktheu"
    },
    {
      "icao": "UHMP",
      "iata": "PWE",
      "name": "Apapelgino - Pevek"
    },
    {
      "icao": "ULAA",
      "iata": "ARH",
      "name": "Archangelsk - Talagi"
    },
    {
      "icao": "UWSB",
      "iata": "BWO",
      "name": "Balakovo"
    },
    {
      "icao": "UESG",
      "iata": "BGN",
      "name": "Belaya Gora"
    },
    {
      "icao": "UUOB",
      "iata": "EGO",
      "name": "Belgorod"
    },
    {
      "icao": "USHQ",
      "iata": "EYK",
      "name": "Beloyarskiy"
    },
    {
      "icao": "UHBB",
      "iata": "BQS",
      "name": "Blagoveschensk - Ignatyevo"
    },
    {
      "icao": "UNIP",
      "iata": "TGP",
      "name": "Bor - Podkamennaya Tunguska"
    },
    {
      "icao": "USDB",
      "iata": "BVJ",
      "name": "Bovanenkovo"
    },
    {
      "icao": "UIBB",
      "iata": "BTK",
      "name": "Bratsk"
    },
    {
      "icao": "UUBP",
      "iata": "BZK",
      "name": "Bryansk"
    },
    {
      "icao": "UWKB",
      "iata": "UUA",
      "name": "Bugulma"
    },
    {
      "icao": "UWKS",
      "iata": "CSY",
      "name": "Cheboksary"
    },
    {
      "icao": "UWLW",
      "iata": "ULY",
      "name": "Cherdakly - Ulyanovsk Vostochny"
    },
    {
      "icao": "ULWC",
      "iata": "CEE",
      "name": "Cherepovets"
    },
    {
      "icao": "UESS",
      "iata": "CYX",
      "name": "Cherskiy"
    },
    {
      "icao": "UESO",
      "iata": "CKH",
      "name": "Chokurdah - Chokurdakh"
    },
    {
      "icao": "UHMD",
      "iata": "PVS",
      "name": "Chukotka - Provideniya Bay"
    },
    {
      "icao": "UODD",
      "iata": "DKS",
      "name": "Dikson"
    },
    {
      "icao": "URWI",
      "iata": "ESL",
      "name": "Elista"
    },
    {
      "icao": "URKG",
      "iata": "GDZ",
      "name": "Gelendzhik"
    },
    {
      "icao": "UNBG",
      "iata": "RGK",
      "name": "Gorno-Altaysk"
    },
    {
      "icao": "UOII",
      "iata": "IAA",
      "name": "Igarka"
    },
    {
      "icao": "UUYI",
      "iata": "INA",
      "name": "Inta"
    },
    {
      "icao": "UUBI",
      "iata": "IWA",
      "name": "Ivanovo South"
    },
    {
      "icao": "USII",
      "iata": "IJK",
      "name": "Izhevsk"
    },
    {
      "icao": "UUBC",
      "iata": "KLF",
      "name": "Kaluga - Grabtsevo"
    },
    {
      "icao": "UHMK",
      "iata": "KPW",
      "name": "Keperveem"
    },
    {
      "icao": "UHHH",
      "iata": "KHV",
      "name": "Khabarovsk Novy"
    },
    {
      "icao": "USHH",
      "iata": "HMA",
      "name": "Khanty-Mansiysk - Khanty Mansiysk"
    },
    {
      "icao": "UOHH",
      "iata": "HTG",
      "name": "Khatanga"
    },
    {
      "icao": "UEMA",
      "iata": "MQJ",
      "name": "Khonuu - Moma"
    },
    {
      "icao": "USKK",
      "iata": "KVX",
      "name": "Kirov - Pobedilovo"
    },
    {
      "icao": "USRK",
      "iata": "KGP",
      "name": "Kogalym"
    },
    {
      "icao": "UHKK",
      "iata": "KXK",
      "name": "Komsomolsk-on-Amur"
    },
    {
      "icao": "UUBA",
      "iata": "KMW",
      "name": "Kostroma Sokerkino"
    },
    {
      "icao": "ULKK",
      "iata": "KSZ",
      "name": "Kotlas"
    },
    {
      "icao": "URKA",
      "iata": "AAQ",
      "name": "Krasnyi Kurgan - Anapa Vityazevo"
    },
    {
      "icao": "UUMB",
      "iata": "",
      "name": "Kubinka Air Base"
    },
    {
      "icao": "USUU",
      "iata": "KRO",
      "name": "Kurgan"
    },
    {
      "icao": "UUOK",
      "iata": "URS",
      "name": "Kursk East"
    },
    {
      "icao": "UNKY",
      "iata": "KYZ",
      "name": "Kyzyl"
    },
    {
      "icao": "UERL",
      "iata": "ULK",
      "name": "Lensk"
    },
    {
      "icao": "UUOL",
      "iata": "LPK",
      "name": "Lipetsk"
    },
    {
      "icao": "UHMM",
      "iata": "GDX",
      "name": "Magadan - Sokol"
    },
    {
      "icao": "UEMM",
      "iata": "GYG",
      "name": "Magan"
    },
    {
      "icao": "UERR",
      "iata": "MJZ",
      "name": "Mirny"
    },
    {
      "icao": "UUMU",
      "iata": "CKL",
      "name": "Moscow - Chkalovskiy Air Base"
    },
    {
      "icao": "USMM",
      "iata": "NYM",
      "name": "Nadym"
    },
    {
      "icao": "URMN",
      "iata": "NAL",
      "name": "Nalchik"
    },
    {
      "icao": "ULAM",
      "iata": "NNM",
      "name": "Naryan Mar"
    },
    {
      "icao": "USRN",
      "iata": "NFG",
      "name": "Nefteyugansk"
    },
    {
      "icao": "UELL",
      "iata": "NER",
      "name": "Neryungri - Chulman"
    },
    {
      "icao": "UHNN",
      "iata": "NLI",
      "name": "Nikolayevsk-na-Amure"
    },
    {
      "icao": "UWKE",
      "iata": "NBC",
      "name": "Nizhnekamsk - Begishevo"
    },
    {
      "icao": "UNWW",
      "iata": "NOZ",
      "name": "Novokuznetsk - Spichenkovo"
    },
    {
      "icao": "USMU",
      "iata": "NUX",
      "name": "Novy Urengoy"
    },
    {
      "icao": "USRO",
      "iata": "NOJ",
      "name": "Noyabrsk"
    },
    {
      "icao": "USHN",
      "iata": "NYA",
      "name": "Nyagan"
    },
    {
      "icao": "UHOO",
      "iata": "OHO",
      "name": "Okhotsk"
    },
    {
      "icao": "UEMO",
      "iata": "OLZ",
      "name": "Olyokminsk"
    },
    {
      "icao": "UWOO",
      "iata": "REN",
      "name": "Orenburg Central"
    },
    {
      "icao": "UWOR",
      "iata": "OSW",
      "name": "Orsk"
    },
    {
      "icao": "UUYP",
      "iata": "PEX",
      "name": "Pechora"
    },
    {
      "icao": "UWPP",
      "iata": "PEZ",
      "name": "Penza"
    },
    {
      "icao": "ULPB",
      "iata": "PES",
      "name": "Petrozavodsk"
    },
    {
      "icao": "ULOO",
      "iata": "PKV",
      "name": "Princess Olga Pskov"
    },
    {
      "icao": "UUBK",
      "iata": "RYB",
      "name": "Rybinsk - Staroselye"
    },
    {
      "icao": "USDA",
      "iata": "SBT",
      "name": "Sabetta"
    },
    {
      "icao": "USDD",
      "iata": "SLY",
      "name": "Salekhard"
    },
    {
      "icao": "UERS",
      "iata": "SYS",
      "name": "Saskylakh"
    },
    {
      "icao": "UHMW",
      "iata": "SWV",
      "name": "Severo-Evensk"
    },
    {
      "icao": "UHMS",
      "iata": "",
      "name": "Seymchan"
    },
    {
      "icao": "UHKM",
      "iata": "GVN",
      "name": "Sovetskaya Gavan (Maygatka)"
    },
    {
      "icao": "UHKG",
      "iata": "",
      "name": "Sovetskaya Gavan - Kamenny Ruchey Naval Air Base"
    },
    {
      "icao": "USHS",
      "iata": "OVS",
      "name": "Sovetskiy"
    },
    {
      "icao": "UESK",
      "iata": "SEK",
      "name": "Srednekolymsk"
    },
    {
      "icao": "URMT",
      "iata": "STW",
      "name": "Stavropol Shpakovskoye"
    },
    {
      "icao": "UNSS",
      "iata": "SWT",
      "name": "Strezhevoy"
    },
    {
      "icao": "URMS",
      "iata": "IGT",
      "name": "Sunzha - Magas"
    },
    {
      "icao": "UUYY",
      "iata": "SCW",
      "name": "Syktyvkar"
    },
    {
      "icao": "URRT",
      "iata": "TGK",
      "name": "Taganrog Yuzhny"
    },
    {
      "icao": "UUOT",
      "iata": "TBW",
      "name": "Tambov - Donskoye"
    },
    {
      "icao": "UEST",
      "iata": "IKS",
      "name": "Tiksi"
    },
    {
      "icao": "UUEM",
      "iata": "KLD",
      "name": "Tver - Migalovo Air Base"
    },
    {
      "icao": "UUYH",
      "iata": "UCT",
      "name": "Ukhta"
    },
    {
      "icao": "USHU",
      "iata": "URJ",
      "name": "Uray"
    },
    {
      "icao": "UUYS",
      "iata": "USK",
      "name": "Usinsk"
    },
    {
      "icao": "UITT",
      "iata": "UKX",
      "name": "Ust-Kut"
    },
    {
      "icao": "UEMT",
      "iata": "USR",
      "name": "Ust-Nera"
    },
    {
      "icao": "UUYX",
      "iata": "UTS",
      "name": "Ust-Tsylma"
    },
    {
      "icao": "ULWU",
      "iata": "VUS",
      "name": "Velikiy Ustyug"
    },
    {
      "icao": "UENW",
      "iata": "VYI",
      "name": "Vilyuisk"
    },
    {
      "icao": "URMO",
      "iata": "OGZ",
      "name": "Vladikavkaz Beslan"
    },
    {
      "icao": "ULWW",
      "iata": "VGD",
      "name": "Vologda"
    },
    {
      "icao": "UUYW",
      "iata": "VKT",
      "name": "Vorkuta"
    },
    {
      "icao": "UERP",
      "iata": "PYJ",
      "name": "Yakutia - Polyarny"
    },
    {
      "icao": "UNII",
      "iata": "EIE",
      "name": "Yeniseysk"
    },
    {
      "icao": "UWKJ",
      "iata": "JOK",
      "name": "Yoshkar-Ola"
    },
    {
      "icao": "UEVV",
      "iata": "ZIX",
      "name": "Zhigansk"
    },
    {
      "icao": "UESU",
      "iata": "ZKP",
      "name": "Zyryanka"
    }
  ],
  "Rwanda": [
    {
      "icao": "HRYR",
      "iata": "KGL",
      "name": "Kigali"
    },
    {
      "icao": "HRYG",
      "iata": "GYI",
      "name": "Gisenyi"
    },
    {
      "icao": "HRZA",
      "iata": "KME",
      "name": "Kamembe"
    }
  ],
  "Réunion": [
    {
      "icao": "FMEP",
      "iata": "ZSE",
      "name": "Saint-Pierre Pierrefonds"
    },
    {
      "icao": "FMEE",
      "iata": "RUN",
      "name": "Sainte-Marie - Roland Garros"
    }
  ],
  "Saint Barthélemy": [
    {
      "icao": "TFFJ",
      "iata": "SBH",
      "name": "Gustavia - St. Jean"
    }
  ],
  "Saint Helena, Ascension and Tristan da Cunha": [
    {
      "icao": "FHAW",
      "iata": "ASI",
      "name": "Cat Hill - RAF Ascension Island"
    },
    {
      "icao": "FHSH",
      "iata": "HLE",
      "name": "Jamestown - Saint Helena"
    }
  ],
  "Saint Kitts and Nevis": [
    {
      "icao": "TKPK",
      "iata": "SKB",
      "name": "Basseterre - Robert L. Bradshaw"
    },
    {
      "icao": "TKPN",
      "iata": "NEV",
      "name": "Charlestown - Vance W. Amory"
    }
  ],
  "Saint Lucia": [
    {
      "icao": "TLPL",
      "iata": "UVF",
      "name": "Vieux Fort - Hewanorra"
    },
    {
      "icao": "TLPC",
      "iata": "SLU",
      "name": "Castries - George F. L. Charles"
    }
  ],
  "Saint Martin": [
    {
      "icao": "TFFG",
      "iata": "SFG",
      "name": "Grand Case-l'Espérance"
    }
  ],
  "Saint Pierre and Miquelon": [
    {
      "icao": "LFVP",
      "iata": "FSP",
      "name": "Saint-Pierre Pointe-Blanche"
    }
  ],
  "Saint Vincent and the Grenadines": [
    {
      "icao": "TVSA",
      "iata": "SVD",
      "name": "Kingstown - Argyle"
    },
    {
      "icao": "TVSB",
      "iata": "BQU",
      "name": "Bequia - J F Mitchell"
    },
    {
      "icao": "TVSC",
      "iata": "CIW",
      "name": "Canouan"
    },
    {
      "icao": "TVSM",
      "iata": "MQS",
      "name": "Lovell - Mustique"
    },
    {
      "icao": "TVSU",
      "iata": "UNI",
      "name": "Union Island"
    }
  ],
  "Samoa": [
    {
      "icao": "NSFA",
      "iata": "APW",
      "name": "Apia - Faleolo"
    }
  ],
  "Saudi Arabia": [
    {
      "icao": "OEAB",
      "iata": "AHB",
      "name": "Abha"
    },
    {
      "icao": "OEDF",
      "iata": "DMM",
      "name": "Ad Dammam - King Fahd"
    },
    {
      "icao": "OESK",
      "iata": "AJF",
      "name": "Al-Jawf"
    },
    {
      "icao": "OEDR",
      "iata": "DHA",
      "name": "Dhahran - King Abdulaziz Air Base"
    },
    {
      "icao": "OERS",
      "iata": "RSI",
      "name": "Hanak - Red Sea"
    },
    {
      "icao": "OEAH",
      "iata": "HOF",
      "name": "Hofuf - Al-Ahsa"
    },
    {
      "icao": "OEJN",
      "iata": "JED",
      "name": "Jeddah - King Abdulaziz"
    },
    {
      "icao": "OEMA",
      "iata": "MED",
      "name": "Medina - Prince Mohammad Bin Abdulaziz"
    },
    {
      "icao": "OEGS",
      "iata": "ELQ",
      "name": "Qassim - Prince Naif bin Abdulaziz"
    },
    {
      "icao": "OERK",
      "iata": "RUH",
      "name": "Riyadh - King Khalid"
    },
    {
      "icao": "OENN",
      "iata": "NUM",
      "name": "Sharma - Neom Bay"
    },
    {
      "icao": "OETB",
      "iata": "TUU",
      "name": "Tabuk - Prince Sultan bin Abdulaziz"
    },
    {
      "icao": "OETF",
      "iata": "TIF",
      "name": "Taif"
    },
    {
      "icao": "OEYN",
      "iata": "YNB",
      "name": "Yanbu - Prince Abdulmohsen Bin Abdulaziz"
    },
    {
      "icao": "OEPS",
      "iata": "AKH",
      "name": "Al Kharj - Prince Sultan Air Base"
    },
    {
      "icao": "OERM",
      "iata": "",
      "name": "Al Mishab - Ras Mishab"
    },
    {
      "icao": "OEPA",
      "iata": "AQI",
      "name": "Al Qaisumah/Hafr Al Batin"
    },
    {
      "icao": "OEWJ",
      "iata": "EJH",
      "name": "Al Wajh Domestic"
    },
    {
      "icao": "OEBA",
      "iata": "ABT",
      "name": "Al-Baha - King Saud Bin Abdulaziz (Al Baha)"
    },
    {
      "icao": "OEAO",
      "iata": "ULH",
      "name": "Al-Ula"
    },
    {
      "icao": "OERR",
      "iata": "RAE",
      "name": "Arar Domestic"
    },
    {
      "icao": "OEAD",
      "iata": "",
      "name": "Ardah - Aradah"
    },
    {
      "icao": "OETN",
      "iata": "",
      "name": "As Saffaniyah - Ras Tanajib"
    },
    {
      "icao": "OEBH",
      "iata": "BHH",
      "name": "Bisha"
    },
    {
      "icao": "OEDM",
      "iata": "DWD",
      "name": "Dawadmi Domestic"
    },
    {
      "icao": "OEGT",
      "iata": "URY",
      "name": "Gurayat Domestic"
    },
    {
      "icao": "OEHL",
      "iata": "HAS",
      "name": "Ha'il"
    },
    {
      "icao": "OEJF",
      "iata": "",
      "name": "Jeddah - King Faisal Naval Base"
    },
    {
      "icao": "OEGN",
      "iata": "GIZ",
      "name": "Jizan Regional Airport / King Abdullah bin Abdulaziz"
    },
    {
      "icao": "OEKM",
      "iata": "KMX",
      "name": "Khamis Mushait - King Khalid Air Base"
    },
    {
      "icao": "OEKK",
      "iata": "KMC",
      "name": "King Khaled Military City"
    },
    {
      "icao": "OENG",
      "iata": "EAM",
      "name": "Najran Domestic"
    },
    {
      "icao": "OERF",
      "iata": "RAH",
      "name": "Rafha Domestic"
    },
    {
      "icao": "OERT",
      "iata": "",
      "name": "Ras Tanura"
    },
    {
      "icao": "OESN",
      "iata": "",
      "name": "Riyadh - King Salman Air Base"
    },
    {
      "icao": "OESH",
      "iata": "SHW",
      "name": "Sharurah Domestic"
    },
    {
      "icao": "OETR",
      "iata": "TUI",
      "name": "Turaif Domestic"
    },
    {
      "icao": "OEWD",
      "iata": "WAE",
      "name": "Wadi Al Dawasir Domestic"
    }
  ],
  "Senegal": [
    {
      "icao": "GOBD",
      "iata": "DSS",
      "name": "Dakar - Blaise Diagne"
    },
    {
      "icao": "GOOY",
      "iata": "DKR",
      "name": "Dakar - Léopold Sédar Senghor"
    },
    {
      "icao": "GOTB",
      "iata": "BXE",
      "name": "Bakel"
    },
    {
      "icao": "GOGS",
      "iata": "CSK",
      "name": "Cap Skirring"
    },
    {
      "icao": "GOOK",
      "iata": "KLC",
      "name": "Kaolack"
    },
    {
      "icao": "GOTK",
      "iata": "KGG",
      "name": "Kédougou"
    },
    {
      "icao": "GOSM",
      "iata": "MAX",
      "name": "Ouro Sogui"
    },
    {
      "icao": "GOSS",
      "iata": "XLS",
      "name": "Saint Louis"
    },
    {
      "icao": "GOTT",
      "iata": "TUD",
      "name": "Tambacounda"
    },
    {
      "icao": "GOGG",
      "iata": "ZIG",
      "name": "Ziguinchor"
    }
  ],
  "Serbia": [
    {
      "icao": "LYBE",
      "iata": "BEG",
      "name": "Belgrade Nikola Tesla"
    },
    {
      "icao": "LYNI",
      "iata": "INI",
      "name": "Niš Constantine the Great"
    },
    {
      "icao": "LYKV",
      "iata": "KVO",
      "name": "Kraljevo - Morava"
    },
    {
      "icao": "LYUZ",
      "iata": "UZC",
      "name": "Stapari - Ponikve"
    },
    {
      "icao": "LYBT",
      "iata": "BJY",
      "name": "Zemun - Batajnica Air Base"
    }
  ],
  "Seychelles": [
    {
      "icao": "FSIA",
      "iata": "SEZ",
      "name": "Victoria - Seychelles"
    },
    {
      "icao": "FSPP",
      "iata": "PRI",
      "name": "Praslin Island"
    }
  ],
  "Sierra Leone": [
    {
      "icao": "GFLL",
      "iata": "FNA",
      "name": "Freetown (Lungi-Town) - Lungi"
    },
    {
      "icao": "GFBO",
      "iata": "KBS",
      "name": "Bo Airport"
    },
    {
      "icao": "GFKE",
      "iata": "KEN",
      "name": "Kenema"
    },
    {
      "icao": "GFYE",
      "iata": "WYE",
      "name": "Yengema"
    }
  ],
  "Singapore": [
    {
      "icao": "WSSS",
      "iata": "SIN",
      "name": "Singapore Changi"
    },
    {
      "icao": "WSAP",
      "iata": "QPG",
      "name": "Paya Lebar Air Base"
    },
    {
      "icao": "WSSL",
      "iata": "XSP",
      "name": "Seletar"
    },
    {
      "icao": "WSAT",
      "iata": "TGA",
      "name": "Western Water Catchment - Tengah Air Base"
    }
  ],
  "Sint Maarten": [
    {
      "icao": "TNCM",
      "iata": "SXM",
      "name": "Sint Maarten - Princess Juliana"
    }
  ],
  "Slovakia": [
    {
      "icao": "LZIB",
      "iata": "BTS",
      "name": "Bratislava - M. R. Štefánik"
    },
    {
      "icao": "LZKZ",
      "iata": "KSC",
      "name": "Košice"
    },
    {
      "icao": "LZMC",
      "iata": "",
      "name": "Malacky/Kuchyňa Air Base"
    },
    {
      "icao": "LZPP",
      "iata": "PZY",
      "name": "Piešťany"
    },
    {
      "icao": "LZTT",
      "iata": "TAT",
      "name": "Poprad-Tatry"
    },
    {
      "icao": "LZSL",
      "iata": "SLD",
      "name": "Sliač"
    },
    {
      "icao": "LZZI",
      "iata": "ILZ",
      "name": "Žilina-Dolný Hričov"
    }
  ],
  "Slovenia": [
    {
      "icao": "LJLJ",
      "iata": "LJU",
      "name": "Zgornji Brnik - Ljubljana Jože Pučnik"
    },
    {
      "icao": "LJMB",
      "iata": "MBX",
      "name": "Maribor Edvard Rusjan"
    },
    {
      "icao": "LJPZ",
      "iata": "POW",
      "name": "Sečovlje - Portorož"
    }
  ],
  "Solomon Islands": [
    {
      "icao": "AGGH",
      "iata": "HIR",
      "name": "Honiara"
    },
    {
      "icao": "AGGM",
      "iata": "MUA",
      "name": "Munda"
    }
  ],
  "Somalia": [
    {
      "icao": "HCMF",
      "iata": "BSA",
      "name": "Bosaso - Bender Qassim"
    },
    {
      "icao": "HCMH",
      "iata": "HGA",
      "name": "Hargeisa - Egal"
    },
    {
      "icao": "HCMM",
      "iata": "MGQ",
      "name": "Mogadishu - Aden Adde"
    },
    {
      "icao": "HCMI",
      "iata": "BBO",
      "name": "Berbera"
    },
    {
      "icao": "HCMK",
      "iata": "KMU",
      "name": "Kismayo"
    }
  ],
  "South Africa": [
    {
      "icao": "FABL",
      "iata": "BFN",
      "name": "Bloemfontein - Bram Fischer"
    },
    {
      "icao": "FACT",
      "iata": "CPT",
      "name": "Cape Town"
    },
    {
      "icao": "FALE",
      "iata": "DUR",
      "name": "Durban - King Shaka"
    },
    {
      "icao": "FAEL",
      "iata": "ELS",
      "name": "East London - King Phalo"
    },
    {
      "icao": "FAGG",
      "iata": "GRJ",
      "name": "George"
    },
    {
      "icao": "FAPE",
      "iata": "PLZ",
      "name": "Gqeberha (Port Elizabeth) - Chief Dawid Stuurman"
    },
    {
      "icao": "FALA",
      "iata": "HLA",
      "name": "Johannesburg - Lanseria"
    },
    {
      "icao": "FAOR",
      "iata": "JNB",
      "name": "Johannesburg - O.R. Tambo"
    },
    {
      "icao": "FAKM",
      "iata": "KIM",
      "name": "Kimberley"
    },
    {
      "icao": "FAKN",
      "iata": "MQP",
      "name": "Mbombela - Kruger Mpumalanga"
    },
    {
      "icao": "FAPP",
      "iata": "PTG",
      "name": "Polokwane"
    },
    {
      "icao": "FAAG",
      "iata": "AGZ",
      "name": "Aggeneys"
    },
    {
      "icao": "FAAB",
      "iata": "ALJ",
      "name": "Alexander Bay"
    },
    {
      "icao": "FABE",
      "iata": "BIY",
      "name": "Bisho"
    },
    {
      "icao": "FAYP",
      "iata": "",
      "name": "Cape Town - Ysterplaat Air Force Base"
    },
    {
      "icao": "FAVG",
      "iata": "VIR",
      "name": "Durban - Virginia"
    },
    {
      "icao": "FAHS",
      "iata": "HDS",
      "name": "Eastgate Airport / Air Force Base Hoedspruit"
    },
    {
      "icao": "FAEO",
      "iata": "",
      "name": "Ermelo"
    },
    {
      "icao": "FAFB",
      "iata": "FCB",
      "name": "Ficksburg Sentraoes"
    },
    {
      "icao": "FAHR",
      "iata": "HRS",
      "name": "Harrismith"
    },
    {
      "icao": "FAGM",
      "iata": "QRA",
      "name": "Johannesburg - Rand"
    },
    {
      "icao": "FAKZ",
      "iata": "KLZ",
      "name": "Kleinsee"
    },
    {
      "icao": "FAKD",
      "iata": "KXE",
      "name": "Klerksdorp - P C Pelser"
    },
    {
      "icao": "FAKU",
      "iata": "KMH",
      "name": "Kuruman - Johan Pienaar"
    },
    {
      "icao": "FALY",
      "iata": "LAY",
      "name": "Ladysmith"
    },
    {
      "icao": "FALW",
      "iata": "SDB",
      "name": "Langebaanweg"
    },
    {
      "icao": "FALC",
      "iata": "LMR",
      "name": "Lime Acres Finsch Mine"
    },
    {
      "icao": "FAMM",
      "iata": "MBD",
      "name": "Mafeking - Mmabatho"
    },
    {
      "icao": "FAMD",
      "iata": "AAM",
      "name": "Malamala"
    },
    {
      "icao": "FAMG",
      "iata": "MGH",
      "name": "Margate"
    },
    {
      "icao": "FAGC",
      "iata": "GCJ",
      "name": "Midrand - Grand Central"
    },
    {
      "icao": "FAMU",
      "iata": "MZQ",
      "name": "Mkuze"
    },
    {
      "icao": "FAUT",
      "iata": "UTT",
      "name": "Mthatha - K. D. Matanzima"
    },
    {
      "icao": "FANC",
      "iata": "NCS",
      "name": "Newcastle"
    },
    {
      "icao": "FAOH",
      "iata": "OUH",
      "name": "Oudtshoorn"
    },
    {
      "icao": "FAPH",
      "iata": "PHW",
      "name": "Phalaborwa - Hendrik Van Eck"
    },
    {
      "icao": "FAPM",
      "iata": "PZB",
      "name": "Pietermaritzburg"
    },
    {
      "icao": "FAPN",
      "iata": "NTY",
      "name": "Pilanesberg"
    },
    {
      "icao": "FAPG",
      "iata": "PBZ",
      "name": "Plettenberg Bay"
    },
    {
      "icao": "FAPI",
      "iata": "",
      "name": "Polokwane - Pietersburg Municipal"
    },
    {
      "icao": "FAPJ",
      "iata": "JOH",
      "name": "Port St Johns"
    },
    {
      "icao": "FAPS",
      "iata": "PCF",
      "name": "Potchefstroom"
    },
    {
      "icao": "FASK",
      "iata": "",
      "name": "Pretoria - Swartkop Air Force Base"
    },
    {
      "icao": "FAWK",
      "iata": "WKF",
      "name": "Pretoria - Waterkloof Air Force Base"
    },
    {
      "icao": "FAWB",
      "iata": "PRY",
      "name": "Pretoria - Wonderboom"
    },
    {
      "icao": "FAQT",
      "iata": "UTW",
      "name": "Queenstown"
    },
    {
      "icao": "FARB",
      "iata": "RCB",
      "name": "Richards Bay"
    },
    {
      "icao": "FARS",
      "iata": "ROD",
      "name": "Robertson"
    },
    {
      "icao": "FARG",
      "iata": "",
      "name": "Rustenburg"
    },
    {
      "icao": "FASD",
      "iata": "",
      "name": "Saldanha-Vredenburg - Saldanha/Vredenburg"
    },
    {
      "icao": "FASC",
      "iata": "ZEC",
      "name": "Secunda"
    },
    {
      "icao": "FAMS",
      "iata": "",
      "name": "Silveroaks - Morningside Farm"
    },
    {
      "icao": "FASS",
      "iata": "SIS",
      "name": "Sishen"
    },
    {
      "icao": "FASZ",
      "iata": "SZK",
      "name": "Skukuza"
    },
    {
      "icao": "FASB",
      "iata": "SBU",
      "name": "Springbok"
    },
    {
      "icao": "FATZ",
      "iata": "LTA",
      "name": "Tzaneen"
    },
    {
      "icao": "FAUL",
      "iata": "ULD",
      "name": "Ulundi - Prince Mangosuthu Buthelezi"
    },
    {
      "icao": "FAUP",
      "iata": "UTN",
      "name": "Upington"
    },
    {
      "icao": "FAVV",
      "iata": "",
      "name": "Vereeniging"
    },
    {
      "icao": "FAVR",
      "iata": "VRE",
      "name": "Vredendal"
    },
    {
      "icao": "FAVB",
      "iata": "VRU",
      "name": "Vyrburg - Vryburg"
    }
  ],
  "South Korea": [
    {
      "icao": "RKPK",
      "iata": "PUS",
      "name": "Busan - Gimhae"
    },
    {
      "icao": "RKTU",
      "iata": "CJJ",
      "name": "Cheongju International Airport/Cheongju Air Base (K-59/G-513)"
    },
    {
      "icao": "RKTN",
      "iata": "TAE",
      "name": "Daegu"
    },
    {
      "icao": "RKNY",
      "iata": "YNY",
      "name": "Gonghang-ro - Yangyang"
    },
    {
      "icao": "RKPC",
      "iata": "CJU",
      "name": "Jeju City - Jeju"
    },
    {
      "icao": "RKJB",
      "iata": "MWX",
      "name": "Muan (Piseo-ri) - Muan"
    },
    {
      "icao": "RKSS",
      "iata": "GMP",
      "name": "Seoul - Gimpo"
    },
    {
      "icao": "RKSI",
      "iata": "ICN",
      "name": "Seoul - Incheon"
    },
    {
      "icao": "RKNN",
      "iata": "KAG",
      "name": "Gangneung Airport (K-18)"
    },
    {
      "icao": "RKTI",
      "iata": "JWO",
      "name": "Gimseang-ro - Jungwon Air Base/Chungju"
    },
    {
      "icao": "RKJK",
      "iata": "KUV",
      "name": "Gunsan Airport / Gunsan Air Base"
    },
    {
      "icao": "RKJJ",
      "iata": "KWJ",
      "name": "Gwangju"
    },
    {
      "icao": "RKPD",
      "iata": "JDG",
      "name": "Jeju Island - Jeongseok"
    },
    {
      "icao": "RKTH",
      "iata": "KPO",
      "name": "Pohang Airport (G-815/K-3)"
    },
    {
      "icao": "RKSO",
      "iata": "OSN",
      "name": "Pyeongtaek - Osan Air Base"
    },
    {
      "icao": "RKPS",
      "iata": "HIN",
      "name": "Sacheon Airport / Sacheon Air Base"
    },
    {
      "icao": "RKSW",
      "iata": "SWU",
      "name": "Suwon"
    },
    {
      "icao": "RKPU",
      "iata": "USN",
      "name": "Ulsan"
    },
    {
      "icao": "RKNW",
      "iata": "WJU",
      "name": "Wonju Airport / Hoengseong Air Base (K-38/K-46)"
    },
    {
      "icao": "RKTY",
      "iata": "YEC",
      "name": "Yecheon-ri - Yecheon Airbase"
    },
    {
      "icao": "RKJY",
      "iata": "RSU",
      "name": "Yeosu"
    }
  ],
  "South Sudan": [
    {
      "icao": "HJJJ",
      "iata": "JUB",
      "name": "Juba"
    },
    {
      "icao": "HSSM",
      "iata": "MAK",
      "name": "Malakal"
    }
  ],
  "Spain": [
    {
      "icao": "LEMD",
      "iata": "MAD",
      "name": "Adolfo Suárez Madrid–Barajas"
    },
    {
      "icao": "LEAL",
      "iata": "ALC",
      "name": "Alicante-Elche Miguel Hernández"
    },
    {
      "icao": "LEBB",
      "iata": "BIO",
      "name": "Bilbao"
    },
    {
      "icao": "LEMI",
      "iata": "RMU",
      "name": "Corvera - Region of Murcia"
    },
    {
      "icao": "GCFV",
      "iata": "FUE",
      "name": "El Matorral - Fuerteventura"
    },
    {
      "icao": "LEGE",
      "iata": "GRO",
      "name": "Girona-Costa Brava"
    },
    {
      "icao": "GCLP",
      "iata": "LPA",
      "name": "Gran Canaria Island - Gran Canaria"
    },
    {
      "icao": "LEIB",
      "iata": "IBZ",
      "name": "Ibiza (Eivissa) - Ibiza"
    },
    {
      "icao": "LEBL",
      "iata": "BCN",
      "name": "Josep Tarradellas Barcelona-El Prat"
    },
    {
      "icao": "LELN",
      "iata": "LEN",
      "name": "La Virgen Del Camino - León Int'l"
    },
    {
      "icao": "LEMH",
      "iata": "MAH",
      "name": "Mahón (Maó) - Menorca"
    },
    {
      "icao": "LEMG",
      "iata": "AGP",
      "name": "Málaga-Costa del Sol"
    },
    {
      "icao": "LEPA",
      "iata": "PMI",
      "name": "Palma de Mallorca"
    },
    {
      "icao": "LEAS",
      "iata": "OVD",
      "name": "Ranón - Asturias"
    },
    {
      "icao": "LERS",
      "iata": "REU",
      "name": "Reus"
    },
    {
      "icao": "GCRR",
      "iata": "ACE",
      "name": "San Bartolomé - César Manrique-Lanzarote"
    },
    {
      "icao": "LEST",
      "iata": "SCQ",
      "name": "Santiago de Compostela - Santiago-Rosalía de Castro"
    },
    {
      "icao": "LEZL",
      "iata": "SVQ",
      "name": "Seville"
    },
    {
      "icao": "GCXO",
      "iata": "TFN",
      "name": "Tenerife Norte-Ciudad de La Laguna"
    },
    {
      "icao": "GCTS",
      "iata": "TFS",
      "name": "Tenerife Sur"
    },
    {
      "icao": "LEVC",
      "iata": "VLC",
      "name": "Valencia"
    },
    {
      "icao": "LEZG",
      "iata": "ZAZ",
      "name": "Zaragoza"
    },
    {
      "icao": "LEVT",
      "iata": "VIT",
      "name": "Alava - Vitoria"
    },
    {
      "icao": "LEAB",
      "iata": "ABC",
      "name": "Albacete Airport / Los Llanos Air Base"
    },
    {
      "icao": "LEAM",
      "iata": "LEI",
      "name": "Almería"
    },
    {
      "icao": "LEBZ",
      "iata": "BJZ",
      "name": "Badajoz"
    },
    {
      "icao": "LEBG",
      "iata": "RGS",
      "name": "Burgos"
    },
    {
      "icao": "LECH",
      "iata": "CDT",
      "name": "Castellón de la Plana - Castellón-Costa Azahar"
    },
    {
      "icao": "LERL",
      "iata": "CQM",
      "name": "Ciudad Real"
    },
    {
      "icao": "LECO",
      "iata": "LCG",
      "name": "Culleredo - A Coruña"
    },
    {
      "icao": "LEBA",
      "iata": "ODB",
      "name": "Córdoba"
    },
    {
      "icao": "GCHI",
      "iata": "VDE",
      "name": "El Hierro Island - El Hierro"
    },
    {
      "icao": "LEGR",
      "iata": "GRX",
      "name": "F.G.L. Airport Granada-Jaén"
    },
    {
      "icao": "LEGT",
      "iata": "",
      "name": "Getafe Air Base"
    },
    {
      "icao": "LESO",
      "iata": "EAS",
      "name": "Hondarribia - San Sebastián"
    },
    {
      "icao": "LEJR",
      "iata": "XRY",
      "name": "Jerez de la Frontera - Jerez"
    },
    {
      "icao": "LESU",
      "iata": "LEU",
      "name": "La Seu d'Urgell Pyrenees and Andorra - Pirineus - la Seu d'Urgel"
    },
    {
      "icao": "LEDA",
      "iata": "ILD",
      "name": "Lleida-Alguaire"
    },
    {
      "icao": "LECU",
      "iata": "",
      "name": "Madrid-Cuatro Vientos"
    },
    {
      "icao": "LETO",
      "iata": "TOJ",
      "name": "Madrid–Torrejón Airport / Torrejón Air Base"
    },
    {
      "icao": "GEML",
      "iata": "MLN",
      "name": "Melilla"
    },
    {
      "icao": "LEMO",
      "iata": "OZP",
      "name": "Morón - Moron Air Base"
    },
    {
      "icao": "LEPP",
      "iata": "PNA",
      "name": "Pamplona"
    },
    {
      "icao": "LERT",
      "iata": "ROZ",
      "name": "Rota Naval Station"
    },
    {
      "icao": "LESA",
      "iata": "SLM",
      "name": "Salamanca"
    },
    {
      "icao": "LELC",
      "iata": "",
      "name": "San Javier"
    },
    {
      "icao": "LEXJ",
      "iata": "SDR",
      "name": "Seve Ballesteros-Santander"
    },
    {
      "icao": "GCLA",
      "iata": "SPC",
      "name": "Sta Cruz de la Palma, La Palma Island - La Palma"
    },
    {
      "icao": "LETL",
      "iata": "TEV",
      "name": "Teruel"
    },
    {
      "icao": "LEVD",
      "iata": "VLL",
      "name": "Valladolid"
    },
    {
      "icao": "LEVX",
      "iata": "VGO",
      "name": "Vigo"
    }
  ],
  "Sri Lanka": [
    {
      "icao": "VCBI",
      "iata": "CMB",
      "name": "Bandaranaike International Colombo"
    },
    {
      "icao": "VCCC",
      "iata": "RML",
      "name": "Colombo Ratmalana"
    },
    {
      "icao": "VCCJ",
      "iata": "JAF",
      "name": "Jaffna"
    },
    {
      "icao": "VCRI",
      "iata": "HRI",
      "name": "Mattala Rajapaksa"
    },
    {
      "icao": "VCCG",
      "iata": "ADP",
      "name": "Ampara"
    },
    {
      "icao": "VCCA",
      "iata": "ACJ",
      "name": "Anuradhapura"
    },
    {
      "icao": "VCCB",
      "iata": "BTC",
      "name": "Batticaloa"
    },
    {
      "icao": "VCCK",
      "iata": "KCT",
      "name": "Galle - Koggala"
    },
    {
      "icao": "VCCH",
      "iata": "HIM",
      "name": "Polonnaruwa Town - Hingurakgoda Air Force Base"
    },
    {
      "icao": "VCCT",
      "iata": "TRR",
      "name": "Trincomalee - China Bay"
    }
  ],
  "Sudan": [
    {
      "icao": "HSSK",
      "iata": "KRT",
      "name": "Khartoum"
    },
    {
      "icao": "HSPN",
      "iata": "PZU",
      "name": "Port Sudan New"
    },
    {
      "icao": "HSDN",
      "iata": "DOG",
      "name": "Dongola"
    },
    {
      "icao": "HSFS",
      "iata": "ELF",
      "name": "El Fasher"
    },
    {
      "icao": "HSOB",
      "iata": "EBD",
      "name": "El-Obeid"
    },
    {
      "icao": "HSKA",
      "iata": "KSL",
      "name": "Kassala"
    },
    {
      "icao": "HSMN",
      "iata": "MWE",
      "name": "Merowe"
    },
    {
      "icao": "HSNN",
      "iata": "UYL",
      "name": "Nyala"
    }
  ],
  "Suriname": [
    {
      "icao": "SMJP",
      "iata": "PBM",
      "name": "Paramaribo - Johan Adolf Pengel"
    }
  ],
  "Sweden": [
    {
      "icao": "ESGG",
      "iata": "GOT",
      "name": "Göteborg Landvetter"
    },
    {
      "icao": "ESNQ",
      "iata": "KRN",
      "name": "Kiruna"
    },
    {
      "icao": "ESSL",
      "iata": "LPI",
      "name": "Linköping City"
    },
    {
      "icao": "ESPA",
      "iata": "LLA",
      "name": "Luleå"
    },
    {
      "icao": "ESMS",
      "iata": "MMX",
      "name": "Malmö Sturup"
    },
    {
      "icao": "ESKN",
      "iata": "NYO",
      "name": "Nyköping - Stockholm Skavsta"
    },
    {
      "icao": "ESOW",
      "iata": "VST",
      "name": "Stockholm / Västerås - Stockholm Västerås"
    },
    {
      "icao": "ESSA",
      "iata": "ARN",
      "name": "Stockholm-Arlanda"
    },
    {
      "icao": "ESNU",
      "iata": "UME",
      "name": "Umeå"
    },
    {
      "icao": "ESSV",
      "iata": "VBY",
      "name": "Visby"
    },
    {
      "icao": "ESNZ",
      "iata": "OSD",
      "name": "Åre Östersund"
    },
    {
      "icao": "ESNX",
      "iata": "AJR",
      "name": "Arvidsjaur"
    },
    {
      "icao": "ESSD",
      "iata": "BLE",
      "name": "Borlange - Dala"
    },
    {
      "icao": "ESSU",
      "iata": "EKT",
      "name": "Eskilstuna"
    },
    {
      "icao": "ESNG",
      "iata": "GEV",
      "name": "Gällivare"
    },
    {
      "icao": "ESSK",
      "iata": "GVX",
      "name": "Gävle / Sandviken - Gävle Sandviken"
    },
    {
      "icao": "ESGP",
      "iata": "GSE",
      "name": "Göteborg - Säve"
    },
    {
      "icao": "ESMT",
      "iata": "HAD",
      "name": "Halmstad"
    },
    {
      "icao": "ESGJ",
      "iata": "JKG",
      "name": "Jönköping"
    },
    {
      "icao": "ESMQ",
      "iata": "KLR",
      "name": "Kalmar"
    },
    {
      "icao": "ESKK",
      "iata": "KSK",
      "name": "Karlskoga"
    },
    {
      "icao": "ESOK",
      "iata": "KSD",
      "name": "Karlstad"
    },
    {
      "icao": "ESMK",
      "iata": "KID",
      "name": "Kristianstad"
    },
    {
      "icao": "ESCF",
      "iata": "",
      "name": "Linköping - Malmen Air Base"
    },
    {
      "icao": "ESNL",
      "iata": "LYC",
      "name": "Lycksele"
    },
    {
      "icao": "ESKM",
      "iata": "MXX",
      "name": "Mora"
    },
    {
      "icao": "ESSP",
      "iata": "NRK",
      "name": "Norrköping"
    },
    {
      "icao": "ESNK",
      "iata": "KRF",
      "name": "Nyland - Kramfors-Sollefteå Höga Kusten"
    },
    {
      "icao": "ESDF",
      "iata": "RNB",
      "name": "Ronneby"
    },
    {
      "icao": "ESFR",
      "iata": "",
      "name": "Råda Air Base"
    },
    {
      "icao": "ESNS",
      "iata": "SFT",
      "name": "Skellefteå"
    },
    {
      "icao": "ESGR",
      "iata": "KVB",
      "name": "Skövde"
    },
    {
      "icao": "ESSB",
      "iata": "BMA",
      "name": "Stockholm-Bromma"
    },
    {
      "icao": "ESUD",
      "iata": "SQO",
      "name": "Storuman"
    },
    {
      "icao": "ESNN",
      "iata": "SDL",
      "name": "Sundsvall/ Härnösand - Sundsvall-Härnösand"
    },
    {
      "icao": "ESNY",
      "iata": "SOO",
      "name": "Söderhamn"
    },
    {
      "icao": "ESST",
      "iata": "TYF",
      "name": "Torsby"
    },
    {
      "icao": "ESGT",
      "iata": "THN",
      "name": "Trollhättan-Vänersborg"
    },
    {
      "icao": "ESNV",
      "iata": "VHM",
      "name": "Vilhelmina South Lapland"
    },
    {
      "icao": "ESMX",
      "iata": "VXO",
      "name": "Växjö Kronoberg"
    },
    {
      "icao": "ESTA",
      "iata": "AGH",
      "name": "Ängelholm-Helsingborg"
    },
    {
      "icao": "ESOE",
      "iata": "ORB",
      "name": "Örebro"
    },
    {
      "icao": "ESNO",
      "iata": "OER",
      "name": "Örnsköldsvik"
    }
  ],
  "Switzerland": [
    {
      "icao": "LSGG",
      "iata": "GVA",
      "name": "Geneva"
    },
    {
      "icao": "LSZH",
      "iata": "ZRH",
      "name": "Zurich - Zürich"
    },
    {
      "icao": "LSZA",
      "iata": "LUG",
      "name": "Agno - Lugano"
    },
    {
      "icao": "LSMA",
      "iata": "",
      "name": "Alpnach Air Base"
    },
    {
      "icao": "LSZB",
      "iata": "BRN",
      "name": "Bern"
    },
    {
      "icao": "LSME",
      "iata": "EML",
      "name": "Emmen Air Base"
    },
    {
      "icao": "LSZG",
      "iata": "",
      "name": "Grenchen Airfield"
    },
    {
      "icao": "LSGC",
      "iata": "",
      "name": "La Chaux-de-Fonds - Les Eplatures"
    },
    {
      "icao": "LSMP",
      "iata": "VIP",
      "name": "Payerne Air Base"
    },
    {
      "icao": "LSZS",
      "iata": "SMV",
      "name": "Samedan - Engadin"
    },
    {
      "icao": "LSGS",
      "iata": "SIR",
      "name": "Sion"
    },
    {
      "icao": "LSZR",
      "iata": "ACH",
      "name": "St. Gallen - Sankt Gallen Altenrhein"
    },
    {
      "icao": "LSMD",
      "iata": "",
      "name": "Zurich - Dübendorf Air Base"
    }
  ],
  "Syria": [
    {
      "icao": "OSAP",
      "iata": "ALP",
      "name": "Aleppo"
    },
    {
      "icao": "OSDI",
      "iata": "DAM",
      "name": "Damascus"
    },
    {
      "icao": "OSDZ",
      "iata": "DEZ",
      "name": "Deir ez-Zor"
    },
    {
      "icao": "OSLK",
      "iata": "LTK",
      "name": "Latakia"
    },
    {
      "icao": "OSKL",
      "iata": "KAC",
      "name": "Qamishli"
    },
    {
      "icao": "OSPR",
      "iata": "PMS",
      "name": "Tadmur - Palmyra"
    }
  ],
  "São Tomé and Principe": [
    {
      "icao": "FPST",
      "iata": "TMS",
      "name": "São Tomé"
    },
    {
      "icao": "FPPR",
      "iata": "PCP",
      "name": "São Tomé & Príncipe - Principe"
    }
  ],
  "Taiwan": [
    {
      "icao": "RCYU",
      "iata": "HUN",
      "name": "Hualien City - Hualien Chiashan"
    },
    {
      "icao": "RCQC",
      "iata": "MZG",
      "name": "Huxi - Penghu Magong"
    },
    {
      "icao": "RCKH",
      "iata": "KHH",
      "name": "Kaohsiung (Xiaogang) - Kaohsiung"
    },
    {
      "icao": "RCMQ",
      "iata": "RMQ",
      "name": "Taichung (Qingshui) - Taichung International Airport / Ching Chuang Kang Air Base"
    },
    {
      "icao": "RCNN",
      "iata": "TNN",
      "name": "Tainan (Rende) - Tainan International Airport / Tainan Air Base"
    },
    {
      "icao": "RCSS",
      "iata": "TSA",
      "name": "Taipei (Songshan) - Taipei Songshan"
    },
    {
      "icao": "RCTP",
      "iata": "TPE",
      "name": "Taiwan Taoyuan"
    },
    {
      "icao": "RCKW",
      "iata": "HCN",
      "name": "Hengchun"
    },
    {
      "icao": "RCPO",
      "iata": "HSZ",
      "name": "Hsinchu City - Hsinchu Air Base"
    },
    {
      "icao": "RCAY",
      "iata": "",
      "name": "Kaohsiung (Gangshan) - Gangshan Air Force Base"
    },
    {
      "icao": "RCMT",
      "iata": "MFK",
      "name": "Matsu (Beigan) - Matsu Beigan"
    },
    {
      "icao": "RCFG",
      "iata": "LZN",
      "name": "Matsu (Nangan) - Matsu Nangan"
    },
    {
      "icao": "RCLY",
      "iata": "KYD",
      "name": "Orchid Island - Lanyu"
    },
    {
      "icao": "RCDC",
      "iata": "",
      "name": "Pingtung Air Force Base"
    },
    {
      "icao": "RCBS",
      "iata": "KNH",
      "name": "Shang-I - Kinmen"
    },
    {
      "icao": "RCKU",
      "iata": "CYI",
      "name": "Shuishang - Chiayi"
    },
    {
      "icao": "RCFN",
      "iata": "TTT",
      "name": "Taitung City - Taitung"
    }
  ],
  "Tajikistan": [
    {
      "icao": "UTDT",
      "iata": "KQT",
      "name": "Bokhtar"
    },
    {
      "icao": "UTDD",
      "iata": "DYU",
      "name": "Dushanbe"
    },
    {
      "icao": "UTDL",
      "iata": "LBD",
      "name": "Khujand"
    },
    {
      "icao": "UTDK",
      "iata": "TJU",
      "name": "Kulob"
    }
  ],
  "Tanzania": [
    {
      "icao": "HTKJ",
      "iata": "JRO",
      "name": "Arusha - Kilimanjaro"
    },
    {
      "icao": "HTDA",
      "iata": "DAR",
      "name": "Dar es Salaam - Julius Nyerere"
    },
    {
      "icao": "HTMW",
      "iata": "MWZ",
      "name": "Mwanza"
    },
    {
      "icao": "HTZA",
      "iata": "ZNZ",
      "name": "Zanzibar - Abeid Amani Karume"
    },
    {
      "icao": "HTAR",
      "iata": "ARK",
      "name": "Arusha"
    },
    {
      "icao": "HTPE",
      "iata": "PMA",
      "name": "Chake Chake - Pemba"
    },
    {
      "icao": "HTDO",
      "iata": "DOD",
      "name": "Dodoma"
    },
    {
      "icao": "HTLM",
      "iata": "LKY",
      "name": "Lake Manyara National Park - Lake Manyara"
    },
    {
      "icao": "HTGW",
      "iata": "MBI",
      "name": "Mbeya - Songwe"
    },
    {
      "icao": "HTMT",
      "iata": "MYW",
      "name": "Mtwara"
    },
    {
      "icao": "HTIR",
      "iata": "IRI",
      "name": "Nduli - Iringa"
    },
    {
      "icao": "HTTG",
      "iata": "TGT",
      "name": "Tanga"
    }
  ],
  "Thailand": [
    {
      "icao": "VTBD",
      "iata": "DMK",
      "name": "Bangkok - Don Mueang"
    },
    {
      "icao": "VTBS",
      "iata": "BKK",
      "name": "Bangkok - Suvarnabhumi"
    },
    {
      "icao": "VTCC",
      "iata": "CNX",
      "name": "Chiang Mai"
    },
    {
      "icao": "VTSS",
      "iata": "HDY",
      "name": "Hat Yai"
    },
    {
      "icao": "VTSG",
      "iata": "KBV",
      "name": "Krabi"
    },
    {
      "icao": "VTCT",
      "iata": "CEI",
      "name": "Mae Fah Luang - Chiang Rai"
    },
    {
      "icao": "VTSM",
      "iata": "USM",
      "name": "Na Thon (Ko Samui Island) - Samui"
    },
    {
      "icao": "VTSP",
      "iata": "HKT",
      "name": "Phuket"
    },
    {
      "icao": "VTBU",
      "iata": "UTP",
      "name": "U-Tapao–Rayong–Pattaya"
    },
    {
      "icao": "VTUD",
      "iata": "UTH",
      "name": "Udon Thani"
    },
    {
      "icao": "VTSY",
      "iata": "BTZ",
      "name": "Betong"
    },
    {
      "icao": "VTUO",
      "iata": "BFV",
      "name": "Buriram - Buri Ram"
    },
    {
      "icao": "VTUQ",
      "iata": "NAK",
      "name": "Chaloem Phra Kiat - Nakhon Ratchasima"
    },
    {
      "icao": "VTSE",
      "iata": "CJM",
      "name": "Chumphon"
    },
    {
      "icao": "VTPH",
      "iata": "HHQ",
      "name": "Hua Hin"
    },
    {
      "icao": "VTUK",
      "iata": "KKC",
      "name": "Khon Kaen"
    },
    {
      "icao": "VTBO",
      "iata": "TDX",
      "name": "Laem Ngop - Trat"
    },
    {
      "icao": "VTCL",
      "iata": "LPT",
      "name": "Lampang"
    },
    {
      "icao": "VTUL",
      "iata": "LOE",
      "name": "Loei"
    },
    {
      "icao": "VTBL",
      "iata": "KKM",
      "name": "Lop Buri - Khok Kathiam"
    },
    {
      "icao": "VTCH",
      "iata": "HGN",
      "name": "Mae Hong Son"
    },
    {
      "icao": "VTPM",
      "iata": "MAQ",
      "name": "Mae Sot"
    },
    {
      "icao": "VTBK",
      "iata": "KDT",
      "name": "Nakhon Pathom - Kamphaeng Saen"
    },
    {
      "icao": "VTUW",
      "iata": "KOP",
      "name": "Nakhon Phanom"
    },
    {
      "icao": "VTSF",
      "iata": "NST",
      "name": "Nakhon Si Thammarat"
    },
    {
      "icao": "VTSN",
      "iata": "",
      "name": "Nakhon Si Thammarat - Cha Eian"
    },
    {
      "icao": "VTCN",
      "iata": "NNT",
      "name": "Nan Airport"
    },
    {
      "icao": "VTSC",
      "iata": "NAW",
      "name": "Narathiwat"
    },
    {
      "icao": "VTSK",
      "iata": "PAN",
      "name": "Pattani"
    },
    {
      "icao": "VTPB",
      "iata": "PHY",
      "name": "Phetchabun"
    },
    {
      "icao": "VTPP",
      "iata": "PHS",
      "name": "Phitsanulok"
    },
    {
      "icao": "VTCP",
      "iata": "PRH",
      "name": "Phrae"
    },
    {
      "icao": "VTSR",
      "iata": "UNN",
      "name": "Ranong"
    },
    {
      "icao": "VTUV",
      "iata": "ROI",
      "name": "Roi Et"
    },
    {
      "icao": "VTUI",
      "iata": "SNO",
      "name": "Sakon Nakhon"
    },
    {
      "icao": "VTSH",
      "iata": "SGZ",
      "name": "Songkhla"
    },
    {
      "icao": "VTPO",
      "iata": "THS",
      "name": "Sukhothai"
    },
    {
      "icao": "VTSB",
      "iata": "URT",
      "name": "Surat Thani"
    },
    {
      "icao": "VTUJ",
      "iata": "PXR",
      "name": "Surin"
    },
    {
      "icao": "VTPT",
      "iata": "TKT",
      "name": "Tak Airport"
    },
    {
      "icao": "VTPI",
      "iata": "TKH",
      "name": "Takhli Royal Thai Air Force Base"
    },
    {
      "icao": "VTST",
      "iata": "TST",
      "name": "Trang"
    },
    {
      "icao": "VTUU",
      "iata": "UBP",
      "name": "Ubon Ratchathani"
    }
  ],
  "Timor-Leste": [
    {
      "icao": "WPDL",
      "iata": "DIL",
      "name": "Dili - Presidente Nicolau Lobato"
    },
    {
      "icao": "WPOC",
      "iata": "OEC",
      "name": "Oecussi-Ambeno - Oecusse Route of the Sandalwood"
    },
    {
      "icao": "WPEC",
      "iata": "BCH",
      "name": "Baucau"
    },
    {
      "icao": "WPDB",
      "iata": "UAI",
      "name": "Suai - Commander in Chief of FALINTIL, Kay Rala Xanana Gusmão,"
    }
  ],
  "Togo": [
    {
      "icao": "DXXX",
      "iata": "LFW",
      "name": "Lomé–Tokoin"
    },
    {
      "icao": "DXNG",
      "iata": "LRL",
      "name": "Niamtougou"
    }
  ],
  "Tonga": [
    {
      "icao": "NFTF",
      "iata": "TBU",
      "name": "Nuku'alofa - Fua'amotu"
    },
    {
      "icao": "NFTV",
      "iata": "VAV",
      "name": "Vava'u Island - Vava'u"
    },
    {
      "icao": "NFTL",
      "iata": "HPA",
      "name": "Lifuka Island"
    }
  ],
  "Trinidad and Tobago": [
    {
      "icao": "TTPP",
      "iata": "POS",
      "name": "Port of Spain - Piarco"
    },
    {
      "icao": "TTCP",
      "iata": "TAB",
      "name": "Scarborough - A.N.R. Robinson"
    }
  ],
  "Tunisia": [
    {
      "icao": "DTTJ",
      "iata": "DJE",
      "name": "Mellita - Djerba Zarzis"
    },
    {
      "icao": "DTTX",
      "iata": "SFA",
      "name": "Sfax Thyna"
    },
    {
      "icao": "DTTA",
      "iata": "TUN",
      "name": "Tunis Carthage"
    },
    {
      "icao": "DTTB",
      "iata": "",
      "name": "Borj Challouf - Bizerte Sidi Ahmed Air Base"
    },
    {
      "icao": "DTTR",
      "iata": "EBM",
      "name": "El Borma"
    },
    {
      "icao": "DTNH",
      "iata": "NBE",
      "name": "Enfidha - Hammamet"
    },
    {
      "icao": "DTTG",
      "iata": "GAE",
      "name": "Gabès Matmata"
    },
    {
      "icao": "DTTF",
      "iata": "GAF",
      "name": "Gafsa Ksar"
    },
    {
      "icao": "DTMB",
      "iata": "MIR",
      "name": "Monastir Habib Bourguiba"
    },
    {
      "icao": "DTTD",
      "iata": "",
      "name": "Remada Air Base"
    },
    {
      "icao": "DTKA",
      "iata": "TBJ",
      "name": "Tabarka-Aïn Draham"
    },
    {
      "icao": "DTTZ",
      "iata": "TOE",
      "name": "Tozeur Nefta"
    }
  ],
  "Turkey": [
    {
      "icao": "LTAC",
      "iata": "ESB",
      "name": "Ankara - Esenboğa"
    },
    {
      "icao": "LTAI",
      "iata": "AYT",
      "name": "Antalya"
    },
    {
      "icao": "LTBS",
      "iata": "DLM",
      "name": "Dalaman"
    },
    {
      "icao": "LTFD",
      "iata": "EDO",
      "name": "Edremit - Balıkesir Koca Seyit"
    },
    {
      "icao": "LTBY",
      "iata": "AOE",
      "name": "Eskişehir - Hasan Polatkan"
    },
    {
      "icao": "LTAJ",
      "iata": "GZT",
      "name": "Gaziantep Oğuzeli"
    },
    {
      "icao": "LTBJ",
      "iata": "ADB",
      "name": "Gaziemir - Adnan Menderes"
    },
    {
      "icao": "LTFM",
      "iata": "IST",
      "name": "Istanbul - İstanbul"
    },
    {
      "icao": "LTBA",
      "iata": "ISL",
      "name": "Istanbul(Bakırköy) - İstanbul Atatürk"
    },
    {
      "icao": "LTAU",
      "iata": "ASR",
      "name": "Kayseri Erkilet"
    },
    {
      "icao": "LTAN",
      "iata": "KYA",
      "name": "Konya"
    },
    {
      "icao": "LTFE",
      "iata": "BJV",
      "name": "Milas Bodrum"
    },
    {
      "icao": "LTAZ",
      "iata": "NAV",
      "name": "Nevşehir Kapadokya"
    },
    {
      "icao": "LTFJ",
      "iata": "SAW",
      "name": "Pendik, Istanbul - Istanbul Sabiha Gökçen"
    },
    {
      "icao": "LTFO",
      "iata": "RZV",
      "name": "Rize–Artvin"
    },
    {
      "icao": "LTAF",
      "iata": "ADA",
      "name": "Seyhan - Adana Şakirpaşa"
    },
    {
      "icao": "LTDB",
      "iata": "COV",
      "name": "Tarsus - Çukurova"
    },
    {
      "icao": "LTCS",
      "iata": "GNY",
      "name": "Şanlıurfa GAP"
    },
    {
      "icao": "LTCP",
      "iata": "ADF",
      "name": "Adıyaman"
    },
    {
      "icao": "LTAH",
      "iata": "AFY",
      "name": "Afyonkarahisar - Afyon Air Base"
    },
    {
      "icao": "LTAE",
      "iata": "",
      "name": "Ankara - Akıncı Air Base"
    },
    {
      "icao": "LTAD",
      "iata": "ANK",
      "name": "Ankara - Etimesgut Air Base"
    },
    {
      "icao": "LTDA",
      "iata": "HTY",
      "name": "Antakya - Hatay"
    },
    {
      "icao": "LTCO",
      "iata": "AJI",
      "name": "Ağrı"
    },
    {
      "icao": "LTBF",
      "iata": "BZI",
      "name": "Balıkesir"
    },
    {
      "icao": "LTBG",
      "iata": "BDM",
      "name": "Bandırma"
    },
    {
      "icao": "LTCJ",
      "iata": "BAL",
      "name": "Batman"
    },
    {
      "icao": "LTBR",
      "iata": "YEI",
      "name": "Bursa Yenişehir"
    },
    {
      "icao": "LTAY",
      "iata": "DNZ",
      "name": "Denizli - Çardak"
    },
    {
      "icao": "LTCC",
      "iata": "DIY",
      "name": "Diyarbakır"
    },
    {
      "icao": "LTCA",
      "iata": "EZS",
      "name": "Elazığ"
    },
    {
      "icao": "LTCD",
      "iata": "ERC",
      "name": "Erzincan"
    },
    {
      "icao": "LTCE",
      "iata": "ERZ",
      "name": "Erzurum"
    },
    {
      "icao": "LTBI",
      "iata": "ESK",
      "name": "Eskişehir Air Base"
    },
    {
      "icao": "LTFG",
      "iata": "GZP",
      "name": "Gazipaşa-Alanya"
    },
    {
      "icao": "LTCW",
      "iata": "YKO",
      "name": "Hakkari Yüksekova"
    },
    {
      "icao": "LTFC",
      "iata": "ISE",
      "name": "Isparta - Süleyman Demirel"
    },
    {
      "icao": "LTCT",
      "iata": "IGD",
      "name": "Iğdır"
    },
    {
      "icao": "LTCN",
      "iata": "KCM",
      "name": "Kahramanmaraş"
    },
    {
      "icao": "LTCF",
      "iata": "KSY",
      "name": "Kars"
    },
    {
      "icao": "LTBQ",
      "iata": "KCO",
      "name": "Kartepe - Cengiz Topel"
    },
    {
      "icao": "LTAL",
      "iata": "KFS",
      "name": "Kastamonu"
    },
    {
      "icao": "LTAT",
      "iata": "MLX",
      "name": "Malatya Erhaç"
    },
    {
      "icao": "LTCR",
      "iata": "MQM",
      "name": "Mardin"
    },
    {
      "icao": "LTCK",
      "iata": "MSR",
      "name": "Muş Airport"
    },
    {
      "icao": "LTCB",
      "iata": "OGU",
      "name": "Ordu–Giresun"
    },
    {
      "icao": "LTFH",
      "iata": "SZF",
      "name": "Samsun-Çarşamba"
    },
    {
      "icao": "LTAG",
      "iata": "UAB",
      "name": "Sarıçam - İncirlik Air Base"
    },
    {
      "icao": "LTCL",
      "iata": "SXZ",
      "name": "Siirt"
    },
    {
      "icao": "LTCM",
      "iata": "NOP",
      "name": "Sinop"
    },
    {
      "icao": "LTBU",
      "iata": "TEQ",
      "name": "Tekirdağ Çorlu"
    },
    {
      "icao": "LTAW",
      "iata": "TJK",
      "name": "Tokat"
    },
    {
      "icao": "LTCG",
      "iata": "TZX",
      "name": "Trabzon"
    },
    {
      "icao": "LTBO",
      "iata": "USQ",
      "name": "Uşak"
    },
    {
      "icao": "LTCI",
      "iata": "VAN",
      "name": "Van Ferit Melen"
    },
    {
      "icao": "LTAS",
      "iata": "ONQ",
      "name": "Zonguldak Çaycuma"
    },
    {
      "icao": "LTBH",
      "iata": "CKZ",
      "name": "Çanakkale"
    },
    {
      "icao": "LTCV",
      "iata": "NKT",
      "name": "Şırnak Şerafettin Elçi"
    }
  ],
  "Turkmenistan": [
    {
      "icao": "UTAA",
      "iata": "ASB",
      "name": "Ashgabat"
    },
    {
      "icao": "UTAN",
      "iata": "BKN",
      "name": "Balkanabat"
    },
    {
      "icao": "UTAT",
      "iata": "TAZ",
      "name": "Daşoguz - Dashoguz"
    },
    {
      "icao": "UTAM",
      "iata": "MYP",
      "name": "Mary"
    },
    {
      "icao": "UTAV",
      "iata": "CRZ",
      "name": "Türkmenabat"
    },
    {
      "icao": "UTAK",
      "iata": "KRW",
      "name": "Turkmenbaşy"
    }
  ],
  "Turks and Caicos Islands": [
    {
      "icao": "MBPV",
      "iata": "PLS",
      "name": "Providenciales"
    },
    {
      "icao": "MBGT",
      "iata": "GDT",
      "name": "Cockburn Town - JAGS McCartney"
    },
    {
      "icao": "MBNC",
      "iata": "NCA",
      "name": "North Caicos"
    },
    {
      "icao": "MBSC",
      "iata": "XSC",
      "name": "South Caicos"
    }
  ],
  "Tuvalu": [
    {
      "icao": "NGFU",
      "iata": "FUN",
      "name": "Funafuti"
    }
  ],
  "U.S. Virgin Islands": [
    {
      "icao": "TIST",
      "iata": "STT",
      "name": "Charlotte Amalie - Cyril E. King"
    },
    {
      "icao": "TISX",
      "iata": "STX",
      "name": "Christiansted - Henry E. Rohlsen"
    }
  ],
  "Uganda": [
    {
      "icao": "HUEN",
      "iata": "EBB",
      "name": "Entebbe"
    },
    {
      "icao": "HUAR",
      "iata": "RUA",
      "name": "Arua"
    },
    {
      "icao": "HUGU",
      "iata": "ULU",
      "name": "Gulu"
    },
    {
      "icao": "HUSO",
      "iata": "SRT",
      "name": "Soroti"
    }
  ],
  "Ukraine": [
    {
      "icao": "UKLL",
      "iata": "LWO",
      "name": "Lviv"
    },
    {
      "icao": "UKOO",
      "iata": "ODS",
      "name": "Odesa"
    },
    {
      "icao": "UKFF",
      "iata": "SIP",
      "name": "Simferopol"
    },
    {
      "icao": "UKLU",
      "iata": "UDJ",
      "name": "Uzhhorod"
    },
    {
      "icao": "UKDE",
      "iata": "OZH",
      "name": "Zaporizhia - Zaporizhzhia"
    },
    {
      "icao": "UKDB",
      "iata": "ERD",
      "name": "Berdyansk"
    },
    {
      "icao": "UKBB",
      "iata": "KBP",
      "name": "Boryspil"
    },
    {
      "icao": "UKKE",
      "iata": "CKC",
      "name": "Cherkasy"
    },
    {
      "icao": "UKLN",
      "iata": "CWC",
      "name": "Chernivtsi"
    },
    {
      "icao": "UKDD",
      "iata": "DNK",
      "name": "Dnipro"
    },
    {
      "icao": "UKKK",
      "iata": "IEV",
      "name": "Ihor Sikorsky Kyiv International Airport (Zhuliany)"
    },
    {
      "icao": "UKLI",
      "iata": "IFO",
      "name": "Ivano-Frankivsk"
    },
    {
      "icao": "UKKA",
      "iata": "",
      "name": "Kacha Air Base"
    },
    {
      "icao": "UKHH",
      "iata": "HRK",
      "name": "Kharkiv"
    },
    {
      "icao": "UKOH",
      "iata": "KHE",
      "name": "Kherson"
    },
    {
      "icao": "UKLH",
      "iata": "HMJ",
      "name": "Khmelnytskyi"
    },
    {
      "icao": "UKDR",
      "iata": "KWG",
      "name": "Kryvyi Rih"
    },
    {
      "icao": "UKCM",
      "iata": "MPW",
      "name": "Mariupol"
    },
    {
      "icao": "UKLR",
      "iata": "RWN",
      "name": "Rivne"
    },
    {
      "icao": "UKFB",
      "iata": "UKS",
      "name": "Sevastopol International Airport / Belbek Air Base"
    },
    {
      "icao": "UKWW",
      "iata": "VIN",
      "name": "Vinnitsa - Vinnytsia/Gavyryshivka"
    }
  ],
  "United Arab Emirates": [
    {
      "icao": "OMAD",
      "iata": "AZI",
      "name": "Abu Dhabi - Al Bateen Executive"
    },
    {
      "icao": "OMAA",
      "iata": "AUH",
      "name": "Abu Dhabi - Zayed"
    },
    {
      "icao": "OMAL",
      "iata": "AAN",
      "name": "Al Ain"
    },
    {
      "icao": "OMDB",
      "iata": "DXB",
      "name": "Dubai"
    },
    {
      "icao": "OMDW",
      "iata": "DWC",
      "name": "Dubai(Jebel Ali) - Al Maktoum"
    },
    {
      "icao": "OMFJ",
      "iata": "FJR",
      "name": "Fujairah"
    },
    {
      "icao": "OMRK",
      "iata": "RKT",
      "name": "Ras Al Khaimah"
    },
    {
      "icao": "OMSJ",
      "iata": "SHJ",
      "name": "Sharjah"
    },
    {
      "icao": "OMAM",
      "iata": "DHF",
      "name": "Al Dhafra Air Base"
    },
    {
      "icao": "OMDM",
      "iata": "NHD",
      "name": "Dubai - Al Minhad Air Base"
    },
    {
      "icao": "OMNK",
      "iata": "",
      "name": "Sas Al Nakheel Air Base"
    },
    {
      "icao": "OMBY",
      "iata": "XSB",
      "name": "Sir Bani Yas"
    }
  ],
  "United Kingdom": [
    {
      "icao": "EGPD",
      "iata": "ABZ",
      "name": "Aberdeen"
    },
    {
      "icao": "EGAA",
      "iata": "BFS",
      "name": "Belfast"
    },
    {
      "icao": "EGBB",
      "iata": "BHX",
      "name": "Birmingham, West Midlands - Birmingham"
    },
    {
      "icao": "EGGD",
      "iata": "BRS",
      "name": "Bristol"
    },
    {
      "icao": "EGFF",
      "iata": "CWL",
      "name": "Cardiff"
    },
    {
      "icao": "EGPH",
      "iata": "EDI",
      "name": "Edinburgh"
    },
    {
      "icao": "EGPF",
      "iata": "GLA",
      "name": "Glasgow"
    },
    {
      "icao": "EGNM",
      "iata": "LBA",
      "name": "Leeds, West Yorkshire - Leeds Bradford"
    },
    {
      "icao": "EGGP",
      "iata": "LPL",
      "name": "Liverpool John Lennon"
    },
    {
      "icao": "EGKK",
      "iata": "LGW",
      "name": "London Gatwick"
    },
    {
      "icao": "EGLL",
      "iata": "LHR",
      "name": "London Heathrow"
    },
    {
      "icao": "EGSS",
      "iata": "STN",
      "name": "London, Essex - London Stansted"
    },
    {
      "icao": "EGGW",
      "iata": "LTN",
      "name": "Luton, Luton - London Luton"
    },
    {
      "icao": "EGCC",
      "iata": "MAN",
      "name": "Manchester, Greater Manchester - Manchester"
    },
    {
      "icao": "EGNT",
      "iata": "NCL",
      "name": "Newcastle upon Tyne, Tyne and Wear - Newcastle"
    },
    {
      "icao": "EGNX",
      "iata": "EMA",
      "name": "Nottingham, Leicestershire - East Midlands"
    },
    {
      "icao": "EGPK",
      "iata": "PIK",
      "name": "Prestwick, South Ayrshire - Glasgow Prestwick"
    },
    {
      "icao": "EGHL",
      "iata": "",
      "name": "Alton, Hampshire - Lasham Airfield"
    },
    {
      "icao": "EGOV",
      "iata": "VLY",
      "name": "Angelsey - Anglesey"
    },
    {
      "icao": "EGPU",
      "iata": "TRE",
      "name": "Balemartine, Argyll and Bute - Tiree"
    },
    {
      "icao": "EGPL",
      "iata": "BEB",
      "name": "Balivanich - Benbecula"
    },
    {
      "icao": "EGNL",
      "iata": "BWF",
      "name": "Barrow-in-Furness - Barrow Walney Island"
    },
    {
      "icao": "EGNH",
      "iata": "BLK",
      "name": "Blackpool"
    },
    {
      "icao": "EGHH",
      "iata": "BOH",
      "name": "Bournemouth"
    },
    {
      "icao": "EGUL",
      "iata": "LKZ",
      "name": "Brandon, Suffolk - RAF Lakenheath"
    },
    {
      "icao": "EGKA",
      "iata": "ESH",
      "name": "Brighton, East Sussex - Brighton City"
    },
    {
      "icao": "EGNR",
      "iata": "CEG",
      "name": "Broughton - Hawarden"
    },
    {
      "icao": "EGXH",
      "iata": "BEQ",
      "name": "Bury Saint Edmunds, Suffolk - RAF Honington"
    },
    {
      "icao": "EGUN",
      "iata": "MHZ",
      "name": "Bury Saint Edmunds, Suffolk - RAF Mildenhall"
    },
    {
      "icao": "EGLK",
      "iata": "BBS",
      "name": "Camberley, Surrey - Blackbushe"
    },
    {
      "icao": "EGSC",
      "iata": "CBG",
      "name": "Cambridge, Cambridgeshire - Cambridge City"
    },
    {
      "icao": "EGEC",
      "iata": "CAL",
      "name": "Campbeltown"
    },
    {
      "icao": "EGNC",
      "iata": "CAX",
      "name": "Carlisle, Cumbria - Carlisle Lake District"
    },
    {
      "icao": "EGVN",
      "iata": "BZZ",
      "name": "Carterton, Oxfordshire - RAF Brize Norton"
    },
    {
      "icao": "EGHQ",
      "iata": "NQY",
      "name": "Cornwall Airport Newquay"
    },
    {
      "icao": "EGBE",
      "iata": "CVT",
      "name": "Coventry, West Midlands - Coventry"
    },
    {
      "icao": "EGTC",
      "iata": "",
      "name": "Cranfield, Central Bedfordshire - Cranfield"
    },
    {
      "icao": "EGNV",
      "iata": "MME",
      "name": "Darlington, Durham - Teesside"
    },
    {
      "icao": "EGAE",
      "iata": "LDY",
      "name": "Derry, Derry and Strabane - City of Derry"
    },
    {
      "icao": "EGPN",
      "iata": "DND",
      "name": "Dundee"
    },
    {
      "icao": "EGED",
      "iata": "EOI",
      "name": "Eday"
    },
    {
      "icao": "EGAB",
      "iata": "ENK",
      "name": "Enniskillen, Fermanagh and Omagh - Enniskillen/St Angelo"
    },
    {
      "icao": "EGPR",
      "iata": "BRR",
      "name": "Eoligarry - Barra"
    },
    {
      "icao": "EGTE",
      "iata": "EXT",
      "name": "Exeter, Devon - Exeter"
    },
    {
      "icao": "EGVA",
      "iata": "FFD",
      "name": "Fairford, Gloucestershire - RAF Fairford"
    },
    {
      "icao": "EGLF",
      "iata": "FAB",
      "name": "Farnborough, Hampshire - Farnborough"
    },
    {
      "icao": "EGAC",
      "iata": "BHD",
      "name": "George Best Belfast City"
    },
    {
      "icao": "EGYE",
      "iata": "",
      "name": "Grantham, Lincolnshire - RAF Barkston Heath"
    },
    {
      "icao": "EGNJ",
      "iata": "HUY",
      "name": "Grimsby, Lincolnshire - Humberside"
    },
    {
      "icao": "EGFE",
      "iata": "HAW",
      "name": "Haverfordwest"
    },
    {
      "icao": "EGVO",
      "iata": "ODH",
      "name": "Hook, Hampshire - RAF Odiham"
    },
    {
      "icao": "EGPE",
      "iata": "INV",
      "name": "Inverness"
    },
    {
      "icao": "EGPI",
      "iata": "ILY",
      "name": "Isle of Islay, Argyll and Bute - Islay"
    },
    {
      "icao": "EGTK",
      "iata": "OXF",
      "name": "Kidlington, Oxfordshire - London Oxford"
    },
    {
      "icao": "EGYM",
      "iata": "KNF",
      "name": "King's Lynn, Norfolk - RAF Marham"
    },
    {
      "icao": "EGPA",
      "iata": "KOI",
      "name": "Kirkwall, Orkney Islands - Kirkwall"
    },
    {
      "icao": "EGPB",
      "iata": "LSI",
      "name": "Lerwick, Shetland - Sumburgh"
    },
    {
      "icao": "EGQL",
      "iata": "ADX",
      "name": "Leuchars, Fife - Leuchars Station Airfield"
    },
    {
      "icao": "EGXC",
      "iata": "QCY",
      "name": "Lincoln, Lincolnshire - RAF Coningsby"
    },
    {
      "icao": "EGXW",
      "iata": "WTN",
      "name": "Lincoln, Lincolnshire - RAF Waddington"
    },
    {
      "icao": "EGKB",
      "iata": "BQH",
      "name": "London Biggin Hill"
    },
    {
      "icao": "EGLC",
      "iata": "LCY",
      "name": "London City"
    },
    {
      "icao": "EGQS",
      "iata": "LMO",
      "name": "Lossiemouth, Moray - RAF Lossiemouth"
    },
    {
      "icao": "EGWU",
      "iata": "NHT",
      "name": "Northolt, Greater London - RAF Northolt"
    },
    {
      "icao": "EGSH",
      "iata": "NWI",
      "name": "Norwich, Norfolk - Norwich"
    },
    {
      "icao": "EGBN",
      "iata": "NQT",
      "name": "Nottingham, Nottinghamshire - Nottingham City"
    },
    {
      "icao": "EGXT",
      "iata": "",
      "name": "Peterborough, Cambridgeshire - RAF Wittering"
    },
    {
      "icao": "EGMD",
      "iata": "LYX",
      "name": "Romney Marsh, Kent - Lydd London Ashford"
    },
    {
      "icao": "EGOS",
      "iata": "",
      "name": "Shrewsbury, Shropshire - RAF Shawbury"
    },
    {
      "icao": "EGYD",
      "iata": "",
      "name": "Sleaford, Lincolnshire - RAF Cranwell"
    },
    {
      "icao": "EGHI",
      "iata": "SOU",
      "name": "Southampton"
    },
    {
      "icao": "EGMC",
      "iata": "SEN",
      "name": "Southend-on-Sea, Essex - London Southend"
    },
    {
      "icao": "EGBJ",
      "iata": "GLO",
      "name": "Staverton, Gloucestershire - Gloucestershire"
    },
    {
      "icao": "EGPO",
      "iata": "SYY",
      "name": "Stornoway, Western Isles - Stornoway"
    },
    {
      "icao": "EGFH",
      "iata": "SWS",
      "name": "Swansea"
    },
    {
      "icao": "EGCM",
      "iata": "",
      "name": "Tadcaster, North Yorkshire - Leeds East"
    },
    {
      "icao": "EGUB",
      "iata": "BEX",
      "name": "Wallingford, Oxfordshire - RAF Benson"
    },
    {
      "icao": "EGNO",
      "iata": "WRT",
      "name": "Warton Aerodrome"
    },
    {
      "icao": "EGPC",
      "iata": "WIC",
      "name": "Wick John O'Groats"
    },
    {
      "icao": "EGDY",
      "iata": "YEO",
      "name": "Yeovil, Somerset - RNAS Yeovilton"
    }
  ],
  "United States": [
    {
      "icao": "KALB",
      "iata": "ALB",
      "name": "Albany"
    },
    {
      "icao": "KABQ",
      "iata": "ABQ",
      "name": "Albuquerque International Sunport"
    },
    {
      "icao": "KAUS",
      "iata": "AUS",
      "name": "Austin Bergstrom"
    },
    {
      "icao": "KBWI",
      "iata": "BWI",
      "name": "Baltimore/Washington International Thurgood Marshall"
    },
    {
      "icao": "KBHM",
      "iata": "BHM",
      "name": "Birmingham-Shuttlesworth"
    },
    {
      "icao": "KBOI",
      "iata": "BOI",
      "name": "Boise Air Terminal/Gowen Field"
    },
    {
      "icao": "KBOS",
      "iata": "BOS",
      "name": "Boston Logan"
    },
    {
      "icao": "KBUF",
      "iata": "BUF",
      "name": "Buffalo Niagara"
    },
    {
      "icao": "KCHS",
      "iata": "CHS",
      "name": "Charleston"
    },
    {
      "icao": "KCLT",
      "iata": "CLT",
      "name": "Charlotte Douglas"
    },
    {
      "icao": "KMDW",
      "iata": "MDW",
      "name": "Chicago Midway"
    },
    {
      "icao": "KORD",
      "iata": "ORD",
      "name": "Chicago O'Hare"
    },
    {
      "icao": "KCVG",
      "iata": "CVG",
      "name": "Cincinnati / Covington - Cincinnati Northern Kentucky"
    },
    {
      "icao": "KCOS",
      "iata": "COS",
      "name": "City of Colorado Springs Municipal"
    },
    {
      "icao": "KCLE",
      "iata": "CLE",
      "name": "Cleveland Hopkins"
    },
    {
      "icao": "KDAL",
      "iata": "DAL",
      "name": "Dallas Love Field"
    },
    {
      "icao": "KDFW",
      "iata": "DFW",
      "name": "Dallas-Fort Worth - Dallas Fort Worth"
    },
    {
      "icao": "KDEN",
      "iata": "DEN",
      "name": "Denver"
    },
    {
      "icao": "KDSM",
      "iata": "DSM",
      "name": "Des Moines"
    },
    {
      "icao": "KDTW",
      "iata": "DTW",
      "name": "Detroit Metropolitan Wayne County"
    },
    {
      "icao": "KELP",
      "iata": "ELP",
      "name": "El Paso"
    },
    {
      "icao": "KFLL",
      "iata": "FLL",
      "name": "Fort Lauderdale Hollywood"
    },
    {
      "icao": "KRSW",
      "iata": "RSW",
      "name": "Fort Myers - Southwest Florida"
    },
    {
      "icao": "KROC",
      "iata": "ROC",
      "name": "Frederick Douglass Greater Rochester"
    },
    {
      "icao": "KFAT",
      "iata": "FAT",
      "name": "Fresno Yosemite"
    },
    {
      "icao": "KGRR",
      "iata": "GRR",
      "name": "Grand Rapids - Gerald R. Ford"
    },
    {
      "icao": "KGSO",
      "iata": "GSO",
      "name": "Greensboro - Piedmont Triad"
    },
    {
      "icao": "KBDL",
      "iata": "BDL",
      "name": "Hartford - Bradley"
    },
    {
      "icao": "KATL",
      "iata": "ATL",
      "name": "Hartsfield Jackson Atlanta"
    },
    {
      "icao": "KBUR",
      "iata": "BUR",
      "name": "Hollywood Burbank"
    },
    {
      "icao": "PHNL",
      "iata": "HNL",
      "name": "Honolulu, Oahu - Daniel K. Inouye"
    },
    {
      "icao": "KIAH",
      "iata": "IAH",
      "name": "Houston - George Bush Intercontinental"
    },
    {
      "icao": "KHOU",
      "iata": "HOU",
      "name": "Houston - William P. Hobby"
    },
    {
      "icao": "KIND",
      "iata": "IND",
      "name": "Indianapolis"
    },
    {
      "icao": "KJAX",
      "iata": "JAX",
      "name": "Jacksonville"
    },
    {
      "icao": "KCMH",
      "iata": "CMH",
      "name": "John Glenn Columbus"
    },
    {
      "icao": "PHOG",
      "iata": "OGG",
      "name": "Kahului"
    },
    {
      "icao": "PHKO",
      "iata": "KOA",
      "name": "Kailua-Kona - Ellison Onizuka Kona International Airport at Keāhole"
    },
    {
      "icao": "KMCI",
      "iata": "MCI",
      "name": "Kansas City"
    },
    {
      "icao": "KTYS",
      "iata": "TYS",
      "name": "Knoxville/Maryville - McGhee Tyson"
    },
    {
      "icao": "KLAS",
      "iata": "LAS",
      "name": "Las Vegas - Harry Reid"
    },
    {
      "icao": "PHLI",
      "iata": "LIH",
      "name": "Lihue, Kauai - Lihue"
    },
    {
      "icao": "KLGB",
      "iata": "LGB",
      "name": "Long Beach"
    },
    {
      "icao": "KLAX",
      "iata": "LAX",
      "name": "Los Angeles"
    },
    {
      "icao": "KMSY",
      "iata": "MSY",
      "name": "Louis Armstrong New Orleans"
    },
    {
      "icao": "KSDF",
      "iata": "SDF",
      "name": "Louisville Muhammad Ali"
    },
    {
      "icao": "KMEM",
      "iata": "MEM",
      "name": "Memphis"
    },
    {
      "icao": "KMIA",
      "iata": "MIA",
      "name": "Miami"
    },
    {
      "icao": "KMKE",
      "iata": "MKE",
      "name": "Milwaukee - General Mitchell"
    },
    {
      "icao": "KMSP",
      "iata": "MSP",
      "name": "Minneapolis–Saint Paul International Airport / Wold–Chamberlain Field"
    },
    {
      "icao": "KMYR",
      "iata": "MYR",
      "name": "Myrtle Beach"
    },
    {
      "icao": "KBNA",
      "iata": "BNA",
      "name": "Nashville"
    },
    {
      "icao": "KJFK",
      "iata": "JFK",
      "name": "New York - John F. Kennedy"
    },
    {
      "icao": "KLGA",
      "iata": "LGA",
      "name": "New York - LaGuardia"
    },
    {
      "icao": "KEWR",
      "iata": "EWR",
      "name": "Newark Liberty"
    },
    {
      "icao": "KORF",
      "iata": "ORF",
      "name": "Norfolk"
    },
    {
      "icao": "KSJC",
      "iata": "SJC",
      "name": "Norman Y. Mineta San Jose"
    },
    {
      "icao": "KOKC",
      "iata": "OKC",
      "name": "Oklahoma City - OKC Will Rogers World"
    },
    {
      "icao": "KOMA",
      "iata": "OMA",
      "name": "Omaha - Eppley Airfield"
    },
    {
      "icao": "KONT",
      "iata": "ONT",
      "name": "Ontario"
    },
    {
      "icao": "KMCO",
      "iata": "MCO",
      "name": "Orlando"
    },
    {
      "icao": "KSFB",
      "iata": "SFB",
      "name": "Orlando Sanford"
    },
    {
      "icao": "KPSP",
      "iata": "PSP",
      "name": "Palm Springs"
    },
    {
      "icao": "KPNS",
      "iata": "PNS",
      "name": "Pensacola"
    },
    {
      "icao": "KPHL",
      "iata": "PHL",
      "name": "Philadelphia"
    },
    {
      "icao": "KPHX",
      "iata": "PHX",
      "name": "Phoenix Sky Harbor"
    },
    {
      "icao": "KPIE",
      "iata": "PIE",
      "name": "Pinellas Park - St. Petersburg Clearwater"
    },
    {
      "icao": "KPIT",
      "iata": "PIT",
      "name": "Pittsburgh"
    },
    {
      "icao": "KPDX",
      "iata": "PDX",
      "name": "Portland"
    },
    {
      "icao": "KPWM",
      "iata": "PWM",
      "name": "Portland International Jetport"
    },
    {
      "icao": "KPVD",
      "iata": "PVD",
      "name": "Providence/Warwick - Rhode Island T. F. Green"
    },
    {
      "icao": "KRDU",
      "iata": "RDU",
      "name": "Raleigh/Durham - Raleigh-Durham"
    },
    {
      "icao": "KRNO",
      "iata": "RNO",
      "name": "Reno Tahoe"
    },
    {
      "icao": "KRIC",
      "iata": "RIC",
      "name": "Richmond"
    },
    {
      "icao": "KDCA",
      "iata": "DCA",
      "name": "Ronald Reagan Washington National"
    },
    {
      "icao": "KSMF",
      "iata": "SMF",
      "name": "Sacramento"
    },
    {
      "icao": "KSLC",
      "iata": "SLC",
      "name": "Salt Lake City"
    },
    {
      "icao": "KSAT",
      "iata": "SAT",
      "name": "San Antonio"
    },
    {
      "icao": "KSBD",
      "iata": "SBD",
      "name": "San Bernardino"
    },
    {
      "icao": "KSAN",
      "iata": "SAN",
      "name": "San Diego"
    },
    {
      "icao": "KSFO",
      "iata": "SFO",
      "name": "San Francisco"
    },
    {
      "icao": "KOAK",
      "iata": "OAK",
      "name": "San Francisco Bay Oakland"
    },
    {
      "icao": "KSNA",
      "iata": "SNA",
      "name": "Santa Ana - John Wayne Orange County"
    },
    {
      "icao": "KSRQ",
      "iata": "SRQ",
      "name": "Sarasota/Bradenton - Sarasota Bradenton"
    },
    {
      "icao": "KSAV",
      "iata": "SAV",
      "name": "Savannah Hilton Head"
    },
    {
      "icao": "KSEA",
      "iata": "SEA",
      "name": "Seattle–Tacoma"
    },
    {
      "icao": "KGEG",
      "iata": "GEG",
      "name": "Spokane"
    },
    {
      "icao": "KSTL",
      "iata": "STL",
      "name": "St Louis - St. Louis Lambert"
    },
    {
      "icao": "KSYR",
      "iata": "SYR",
      "name": "Syracuse Hancock"
    },
    {
      "icao": "KTPA",
      "iata": "TPA",
      "name": "Tampa"
    },
    {
      "icao": "PANC",
      "iata": "ANC",
      "name": "Ted Stevens Anchorage"
    },
    {
      "icao": "KTUS",
      "iata": "TUS",
      "name": "Tucson"
    },
    {
      "icao": "KTUL",
      "iata": "TUL",
      "name": "Tulsa"
    },
    {
      "icao": "KVNY",
      "iata": "VNY",
      "name": "Van Nuys"
    },
    {
      "icao": "KIAD",
      "iata": "IAD",
      "name": "Washington Dulles"
    },
    {
      "icao": "KPBI",
      "iata": "PBI",
      "name": "West Palm Beach - Palm Beach"
    },
    {
      "icao": "KAPG",
      "iata": "APG",
      "name": "Aberdeen - Phillips Army Air Field"
    },
    {
      "icao": "KABR",
      "iata": "ABR",
      "name": "Aberdeen Regional"
    },
    {
      "icao": "KDYS",
      "iata": "DYS",
      "name": "Abilene - Dyess Air Force Base"
    },
    {
      "icao": "KABI",
      "iata": "ABI",
      "name": "Abilene Regional"
    },
    {
      "icao": "KADH",
      "iata": "ADT",
      "name": "Ada Regional"
    },
    {
      "icao": "PADK",
      "iata": "ADK",
      "name": "Adak"
    },
    {
      "icao": "KCAK",
      "iata": "CAK",
      "name": "Akron Canton Regional"
    },
    {
      "icao": "KAKR",
      "iata": "AKC",
      "name": "Akron Fulton"
    },
    {
      "icao": "KHMN",
      "iata": "HMN",
      "name": "Alamogordo - Holloman Air Force Base"
    },
    {
      "icao": "KALM",
      "iata": "ALM",
      "name": "Alamogordo White Sands Regional"
    },
    {
      "icao": "KALS",
      "iata": "ALS",
      "name": "Alamosa - San Luis Valley Regional Airport/Bergman Field"
    },
    {
      "icao": "KABY",
      "iata": "ABY",
      "name": "Albany - Southwest Georgia Regional"
    },
    {
      "icao": "KAEX",
      "iata": "AEX",
      "name": "Alexandria"
    },
    {
      "icao": "KAXN",
      "iata": "AXN",
      "name": "Alexandria - Chandler Field"
    },
    {
      "icao": "KESF",
      "iata": "ESF",
      "name": "Alexandria - Esler Army Airfield / Esler Regional"
    },
    {
      "icao": "KALI",
      "iata": "ALI",
      "name": "Alice"
    },
    {
      "icao": "KABE",
      "iata": "ABE",
      "name": "Allentown/Bethlehem - Lehigh Valley"
    },
    {
      "icao": "KAIA",
      "iata": "AIA",
      "name": "Alliance Municipal"
    },
    {
      "icao": "KAPN",
      "iata": "APN",
      "name": "Alpena County Regional"
    },
    {
      "icao": "KSRR",
      "iata": "RUI",
      "name": "Alto - Sierra Blanca Regional"
    },
    {
      "icao": "KALN",
      "iata": "ALN",
      "name": "Alton/St Louis - St Louis Regional"
    },
    {
      "icao": "KAOO",
      "iata": "AOO",
      "name": "Altoona Blair County"
    },
    {
      "icao": "KLTS",
      "iata": "LTS",
      "name": "Altus Air Force Base"
    },
    {
      "icao": "PAFM",
      "iata": "ABL",
      "name": "Ambler"
    },
    {
      "icao": "PAKP",
      "iata": "AKP",
      "name": "Anaktuvuk Pass"
    },
    {
      "icao": "PAED",
      "iata": "EDF",
      "name": "Anchorage - Elmendorf Air Force Base"
    },
    {
      "icao": "PAMR",
      "iata": "MRI",
      "name": "Anchorage - Merrill Field"
    },
    {
      "icao": "KAND",
      "iata": "AND",
      "name": "Anderson Regional"
    },
    {
      "icao": "KLBX",
      "iata": "LJN",
      "name": "Angleton - Texas Gulf Coast Regional"
    },
    {
      "icao": "PANI",
      "iata": "ANI",
      "name": "Aniak"
    },
    {
      "icao": "KANB",
      "iata": "ANB",
      "name": "Anniston Regional"
    },
    {
      "icao": "PANV",
      "iata": "ANV",
      "name": "Anvik"
    },
    {
      "icao": "KATW",
      "iata": "ATW",
      "name": "Appleton"
    },
    {
      "icao": "KACV",
      "iata": "ACV",
      "name": "Arcata/Eureka - California Redwood Coast-Humboldt County"
    },
    {
      "icao": "PARC",
      "iata": "ARC",
      "name": "Arctic Village"
    },
    {
      "icao": "KAVL",
      "iata": "AVL",
      "name": "Asheville Regional"
    },
    {
      "icao": "KHZY",
      "iata": "JFN",
      "name": "Ashtabula - Northeast Ohio Regional"
    },
    {
      "icao": "KASE",
      "iata": "ASE",
      "name": "Aspen-Pitkin County Airport (Sardy Field)"
    },
    {
      "icao": "KAST",
      "iata": "AST",
      "name": "Astoria Regional"
    },
    {
      "icao": "KAHN",
      "iata": "AHN",
      "name": "Athens Ben Epps"
    },
    {
      "icao": "KPDK",
      "iata": "PDK",
      "name": "Atlanta - DeKalb Peachtree"
    },
    {
      "icao": "KFTY",
      "iata": "FTY",
      "name": "Atlanta - Fulton County Airport Brown Field"
    },
    {
      "icao": "KACY",
      "iata": "ACY",
      "name": "Atlantic City"
    },
    {
      "icao": "PATQ",
      "iata": "ATK",
      "name": "Atqasuk Edward Burnell Sr Memorial"
    },
    {
      "icao": "KDNL",
      "iata": "DNL",
      "name": "Augusta - Daniel Field"
    },
    {
      "icao": "KAGS",
      "iata": "AGS",
      "name": "Augusta Regional At Bush Field"
    },
    {
      "icao": "KAUG",
      "iata": "AUG",
      "name": "Augusta State"
    },
    {
      "icao": "KBKF",
      "iata": "BFK",
      "name": "Aurora - Buckley Space Force Base"
    },
    {
      "icao": "KBKE",
      "iata": "BKE",
      "name": "Baker City Municipal"
    },
    {
      "icao": "KBFL",
      "iata": "BFL",
      "name": "Bakersfield - Meadows Field"
    },
    {
      "icao": "KMTN",
      "iata": "MTN",
      "name": "Baltimore - Martin State"
    },
    {
      "icao": "KBGR",
      "iata": "BGR",
      "name": "Bangor"
    },
    {
      "icao": "KMPV",
      "iata": "MPV",
      "name": "Barre/Montpelier - Edward F Knapp State"
    },
    {
      "icao": "KDAG",
      "iata": "DAG",
      "name": "Barstow Daggett"
    },
    {
      "icao": "PABA",
      "iata": "BTI",
      "name": "Barter Island Long Range Radar Station"
    },
    {
      "icao": "KBTR",
      "iata": "BTR",
      "name": "Baton Rouge Metropolitan"
    },
    {
      "icao": "KBTL",
      "iata": "BTL",
      "name": "Battle Creek Executive Airport at Kellogg Field"
    },
    {
      "icao": "KBDE",
      "iata": "BDE",
      "name": "Baudette"
    },
    {
      "icao": "KBAB",
      "iata": "BAB",
      "name": "Beale Air Force Base"
    },
    {
      "icao": "KBPT",
      "iata": "BPT",
      "name": "Beaumont/Port Arthur - Jack Brooks Regional"
    },
    {
      "icao": "KBKW",
      "iata": "BKW",
      "name": "Beaver - Raleigh County Memorial"
    },
    {
      "icao": "KBVI",
      "iata": "BFP",
      "name": "Beaver Falls - Beaver County"
    },
    {
      "icao": "KBED",
      "iata": "BED",
      "name": "Bedford - Laurence G Hanscom Field"
    },
    {
      "icao": "KBLV",
      "iata": "BLV",
      "name": "Belleville - Scott AFB/Midamerica"
    },
    {
      "icao": "KBLI",
      "iata": "BLI",
      "name": "Bellingham"
    },
    {
      "icao": "KBJI",
      "iata": "BJI",
      "name": "Bemidji Regional"
    },
    {
      "icao": "PABE",
      "iata": "BET",
      "name": "Bethel"
    },
    {
      "icao": "KBVY",
      "iata": "BVY",
      "name": "Beverly / Danvers - Beverly Regional"
    },
    {
      "icao": "KBPI",
      "iata": "BPI",
      "name": "Big Piney - Miley Memorial Field"
    },
    {
      "icao": "KBIL",
      "iata": "BIL",
      "name": "Billings Logan"
    },
    {
      "icao": "KBIX",
      "iata": "BIX",
      "name": "Biloxi - Keesler Air Force Base"
    },
    {
      "icao": "PABV",
      "iata": "",
      "name": "Birchwood"
    },
    {
      "icao": "KBIH",
      "iata": "BIH",
      "name": "Bishop - Eastern Sierra Regional"
    },
    {
      "icao": "KBIS",
      "iata": "BIS",
      "name": "Bismarck Municipal"
    },
    {
      "icao": "KBMG",
      "iata": "BMG",
      "name": "Bloomington - Monroe County"
    },
    {
      "icao": "KBMI",
      "iata": "BMI",
      "name": "Bloomington/Normal - Central Illinois Regional Airport at Bloomington-Normal"
    },
    {
      "icao": "KTRI",
      "iata": "TRI",
      "name": "Blountville - Tri-Cities Regional TN/VA"
    },
    {
      "icao": "KBLF",
      "iata": "BLF",
      "name": "Bluefield - Mercer County"
    },
    {
      "icao": "KBLH",
      "iata": "BLH",
      "name": "Blythe"
    },
    {
      "icao": "KBYH",
      "iata": "BYH",
      "name": "Blytheville - Arkansas"
    },
    {
      "icao": "KBCT",
      "iata": "BCT",
      "name": "Boca Raton"
    },
    {
      "icao": "KBAD",
      "iata": "BAD",
      "name": "Bossier City - Barksdale Air Force Base"
    },
    {
      "icao": "KBWG",
      "iata": "BWG",
      "name": "Bowling Green Warren County Regional"
    },
    {
      "icao": "KBZN",
      "iata": "BZN",
      "name": "Bozeman Yellowstone"
    },
    {
      "icao": "KBFD",
      "iata": "BFD",
      "name": "Bradford Regional"
    },
    {
      "icao": "KBBD",
      "iata": "BBD",
      "name": "Brady - Curtis Field"
    },
    {
      "icao": "KBRD",
      "iata": "BRD",
      "name": "Brainerd Lakes Regional"
    },
    {
      "icao": "KBBG",
      "iata": "BKG",
      "name": "Branson"
    },
    {
      "icao": "KPWT",
      "iata": "PWT",
      "name": "Bremerton National"
    },
    {
      "icao": "KBDR",
      "iata": "BDR",
      "name": "Bridgeport - Igor I Sikorsky Memorial"
    },
    {
      "icao": "KCKB",
      "iata": "CKB",
      "name": "Bridgeport - North Central West Virginia"
    },
    {
      "icao": "KBRO",
      "iata": "BRO",
      "name": "Brownsville South Padre Island"
    },
    {
      "icao": "KBXM",
      "iata": "NHZ",
      "name": "Brunswick Executive"
    },
    {
      "icao": "KBQK",
      "iata": "BQK",
      "name": "Brunswick Golden Isles"
    },
    {
      "icao": "KBCE",
      "iata": "BCE",
      "name": "Bryce Canyon"
    },
    {
      "icao": "KIFP",
      "iata": "IFP",
      "name": "Bullhead City - Laughlin Bullhead"
    },
    {
      "icao": "KBYI",
      "iata": "BYI",
      "name": "Burley Municipal"
    },
    {
      "icao": "KBRL",
      "iata": "BRL",
      "name": "Burlington - Southeast Iowa Regional"
    },
    {
      "icao": "KBNO",
      "iata": "BNO",
      "name": "Burns Municipal"
    },
    {
      "icao": "KBTM",
      "iata": "BTM",
      "name": "Butte - Bert Mooney"
    },
    {
      "icao": "KFCS",
      "iata": "FCS",
      "name": "Butts AAF (Fort Carson) Air Field"
    },
    {
      "icao": "KVOK",
      "iata": "VOK",
      "name": "Camp Douglas - Volk Field"
    },
    {
      "icao": "KADW",
      "iata": "ADW",
      "name": "Camp Springs - Joint Base Andrews"
    },
    {
      "icao": "KHOP",
      "iata": "HOP",
      "name": "Campbell Army Airfield (Fort Campbell)"
    },
    {
      "icao": "KCGI",
      "iata": "CGI",
      "name": "Cape Girardeau Regional"
    },
    {
      "icao": "PALU",
      "iata": "LUR",
      "name": "Cape Lisburne LRRS"
    },
    {
      "icao": "PAEH",
      "iata": "EHM",
      "name": "Cape Newenham LRRS"
    },
    {
      "icao": "PACZ",
      "iata": "CZF",
      "name": "Cape Romanzof LRRS"
    },
    {
      "icao": "KCAR",
      "iata": "CAR",
      "name": "Caribou Municipal"
    },
    {
      "icao": "KCNM",
      "iata": "CNM",
      "name": "Carlsbad - Cavern City Air Terminal"
    },
    {
      "icao": "KCRQ",
      "iata": "CLD",
      "name": "Carlsbad - McClellan-Palomar"
    },
    {
      "icao": "KCXP",
      "iata": "CSN",
      "name": "Carson City - Carson"
    },
    {
      "icao": "KCPR",
      "iata": "CPR",
      "name": "Casper-Natrona County"
    },
    {
      "icao": "KCDC",
      "iata": "CDC",
      "name": "Cedar City Regional"
    },
    {
      "icao": "KCID",
      "iata": "CID",
      "name": "Cedar Rapids - The Eastern Iowa"
    },
    {
      "icao": "KCDR",
      "iata": "CDR",
      "name": "Chadron Municipal"
    },
    {
      "icao": "KCNU",
      "iata": "CNU",
      "name": "Chanute Martin Johnson"
    },
    {
      "icao": "KCCY",
      "iata": "CCY",
      "name": "Charles City - Northeast Iowa Regional"
    },
    {
      "icao": "KCRW",
      "iata": "CRW",
      "name": "Charleston - Yeager"
    },
    {
      "icao": "KCHO",
      "iata": "CHO",
      "name": "Charlottesville Albemarle"
    },
    {
      "icao": "KCHA",
      "iata": "CHA",
      "name": "Chattanooga Metropolitan Airport (Lovell Field)"
    },
    {
      "icao": "KJHW",
      "iata": "JHW",
      "name": "Chautauqua County-Jamestown"
    },
    {
      "icao": "KNKT",
      "iata": "",
      "name": "Cherry Point MCAS / Cunningham Field/"
    },
    {
      "icao": "KCYS",
      "iata": "CYS",
      "name": "Cheyenne Regional Jerry Olson Field"
    },
    {
      "icao": "KRFD",
      "iata": "RFD",
      "name": "Chicago/Rockford - Chicago Rockford"
    },
    {
      "icao": "KDPA",
      "iata": "DPA",
      "name": "Chicago/West Chicago - Dupage"
    },
    {
      "icao": "KCDS",
      "iata": "CDS",
      "name": "Childress Municipal"
    },
    {
      "icao": "KLUK",
      "iata": "LUK",
      "name": "Cincinnati Municipal Airport Lunken Field"
    },
    {
      "icao": "PACL",
      "iata": "",
      "name": "Clear"
    },
    {
      "icao": "KBKL",
      "iata": "BKL",
      "name": "Cleveland - Burke Lakefront"
    },
    {
      "icao": "KCGF",
      "iata": "CGF",
      "name": "Cleveland - Cuyahoga County"
    },
    {
      "icao": "KCVS",
      "iata": "CVS",
      "name": "Clovis - Cannon Air Force Base"
    },
    {
      "icao": "KCVN",
      "iata": "CVN",
      "name": "Clovis Municipal"
    },
    {
      "icao": "KXMR",
      "iata": "",
      "name": "Cocoa Beach - Cape Canaveral SFS Skid Strip"
    },
    {
      "icao": "KCOF",
      "iata": "COF",
      "name": "Cocoa Beach - Patrick Space Force Base"
    },
    {
      "icao": "KCOD",
      "iata": "COD",
      "name": "Cody - Yellowstone Regional"
    },
    {
      "icao": "KCOE",
      "iata": "COE",
      "name": "Coeur D'Alene Airport - Pappy Boyington Field"
    },
    {
      "icao": "PACD",
      "iata": "CDB",
      "name": "Cold Bay"
    },
    {
      "icao": "KCLL",
      "iata": "CLL",
      "name": "College Station - Easterwood Field"
    },
    {
      "icao": "KCUB",
      "iata": "CUB",
      "name": "Columbia - Jim Hamilton L.B. Owens"
    },
    {
      "icao": "KCAE",
      "iata": "CAE",
      "name": "Columbia Metropolitan"
    },
    {
      "icao": "KCOU",
      "iata": "COU",
      "name": "Columbia Regional"
    },
    {
      "icao": "KCSG",
      "iata": "CSG",
      "name": "Columbus"
    },
    {
      "icao": "KLCK",
      "iata": "LCK",
      "name": "Columbus - Rickenbacker"
    },
    {
      "icao": "KOSU",
      "iata": "OSU",
      "name": "Columbus - The Ohio State University Airport - Don Scott Field"
    },
    {
      "icao": "KCBM",
      "iata": "CBM",
      "name": "Columbus Air Force Base"
    },
    {
      "icao": "KBAK",
      "iata": "CLU",
      "name": "Columbus Municipal"
    },
    {
      "icao": "KOLU",
      "iata": "OLU",
      "name": "Columbus Municipal"
    },
    {
      "icao": "KGTR",
      "iata": "GTR",
      "name": "Columbus/W Point/Starkville - Golden Triangle Regional"
    },
    {
      "icao": "KCCR",
      "iata": "CCR",
      "name": "Concord - Buchanan Field"
    },
    {
      "icao": "KCON",
      "iata": "CON",
      "name": "Concord Municipal"
    },
    {
      "icao": "KJQF",
      "iata": "USA",
      "name": "Concord-Padgett Regional"
    },
    {
      "icao": "KCXO",
      "iata": "CXO",
      "name": "Conroe-North Houston Regional"
    },
    {
      "icao": "PACV",
      "iata": "CDV",
      "name": "Cordova - Merle K (Mudhole) Smith"
    },
    {
      "icao": "KCRP",
      "iata": "CRP",
      "name": "Corpus Christi"
    },
    {
      "icao": "KCEZ",
      "iata": "CEZ",
      "name": "Cortez Municipal"
    },
    {
      "icao": "KCVO",
      "iata": "CVO",
      "name": "Corvallis Municipal"
    },
    {
      "icao": "KCEC",
      "iata": "CEC",
      "name": "Crescent City - Jack Mc Namara Field"
    },
    {
      "icao": "KCEW",
      "iata": "CEW",
      "name": "Crestview - Bob Sikes"
    },
    {
      "icao": "KEGI",
      "iata": "EGI",
      "name": "Crestview - Duke Field"
    },
    {
      "icao": "KCSV",
      "iata": "CSV",
      "name": "Crossville Memorial Airport Whitson Field"
    },
    {
      "icao": "KCTB",
      "iata": "CTB",
      "name": "Cut Bank"
    },
    {
      "icao": "KDHT",
      "iata": "DHT",
      "name": "Dalhart Municipal"
    },
    {
      "icao": "KDLS",
      "iata": "DLS",
      "name": "Dallesport / The Dalles - Columbia Gorge Regional"
    },
    {
      "icao": "KDXR",
      "iata": "DXR",
      "name": "Danbury Municipal"
    },
    {
      "icao": "KDAN",
      "iata": "DAN",
      "name": "Danville Regional"
    },
    {
      "icao": "KFFO",
      "iata": "FFO",
      "name": "Dayton - Wright-Patterson Air Force Base"
    },
    {
      "icao": "KDAB",
      "iata": "DAB",
      "name": "Daytona Beach"
    },
    {
      "icao": "KDRI",
      "iata": "DRI",
      "name": "DeRidder - Beauregard Regional"
    },
    {
      "icao": "PASC",
      "iata": "SCC",
      "name": "Deadhorse"
    },
    {
      "icao": "KDEC",
      "iata": "DEC",
      "name": "Decatur"
    },
    {
      "icao": "PADE",
      "iata": "DRG",
      "name": "Deering"
    },
    {
      "icao": "KDRT",
      "iata": "DRT",
      "name": "Del Rio"
    },
    {
      "icao": "KDLF",
      "iata": "DLF",
      "name": "Del Rio - Laughlin Air Force Base"
    },
    {
      "icao": "PABI",
      "iata": "BIG",
      "name": "Delta Junction Ft Greely - Allen Army Airfield"
    },
    {
      "icao": "KDMN",
      "iata": "DMN",
      "name": "Deming Municipal"
    },
    {
      "icao": "KGYI",
      "iata": "PNX",
      "name": "Denison - North Texas Regional Airport Perrin Field"
    },
    {
      "icao": "KAPA",
      "iata": "APA",
      "name": "Denver - Centennial"
    },
    {
      "icao": "KBJC",
      "iata": "BJC",
      "name": "Denver - Rocky Mountain Metropolitan"
    },
    {
      "icao": "KDTS",
      "iata": "DSI",
      "name": "Destin Executive"
    },
    {
      "icao": "KYIP",
      "iata": "YIP",
      "name": "Detroit - Willow Run"
    },
    {
      "icao": "KDVL",
      "iata": "DVL",
      "name": "Devils Lake Regional"
    },
    {
      "icao": "KDIK",
      "iata": "DIK",
      "name": "Dickinson Theodore Roosevelt Regional"
    },
    {
      "icao": "PADL",
      "iata": "DLG",
      "name": "Dillingham"
    },
    {
      "icao": "KDDC",
      "iata": "DDC",
      "name": "Dodge City Regional"
    },
    {
      "icao": "KDHN",
      "iata": "DHN",
      "name": "Dothan Regional"
    },
    {
      "icao": "KDUG",
      "iata": "DUG",
      "name": "Douglas Bisbee - Bisbee Douglas"
    },
    {
      "icao": "KDOV",
      "iata": "DOV",
      "name": "Dover Civil Air Terminal/Dover Air Force Base"
    },
    {
      "icao": "KDUJ",
      "iata": "DUJ",
      "name": "DuBois Regional"
    },
    {
      "icao": "KDBQ",
      "iata": "DBQ",
      "name": "Dubuque Regional"
    },
    {
      "icao": "KDLH",
      "iata": "DLH",
      "name": "Duluth"
    },
    {
      "icao": "KDRO",
      "iata": "DRO",
      "name": "Durango La Plata County"
    },
    {
      "icao": "KDUA",
      "iata": "DUA",
      "name": "Durant Regional Airport - Eaker Field"
    },
    {
      "icao": "KEGE",
      "iata": "EGE",
      "name": "Eagle County Regional"
    },
    {
      "icao": "KFRG",
      "iata": "FRG",
      "name": "East Farmingdale - Republic"
    },
    {
      "icao": "KPDT",
      "iata": "PDT",
      "name": "Eastern Oregon Regional Airport at Pendleton"
    },
    {
      "icao": "KMMT",
      "iata": "MMT",
      "name": "Eastover - Mc Entire Joint National Guard Base"
    },
    {
      "icao": "KORS",
      "iata": "ESD",
      "name": "Eastsound - Orcas Island"
    },
    {
      "icao": "KEAU",
      "iata": "EAU",
      "name": "Eau Claire - Chippewa Valley Regional"
    },
    {
      "icao": "KEDW",
      "iata": "EDW",
      "name": "Edwards Air Force Base"
    },
    {
      "icao": "PAII",
      "iata": "EGX",
      "name": "Egegik"
    },
    {
      "icao": "KNJK",
      "iata": "NJK",
      "name": "El Centro NAF Airport (Vraciu Field)"
    },
    {
      "icao": "KELD",
      "iata": "ELD",
      "name": "El Dorado - South Arkansas Regional Airport at Goodwin Field"
    },
    {
      "icao": "KECG",
      "iata": "ECG",
      "name": "Elizabeth City Regional Airport & Coast Guard Air Station"
    },
    {
      "icao": "KEKN",
      "iata": "EKN",
      "name": "Elkins-Randolph County Regional"
    },
    {
      "icao": "KEKO",
      "iata": "EKO",
      "name": "Elko Regional"
    },
    {
      "icao": "KELM",
      "iata": "ELM",
      "name": "Elmira/Corning - Elmira Corning Regional"
    },
    {
      "icao": "KELY",
      "iata": "ELY",
      "name": "Ely Airport Yelland Field"
    },
    {
      "icao": "KELO",
      "iata": "LYU",
      "name": "Ely Municipal"
    },
    {
      "icao": "PAEM",
      "iata": "EMK",
      "name": "Emmonak"
    },
    {
      "icao": "KEND",
      "iata": "END",
      "name": "Enid - Vance Air Force Base"
    },
    {
      "icao": "KERI",
      "iata": "ERI",
      "name": "Erie International Tom Ridge Field"
    },
    {
      "icao": "KESC",
      "iata": "ESC",
      "name": "Escanaba - Delta County"
    },
    {
      "icao": "KEUG",
      "iata": "EUG",
      "name": "Eugene"
    },
    {
      "icao": "KTOL",
      "iata": "TOL",
      "name": "Eugene F. Kranz Toledo Express"
    },
    {
      "icao": "KEKA",
      "iata": "EKA",
      "name": "Eureka - Murray Field"
    },
    {
      "icao": "KEVW",
      "iata": "EVW",
      "name": "Evanston-Uinta County Airport-Burns Field"
    },
    {
      "icao": "KEVV",
      "iata": "EVV",
      "name": "Evansville Regional"
    },
    {
      "icao": "KPAE",
      "iata": "PAE",
      "name": "Everett - Seattle Paine Field"
    },
    {
      "icao": "KTTN",
      "iata": "TTN",
      "name": "Ewing Township - Trenton Mercer"
    },
    {
      "icao": "PAFA",
      "iata": "FAI",
      "name": "Fairbanks"
    },
    {
      "icao": "PAEI",
      "iata": "EIL",
      "name": "Fairbanks - Eielson Air Force Base"
    },
    {
      "icao": "PAFB",
      "iata": "FBK",
      "name": "Fairbanks - Ladd Army Airfield"
    },
    {
      "icao": "KSUU",
      "iata": "SUU",
      "name": "Fairfield - Travis Air Force Base"
    },
    {
      "icao": "KNFL",
      "iata": "NFL",
      "name": "Fallon Naval Air Station"
    },
    {
      "icao": "KFAR",
      "iata": "FAR",
      "name": "Fargo - Hector"
    },
    {
      "icao": "KFMN",
      "iata": "FMN",
      "name": "Farmington - Four Corners Regional"
    },
    {
      "icao": "KFYV",
      "iata": "FYV",
      "name": "Fayetteville - Drake Field"
    },
    {
      "icao": "KFAY",
      "iata": "FAY",
      "name": "Fayetteville Regional Airport - Grannis Field"
    },
    {
      "icao": "KXNA",
      "iata": "XNA",
      "name": "Fayetteville/Springdale/Rogers - Northwest Arkansas National"
    },
    {
      "icao": "KFDY",
      "iata": "FDY",
      "name": "Findlay"
    },
    {
      "icao": "KFLG",
      "iata": "FLG",
      "name": "Flagstaff Pulliam"
    },
    {
      "icao": "KFNT",
      "iata": "FNT",
      "name": "Flint - Bishop"
    },
    {
      "icao": "KFLO",
      "iata": "FLO",
      "name": "Florence Regional"
    },
    {
      "icao": "KMTH",
      "iata": "MTH",
      "name": "Florida Keys Marathon"
    },
    {
      "icao": "KDAA",
      "iata": "DAA",
      "name": "Fort Belvoir - Davison Army Air Field"
    },
    {
      "icao": "KLSF",
      "iata": "LSF",
      "name": "Fort Benning - Lawson Army Air Field"
    },
    {
      "icao": "KBIF",
      "iata": "BIF",
      "name": "Fort Bliss/El Paso - Biggs Army Air Field (Fort Bliss)"
    },
    {
      "icao": "KPOB",
      "iata": "POB",
      "name": "Fort Bragg - Pope Field"
    },
    {
      "icao": "KFBG",
      "iata": "FBG",
      "name": "Fort Bragg - Simmons Army Air Field"
    },
    {
      "icao": "KGRK",
      "iata": "GRK",
      "name": "Fort Cavazos - Killeen Regional Airport / Robert Gray Army Airfield"
    },
    {
      "icao": "KFOD",
      "iata": "FOD",
      "name": "Fort Dodge Regional"
    },
    {
      "icao": "KGTB",
      "iata": "",
      "name": "Fort Drum - Wheeler Sack Army Air Field"
    },
    {
      "icao": "KFHU",
      "iata": "FHU",
      "name": "Fort Huachuca / Sierra Vista - Sierra Vista Municipal Airport / Libby Army Air Field"
    },
    {
      "icao": "KMUI",
      "iata": "MUI",
      "name": "Fort Indiantown Gap(Annville) - Muir Army Air Field (Fort Indiantown Gap)"
    },
    {
      "icao": "KBYS",
      "iata": "BYS",
      "name": "Fort Irwin/Barstow - Bicycle Lake Army Air Field"
    },
    {
      "icao": "KFTK",
      "iata": "FTK",
      "name": "Fort Knox - Godman Army Air Field"
    },
    {
      "icao": "KFXE",
      "iata": "FXE",
      "name": "Fort Lauderdale Executive"
    },
    {
      "icao": "KTBN",
      "iata": "TBN",
      "name": "Fort Leonard Wood - Waynesville-St. Robert Regional Airport-Forney Field"
    },
    {
      "icao": "KGRF",
      "iata": "GRF",
      "name": "Fort Lewis/Tacoma - Gray Army Air Field"
    },
    {
      "icao": "KFME",
      "iata": "FME",
      "name": "Fort Meade(Odenton) - Fort Meade Executive"
    },
    {
      "icao": "KFMY",
      "iata": "FMY",
      "name": "Fort Myers - Page Field"
    },
    {
      "icao": "KFPR",
      "iata": "FPR",
      "name": "Fort Pierce - Treasure Coast"
    },
    {
      "icao": "KPOE",
      "iata": "POE",
      "name": "Fort Polk - Polk Army Air Field"
    },
    {
      "icao": "KFRI",
      "iata": "FRI",
      "name": "Fort Riley (Junction City) - Marshall Army Air Field"
    },
    {
      "icao": "KOZR",
      "iata": "OZR",
      "name": "Fort Rucker/Ozark - Cairns AAF (Fort Rucker) Air Field"
    },
    {
      "icao": "KFSI",
      "iata": "FSI",
      "name": "Fort Sill - Henry Post Army Air Field"
    },
    {
      "icao": "KFSM",
      "iata": "FSM",
      "name": "Fort Smith Regional"
    },
    {
      "icao": "KFST",
      "iata": "FST",
      "name": "Fort Stockton Pecos County"
    },
    {
      "icao": "KFWA",
      "iata": "FWA",
      "name": "Fort Wayne"
    },
    {
      "icao": "KFTW",
      "iata": "FTW",
      "name": "Fort Worth Meacham"
    },
    {
      "icao": "PFYU",
      "iata": "FYU",
      "name": "Fort Yukon"
    },
    {
      "icao": "KFKL",
      "iata": "FKL",
      "name": "Franklin - Venango Regional"
    },
    {
      "icao": "KMBS",
      "iata": "MBS",
      "name": "Freeland - MBS"
    },
    {
      "icao": "KFHR",
      "iata": "FRD",
      "name": "Friday Harbor"
    },
    {
      "icao": "KGNV",
      "iata": "GNV",
      "name": "Gainesville Regional"
    },
    {
      "icao": "PAGA",
      "iata": "GAL",
      "name": "Galena - Edward G. Pitka Sr"
    },
    {
      "icao": "KGUP",
      "iata": "GUP",
      "name": "Gallup Municipal"
    },
    {
      "icao": "PAGM",
      "iata": "GAM",
      "name": "Gambell"
    },
    {
      "icao": "KGCK",
      "iata": "GCK",
      "name": "Garden City Regional"
    },
    {
      "icao": "KPIA",
      "iata": "PIA",
      "name": "General Wayne A. Downing Peoria"
    },
    {
      "icao": "KGCC",
      "iata": "GCC",
      "name": "Gillette - Northeast Wyoming Regional"
    },
    {
      "icao": "KGGW",
      "iata": "GGW",
      "name": "Glasgow Valley County Airport Wokal Field"
    },
    {
      "icao": "KLUF",
      "iata": "LUF",
      "name": "Glendale - Luke Air Force Base"
    },
    {
      "icao": "KGDV",
      "iata": "GDV",
      "name": "Glendive - Dawson Community"
    },
    {
      "icao": "KGFL",
      "iata": "GFL",
      "name": "Glens Falls - Floyd Bennett Memorial"
    },
    {
      "icao": "KGSB",
      "iata": "GSB",
      "name": "Goldsboro - Seymour Johnson Air Force Base"
    },
    {
      "icao": "KGLD",
      "iata": "GLD",
      "name": "Goodland Municipal"
    },
    {
      "icao": "KGCN",
      "iata": "GCN",
      "name": "Grand Canyon - Tusayan - Grand Canyon National Park"
    },
    {
      "icao": "KGFK",
      "iata": "GFK",
      "name": "Grand Forks"
    },
    {
      "icao": "KRDR",
      "iata": "RDR",
      "name": "Grand Forks Air Force Base"
    },
    {
      "icao": "KGRI",
      "iata": "GRI",
      "name": "Grand Island - Central Nebraska Regional"
    },
    {
      "icao": "KGJT",
      "iata": "GJT",
      "name": "Grand Junction Regional"
    },
    {
      "icao": "KGTF",
      "iata": "GTF",
      "name": "Great Falls"
    },
    {
      "icao": "KBGM",
      "iata": "BGM",
      "name": "Greater Binghamton/Edwin A Link field"
    },
    {
      "icao": "KIKK",
      "iata": "IKK",
      "name": "Greater Kankakee"
    },
    {
      "icao": "KGRB",
      "iata": "GRB",
      "name": "Green Bay - Austin Straubel"
    },
    {
      "icao": "KGLH",
      "iata": "GLH",
      "name": "Greenville - Mid Delta Regional"
    },
    {
      "icao": "KGMU",
      "iata": "GMU",
      "name": "Greenville Downtown"
    },
    {
      "icao": "KGSP",
      "iata": "GSP",
      "name": "Greenville/Greer/Spartanburg - Greenville-Spartanburg"
    },
    {
      "icao": "KGWO",
      "iata": "GWO",
      "name": "Greenwood–Leflore"
    },
    {
      "icao": "KGON",
      "iata": "GON",
      "name": "Groton New London"
    },
    {
      "icao": "KGPT",
      "iata": "GPT",
      "name": "Gulfport Biloxi"
    },
    {
      "icao": "PAGK",
      "iata": "GKN",
      "name": "Gulkana"
    },
    {
      "icao": "KGUC",
      "iata": "GUC",
      "name": "Gunnison Crested Butte Regional"
    },
    {
      "icao": "PAGS",
      "iata": "GST",
      "name": "Gustavus"
    },
    {
      "icao": "KGUY",
      "iata": "GUY",
      "name": "Guymon Municipal"
    },
    {
      "icao": "KSAW",
      "iata": "MQT",
      "name": "Gwinn - Marquette/Sawyer"
    },
    {
      "icao": "KHGR",
      "iata": "HGR",
      "name": "Hagerstown Regional Richard A Henson Field"
    },
    {
      "icao": "KSUN",
      "iata": "SUN",
      "name": "Hailey - Friedman Memorial"
    },
    {
      "icao": "PAHN",
      "iata": "HNS",
      "name": "Haines"
    },
    {
      "icao": "KLFI",
      "iata": "LFI",
      "name": "Hampton - Langley Air Force Base"
    },
    {
      "icao": "PHHN",
      "iata": "HNM",
      "name": "Hana"
    },
    {
      "icao": "KCMX",
      "iata": "CMX",
      "name": "Hancock - Houghton County Memorial"
    },
    {
      "icao": "KBHB",
      "iata": "BHB",
      "name": "Hancock County-Bar Harbor"
    },
    {
      "icao": "KHRL",
      "iata": "HRL",
      "name": "Harlingen - Valley"
    },
    {
      "icao": "KMDT",
      "iata": "MDT",
      "name": "Harrisburg"
    },
    {
      "icao": "KHRO",
      "iata": "HRO",
      "name": "Harrison - Boone County"
    },
    {
      "icao": "KHFD",
      "iata": "HFD",
      "name": "Hartford Brainard"
    },
    {
      "icao": "KHBG",
      "iata": "HBG",
      "name": "Hattiesburg Bobby L Chain Municipal"
    },
    {
      "icao": "KHVR",
      "iata": "HVR",
      "name": "Havre City County"
    },
    {
      "icao": "KHDN",
      "iata": "HDN",
      "name": "Hayden - Yampa Valley"
    },
    {
      "icao": "KHYS",
      "iata": "HYS",
      "name": "Hays Regional"
    },
    {
      "icao": "KHYR",
      "iata": "HYR",
      "name": "Hayward - Sawyer County"
    },
    {
      "icao": "KHLN",
      "iata": "HLN",
      "name": "Helena Regional"
    },
    {
      "icao": "KHIB",
      "iata": "HIB",
      "name": "Hibbing - Range Regional"
    },
    {
      "icao": "KHKY",
      "iata": "HKY",
      "name": "Hickory Regional"
    },
    {
      "icao": "PHTO",
      "iata": "ITO",
      "name": "Hilo"
    },
    {
      "icao": "KHXD",
      "iata": "HHH",
      "name": "Hilton Head Island - Hilton Head"
    },
    {
      "icao": "KHBR",
      "iata": "HBR",
      "name": "Hobart Regional"
    },
    {
      "icao": "KHOB",
      "iata": "HOB",
      "name": "Hobbs - Lea County Regional"
    },
    {
      "icao": "KHWO",
      "iata": "HWO",
      "name": "Hollywood - North Perry"
    },
    {
      "icao": "PAHC",
      "iata": "HCR",
      "name": "Holy Cross"
    },
    {
      "icao": "PAHO",
      "iata": "HOM",
      "name": "Homer"
    },
    {
      "icao": "KHST",
      "iata": "HST",
      "name": "Homestead Air Reserve Base"
    },
    {
      "icao": "PHIK",
      "iata": "",
      "name": "Honolulu - Hickam Air Force Base"
    },
    {
      "icao": "KHQM",
      "iata": "HQM",
      "name": "Hoquiam - Bowerman"
    },
    {
      "icao": "KHOT",
      "iata": "HOT",
      "name": "Hot Springs - Memorial Field"
    },
    {
      "icao": "KHUL",
      "iata": "HUL",
      "name": "Houlton"
    },
    {
      "icao": "KEFD",
      "iata": "EFD",
      "name": "Houston - Ellington"
    },
    {
      "icao": "KSGR",
      "iata": "SGR",
      "name": "Houston - Sugar Land Regional"
    },
    {
      "icao": "KHTS",
      "iata": "HTS",
      "name": "Huntington - Tri-State Airport / Milton J. Ferguson Field"
    },
    {
      "icao": "KHSV",
      "iata": "HSV",
      "name": "Huntsville"
    },
    {
      "icao": "KUTS",
      "iata": "HTV",
      "name": "Huntsville Regional"
    },
    {
      "icao": "KHON",
      "iata": "HON",
      "name": "Huron Regional"
    },
    {
      "icao": "PAHL",
      "iata": "HSL",
      "name": "Huslia"
    },
    {
      "icao": "KHUT",
      "iata": "HUT",
      "name": "Hutchinson Municipal"
    },
    {
      "icao": "KHYA",
      "iata": "HYA",
      "name": "Hyannis - Cape Cod Gateway"
    },
    {
      "icao": "KIDA",
      "iata": "IDA",
      "name": "Idaho Falls Regional"
    },
    {
      "icao": "PAIL",
      "iata": "ILI",
      "name": "Iliamna"
    },
    {
      "icao": "KIPL",
      "iata": "IPL",
      "name": "Imperial County"
    },
    {
      "icao": "KINL",
      "iata": "INL",
      "name": "International Falls - Falls"
    },
    {
      "icao": "KISP",
      "iata": "ISP",
      "name": "Islip - Long Island MacArthur"
    },
    {
      "icao": "KITH",
      "iata": "ITH",
      "name": "Ithaca Tompkins Regional"
    },
    {
      "icao": "KHHR",
      "iata": "HHR",
      "name": "Jack Northrop Field Hawthorne Municipal"
    },
    {
      "icao": "KMKL",
      "iata": "MKL",
      "name": "Jackson - McKellar-Sipes Regional"
    },
    {
      "icao": "KJXN",
      "iata": "JXN",
      "name": "Jackson County Airport/Reynolds Field"
    },
    {
      "icao": "KJAC",
      "iata": "JAC",
      "name": "Jackson Hole"
    },
    {
      "icao": "KJAN",
      "iata": "JAN",
      "name": "Jackson-Medgar Wiley Evers"
    },
    {
      "icao": "KVQQ",
      "iata": "VQQ",
      "name": "Jacksonville - Cecil"
    },
    {
      "icao": "KLRF",
      "iata": "LRF",
      "name": "Jacksonville - Little Rock Air Force Base"
    },
    {
      "icao": "KNCA",
      "iata": "",
      "name": "Jacksonville - MCAS New River / McCutcheon Field"
    },
    {
      "icao": "KNRB",
      "iata": "NRB",
      "name": "Jacksonville - Naval Station Mayport / Admiral David L McDonald Field"
    },
    {
      "icao": "KCRG",
      "iata": "CRG",
      "name": "Jacksonville Executive at Craig"
    },
    {
      "icao": "KNIP",
      "iata": "NIP",
      "name": "Jacksonville Naval Air Station (Towers Field)"
    },
    {
      "icao": "KDAY",
      "iata": "DAY",
      "name": "James M. Cox Dayton"
    },
    {
      "icao": "KJMS",
      "iata": "JMS",
      "name": "Jamestown Regional"
    },
    {
      "icao": "KJST",
      "iata": "JST",
      "name": "John Murtha Johnstown Cambria County"
    },
    {
      "icao": "KJBR",
      "iata": "JBR",
      "name": "Jonesboro Municipal"
    },
    {
      "icao": "KJLN",
      "iata": "JLN",
      "name": "Joplin Regional"
    },
    {
      "icao": "KJCT",
      "iata": "JCT",
      "name": "Junction - Kimble County"
    },
    {
      "icao": "PAJN",
      "iata": "JNU",
      "name": "Juneau"
    },
    {
      "icao": "PAFE",
      "iata": "",
      "name": "Kake"
    },
    {
      "icao": "KAZO",
      "iata": "AZO",
      "name": "Kalamazoo/Battle Creek"
    },
    {
      "icao": "KGPI",
      "iata": "FCA",
      "name": "Kalispell - Glacier Park"
    },
    {
      "icao": "PHNG",
      "iata": "NGF",
      "name": "Kaneohe Bay MCAS (Marion E. Carl Field)"
    },
    {
      "icao": "KMKC",
      "iata": "MKC",
      "name": "Kansas City - Charles B. Wheeler Downtown"
    },
    {
      "icao": "PHJR",
      "iata": "JRF",
      "name": "Kapolei - Kalaeloa"
    },
    {
      "icao": "PHMK",
      "iata": "MKK",
      "name": "Kaunakakai - Molokai"
    },
    {
      "icao": "KEAR",
      "iata": "EAR",
      "name": "Kearney Regional"
    },
    {
      "icao": "KEEN",
      "iata": "EEN",
      "name": "Keene - Dillant Hopkins"
    },
    {
      "icao": "PHBK",
      "iata": "BKH",
      "name": "Kekaha - Barking Sands"
    },
    {
      "icao": "KKLS",
      "iata": "KLS",
      "name": "Kelso - Southwest Washington Regional"
    },
    {
      "icao": "PAEN",
      "iata": "ENA",
      "name": "Kenai Municipal"
    },
    {
      "icao": "KENW",
      "iata": "ENW",
      "name": "Kenosha Regional"
    },
    {
      "icao": "PAKT",
      "iata": "KTN",
      "name": "Ketchikan"
    },
    {
      "icao": "KMEI",
      "iata": "MEI",
      "name": "Key Field / Meridian Regional"
    },
    {
      "icao": "KEYW",
      "iata": "EYW",
      "name": "Key West"
    },
    {
      "icao": "PAIK",
      "iata": "IAN",
      "name": "Kiana - Bob Baker Memorial"
    },
    {
      "icao": "KCIU",
      "iata": "CIU",
      "name": "Kincheloe - Chippewa County"
    },
    {
      "icao": "PAKN",
      "iata": "AKN",
      "name": "King Salmon"
    },
    {
      "icao": "KIGM",
      "iata": "IGM",
      "name": "Kingman"
    },
    {
      "icao": "KIMT",
      "iata": "IMT",
      "name": "Kingsford - Ford"
    },
    {
      "icao": "KNQI",
      "iata": "NQI",
      "name": "Kingsville Naval Air Station"
    },
    {
      "icao": "KISO",
      "iata": "ISO",
      "name": "Kinston Regional Jetport At Stallings Field"
    },
    {
      "icao": "KIRK",
      "iata": "IRK",
      "name": "Kirksville Regional"
    },
    {
      "icao": "KLMT",
      "iata": "LMT",
      "name": "Klamath Falls - Crater Lake-Klamath Regional"
    },
    {
      "icao": "PAKW",
      "iata": "KLW",
      "name": "Klawock"
    },
    {
      "icao": "KSZL",
      "iata": "SZL",
      "name": "Knob Noster - Whiteman Air Force Base"
    },
    {
      "icao": "PADQ",
      "iata": "ADQ",
      "name": "Kodiak"
    },
    {
      "icao": "PAOT",
      "iata": "OTZ",
      "name": "Kotzebue - Ralph Wien Memorial"
    },
    {
      "icao": "KLSE",
      "iata": "LSE",
      "name": "La Crosse Regional"
    },
    {
      "icao": "KLFT",
      "iata": "LFT",
      "name": "Lafayette Regional"
    },
    {
      "icao": "PHJH",
      "iata": "JHM",
      "name": "Lahaina - Kapalua"
    },
    {
      "icao": "KLCH",
      "iata": "LCH",
      "name": "Lake Charles Regional"
    },
    {
      "icao": "KHII",
      "iata": "HII",
      "name": "Lake Havasu City"
    },
    {
      "icao": "KNEL",
      "iata": "NEL",
      "name": "Lakehurst Maxfield Field"
    },
    {
      "icao": "KLAL",
      "iata": "LAL",
      "name": "Lakeland Linder"
    },
    {
      "icao": "KLAA",
      "iata": "LAA",
      "name": "Lamar - Southeast Colorado Regional"
    },
    {
      "icao": "PHNY",
      "iata": "LNY",
      "name": "Lanai City - Lanai"
    },
    {
      "icao": "KLNS",
      "iata": "LNS",
      "name": "Lancaster"
    },
    {
      "icao": "KWJF",
      "iata": "WJF",
      "name": "Lancaster - General William J Fox Airfield"
    },
    {
      "icao": "KLND",
      "iata": "LND",
      "name": "Lander - Hunt Field"
    },
    {
      "icao": "KLAN",
      "iata": "LAN",
      "name": "Lansing - Capital Region"
    },
    {
      "icao": "KLAR",
      "iata": "LAR",
      "name": "Laramie Regional"
    },
    {
      "icao": "KLRD",
      "iata": "LRD",
      "name": "Laredo"
    },
    {
      "icao": "KLRU",
      "iata": "LRU",
      "name": "Las Cruces"
    },
    {
      "icao": "KLSV",
      "iata": "LSV",
      "name": "Las Vegas - Nellis Air Force Base"
    },
    {
      "icao": "KLVS",
      "iata": "LVS",
      "name": "Las Vegas Municipal"
    },
    {
      "icao": "KLBE",
      "iata": "LBE",
      "name": "Latrobe - Arnold Palmer Regional"
    },
    {
      "icao": "KLWM",
      "iata": "LWM",
      "name": "Lawrence Municipal"
    },
    {
      "icao": "KLAW",
      "iata": "LAW",
      "name": "Lawton Fort Sill Regional"
    },
    {
      "icao": "KLEB",
      "iata": "LEB",
      "name": "Lebanon Municipal"
    },
    {
      "icao": "KLEE",
      "iata": "LEE",
      "name": "Leesburg"
    },
    {
      "icao": "KNLC",
      "iata": "NLC",
      "name": "Lemoore Naval Air Station (Reeves Field)"
    },
    {
      "icao": "KLWB",
      "iata": "LWB",
      "name": "Lewisburg - Greenbrier Valley"
    },
    {
      "icao": "KLWS",
      "iata": "LWS",
      "name": "Lewiston Nez Perce County"
    },
    {
      "icao": "KLWT",
      "iata": "LWT",
      "name": "Lewistown Municipal"
    },
    {
      "icao": "KLEX",
      "iata": "LEX",
      "name": "Lexington - Blue Grass"
    },
    {
      "icao": "KLBL",
      "iata": "LBL",
      "name": "Liberal Mid-America Regional"
    },
    {
      "icao": "KLNK",
      "iata": "LNK",
      "name": "Lincoln"
    },
    {
      "icao": "KLIT",
      "iata": "LIT",
      "name": "Little Rock - Bill & Hillary Clinton National Airport/Adams Field"
    },
    {
      "icao": "KLVM",
      "iata": "LVM",
      "name": "Livingston - Mission Field"
    },
    {
      "icao": "KLGU",
      "iata": "LGU",
      "name": "Logan-Cache"
    },
    {
      "icao": "KVBG",
      "iata": "VBG",
      "name": "Lompoc - Vandenberg Space Force Base"
    },
    {
      "icao": "KLOZ",
      "iata": "LOZ",
      "name": "London-Corbin Airport/Magee Field"
    },
    {
      "icao": "KGGG",
      "iata": "GGG",
      "name": "Longview - East Texas Regional"
    },
    {
      "icao": "KSLI",
      "iata": "",
      "name": "Los Alamitos Army Air Field"
    },
    {
      "icao": "KLOU",
      "iata": "LOU",
      "name": "Louisville - Bowman Field"
    },
    {
      "icao": "KFNL",
      "iata": "FNL",
      "name": "Loveland - Northern Colorado Regional"
    },
    {
      "icao": "KLOL",
      "iata": "LOL",
      "name": "Lovelock - Derby Field"
    },
    {
      "icao": "KLBB",
      "iata": "LBB",
      "name": "Lubbock Preston Smith"
    },
    {
      "icao": "KLFK",
      "iata": "LFK",
      "name": "Lufkin - Angelina County"
    },
    {
      "icao": "KLBT",
      "iata": "LBT",
      "name": "Lumberton Regional"
    },
    {
      "icao": "KLYH",
      "iata": "LYH",
      "name": "Lynchburg Regional Airport - Preston Glenn Field"
    },
    {
      "icao": "KMCN",
      "iata": "MCN",
      "name": "Macon - Middle Georgia Regional"
    },
    {
      "icao": "KMSN",
      "iata": "MSN",
      "name": "Madison - Dane County Regional Truax Field"
    },
    {
      "icao": "KHEF",
      "iata": "MNZ",
      "name": "Manassas Regional Airport/Harry P. Davis Field"
    },
    {
      "icao": "KMHT",
      "iata": "MHT",
      "name": "Manchester-Boston Regional"
    },
    {
      "icao": "KMHK",
      "iata": "MHK",
      "name": "Manhattan Regional"
    },
    {
      "icao": "KMFD",
      "iata": "MFD",
      "name": "Mansfield Lahm Regional"
    },
    {
      "icao": "KMGE",
      "iata": "MGE",
      "name": "Marietta - Dobbins Air Reserve Base"
    },
    {
      "icao": "KMWA",
      "iata": "MWA",
      "name": "Marion - Veterans Airport of Southern Illinois"
    },
    {
      "icao": "KMRB",
      "iata": "MRB",
      "name": "Martinsburg - Eastern WV Regional Airport/Shepherd Field"
    },
    {
      "icao": "KMYV",
      "iata": "MYV",
      "name": "Marysville - Yuba County"
    },
    {
      "icao": "KMCW",
      "iata": "MCW",
      "name": "Mason City Municipal"
    },
    {
      "icao": "KMSS",
      "iata": "MSS",
      "name": "Massena International Airport Richards Field"
    },
    {
      "icao": "KMLC",
      "iata": "MLC",
      "name": "Mc Alester Regional"
    },
    {
      "icao": "KMFE",
      "iata": "MFE",
      "name": "McAllen Miller"
    },
    {
      "icao": "KMYL",
      "iata": "MYL",
      "name": "McCall Municipal"
    },
    {
      "icao": "KMCB",
      "iata": "MCB",
      "name": "McComb-Pike County Airport / John E Lewis Field"
    },
    {
      "icao": "KMCK",
      "iata": "MCK",
      "name": "McCook Ben Nelson Regional"
    },
    {
      "icao": "PAMC",
      "iata": "MCG",
      "name": "McGrath"
    },
    {
      "icao": "KMMV",
      "iata": "",
      "name": "McMinnville Municipal"
    },
    {
      "icao": "PAMY",
      "iata": "MYU",
      "name": "Mekoryuk"
    },
    {
      "icao": "KMLB",
      "iata": "MLB",
      "name": "Melbourne Orlando"
    },
    {
      "icao": "KMER",
      "iata": "MER",
      "name": "Merced - Castle"
    },
    {
      "icao": "KMCE",
      "iata": "MCE",
      "name": "Merced Regional Macready Field"
    },
    {
      "icao": "KDRA",
      "iata": "DRA",
      "name": "Mercury - Desert Rock"
    },
    {
      "icao": "KIWA",
      "iata": "AZA",
      "name": "Mesa Gateway"
    },
    {
      "icao": "PANT",
      "iata": "ANN",
      "name": "Metlakatla - Annette Island"
    },
    {
      "icao": "KTMB",
      "iata": "TMB",
      "name": "Miami Executive"
    },
    {
      "icao": "KOPF",
      "iata": "OPF",
      "name": "Miami-Opa Locka Executive"
    },
    {
      "icao": "KMGC",
      "iata": "MGC",
      "name": "Michigan City Municipal"
    },
    {
      "icao": "KMAF",
      "iata": "MAF",
      "name": "Midland International Air and Space Port"
    },
    {
      "icao": "KMLS",
      "iata": "MLS",
      "name": "Miles City Airport - Frank Wiley Field"
    },
    {
      "icao": "KNQA",
      "iata": "NQA",
      "name": "Millington-Memphis"
    },
    {
      "icao": "KMIV",
      "iata": "MIV",
      "name": "Millville Municipal"
    },
    {
      "icao": "KNSE",
      "iata": "NSE",
      "name": "Milton - Whiting Field Naval Air Station - North"
    },
    {
      "icao": "KMWL",
      "iata": "MWL",
      "name": "Mineral Wells Regional"
    },
    {
      "icao": "KMOT",
      "iata": "MOT",
      "name": "Minot"
    },
    {
      "icao": "KMIB",
      "iata": "MIB",
      "name": "Minot Air Force Base"
    },
    {
      "icao": "KMSO",
      "iata": "MSO",
      "name": "Missoula Montana"
    },
    {
      "icao": "KCNY",
      "iata": "CNY",
      "name": "Moab - Canyonlands Regional"
    },
    {
      "icao": "KBFM",
      "iata": "BFM",
      "name": "Mobile Downtown"
    },
    {
      "icao": "KMOB",
      "iata": "MOB",
      "name": "Mobile Regional"
    },
    {
      "icao": "KMBG",
      "iata": "MBG",
      "name": "Mobridge Municipal"
    },
    {
      "icao": "KMOD",
      "iata": "MOD",
      "name": "Modesto City Co-Harry Sham Field"
    },
    {
      "icao": "KMHV",
      "iata": "MHV",
      "name": "Mojave Air &  Space Port"
    },
    {
      "icao": "KMLI",
      "iata": "MLI",
      "name": "Moline - Quad City"
    },
    {
      "icao": "KMLU",
      "iata": "MLU",
      "name": "Monroe Regional"
    },
    {
      "icao": "KMRY",
      "iata": "MRY",
      "name": "Monterey Regional"
    },
    {
      "icao": "KMXF",
      "iata": "MXF",
      "name": "Montgomery - Maxwell Air Force Base"
    },
    {
      "icao": "KMGM",
      "iata": "MGM",
      "name": "Montgomery Regional (Dannelly Field)"
    },
    {
      "icao": "KMTJ",
      "iata": "MTJ",
      "name": "Montrose Regional"
    },
    {
      "icao": "KMGW",
      "iata": "MGW",
      "name": "Morgantown Municipal Airport Walter L. (Bill) Hart Field"
    },
    {
      "icao": "KMMU",
      "iata": "MMU",
      "name": "Morristown Municipal"
    },
    {
      "icao": "KPIB",
      "iata": "PIB",
      "name": "Moselle - Hattiesburg Laurel Regional"
    },
    {
      "icao": "KMWH",
      "iata": "MWH",
      "name": "Moses Lake - Grant County"
    },
    {
      "icao": "KCWA",
      "iata": "CWA",
      "name": "Mosinee - Central Wisconsin"
    },
    {
      "icao": "KMTC",
      "iata": "MTC",
      "name": "Mount Clemens - Selfridge Air National Guard Base"
    },
    {
      "icao": "KBPK",
      "iata": "WMH",
      "name": "Mountain Home - Ozark Regional"
    },
    {
      "icao": "KMUO",
      "iata": "MUO",
      "name": "Mountain Home Air Force Base"
    },
    {
      "icao": "KNUQ",
      "iata": "NUQ",
      "name": "Mountain View - Moffett Federal Airfield"
    },
    {
      "icao": "KMIE",
      "iata": "MIE",
      "name": "Muncie - Delaware County Johnson Field"
    },
    {
      "icao": "KMDH",
      "iata": "MDH",
      "name": "Murphysboro - Southern Illinois"
    },
    {
      "icao": "KMSL",
      "iata": "MSL",
      "name": "Muscle Shoals - Northwest Alabama Regional"
    },
    {
      "icao": "KMKG",
      "iata": "MKG",
      "name": "Muskegon County"
    },
    {
      "icao": "KNFW",
      "iata": "FWH",
      "name": "NAS Fort Worth JRB / Carswell Field"
    },
    {
      "icao": "KACK",
      "iata": "ACK",
      "name": "Nantucket Memorial"
    },
    {
      "icao": "KAPF",
      "iata": "APF",
      "name": "Naples Municipal"
    },
    {
      "icao": "KNGP",
      "iata": "NGP",
      "name": "Naval Air Station Corpus Christi Truax Field"
    },
    {
      "icao": "KNQX",
      "iata": "NQX",
      "name": "Naval Air Station Key West/Boca Chica Field"
    },
    {
      "icao": "KNPA",
      "iata": "NPA",
      "name": "Naval Air Station Pensacola Forrest Sherman Field"
    },
    {
      "icao": "KEED",
      "iata": "EED",
      "name": "Needles"
    },
    {
      "icao": "PANN",
      "iata": "ENN",
      "name": "Nenana Municipal"
    },
    {
      "icao": "KEWB",
      "iata": "EWB",
      "name": "New Bedford Regional"
    },
    {
      "icao": "KEWN",
      "iata": "EWN",
      "name": "New Bern - Coastal Carolina Regional"
    },
    {
      "icao": "KBAZ",
      "iata": "",
      "name": "New Braunfels National"
    },
    {
      "icao": "KARA",
      "iata": "ARA",
      "name": "New Iberia - Acadiana Regional"
    },
    {
      "icao": "KNEW",
      "iata": "NEW",
      "name": "New Orleans - Lakefront"
    },
    {
      "icao": "KNBG",
      "iata": "NBG",
      "name": "New Orleans NAS JRB/Alvin Callender Field"
    },
    {
      "icao": "KRNH",
      "iata": "RNH",
      "name": "New Richmond Regional"
    },
    {
      "icao": "KSWF",
      "iata": "SWF",
      "name": "Newburgh - New York Stewart"
    },
    {
      "icao": "KONP",
      "iata": "ONP",
      "name": "Newport Municipal"
    },
    {
      "icao": "KFAF",
      "iata": "FAF",
      "name": "Newport News (Fort Eustis) - Felker Army Air Field"
    },
    {
      "icao": "KPHF",
      "iata": "PHF",
      "name": "Newport News Williamsburg"
    },
    {
      "icao": "KUUU",
      "iata": "NPT",
      "name": "Newport State"
    },
    {
      "icao": "KIAG",
      "iata": "IAG",
      "name": "Niagara Falls"
    },
    {
      "icao": "KOLS",
      "iata": "OLS",
      "name": "Nogales"
    },
    {
      "icao": "PAOM",
      "iata": "OME",
      "name": "Nome"
    },
    {
      "icao": "KOFK",
      "iata": "OFK",
      "name": "Norfolk - Karl Stefan Memorial"
    },
    {
      "icao": "KNGU",
      "iata": "NGU",
      "name": "Norfolk Naval Station (Chambers Field)"
    },
    {
      "icao": "KOTH",
      "iata": "OTH",
      "name": "North Bend - Southwest Oregon Regional"
    },
    {
      "icao": "KOQU",
      "iata": "NCO",
      "name": "North Kingstown - Quonset State"
    },
    {
      "icao": "KVGT",
      "iata": "VGT",
      "name": "North Las Vegas"
    },
    {
      "icao": "KCRE",
      "iata": "CRE",
      "name": "North Myrtle Beach - Grand Strand"
    },
    {
      "icao": "KLBF",
      "iata": "LBF",
      "name": "North Platte Regional Airport Lee Bird Field"
    },
    {
      "icao": "KPNE",
      "iata": "PNE",
      "name": "Northeast Philadelphia"
    },
    {
      "icao": "PAOR",
      "iata": "ORT",
      "name": "Northway"
    },
    {
      "icao": "KOWD",
      "iata": "OWD",
      "name": "Norwood Memorial"
    },
    {
      "icao": "PAQT",
      "iata": "NUI",
      "name": "Nuiqsut"
    },
    {
      "icao": "KNUW",
      "iata": "NUW",
      "name": "Oak Harbor - Whidbey Island Naval Air Station (Ault Field)"
    },
    {
      "icao": "KOXB",
      "iata": "OCE",
      "name": "Ocean City Municipal"
    },
    {
      "icao": "KOKB",
      "iata": "OCN",
      "name": "Oceanside Municipal"
    },
    {
      "icao": "KHIF",
      "iata": "HIF",
      "name": "Ogden - Hill Air Force Base"
    },
    {
      "icao": "KOGD",
      "iata": "OGD",
      "name": "Ogden Hinckley"
    },
    {
      "icao": "KOGS",
      "iata": "OGS",
      "name": "Ogdensburg"
    },
    {
      "icao": "KTIK",
      "iata": "TIK",
      "name": "Oklahoma City - Tinker Air Force Base"
    },
    {
      "icao": "KOLM",
      "iata": "OLM",
      "name": "Olympia Regional"
    },
    {
      "icao": "KOFF",
      "iata": "OFF",
      "name": "Omaha - Offutt Air Force Base"
    },
    {
      "icao": "KOGB",
      "iata": "OGB",
      "name": "Orangeburg Municipal"
    },
    {
      "icao": "KONO",
      "iata": "ONO",
      "name": "Oregon - Ontario Municipal"
    },
    {
      "icao": "KISM",
      "iata": "ISM",
      "name": "Orlando - Kissimmee Gateway"
    },
    {
      "icao": "KORL",
      "iata": "ORL",
      "name": "Orlando Executive"
    },
    {
      "icao": "KOSH",
      "iata": "OSH",
      "name": "Oshkosh - Wittman Regional"
    },
    {
      "icao": "KOTM",
      "iata": "OTM",
      "name": "Ottumwa Regional"
    },
    {
      "icao": "KOWB",
      "iata": "OWB",
      "name": "Owensboro Daviess County"
    },
    {
      "icao": "KOXR",
      "iata": "OXR",
      "name": "Oxnard"
    },
    {
      "icao": "KPAH",
      "iata": "PAH",
      "name": "Paducah - Barkley Regional"
    },
    {
      "icao": "KPGA",
      "iata": "PGA",
      "name": "Page Municipal"
    },
    {
      "icao": "KTRM",
      "iata": "TRM",
      "name": "Palm Springs - Jacqueline Cochran Regional"
    },
    {
      "icao": "KPMD",
      "iata": "PMD",
      "name": "Palmdale Regional Airport / USAF Plant 42"
    },
    {
      "icao": "KPAO",
      "iata": "PAO",
      "name": "Palo Alto"
    },
    {
      "icao": "KPAM",
      "iata": "PAM",
      "name": "Panama City - Tyndall Air Force Base"
    },
    {
      "icao": "KECP",
      "iata": "ECP",
      "name": "Panama City Beach - Northwest Florida Beaches"
    },
    {
      "icao": "KPRX",
      "iata": "PRX",
      "name": "Paris - Cox Field"
    },
    {
      "icao": "KPKB",
      "iata": "PKB",
      "name": "Parkersburg (Williamstown) - Mid Ohio Valley Regional"
    },
    {
      "icao": "KPSC",
      "iata": "PSC",
      "name": "Pasco - Tri Cities"
    },
    {
      "icao": "KPRB",
      "iata": "PRB",
      "name": "Paso Robles Municipal"
    },
    {
      "icao": "KBTV",
      "iata": "BTV",
      "name": "Patrick Leahy Burlington"
    },
    {
      "icao": "KNHK",
      "iata": "NHK",
      "name": "Patuxent River Naval Air Station (Trapnell Field)"
    },
    {
      "icao": "KPLN",
      "iata": "PLN",
      "name": "Pellston Regional Airport of Emmet County"
    },
    {
      "icao": "KAFW",
      "iata": "AFW",
      "name": "Perot Field/Fort Worth Alliance"
    },
    {
      "icao": "KGUS",
      "iata": "GUS",
      "name": "Peru - Grissom Air Reserve Base"
    },
    {
      "icao": "PAPG",
      "iata": "PSG",
      "name": "Petersburg James A Johnson"
    },
    {
      "icao": "KPIR",
      "iata": "PIR",
      "name": "Pierre Regional"
    },
    {
      "icao": "KPBF",
      "iata": "PBF",
      "name": "Pine Bluff Regional Airport, Grider Field"
    },
    {
      "icao": "KPNA",
      "iata": "PWY",
      "name": "Pinedale - Ralph Wenz Field"
    },
    {
      "icao": "KPGV",
      "iata": "PGV",
      "name": "Pitt-Greenville"
    },
    {
      "icao": "KAGC",
      "iata": "AGC",
      "name": "Pittsburgh - Allegheny County"
    },
    {
      "icao": "PAPM",
      "iata": "PTU",
      "name": "Platinum"
    },
    {
      "icao": "KPBG",
      "iata": "PBG",
      "name": "Plattsburgh"
    },
    {
      "icao": "KPIH",
      "iata": "PIH",
      "name": "Pocatello Regional"
    },
    {
      "icao": "PPIZ",
      "iata": "PIZ",
      "name": "Point Lay LRRS"
    },
    {
      "icao": "KNTD",
      "iata": "NTD",
      "name": "Point Mugu Naval Air Station (Naval Base Ventura Co)"
    },
    {
      "icao": "KPNC",
      "iata": "PNC",
      "name": "Ponca City Regional"
    },
    {
      "icao": "KPTK",
      "iata": "PTK",
      "name": "Pontiac - Oakland County"
    },
    {
      "icao": "KCLM",
      "iata": "CLM",
      "name": "Port Angeles - William R Fairchild"
    },
    {
      "icao": "PAPC",
      "iata": "KPC",
      "name": "Port Clarence Coast Guard Station"
    },
    {
      "icao": "PAPH",
      "iata": "PTH",
      "name": "Port Heiden"
    },
    {
      "icao": "KHIO",
      "iata": "HIO",
      "name": "Portland Hillsboro"
    },
    {
      "icao": "KTTD",
      "iata": "TTD",
      "name": "Portland Troutdale"
    },
    {
      "icao": "KPSM",
      "iata": "PSM",
      "name": "Portsmouth International Airport at Pease"
    },
    {
      "icao": "KPOU",
      "iata": "POU",
      "name": "Poughkeepsie - Dutchess County"
    },
    {
      "icao": "KPRC",
      "iata": "PRC",
      "name": "Prescott Regional Airport - Ernest A. Love Field"
    },
    {
      "icao": "KPQI",
      "iata": "PQI",
      "name": "Presque Isle"
    },
    {
      "icao": "KPVU",
      "iata": "PVU",
      "name": "Provo Municipal"
    },
    {
      "icao": "KPUB",
      "iata": "PUB",
      "name": "Pueblo Memorial"
    },
    {
      "icao": "KPUW",
      "iata": "PUW",
      "name": "Pullman-Moscow Regional"
    },
    {
      "icao": "KPGD",
      "iata": "PGD",
      "name": "Punta Gorda"
    },
    {
      "icao": "KNYG",
      "iata": "NYG",
      "name": "Quantico Marine Corps Airfield / Turner Field"
    },
    {
      "icao": "KUIN",
      "iata": "UIN",
      "name": "Quincy Regional Airport Baldwin Field"
    },
    {
      "icao": "KRCA",
      "iata": "RCA",
      "name": "Rapid City - Ellsworth Air Force Base"
    },
    {
      "icao": "KRAP",
      "iata": "RAP",
      "name": "Rapid City Regional"
    },
    {
      "icao": "KRWL",
      "iata": "RWL",
      "name": "Rawlins Municipal Airport/Harvey Field"
    },
    {
      "icao": "KRDG",
      "iata": "RDG",
      "name": "Reading Regional Airport (Carl A Spaatz Field)"
    },
    {
      "icao": "KRBL",
      "iata": "RBL",
      "name": "Red Bluff Municipal"
    },
    {
      "icao": "KRDD",
      "iata": "RDD",
      "name": "Redding Municipal"
    },
    {
      "icao": "KRDM",
      "iata": "RDM",
      "name": "Redmond - Roberts Field"
    },
    {
      "icao": "KHUA",
      "iata": "HUA",
      "name": "Redstone Arsnl Huntsville - Redstone Army Air Field"
    },
    {
      "icao": "KRWF",
      "iata": "RWF",
      "name": "Redwood Falls Municipal"
    },
    {
      "icao": "KRHI",
      "iata": "RHI",
      "name": "Rhinelander Oneida County"
    },
    {
      "icao": "KOAJ",
      "iata": "OAJ",
      "name": "Richlands - Albert J Ellis"
    },
    {
      "icao": "KAMA",
      "iata": "AMA",
      "name": "Rick Husband Amarillo"
    },
    {
      "icao": "KRIL",
      "iata": "RIL",
      "name": "Rifle - Garfield County Regional"
    },
    {
      "icao": "KRIV",
      "iata": "RIV",
      "name": "Riverside - March Air Reserve Base"
    },
    {
      "icao": "KRAL",
      "iata": "RAL",
      "name": "Riverside Municipal"
    },
    {
      "icao": "KRIW",
      "iata": "RIW",
      "name": "Riverton - Central Wyoming Regional"
    },
    {
      "icao": "KROA",
      "iata": "ROA",
      "name": "Roanoke–Blacksburg Regional"
    },
    {
      "icao": "KRST",
      "iata": "RST",
      "name": "Rochester"
    },
    {
      "icao": "KRKS",
      "iata": "RKS",
      "name": "Rock Springs - Southwest Wyoming Regional"
    },
    {
      "icao": "KRKD",
      "iata": "RKD",
      "name": "Rockland - Knox County Regional"
    },
    {
      "icao": "KRWI",
      "iata": "RWI",
      "name": "Rocky Mount Wilson Regional"
    },
    {
      "icao": "KMFR",
      "iata": "MFR",
      "name": "Rogue Valley International-Medford"
    },
    {
      "icao": "KRME",
      "iata": "RME",
      "name": "Rome - Griffiss"
    },
    {
      "icao": "KRMG",
      "iata": "RMG",
      "name": "Rome - Richard B Russell"
    },
    {
      "icao": "KROW",
      "iata": "ROW",
      "name": "Roswell Air Center"
    },
    {
      "icao": "PARY",
      "iata": "RBY",
      "name": "Ruby"
    },
    {
      "icao": "KRSL",
      "iata": "RSL",
      "name": "Russell Municipal"
    },
    {
      "icao": "KRUT",
      "iata": "RUT",
      "name": "Rutland - Southern Vermont Regional"
    },
    {
      "icao": "KMCC",
      "iata": "MCC",
      "name": "Sacramento - McClellan Airfield"
    },
    {
      "icao": "KSAC",
      "iata": "SAC",
      "name": "Sacramento Executive"
    },
    {
      "icao": "KMHR",
      "iata": "MHR",
      "name": "Sacramento Mather"
    },
    {
      "icao": "KSTC",
      "iata": "STC",
      "name": "Saint Cloud Regional"
    },
    {
      "icao": "KSTP",
      "iata": "STP",
      "name": "Saint Paul Downtown Holman Field"
    },
    {
      "icao": "KSLE",
      "iata": "SLE",
      "name": "Salem-Willamette Valley Airport/McNary Field"
    },
    {
      "icao": "KSLN",
      "iata": "SLN",
      "name": "Salina Municipal"
    },
    {
      "icao": "KSNS",
      "iata": "SNS",
      "name": "Salinas Municipal"
    },
    {
      "icao": "KSBY",
      "iata": "SBY",
      "name": "Salisbury Ocean City Wicomico Regional"
    },
    {
      "icao": "KSMN",
      "iata": "SMN",
      "name": "Salmon - Lemhi County"
    },
    {
      "icao": "KSVR",
      "iata": "",
      "name": "Salt Lake City - South Valley Regional"
    },
    {
      "icao": "KSJT",
      "iata": "SJT",
      "name": "San Angelo Regional Mathis Field"
    },
    {
      "icao": "KSKF",
      "iata": "SKF",
      "name": "San Antonio - Lackland Air Force Base"
    },
    {
      "icao": "KSSF",
      "iata": "SSF",
      "name": "San Antonio - Stinson Municipal"
    },
    {
      "icao": "KSQL",
      "iata": "SQL",
      "name": "San Carlos"
    },
    {
      "icao": "KSDM",
      "iata": "SDM",
      "name": "San Diego - Brown Field Municipal"
    },
    {
      "icao": "KNKX",
      "iata": "NKX",
      "name": "San Diego - Miramar Marine Corps Air Station - Mitscher Field"
    },
    {
      "icao": "KNZY",
      "iata": "NZY",
      "name": "San Diego - North Island Naval Air Station-Halsey Field"
    },
    {
      "icao": "KSBP",
      "iata": "SBP",
      "name": "San Luis Obispo - San Luis County Regional"
    },
    {
      "icao": "PASD",
      "iata": "SDP",
      "name": "Sand Point"
    },
    {
      "icao": "KSBA",
      "iata": "SBA",
      "name": "Santa Barbara Municipal"
    },
    {
      "icao": "KSAF",
      "iata": "SAF",
      "name": "Santa Fe Municipal"
    },
    {
      "icao": "KSMX",
      "iata": "SMX",
      "name": "Santa Maria Public Airport Captain G Allan Hancock Field"
    },
    {
      "icao": "KSMO",
      "iata": "SMO",
      "name": "Santa Monica Municipal"
    },
    {
      "icao": "KSTS",
      "iata": "STS",
      "name": "Santa Rosa - Charles M. Schulz Sonoma County"
    },
    {
      "icao": "KSLK",
      "iata": "SLK",
      "name": "Saranac Lake - Adirondack Regional"
    },
    {
      "icao": "KSVN",
      "iata": "SVN",
      "name": "Savannah - Hunter Army Air Field"
    },
    {
      "icao": "PASA",
      "iata": "SVA",
      "name": "Savoonga"
    },
    {
      "icao": "KCMI",
      "iata": "CMI",
      "name": "Savoy - University of Illinois Willard"
    },
    {
      "icao": "KSCH",
      "iata": "SCH",
      "name": "Schenectady County"
    },
    {
      "icao": "KGLS",
      "iata": "GLS",
      "name": "Scholes International At Galveston"
    },
    {
      "icao": "KBFF",
      "iata": "BFF",
      "name": "Scottsbluff - Western Neb. Rgnl/William B. Heilig"
    },
    {
      "icao": "KBFI",
      "iata": "BFI",
      "name": "Seattle - King County International Airport - Boeing Field"
    },
    {
      "icao": "PAWD",
      "iata": "SWD",
      "name": "Seward"
    },
    {
      "icao": "PASY",
      "iata": "SYA",
      "name": "Shemya - Eareckson Air Station"
    },
    {
      "icao": "KSHR",
      "iata": "SHR",
      "name": "Sheridan County"
    },
    {
      "icao": "KSOW",
      "iata": "SOW",
      "name": "Show Low Regional"
    },
    {
      "icao": "KSHV",
      "iata": "SHV",
      "name": "Shreveport Regional"
    },
    {
      "icao": "KSDY",
      "iata": "SDY",
      "name": "Sidney - Richland Regional"
    },
    {
      "icao": "KSNY",
      "iata": "SNY",
      "name": "Sidney Municipal Airport Lloyd W Carr Field"
    },
    {
      "icao": "KSVC",
      "iata": "SVC",
      "name": "Silver City - Grant County"
    },
    {
      "icao": "KSUX",
      "iata": "SUX",
      "name": "Sioux City - Sioux Gateway Airport / Brigadier General Bud Day Field"
    },
    {
      "icao": "KFSD",
      "iata": "FSD",
      "name": "Sioux Falls Regional"
    },
    {
      "icao": "PASI",
      "iata": "SIT",
      "name": "Sitka Rocky Gutierrez"
    },
    {
      "icao": "KMQY",
      "iata": "MQY",
      "name": "Smyrna"
    },
    {
      "icao": "PASX",
      "iata": "SXQ",
      "name": "Soldotna"
    },
    {
      "icao": "KSME",
      "iata": "SME",
      "name": "Somerset - Lake Cumberland Regional"
    },
    {
      "icao": "KSBN",
      "iata": "SBN",
      "name": "South Bend"
    },
    {
      "icao": "KTVL",
      "iata": "TVL",
      "name": "South Lake Tahoe - Lake Tahoe"
    },
    {
      "icao": "PASV",
      "iata": "SVW",
      "name": "Sparrevohn LRRS"
    },
    {
      "icao": "KSUS",
      "iata": "SUS",
      "name": "Spirit of St Louis"
    },
    {
      "icao": "KSKA",
      "iata": "SKA",
      "name": "Spokane - Fairchild Air Force Base"
    },
    {
      "icao": "KSFF",
      "iata": "SFF",
      "name": "Spokane - Felts Field"
    },
    {
      "icao": "KSPI",
      "iata": "SPI",
      "name": "Springfield - Abraham Lincoln Capital"
    },
    {
      "icao": "KSGF",
      "iata": "SGF",
      "name": "Springfield Branson National"
    },
    {
      "icao": "KSGH",
      "iata": "SGH",
      "name": "Springfield-Beckley Municipal"
    },
    {
      "icao": "KSGJ",
      "iata": "UST",
      "name": "St Augustine - Northeast Florida Regional"
    },
    {
      "icao": "PAPB",
      "iata": "STG",
      "name": "St George"
    },
    {
      "icao": "KSGU",
      "iata": "SGU",
      "name": "St George Regional"
    },
    {
      "icao": "KSTJ",
      "iata": "STJ",
      "name": "St Joseph - Rosecrans Memorial"
    },
    {
      "icao": "PASN",
      "iata": "SNP",
      "name": "St Paul Island"
    },
    {
      "icao": "KSSI",
      "iata": "SSI",
      "name": "St Simons Island"
    },
    {
      "icao": "KUNV",
      "iata": "SCE",
      "name": "State College Regional"
    },
    {
      "icao": "KSWO",
      "iata": "SWO",
      "name": "Stillwater Regional"
    },
    {
      "icao": "KSCK",
      "iata": "SCK",
      "name": "Stockton Metropolitan"
    },
    {
      "icao": "KSSC",
      "iata": "SSC",
      "name": "Sumter - Shaw Air Force Base"
    },
    {
      "icao": "KTCM",
      "iata": "TCM",
      "name": "Tacoma - McChord Air Force Base"
    },
    {
      "icao": "KTIW",
      "iata": "TIW",
      "name": "Tacoma Narrows"
    },
    {
      "icao": "PATL",
      "iata": "TLJ",
      "name": "Takotna - Tatalina LRRS"
    },
    {
      "icao": "PATK",
      "iata": "TKA",
      "name": "Talkeetna"
    },
    {
      "icao": "KTLH",
      "iata": "TLH",
      "name": "Tallahassee"
    },
    {
      "icao": "KMCF",
      "iata": "MCF",
      "name": "Tampa - MacDill Air Force Base"
    },
    {
      "icao": "KSKX",
      "iata": "TSM",
      "name": "Taos Regional"
    },
    {
      "icao": "KTEX",
      "iata": "TEX",
      "name": "Telluride Regional"
    },
    {
      "icao": "KTPL",
      "iata": "TPL",
      "name": "Temple - Draughon Miller Central Texas Regional"
    },
    {
      "icao": "KTEB",
      "iata": "TEB",
      "name": "Teterboro"
    },
    {
      "icao": "KTXK",
      "iata": "TXK",
      "name": "Texarkana Regional Airport (Webb Field)"
    },
    {
      "icao": "KTVF",
      "iata": "TVF",
      "name": "Thief River Falls Regional"
    },
    {
      "icao": "KTIX",
      "iata": "TIX",
      "name": "Titusville - Space Coast Regional"
    },
    {
      "icao": "KTPH",
      "iata": "TPH",
      "name": "Tonopah"
    },
    {
      "icao": "KTOP",
      "iata": "TOP",
      "name": "Topeka - Philip Billard Municipal"
    },
    {
      "icao": "KFOE",
      "iata": "FOE",
      "name": "Topeka Regional"
    },
    {
      "icao": "KTVC",
      "iata": "TVC",
      "name": "Traverse City - Cherry Capital"
    },
    {
      "icao": "KTOI",
      "iata": "TOI",
      "name": "Troy Municipal Airport at N Kenneth Campbell Field"
    },
    {
      "icao": "KTRK",
      "iata": "TKF",
      "name": "Truckee Tahoe"
    },
    {
      "icao": "KTCS",
      "iata": "TCS",
      "name": "Truth or Consequences Municipal"
    },
    {
      "icao": "KDMA",
      "iata": "DMA",
      "name": "Tucson - Davis Monthan Air Force Base"
    },
    {
      "icao": "KTCC",
      "iata": "TCC",
      "name": "Tucumcari Municipal"
    },
    {
      "icao": "KRVS",
      "iata": "RVS",
      "name": "Tulsa Riverside"
    },
    {
      "icao": "KTUP",
      "iata": "TUP",
      "name": "Tupelo Regional"
    },
    {
      "icao": "KTCL",
      "iata": "TCL",
      "name": "Tuscaloosa National"
    },
    {
      "icao": "KHVN",
      "iata": "HVN",
      "name": "Tweed New Haven"
    },
    {
      "icao": "KTWF",
      "iata": "TWF",
      "name": "Twin Falls - Joslin Field Magic Valley Regional"
    },
    {
      "icao": "KTYR",
      "iata": "TYR",
      "name": "Tyler Pounds Regional"
    },
    {
      "icao": "KUKI",
      "iata": "UKI",
      "name": "Ukiah Municipal"
    },
    {
      "icao": "PAUN",
      "iata": "UNK",
      "name": "Unalakleet"
    },
    {
      "icao": "PADU",
      "iata": "DUT",
      "name": "Unalaska - Tom Madsen (Dutch Harbor)"
    },
    {
      "icao": "KRND",
      "iata": "RND",
      "name": "Universal City - Randolph Air Force Base"
    },
    {
      "icao": "KUOX",
      "iata": "UOX",
      "name": "University Oxford"
    },
    {
      "icao": "PAIM",
      "iata": "UTO",
      "name": "Utopia Creek - Indian Mountain LRRS"
    },
    {
      "icao": "PABR",
      "iata": "BRW",
      "name": "Utqiaġvik - Wiley Post Will Rogers Memorial"
    },
    {
      "icao": "PAVD",
      "iata": "VDZ",
      "name": "Valdez Pioneer Field"
    },
    {
      "icao": "KVAD",
      "iata": "VAD",
      "name": "Valdosta - Moody Air Force Base"
    },
    {
      "icao": "KVLD",
      "iata": "VLD",
      "name": "Valdosta Regional"
    },
    {
      "icao": "KVTN",
      "iata": "VTN",
      "name": "Valentine - Miller Field"
    },
    {
      "icao": "KVPS",
      "iata": "VPS",
      "name": "Valparaiso - Destin-Fort Walton Beach"
    },
    {
      "icao": "KVPZ",
      "iata": "VPZ",
      "name": "Valparaiso - Porter County Municipal"
    },
    {
      "icao": "KVEL",
      "iata": "VEL",
      "name": "Vernal Regional"
    },
    {
      "icao": "KVRB",
      "iata": "VRB",
      "name": "Vero Beach Regional"
    },
    {
      "icao": "KVCT",
      "iata": "VCT",
      "name": "Victoria Regional"
    },
    {
      "icao": "KNTU",
      "iata": "NTU",
      "name": "Virginia Beach - Oceana Naval Air Station"
    },
    {
      "icao": "KVIS",
      "iata": "VIS",
      "name": "Visalia Municipal"
    },
    {
      "icao": "KACT",
      "iata": "ACT",
      "name": "Waco Regional"
    },
    {
      "icao": "PHMU",
      "iata": "MUE",
      "name": "Waimea (Kamuela) - Waimea Kohala"
    },
    {
      "icao": "PAWI",
      "iata": "AIN",
      "name": "Wainwright"
    },
    {
      "icao": "KALW",
      "iata": "ALW",
      "name": "Walla Walla Regional"
    },
    {
      "icao": "KWRB",
      "iata": "WRB",
      "name": "Warner Robins - Robins Air Force Base"
    },
    {
      "icao": "PAAQ",
      "iata": "PAQ",
      "name": "Warren \"Bud\" Woods Palmer Municipal"
    },
    {
      "icao": "PAWS",
      "iata": "WWA",
      "name": "Wasilla"
    },
    {
      "icao": "KALO",
      "iata": "ALO",
      "name": "Waterloo Regional"
    },
    {
      "icao": "KART",
      "iata": "ART",
      "name": "Watertown"
    },
    {
      "icao": "KATY",
      "iata": "ATY",
      "name": "Watertown Regional"
    },
    {
      "icao": "KAUW",
      "iata": "AUW",
      "name": "Wausau Downtown"
    },
    {
      "icao": "KEAT",
      "iata": "EAT",
      "name": "Wenatchee - Pangborn Memorial"
    },
    {
      "icao": "KENV",
      "iata": "ENV",
      "name": "Wendover"
    },
    {
      "icao": "KLAF",
      "iata": "LAF",
      "name": "West Lafayette - Purdue University"
    },
    {
      "icao": "KWWR",
      "iata": "WWR",
      "name": "West Woodward"
    },
    {
      "icao": "KWYS",
      "iata": "WYS",
      "name": "West Yellowstone - Yellowstone"
    },
    {
      "icao": "KWST",
      "iata": "WST",
      "name": "Westerly State"
    },
    {
      "icao": "KBAF",
      "iata": "BAF",
      "name": "Westfield-Barnes Regional"
    },
    {
      "icao": "KSHD",
      "iata": "SHD",
      "name": "Weyers Cave - Shenandoah Valley Regional"
    },
    {
      "icao": "KHLG",
      "iata": "HLG",
      "name": "Wheeling Ohio County"
    },
    {
      "icao": "KHPN",
      "iata": "HPN",
      "name": "White Plains - Westchester County"
    },
    {
      "icao": "KIAB",
      "iata": "IAB",
      "name": "Wichita - McConnell Air Force Base"
    },
    {
      "icao": "KICT",
      "iata": "ICT",
      "name": "Wichita Dwight D. Eisenhower National"
    },
    {
      "icao": "KSPS",
      "iata": "SPS",
      "name": "Wichita Falls Municipal Airport / Sheppard Air Force Base"
    },
    {
      "icao": "KWWD",
      "iata": "WWD",
      "name": "Wildwood - Cape May County"
    },
    {
      "icao": "KAVP",
      "iata": "AVP",
      "name": "Wilkes-Barre/Scranton"
    },
    {
      "icao": "KIPT",
      "iata": "IPT",
      "name": "Williamsport Regional"
    },
    {
      "icao": "KXWA",
      "iata": "XWA",
      "name": "Williston Basin"
    },
    {
      "icao": "KILG",
      "iata": "ILG",
      "name": "Wilmington"
    },
    {
      "icao": "KILM",
      "iata": "ILM",
      "name": "Wilmington"
    },
    {
      "icao": "KILN",
      "iata": "ILN",
      "name": "Wilmington Airpark"
    },
    {
      "icao": "KINK",
      "iata": "INK",
      "name": "Winkler County"
    },
    {
      "icao": "KWMC",
      "iata": "WMC",
      "name": "Winnemucca Municipal"
    },
    {
      "icao": "KINW",
      "iata": "INW",
      "name": "Winslow Lindbergh Regional"
    },
    {
      "icao": "KINT",
      "iata": "INT",
      "name": "Winston Salem - Smith Reynolds"
    },
    {
      "icao": "KOLF",
      "iata": "OLF",
      "name": "Wolf Point - L M Clayton"
    },
    {
      "icao": "KORH",
      "iata": "ORH",
      "name": "Worcester Regional"
    },
    {
      "icao": "KWRL",
      "iata": "WRL",
      "name": "Worland Municipal"
    },
    {
      "icao": "PAWG",
      "iata": "WRG",
      "name": "Wrangell"
    },
    {
      "icao": "KWRI",
      "iata": "WRI",
      "name": "Wrightstown - Mc Guire Air Force Base"
    },
    {
      "icao": "KYKM",
      "iata": "YKM",
      "name": "Yakima Air Terminal McAllister Field"
    },
    {
      "icao": "PAYA",
      "iata": "YAK",
      "name": "Yakutat"
    },
    {
      "icao": "KYKN",
      "iata": "YKN",
      "name": "Yankton - Chan Gurney Municipal"
    },
    {
      "icao": "KYNG",
      "iata": "YNG",
      "name": "Youngstown/Warren - Youngstown Warren Regional"
    },
    {
      "icao": "KNYL",
      "iata": "YUM",
      "name": "Yuma International Airport / Marine Corps Air Station Yuma"
    },
    {
      "icao": "KZZV",
      "iata": "ZZV",
      "name": "Zanesville Municipal"
    }
  ],
  "United States Minor Outlying Islands": [
    {
      "icao": "PMDY",
      "iata": "MDY",
      "name": "Sand Island - Henderson Field"
    },
    {
      "icao": "PWAK",
      "iata": "AWK",
      "name": "Wake Island Airfield"
    }
  ],
  "Uruguay": [
    {
      "icao": "SUMU",
      "iata": "MVD",
      "name": "Ciudad de la Costa - Carrasco General Cesáreo L. Berisso"
    },
    {
      "icao": "SUDU",
      "iata": "DZO",
      "name": "Durazno - Santa Bernardina"
    },
    {
      "icao": "SUPU",
      "iata": "PDU",
      "name": "Paysandú - Tydeo Larre Borges"
    },
    {
      "icao": "SULS",
      "iata": "PDP",
      "name": "Punta del Este - Capitan Corbeta CA Curbelo"
    },
    {
      "icao": "SURV",
      "iata": "RVY",
      "name": "Rivera/Santana do Livramento - Pres. Gral. Óscar D. Gestido Binational"
    },
    {
      "icao": "SUSO",
      "iata": "STY",
      "name": "Salto - Nueva Hesperides"
    }
  ],
  "Uzbekistan": [
    {
      "icao": "UZFA",
      "iata": "AZN",
      "name": "Andijan"
    },
    {
      "icao": "UZSB",
      "iata": "BHK",
      "name": "Bukhara"
    },
    {
      "icao": "UZFN",
      "iata": "NMA",
      "name": "Namangan"
    },
    {
      "icao": "UZSA",
      "iata": "NVI",
      "name": "Navoi"
    },
    {
      "icao": "UZNN",
      "iata": "NCU",
      "name": "Nukus"
    },
    {
      "icao": "UZSS",
      "iata": "SKD",
      "name": "Samarkand"
    },
    {
      "icao": "UZTT",
      "iata": "TAS",
      "name": "Tashkent"
    },
    {
      "icao": "UZNU",
      "iata": "UGC",
      "name": "Urgench"
    },
    {
      "icao": "UZFF",
      "iata": "FEG",
      "name": "Fergana"
    },
    {
      "icao": "UZTP",
      "iata": "",
      "name": "Tashkent East"
    },
    {
      "icao": "UZST",
      "iata": "TMJ",
      "name": "Termez"
    },
    {
      "icao": "UTTZ",
      "iata": "OMN",
      "name": "Zomin"
    }
  ],
  "Vanuatu": [
    {
      "icao": "NVVV",
      "iata": "VLI",
      "name": "Port Vila - Bauerfield"
    },
    {
      "icao": "NVSQ",
      "iata": "ZGU",
      "name": "Gaua Island"
    },
    {
      "icao": "NVSS",
      "iata": "SON",
      "name": "Luganville - Santo Pekoa"
    },
    {
      "icao": "NVVW",
      "iata": "TAH",
      "name": "Tanna Island - Whitegrass"
    }
  ],
  "Venezuela": [
    {
      "icao": "SVBC",
      "iata": "BLA",
      "name": "Barcelona - General José Antonio Anzoategui"
    },
    {
      "icao": "SVBM",
      "iata": "BRM",
      "name": "Barquisimeto - Jacinto Lara"
    },
    {
      "icao": "SVPR",
      "iata": "PZO",
      "name": "Guyana City - General Manuel Carlos Piar"
    },
    {
      "icao": "SVMG",
      "iata": "PMV",
      "name": "Isla Margarita - Del Caribe Santiago Mariño"
    },
    {
      "icao": "SVMI",
      "iata": "CCS",
      "name": "Maiquetía Simón Bolívar"
    },
    {
      "icao": "SVMC",
      "iata": "MAR",
      "name": "Maracaibo - La Chinita"
    },
    {
      "icao": "SVVA",
      "iata": "VLN",
      "name": "Valencia - Arturo Michelena"
    },
    {
      "icao": "SVAC",
      "iata": "AGV",
      "name": "Acarigua - Oswaldo Guevara Mujica"
    },
    {
      "icao": "SVAN",
      "iata": "AAO",
      "name": "Anaco"
    },
    {
      "icao": "SVBI",
      "iata": "BNS",
      "name": "Barinas"
    },
    {
      "icao": "SVED",
      "iata": "EOR",
      "name": "Bolivar - El Dorado"
    },
    {
      "icao": "SVCD",
      "iata": "CXA",
      "name": "Caicara del Orinoco"
    },
    {
      "icao": "SVCN",
      "iata": "CAJ",
      "name": "Canaima"
    },
    {
      "icao": "SVCP",
      "iata": "CUP",
      "name": "Carúpano - General Francisco Bermúdez"
    },
    {
      "icao": "SVCS",
      "iata": "",
      "name": "Charallave - Caracas Óscar Machado Zuloaga"
    },
    {
      "icao": "SVCB",
      "iata": "CBL",
      "name": "Ciudad Bolivar - General Tomas de Heres"
    },
    {
      "icao": "SVCR",
      "iata": "CZE",
      "name": "Coro - José Leonardo Chirinos"
    },
    {
      "icao": "SVCU",
      "iata": "CUM",
      "name": "Cumaná - Antonio José de Sucre"
    },
    {
      "icao": "SVST",
      "iata": "SOM",
      "name": "El Tigre - San Tomé"
    },
    {
      "icao": "SVVG",
      "iata": "VIG",
      "name": "El Vigía - Juan Pablo Pérez Alfonso"
    },
    {
      "icao": "SVEZ",
      "iata": "EOZ",
      "name": "Elorza"
    },
    {
      "icao": "SVGU",
      "iata": "GUQ",
      "name": "Guanare"
    },
    {
      "icao": "SVCL",
      "iata": "CLZ",
      "name": "Guarico - Calabozo"
    },
    {
      "icao": "SVGD",
      "iata": "GDO",
      "name": "Guasdualito"
    },
    {
      "icao": "SVGI",
      "iata": "GUI",
      "name": "Guiria"
    },
    {
      "icao": "SVLF",
      "iata": "LFR",
      "name": "La Fria"
    },
    {
      "icao": "SVBS",
      "iata": "MYC",
      "name": "Maracay - Escuela Mariscal Sucre"
    },
    {
      "icao": "SVMT",
      "iata": "MUN",
      "name": "Maturín - José Tadeo Monagas"
    },
    {
      "icao": "SVMD",
      "iata": "MRD",
      "name": "Mérida - Alberto Carnevalli"
    },
    {
      "icao": "SVMP",
      "iata": "",
      "name": "Ocumare del Tuy - Metropolitano"
    },
    {
      "icao": "SVPT",
      "iata": "PTM",
      "name": "Palmarito"
    },
    {
      "icao": "SVJC",
      "iata": "LSP",
      "name": "Paraguaná - Josefa Camejo"
    },
    {
      "icao": "SVPA",
      "iata": "PYH",
      "name": "Puerto Ayacucho - Cacique Aramare"
    },
    {
      "icao": "SVPC",
      "iata": "PBL",
      "name": "Puerto Cabello - General Bartolome Salom"
    },
    {
      "icao": "SVSA",
      "iata": "SVZ",
      "name": "San Antonio del Tachira - Juan Vicente Gómez"
    },
    {
      "icao": "SVSZ",
      "iata": "STB",
      "name": "San Carlos del Zulia - Miguel Urdaneta Fernández"
    },
    {
      "icao": "SVPM",
      "iata": "SCI",
      "name": "San Cristóbal - Paramillo"
    },
    {
      "icao": "SVSP",
      "iata": "SNF",
      "name": "San Felipe - Sub Teniente Nestor Arias"
    },
    {
      "icao": "SVSR",
      "iata": "SFD",
      "name": "San Fernando de Apure Las Flecheras National"
    },
    {
      "icao": "SVJM",
      "iata": "",
      "name": "San Juan de Los Morros"
    },
    {
      "icao": "SVSE",
      "iata": "SNV",
      "name": "Santa Elena de Uairén"
    },
    {
      "icao": "SVSO",
      "iata": "STD",
      "name": "Santo Domingo - Mayor Buenaventura Vivas"
    },
    {
      "icao": "SVTC",
      "iata": "TUV",
      "name": "Tucupita"
    },
    {
      "icao": "SVTM",
      "iata": "TMO",
      "name": "Tumeremo"
    },
    {
      "icao": "SVVL",
      "iata": "VLV",
      "name": "Valera - Dr. Antonio Nicolás Briceño"
    },
    {
      "icao": "SVVP",
      "iata": "VDP",
      "name": "Valle de La Pascua"
    }
  ],
  "Vietnam": [
    {
      "icao": "VVCT",
      "iata": "VCA",
      "name": "Can Tho"
    },
    {
      "icao": "VVDN",
      "iata": "DAD",
      "name": "Da Nang"
    },
    {
      "icao": "VVCI",
      "iata": "HPH",
      "name": "Haiphong (Hai An) - Cat Bi"
    },
    {
      "icao": "VVNB",
      "iata": "HAN",
      "name": "Hanoi (Soc Son) - Noi Bai"
    },
    {
      "icao": "VVLT",
      "iata": "LTH",
      "name": "Ho Chi Minh City (Long Thanh) - Long Thanh International Airport (Under Construction)"
    },
    {
      "icao": "VVTS",
      "iata": "SGN",
      "name": "Ho Chi Minh City - Tan Son Nhat"
    },
    {
      "icao": "VVCR",
      "iata": "CXR",
      "name": "Nha Trang/nha Trang aiurportCam Ranh - Cam Ranh International Airport / Cam Ranh Air Base"
    },
    {
      "icao": "VVPQ",
      "iata": "PQC",
      "name": "Phu Quoc Island - Phú Quốc"
    },
    {
      "icao": "VVBM",
      "iata": "BMV",
      "name": "Buon Ma Thuot"
    },
    {
      "icao": "VVCM",
      "iata": "CAH",
      "name": "Ca Mau City - Cà Mau"
    },
    {
      "icao": "VVCS",
      "iata": "VCS",
      "name": "Con Dao"
    },
    {
      "icao": "VVDL",
      "iata": "DLI",
      "name": "Da Lat - Lien Khuong"
    },
    {
      "icao": "VVDB",
      "iata": "DIN",
      "name": "Dien Bien Phu"
    },
    {
      "icao": "VVDH",
      "iata": "VDH",
      "name": "Dong Hoi"
    },
    {
      "icao": "VVPB",
      "iata": "HUI",
      "name": "Huế - Phu Bai"
    },
    {
      "icao": "VVPK",
      "iata": "PXU",
      "name": "Pleiku"
    },
    {
      "icao": "VVPC",
      "iata": "UIH",
      "name": "Quy Nohn - Phu Cat"
    },
    {
      "icao": "VVRG",
      "iata": "VKG",
      "name": "Rach Gia"
    },
    {
      "icao": "VVTH",
      "iata": "TBB",
      "name": "Tuy Hoa - Dong Tac"
    },
    {
      "icao": "VVVD",
      "iata": "VDO",
      "name": "Van Don"
    },
    {
      "icao": "VVVH",
      "iata": "VII",
      "name": "Vinh"
    }
  ],
  "Wallis and Futuna": [
    {
      "icao": "NLWW",
      "iata": "WLS",
      "name": "Wallis Island - Hihifo"
    }
  ],
  "Western Sahara (disputed territory)": [
    {
      "icao": "GMMH",
      "iata": "VIL",
      "name": "Dakhla"
    },
    {
      "icao": "GMML",
      "iata": "EUN",
      "name": "El Aaiún - Laayoune Hassan I"
    },
    {
      "icao": "GMMA",
      "iata": "SMW",
      "name": "Smara"
    }
  ],
  "Yemen": [
    {
      "icao": "OYAA",
      "iata": "ADE",
      "name": "Aden"
    },
    {
      "icao": "OYMK",
      "iata": "",
      "name": "Mokha"
    },
    {
      "icao": "OYRN",
      "iata": "RIY",
      "name": "Mukalla(Riyan) - Riyan"
    },
    {
      "icao": "OYSN",
      "iata": "SAH",
      "name": "Sanaa"
    },
    {
      "icao": "OYSY",
      "iata": "GXF",
      "name": "Seiyun Hadhramaut"
    },
    {
      "icao": "OYGD",
      "iata": "AAY",
      "name": "Al Ghaydah"
    },
    {
      "icao": "OYAT",
      "iata": "AXK",
      "name": "Ataq"
    },
    {
      "icao": "OYSQ",
      "iata": "SCT",
      "name": "Mori - Socotra"
    },
    {
      "icao": "OYTZ",
      "iata": "TAI",
      "name": "Taiz"
    }
  ],
  "Zambia": [
    {
      "icao": "FLHN",
      "iata": "LVI",
      "name": "Livingstone - Harry Mwanga Nkumbula"
    },
    {
      "icao": "FLKK",
      "iata": "LUN",
      "name": "Lusaka - Kenneth Kaunda"
    },
    {
      "icao": "FLMF",
      "iata": "MFU",
      "name": "Mfuwe"
    },
    {
      "icao": "FLSK",
      "iata": "NLA",
      "name": "Ndola - Simon Mwansa Kapwepwe"
    },
    {
      "icao": "FLKE",
      "iata": "CGJ",
      "name": "Chingola - Kasompe"
    },
    {
      "icao": "FLSO",
      "iata": "KIW",
      "name": "Kitwe - Southdowns"
    },
    {
      "icao": "FLLC",
      "iata": "",
      "name": "Lusaka City"
    },
    {
      "icao": "FLMG",
      "iata": "MNR",
      "name": "Mongu"
    },
    {
      "icao": "FLND",
      "iata": "",
      "name": "Ndola - Peter Zuze Air Force Base"
    }
  ],
  "Zimbabwe": [
    {
      "icao": "FVJN",
      "iata": "BUQ",
      "name": "Bulawayo - Joshua Mqabuko Nkomo"
    },
    {
      "icao": "FVFA",
      "iata": "VFA",
      "name": "Victoria Falls"
    },
    {
      "icao": "FVCZ",
      "iata": "BFO",
      "name": "Chiredzi - Buffalo Range"
    },
    {
      "icao": "FVWN",
      "iata": "HWN",
      "name": "Gwayi River Farms - Hwange National Park"
    },
    {
      "icao": "FVTL",
      "iata": "GWE",
      "name": "Gweru - Josiah Tungamirai Air Force Base"
    },
    {
      "icao": "FVKB",
      "iata": "KAB",
      "name": "Kariba"
    },
    {
      "icao": "FVMV",
      "iata": "MVZ",
      "name": "Masvingo"
    },
    {
      "icao": "FVMT",
      "iata": "",
      "name": "Mutoko"
    }
  ]
};
