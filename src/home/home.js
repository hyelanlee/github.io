import img from './imgs.js'
import { addImg, onNavClick } from './functions.js'

let initialImageCount = 5
let currentImageCount = initialImageCount;
const increaseNumber = 3;
onNavClick();

// const navIcon = document.querySelector('.navbar-toggler-icon')
// const navLinks = document.querySelectorAll('.vav-link');
// navLinks.forEach((navLink) => {
//   navLink.addEventListener("click", () => {
//     if (navIcon) {
//       navIcon.click();
//     }
//   })
// })

let imageCount = 5;
window.onscroll = function() {
  console.log(window.innerHeight , window.scrollY,document.body.offsetHeight)
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
const imgElementCount = document.querySelector('.container').querySelectorAll('img').length;
console.log('condition true')

    // setTimeout(function() {
      img.forEach((img, i) => {
        if ((i >= currentImageCount ) && ( i < currentImageCount + increaseNumber )) {
          // if ( imgElementCount <= i && i < (imageCount + increaseNumber) ) {
          addImg(img, i);
          console.log('hit', i)
        }
      })
      // imageCount += increaseNumber;
      currentImageCount += increaseNumber
    // }, 2300)
  }
  // return;
}
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// function scrollToTopOfPage() {
//   const paragraph = document.querySelector('p.lead');
//   paragraph.scrollIntoView({ behavior: 'smooth', block: 'start' });
// }

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// 토스트 버튼을 클릭했을 때 토스트를 표시하는 이벤트 핸들러
// document.getElementById('liveToastBtn').addEventListener('click', function () {
//   var toast = new bootstrap.Toast(document.getElementById('liveToast'));
//   toast.show();
// });
// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     const modalTitle = exampleModal.querySelector('.modal-title')
//     const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }

img.forEach((img, i) => {
  if (i < initialImageCount ) {
    addImg(img, i)
  }
})


// var count = 2;
//   window.onscroll = function(e) {
//     console.log(window.innerHeight , window.scrollY,document.body.offsetHeight)
//     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
//       setTimeout(function(){
//         var addContent = document.createElement("div");
//         // console.dir(addContent)
//         addContent.classList.add("box")
//         addContent.innerHTML = `<p>${++count}번째 블록</p>`
//         document.querySelector('section').appendChild(addContent);
//       }, 1300)  
//     }
//   }