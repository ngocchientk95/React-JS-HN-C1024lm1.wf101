// Danh sách sản phẩm ban đầu
let products = [
    { id: 1, name: "Laptop", price: 1500, quantity: 5 },
    { id: 2, name: "Smartphone", price: 800, quantity: 10 },
    { id: 3, name: "Tablet", price: 600, quantity: 7 }
];

// 1. Hiển thị danh sách sản phẩm
const displayProducts = () => {
    products.map(({ id, name, price, quantity }) =>
        console.log(`ID: ${id}, Name: ${name}, Price: $${price}, Quantity: ${quantity}`)
    );
};
console.log("Danh sách sản phẩm ban đầu:");
displayProducts();

// 2. Tính tổng giá trị hàng tồn kho
const calculateTotalValue = () =>
    products.reduce((total, { price, quantity }) => total + price * quantity, 0);
console.log("\nTổng giá trị hàng tồn kho:", calculateTotalValue());

// 3. Lọc sản phẩm theo giá
const filterByPrice = (minPrice) => products.filter(({ price }) => price >= minPrice);
console.log("\nSản phẩm có giá từ 700 trở lên:", filterByPrice(700));

// 4. Thêm sản phẩm mới
const addProduct = (newProduct) => {
    products = [...products, newProduct];
};
addProduct({ id: 4, name: "Monitor", price: 300, quantity: 8 });
console.log("\nSau khi thêm sản phẩm:");
displayProducts();

// 5. Xóa sản phẩm theo ID
const removeProductById = (id) => {
    products = products.filter(product => product.id !== id);
};
removeProductById(2);
console.log("\nSau khi xóa sản phẩm có ID 2:");
displayProducts();

// 6. Cập nhật số lượng sản phẩm
const updateQuantity = (id, newQuantity) => {
    products = products.map(product =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );
};
updateQuantity(1, 3);
console.log("\nSau khi cập nhật số lượng Laptop xuống 3:");
displayProducts();











  