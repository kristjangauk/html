let products = [
    {
        "name": "rice",
        "price": 20.45,
        "description": "Special rice",
        "quantity": 45,
        "avabile": true
    },
    {
        "name": "bice",
        "price": 11.45,
        "description": "Special bice",
        "quantity": 3,
        "avabile": false
    },
    {
        "name": "mice",
        "price": 4.00,
        "description": "Special Mice",
        "quantity": 5,
        "avabile": true
    }
];

function displayProduct() {
    let productDisplayArea = document.querySelector("#productDisplayArea");
    
    let htmlTemplate = "";

    for (let counter = 0; counter < products.length; counter++) {
        let product = products[counter];

        htmlTemplate += `
            <div class="col bg-black text-white">
                <h4>${product.name}</h4>
                <div>Price: ${product.price}</div>
                <div>Quantity: ${product.quantity}</div>
                <div>Avabile online: ${product.avabile === true ? "avabile online" : "order from Shop"}</div>

            </div>`
        console.log(product);
    }
    productDisplayArea.innerHTML = htmlTemplate;
}

displayProduct();

function invert() {
    products.reverse();
    displayProduct();
}

