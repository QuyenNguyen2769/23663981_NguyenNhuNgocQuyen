import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';

function Login() {
  const { user, token, loading, error, login, logout } = useAuth();
  const [username, setUsername] = useState('Quyen');
  const [password, setPassword] = useState('112233');

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #aaa", borderRadius: "8px" }}>
      <h2>Đăng nhập (Bài 9 - Auth + JWT)</h2>

      {token ? (
        <div>
          <h3 style={{ color: "green" }}>✅ Đăng nhập thành công!</h3>
          {user && <p>Xin chào: {user.firstName || user.username} {user.lastName || ''}</p>}
          <p style={{ fontSize: "12px", wordWrap: "break-word", color: "gray" }}>Token: {token}</p>
          <button onClick={logout} style={{ background: "red", color: "white", padding: "8px" }}>Đăng xuất</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <label>Username (Quyen): </label>
            <input value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Password (112233): </label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" disabled={loading} style={{ marginTop: "10px", padding: "8px 16px" }}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Login;
