const usersContainer = document.getElementById('usersContainer');
const searchInput = document.getElementById('searchInput');
let users = [];


fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    users = data;
    displayUsers(users);
  })
  .catch(err => console.error('404', err));


function displayUsers(usersList) {
  usersContainer.innerHTML = '';
  usersList.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('userCard');
    userCard.innerHTML = 
      `<h3>${user.name}</h3>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;
    usersContainer.appendChild(userCard);
  });
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
  displayUsers(filteredUsers);
});