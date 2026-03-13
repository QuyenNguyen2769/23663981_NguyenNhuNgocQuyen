import React, { useState, useEffect} from 'react'

function DynamiFetch() {
    const [userId, setUserId] = useState(1);
    const [user, setUsers] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(userId <1 || userId > 10) {
            setUsers(null);
            setError("User not found")  ;
            return;
        }
    const fetchUserDetails = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!response.ok) throw new Error("Lỗi khi tải thông tin!!");
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
                setUsers(null);
            } finally {
                setLoading(false);
            }
    };
    fetchUserDetails();
    }, [userId]);

    return (
        <div>
            <h1 style={{ color: 'red' }}>Bài 3</h1>
        <div style={{ marginBottom: '20px' }}>
        <label>Nhập ID (1-10): </label>
        <input 
          type="number" 
          value={userId} 
          onChange={(e) => setUserId(Number(e.target.value))} 
        />
      </div>

      <hr />

      {/* HIỂN THỊ CÓ ĐIỀU KIỆN */}
      {/* 1. Nếu đang loading thì hiện chữ Loading */}
      {loading && <p style={{ color: 'blue' }}>Đang tìm kiếm... </p>}

      {/* 2. Nếu có lỗi thì hiện câu lỗi màu đỏ */}
      {error && !loading && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}

      {/* 3. Nếu có data user và không có lỗi, không loading thì mới vẽ thông tin ra */}
      {user && !loading && !error && (
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      )}
    </div>
  );
};

export default DynamiFetch;