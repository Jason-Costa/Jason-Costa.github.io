function calculate() {
  var input = parseInt(document.getElementById("input").value);

  var result = input;

  if (result > 50) {
    result = 50 + Math.floor((result - 50) / 2);
  }

  document.getElementById("result").textContent = result;
  document.getElementById("result-container").style.display = "block";
}
