let nilai = [80, 60, 90,70, 85, 50]
// ambil nilai lulus >= 75
let lulus = nilai.filter(function(n) {
    return n >= 75;
});
console.log(lulus)
//hitung rata rata
let total = nilai.reduce(function(total, n) {
    return total + n;
}, 0)
let rata = total / nilai.length
console.log(rata)
//cari nilai tertinggi
let tertinggi = nilai.reduce(function(max, n) {
    if (n > max) {
        return n;
    } else {
        return max;
    }
}, nilai[0]);
console.log(tertinggi)