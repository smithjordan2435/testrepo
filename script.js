function displayRec() {
    // Get the input values
    const fullName = document.getElementById('fullName').value.trim();
    const recommendation = document.getElementById('recommendation').value.trim();

    // Validate input
    if (!fullName || !recommendation) {
        alert('Please fill out both fields before submitting.');
        return;
    }

    // Find the first available span
    const spans = document.querySelectorAll('#recommendations .links span');
    let targetSpan = null;

    for (const span of spans) {
        if (!span.textContent.trim()) {
            targetSpan = span;
            break;
        }
    }

    // If no span is available, create a new one
    if (!targetSpan) {
        targetSpan = document.createElement('span');
        const linksDiv = document.querySelector('#recommendations .links');
        linksDiv.appendChild(targetSpan);
    }

    // Add the recommendation to the found or newly created span
    const newRec = document.createElement('div');
    newRec.className = 'recommendation-entry';
    newRec.innerHTML = `<strong>${fullName}:</strong> <p>${recommendation}</p>`;
    targetSpan.appendChild(newRec);

    // Clear the input fields
    document.getElementById('fullName').value = '';
    document.getElementById('recommendation').value = '';
}
