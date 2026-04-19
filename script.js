let screen = document.getElementById("screen");

// add value
function addValue(val) {
  screen.value += val;
}

// clear all
function clearAll() {
  screen.value = "";
}

// delete last
function removeOne() {
  screen.value = screen.value.slice(0, -1);
}

// calculate
function getAnswer() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", function(e) {
  e.preventDefault();

  let key = e.key;

  if (key >= '0' && key <= '9') {
    addValue(key);
  } else if ("+-*/.".includes(key)) {
    addValue(key);
  } else if (key === "Enter") {
    getAnswer();
  } else if (key === "Backspace") {
    removeOne();
  } else if (key === "Escape") {
    clearAll();
  }
});