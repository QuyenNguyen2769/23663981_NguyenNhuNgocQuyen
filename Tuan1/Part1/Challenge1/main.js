function calculateBMI(){

    var heightJond = parseFloat(document.getElementById('heightJond').value);
    var weightJond = parseFloat(document.getElementById('weightJond').value);
    var heightMark = parseFloat(document.getElementById('heightMark').value);
    var weightMark = parseFloat(document.getElementById('weightMark').value);

    if(!heightJond||!weightJond||!heightMark||!weightMark)
        {
            alert("Vui lòng nhập đẩy đủ thông tin");
            return;
        }

    if(heightJond <= 0 || weightJond <= 0 || heightMark <= 0 || weightMark <= 0)
        {
            alert("Cân nặng và chiều cao phải lớn hơn 0");
            return;
        }

    var bmiJond = weightJond / (heightJond * heightJond);
    var bmiMark = weightMark / (heightMark * heightMark);

    document.getElementById('JondResult').textContent = bmiJond.toFixed(2);
    document.getElementById('MarkResult').textContent = bmiMark.toFixed(2);

    console.log("Jond BMI:", bmiJond.toFixed(2));
    console.log("Mark BMI:", bmiMark.toFixed(2));

    var result = document.getElementById('comparisonText');
    if(bmiJond < bmiMark)
        result.innerHTML = "Jond có BMI cao hơn Mark";
    else if (bmiJond > bmiMark)
        result.innerHTML = "Mark có BMI cao hơn Jond";
    else
        result.innerHTML = "Mark và Jond có BMI bằng nhau";
}