import { ROOT } from '../../constants/root';

class Spinner {
  constructor(el) {
    this.el = el;
  }
  render() {
    const html = `<div class="spinner___icon"><img src="images/loader.svg"/></div>
    `;

    this.el.innerHTML = html;
  }
  show() {
    this.el.classList.add('visible');
  }
  hide() {
    this.el.classList.remove('visible');
  }
}

export const spinner = new Spinner(ROOT.spinner);
