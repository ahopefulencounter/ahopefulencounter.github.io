// Function to display the current BINGO value and submissions
function displayData() {
    // Read the current BINGO value from local storage
    const currentBingoValue = localStorage.getItem('currentBingoValue');

    // Display the current BINGO value
    const currentBingoDisplay = document.getElementById('currentBingoDisplay');
    if (currentBingoValue) {
        currentBingoDisplay.textContent = currentBingoValue;
        currentBingoDisplay.style.display = 'block';
    } else {
        currentBingoDisplay.style.display = 'none';
    }

    // Read the "Previous Submissions" from local storage
    const submissions = JSON.parse(localStorage.getItem('bingoSubmissions')) || [];

    // Clear the current grid
    const submissionsGrid = document.getElementById('submissionsGrid');
    submissionsGrid.innerHTML = '';

    // Display all submissions in the grid
    submissions.forEach(submission => {
        const div = document.createElement('div');
        div.className = 'submission-item';
        div.textContent = submission;
        submissionsGrid.appendChild(div);
    });
}

// Initial display of data
displayData();

// Auto-refresh the data every 2 seconds (2000 milliseconds)
setInterval(displayData, 2000);