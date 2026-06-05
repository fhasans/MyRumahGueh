const fs = require('fs');

const htmlFile = 'index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

const originLat = -6.3643712;
const originLon = 106.7960828;

const text = `
TEMPAT IBADAH:
MASJID AR-RIDHO : -6.363849376741499, 106.79549070525424
GEREJA GPIB Cinere : -6.349777557368566, 106.77750304338592

TRANSPORTASI:
Tol Desari (GT Brigif): -6.34350689410226, 106.79725767372125
Stasiun KRL Lenteng Agung : -6.3303619954746635, 106.8348055796303
Stasiun Univ. Pancasila : Stasiun Universitas Pancasila, RT.1/RW.3, Lenteng Agung, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12610
Tol JORR (Lenteng Agung) : -6.301235329371195, 106.83546684175286

RUMAH SAKIT/APOTEK: 
RS Graha Permata Ibu : -6.3706113000857, 106.81314894597125
RSUD Jagakarsa : -6.31618059604433, 106.81134552996929
RSU Zahirah : -6.335811352552236, 106.82354444068982
Klinik Grand Mitra Medika : -6.348914134487393, 106.80210858721871
APOTEK AMAZON : -6.352175286515586, 106.80139067247003
APOTEK PERMATA : -6.363196002297496, 106.80687004983919
APOTEK AL-KAHFI : -6.363552370383682, 106.80657662285236
APOTEK MARYAM : -6.368553196293595, 106.79873565404016

SEKOLAH:
TK Khalifah Krukut Depok : -6.371434331861703, 106.7905481554935
SDN Cipedak 01 Pagi : -6.362095855519873, 106.80143631145273
SDN Cipedak 02 Pagi : -6.362294152569565, 106.80143699005495
SMPN 253 : -6.363789408229785, 106.79436665866511
SMPN 131 : -6.362471136145665, 106.8016067294451
Madrasah Aliyah Citra Cendekia : -6.357554203215393, 106.80015417054958
Univ. Indonesia (UI) : -6.360632165562926, 106.82723885172196
Univ. Pancasila (UP) : -6.339819701912729, 106.83325426673575
Institut Sains dan Teknologi Nasional (ISTN) : -6.355369320578355, 106.81154277458467

TOKO BUAH: 
IRVANA BUAH : -6.367858471775571, 106.79821237569482
KING BUAH MANIS : -6.354385916323398, 106.801324101931

KEBUTUHAN & PERBELANJAAN:
FORTUNA SWALAYAN: -6.35344271315286, 106.8017381583543
INDOMARET MATOA: -6.362768326406577, 106.80225438492157
ALFAMART MATOA: -6.362993871560798, 106.80210138160838
MR. DIY : -6.337011586668744, 106.80608116995438

SPBU:
SPBU PERTAMINA TIMBUL: -6.34996923474387, 106.80180722819303
SPBU PERTAMINA M. Kahfi 2 : -6.353757638008335, 106.81076263961948
SPBU PERTAMINA Kukusan : -6.374164915892488, 106.81337332733291
SHELL : -6.348636873926239, 106.8022459834926

GYM: 
READY 2 FIT GYM : -6.373157070288325, 106.78512089991578
MASTER GYM : -6.3692526224459165, 106.80844254116629
HOUSE OF METAMORFIT JAGAKARSA : -6.354975403170294, 106.80120027054959
DEAL 2 FIT : -6.363404003317775, 106.80039365889284
IDEAL GYM MATOA : -6.363303373750421, 106.80019517542752

TOKO BANGUNAN/MATRIAL:
TB MITRA HIKMAT "B" : -6.368028649895167, 106.79831677073055
TOKO BAHAN BANGUNAN SUKMA JAYA : -6.368215912512539, 106.79841601249602
TB. BERKAH JAYA : -6.366150521824285, 106.79458591569058

FAST FOOD: 
Domino's Pizza M Kahfi I: -6.350575472510577, 106.80180713743975
Pizza Hut : -6.363230969735878, 106.80689607400548
Hokben Moh. Kahfi: -6.349248303070185, 106.80168787054959
KFC Box Jagakarsa: -6.335060171086688, 106.80677200708182
Sushi Stop Beji : -6.37194907258795, 106.80065362291471
D'BESTO : -6.362900469730526, 106.80207318363212

COFFEE SHOP/DESSERT : 
KOPI KENANGAN : -6.36355086520488, 106.80645620907933
MOMOYO : -6.363552198687151, 106.80642132359762
ALESKA COFFEE & LOUNGE : -6.363245051502104, 106.80250052605112
HAUS : -6.376013336347865, 106.80147622944509
KOPTAN (Kopi Ketan) : -6.336153367553593, 106.80637434458706
KEDAI TheSakbin : -6.366514403372262, 106.79825055151319

KULINER: 
Mie Ayam Jamur Hoko : -6.374580837107277, 106.80117044110182
ARCHIC Ayam Geprek Crispy : -6.376529067195579, 106.80149117916417
PANCONG LUMER SULTAN : -6.377081336942741, 106.8014459020664
SATE TAICHAN SAMBER 88 : -6.3775951264658435, 106.80163765432258
NASI GORENG SEMERBAK : -6.378020237172098, 106.80152082944512
RM AMPERA SAIYO 1 : -6.377242303560366, 106.80159432944511
SEAFOOD 14 KING : -6.376751032032791, 106.801303634519
ROSCIK RADEN SANIM : -6.3767577846110965, 106.80147928098893
SEMEJA - Bakso & Bakwan & Yogurt : -6.376696989246852, 106.80126612568469
MARI NGE'JUICE : -6.3753352363377305, 106.80116801826318
BAKSO & MIE AYAM STY : -6.3750317371157665, 106.8010705999974
NASI UDUK ASLI BETAWI MPOK EDAH : -6.374543633549074, 106.80102768560025
NASI BEBEK MUL : -6.374525641421841, 106.80097941078255
DAPUR SEBLAK 81 : -6.373452437086019, 106.8008335705496
NASI GORENG WIJAYA : -6.37327650537916, 106.80079669017596
BEBEK PINANG MADURA BY TANITA : -6.373009337077666, 106.80070812944507
RM AMPERA SAIYO 2  : -6.372893381995673, 106.80086839143227
SOTO BETAWI MADANI : -6.372646203479729, 106.8006522294451
D'BESTO RADEN SANIM : -6.372446280766697, 106.80076152946148
AYAM BAKAR KALIO : -6.3706997034456085, 106.79988262944512
WARUNG NASI RAWON & PECEL MADIUN : -6.369857737018326, 106.7994216705496
MENDADAK WARKOP : -6.370060992805151, 106.79967916261603
NASI LIWET BAROKAH : -6.369751670603663, 106.79956359999736
AYAM GEPREK BANG ROHMANI : -6.3690614258955724, 106.7991368535248
PECEL AYAM & NASI UDUK MAS RIZKY : -6.368831370585148, 106.79902104107724
RM BUNGO SARAI : -6.369106484124276, 106.79903187811959
AYAM PENYET SAMBAL IJO : -6.368954541821406, 106.79905668855277
LAMBE DIMSUM : -6.369355515255397, 106.79919357627074
RM PADANG PUTRA BUNGSU : -6.36940828422612, 106.79919559260183
WARUNG SATE SOLO PAK NO : -6.366371336203853, 106.79819997054962
NASI BEBEK MADURA CAK IQBAL: -6.366318022836224, 106.79823349816199
THE SATE : -6.3662869018712485, 106.7980351594909
NASI GORENG MAZ BAGONG : -6.365109170510271, 106.79829169999734
NASI UDUK LONTONG SAYUR SARI KOKO : -6.364926503344443, 106.7979377705496
SATE PADANG PIAMAN JAYA : -6.3389421028902335, 106.80510049999735
NASI BEBEK RICA RICA SPECIAL: -6.337953436419147, 106.80554489999737
BURGER BUNDER CIGANJUR : -6.337649602867693, 106.80566754110183
WARUNG TENDA CIGANJUR : -6.337611614974045, 106.80559780366806
WARUNG SOP IGA PAK PUR : -6.364771336922604, 106.79693699999736
RM AUE SARUMPUN : -6.363444569739328, 106.8029349705496
RM AMPERA SAIYO CURUG : -6.368087036984995, 106.79835572944509
NASI UDUK BUDE NANI : -6.366895136962557, 106.79630531165411
MIE AYAM & NASI GORENG HERI BANDUNG : -6.366157536200662, 106.7942676294451
WARUNG SOTO & AYAM PENYET ERNA : -6.36513903692951, 106.79823254110183
AYAM BAKAR & IKAN BAKAR SURAMADU CAK SENO : -6.365358955040155, 106.7980642324876
`;

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; 
  var dLat = deg2rad(lat2-lat1);
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; 
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const lines = text.split('\n');
const result = {};
let currentCategory = '';

const iconMap = {
    'TEMPAT IBADAH': 'fa-mosque', 
    'TRANSPORTASI': 'fa-train', 
    'RUMAH SAKIT/APOTEK': 'fa-hospital',
    'SEKOLAH': 'fa-school',
    'TOKO BUAH': 'fa-apple-whole',
    'KEBUTUHAN & PERBELANJAAN': 'fa-cart-shopping',
    'SPBU': 'fa-gas-pump',
    'GYM': 'fa-dumbbell',
    'TOKO BANGUNAN/MATRIAL': 'fa-hammer',
    'FAST FOOD': 'fa-burger',
    'COFFEE SHOP/DESSERT': 'fa-mug-hot',
    'KULINER': 'fa-utensils'
};

const getIcon = (category, name) => {
    let lowerName = name.toLowerCase();
    if (lowerName.includes('gereja') || lowerName.includes('gpib')) return 'fa-church';
    if (lowerName.includes('tol') || lowerName.includes('gt')) return 'fa-road';
    if (lowerName.includes('univ') || lowerName.includes('institut')) return 'fa-graduation-cap';
    return iconMap[category] || 'fa-map-pin';
};

lines.forEach(line => {
    line = line.trim();
    if (!line) return;
    
    if (line.endsWith(':') && !line.includes(',')) {
        currentCategory = line.replace(':', '').trim();
        result[currentCategory] = [];
    } else if (line.includes(':')) {
        let parts = line.split(':');
        let name = parts[0].trim();
        let value = parts.slice(1).join(':').trim();
        let lat, lon, urlValue;
        
        if (value.includes(',')) {
            let coords = value.split(',');
            if (!isNaN(parseFloat(coords[0])) && !isNaN(parseFloat(coords[1]))) {
                lat = parseFloat(coords[0]);
                lon = parseFloat(coords[1]);
                urlValue = lat + ',' + lon;
            } else {
                urlValue = value; 
            }
        } else {
            urlValue = value; 
        }
        
        let distNum = 999; // Default large
        let distanceStr = '';
        if (lat && lon) {
            let distance = getDistanceFromLatLonInKm(originLat, originLon, lat, lon);
            distance = distance * 1.3; 
            distNum = parseFloat(distance.toFixed(1));
            distanceStr = distNum.toFixed(1);
        } else {
            if (name.includes('Pancasila')) {
                distNum = 9.4;
                distanceStr = '9.4';
            }
        }
        
        result[currentCategory].push({
            name,
            value,
            lat,
            lon,
            urlValue,
            distanceStr,
            distNum,
            icon: getIcon(currentCategory, name)
        });
    }
});

let htmlOutput = '';
for (let cat in result) {
    // SORT items by distNum
    let items = result[cat];
    items.sort((a, b) => a.distNum - b.distNum);

    // Reorder items so that they populate column 1 then column 2
    // If standard flex row wrap / grid cols-2 goes Left, Right, Left, Right
    // We want Left, Left, Left... then Right, Right, Right...
    // So the sorted items: 0, 1, 2, 3, 4
    // Should be placed in grid cells: (Col 1: 0, 1, 2), (Col 2: 3, 4)
    // The grid mapping to index: 
    // Grid idx 0 -> Col 1 Row 1
    // Grid idx 1 -> Col 2 Row 1
    // Grid idx 2 -> Col 1 Row 2
    // Grid idx 3 -> Col 2 Row 2
    
    let reorderedItems = [];
    let n = items.length;
    let numRows = Math.ceil(n / 2);
    
    for (let i = 0; i < numRows; i++) {
        // Col 1
        reorderedItems.push(items[i]);
        // Col 2
        let rightIdx = i + numRows;
        if (rightIdx < n) {
            reorderedItems.push(items[rightIdx]);
        }
    }

    htmlOutput += `\n<div>\n`;
    htmlOutput += `    <p class="font-bold text-gray-800 mb-3">${cat}:</p>\n`;
    htmlOutput += `    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">\n`;
    
    reorderedItems.forEach(item => {
        let href = `https://www.google.com/maps/dir/?api=1&origin=Gg.+Atin+No.+73A,+Cipedak,+Jagakarsa,+Jakarta+Selatan&destination=${encodeURIComponent(item.urlValue)}`;
        
        htmlOutput += `        <a href="${href}" target="_blank" class="flex items-center justify-between p-3 rounded-xl border border-gray-100 bg-white hover:bg-blue-50 hover:border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 group">\n`;
        htmlOutput += `            <span class="text-gray-700 font-medium text-sm"><i class="fa-solid ${item.icon} text-gray-400 group-hover:text-secondary mr-2 w-4"></i>${item.name}</span>\n`;
        htmlOutput += `            <span class="text-xs font-bold text-secondary bg-blue-100 px-2 py-1 rounded-md">± ${item.distanceStr} km</span>\n`;
        htmlOutput += `        </a>\n`;
    });
    
    htmlOutput += `    </div>\n`;
    htmlOutput += `</div>\n`;
}

let startIdx = html.indexOf('<h3 class="text-lg font-bold text-primary mb-3 text-secondary"><i');
const h3EndStr = 'Keunggulan Lokasi & Aksesibilitas</h3>';
startIdx = html.indexOf(h3EndStr, startIdx) + h3EndStr.length;

let endIdx = html.indexOf('<!-- Right Column: Sticky Contact Card -->');
let beforeEnd = html.substring(0, endIdx);
let lastDivDiv = beforeEnd.lastIndexOf('</div>\r\n            </div>');
if(lastDivDiv === -1) lastDivDiv = beforeEnd.lastIndexOf('</div>\n            </div>');
endIdx = lastDivDiv;

let newHtml = html.substring(0, startIdx) + '\n\n' + htmlOutput + '\n' + html.substring(endIdx);

fs.writeFileSync(htmlFile, newHtml);
console.log('Replaced and sorted successfully');
