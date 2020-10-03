const container = document.querySelector("#container");

// const clicked = (e) => {
//   let findTheClass = e.target.parentNode.children
//     .item(1)
//     .children.item(0)
//     .classList.value.split(" ")
//     .find((i) => i === "menu-opened");

//   let targetMenuClasses = e.target.parentNode.children.item(1).children.item(0)
//     .classList;

//   targetMenuClasses.toggle("menu-opened");
// };

const clicked = (e) => {
  let getParent = e.target.parentNode;
  let elementType = getParent.dataset.type;
  let getMenu = getParent.getElementsByClassName("dropdown")["0"];
  let height = getMenu.scrollHeight + "px";

  try {
    elementType === "menu" && getMenu.style.height === ""
      ? (getMenu.style.height = height)
      : (getMenu.style.height = "");
  } catch (err) {
    throw err;
  }
};

container.addEventListener("click", clicked);
