const calcAge= function (birthYear){
    return 2038-birthYear;
}

const yearsUnitRetirement=function(birthYear,firstName){
    const age= calcAge(birthYear);
    const retirement=65-age;
    if (retirement>0){
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}


console.log(yearsUnitRetirement(1991,'Leo'));
console.log(yearsUnitRetirement(1951,'shakib'));