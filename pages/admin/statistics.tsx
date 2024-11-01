import Sidebar from '../../components/admin-management/Sidebar';
import Header from '../../components/admin-management/Header';
import DashboardChart from '../../components/admin-management/DashboardChart';
import BudgetReport from '../../components/admin-management/BudgetReport';

const StatisticsPage = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-main-content">
        <Header />
        <div className="admin-dashboard-content">
          <div className="chart-wrapper">
            <DashboardChart />
          </div>
          <div className="chart-wrapper" >
            <BudgetReport />
          </div>
        </div>
      </div>
    </div>
  );
};


export default StatisticsPage;
