import { CATALOG } from '../../constants/catalog';

export class Products {
  constructor(el) {
    this.el = el;
  }
  render() {
    let catalogContainer = document.createElement('ul');
    let htmlCatalog = '';
    CATALOG.forEach((element) => {
      htmlCatalog += this.renderElementLi(element);
    });
    catalogContainer.insertAdjacentHTML('afterbegin', htmlCatalog);
    this.el.appendChild(catalogContainer);
  }
  renderElementLi({ id, productName, price, img }) {
    return `<li>
        <span>${productName}</span>
        <img src="${img}" alt="${productName}">
        <span>${price}</span>
        <button>Добавить в корзину</button>
      </li>`;
  }
}
