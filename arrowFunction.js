'use strict'
 // Function expression

const calAge2=function(birthYear){
    return 2040-birthYear;
}

//Arrow function

const calcAge3=birthYear=> 2040 -birthYear;
const age3=calcAge3(1990);
console.log(age3);


const yearUnitRetirement=(birthYear,firstName)=>{
const age=2038-birthYear;
const retirement=65-age;

//return retirement
return `${firstName}retires in ${retirement}years`;
}

console.log(yearUnitRetirement(1990,'Rabeya'));

console.log(yearUnitRetirement(1991,'Bob'));

