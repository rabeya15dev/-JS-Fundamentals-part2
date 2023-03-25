
//ch1
const calcAverage=(a,b,c)=>(a+b+c)/3;
console.log(calcAverage(3,4,5));

const dolphinScore=calcAverage(44,23,71);
const kolasScore=calcAverage(65,54,49);
console.log(dolphinScore, kolasScore);

const checkWinner=function(avgDolphins,avgKoalas){
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if(avgKoalas>=2*avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }
    else{
        console.log('No team wins....');
    }

}
checkWinner(dolphinScore,kolasScore);

checkWinner(567,111);

dolphinScore= calcAverage(85,54,41);
kolasScore= calcAverage(23,34,27);

console.log(dolphinScore,kolasScore);
checkWinner(dolphinScore,kolasScore);