'use strict';

//Hàm in dự báo
const printForecast = function (arr) {
  let forecast = '';

  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}ºC in ${i + 1} days `;
  }

  console.log(forecast + '...');
};

// Test data
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
