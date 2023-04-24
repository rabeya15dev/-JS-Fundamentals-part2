/* const friend1='Shakib';
const friend2='rabeya';
const friend3='bosri';
const friends=['Shakib','rabeya','bosri'];
console.log(friends);

const y=new Array(1992,1993,1989,2020);
console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[0]='nila';
console.log(friends);


const firstName='rabeya';
const rabeya=[firstName,'hesfed',2060-2020,'teacher',friends];
console.log(rabeya);
console.log(rabeya.length);


//Exercise

const calcAge=function(birthYear){
    return 2034-birthYear;
}
const years=[1990,1989,2020,2003,2012];


const age1=calcAge(years[0]);
const age2=calcAge(years[1]);
const age3=calcAge(years[years.length-1]);
console.log(age1,age2,age3);

const ages=[calcAge(years[0],calcAge(years[1]),calcAge(years[years.length-1]))];
console.log(ages);
*/

//basic array operation

const friends=['rabeya','shakib','leo'];

//add elements
const newLength=friends.push('messi');
console.log(friends);
console.log(newLength);

friends.unshift('jarka');
console.log(friends);


//remove elements

friends.pop();//last
const popped=friends.pop();
console.log(popped);
console.log(friends);

friends.shift();//first
console.log(friends);
console.log(friends.indexOf('shakib'));
console.log(friends.indexOf('messsi'));

friends.push(23);
console.log(friends.includes('shakib'));
console.log(friends.includes('messsi'));
console.log(friends.includes('23'));

if(friends.includes('shakib')){
    console.log('YOu have a friend called steven');
}
