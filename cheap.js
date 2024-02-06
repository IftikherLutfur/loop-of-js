const phone = [
    {name: 'IPhone', price:20000, camera: "50mp",color: 'Black'},
    {name: 'Samsun', price:13000, camera: "50mp",color: 'Black'},
    {name: 'Xaomi', price:12000, camera: "50mp",color: 'Oppo'},
    {name: 'Reamli', price:21000, camera: "50mp",color: 'Black'},
    {name: 'Walton', price:2200, camera: "50mp",color: 'Black'}
    
]

function getCheapest(phone) {
    let min = phone[0];
   for (const phones of phone) {
    if(phones.price < min.price){
        min = phones
    }
   }
   return min;
}
const cheap = getCheapest(phone);
console.log('Cheapest phone is:',cheap);