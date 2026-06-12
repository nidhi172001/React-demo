import { useEffect, useState } from "react";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);


  return (
    <div className="p-4 text-center">
      <h1>User List</h1>
      <ul>
        {users?.length > 0 && users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> 
    </div>  
  );
}

export default User;
