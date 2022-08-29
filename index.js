
let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function Purchase() {
   console.log("button clicked")
   errorParagraph.textContent = "something went wrong, please try again"
}


