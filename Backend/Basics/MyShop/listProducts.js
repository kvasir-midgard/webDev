var faker = require('faker');

// console.log(faker.name.findName());
// console.log(faker.internet.email());
// console.log(faker.address.city());
// console.log(faker.address.country());
// console.log(faker.company.catchPhrase());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.price(5.00,500.00,2,"$"));
// console.log(6*" ");

for(var i = 0; i < 10; i++){
    var pName = faker.commerce.productName();
    var price = faker.commerce.price(5.99,50.99,2,"$");
    console.log(pName);
    console.log();
    console.log("----------   " + price);
}