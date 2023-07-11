function calculate() {
  var input1 = parseInt(document.getElementById("input1").value);
  var input2 = parseInt(document.getElementById("input2").value);

  var result = input1 + input2;

  if (result > 50) {
    result = result / 2;
  }

  document.getElementById("result").textContent = "Result: " + result;
}
