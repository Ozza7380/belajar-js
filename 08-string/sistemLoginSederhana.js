let input = " ADMIN@GMAIL.CoM ";

// hilangkan spasi, jadikan huruf kecil, cek apakah ada @gmail.com

let email = input.trim().toLowerCase(); // trim() untuk mengilangkan spasi depan belakang, toLowerCase() untuk mengecilkan huruf
let valid = email.includes("@gmail.com"); // includes("kata yang ingin dicek") untuk mengecek apakah ada kata yang kita inginkan atau tidak

console.log(email)
console.log(valid)