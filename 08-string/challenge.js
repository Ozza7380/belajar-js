let nama = " muhammad raihan "
let email = "ARISKA@GMAIL.COM"

// ubah menjadi nama: Muhammad Raihan, email: ariska, username: ariska

let names = nama.trim().split(" ") // trim() untuk menghilangkan spasi di awal dan akhir, split() untuk memecah kalimat menjadi array
let name = names.map(kata =>
    kata[0].toUpperCase() + kata.slice(1) // kata[0].toUpperCase: untuk membesarkan kata dengan index 0(huruf pertama), kata.slice(1) untuk memotong kata dari index 1 (huruf kedua)
)
console.log("Nama: ", name.join(" "))// join(" ") untuk menyambungkan array dengan pemisah " " (spasi)

let kecil = email.toLowerCase()// toLowerCase() untuk mengecilkan seluruh kalimat
let valid = kecil.includes("@gmail.com")// mengecek apakah ada kata yang di cari
console.log("Email: ", kecil)
console.log("status email: ", valid)

let username = kecil.split("@")[0] // memecah kata menjadi array dengan pemecah @, dan menapilkan index 0 (array ke 0 yaitu ariska)
console.log("Username: ", username)