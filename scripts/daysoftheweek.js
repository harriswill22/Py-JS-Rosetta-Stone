//Start with ard-coded value until you know your programworks then swithc to user. 



//const theDay = prompt('Day (0-6)
let theDay = prompt("Day (0-6)?");
theDay = parseInt(theDay,10);
let dayName = '';

//You must use parentheses for your condition!!!!!!
// always use ===
if (theDay === 0){
    dayName = `Sunday`;
}else if (theDay === 1) {
    dayName = `Monday`;
}else if (theDay === 2) {
    dayName = `Tuesday`;
}else if (theDay === 3) {
    dayName = `Wednesday`;
}else if (theDay === 4){
    dayName =`Thursday`;
}else if (theDay === 5){
    dayName = `Friday`;
}else if (theDay === 6) {
    dayName = `Saturday`;
}
console.log(dayName);

