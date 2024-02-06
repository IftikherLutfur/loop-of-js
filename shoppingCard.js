const products = [
    {name: 'Shirt', price: 1800, quantity:2},
    {name: 'Shoe', price: 2000, quantity:3},
    {name: 'Pant', price: 1400, quantity:1}
]
function shoppingCart(products) {
    let total = products[0];
    for(const product of products){
        const thisProducts = product.price * product.quantity;
        total = total + thisProducts;  
    }
    return total;
}
const total = shoppingCart(products);
console.log(total);
