

//burger
const btnBurger = document.getElementById("header__burger")
const lineLeft = document.getElementById("header__line-left")
const lineRigth = document.getElementById("header__line-rigth")
const burgerMenu = document.getElementById("list-burger")

btnBurger.addEventListener("click", function() {
  lineLeft.classList.toggle("header__activ-left")
  lineRigth.classList.toggle("header__activ-rigth")
  burgerMenu.classList.toggle("header__activ-burger")
})