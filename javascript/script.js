
var total = Number(localStorage.getItem('clicks')) || 0;
var c = Number(localStorage.getItem('usable')) || 0;

const cpsbase = [1, 4, 8,16,32,64,128,200,412,8024,16048,32100];
const costbase = [15, 150, 1400,23700,92850,445910,2035340,12395200,82885000,500000000,3952340200,29900050001];
const amountbase = [0,0,0,0,0,0,0,0,0,0,0,0];

clickiamounts = [];
clickicost = [];
clickicps = [];

function clickicostfunction(){
    let storedArray = localStorage.getItem('clickicost');
    if (storedArray) {
        clickicost = storedArray.split(',').map(Number);
    } else {
        clickicost = costbase;
    }
}
function clickicpsfunction(){
    let storedArray = localStorage.getItem('clickicps');
    if (storedArray) {
        clickicps = storedArray.split(',').map(Number);
    } else {
        clickicps = cpsbase;

    }
}
function clickiamountfunction(){
    let storedArray = localStorage.getItem('clickiamount');
    if (storedArray) {
        clickiamounts = storedArray.split(',').map(Number);
    } else {
        clickiamounts = amountbase;
    }
}
clickicostfunction();
clickiamountfunction();
clickicpsfunction();



const totcpscalc = (clickiamounts[0]*clickicps[0]) + (clickiamounts[1]*clickicps[1]) + (clickiamounts[2]*clickicps[2]) + (clickiamounts[3]*clickicps[3]) + (clickiamounts[4]*clickicps[4]) + (clickiamounts[5]*clickicps[5]) + (clickiamounts[6]*clickicps[6]) + (clickiamounts[7]*clickicps[7]) + (clickiamounts[8]*clickicps[8]) + (clickiamounts[9]*clickicps[9]) + (clickiamounts[10]*clickicps[10]) + (clickiamounts[11]*clickicps[11]);
var totcps = totcpscalc
var marketpricegouge = 1.25;
var locked = [
    true, // Mouse
    false, // Mouse Wheel
    false,  // Hampter
    false, // Rat
    false, // Lizard
    false  // Dog
]







function detectiflocked(){
    if(total >= 70){
        locked[1] = true;
        console.log('unlocked mouse wheel');
    }
    if(total >= 1000){
        locked[2] = true;
        console.log('unlocked hampter');
    }
    if(total >= 12500){
        locked[3] = true;
        console.log('unlocked rat');
    }
    if(total >= 66543){
        locked[4] = true;
        console.log('unlocked lizard');
    }
    if(total >= 300000){
        locked[5] = true;
        console.log('unlocked dog');   
    }
    for(let i = 0; i < locked.length; i++){
        if(locked[i] == true){
            if(i == 1){
                    text('Buy Mouse Wheel || Cost ⌬'+abreviateNumber(clickicost[1])+'|| '+clickicps[1]+'IPS','Click2');
            }
            if(i == 2){
                    text('Buy Hampter || Cost ⌬'+abreviateNumber(clickicost[2])+'|| '+clickicps[2]+'IPS','Click3');
            }
            if(i == 3){
                text('Buy Rat || Cost ⌬'+abreviateNumber(clickicost[3])+'|| '+clickicps[3]+'IPS','Click4');
            }
            if(i == 4){
                text('Buy Lizard || Cost ⌬'+abreviateNumber(clickicost[4])+'|| '+clickicps[4]+'IPS','Click5');
            }
            if(i == 5){
                text('Buy Dog || Cost ⌬'+abreviateNumber(clickicost[5])+'|| '+clickicps[5]+'IPS','Click6');
            }

        }
        else{
            if(i == 1){

                    text('Locked || Unlocks at ⌬250','Click2');
            }
            if(i == 2){
                    text('Locked || Unlocks at ⌬1000','Click3');
            }
            if(i == 3){
                text('Locked || Unlocks at ⌬12500','Click4');
            }
            if(i == 4){
                text('Locked || Unlocks at ⌬66543','Click5');
            }
            if(i == 5){
                text('Locked || Unlocks at ⌬300K','Click6');
            }
        }
    }
    
}








clickiamountfunction();




const suffex = [
    "",       // 10^0   = 1
    "K",      // 10^3   = Thousand
    "M",      // 10^6   = Million
    "B",      // 10^9   = Billion
    "T",      // 10^12  = Trillion
    "Qa",     // 10^15  = Quadrillion
    "Qi",     // 10^18  = Quintillion
    "Sx",     // 10^21  = Sextillion
    "Sp",     // 10^24  = Septillion
    "Oc",     // 10^27  = Octillion
    "No",     // 10^30  = Nonillion
    "Dc",     // 10^33  = Decillion
    "Ud",     // 10^36  = Undecillion
    "Dd",     // 10^39  = Duodecillion
    "Td",     // 10^42  = Tredecillion
    "Qad",    // 10^45  = Quattuordecillion
    "Qid",    // 10^48  = Quindecillion
    "Sxd",    // 10^51  = Sexdecillion
    "Spd",    // 10^54  = Septendecillion
    "Ocd",    // 10^57  = Octodecillion
    "Nod",    // 10^60  = Novemdecillion
    "Vg",     // 10^63  = Vigintillion
    "Uvg",    // 10^66  = Unvigintillion
    "Dvg",    // 10^69  = Duovigintillion
    "Tvg",    // 10^72  = Trevigintillion
    "Qavg",   // 10^75  = Quattuorvigintillion
    "Qivg",   // 10^78  = Quinvigintillion
    "Sxvg",   // 10^81  = Sexvigintillion
    "Spvg",   // 10^84  = Septenvigintillion
    "Ocvg",   // 10^87  = Octovigintillion
    "Novg",   // 10^90  = Novemvigintillion
    "Tg",     // 10^93  = Trigintillion
    "Utg",    // 10^96  = Untrigintillion
    "Dtg",    // 10^99  = Duotrigintillion
    // Continue through Centillion range
    "Ttg",    // 10^102 = Tretrigintillion
    "Qatg",   // 10^105 = Quattuortrigintillion
    "Qitg",   // 10^108 = Quintrigintillion
    "Sxtg",   // 10^111 = Sextrigintillion
    "Sptg",   // 10^114 = Septentrigintillion
    "Octg",   // 10^117 = Octotrigintillion
    "Notg",   // 10^120 = Novemtrigintillion
    "Qag",    // 10^123 = Quadragintillion
    "Uqag",   // 10^126 = Unquadragintillion
    "Dqag",   // 10^129 = Duoquadragintillion
    "Tqag",   // 10^132 = Trequadragintillion
    "Qaqag",  // 10^135 = Quattuorquadragintillion
    "Qiqag",  // 10^138 = Quinquadragintillion
    "Sxqag",  // 10^141 = Sexquadragintillion
    "Spqag",  // 10^144 = Septenquadragintillion
    "Ocqag",  // 10^147 = Octoquadragintillion
    "Noqag",  // 10^150 = Novemquadragintillion
    "Qg",     // 10^153 = Quinquagintillion
    "Uqg",    // 10^156 = Unquinquagintillion
    "Dqg",    // 10^159 = Duoquinquagintillion
    "Tqg",    // 10^162 = Trequinquagintillion
    "Qaqg",   // 10^165 = Quattuorquinquagintillion
    "Qiqg",   // 10^168 = Quinquinquagintillion
    "Sxqg",   // 10^171 = Sexquinquagintillion
    "Spqg",   // 10^174 = Septenquinquagintillion
    "Ocqg",   // 10^177 = Octoquinquagintillion
    "Noqg",   // 10^180 = Novemquinquagintillion
    "Sg",     // 10^183 = Sexagintillion
    "Usg",    // 10^186 = Unsexagintillion
    "Dsg",    // 10^189 = Duosexagintillion
    "Tsg",    // 10^192 = Tresexagintillion
    "Qasg",   // 10^195 = Quattuorsexagintillion
    "Qisg",   // 10^198 = Quinisexagintillion
    "Sxsg",   // 10^201 = Sexsexagintillion
    "Spsg",   // 10^204 = Septensexagintillion
    "Ocsg",   // 10^207 = Octosexagintillion
    "Nosg",   // 10^210 = Novemsexagintillion
    "Spg",    // 10^213 = Septuagintillion
    "Uspg",   // 10^216 = Unseptuagintillion
    "Dspg",   // 10^219 = Duoseptuagintillion
    "Tspg",   // 10^222 = Treseptuagintillion
    "Qaspg",  // 10^225 = Quattuorseptuagintillion
    "Qispg",  // 10^228 = Quinseptuagintillion
    "Sxsptg", // 10^231 = Sexseptuagintillion
    "Spspg",  // 10^234 = Septenseptuagintillion
    "Ocspg",  // 10^237 = Octoseptuagintillion
    "Nospg",  // 10^240 = Novemseptuagintillion
    "Og",     // 10^243 = Octogintillion
    "Uog",    // 10^246 = Unoctogintillion
    "Dog",    // 10^249 = Duooctogintillion
    "Tog",    // 10^252 = Treoctogintillion
    "Qaog",   // 10^255 = Quattuoroctogintillion
    "Qiog",   // 10^258 = Quinoctogintillion
    "Sxog",   // 10^261 = Sexoctogintillion
    "Spog",   // 10^264 = Septenoctogintillion
    "Ocog",   // 10^267 = Octooctogintillion
    "Noog",   // 10^270 = Novemoctogintillion
    "Ng",     // 10^273 = Nonagintillion
    "Ung",    // 10^276 = Unnonagintillion
    "Dng",    // 10^279 = Duononagintillion
    "Tng",    // 10^282 = Trenonagintillion
    "Qang",   // 10^285 = Quattuornonagintillion
    "Qing",   // 10^288 = Quinnonagintillion
    "Sxng",   // 10^291 = Sexnonagintillion
    "Spng",   // 10^294 = Septennonagintillion
    "Ocng",   // 10^297 = Octononagintillion
    "Non",    // 10^300 = Novemnonagintillion
    "Ct",     // 10^303 = Centillion
    "UCt",    // 10^306 = Uncentillion
    "DCt",    // 10^309 = Duocentillion
    "TCt",    // 10^312 = Trecentillion
    "QACt",   // 10^315 = Quattuorcentillion
    "QiCt",   // 10^318 = Quingentillion
    "SxCt",   // 10^321 = Sexcentillion
    "SpCt",   // 10^324 = Septencentillion
    "OcCt",   // 10^327 = Octocentillion
    "NoCt",   // 10^330 = Novencentillion
    "DCt2",   // 10^333 = Duo-ducentillion
    "DCt2", // 10^333 = Duo-ducentillion
    "NoCt3", // 10^378 = Novem-trecentillion
    "DCt4", // 10^381 = Duo-quadringentillion
    "TCt4", // 10^384 = Tre-quadringentillion
    "QACt4", // 10^387 = Quattuor-quadringentillion
    "QiCt4", // 10^390 = Quin-quadringentillion
    "SxCt4", // 10^393 = Sex-quadringentillion
    "SpCt4", // 10^396 = Septen-quadringentillion
    "OcCt4", // 10^399 = Octo-quadringentillion
    "NoCt4", // 10^402 = Novem-quadringentillion
    "DCt5", // 10^405 = Duo-quinquagintillion
    "TCt5", // 10^408 = Tre-quinquagintillion
    "QACt5", // 10^411 = Quattuor-quinquagintillion
    "QiCt5", // 10^414 = Quin-quinquagintillion
    "SxCt5", // 10^417 = Sex-quinquagintillion
    "SpCt5", // 10^420 = Septen-quinquagintillion
    "OcCt5", // 10^423 = Octo-quinquagintillion
    "NoCt5", // 10^426 = Novem-quinquagintillion
    "DCt6", // 10^429 = Duo-sexagintillion
    "TCt6", // 10^432 = Tre-sexagintillion
    "QACt6", // 10^435 = Quattuor-sexagintillion
    "QiCt6", // 10^438 = Quin-sexagintillion
    "SxCt6", // 10^441 = Sex-sexagintillion
    "SpCt6", // 10^444 = Septen-sexagintillion
    "OcCt6", // 10^447 = Octo-sexagintillion
    "NoCt6", // 10^450 = Novem-sexagintillion
    "DCt7", // 10^453 = Duo-septuagintillion
    "TCt7", // 10^456 = Tre-septuagintillion
    "QACt7", // 10^459 = Quattuor-septuagintillion
    "QiCt7", // 10^462 = Quin-septuagintillion
    "SxCt7", // 10^465 = Sex-septuagintillion
    "SpCt7", // 10^468 = Septen-septuagintillion
    "OcCt7", // 10^471 = Octo-septuagintillion
    "NoCt7", // 10^474 = Novem-septuagintillion
    "DCt8", // 10^477 = Duo-octogintillion
    "TCt8", // 10^480 = Tre-octogintillion
    "QACt8", // 10^483 = Quattuor-octogintillion
    "QiCt8", // 10^486 = Quin-octogintillion
    "SxCt8", // 10^489 = Sex-octogintillion
    "SpCt8", // 10^492 = Septen-octogintillion
    "OcCt8", // 10^495 = Octo-octogintillion
    "NoCt8", // 10^498 = Novem-octogintillion
    "DCt9", // 10^501 = Duo-nonagintillion
    "TCt9", // 10^504 = Tre-nonagintillion
    "QACt9", // 10^507 = Quattuor-nonagintillion
    "QiCt9", // 10^510 = Quin-nonagintillion
    "SxCt9", // 10^513 = Sex-nonagintillion
    "SpCt9", // 10^516 = Septen-nonagintillion
    "OcCt9", // 10^519 = Octo-nonagintillion
    "NoCt9", // 10^522 = Novem-nonagintillion
    "DCt10", // 10^525 = Duo-centillion
    "TCt10", // 10^528 = Tre-centillion
    "QACt10",// 10^531 = Quattuor-centillion
    "QiCt10",// 10^534 = Quin-centillion
    "SxCt10",// 10^537 = Sex-centillion
    "SpCt10",// 10^540 = Septen-centillion
    "OcCt10",// 10^543 = Octo-centillion
    "NoCt10",// 10^546 = Novem-centillion
    "DCt11", // 10^549
    "TCt11", // 10^552
    "QACt11",// 10^555
    "QiCt11",// 10^558
    "SxCt11",// 10^561
    "SpCt11",// 10^564
    "OcCt11",// 10^567
    "NoCt11",// 10^570
    "DCt12", // 10^573
    "TCt12", // 10^576
    "QACt12",// 10^579
    "QiCt12",// 10^582
    "SxCt12",// 10^585
    "SpCt12",// 10^588
    "OcCt12",// 10^591
    "NoCt12",// 10^594
    "DCt13", // 10^597
    "TCt13", // 10^600
    "QACt13",// 10^603
    "Ct606" // 10^606 = Double Centillion
];




text('⌬ Bits clicker | Soluner','Title');

function text(text, id){
    var x = document.getElementById(id);
    if(x) {
        x.textContent = text;
    } else {
        console.warn('text(): element not found with id="' + id + '"');
    }
}

function abreviateNumber(num) {
    if (num < 99999) {
        return num.toString();

    }
    var tier = Math.floor(Math.log10(num) / 3);
    var suffix = suffex[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = num / scale;
    return scaled.toFixed(1) + suffix;
}




console.log('hi');
console.log(abreviateNumber(123400));

//time for DT vars

var cuc = 0;
var stl = 0;
var updatetitle = 0;


function main(dt){

    if(cuc - dt < -100){
        counterupdate();
        cuc = dt;
        //console.log('IPS update');
    }

    if(stl - dt < -60000){
        savetolocal();
        stl = dt;
        //console.log('saved');
    }
    if(updatetitle - dt < -3000){
        text('⌬' + Math.round(c,2) + ' | Bits Clicker','Title');
        updatetitle = dt;
    }

    totcps = (clickiamounts[0]*clickicps[0]) + (clickiamounts[1]*clickicps[1]) + (clickiamounts[2]*clickicps[2]);
    text('Total Bits Ever: ⌬' + Math.round(total,2)+'⌬','tb');
    text('Currrent Bits: ⌬' + Math.round(c,2)+'⌬','cc');
    text('Buy Mouse || Cost ⌬'+abreviateNumber(clickicost[0])+'|| '+clickicps[0]+'IPS','Click1')

    detectiflocked();

    text('Total IPS: ' + Math.round(totcps,2),'cps');


    

    requestAnimationFrame(main);
}

requestAnimationFrame(main);


function printall(){
console.clear();
console.log('--- Local Vars ---');
console.log(total);
console.log(c);
console.log(clickiamounts);
console.log(clickicost);
console.log(clickicps);
console.log('--- Global Vars ---');
console.log('total: '+localStorage.getItem('clicks'));
console.log('usable: '+localStorage.getItem('usable'));
console.log('clickiamounts: '+localStorage.getItem('clickiamount'));
console.log('clickicost: '+localStorage.getItem('clickicost'));
console.log('clickicps: '+localStorage.getItem('clickicps'));
}



printall();


function reset(){
    localStorage.setItem('clicks',0);
    localStorage.setItem('usable',0);
    localStorage.setItem('clickiamount',amountbase);
    total = 0;
    c = 0;
    clickiamounts[0] = 0;
    clickiamounts[1] = 0;
    clickiamounts[2] = 0;
    totcps = 0;
    localStorage.setItem('clickiamount',amountbase);
    clickicost = costbase;
    localStorage.setItem('clickicost',clickicost);
    localStorage.setItem('clickicps',cpsbase);
    clickicps = cpsbase;
    locked = [
        true, // Mouse
        false, // Mouse Wheel
        false  // Hampter
    ]
    printall();
}

function buy(id){
    if(id == 'Click1' && c >= clickicost[0]){
        c = c - clickicost[0];
        clickiamounts[0]++;
        clickicost[0] = Math.round(clickicost[0] * marketpricegouge);
    }
    else if(id == 'Click2' && c >= clickicost[1]){
        c = c - clickicost[1];
        clickiamounts[1]++;
        clickicost[1] = Math.round(clickicost[1] * marketpricegouge);
    }
    else if(id == 'Click3' && c >= clickicost[2]){
        c = c - clickicost[2];
        clickiamounts[2]++;
        clickicost[2] = Math.round(clickicost[2] * marketpricegouge);
    }
}

function counterupdate(){
    total = total + totcps/10;
    c = c + totcps/10;
}

function savetolocal(){
    localStorage.setItem('clicks',total);
    localStorage.setItem('usable',c);
    localStorage.setItem('clickiamount',clickiamounts);
    localStorage.setItem('clickicost',clickicost);
    localStorage.setItem('clickicps',clickicps);
    console.log('saved to local');
}

