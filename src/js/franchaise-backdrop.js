(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-franch-backdrop--open'),
    closeModalBtn: document.querySelector('.js-franch-backdrop--close'),
    modal: document.querySelector('.js-franch-backdrop'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("franch-modal-open")
    refs.modal.classList.toggle('js-franch-backdrop__is-hidden');
  }
})();

