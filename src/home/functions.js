export function addImg(img, i) {
  const modalBody = document.querySelector('.modal-body');
  const imgElement  = document.createElement('img');
    imgElement.src = img.url;
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.style.objectFit = 'cover';
  
    if (img.url.includes('v')) {
      imgElement.style.gridRow = 'span 2';
    } else if (img.url.includes('b')) {
      imgElement.style.gridRow = 'span 2';
      imgElement.style.gridColumn = 'span 2';
    } else if (img.url.includes('h')) {
      imgElement.style.gridColumn = 'span 2';
    }  
    imgElement.addEventListener("click", () => {
      const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
      const modalTitle = document.getElementById("exampleModalLabel")
      modalTitle.innerHTML = img.desc;
      const modalImg = document.createElement('img');
      modalImg.src = img.url;
      modalImg.style.height = '100px';
      modalImg.style.width = '75px';
      modalImg.style.borderRadius = '5px';
      modalBody.innerHTML = '';
      modalBody.appendChild(modalImg);
      modal.show();
    })
    document.querySelector('.container').appendChild(imgElement);
}

const navIcon = document.querySelector('.navbar-toggler-icon')
const navLinks = document.querySelectorAll('.vav-link');
export function onNavClick() {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
      if (navIcon) {
        navIcon.click();
      }
    })
  })
}