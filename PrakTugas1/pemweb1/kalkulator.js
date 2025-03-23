document.addEventListener("DOMContentLoaded", function () {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultDisplay = document.getElementById("result");

    function calculate(operation) {
        let num1 = parseFloat(num1Input.value);
        let num2 = parseFloat(num2Input.value);
        let result;

        if (isNaN(num1)) {
            resultDisplay.innerText = "Error: Masukkan angka pertama!";
            return;
        }

        switch (operation) {
            case "+":
                if (isNaN(num2)) return showError("Masukkan angka kedua!");
                result = num1 + num2;
                break;
            case "-":
                if (isNaN(num2)) return showError("Masukkan angka kedua!");
                result = num1 - num2;
                break;
            case "*":
                if (isNaN(num2)) return showError("Masukkan angka kedua!");
                result = num1 * num2;
                break;
            case "/":
                if (isNaN(num2)) return showError("Masukkan angka kedua!");
                result = num2 !== 0 ? num1 / num2 : "Error: Pembagian dengan nol!";
                break;
            case "^":
                if (isNaN(num2)) return showError("Masukkan angka kedua!");
                result = Math.pow(num1, num2);
                break;
            case "√":
                result = num1 >= 0 ? Math.sqrt(num1) : "Error: Bilangan negatif!";
                num2Input.value = "";
                num2Input.disabled = true;
                break;
            case "%":
                if (isNaN(num2)) return showError("Masukkan angka kedua!");
                result = num1 % num2;
                break;
            default:
                result = "Operasi tidak valid";
        }

        resultDisplay.innerText = `Hasil: ${result}`;
    }

    function showError(message) {
        resultDisplay.innerText = message;
    }

    window.calculate = calculate; // Agar bisa dipanggil dari kalkulator.html

    document.querySelectorAll(".buttons button").forEach(button => {
        button.addEventListener("click", function () {
            if (this.innerText !== "√") {
                num2Input.disabled = false;
            }
        });
    });
});
