const { it } = require("node:test");

let transaksi = [
    {tanggal: "2026-02-01", total: 50000},
    {tanggal: "2026-02-02", total: 75000},
    {tanggal: "2026-02-03", total: 30000},
    {tanggal: "2026-02-04", total: 100000}
];
//hitung total pendapatan
let totalPendapatan = transaksi.reduce(function(total, item) {
    return total + item.total;
}, 0);
console.log(totalPendapatan)
//ambil transaksi diatas 60000
let besar = transaksi.filter(function(item) {
    return item.total > 60000;
});
console.log(besar)
//buat array berisi tanggal saja
let daftarTanggal = transaksi.map(function(item){
    return item.tanggal
});
console.log(daftarTanggal)
