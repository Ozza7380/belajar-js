let nohp = '081234567890'

// ubah menjadi 0812-3456-7890

let hasil = nohp.slice(0,4) + "-" + // memotonh dari index 0-3 (0812)
            nohp.slice(4,8) + "-" +// memotong dari index 4-7 (3456)
            nohp.slice(8);// memotong dari 8 dan seterusnya (7890)
console.log(hasil)