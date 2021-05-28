import { creditCards } from './creditCards';
import { accountList } from './accountList';

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
const getAccount = (accountType) => accountList.find((account) => account.type === accountType);

export const creditCardsMapper = () =>
  creditCards.map((creditCard) => ({
    ...creditCard,
    numberMask: `****${creditCard.number.slice(creditCard.number.length - 4, creditCard.number.length)}`,
    name: getName(creditCard.type),
    logo: getLogo(creditCard.type),
    balance: getAccount(creditCard.accountType).balance,
  }));
