let login = true
let emailVerified = true
let diblokir = false
let stok = 5
let totalBelanja = 60000

let bolehCheckout = 
login && 
emailVerified && 
!diblokir && 
stok > 0 && 
totalBelanja >= 50000

console.log(bolehCheckout)