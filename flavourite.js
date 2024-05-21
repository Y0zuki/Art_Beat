document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('artist-form');
    const clearBtn = document.getElementById('clear-btn');
    const artistList = document.getElementById('artist-output');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const artistName = document.getElementById('artist-name').value;
        const imageUrl = document.getElementById('artist-image').value;
        const artistBio = document.getElementById('artist-bio').value;

        const artistHTML = `
            <div class="artist-card">
                <h3>${artistName}</h3>
                ${imageUrl ? `<img src="${imageUrl}" alt="${artistName}">` : ''}
                <p>${artistBio}</p>
            </div>
        `;

        artistList.insertAdjacentHTML('beforeend', artistHTML);
        form.reset();
    });

    clearBtn.addEventListener('click', function() {
        form.reset(); // Resets the form to its initial state
        artistList.innerHTML = ''; // Clear any previously displayed artist information
    });
});