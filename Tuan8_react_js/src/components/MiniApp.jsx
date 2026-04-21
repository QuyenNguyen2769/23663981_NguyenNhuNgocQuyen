import { AuthProvider, useAuthContext } from "../contexts/AuthContext";
import { CartProvider, useCartContext } from "../contexts/CartContext";
import { ProductProvider, useProductContext } from "../contexts/ProductContext";

function MiniAppContent() {
  const { user, login, logout } = useAuthContext();
  const { cart, addToCart } = useCartContext();
  const { products, loading, error } = useProductContext();

  return (
    <div style={{ margin: "20px", padding: "20px", border: "2px solid purple", borderRadius: "8px" }}>
      <h2>Bài 10: Mini App (Tổng hợp Context API)</h2>

      {/* Auth UI */}
      <div style={{ padding: "10px", background: "#eee", marginBottom: "20px" }}>
        {user ? (
          <div>
            <p>Xin chào: {user.username || user.firstName}</p>
            <button onClick={logout}>Đăng xuất</button>
          </div>
        ) : (
          <button onClick={() => login({ username: "Quyen", firstName: "Quyên" }, "fake-jwt-token")}>
            Đăng nhập giả lập (Quyen)
          </button>
        )}
      </div>

      {/* Product List UI */}
      <div>
        <h3>Danh mục sản phẩm</h3>
        {loading && <p>Đang tải sản phẩm...</p>}
        {error && <p>Lỗi: {error}</p>}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid gray", padding: "10px", width: "150px" }}>
              <h4>{p.title}</h4>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart UI */}
      <div style={{ marginTop: "20px" }}>
        <h3>Giỏ hàng ({cart.length} sản phẩm)</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - Số lượng: {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MiniApp() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <MiniAppContent />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default MiniApp;
