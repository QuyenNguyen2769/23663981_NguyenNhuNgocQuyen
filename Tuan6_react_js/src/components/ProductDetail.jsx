import { useParams } from "react-router-dom"

export default function ProductDetail() {
 const {id} = useParams(); 
    return (
    <div>
        <h2>ProductDetail </h2>
        <p>Product ID:{id}</p>
    </div>
  )
}
