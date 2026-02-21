let nama = " muhammad raihan "
let email = "ARISKA@GMAIL.COM"

// ubah menjadi nama: Muhammad Raihan, email: ariska, username: ariska

let names = nama.trim().split(" ")
let name = names.map(kata =>
    kata[0].toUpperCase() + kata.slice(1) 
)
console.log("Nama: ", name.join(" "))

let kecil = email.toLowerCase()
let valid = kecil.includes("@gmail.com")
console.log("Email: ", kecil)
console.log("status email: ", valid)

let username = kecil.split("@")[0]
console.log("Username: ", username)