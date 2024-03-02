const keyWord = document.querySelector("#keyword");
const keyCode = document.querySelector("#keyCode");
const extra = document.querySelector("#extra");


document.addEventListener("keydown", (e) => {
  extra.innerText = "You Pressed ";
  keyCode.classList.remove("hide");
  
  if (e.code === 'Space') {
    keyWord.innerText = "Space";
  } else {
    keyWord.innerText = e.key;
  }
  
  keyCode.innerText = e.keyCode;
})