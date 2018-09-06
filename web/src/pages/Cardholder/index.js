import CardholderList from './CardholderList';
import CardholderCreate from './CardholderCreate';
import CardholderEdit from './CardholderEdit';
import CardholderShow from './CardholderShow';
import CreditCard from '@material-ui/icons/CreditCard';

export default {
  name: 'cardholders',
  list: CardholderList,
  create: CardholderCreate,
  edit: CardholderEdit,
  show: CardholderShow,
  icon: CreditCard
}