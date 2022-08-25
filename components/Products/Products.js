import { CATALOG } from '../../constants/catalog';

import { ROOT } from '../../constants/root';
import { localStorageUtil } from '../../utils/localStorgeUtil';

class Products {
  constructor(el) {
    this.el = el;
    this.classNameActive = 'active';
    this.labelAdd = 'Удалить из корзины';
    this.labelDelete = 'Добавить в корзину';
  }
  render() {
    const productStore = localStorageUtil.getProducts();
    let catalogContainer = document.createElement('ul');
    catalogContainer.classList.add('products__container');
    let htmlCatalog = '';
    CATALOG.forEach((element) => {
      const options = {
        activeClass: '',
        activeText: '',
      };

      if (element.id in productStore) {
        options.activeClass = this.classNameActive;
        options.activeText = this.labelAdd;
      } else {
        options.activeClass = '';
        options.activeText = this.labelDelete;
      }
      htmlCatalog += Products.renderElementLi(element, options);
    });
    catalogContainer.insertAdjacentHTML('afterbegin', htmlCatalog);
    this.el.appendChild(catalogContainer);
  }

  static renderElementLi({ id, productName, price, img }, options) {
    return `<li class="products__item">
        <div class="products__inner">
          <span class="products__title">${productName}</span>
          <img src="${img}" alt="${productName}" class="products__img">
          <div class="products__footer">          
            <div class="products__price">
            <img src="../images/plugin.png" class="products__icon">
            ${price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUR',
            })}
            </div>
            <button class="${options.activeClass}">
              <img src="../images/cart4.svg"> ${options.activeText}
            </button>
          </div>
        <div>
      </li>`;
  }
}

export const products = new Products(ROOT.products);
