const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Angka pertama: ", (a) => {
    rl.question("operator (+ - * /) ", (op) => {
        rl.question("Angka kedua ", (b) => {

            const y = Number(a);
            const x = Number(b);
            let hasil = 0;

            if(op === "+") {
                hasil = x + y;
            } else if (op === "-") {
                hasil = x - y;
            } else if(op === "*") {
                hasil = x * y;
            } else if(op === "/") {
                hasil= x / y
            } else {
                console.log("Operator tidak dikenal")
                rl.close();
                return;
            }

            console.log("Hasil: ", hasil);
            rl.close();
        })
    })
})