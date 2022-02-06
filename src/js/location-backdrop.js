(() => {
const refs = {
    openModalBtn: document.querySelector('.js-location-backdrop--open-one'),
    closeModalBtn: document.querySelector('.js-location-backdrop--close'),
    modal: document.querySelector('.js-location-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("location-modal-open")
    refs.modal.classList.toggle('js-location-backdrop__is-hidden');
  }
})();