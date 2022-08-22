'use strict';
import { CATALOG } from '../constants/catalog';
import { ROOT } from '../constants/root';
import '../utils/localStorgeUtil';

import '../components/Header/Header';
import { Products } from '../components/Products/Products';
import '../components/Shopping/Shopping';

// Main code

const products = new Products(ROOT.products);
products.render();
