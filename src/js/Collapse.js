export default class Collapse {
  constructor() {
    this.button = null;
    this.hiddenText = null;
    this.isOpen = false;
  }

  init() {
    this.button = document.querySelector('.collapse__button');
    this.hiddenText = document.querySelector('.text-hidden');
    this.initListener();
  }

  initListener() {
    this.button.addEventListener('click', () => {
      this.buttonClick();
    });
  }

  buttonClick() {
    if (this.isOpen) {
      this.hideText();
    } else {
      this.openText();
    }
    this.isOpen = !this.isOpen;
  }

  openText() {
    this.hiddenText.style.height = `${this.hiddenText.scrollHeight}px`;
    this.hiddenText.style.marginBottom = '20px';
    this.hiddenText.style.opacity = 1;
  }

  hideText() {
    this.hiddenText.style.height = 0;
    this.hiddenText.style.marginBottom = 0;
    this.hiddenText.style.opacity = 0;
  }
}
