// تقييم المسألة الرياضية
function evaluateExpression(mathProblem) {
    // قسّم المسألة الرياضية إلى أجزاء
    var parts = mathProblem.split(" ");

    // إنشاء دالة JavaScript جديدة تحسب النتيجة
    var expression = new Function(parts);

    // قم بتقييم الدالة الجديدة
    return expression();
}

// معالجة النقر على الزر
document.getElementById("solve-button").addEventListener("click", function() {
    // الحصول على المسألة الرياضية
    var mathProblem = document.getElementById("math-problem").value;

    // تقييم المسألة الرياضية
    var result = evaluateExpression(mathProblem);

    // عرض النتيجة
    document.getElementById("result").textContent = "النتيجة: " + result;
});
