const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Siapa namamu?", function(nama) {
console.log("Assalamualaikum, " + nama);
rl.close();
});

rl.question("Masukan Nama Anda: ", (nama) => {
    console.log("Assalamualaikum,", nama);
    console.log("Semoga harimu penuh keberkahan");
    rl.close();
});
