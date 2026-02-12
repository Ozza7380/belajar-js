// 1. global scope
const NAMA_WARUNG = "Warung Kode"

// 2. class(cetakan)
class menu {
    constructor(nama, harga) {
        this.nama = nama; // property
        this.harga = harga; // property
    }

    // 3. method (fungsi di dalam class)
    cekHarga(jumlah) {
        return jumlah * this.harga; // retrun
    }
}
// 4. function declaration (global function)
function strukPembayaran(pelanggan, total) {
    // 5. local scope
    let salam = "Terimakasih sudah datang!";
    console.log(`pelanggan: ${pelanggan} \nTotal: Rp${total} \n${salam}`);
}

// ESEKUSI

// membuat object dari class
const makanan1 = new menu("Nasi Goreng", 15000)

// "3" adalah argument untuk parameter "jumlah"
let totalBayar = makanan1.cekHarga(3)

// memanggil fungsi global
strukPembayaran("Budi ", totalBayar);