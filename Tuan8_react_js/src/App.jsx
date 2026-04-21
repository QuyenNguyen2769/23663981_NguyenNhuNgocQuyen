import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Toast from "./components/Toast";
import UserList from "./components/UserList";
import SearchBox from "./components/SearchBox";
import Login from "./components/Login";
import MiniApp from "./components/MiniApp";

function App() {
  return (
    <div>
      <SearchBox />
      <hr />
      <Login />
      <hr />
      <MiniApp />
      <hr />
      <h2> Bài 5 + Bài 6 + Bài 7</h2>
      <ProductList />
      <Cart />
      <UserList />
      <Toast />
    </div>
  );
}

export default App;