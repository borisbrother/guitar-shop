import { CATALOG } from '../../constants/catalog';

export class Products {
  constructor(el) {
    this.el = el;
  }
  render() {
    let catalogContainer = document.createElement('ul');
    catalogContainer.classList.add('products__container');
    let htmlCatalog = '';
    CATALOG.forEach((element) => {
      htmlCatalog += this.renderElementLi(element);
    });
    catalogContainer.insertAdjacentHTML('afterbegin', htmlCatalog);
    this.el.appendChild(catalogContainer);
  }
  renderElementLi({ id, productName, price, img }) {
    return `<li class="products__item">
        <div class="products__inner">
          <span class="products__title">${productName}</span>
          <img src="${img}" alt="${productName}" class="products__img">
          <div class="products__footer">          
            <span class="products__price">${this.formatPrice(price)}</span>
            <button>Добавить в корзину</button>
          </div>
        <div>
      </li>`;
  }
  formatPrice(number) {
    return (
      number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ') + ' руб.'
    );
  }
}
