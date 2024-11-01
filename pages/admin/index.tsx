import Sidebar from '../../components/admin-management/Sidebar';
import Header from '../../components/admin-management/Header';
import StatisticsPage from '../admin/statistics';


const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard">
          <StatisticsPage />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
