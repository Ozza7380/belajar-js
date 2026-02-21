let produk = "laptop gaming asus rog"

// pecah huruf menggunakan .split(""), ubah huruf pertama menjadi kapital, gabungkan lagi

let words = produk.split(" ") // mengubah menjadi array

let hasil = words.map(kata =>
    kata[0].toUpperCase() + kata.slice(1) // kata[0].toUpperCase: mengubah huruf pertama menjadi besar, kata.slice(1): menampilkan kata setelah huruf pertama. contoh: raihan menjadi Raihan
)
console.log(hasil.join(" ")) // .join(" ") untuk menggabungkan array dengan pemisah " "(spasi)