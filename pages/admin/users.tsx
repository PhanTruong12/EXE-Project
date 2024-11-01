import Sidebar from '../../components/admin-management/Sidebar';
import { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Người thuê A', role: 'User' },
    { id: 2, name: 'Người cho thuê B', role: 'Owner', status: 'Pending' },
    // Thêm dữ liệu người dùng giả cho minh họa
  ]);

  const approveUser = (id: number) => {
    // Logic để duyệt tài khoản, ví dụ: cập nhật state
    setUsers(users.map(user => user.id === id ? { ...user, status: 'Approved' } : user));
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <main className="content">
        <h1>Quản lý người dùng</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.role} - {user.status}
              {user.status === 'Pending' && (
                <button onClick={() => approveUser(user.id)}>Duyệt</button>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default UserManagement;
