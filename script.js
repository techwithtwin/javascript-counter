const counter = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

decrementBtn.addEventListener("click", decrement);

function decrement() {
  // do something when the button is clicked.
  const counterValue = counter.innerText;
  const newCounterValue = Number(counterValue) - 1;

  // now let's set the new value to the counter element;
  counter.innerText = newCounterValue;
}
