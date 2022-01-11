export default class Liker {
  constructor() {
    this.button = null;
  }

  init() {
    this.button = document.querySelector('.liker__button');
    this.button.addEventListener('click', () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      const randomInt = Math.floor(Math.random() * 4);
      heart.style.animationName = `up-${randomInt}`;
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
      this.button.appendChild(heart);
    });
  }
}
