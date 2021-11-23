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



//Create function called drinkOrder which takes in 2 variables, called {drink} and {size}
function drinkOrder(size,drink){
    if (size != "small" && size != "medium" && size != "large"){
        console.log("You've ordered a size we don't sell :(");
        return;
    }
    let message = "You've ordered a " + size;

    //SWITCH {drink} (in pseudocode, putting stuff in all caps lets you see that it's a code function)
    //Depending on drink, change output
    switch(drink){
        case "cola":
            message += " Coke";
            break;
        case "lemonade":
            message += " Barr's Lemonade";
            break;
        case "orange":
            message+= " Fanta";
            break;
        //Include default message
        default:
            message = "You've ordered a drink we don't sell :(";
            break;
    }
    console.log(message);
}
drinkOrder("large", "coke");
drinkOrder("small", "lemonade");
drinkOrder("big", "orange");
drinkOrder("medium", "cola");

//FUNCTION calculator {num1} {num2} {operator}
function calculator(num1, num2, operator){
    //VALIDATE all data
    if(isNaNValidator(num1)){
        return "This is not a recognised number";
    }
    
    if(isNaNValidator(num2)){
        return "This is not a number";
    }
    let sum;
    //SWITCH {operator}
    switch(operator){
        case "+":
            sum = num1 + num2;
            break;
        case "-":
            sum = num1 - num2;
            break;
        case "/":
            sum = num1 / num2;
            break;
        case "*":
            sum = num1 * num2;
            break;
        case "%":
            sum = num1 % num2;
            break;
        default:
            return "Operator is not recognised"
    }
    //Based on operator, do maths
return sum;
}
function isNaNValidator(number){
    return isNaN(number);
}

let sum1 = calculator(12,12,"*");
console.log(sum1);


let arrProductData = [
    productName,
    price,
    quantity,
    inStock,
    discountAmount,
];

console.log(arrProductData);
console.log(arrProductData[0]);
console.log(arrProductData[3]);

let objProductData = {
    'productName': productName,
    'price': price,
    'quantity': quantity,
    'inStock': inStock,
    'discountAmount': discountAmount,
};

console.log(objProductData.productName);
objProductData['productName'] = 'cabbage';
console.log(objProductData.productName);

objProductData.newData = 'some new data here';
objProductData.moreData = 82;
console.log(objProductData);


function timesTable(number){
    for(counter = 1;counter <= 12;counter++){
        let sum = counter * number;
        let strMessage = number + ' ' + '*' + ' ' + counter + ' ' + '=' + ' ' + sum;
        console.log(strMessage);
    }
}

timesTable(9);

for(multiplier=1;multiplier <=12;multiplier++);
    timesTable(multiplier);