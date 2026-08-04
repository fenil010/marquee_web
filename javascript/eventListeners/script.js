const form = document.getElementById("form");
const tableBody = document.querySelector("#table tbody");
console.log(localStorage.getItem("products"));

document.addEventListener('keypress',(e)=>{
    if(e.key === 'Enter'){
        form.dispatchEvent(new Event('submit'));
    }
});

let products = [];


// Product Class
class Product {
    constructor(name, category, price, quantity) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }
}

// Form Submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const quantity = form.quantity.value;

    const product = new Product(
        name,
        category,
        Number(price),
        Number(quantity)
    );

    products.push(product);

    displayProducts();

    form.reset();
});

// Display Products
function displayProducts() {

    tableBody.innerHTML = "";

    products.forEach((product, index) => {

        const row = `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
        </tr>
        `;

        tableBody.innerHTML += row;
    });

}