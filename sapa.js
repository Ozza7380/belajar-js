const readline = require("readline");

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Siapa namamu?", function(nama) {
console.log("Assalamualaikum, " + nama);
rl.close();
});
