import { ROOT } from "../../constants/root";

export class ErrorFetch extends Error {
  constructor(message, tip = "") {
    super(message);
    this.name = "Fetch Error";
    this.el = ROOT.error;
    this.tip = tip;
  }
  render() {
    console.log(this.tip);
    // console.log(this.message);
    const html = `<div class="error__container">
    <div class="error__icon"><img src="images/error-guitar.png"/></div>
    <div class="error__caption">
    <div class="error__message">
    ${this.message}</div>
    <div class="error__tip">${this.tip}</div></div><div>
    `;

    this.el.innerHTML = html;
    this.el.style.display = "flex";
  }
}
