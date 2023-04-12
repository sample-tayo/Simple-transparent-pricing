let btn = document.getElementById("btn");

function leftClick() {
  btn.style.left = "0";

  let onPress = document.querySelectorAll("#yh");
  for (let i = 0; i < onPress.length; i++) {
    onPress[i].className = "uil uil-times";
  }
}

function rightClick() {
  btn.style.left = "125px";

  let onPress = document.querySelectorAll("#yh");
  for (let i = 0; i < onPress.length; i++) {
    onPress[i].className = "uil uil-check";
  }
  console.log(`im happy`);
}

//   onPress.forEach.classList.add("uil-times");
//   onPress.forEach.classList.remove("uil-check");
// const onPress = document.getElementsByClassName("toggle-btn");

// const dicked = (onPress) => {
//   i.target.className = "circle";
// };

// onPress[0].addEventListener("click", boxPressed);
