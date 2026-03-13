import React, { useState, useEffect } from 'react'

function Loading_ErrorState() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Đã có lỗi xảy ra!!!"); // Tạo lỗi giả để kiểm tra trạng thái lỗi
                }

                const data = await response.json();
                await new Promise(resolve => setTimeout(resolve, 2000));
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1 style={{ color: 'red' }}>Bài 2</h1>
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
}

export default Loading_ErrorState;