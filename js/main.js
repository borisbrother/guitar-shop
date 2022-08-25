'use strict';
import { CATALOG } from '../constants/catalog';
import { ROOT } from '../constants/root';
import { localStorageUtil } from '../utils/localStorgeUtil';

import '../components/Header/Header';
import { products } from '../components/Products/Products';
import '../components/Shopping/Shopping';

// Main code

// const products = new Products(ROOT.products);
products.render();
// console.log(localStorageUtil.switchProduct('el12'));
// localStorageUtil.deleteProduct('el3');
// localStorageUtil.deleteProduct('el2');
// console.log(localStorageUtil.getProducts());
