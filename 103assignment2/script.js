let product =  prompt("Enter product name: ");
let quantity = Number(prompt("Enter the quantity: "));
let price = Number(prompt("Enter price of item: "));

console.log(`Product name: ${product}`);
console.log(`Quantity of item: ${quantity}`);
console.log(`Price per item:  ${price}`);

let totalPrice = quantity * price;
let finalPrice = totalPrice + (totalPrice *.16);

console.log(`Final Price: ${finalPrice}`);
