function hitungPromo(hargaAsli, persenDiskon) {
    let nilaiPotongan = hargaAsli * (persenDiskon / 100);
    let hargaAkhir = hargaAsli - nilaiPotongan;
    return hargaAkhir
}
let hargaPromo = hitungPromo(1000000, 5);
console.log(hargaPromo);