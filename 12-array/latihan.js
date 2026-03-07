let users = [
    {username: "admin", password: "123"},
    {username: "ahmad", password: "abc"}
];
//buat function cek login
function cekLogin(username, password) {
    let user = users.find(function(item) {
        return item.username === username && item.password === password;
    });
    if (user) {
        return "login berhasil!";
    } else {
        return "username atau passsword salah";
    }
}
console.log(cekLogin("admin", "123"));