let input = document.getElementById("lengthInput");
document.getElementById("output").style.display = "none";

input.addEventListener("input", showItems);

function showItems() {
  let inputText = input.value;
  // console.log(inputText);
  document.getElementById("kiloMeters").innerHTML = inputText / 1000;
  document.getElementById("feet").innerHTML = inputText * 3.281;
  document.getElementById("centiMeters").innerHTML = inputText * 100;

  document.getElementById("output").style.display = "block";
}
