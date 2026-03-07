let produk = [
    {nama: "Beras", harga: 12000},
    {nama: "Gula", harga: 15000},
    {nama: "Minyak", harga: 20000},
    {nama: "Telur", harga: 25000}
]
//tampilkan semua nama produk
let namaProduk = produk.map(function(item) {
    return item.nama;
});
console.log(namaProduk)
//ambil produk harga di atas 15000
let mahal = produk.filter(function(item) {
    return item.harga > 15000;
});
console.log(mahal)
//cari produk minyak
let cari = produk.find(function(item) {
    return item.nama === "Minyak";
});
console.log(cari)
//hitung total harga
let total = produk.reduce(function(totalAwal, item) {
    return totalAwal + item.harga;
}, 0);
console.log(total)
