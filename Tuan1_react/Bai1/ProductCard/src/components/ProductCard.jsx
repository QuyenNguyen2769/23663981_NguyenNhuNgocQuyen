import React from 'react';
import './ProductCard.css';

function ProductCard({anh,ten,gia}){
    return(
    <>
        <div className="card">
            <img src={anh}/>
            <h3>{ten}</h3>
            <h4>{gia.toLocaleString('vi-VN')}₫</h4>
        </div> 
    </>
    );   
}
export default ProductCard;