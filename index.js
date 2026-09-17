const allButtonEls = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

console.log("Hello there, welcome to the console.")

for (let i = 0; i < allButtonEls.length; i++) {
  allButtonEls[i].addEventListener("click", () => {
    const buttonValue = allButtonEls[i].textContent;
    if (buttonValue === "Be Gone, Numbers!") {
      eliminateResult();
    } else if (buttonValue === "Gimme Answer!") {
      bigBrainResult();
    } else if (buttonValue === "27"){
      myFavoriteNumber();
    }else {
      appendValue(buttonValue);
    }
  });
}

function eliminateResult() {
  inputFieldEl.value = "";
}

function bigBrainResult() {
  inputFieldEl.value = eval(inputFieldEl.value)+"!!!!!!!";
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}

function myFavoriteNumber(){
  inputFieldEl.value = "27 in my favorite number, that is the only purpose for this button"
}
