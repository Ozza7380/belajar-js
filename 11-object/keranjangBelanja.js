const cart = {
    produk1: {
        nama: "Mouse",
        harga: 50000,
        qty: 2
    },
    produk2: {
        nama: "Keyboard",
        harga: 150000,
        qty: 2
    }
};
let totalBelanja = cart.produk1.harga * cart.produk1.qty + (cart.produk2.harga * cart.produk2.qty)

console.log(totalBelanja)

cart.produk3 = {
    nama: "Monitor",
    harga: 400000,
    qty: 2
}

console.log(cart.produk3)

cart.produk1.qty = 5

console.log(cart.produk1.qty)

delete cart.produk2

console.log(cart.produk2)