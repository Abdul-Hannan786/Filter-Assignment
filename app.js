const products = [
    // Category 1: Electronics
    { category: "Electronics", name: "Smartphone", price: 599.99 },
    { category: "Electronics", name: "Laptop", price: 1299.99 },
    { category: "Electronics", name: "Smart Watch", price: 199.99 },
    { category: "Electronics", name: "Bluetooth Speaker", price: 79.99 },
    { category: "Electronics", name: "Gaming Console", price: 399.99 },

    // Category 2: Clothing
    { category: "Clothing", name: "T-Shirt", price: 19.99 },
    { category: "Clothing", name: "Jeans", price: 49.99 },
    { category: "Clothing", name: "Sneakers", price: 79.99 },
    { category: "Clothing", name: "Dress", price: 99.99 },
    { category: "Clothing", name: "Hoodie", price: 39.99 },

    // Category 3: Home Appliances
    { category: "Home Appliances", name: "Coffee Maker", price: 89.99 },
    { category: "Home Appliances", name: "Vacuum Cleaner", price: 199.99 },
    { category: "Home Appliances", name: "Air Purifier", price: 149.99 },
    { category: "Home Appliances", name: "Microwave Oven", price: 129.99 },
    { category: "Home Appliances", name: "Toaster", price: 39.99 },

    // Category 4: Sports
    { category: "Sports", name: "Tennis Racket", price: 79.99 },
    { category: "Sports", name: "Running Shoes", price: 99.99 },
    { category: "Sports", name: "Camping Tent", price: 199.99 },
    { category: "Sports", name: "Bike", price: 299.99 },
    { category: "Sports", name: "Yoga Mat", price: 29.99 }
];

const div = document.querySelector("#div")

function showCategories(value) {
    let filteredArr = products.filter(item => item.category === value)
    filteredArr.forEach((item) => {
        div.innerHTML += `
        <h2>${item.name}</h2>
        <h2>${item.price}</h2>
        <hr />
        `
    })
}
