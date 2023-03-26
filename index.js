'use strict'


let hasDriverLicense=false;
const passTest=true;

if (passTest) hasDriversLicense =true;
if(hasDriverLicense)console.log('I can drive');











function logger(){
    console.log('My name is Rabeya');
}

//calling  /running /invoking function
logger();
logger();

function furitsProcessor(Apple, orange){
    const juice=`juice with ${Apple} apples and${orange} oranges`;
    return juice;
}

 const appleJuice= furitsProcessor(6,2);
 console.log(appleJuice);
 
 const appleOrangeJuice=furitsProcessor(4,6);
 console.log(appleOrangeJuice);






// function declaration
function calcAge1(birthYear){
    return 2039-birthYear;
}

const age1= calcAge1(1993);

// Function Expression

const calcAge2=function(birthYear){
    return 2040- birthYear;
}
const age2=calcAge2(1993);
console.log(age1,age2);




//ch1

const calAverage= (score1,score2,score3)=>(score1,score2,score3)/3;
console.log(calAverage(3,4,5));


const scoreDolphins=calAverage(44,23,71);
const scoreKolas=calAverage(65,54,49);
console.log(scoreDolphins,scoreKolas);

const winnerCheck= function (dolphinsAvg,koalasAvg){
    if(dolphinsAvg>=2*koalasAvg){
        console.log(`Dolphins win (${dolphinsAvg}vs.${koalasAvg})`);
    }
    else if(koalasAvg>=2* dolphinsAvg){
        console.log(`Kolas win (${koalasAvg}vs.${dolphinsAvg})`);
    }
    else{
        console.log('No team wins.....');
    
    }
}
winnerCheck(scoreDolphins,scoreKolas);
winnerCheck(567,111);

scoreDolphins=calAverage(85,54,41);
scoreKolas=calAverage(23,34,27);
console.log(scoreDolphins,scoreKolas);
winnerCheck(scoreDolphins,scoreKolas);