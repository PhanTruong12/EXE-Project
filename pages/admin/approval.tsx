import Sidebar from '../../components/admin-management/Sidebar';
import Header from '../../components/admin-management/Header';
import { useState } from 'react';


const ApproveAccountsPage = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'User A',
      status: 'Pending',
      email: 'usera@example.com',
      bankNumber: '123456789',
      bankName: 'Bank A',
    },
    {
      id: 2,
      name: 'User B',
      status: 'Pending',
      email: 'userb@example.com',
      bankNumber: '987654321',
      bankName: 'Bank B',
    },
  ]);

  const approveAccount = (id:number) => {
    setAccounts(accounts.map(account => 
      account.id === id ? { ...account, status: 'Approved' } : account
    ));
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
              {accounts.map(account => (
                <tr key={account.id}>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>{account.bankNumber}</td>
                  <td>{account.bankName}</td>
                  <td className={`status ${account.status.toLowerCase()}`}>
                    {account.status}
                  </td>
                  <td>
                    {account.status === 'Pending' && (
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
