// function woodQuantity(chair, table, bed){
// const perChairWood = 4;
// const perTableWood = 5;
// const perBedWood = 5;

// const chairTotalWood = chair * perChairWood;
// const tableTotalWood = table * perTableWood;
// const bedTotalWood = bed * perBedWood;

// const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
// return totalWood;
// }
// const total = woodQuantity(0,20,0);
// console.log('wood needed',total);

function clothesItem(shirt, pant, shoe){
    const shirtPrice = 900;
    const pantPrice = 900;
    const shoePrice = 1900;

    const totalShirt = shirt * shirtPrice;
    const totalPant = pant * pantPrice;
    const totalShoe = shoe * shoePrice;

    const total = totalShirt + totalPant + totalShoe;
    return total;
}
const price = clothesItem(2,2,1);
console.log(price);