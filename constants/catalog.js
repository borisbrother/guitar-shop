import { ErrorFetch } from '../components/Error/Error';

class Catalog {
  async getCatalog() {
    // let path = "http://myjson.dit.upm.es/api/bins/9g4s";
    let path = 'server/catalog.json';
    let response = await fetch(path);
    // let response = await fetch('server/catalog.json');
    // if (response.status !== 200)

    if (!response.ok)
      throw new ErrorFetch(`Ошибка подключения`, 'Попробуйте зайти позже');
    try {
      let jsonData = await response.json();
      return jsonData;
    } catch (err) {
      throw new ErrorFetch(
        `Некорректный ответ от сервера`,
        `Обратитесь к администратору сайта`
      );
    }
  }
}

export let catalog = new Catalog();

// export const CATALOG = [
//   {
//     id: 'el1',
//     productName: 'Cort G110-OPBK Электрогитара.',
//     img: 'https://i.ibb.co/6mw1JYB/guitar01.webp',
//     price: 18250,
//   },
//   {
//     id: 'el2',
//     productName:
//       'Fender Squier Affinity 2021 Stratocaster MN Olympic White Электрогитара.',
//     img: 'https://i.ibb.co/wpgTLCL/guitar02.webp',
//     price: 45000,
//   },
//   {
//     id: 'el3',
//     productName:
//       'Ibanez Q52-LBM Безголовая электрогитара, цвет - насыщенный синий.',
//     img: 'https://i.ibb.co/hBBdJFY/guitar03.webp',
//     price: 108000,
//   },
//   {
//     id: 'el4',
//     productName: 'Homage HEG320SB Электрогитара.',
//     img: 'https://i.ibb.co/wsp99zL/guitar04.webp',
//     price: 9960.5,
//   },
//   {
//     id: 'el5',
//     productName:
//       'Fender Squier Contemporary Stratocaster Special HT Pearl White Электрогитара.',
//     img: 'https://i.ibb.co/b70Q58j/guitar05.webp',
//     price: 61000,
//   },
//   {
//     id: 'el6',
//     productName: 'FGN J-Standard Iliad JIL2ASHM OWB Электрогитара.',
//     img: 'https://i.ibb.co/LdXfKJV/guitar06.webp',
//     price: 61000,
//   },
//   {
//     id: 'el7',
//     productName: 'Cort G110-OPBK Электрогитара.',
//     img: 'https://i.ibb.co/6mw1JYB/guitar01.webp',
//     price: 18250,
//   },
//   {
//     id: 'el8',
//     productName:
//       'Fender Squier Affinity 2021 Stratocaster MN Olympic White Электрогитара.',
//     img: 'https://i.ibb.co/wpgTLCL/guitar02.webp',
//     price: 45000,
//   },
//   {
//     id: 'el9',
//     productName:
//       'Ibanez Q52-LBM Безголовая электрогитара, цвет - насыщенный синий.',
//     img: 'https://i.ibb.co/hBBdJFY/guitar03.webp',
//     price: 108000,
//   },
//   {
//     id: 'el10',
//     productName: 'Homage HEG320SB Электрогитара.',
//     img: 'https://i.ibb.co/wsp99zL/guitar04.webp',
//     price: 9960,
//   },
//   {
//     id: 'el11',
//     productName:
//       'Fender Squier Contemporary Stratocaster Special HT Pearl White Электрогитара.',
//     img: 'https://i.ibb.co/b70Q58j/guitar05.webp',
//     price: 61000,
//   },
//   {
//     id: 'el12',
//     productName: 'FGN J-Standard Iliad JIL2ASHM OWB Электрогитара.',
//     img: 'https://i.ibb.co/LdXfKJV/guitar06.webp',
//     price: 61000,
//   },
// ];
