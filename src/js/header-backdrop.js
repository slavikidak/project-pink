  (() => {
const refs = {
    openModalBtnFirst: document.querySelector('.js-header-backdrop--open-one'),
    openModalBtnSecond: document.querySelector('.js-header-backdrop--open-two'),
    closeModalBtn: document.querySelector('.js-header-backdrop--close'),
    modal: document.querySelector('.js-header-backdrop'),
  };

  refs.openModalBtnFirst.addEventListener('click', toggleModal);
  refs.openModalBtnSecond.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("header-modal-open")
    refs.modal.classList.toggle('js-header-backdrop__is-hidden');
  }
})();