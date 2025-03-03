const products = [
    {
        name: "Benih Jagung Premium",
        price: "Rp 50.000",
        description: "Benih jagung berkualitas tinggi dengan hasil panen maksimal.",
        image: "gambar/produk1.jpg"
    },
    {
        name: "Benih Padi Unggul",
        price: "Rp 45.000",
        description: "Benih padi dengan ketahanan tinggi dan produksi melimpah.",
        image: "gambar/produk2.jpg"
    },
    {
        name: "Benih Kedelai Berkualitas",
        price: "Rp 40.000",
        description: "Benih kedelai unggulan dengan kualitas terbaik dan hasil optimal.",
        image: "gambar/produk3.jpg"
    },
    {
        name: "Benih Kedelai Berkualitas",
        price: "Rp 40.000",
        description: "Benih kedelai unggulan dengan kualitas terbaik dan hasil optimal.",
        image: "gambar/produk3.jpg"
    }
];

function displayProducts(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const grid = document.createElement("div");
    grid.className = "grid";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.className = "product-image";

        const productInfo = document.createElement("div");
        productInfo.className = "product-info";

        const productName = document.createElement("p");
        productName.className = "product-name";
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.className = "product-price";
        productPrice.textContent = product.price;

        const productDescription = document.createElement("p");
        productDescription.className = "product-description";
        productDescription.textContent = product.description;

        productInfo.appendChild(productName);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productDescription);

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        grid.appendChild(productCard);
    });

    container.appendChild(grid);
}

document.addEventListener("DOMContentLoaded", function() {
    displayProducts("product-container");
});