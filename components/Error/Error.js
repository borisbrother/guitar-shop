import { ROOT } from '../../constants/root';

export class ErrorFetch extends Error {
  constructor(message) {
    super(message);
    this.name = 'Fetch Error';
    this.el = ROOT.error;
  }
  render() {
    // console.log(this.message);
    const html = `<div class="error__container">
    <div class="error__icon"><img src="images/error-guitar.png"/></div>
    <div class="error__caption">
    <div class="error__message">
    ${this.message}</div>
    <div class="error__tip">Попробуйте зайти позже</div></div><div>
    `;

    this.el.innerHTML = html;
    this.el.style.display = 'flex';
  }
}
