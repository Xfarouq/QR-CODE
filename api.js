const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const users = await response.json();
      displayUsers(users);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  const displayUsers = (users) => {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
  
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.name} (${user.email})`;
      userList.appendChild(listItem);
    });
  };
  
  fetchUserData();