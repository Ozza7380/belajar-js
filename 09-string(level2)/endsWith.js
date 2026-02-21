// cek apakah teks diakhiri dengan sesuatu
let file = "foto.jpg"
console.log(file.endsWith(".jpg"))

// validasi upload file
let namaFile = "document.pdf"
//tolak jika tidak diakhiri .pdf
if (!namaFile.endsWith(".pdf")) { // !: untuk kondisi sebaliknya
    console.log("file harus pdf!")
}