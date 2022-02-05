productSearch = (products, searchKey) => {
    let returnProduct = [];
    for(let product of products){
        if(product.name.includes(searchKey)){
            returnProduct.push(product);
        }
    }
    return returnProduct;
}

let products = [
    {name: "Realme 8 Pro", price: 27990},
    {name: "Realme 7 Pro", price: 26990},
    {name: "Realme 6", price: 25990},
    {name: "Oppo Reno 7", price: 22990},
    {name: "Oppo Reno 6", price: 21990},
    {name: "Oppo Reno 5", price: 20990},
    {name: "Samsung J7", price: 28990},
    {name: "Samsung A7", price: 35990},
    {name: "Iphone 12 Pro-Max", price: 122990},
    {name: "Iphone 13 Pro-Max", price: 132990},
    {name: "Redmi Note 9", price: 21990},
    {name: "Redmi Note 8", price: 19990},
    {name: "Redmi Note 7", price: 18990},
];

let searchKeyWord = "Realme";
let recieveProduct = productSearch(products,searchKeyWord);
console.log(recieveProduct);