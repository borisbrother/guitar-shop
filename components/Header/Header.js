import { ROOT } from '../../constants/root';
import { localStorageUtil } from '../../utils/localStorgeUtil';
import { shopping } from '../Shopping/Shopping';
import { disableBodyScroll } from 'body-scroll-lock';
class Header {
  constructor(el) {
    this.el = el;
  }
  render() {
    this.el.innerHTML = '';
    const html = `<div class="header__container">        
        <a href="#!" class="header__cart">
            <img src="images/basket.svg" class="header__icon">
            <span class="header__counter">${localStorageUtil.getQty()}</span>
        </a>        
    </div>`;
    this.el.innerHTML = html;
    this.el.querySelector('.header__cart').addEventListener('click', (e) => {
      e.preventDefault();
      shopping.el.classList.add('active');
      document.body.classList.add('lock');
      disableBodyScroll(document.body);
      shopping.render();
    });
  }
  renderQty() {}
}

export const header = new Header(ROOT.header);
