const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
// const apkDownloadBtn = document.querySelector(".apk")

// function downloadApk() {
//   const serverUrl = 'http://localhost:3000/download';

//   fetch(serverUrl, {
//     method: 'GET',
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.blob();
//   })
//   .then(blob => {
//     const file = new File([blob], 'application.apk', { type: 'application/vnd.android.package-archive' });

//     const downloadLink = document.createElement('a');
//     downloadLink.href = URL.createObjectURL(file);
//     downloadLink.download = 'application.apk';

//     document.body.appendChild(downloadLink);
//     downloadLink.click();

//     document.body.removeChild(downloadLink);
//   })
//   .catch(error => {
//     console.error('Error during fetch operation:', error);
//   });
// }
// apkDownloadBtn.addEventListener("click", downloadApk)
