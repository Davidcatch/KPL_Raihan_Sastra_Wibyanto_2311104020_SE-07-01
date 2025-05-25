function CariTandaBilangan(a) {
    if (a < 0) return "Negatif";
    else if (a > 0) return "Positif";
    else return "Nol";
}

function handleButtonClick() {
    const inputElement = document.getElementById("inputNumber");
    const outputDiv = document.getElementById("output");
    const resultText = document.getElementById("resultText");
    const resultIcon = document.getElementById("resultIcon");

    const value = inputElement.value.trim();
    const number = parseInt(value);

    if (isNaN(number)) {
        resultText.textContent = "Input tidak valid";
        resultIcon.textContent = "⚠️";
        outputDiv.classList.remove("opacity-0", "h-0");
        outputDiv.classList.add("opacity-100", "h-auto", "bg-red-100", "text-red-700", "animate__animated", "animate__shakeX");
        return;
    }

    const hasil = CariTandaBilangan(number);
    resultText.textContent = `Bilangan tersebut adalah: ${hasil}`;

    // Icon sesuai hasil
    if (hasil === "Negatif") {
        resultIcon.textContent = "🔻";
        outputDiv.classList.add("bg-yellow-100", "text-yellow-800");
    } else if (hasil === "Positif") {
        resultIcon.textContent = "🔺";
        outputDiv.classList.add("bg-green-100", "text-green-800");
    } else {
        resultIcon.textContent = "⭕";
        outputDiv.classList.add("bg-blue-100", "text-blue-800");
    }

    // Reset style dulu
    outputDiv.classList.remove("opacity-0", "h-0");
    outputDiv.classList.add("opacity-100", "h-auto", "animate__animated", "animate__fadeInUp");

    // Bersihkan animasi sebelumnya setelah selesai
    setTimeout(() => {
        outputDiv.classList.remove("animate__animated", "animate__fadeInUp", "animate__shakeX");
    }, 1000);
}
