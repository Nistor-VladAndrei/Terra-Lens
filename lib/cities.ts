
export type City = {
  id: string;
  name: string;
  lat: number;
  lon: number;
};

export const DEFAULT_CITIES: City[] = [
  // --- France ---
  { id: "paris",             name: "Paris",             lat: 48.8566, lon: 2.3522 },
  { id: "marseille",         name: "Marseille",         lat: 43.2965, lon: 5.3698 },
  { id: "lyon",              name: "Lyon",              lat: 45.7640, lon: 4.8357 },
  { id: "toulouse",          name: "Toulouse",          lat: 43.6045, lon: 1.4440 },
  { id: "nice",              name: "Nice",              lat: 43.7102, lon: 7.2620 },
  { id: "nantes",            name: "Nantes",            lat: 47.2184, lon: -1.5536 },
  { id: "strasbourg",        name: "Strasbourg",        lat: 48.5734, lon: 7.7521 },
  { id: "montpellier",       name: "Montpellier",       lat: 43.6108, lon: 3.8767 },
  { id: "bordeaux",          name: "Bordeaux",          lat: 44.8378, lon: -0.5792 },
  { id: "lille",             name: "Lille",             lat: 50.6292, lon: 3.0573 },
  { id: "rennes",            name: "Rennes",            lat: 48.1173, lon: -1.6778 },
  { id: "reims",             name: "Reims",             lat: 49.2583, lon: 4.0317 },
  { id: "le-havre",          name: "Le Havre",          lat: 49.4944, lon: 0.1079 },
  { id: "saint-etienne",     name: "Saint-Étienne",     lat: 45.4397, lon: 4.3872 },

  // --- Spain ---
  { id: "madrid",           name: "Madrid",           lat: 40.4168, lon: -3.7038 },
  { id: "barcelona",        name: "Barcelona",        lat: 41.3851, lon: 2.1734 },
  { id: "valencia",         name: "Valencia",         lat: 39.4699, lon: -0.3763 },
  { id: "seville",          name: "Seville",          lat: 37.3891, lon: -5.9845 },
  { id: "zaragoza",         name: "Zaragoza",         lat: 41.6488, lon: -0.8891 },
  { id: "malaga",           name: "Málaga",           lat: 36.7213, lon: -4.4214 },
  { id: "murcia",           name: "Murcia",           lat: 37.9922, lon: -1.1307 },
  { id: "palma",            name: "Palma",            lat: 39.5696, lon: 2.6502 },
  { id: "bilbao",           name: "Bilbao",           lat: 43.2630, lon: -2.9350 },
  { id: "alicante",         name: "Alicante",         lat: 38.3452, lon: -0.4810 },
  { id: "valladolid",       name: "Valladolid",       lat: 41.6523, lon: -4.7245 },
  { id: "cordoba",          name: "Córdoba",          lat: 37.8882, lon: -4.7794 },

  // --- Portugal ---
  { id: "lisbon",          name: "Lisbon",          lat: 38.7223, lon: -9.1393 },
  { id: "porto",           name: "Porto",           lat: 41.1579, lon: -8.6291 },
  { id: "braga",           name: "Braga",           lat: 41.5454, lon: -8.4265 },
  { id: "coimbra",         name: "Coimbra",         lat: 40.2033, lon: -8.4103 },

  // --- United Kingdom ---
  { id: "london",         name: "London",         lat: 51.5074, lon: -0.1278 },
  { id: "birmingham",     name: "Birmingham",     lat: 52.4862, lon: -1.8904 },
  { id: "manchester",     name: "Manchester",     lat: 53.4808, lon: -2.2426 },
  { id: "leeds",          name: "Leeds",          lat: 53.8008, lon: -1.5491 },
  { id: "glasgow",        name: "Glasgow",        lat: 55.8642, lon: -4.2518 },
  { id: "liverpool",      name: "Liverpool",      lat: 53.4084, lon: -2.9916 },
  { id: "edinburgh",      name: "Edinburgh",      lat: 55.9533, lon: -3.1883 },
  { id: "bristol",        name: "Bristol",        lat: 51.4545, lon: -2.5879 },
  { id: "sheffield",      name: "Sheffield",      lat: 53.3811, lon: -1.4701 },
  { id: "nottingham",     name: "Nottingham",     lat: 52.9548, lon: -1.1581 },
  { id: "leicester",      name: "Leicester",      lat: 52.6369, lon: -1.1398 },
  { id: "belfast",        name: "Belfast",        lat: 54.5973, lon: -5.9301 },

  // --- Ireland ---
  { id: "dublin",         name: "Dublin",         lat: 53.3498, lon: -6.2603 },
  { id: "cork",           name: "Cork",           lat: 51.8985, lon: -8.4756 },
  { id: "limerick",       name: "Limerick",       lat: 52.6680, lon: -8.6305 },
  { id: "galway",         name: "Galway",         lat: 53.2707, lon: -9.0568 },

  // --- Benelux ---
  { id: "amsterdam",      name: "Amsterdam",      lat: 52.3676, lon: 4.9041 },
  { id: "rotterdam",      name: "Rotterdam",      lat: 51.9244, lon: 4.4777 },
  { id: "the-hague",      name: "The Hague",      lat: 52.0705, lon: 4.3007 },
  { id: "utrecht",        name: "Utrecht",        lat: 52.0907, lon: 5.1214 },
  { id: "brussels",       name: "Brussels",       lat: 50.8503, lon: 4.3517 },
  { id: "antwerp",        name: "Antwerp",        lat: 51.2194, lon: 4.4025 },
  { id: "ghent",          name: "Ghent",          lat: 51.0543, lon: 3.7174 },
  { id: "bruges",         name: "Bruges",         lat: 51.2093, lon: 3.2247 },
  // --- Germany ---
{ id: "berlin",            name: "Berlin",            lat: 52.5200, lon: 13.4050 },
{ id: "hamburg",           name: "Hamburg",           lat: 53.5511, lon: 9.9937 },
{ id: "munich",            name: "Munich",            lat: 48.1351, lon: 11.5820 },
{ id: "cologne",           name: "Cologne",           lat: 50.9375, lon: 6.9603 },
{ id: "frankfurt",         name: "Frankfurt",         lat: 50.1109, lon: 8.6821 },
{ id: "stuttgart",         name: "Stuttgart",         lat: 48.7758, lon: 9.1829 },
{ id: "dusseldorf",        name: "Düsseldorf",        lat: 51.2277, lon: 6.7735 },
{ id: "dortmund",          name: "Dortmund",          lat: 51.5136, lon: 7.4653 },
{ id: "essen",             name: "Essen",             lat: 51.4556, lon: 7.0116 },
{ id: "bremen",            name: "Bremen",            lat: 53.0793, lon: 8.8017 },
{ id: "leipzig",           name: "Leipzig",           lat: 51.3397, lon: 12.3731 },
{ id: "dresden",           name: "Dresden",           lat: 51.0504, lon: 13.7373 },
{ id: "hannover",          name: "Hannover",          lat: 52.3759, lon: 9.7320 },
{ id: "nuremberg",         name: "Nuremberg",         lat: 49.4521, lon: 11.0767 },
{ id: "duisburg",          name: "Duisburg",          lat: 51.4344, lon: 6.7623 },
{ id: "bochum",            name: "Bochum",            lat: 51.4818, lon: 7.2162 },
{ id: "wuppertal",         name: "Wuppertal",         lat: 51.2562, lon: 7.1508 },
{ id: "bielefeld",         name: "Bielefeld",         lat: 52.0302, lon: 8.5325 },
{ id: "bonn",              name: "Bonn",              lat: 50.7374, lon: 7.0982 },
{ id: "munster",           name: "Münster",          lat: 51.9607, lon: 7.6261 },

// --- Austria ---
{ id: "vienna",           name: "Vienna",           lat: 48.2100, lon: 16.3738 },
{ id: "graz",             name: "Graz",             lat: 47.0707, lon: 15.4395 },
{ id: "linz",             name: "Linz",             lat: 48.3069, lon: 14.2858 },
{ id: "salzburg",         name: "Salzburg",         lat: 47.8095, lon: 13.0550 },
{ id: "innsbruck",        name: "Innsbruck",        lat: 47.2692, lon: 11.4041 },

// --- Switzerland ---
{ id: "zurich",           name: "Zürich",           lat: 47.3769, lon: 8.5417 },
{ id: "geneva",           name: "Geneva",           lat: 46.2044, lon: 6.1432 },
{ id: "basel",            name: "Basel",            lat: 47.5596, lon: 7.5886 },
{ id: "bern",             name: "Bern",             lat: 46.9481, lon: 7.4474 },
{ id: "lausanne",         name: "Lausanne",         lat: 46.5197, lon: 6.6323 },

// --- Poland ---
{ id: "warsaw",           name: "Warsaw",           lat: 52.2297, lon: 21.0122 },
{ id: "krakow",           name: "Kraków",           lat: 50.0647, lon: 19.9450 },
{ id: "lodz",             name: "Łódź",             lat: 51.7592, lon: 19.4550 },
{ id: "wroclaw",          name: "Wrocław",          lat: 51.1079, lon: 17.0385 },
{ id: "poznan",           name: "Poznań",           lat: 52.4064, lon: 16.9252 },
{ id: "gdansk",           name: "Gdańsk",           lat: 54.3520, lon: 18.6466 },
{ id: "szczecin",         name: "Szczecin",         lat: 53.4285, lon: 14.5528 },
{ id: "bydgoszcz",        name: "Bydgoszcz",        lat: 53.1235, lon: 18.0084 },
{ id: "lublin",           name: "Lublin",           lat: 51.2465, lon: 22.5684 },
{ id: "bialystok",        name: "Białystok",        lat: 53.1325, lon: 23.1688 },

// --- Czechia ---
{ id: "prague",          name: "Prague",          lat: 50.0755, lon: 14.4378 },
{ id: "brno",            name: "Brno",            lat: 49.1951, lon: 16.6068 },
{ id: "ostrava",         name: "Ostrava",         lat: 49.8209, lon: 18.2625 },
{ id: "plzen",           name: "Plzeň",           lat: 49.7384, lon: 13.3736 },
{ id: "liberec",         name: "Liberec",         lat: 50.7671, lon: 15.0562 },

// --- Slovakia ---
{ id: "bratislava",      name: "Bratislava",      lat: 48.1486, lon: 17.1077 },
{ id: "kosice",          name: "Košice",          lat: 48.7164, lon: 21.2611 },
{ id: "zilina",          name: "Žilina",          lat: 49.2230, lon: 18.7394 },

// --- Hungary ---
{ id: "budapest",        name: "Budapest",        lat: 47.4979, lon: 19.0402 },
{ id: "debrecen",        name: "Debrecen",        lat: 47.5316, lon: 21.6273 },
{ id: "szeged",          name: "Szeged",          lat: 46.2530, lon: 20.1414 },
{ id: "miskolc",         name: "Miskolc",         lat: 48.1031, lon: 20.7784 },
{ id: "pecs",            name: "Pécs",            lat: 46.0727, lon: 18.2323 },
// --- Italy ---
{ id: "rome",            name: "Rome",             lat: 41.9028, lon: 12.4964 },
{ id: "milan",           name: "Milan",            lat: 45.4642, lon: 9.1900 },
{ id: "naples",          name: "Naples",           lat: 40.8518, lon: 14.2681 },
{ id: "turin",           name: "Turin",            lat: 45.0703, lon: 7.6869 },
{ id: "palermo",         name: "Palermo",          lat: 38.1157, lon: 13.3615 },
{ id: "genoa",           name: "Genoa",            lat: 44.4056, lon: 8.9463 },
{ id: "bologna",         name: "Bologna",          lat: 44.4949, lon: 11.3426 },
{ id: "florence",        name: "Florence",         lat: 43.7696, lon: 11.2558 },
{ id: "venice",          name: "Venice",           lat: 45.4408, lon: 12.3155 },
{ id: "verona",          name: "Verona",           lat: 45.4384, lon: 10.9916 },
{ id: "padua",           name: "Padua",            lat: 45.4064, lon: 11.8768 },

// --- Greece ---
{ id: "athens",          name: "Athens",           lat: 37.9838, lon: 23.7275 },
{ id: "thessaloniki",    name: "Thessaloniki",     lat: 40.6401, lon: 22.9444 },
{ id: "patras",          name: "Patras",           lat: 38.2466, lon: 21.7346 },
{ id: "heraklion",       name: "Heraklion",        lat: 35.3387, lon: 25.1442 },
{ id: "larissa",         name: "Larissa",          lat: 39.6390, lon: 22.4199 },

// --- Romania ---
{ id: "bucharest",       name: "Bucharest",        lat: 44.4268, lon: 26.1025 },
{ id: "cluj-napoca",     name: "Cluj-Napoca",      lat: 46.7712, lon: 23.6236 },
{ id: "timisoara",       name: "Timișoara",        lat: 45.7489, lon: 21.2087 },
{ id: "iasi",            name: "Iași",             lat: 47.1585, lon: 27.6014 },
{ id: "constanta",       name: "Constanța",        lat: 44.1598, lon: 28.6348 },
{ id: "craiova",         name: "Craiova",          lat: 44.3302, lon: 23.7949 },
{ id: "braila",          name: "Brăila",           lat: 45.2696, lon: 27.9579 },
{ id: "galati",          name: "Galați",           lat: 45.4353, lon: 28.0078 },

// --- Bulgaria ---
{ id: "sofia",           name: "Sofia",            lat: 42.6977, lon: 23.3219 },
{ id: "plovdiv",         name: "Plovdiv",          lat: 42.1354, lon: 24.7453 },
{ id: "varna",           name: "Varna",            lat: 43.2141, lon: 27.9147 },
{ id: "burgas",          name: "Burgas",           lat: 42.5048, lon: 27.4626 },

// --- Croatia ---
{ id: "zagreb",          name: "Zagreb",           lat: 45.8150, lon: 15.9819 },
{ id: "split",           name: "Split",            lat: 43.5081, lon: 16.4402 },
{ id: "rijeka",          name: "Rijeka",           lat: 45.3271, lon: 14.4422 },
{ id: "osijek",          name: "Osijek",           lat: 45.5511, lon: 18.6939 },

// --- Serbia ---
{ id: "belgrade",        name: "Belgrade",         lat: 44.7866, lon: 20.4489 },
{ id: "novi-sad",        name: "Novi Sad",         lat: 45.2671, lon: 19.8335 },
{ id: "nis",             name: "Niš",              lat: 43.3217, lon: 21.8958 },

// --- Slovenia ---
{ id: "ljubljana",       name: "Ljubljana",        lat: 46.0569, lon: 14.5058 },
{ id: "maribor",         name: "Maribor",          lat: 46.5547, lon: 15.6459 },

// --- North Macedonia ---
{ id: "skopje",          name: "Skopje",           lat: 41.9973, lon: 21.4280 },

// --- Albania ---
{ id: "tirana",          name: "Tirana",           lat: 41.3275, lon: 19.8187 },
{ id: "durres",          name: "Durrës",           lat: 41.3231, lon: 19.4414 },

// --- Montenegro ---
{ id: "podgorica",       name: "Podgorica",        lat: 42.4304, lon: 19.2594 },

// --- Malta ---
{ id: "valletta",        name: "Valletta",         lat: 35.8989, lon: 14.5146 },

// --- Cyprus ---
{ id: "nicosia",         name: "Nicosia",          lat: 35.1856, lon: 33.3823 },

// --- Turkey (European part) ---
{ id: "istanbul",        name: "Istanbul",         lat: 41.0082, lon: 28.9784 },
{ id: "ankara",          name: "Ankara",           lat: 39.9208, lon: 32.8541 },
{ id: "izmir",           name: "İzmir",            lat: 38.4237, lon: 27.1428 },
{ id: "bursa",           name: "Bursa",            lat: 40.1950, lon: 29.0600 },
// --- Sweden ---
{ id: "stockholm",       name: "Stockholm",       lat: 59.3293, lon: 18.0686 },
{ id: "gothenburg",      name: "Gothenburg",      lat: 57.7089, lon: 11.9746 },
{ id: "malmo",           name: "Malmö",           lat: 55.6050, lon: 13.0038 },
{ id: "uppsala",         name: "Uppsala",         lat: 59.8586, lon: 17.6389 },
{ id: "vasteras",        name: "Västerås",        lat: 59.6099, lon: 16.5448 },

// --- Norway ---
{ id: "oslo",            name: "Oslo",            lat: 59.9139, lon: 10.7522 },
{ id: "bergen",          name: "Bergen",          lat: 60.3913, lon: 5.3221 },
{ id: "trondheim",       name: "Trondheim",       lat: 63.4305, lon: 10.3951 },
{ id: "stavanger",       name: "Stavanger",       lat: 58.9690, lon: 5.7331 },

// --- Finland ---
{ id: "helsinki",        name: "Helsinki",        lat: 60.1699, lon: 24.9384 },
{ id: "tampere",         name: "Tampere",         lat: 61.4978, lon: 23.7610 },
{ id: "turku",           name: "Turku",           lat: 60.4518, lon: 22.2666 },
{ id: "oulu",            name: "Oulu",            lat: 65.0121, lon: 25.4651 },

// --- Denmark ---
{ id: "copenhagen",      name: "Copenhagen",      lat: 55.6761, lon: 12.5683 },
{ id: "aarhus",          name: "Aarhus",          lat: 56.1629, lon: 10.2039 },
{ id: "odense",          name: "Odense",          lat: 55.4038, lon: 10.4024 },
{ id: "aalborg",         name: "Aalborg",         lat: 57.0488, lon: 9.9217 },

// --- Estonia ---
{ id: "tallinn",         name: "Tallinn",         lat: 59.4370, lon: 24.7536 },
{ id: "tartu",           name: "Tartu",           lat: 58.3738, lon: 26.7290 },

// --- Latvia ---
{ id: "riga",            name: "Riga",            lat: 56.9496, lon: 24.1052 },
{ id: "daugavpils",      name: "Daugavpils",      lat: 55.8796, lon: 26.5165 },
{ id: "liepaja",         name: "Liepāja",         lat: 56.5047, lon: 21.0108 },

// --- Lithuania ---
{ id: "vilnius",         name: "Vilnius",         lat: 54.6872, lon: 25.2797 },
{ id: "kaunas",          name: "Kaunas",          lat: 54.8985, lon: 23.9036 },
{ id: "klaipeda",        name: "Klaipėda",        lat: 55.7033, lon: 21.1443 },

// --- Ukraine ---
{ id: "kyiv",            name: "Kyiv",            lat: 50.4501, lon: 30.5234 },
{ id: "kharkiv",         name: "Kharkiv",         lat: 49.9935, lon: 36.2304 },
{ id: "odesa",           name: "Odesa",           lat: 46.4825, lon: 30.7233 },
{ id: "dnipro",          name: "Dnipro",          lat: 48.4647, lon: 35.0462 },
{ id: "lviv",            name: "Lviv",            lat: 49.8397, lon: 24.0297 },
{ id: "zapori2zhzhia",    name: "Zaporizhzhia",    lat: 47.8388, lon: 35.1396 },

// --- Moldova ---
{ id: "chisi2nau",        name: "Chișinău",        lat: 47.0105, lon: 28.8638 },

// --- Russia (European part) ---
{ id: "mosco2w",          name: "Moscow",          lat: 55.7558, lon: 37.6173 },
{ id: "sain2t-petersburg",name: "Saint Petersburg",lat: 59.9343, lon: 30.3351 },
{ id: "kaz2an",           name: "Kazan",           lat: 55.8304, lon: 49.0661 },
{ id: "nizhny-n2ovgorod", name: "Nizhny Novgorod",  lat: 56.2965, lon: 43.9361 },
  { id: "new-y2ork", name: "New York", lat: 40.7128, lon: -74.0060 },
  { id: "los-ang2eles", name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { id: "chica22go", name: "Chicago", lat: 41.8781, lon: -87.6298 },
  { id: "houston", name: "Houston", lat: 29.7604, lon: -95.3698 },
  { id: "phoe2nix", name: "Phoenix", lat: 33.4484, lon: -112.0740 },
  { id: "phi2ladelphia", name: "Philadelphia", lat: 39.9526, lon: -75.1652 },
  { id: "san-ant2onio", name: "San Antonio", lat: 29.4241, lon: -98.4936 },
  { id: "san-di2ego", name: "San Diego", lat: 32.7157, lon: -117.1611 },
  { id: "dalla2s", name: "Dallas", lat: 32.7767, lon: -96.7970 },
  { id: "san-2jose", name: "San Jose", lat: 37.3382, lon: -121.8863 },
  { id: "aus2tin", name: "Austin", lat: 30.2672, lon: -97.7431 },
  { id: "jackso2nville", name: "Jacksonville", lat: 30.3322, lon: -81.6557 },
  { id: "fort-2worth", name: "Fort Worth", lat: 32.7555, lon: -97.3308 },
  { id: "colu2mbus", name: "Columbus", lat: 39.9612, lon: -82.9988 },
  { id: "charlot2te", name: "Charlotte", lat: 35.2271, lon: -80.8431 },
  { id: "san-fr2ancisco", name: "San Francisco", lat: 37.7749, lon: -122.4194 },
  { id: "india2napolis", name: "Indianapolis", lat: 39.7684, lon: -86.1580 },
  { id: "seat2tle", name: "Seattle", lat: 47.6062, lon: -122.3321 },
  { id: "den2ver", name: "Denver", lat: 39.7392, lon: -104.9903 },
  { id: "wa2shington", name: "Washington", lat: 38.9072, lon: -77.0369 },
  { id: "b2oston", name: "Boston", lat: 42.3601, lon: -71.0589 },
  { id: "el-paso2", name: "El Paso", lat: 31.7619, lon: -106.4850 },
  { id: "detroi2t", name: "Detroit", lat: 42.3314, lon: -83.0458 },
  { id: "memph2is", name: "Memphis", lat: 35.1495, lon: -90.0490 },
  { id: "nash2ville", name: "Nashville", lat: 36.1627, lon: -86.7816 },
  { id: "por2tland", name: "Portland", lat: 45.5051, lon: -122.6750 },
  { id: "oklahom2a-city", name: "Oklahoma City", lat: 35.4676, lon: -97.5164 },
  { id: "las-ve2gas", name: "Las Vegas", lat: 36.1699, lon: -115.1398 },
  { id: "louis2ville", name: "Louisville", lat: 38.2527, lon: -85.7585 },
  { id: "balt2imore", name: "Baltimore", lat: 39.2904, lon: -76.6122 },
  { id: "mil2waukee", name: "Milwaukee", lat: 43.0389, lon: -87.9065 },
  { id: "albuqu2erque", name: "Albuquerque", lat: 35.0844, lon: -106.6504 },
  { id: "tucso2n", name: "Tucson", lat: 32.2226, lon: -110.9747 },
  { id: "fresn2o", name: "Fresno", lat: 36.7378, lon: -119.7871 },
  { id: "sac22ramento", name: "Sacramento", lat: 38.5816, lon: -121.4944 },
  { id: "ka2nsas-city", name: "Kansas City", lat: 39.0997, lon: -94.5786 },
  { id: "l2ong-beach", name: "Long Beach", lat: 33.7683, lon: -118.1956 },
  { id: "2mesa", name: "Mesa", lat: 33.4152, lon: -111.8315 },
  { id: "atlan2ta", name: "Atlanta", lat: 33.7490, lon: -84.3880 },
  { id: "colo2rado-springs", name: "Colorado Springs", lat: 38.8339, lon: -104.8214 },
  { id: "ral2eigh", name: "Raleigh", lat: 35.7796, lon: -78.6382 },
  { id: "mi2ami", name: "Miami", lat: 25.7617, lon: -80.1918 },
  { id: "v2irginia-beach", name: "Virginia Beach", lat: 36.8529, lon: -75.9783 },
  { id: "omah2a", name: "Omaha", lat: 41.2565, lon: -95.9345 },
  { id: "oak2land", name: "Oakland", lat: 37.8044, lon: -122.2711 },
  { id: "mi2nneapolis", name: "Minneapolis", lat: 44.9778, lon: -93.2650 },
  { id: "t2ulsa", name: "Tulsa", lat: 36.1539, lon: -95.9928 },
  { id: "arling2ton", name: "Arlington", lat: 32.7357, lon: -97.1081 },
  { id: "new-o2rleans", name: "New Orleans", lat: 29.9511, lon: -90.0715 },
  { id: "wich2ita", name: "Wichita", lat: 37.6872, lon: -97.3301 },
  { id: "bak2ersfield", name: "Bakersfield", lat: 35.3733, lon: -119.0187 },
  { id: "aurora", name: "Aurora", lat: 39.7296, lon: -104.8319 },
  { id: "lakew2ood", name: "Lakewood", lat: 39.7085, lon: -105.0814 },
  { id: "port-2st-lucie", name: "Port St. Lucie", lat: 27.2730, lon: -80.3582 },
  { id: "chand2ler", name: "Chandler", lat: 33.3062, lon: -111.8413 },
  { id: "madi2son", name: "Madison", lat: 43.0731, lon: -89.4012 },
  { id: "lu2bbock", name: "Lubbock", lat: 33.5779, lon: -101.8552 },
  { id: "gil2bert", name: "Gilbert", lat: 33.3528, lon: -111.7890 },
  { id: "b2oston", name: "Boston", lat: 42.3601, lon: -71.0589 },
  { id: "burl2ington", name: "Burlington", lat: 44.4759, lon: -73.2121 },
  { id: "hono2lulu", name: "Honolulu", lat: 21.3069, lon: -157.8583 },
  { id: "boi2se", name: "Boise", lat: 43.6150, lon: -116.2023 },
  { id: "spokan2e", name: "Spokane", lat: 47.6588, lon: -117.4260 },
  { id: "cinci2nnati", name: "Cincinnati", lat: 39.1031, lon: -84.5120 },
  { id: "salt2-lake-city", name: "Salt Lake City", lat: 40.7608, lon: -111.8910 },
  { id: "mad2ison", name: "Madison", lat: 43.0731, lon: -89.4012 },
  { id: "mo2ntgomery", name: "Montgomery", lat: 32.3668, lon: -86.3000 },
  { id: "c2hattanooga", name: "Chattanooga", lat: 35.0456, lon: -85.3097 },
{ id: "mi2ami", name: "Miami", lat: 25.7617, lon: -80.1918 },
  { id: "mi2nneapolis", name: "Minneapolis", lat: 44.9778, lon: -93.2650 },
  { id: "d2enver", name: "Denver", lat: 39.7392, lon: -104.9903 },
  { id: "2charlotte", name: "Charlotte", lat: 35.2271, lon: -80.8431 },
  { id: "detroi2t", name: "Detroit", lat: 42.3314, lon: -83.0458 },
  { id: "seatt2le", name: "Seattle", lat: 47.6062, lon: -122.3321 },
  { id: "port2land", name: "Portland", lat: 45.5051, lon: -122.6750 },
  { id: "cin2cinnati", name: "Cincinnati", lat: 39.1031, lon: -84.5120 },
  { id: "co2lumbus", name: "Columbus", lat: 39.9612, lon: -82.9988 },
  { id: "i2ndianapolis", name: "Indianapolis", lat: 39.7684, lon: -86.1580 },
  { id: "2nashville", name: "Nashville", lat: 36.1627, lon: -86.7816 },
  { id: "sacrament2o", name: "Sacramento", lat: 38.5816, lon: -121.4944 },
  { id: "honolulu2", name: "Honolulu", lat: 21.3069, lon: -157.8583 },
  { id: "las-veg2as", name: "Las Vegas", lat: 36.1699, lon: -115.1398 },
  { id: "baltim2ore", name: "Baltimore", lat: 39.2904, lon: -76.6122 },
  { id: "buffa2lo", name: "Buffalo", lat: 42.8864, lon: -78.8784 },
  { id: "tamp2a", name: "Tampa", lat: 27.9506, lon: -82.4572 },
  { id: "lon2g-beach", name: "Long Beach", lat: 33.7683, lon: -118.1956 },
  { id: "me2sa", name: "Mesa", lat: 33.4152, lon: -111.8315 },
  { id: "r2aleigh", name: "Raleigh", lat: 35.7796, lon: -78.6382 },
  { id: "2virginia-beach", name: "Virginia Beach", lat: 36.8529, lon: -75.9783 },
  
  // South America
  { id: "sao-pau2lo", name: "São Paulo", lat: -23.5505, lon: -46.6333 },
  { id: "rio-de2-janeiro", name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
  { id: "bueno2s-aires", name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
  { id: "bogo2ta", name: "Bogotá", lat: 4.7110, lon: -74.0721 },
  { id: "lim2a", name: "Lima", lat: -12.0464, lon: -77.0428 },
  { id: "ca2racas", name: "Caracas", lat: 10.4915, lon: -66.8792 },
  { id: "s2antiago", name: "Santiago", lat: -33.4489, lon: -70.6693 },
  { id: "2quito", name: "Quito", lat: -0.1807, lon: -78.4678 },
  { id: "medell2in", name: "Medellín", lat: 6.2442, lon: -75.5812 },
  { id: "asunc2ion", name: "Asunción", lat: -25.2637, lon: -57.5759 },
  { id: "mont2evideo", name: "Montevideo", lat: -34.9011, lon: -56.1645 },
  { id: "gua2yaquil", name: "Guayaquil", lat: -2.1700, lon: -79.9224 },
  { id: "ca2li", name: "Cali", lat: 3.4516, lon: -76.5310 },
  { id: "r2osario", name: "Rosario", lat: -32.9468, lon: -60.6393 },
  { id: "porto-a2legre", name: "Porto Alegre", lat: -30.0331, lon: -51.2300 },
  { id: "belo-h2orizonte", name: "Belo Horizonte", lat: -19.9191, lon: -43.9386 },
  { id: "salva2dor", name: "Salvador", lat: -12.9714, lon: -38.5014 },
  { id: "barr2anquilla", name: "Barranquilla", lat: 10.9639, lon: -74.7966 },
  { id: "rec2ife", name: "Recife", lat: -8.0476, lon: -34.8770 },
  { id: "sa2o-luis", name: "São Luís", lat: -2.5387, lon: -44.3028 },
  { id: "m2aceio", name: "Maceió", lat: -9.6658, lon: -35.7350 },
  { id: "2managua", name: "Managua", lat: 12.1364, lon: -86.2514 },
  { id: "la-pa2z", name: "La Paz", lat: -16.5000, lon: -68.1193 },
  { id: "sant2a-cruz", name: "Santa Cruz", lat: -17.7840, lon: -63.1812 },
  { id: "ant2ofagasta", name: "Antofagasta", lat: -23.6500, lon: -70.3975 },
  { id: "cu2iaba", name: "Cuiabá", lat: -15.6010, lon: -56.0979 },
  { id: "teresi2na", name: "Teresina", lat: -5.0919, lon: -42.8034 },
  { id: "goian2ia", name: "Goiânia", lat: -16.6869, lon: -49.2648 },
   { id: "tok2yo", name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  { id: "bei2jing", name: "Beijing", lat: 39.9042, lon: 116.4074 },
  { id: "se2oul", name: "Seoul", lat: 37.5665, lon: 126.9780 },
  { id: "shangh2ai", name: "Shanghai", lat: 31.2304, lon: 121.4737 },
  { id: "hong-2kong", name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
  { id: "taip2ei", name: "Taipei", lat: 25.0324, lon: 121.5645 },
  { id: "osa2ka", name: "Osaka", lat: 34.6937, lon: 135.5023 },
  { id: "guangz2hou", name: "Guangzhou", lat: 23.1291, lon: 113.2644 },
  { id: "shenz2hen", name: "Shenzhen", lat: 22.5431, lon: 114.0579 },
  { id: "toky2o", name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  
  // Southeast Asia
  { id: "bangko2k", name: "Bangkok", lat: 13.7563, lon: 100.5018 },
  { id: "singapo2re", name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { id: "jakart2a", name: "Jakarta", lat: -6.2088, lon: 106.8456 },
  { id: "manil2a", name: "Manila", lat: 14.5995, lon: 120.9842 },
  { id: "kuala-2lumpur", name: "Kuala Lumpur", lat: 3.1390, lon: 101.6869 },
  { id: "ho-ch2i-minh-city", name: "Ho Chi Minh City", lat: 10.8231, lon: 106.6297 },
  { id: "hano2i", name: "Hanoi", lat: 21.0285, lon: 105.8542 },
  { id: "yogyaka2rta", name: "Yogyakarta", lat: -7.7956, lon: 110.3645 },
  { id: "bandun2g", name: "Bandung", lat: -6.9175, lon: 107.6191 },
  { id: "denpa2sar", name: "Denpasar", lat: -8.6500, lon: 115.2167 },

  // South Asia
  { id: "delh2i", name: "Delhi", lat: 28.6139, lon: 77.2090 },
  { id: "mumb2ai", name: "Mumbai", lat: 19.0760, lon: 72.8777 },
  { id: "bangl2adesh", name: "Dhaka", lat: 23.8103, lon: 90.4125 },
  { id: "karac2hi", name: "Karachi", lat: 24.8607, lon: 67.0011 },
  { id: "lahor2e", name: "Lahore", lat: 31.5497, lon: 74.3436 },
  { id: "colomb2o", name: "Colombo", lat: 6.9271, lon: 79.8612 },
  { id: "chenn2ai", name: "Chennai", lat: 13.0827, lon: 80.2707 },
  { id: "bengalur2u", name: "Bengaluru", lat: 12.9716, lon: 77.5946 },
  { id: "hyderab2ad", name: "Hyderabad", lat: 17.3850, lon: 78.4867 },
  { id: "ahmedab2ad", name: "Ahmedabad", lat: 23.0225, lon: 72.5714 },

  // Central Asia
  { id: "almaty2", name: "Almaty", lat: 43.2220, lon: 76.8512 },
  { id: "tashke2nt", name: "Tashkent", lat: 41.2995, lon: 69.2401 },
  { id: "bishk2ek", name: "Bishkek", lat: 42.8746, lon: 74.6126 },
  { id: "ashgaba2t", name: "Ashgabat", lat: 37.9601, lon: 58.3790 },
  { id: "dushan2be", name: "Dushanbe", lat: 38.5598, lon: 68.7782 },

  // West Asia
  { id: "tehra2n", name: "Tehran", lat: 35.6892, lon: 51.3890 },
  { id: "bagh2dad", name: "Baghdad", lat: 33.3152, lon: 44.3661 },
  { id: "doh2a", name: "Doha", lat: 25.276987, lon: 51.520008 },
  { id: "riyad2h", name: "Riyadh", lat: 24.7136, lon: 46.6753 },
  { id: "jerus2alem", name: "Jerusalem", lat: 31.7683, lon: 35.2137 },
  { id: "duba2i", name: "Dubai", lat: 25.276987, lon: 55.296249 },
  { id: "beiru2t", name: "Beirut", lat: 33.8938, lon: 35.5018 },
  { id: "amma2n", name: "Amman", lat: 31.9539, lon: 35.9106 },
  { id: "abu-dhab2i", name: "Abu Dhabi", lat: 24.4539, lon: 54.3773 },

  // Eastern Russia
  { id: "vladiv2ostok", name: "Vladivostok", lat: 43.1195, lon: 131.8855 },
  { id: "novosib2irsk", name: "Novosibirsk", lat: 55.0084, lon: 82.9357 },

  // Southeast Asia (more cities)
  { id: "manad2o", name: "Manado", lat: 1.4915, lon: 124.8451 },
  { id: "sura2baya", name: "Surabaya", lat: -7.2504, lon: 112.7688 },
  { id: "ceb2u", name: "Cebu", lat: 10.3119, lon: 123.8854 },
  { id: "dav2ao", name: "Davao", lat: 7.1907, lon: 125.4553 },
  
  // Additional South American cities
  { id: "lim2a", name: "Lima", lat: -12.0464, lon: -77.0428 },
  { id: "carac2as", name: "Caracas", lat: 10.4915, lon: -66.8792 },
  { id: "santia2go", name: "Santiago", lat: -33.4489, lon: -70.6693 },
  { id: "buen2os-aires", name: "Buenos Aires", lat: -34.6037, lon: -58.3816 },
  { id: "rio-d2e-janeiro", name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
  { id: "bog2ota", name: "Bogotá", lat: 4.7110, lon: -74.0721 },
  { id: "guaya2quil", name: "Guayaquil", lat: -2.1700, lon: -79.9224 },
  { id: "medel2lin", name: "Medellín", lat: 6.2442, lon: -75.5812 },
  { id: "asunc2ion", name: "Asunción", lat: -25.2637, lon: -57.5759 },
  { id: "monte2video", name: "Montevideo", lat: -34.9011, lon: -56.1645 },
    { id: "syd2ney", name: "Sydney", lat: -33.8688, lon: 151.2093 },
  { id: "melbo2urne", name: "Melbourne", lat: -37.8136, lon: 144.9631 },
  { id: "bris2bane", name: "Brisbane", lat: -27.4698, lon: 153.0251 },
  { id: "pert2h", name: "Perth", lat: -31.9505, lon: 115.8605 },
  { id: "adelai2de", name: "Adelaide", lat: -34.9285, lon: 138.6007 },
  { id: "hobar2t", name: "Hobart", lat: -42.8821, lon: 147.3272 },
  { id: "darw2in", name: "Darwin", lat: -12.4634, lon: 130.8456 },
  { id: "canberr2a", name: "Canberra", lat: -35.2809, lon: 149.1300 },

  // Oceania
  { id: "aucklan2d", name: "Auckland", lat: -36.8485, lon: 174.7633 },
  { id: "wellin2gton", name: "Wellington", lat: -41.2867, lon: 174.7762 },
  { id: "chris2tchurch", name: "Christchurch", lat: -43.5321, lon: 172.6362 },
  { id: "suva2", name: "Suva", lat: -18.1248, lon: 178.0650 },
  { id: "port2-moresby", name: "Port Moresby", lat: -9.4438, lon: 147.1803 },
  { id: "hon2olulu", name: "Honolulu", lat: 21.3069, lon: -157.8583 },
  { id: "fi2ji", name: "Fiji", lat: -17.7134, lon: 178.0650 },
  { id: "ap2ia", name: "Apia", lat: -13.8333, lon: -171.7667 },
  { id: "tara32wa", name: "Tarawa", lat: 1.4518, lon: 173.0107 },
  { id: "port-v2ila", name: "Port Vila", lat: -17.7333, lon: 168.3214 },

  // Papua New Guinea
  { id: "la2e", name: "Lae", lat: -6.7305, lon: 146.9947 },
  { id: "mou32nt-hagen", name: "Mount Hagen", lat: -5.8615, lon: 144.2872 },
  { id: "madang", name: "Madang", lat: -5.2078, lon: 145.7886 },

  // New Zealand
  { id: "dunedin", name: "Dunedin", lat: -45.8788, lon: 170.5028 },
  { id: "quee2nstown", name: "Queenstown", lat: -45.0312, lon: 168.6626 },
  { id: "whangarei", name: "Whangarei", lat: -35.7288, lon: 174.3231 },

  // Other Oceania Cities
  { id: "funafu2ti", name: "Funafuti", lat: -7.4898, lon: 179.1940 },
  { id: "tarawa", name: "Tarawa", lat: 1.4518, lon: 173.0107 },
  { id: "nuku'alofa", name: "Nuku'alofa", lat: -21.1395, lon: -175.2012 },
  { id: "palikir", name: "Palikir", lat: 6.9168, lon: 158.1497 },
  { id: "honiara", name: "Honiara", lat: -9.4333, lon: 159.9500 }


];
