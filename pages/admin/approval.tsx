import Sidebar from '../../components/admin-management/Sidebar';
import Header from '../../components/admin-management/Header';
import { useState } from 'react';
import { getData, postData } from 'utils/services';
import useSwr from 'swr';
import { ApplicationUser } from 'types';


const ApproveAccountsPage = () => {
  const fetcher = () => getData('/auth/GetAllRentalProviders');
  const { data, error } = useSwr<ApplicationUser[]>('/auth/GetAllRentalProviders', fetcher);
  const [applicationUsers, setApplicationUsers] = useState<ApplicationUser[]>([]);
  
  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  if (data && applicationUsers.length === 0) {
    setApplicationUsers(data);
  }

  const approveAccount = async (id: string) => {
    // Cập nhật trạng thái cục bộ
    setApplicationUsers((prevUsers) =>
      prevUsers.map((account) =>
        account.id === id ? { ...account, status: 1 } : account
      )
    );

    // Gửi yêu cầu cập nhật lên server
    await postData('/auth/ActiveRentalProviderById', id);
  };
  
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-main-content">
        <Header />
        <div className="approve-accounts">
          <h1>Duyệt Tài Khoản</h1>
          <table className="account-table">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Email</th>
                <th>Số Tài Khoản Ngân Hàng</th>
                <th>Ngân Hàng</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {applicationUsers.map(account => (
                <tr key={account.id}>
                  <td>{account.firstName} {account.lastName}</td>
                  <td>{account.email}</td>
                  <td>{account.bankAccountNumber}</td>
                  <td>{account.bank}</td>
                  <td className={`status ${account.status === 0 ? 'pending' : 'active'}`}>
                    {account.status === 0 ? 'Pending' : 'Active'}
                  </td>
                  <td>
                    {account.status === 0 && (
                      <button onClick={() => approveAccount(account.id)} className="approve-button">
                        Duyệt
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveAccountsPage;
