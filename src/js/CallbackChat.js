export default class CallbackChat {
  constructor() {
    this.form = null;
    this.closeButton = null;
    this.openButton = null;
    this.popupEl = null;
  }

  init() {
    this.form = document.querySelector('.popup__form');
    this.closeButton = document.querySelector('.popup__closeButton');
    this.openButton = document.querySelector('.callbackChat__openButton');
    this.popupEl = document.querySelector('.callbackChat__popup');
    this.initListeners();
  }

  initListeners() {
    this.openButton.addEventListener('click', () => {
      this.openPopup();
    });

    this.closeButton.addEventListener('click', () => {
      this.closePopup();
    });

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.closePopup();
      this.form.reset();
    });
  }

  openPopup() {
    this.popupEl.classList.remove('callbackChat-hidden_transform');
    this.openButton.classList.add('callbackChat-hidden_transform');
  }

  closePopup() {
    this.popupEl.classList.add('callbackChat-hidden_transform');
    this.openButton.classList.remove('callbackChat-hidden_transform');
  }
}
