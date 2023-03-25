function calculategrade() {
    var num1 = parseInt(document.getElementById("m1").value);
    var num2 = parseInt(document.getElementById("m2").value);
    var num3 = parseInt(document.getElementById("m3").value);
    var num4 = parseInt(document.getElementById("m4").value);
    var num5 = parseInt(document.getElementById("m5").value);
    let sum = parseInt(num1 + num2 + num3 + num4 + num5);
    let Average = sum / 4;
    document.getElementById("total").innerHTML = sum;
    document.getElementById("average").innerHTML = Average;

    if (num1 < 0 || num2 < 0 || num3 < 0 || num4 < 0 || num5 < 0) {
        alert("please enter the valid marks.....");
        return false;
    }
    let overallgrade = parseInt((sum / 500) * 100);

    if (overallgrade >= 90) {
        document.getElementById("grade").innerHTML = "A"
    }
    if (overallgrade >= 80 && overallgrade <= 89) {
        document.getElementById("grade").innerHTML = "B"
    }
    if (overallgrade >= 70 && overallgrade <= 79) {
        document.getElementById("grade").innerHTML = "C"
    }
    if (overallgrade >= 60 && overallgrade <= 69) {
        document.getElementById("grade").innerHTML = "D"
    }
    if (overallgrade < 60) {
        document.getElementById("grade").innerHTML = "F"
    }


}