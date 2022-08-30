import { CATALOG } from "../../constants/catalog";

import { ROOT } from "../../constants/root";

class Products {
  constructor(el) {
    this.el = el;
  }
  render() {
    let catalogContainer = document.createElement("ul");
    catalogContainer.classList.add("products__container");
    let htmlCatalog = "";
    CATALOG.forEach((element) => {
      htmlCatalog += Products.renderElementLi(element);
    });
    catalogContainer.insertAdjacentHTML("afterbegin", htmlCatalog);
    this.el.appendChild(catalogContainer);
  }
  static renderElementLi({ id, productName, price, img }) {
    return `<li class="products__item">
        <div class="products__inner">
          <span class="products__title">${productName}</span>
          <img src="${img}" alt="${productName}" class="products__img">
          <div class="products__footer">          
            <div class="products__price">
            <img src="../images/plugin.png" class="products__icon">
            ${price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUR",
            })}
            </div>
            <button>
              <img src="../images/cart4.svg"> В корзину
            </button>
          </div>
        <div>
      </li>`;
  }
}

export const products = new Products(ROOT.products);
