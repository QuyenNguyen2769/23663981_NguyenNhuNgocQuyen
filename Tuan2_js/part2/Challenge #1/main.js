const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins.toFixed(1)} vs. ${avgKoalas.toFixed(1)})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas.toFixed(1)} vs. ${avgDolphins.toFixed(1)})`;
  } else {
    return 'No team wins';
  }
}

function xuLy() {
  const d1 = Number(document.getElementById('d1').value);
  const d2 = Number(document.getElementById('d2').value);
  const d3 = Number(document.getElementById('d3').value);

  const k1 = Number(document.getElementById('k1').value);
  const k2 = Number(document.getElementById('k2').value);
  const k3 = Number(document.getElementById('k3').value);

  const avgDolphins = calcAverage(d1, d2, d3);
  const avgKoalas = calcAverage(k1, k2, k3);

  const result = checkWinner(avgDolphins, avgKoalas);
  document.getElementById('ketQua').textContent = result;
}
