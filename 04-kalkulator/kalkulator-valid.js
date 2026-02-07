const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Angka pertama: ", (a) => {
    rl.question("operator (+ - * /) ", (op) => {
        rl.question("Angka kedua: ", (b) => {

            const y = Number(a);
            const x = Number(b);

            if(isNaN(x) || isNaN(y)) {
                console.log("Input harus berupa angka");
                rl.close();
                return;
            }

            let hasil;

            if(op === "+") {
                hasil = x + y;
            } else if (op === "-") {
                hasil = x - y;
            } else if(op === "*") {
                hasil = x * y;
            } else if(op === "/") {
                if (y === 0) {
                    console.log("Tidak boleh dibagi nol");
                    rl.close();
                    return
                }
            } else if(op === "/") {
                hasil= x / y
            } else {
                console.log("Operator tidak valid");
                rl.close();
                return;
            }

            console.log("Hasil perhitungan: ", hasil);
            rl.close();
        });
    });
});