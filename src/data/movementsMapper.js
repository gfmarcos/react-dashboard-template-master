import { movements } from './movements'
import { accountList } from './accountList';
import { creditCards } from './creditCards';

const getAccount = (accountType) => accountList.find((account) => account.type === accountType);
const getCreditCard = (creditCardType) => creditCards.find((creditCard) => creditCard.type === creditCardType);

export const movementsMapper = () => 
    movements.map((movement) =>({
        ...movement,
        iban: getAccount(movement.accountType).iban,
        creditCard: `****${getCreditCard(movement.creditCardType).number.slice(getCreditCard(movement.creditCardType).number.length - 4, getCreditCard(movement.creditCardType).number.length)}`,
    }));
