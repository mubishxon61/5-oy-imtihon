const usersContainer = document.getElementById('usersContainer');
const searchInput = document.getElementById('searchInput');
let users = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    users = data;
    displayUsers(users);
  });

function displayUsers(usersList) {
  usersContainer.innerHTML = '';
  usersList.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('userCard');
    card.innerHTML = 
      `<h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> 
        <a href="http://${user.website}" target="_blank">${user.website}</a>
      </p>
    `;
    usersContainer.appendChild(card);
  });
}

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(term)
  );
  displayUsers(filtered);
});