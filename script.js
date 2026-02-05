let textInput = document.getElementById("textInput");
let counter = document.getElementById("counter");
let warning = document.getElementById("warning");

textInput.addEventListener("input", function () {

  let textLength = textInput.value.length;

  counter.innerText = textLength + " / 100";

  if (textLength > 70 && textLength < 100) {
    counter.style.color = "orange";
    warning.style.display = "none";
  } 
  else if (textLength === 100) {
    counter.style.color = "red";
    warning.style.display = "block";
  } 
  else {
    counter.style.color = "black";
    warning.style.display = "none";
  }

});
