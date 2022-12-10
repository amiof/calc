let display = document.querySelector(".display p");


let button = document.getElementsByClassName("button");
// console.log(button)

let displaycurrent = [];

for (let i in button) {
  button[i].addEventListener("click", clickedButton);
}

function clickedButton(event) {
  numberid = event.target.id;
  if (numberid !== "C" && numberid !== "=") {
    displaycurrent.push(numberid);
  }

  let joindisplay = displaycurrent.join("");

  display.innerText = `${joindisplay}`;

  if (numberid == "AC") {
    display.innerText = `0`;
    displaycurrent = [];
  }
  if (numberid == "C") {
    lengthNumberId = displaycurrent.length;
    // console.log(lengthNumberId);
    displaycurrent.pop(displaycurrent.indexOf(lengthNumberId));
  }
  if (numberid == "=") {
    execNumber = eval(joindisplay);
    display.innerText = `${execNumber}`;
    console.log(execNumber);
    displaycurrent = [execNumber];
  }
}
