async function fetchUserData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        console.error(error);
    }
}

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Address:</strong> ${user.address.street}, ${user.address.city}
        `;
        userList.appendChild(listItem);
    });
}
fetchUserData();
