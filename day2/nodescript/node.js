async function fetchUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const userNames = data.map(user=>user.name);
        return userNames
    } catch (error) {
        console.error(error);
    }
}

fetchUsers().then(result=>console.log(result));