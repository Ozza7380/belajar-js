let judul = "Belajar Javascript Untuk Pemula";

// ubah menjadi belajar-javascript-untuk-pemula

let slug = judul
.toLowerCase() // mengecilkan semua huruf
.split(" ") // memecah menjadi array degan pemisahnya spasi
.join("-"); // menyambungkannya dengan penyambung -

console.log(slug)