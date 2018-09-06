import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import EmployeeShow from './EmployeeShow';
import PermIdentity from '@material-ui/icons/PermIdentity';

export default {
  name: 'employees',
  list: EmployeeList,
  create: EmployeeCreate,
  edit: EmployeeEdit,
  show: EmployeeShow,
  icon: PermIdentity
}