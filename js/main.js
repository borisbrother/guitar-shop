'use strict';
// import { catalog } from '../constants/catalog';
// import { ROOT } from '../constants/root';
// import { localStorageUtil } from '../utils/localStorgeUtil';

import { header } from '../components/Header/Header';
import { products } from '../components/Products/Products';
import { shopping } from '../components/Shopping/Shopping';

// Main code

products.render();
header.render();
shopping.render();

// catalog.getCatalog().then((data) => console.log(data));
