// // // JS goes here
var menuIcon = document.getElementById("hamburger");

function openNav() {
    document.getElementById("myNav").style.width = "100%";
//   document.getElementById("myNav").style.display = "block";
  menuIcon.style.display="none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
//   document.getElementById("myNav").style.display = "none";
  menuIcon.style.display="block";
}
// var modal = document.getElementById("overlay");

// // Get the button that opens the modal
// const btn = document.getElementById("hamburger");

// // Get the <span> element that closes the modal
// const close = document.getElementsByClassName("close")[0];


// btn.addEventListener("click", ()=>{
//     modal.style.display="block";
// });

// close.addEventListener("click",()=>{
//     modal.style.display="none";
// });

// // function showElement(element){
// //     element.style.display="block";
// // }

// // function hideElement(){
// //     element.style.display="none";
// // }

// // window.addEventListener("click", ()=>{
// // });

// // btn.onclick = function() {
// //   modal.style.display = "block";
// // }

// // // When the user clicks on <span> (x), close the modal
// // span.onclick = function() {
// //   modal.style.display = "none";
// // }

// // // When the user clicks anywhere outside of the modal, close it
// // window.onclick = function(event) {
// //   if (event.target == modal) {
// //     modal.style.display = "none";
// //   }
// // // }
