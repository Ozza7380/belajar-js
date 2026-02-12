const users = [
    {id:1, nama:"Zaid", nilai:80},
    {id:2, nama:"Umar", nilai:45}
]
/** 
 * @param {Array} users - untuk menampilkan data user
*/
// untuk mengecek hasil ujian apakah lulus atau tidak
function cek(users) {
    for(let i=0; i<users.length; i++) { // (let i = 0) membuat variable untuk perulangan, (i=0) agar semua nilai dimulai dari 0 
        if(users[i].nilai > 50) {
        console.log(users[i].nama + " lulus") // jika nilai lebih besar dari 50 maka lulus
    } else {
    console.log(users[i].nama + " gagal") // jika nilai kurang dari 50 maka gagal
        }
    }
}
cek()