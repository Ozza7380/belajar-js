let judul = "Belajar Javascript Untuk Pemula";

// ubah menjadi belajar-javascript-untuk-pemula

let slug = judul
.toLowerCase() // mengecilkan semua huruf
.split(" ") // memisahkan melalui spasi dan menjadikanya array
.join("-"); // menyambungkannya dengan penyambung -

console.log(slug)