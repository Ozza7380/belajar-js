const user = {
    username: "Admin",
    password: "12345",
    role: "superadmin",
    isLogin: false
}
if (user.password === "12345") {
user.isLogin = true
}
let keysUser = Object.keys(user)
let valueUser = Object.values(user)
console.log(keysUser)
console.log(valueUser)
console.log(user)
