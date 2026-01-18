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
    {
        console.log(`Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJond.toFixed(2)})!`);
        result.innerHTML = `Mark's BMI (${bmiMark.toFixed(2)}) is higher than John's (${bmiJond.toFixed(2)})!`;
    }
        
    else if (bmiJond > bmiMark)
    {
        console.log(`Jond's BMI (${bmiJond.toFixed(2)} is higher than Mark's (${bmiMark.toFixed(2)})!)`);
        result.innerHTML = `Jond's BMI (${bmiJond.toFixed(2)} is higher than Mark's (${bmiMark.toFixed(2)})!)`;
    }
    else
    {
        console.log(`Both Jonn and Mark have the same BMI of ${bmiJond.toFixed(2)}!`)
        result.innerHTML = `Both Jonn and Mark have the same BMI of ${bmiJond.toFixed(2)}!`;
    }
}