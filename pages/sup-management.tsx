import ListSup from '../components/sup-management/ListSup';
import AddSup from '../components/sup-management/AddSup';

const SupManagement = () => {
  return (
    <div>
      <h1>Quản lý SUP của bạn</h1>
      <AddSup />
      <ListSup />
    </div>
  );
};

export default SupManagement;
