function calAvg(){
var kq_Tran1Dol = parseFloat(document.getElementById('tran1_Dol').value);
var kq_Tran2Dol = parseFloat(document.getElementById('tran2_Dol').value);
var kq_Tran3Dol = parseFloat(document.getElementById('tran3_Dol').value);

var kq_Tran1Koa = parseFloat(document.getElementById('tran1_Koa').value);
var kq_Tran2Koa = parseFloat(document.getElementById('tran2_Koa').value);
var kq_Tran3Koa = parseFloat(document.getElementById('tran3_Koa').value);

var tb_Dol = (kq_Tran1Dol+kq_Tran2Dol+kq_Tran3Dol)/3;
var tb_Koa = (kq_Tran1Koa+kq_Tran2Koa+kq_Tran3Koa)/3;

document.getElementById('avg_Dol').textContent = tb_Dol.toFixed(2);
document.getElementById('avg_Koa').textContent = tb_Koa.toFixed(2);

console.log("Điểm trung bình của Dolphins: ", tb_Dol.toFixed(2));
console.log("Điểm trung bình của Koalas: ", tb_Koa.toFixed(2));

var ketQua = document.getElementById('doiThang');
if(tb_Dol > tb_Koa && tb_Dol >= 100){
    ketQua.innerHTML = "Đội thắng cuộc là Dolphins!!!";
    ketQua.style.color = "green";
}
else if( tb_Dol < tb_Koa && tb_Koa >=100){
    ketQua.innerHTML = "Đội thắng cuộc là Koalas!!!";
    ketQua.style.color = "pink";
}
else if( tb_Dol === tb_Koa && tb_Dol >=100 && tb_Koa >= 100){
    ketQua.innerHTML = "Cả hai đội hòa nhau!!!";
    ketQua.style.color = "yellow";
}
else{
    ketQua.innerHTML = "Không có đội nào giành chiến thắng! :(";
    ketQua.style.color = "red";
}
    
}



