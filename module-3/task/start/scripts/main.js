/* console.log('Hello');

//Single line comment comes after 2 forward slashes

/*--
Forward slash and a star is how you start writing multiline comments, and star forward slash is how you end it
So everything within here is a secret comment

*/

let productName = 'Broccoli'
let price = '40'
let quantity = '6'
let inStock = 'true'
let discountAmount = '2'

/*console.log(productName);
console.log(price);
console.log(quantity);
console.log(inStock);
console.log(discountName); */

function showProductName(){
    console.log(productName);
}
showProductName();

function totalPrice(productPrice=0,productQuantity=0){
    productPrice = parseFloat(productPrice);
    productQuantity = parseFloat(productQuantity);
    let totalProductPrice = productPrice * productQuantity;
    console.log(totalProductPrice);
} 

totalPrice(price,quantity);

//showing the difference between regular function and arrow function
function squareNumber(number=0){
    let sum = number * number;
    return sum;
}

var square = num => num * num;

let squaredNumber = squareNumber(3);
console.log(squaredNumber);

let squared = square(3);
console.log(squared);
//showing the difference between regular function and squared function

function productDiscount(){
    if(quantity > 1){
        sum = price * quantity;
        let discount = discountAmount * quantity;
        sum = sum - discount; 
    }
    console.log(sum);
}

productDiscount();