document.addEventListener("DOMContentLoaded", function () {
    const productPrices = {
        "Leaf Business Card": 9.99,
        "Seashell Keys": 12.99,
        "Rock USB": 24.99
    };

    class ProductManager {
        constructor(containerSelector) {
            this.productContainer = document.querySelector(containerSelector);
            this.products = [];
        }

        // Fetch product data from JSON file
        async loadProducts(jsonFile) {
            try {
                const response = await fetch(jsonFile);
                if (!response.ok) {
                    throw new Error("Failed to load product data");
                }
                this.products = await response.json();
                this.renderProducts();
            } catch (error) {
                console.error("Error loading products:", error);
            }
        }

        // Render product list dynamically using the associative array
        renderProducts() {
            let productHTML = "";
            this.products.forEach(product => {
                const price = productPrices[product.name] || product.price.toFixed(2); // Fetch from associative array if available
                productHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">$${price}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>`;
            });

            this.productContainer.innerHTML = productHTML;
            this.addCartListeners();
        }

        // Add event listeners to "Add to Cart" buttons
        addCartListeners() {
            const cartButtons = document.querySelectorAll(".add-to-cart");
            cartButtons.forEach((button, index) => {
                button.addEventListener("click", () => {
                    alert(`Added "${this.products[index].name}" to cart for $${productPrices[this.products[index].name] || this.products[index].price.toFixed(2)}`);
                });
            });
        }
    }

    // Create an instance of ProductManager and load products
    const productManager = new ProductManager(".product-container");
    productManager.loadProducts("products.json");
});
