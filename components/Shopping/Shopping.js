import { ROOT } from '../../constants/root';
import { localStorageUtil } from '../../utils/localStorgeUtil';
import { header } from '../Header/Header';
import { products } from '../Products/Products';
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

class Shopping {
  constructor(el) {
    this.el = el;
    this.el.addEventListener('click', (e) => {
      this.el.classList.remove('active');
      document.body.classList.remove('lock');
      enableBodyScroll(document.body);
    });
  }

  render() {
    this.el.innerHTML = '';
    const shoppingContainer = document.createElement('ul');
    shoppingContainer.classList.add('shopping__container');
    shoppingContainer.addEventListener('click', (e) => e.stopPropagation());
    let counter = 1;
    let total = 0;

    const liHeader = document.createElement('li');
    liHeader.classList.add('shopping__element', 'shopping__element_header');
    liHeader.innerHTML = `<span class="shopping__counter">№ п/п</span>
    <span class="shopping__productName">Наименование продукта</span>
    <span class="shopping__qty">Коли&shy;чество</span>
    <span class="shopping__price">Цена</span>
    <span class="shopping__button"></span>`;
    shoppingContainer.appendChild(liHeader);
    Object.keys(localStorageUtil.values).forEach((key) => {
      const product = products.getProduct(key);
      if (!product) return;
      const qty = localStorageUtil.values[key];
      shoppingContainer.appendChild(Shopping.renderLi(counter, product, qty));
      counter++;
      total += product.price;
    });
    const liFooter = document.createElement('li');
    liFooter.classList.add('shopping__element', 'shopping__element_footer');
    liFooter.innerHTML = `<span class="shopping__caption">Всего:</span>
    <span class="shopping__total">${total.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUR',
    })}<span>`;
    shoppingContainer.appendChild(liFooter);
    this.el.appendChild(shoppingContainer);
  }
  static renderLi(counter, { id, productName, price }, qty) {
    const li = document.createElement('li');
    li.classList.add('shopping__element');
    li.innerHTML = `<span class="shopping__counter">${counter}</span>
    <span class="shopping__productName">${productName}</span>
    <span class="shopping__qty">${qty}</span>
    <span class="shopping__price">${price.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUR',
    })}</span>
    <span class="shopping__button"><button><img src="./images/cart-remove.svg"/></button></span>`;
    li.querySelector('button').addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      localStorageUtil.deleteProduct(id);
      console.log(products);
      products.render();
      header.render();
      li.style.opacity = 0;
      setTimeout(() => {
        shopping.render();
      }, 200);
      //   li.parentNode.removeChild(li);
    });
    return li;
  }
}

export const shopping = new Shopping(ROOT.shopping);
