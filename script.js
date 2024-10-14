const container = document.querySelector(".container");
const btn = document.querySelector(".grid-size-btn");

const btnEventHandler = function () {
  let input = parseInt(prompt("Please enter a grid size "));

  if (Number.isInteger(input)) {
    container.innerHTML = null;

    if (input > 100) {
      input = 100;
    }
    gridCreater(input);
  } else {
    alert("C'mon Now ");
  }
};

btn.addEventListener("click", btnEventHandler);

const gridCreater = function (size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square", `${i + 1}`);
    div.style.flexBasis = `${100 / size}%`;
    div.style.height = `${100 / size}%`;
    container.appendChild(div);
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "#ab886d";
    });
  }
};

gridCreater(4);
