import { catalog } from '../../constants/catalog';

import { ROOT } from '../../constants/root';
import { localStorageUtil } from '../../utils/localStorgeUtil';
import { header } from '../Header/Header';

class Products {
  constructor(el) {
    this.el = el;
    this.productList = {};
    this.indexID();
  }
  async indexID() {
    let cat = await catalog.getCatalog();
    this.productList = cat.reduce((acc, product) => {
      acc[[product.id]] = product;
      return acc;
    }, {});
  }
  static labels() {
    return {
      activeClassLabel: 'active',
      addLabel: 'Добавить в корзину',
      removeLabel: 'Удалить из корзины',
    };
  }
  async render() {
    this.el.innerHTML = '';
    const productStore = localStorageUtil.getProducts();
    const catalogContainer = document.createElement('ul');
    catalogContainer.classList.add('products__container');
    let cat = await catalog.getCatalog();
    cat.forEach((element) => {
      const options = {
        activeClass: '',
        activeText: '',
      };

      if (element.id in productStore) {
        options.activeClass = Products.labels().activeClassLabel;
        options.activeText = Products.labels().removeLabel;
      } else {
        options.activeClass = '';
        options.activeText = Products.labels().addLabel;
      }
      catalogContainer.appendChild(Products.renderElementLi(element, options));
    });
    // catalogContainer.insertAdjacentHTML('afterbegin', htmlCatalog);
    this.el.appendChild(catalogContainer);
  }
  getProduct(id) {
    return this.productList[id];
  }

  static renderElementLi({ id, productName, price, img }, options) {
    const liElem = document.createElement('li');
    liElem.classList.add('products__item');
    liElem.innerHTML = `<div class="products__inner">
      <span class="products__title">${productName}</span>
      <img src="${img}" alt="${productName}" class="products__img">
      <div class="products__footer">          
        <div class="products__price">
        <img src="images/plugin.png" class="products__icon">
        ${price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUR',
        })}
        </div>
        <button class="${options.activeClass}">${options.activeText}</button>
      </div>
    <div>`;
    liElem.querySelector('button').addEventListener('click', (e) => {
      let { status } = localStorageUtil.switchProduct(id);
      if (status) {
        e.target.classList.add(Products.labels().activeClassLabel);
        e.target.innerHTML = `${Products.labels().removeLabel}`;
      } else {
        e.target.classList.remove(Products.labels().activeClassLabel);
        e.target.innerHTML = `${Products.labels().addLabel}`;
      }
      header.render();
    });
    return liElem;
  }
}

export const products = new Products(ROOT.products);
