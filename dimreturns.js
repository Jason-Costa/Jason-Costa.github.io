function calculate() {
  var input = parseInt(document.getElementById("input").value);

  var result = input;

  if (result > 50) {
    result = 50 + Math.floor((result - 50) / 2);
  }

  document.getElementById("result").innerText = "Your Diminishing Returns Result is: " + result;
}
