'use strict';
import { CATALOG } from '../constants/catalog';
import { ROOT } from '../constants/root';
import { localStorageUtil } from '../utils/localStorgeUtil';

import { header } from '../components/Header/Header';
import { products } from '../components/Products/Products';
import '../components/Shopping/Shopping';

// Main code

products.render();
header.render();
console.log(products.getProduct('el12'));
