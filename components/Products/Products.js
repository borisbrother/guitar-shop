import { CATALOG } from '../../constants/catalog';

export class Products {
  render() {
    CATALOG.forEach((element) => {
      console.log(element);
    });
  }
}
