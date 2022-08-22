'use strict';
import { CATALOG } from '../constants/catalog';
import '../constants/root';
import '../utils/localStorgeUtil';

import '../components/Header/Header';
import { Products } from '../components/Products/Products';
import '../components/Shopping/Shopping';

// Main code

new Products().render();
