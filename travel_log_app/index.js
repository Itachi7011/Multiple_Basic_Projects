document.addEventListener('DOMContentLoaded', function() {
    const travelForm = document.getElementById('travelForm');
    const entries = document.getElementById('entries');

    travelForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const locationInput = document.getElementById('location');
        const descriptionInput = document.getElementById('description');

        const location = locationInput.value;
        const description = descriptionInput.value;

        if (location.trim() === '' || description.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        addEntry(location, description);

        locationInput.value = '';
        descriptionInput.value = '';
    });

    function addEntry(location, description) {
        const entry = document.createElement('div');
        entry.classList.add('entry');
        entry.innerHTML = `
            <h3>${location}</h3>
            <p>${description}</p>
        `;
        entries.appendChild(entry);
    }
});