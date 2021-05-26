import { creditCards } from '../data/data';

export const getCreditCards = () => {
  return creditCards.find((creditCard) => console.log(creditCard));
};
