// 5. for in (untuk object) (digunakan untuk membaca property object)
let user = {
    nama: "Budi",
    umur: 25,
    kota: "Bandung"
}

for (let key in user) { // let "key" in "user" (mengambil key di "user"(contoh key = nama, umur, kota))
    console.log(key + ": " + user[key]) // "key" ditambah : ditambah data user 
} // "key" = nama, umur, kota. + ": " = agar ada tanda ":". user[key] = agar mendapatkan data nama, umur, kota