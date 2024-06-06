function inventoryValue(products) {
    
    let totalValue = 0;

    
    for (const product of products) {
        
        const productValue = product.price * product.quantity
        
        
        totalValue += productValue
    }

    
    return totalValue;
}


const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 }
];

console.log(inventoryValue(products));