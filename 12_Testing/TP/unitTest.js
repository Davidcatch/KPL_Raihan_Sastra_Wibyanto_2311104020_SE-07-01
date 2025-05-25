function assertEqual(actual, expected, testName) {
    const resultsDiv = document.getElementById("results");
    const result = document.createElement("div");
    
    if (actual === expected) {
        result.textContent = `✅ ${testName} passed`;
        result.style.color = "green";
    } else {
        result.textContent = `❌ ${testName} failed. Expected: "${expected}", Got: "${actual}"`;
        result.style.color = "red";
    }

    resultsDiv.appendChild(result);
}

// Unit tests
assertEqual(CariTandaBilangan(-10), "Negatif", "Test bilangan negatif");
assertEqual(CariTandaBilangan(0), "Nol", "Test bilangan nol");
assertEqual(CariTandaBilangan(5), "Positif", "Test bilangan positif");
