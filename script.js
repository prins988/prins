// Function to calculate love compatibility score
function calculateLoveScore(name1, name2) {
    const combinedNames = name1 + name2;
    let score = 0;

    // Basic logic to calculate score based on the combined names
    for (let i = 0; i < combinedNames.length; i++) {
        score += combinedNames.charCodeAt(i);
    }

    // Modulo operation to keep score between 0 and 100
    score = score % 101;
    return score;
}

// Event listener for form submission
document.getElementById('loveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please enter both names.");
        return;
    }

    const loveScore = calculateLoveScore(name1, name2);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Love Compatibility Score: ${loveScore}%`;
});
