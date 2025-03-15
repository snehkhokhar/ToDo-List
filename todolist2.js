let inputs = document.getElementById("todo");
let text = document.querySelector(".container");

function add() {
  if (inputs.value == "") {
    alert("Please enter a ToDo");
  } else {
    let newele = document.createElement("ul");
    newele.innerHTML = `${inputs.value} <img src="assets/icons/close_24dp_FFFFFF_FILL0_wght300_GRAD0_opsz24.png" alt="">`;
    text.appendChild(newele);
    inputs.value = "";

    let r = Math.floor(0 + Math.random() * 5);
    let clr = [` #ff5e62`, ` #2f80ed`, ` #ea51ff`, ` #a955ff`,` #80ff72`][r];
    newele.style.border = `2px solid ${clr}`;

    newele.addEventListener("mouseenter",shadow = ()=>{
      newele.style.boxShadow = `0px 0px 10px ${clr}`
    })
    newele.addEventListener("mouseleave",shadow = ()=>{
      newele.style.boxShadow = `none`
    })

    

    newele.querySelector("img").addEventListener(
      "click",
      (run = () => {
        newele.remove();
      })
    );
  }
}

inputs.addEventListener("keypress",down = (e) => {
    if (e.keyCode == 13) {
      add();
    }
  }
);
