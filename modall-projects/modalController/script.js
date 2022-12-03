const modalController = ({ modal, buttonOpen, buttonClose, activeClass }) => {
  const buttons = document.querySelectorAll(buttonOpen);
  const modalElem = document.querySelector(modal);

  const openModal = () => {
    modalElem.classList.add(activeClass);
  };

  const closeModal = (event) => {
    const target = event.target;

    if (target === modalElem || target.closest(buttonClose)) {
      modalElem.classList.remove(activeClass);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.modal-offical',
  buttonOpen: '.screen__button-modal1',
  buttonClose: '.modal__close',
  activeClass: 'active',
});

modalController({
  modal: '.modal-offical',
  buttonOpen: '.screen__button-modal2',
  buttonClose: '.modal__close',
  activeClass: 'active',
});

modalController({
  modal: '.modal-dog',
  buttonOpen: '.screen__button-modal3',
  buttonClose: '.modal__close',
  activeClass: 'active',
});
