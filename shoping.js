const numbers = [300, 1000, 1200];
const products = [
    {name: 'Shampoo' , price: 300},
    {name: 'Shirt' , price: 1000},
    {name: 'Pant' , price: 1200}
]
function getShopping(products) {
    let total = products[0];
    for (const product of products) {
        total= total + product.price;
    }
    return total;
}
const total = getShopping(products);
console.log("total Amount", total);