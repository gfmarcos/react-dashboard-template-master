import { creditCards } from './creditCards';

const url = './assets/';

const logosNames = [
  {
    logo: `${url}visa.png`,
    name: 'Visa',
  },
  {
    logo: `${url}mastercard.png`,
    name: 'Mastercard',
  },
];

const getLogo = (type) => logosNames[parseInt(type) - 1].logo;
const getName = (type) => logosNames[parseInt(type) - 1].name;

export const creditCardsMapper = () =>
  creditCards.map((creditCard) => ({
    ...creditCard,
    number: `****${creditCard.number.slice(creditCard.number.length - 4, creditCard.number.length)}`,
    name: getName(creditCard.type),
    logo: getLogo(creditCard.type),
  }));
