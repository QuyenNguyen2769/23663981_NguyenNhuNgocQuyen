// Hàm tính tip
var calcTip = bill =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Hàm xử lý khi bấm nút
function xuLy() {
  var bill = Number(document.getElementById('bill').value);

  if (bill <= 0) {
    document.getElementById('ketQua').textContent =
      'Vui lòng nhập hóa đơn hợp lệ';
    return;
  }

  var tip = calcTip(bill);
  var total = bill + tip;

  document.getElementById('ketQua').textContent =
    `Hóa đơn: ${bill} | Tip: ${tip.toFixed(2)} | Tổng: ${total.toFixed(2)}`;
}
