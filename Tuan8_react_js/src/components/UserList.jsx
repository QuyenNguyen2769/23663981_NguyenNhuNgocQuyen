import { useUsers } from "../hooks/useUsers";

function UserList() {
  const { data, loading, error } = useUsers();

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>Danh sách người dùng</h2>

      {/* Loading Spinner / Message */}
      {loading && (
        <div style={{ color: "blue", fontSize: "16px", fontWeight: "bold" }}>
           ⏳ Đang tải dữ liệu...
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div style={{ color: "red", background: "#fee", padding: "10px", borderRadius: "5px" }}>
           ❌ Lỗi: {error}
        </div>
      )}

      {/* Data List */}
      {!loading && !error && data.length > 0 && (
        <ul style={{ textAlign: "left" }}>
          {data.map((user) => (
            <li key={user.id} style={{ margin: "10px 0" }}>
              <strong>{user.name}</strong> - <em>{user.email}</em>
            </li>
          ))}
        </ul>
      )}

      {/* Empty Data */}
      {!loading && !error && data.length === 0 && (
        <p>Không có người dùng nào được tìm thấy.</p>
      )}
    </div>
  );
}

export default UserList;
