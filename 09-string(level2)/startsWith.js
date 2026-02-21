// cek apakah teks diawalin dengan sesuatu
let file= "image.png";
console.log(file.startsWith("Image"));

// validasi role admin
let username = "admin_arif"
// jika di awalin admin_ maka tampilkan anda adalah admin
if (username.startsWith("admin_")) {
    console.log("anda adalah admin")
}