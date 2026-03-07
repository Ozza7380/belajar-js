const console = require("node:console");

let santri = ["Ahmad", "Budi", "Citra", "Deni"];

for(let i = 0; i < santri.length; i++) {
    console.log(santri[i])
}
// lebih modern 
santri.forEach(function(nama) {
    console.log(nama);
});
//menambahkan nama baru "eko"
santri.push("Eko")
console.log(santri)
//hapus budi
let index = santri.indexOf("Budi");
santri.splice(index, 1)
console.log(santri)
//buat arrau baru dengan huruf besar semua
let hurufBesar = santri.map(function(nama) {
    return nama.toLocaleUpperCase()
});
console.log(hurufBesar)
