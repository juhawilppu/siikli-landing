// Opens screenshots in a dialog. Without JavaScript the links open the image.
const dialog = document.querySelector('.lightbox');
const big = dialog.querySelector('img');
document.querySelectorAll('a[data-lightbox]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    big.src = link.href;
    big.alt = link.querySelector('img').alt;
    dialog.showModal();
  });
});
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
