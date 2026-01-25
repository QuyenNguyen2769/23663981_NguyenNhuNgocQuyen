// Hàm tính tip (từ challenge trước)
const calcTip = bill =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Hàm tính trung bình (BONUS)
function calcAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

// Hàm xử lý
function xuLy() {
  // Dữ liệu test
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

  const tips = [];
  const totals = [];

  //tính tip & total
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
  }

  console.log('Bills:', bills);
  console.log('Tips:', tips);
  console.log('Totals:', totals);

  
  let text = '';

  for (let i = 0; i < bills.length; i++) {
    text += `Bill: ${bills[i]} | Tip: ${tips[i].toFixed(2)} | Total: ${totals[i].toFixed(2)}\n`;
  }

  document.getElementById('ketQua').textContent = text;

  // Average
  const avgTotal = calcAverage(totals);

  console.log('Average total:', avgTotal);

  document.getElementById('average').textContent =
    `👉 Average Total: ${avgTotal.toFixed(2)}`;
}
