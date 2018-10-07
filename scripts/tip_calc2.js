how_many_people = prompt('How many people?')

const LEVEL_GOOD = 'good';
const LEVEL_FAIR = 'fair';
const LEVEL_BAD = 'bad';
how_many_people = prompt('How many people?')

const TIP_GOOD = 0.2;
const TIP_FAIR = 0.15;
const TIP_BAD = 0.1;

//Note: Javascript will concatenate strings and numbers into strings,
const totalBill = Number(`292.34`);
const levelOFService = `good`;

let tip = 0.0;

if(levelOFService === LEVEL_GOOD) {
    tip = totalBill * TIP_GOOD;
} else if (levelOFService === LEVEL_FAIR){
    tip = totalBill * TIP_FAIR;
} else if (levelOFService === LEVEL_BAD) {
    tip = totalBill * TIP_BAD;
} else {
    console.log(`Invalid. They cant be that bad`)
}

console.log(`Tip amount: ${tip.toFixed(2)}`);
console.log(`Total amount: ${(totalBill + tip).toFixed(2)}`);

Amount_per_person = (totalBill + tip)/how_many_people
console.log(`Amount per person: ${(totalBill + tip).toFixed(2)/how_many_people}`)