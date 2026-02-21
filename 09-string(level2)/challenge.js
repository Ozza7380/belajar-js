// case 1
let email = "admin@gmail.com"
// harus mengandung @, harus di akhiri .com, username minimal 5 huruf
console.log(email.indexOf("@"))
if (email.indexOf("@") === -1) {
    console.log("harus menggunakan @")
}
let valid = email.endsWith(".com")
let username = email.split("@")[0]
if (username.length < 5) {
    console.log("username minimal 5")
} else {console.log(username)}
console.log(valid)

