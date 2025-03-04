let submissions = JSON.parse(localStorage.getItem('bingoSubmissions')) || [];

// Function to update the display and save submissions to local storage
function updateDisplay() {
    const bingoDisplay = document.getElementById('bingoDisplay');
    const submissionsGrid = document.getElementById('submissionsGrid');

    // Update the current BINGO display
    if (submissions.length > 0) {
        bingoDisplay.textContent = submissions[submissions.length - 1];
        bingoDisplay.style.display = 'block';
    } else {
        bingoDisplay.style.display = 'none';
    }

    // Update the submissions grid
    submissionsGrid.innerHTML = ''; // Clear the current grid
    submissions.forEach(submission => {
        const div = document.createElement('div');
        div.className = 'submission-item';
        div.textContent = submission;
        submissionsGrid.appendChild(div);
    });

    // Save submissions to local storage
    localStorage.setItem('bingoSubmissions', JSON.stringify(submissions));
}

// Add a new submission
document.getElementById('displayButton').addEventListener('click', function() {
    const bingoLetter = document.getElementById('bingoLetter').value.toUpperCase();
    const bingoNumber = document.getElementById('bingoNumber').value;

    if (['B', 'I', 'N', 'G', 'O'].includes(bingoLetter) && bingoNumber >= 1 && bingoNumber <= 75) {
        const submission = `${bingoLetter}-${bingoNumber}`;
        submissions.push(submission);
        updateDisplay();
    } else {
        alert('Please enter a valid BINGO letter (B, I, N, G, O) and number (1-75).');
    }
});

// Undo the last submission
document.getElementById('undoButton').addEventListener('click', function() {
    if (submissions.length > 0) {
        submissions.pop(); // Remove the last submission
        updateDisplay();
    } else {
        alert('No submissions to undo.');
    }
});

// Clear all submissions
document.getElementById('clearButton').addEventListener('click', function() {
    submissions = [];
    localStorage.removeItem('bingoSubmissions');
    updateDisplay();
});

// Initial display of submissions
updateDisplay();