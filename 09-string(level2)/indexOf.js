// mencari posisi text
 let teks = "belajar javascript"
 console.log(teks.indexOf("java")) // jika tidak ketemu maka hasilnya -1

 // cek kata terlarang
 let komentar = "produk ini sangat jelek"
 // cek apakah ada kata jelek
 if (komentar.indexOf("jelek") !== -1) { 
    console.log("komentar mengandung kata terlarang")
 }