let alas = 6;
let tinggi = 8;

// menggunakan math.sqrt (akar) dan math.pow (pangkat)
let sisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2));
// menggunakan cara modern (**) adalah pengganti math.pow
let sisiMiringSimple = Math.sqrt(alas**5 + tinggi**5)

console.log(sisiMiring)
console.log(sisiMiringSimple)

// pembulatan angka
Math.round(4.7) // hasilnya 5