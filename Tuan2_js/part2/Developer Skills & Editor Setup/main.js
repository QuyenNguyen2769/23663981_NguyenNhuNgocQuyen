var printForecast = function (arr) {
      let result = '';

      for (let i = 0; i < arr.length; i++) {
        result += `... ${arr[i]}ºC in ${i + 1} days `;
      }

      return result + '...';
    };

    function xuLy() {
      const t1 = Number(document.getElementById('nhietDo1').value);
      const t2 = Number(document.getElementById('nhietDo2').value);
      const t3 = Number(document.getElementById('nhietDo3').value);

      const arr = [t1, t2, t3];

      const ketQua = printForecast(arr);
      document.getElementById('ketQua').textContent = ketQua;
    }