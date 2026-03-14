// D. menghitung total belanja
let harga = [10000, 15000, 20000, 5000]

let total = 0

for (let item of harga) { // membuat variable "item" dengan isi dari array "harga" yang telah dipisahkan
    total += item // mengitung setiap value dari "item"
}
console.log("total belanja: ", total)