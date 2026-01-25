function xuLy() {
  // Lấy dữ liệu từ input
  const markMass = Number(document.getElementById('markMass').value);
  const markHeight = Number(document.getElementById('markHeight').value);

  const johnMass = Number(document.getElementById('johnMass').value);
  const johnHeight = Number(document.getElementById('johnHeight').value);

  // Validate dữ liệu
  if (
    markMass <= 0 || markHeight <= 0 ||
    johnMass <= 0 || johnHeight <= 0
  ) {
    document.getElementById('ketQua').textContent =
      'Vui lòng nhập đầy đủ và hợp lệ';
    return;
  }

  // Object Mark
  const mark = {
    fullName: 'Mark Miller',
    mass: markMass,
    height: markHeight,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };

  // Object John
  const john = {
    fullName: 'John Smith',
    mass: johnMass,
    height: johnHeight,
    calcBMI: function () {
      this.bmi = this.mass / (this.height * this.height);
      return this.bmi;
    }
  };

  // Tính BMI
  mark.calcBMI();
  john.calcBMI();

  // So sánh & hiển thị kết quả
  let result = '';

  if (mark.bmi > john.bmi) {
    result = `${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${john.fullName}'s (${john.bmi.toFixed(1)})`;
  } else {
    result = `${john.fullName}'s BMI (${john.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})`;
  }

  document.getElementById('ketQua').textContent = result;
}
