const loadData = () => {
    const usersContainer = document.getElementById('users');
    usersContainer.textContent = 'Caricamento...';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            usersContainer.innerHTML = '';
            users.forEach(user => {
                const card = document.createElement('div');
                card.className = 'user';
                card.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
                usersContainer.appendChild(card);
            });
        })
        .catch(error => {
            usersContainer.textContent = 'Errore nel caricamento';
            console.error('Fetch error:', error);
        });
};

const changeColors = () => {
    const cards = document.querySelectorAll('.user');
    cards.forEach(card => {
        
        card.style.backgroundColor = 'red';
        ;
    });
};
document.getElementById('load-users').addEventListener('click', loadData);
document.getElementById('change-color').addEventListener('click', changeColors);