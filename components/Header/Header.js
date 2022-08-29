import { ROOT } from '../../constants/root';
import { localStorageUtil } from '../../utils/localStorgeUtil';

class Header {
  constructor(el) {
    this.el = el;
  }
  render() {
    const html = `<div class="header__container">        
        <a href="#!" class="header__cart">
            <img src="images/basket.svg" class="header__icon">
            <span class="header__counter">${localStorageUtil.getQty()}</span>
        </a>        
    </div>`;
    this.el.innerHTML = html;
  }
  renderQty() {}
}

export const header = new Header(ROOT.header);
