/* …from 7 to 12, should be written in JavaScript:

EX7: Write a function to change the h1 text to something else

*/

const changeH1Text = function () {
  document.quarySelector("h1").innerText = "Luxuxy by Jay"
}

changeH1Text()

/*EX8: Write a function to change the page background color
 */

const changeBackgroundColor = function () {
  document.querySelector("body").style.backgroundColor = "lightblue"
}

changeBackgroundColor()

//EX9: Write a function to change the footer address with a fake one

const changeFooterAddress = function () {
  document.querySelector("footer > div:nth-child(2)").InnerHTML =
    "Lekki, Lagos, Nigeria This is a fake address Lol"
}

changeFooterAddress()

//EX10: Write a function to add a CSS class to every Amazon link

const addClassToLinks = function () {
  for (let node of document.querySelectorAll("span")) {
    node.classList.add("big-font")
  }
}

addClassToLinks()

//EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image
const toggleClassOfImg = function () {
  for (let image of document.querySelectorAll("img")) {
    image.classList.toggle("hidden")
  }
}
toggleClassOfImg()

//EX12: Write a function to color the price of the products in a different one every time it’s invoked */

const setPriceColor = function getPriceColor() {
  for (let price of document.querySelectorAll("tr > td:nth-child(4)")) {
    price.style.color = color
  }
}
setPriceColor()
