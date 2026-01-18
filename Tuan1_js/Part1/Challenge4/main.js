function calculate(){
    var hoaDon = parseFloat(document.getElementById("tien_HD").value);
    if (hoaDon <= 0){
        alert("Vui lòng nhập số tiền hóa đơn hợp lệ");
    }

    var tip = hoaDon >= 50 && hoaDon <= 300 ? hoaDon * 0.15 : hoaDon * 0.20;
    var tongTien = hoaDon + tip;
    document.getElementById('ketQua').innerHTML = 
    `Hóa đơn: ${hoaDon.toFixed(2)}<br>
    Tiền tip: ${tip.toFixed(2)}<br>
    Tổng cộng: ${tongTien.toFixed(2)}`;

    console.log(`Hóa đơn là ${hoaDon}, tiền tip là ${tip.toFixed(2)} và tổng giá trị là ${tongTien.toFixed(2)}`);
}