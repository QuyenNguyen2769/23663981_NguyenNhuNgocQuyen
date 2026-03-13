import { useEffect, useState } from "react"

function BasicFetch() {
    const [users, setUsers] = useState([]);

    /* lấy API bằng fetch → .then()  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => {setUsers(data);
    })
            .catch((error) => {console.log('Error', error)});
    }, [])
  return (
    <div>
        <h2>User List</h2>
        
        {users.map((user) => (
            <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
        </div>
        ))}
    </div> 
  )*/

  useEffect(() => {
    // lấy API bằng fetch → async-await

    const fetchUsers = async () => {

      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await response.json();

      setUsers(data);

    };

    fetchUsers();

  }, []);

  return (
    <div>
        <h1 style={{ color: 'red' }}>Bài 1</h1>
        <h2>User List</h2>

            {users.map((user) => (
                <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <hr />
                </div>
            ))}

    </div>
  );

}export default BasicFetch;
