class Robot {
    constructor(nama, umur) {
        this.nama = nama; //property (data)
        this.umur = umur;
    }
    // ini adalah method (aksi)
    bicara() {
        console.log("halo, saya " + this.nama +" umur saya " + this.umur)
    }
    salam(nama) {
        console.log("assalamualaikum " + nama )
    }
    hitungPerkalian(a, b) {
        console.log("Hasil: " + (a + b))
    }
}
const robotSatu = new Robot("Z-1", "12 bulan"); // membuat object dari class
robotSatu.bicara(); // memanggil method
robotSatu.salam("ahmad");
robotSatu.hitungPerkalian(10, 15)