import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetail() {
 const {id} = useParams(); 
 const navigate = useNavigate();
 const handleBuy = () =>{
  navigate("/checkout");
 };
    return (
    <div>
        <h2>ProductDetail </h2>
        <p>Product ID:{id}</p>
        <button onClick={handleBuy}>
        Mua hàng
      </button>
    </div>
  )
}
