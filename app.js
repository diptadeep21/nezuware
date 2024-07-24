document.addEventListener('DOMContentLoaded', () => {
    const achievementForm = document.getElementById('achievement-form');
    const achievementsList = document.getElementById('achievements-list');

    achievementForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const certificate = document.getElementById('certificate').files[0];

        if (title && description && certificate) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const achievement = document.createElement('div');
                achievement.classList.add('achievement');
                achievement.innerHTML = `
                    <h3>${title}</h3>
                    <p>${description}</p>
                    <img src="${e.target.result}" alt="Certificate">
                `;
                achievementsList.appendChild(achievement);
                achievementForm.reset();
            };
            reader.readAsDataURL(certificate);
        } else {
            alert('Please fill in all fields and upload a certificate.');
        }
    });
});
