let submissions = [];

document.getElementById('displayButton').addEventListener('click', function() {
    const bingoLetter = document.getElementById('bingoLetter').value.toUpperCase();
    const bingoNumber = document.getElementById('bingoNumber').value;

    if (['B', 'I', 'N', 'G', 'O'].includes(bingoLetter) && bingoNumber >= 1 && bingoNumber <= 75) {
        const bingoDisplay = document.getElementById('bingoDisplay');
        const submission = `${bingoLetter}-${bingoNumber}`;
        bingoDisplay.textContent = submission;
        bingoDisplay.style.display = 'block';

        // Add the submission to the list
        submissions.push(submission);
        updateSubmissionsGrid();
    } else {
        alert('Please enter a valid BINGO letter (B, I, N, G, O) and number (1-75).');
    }
});

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('bingoDisplay').style.display = 'none';
    document.getElementById('bingoLetter').value = '';
    document.getElementById('bingoNumber').value = '';

    // Clear the submissions list
    submissions = [];
    updateSubmissionsGrid();
});

function updateSubmissionsGrid() {
    const submissionsGrid = document.getElementById('submissionsGrid');
    submissionsGrid.innerHTML = ''; // Clear the current grid

    submissions.forEach(submission => {
        const div = document.createElement('div');
        div.className = 'submission-item';
        div.textContent = submission;
        submissionsGrid.appendChild(div);
    });
}