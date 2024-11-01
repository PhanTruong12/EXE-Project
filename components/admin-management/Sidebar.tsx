import { AiOutlineDashboard, AiOutlineCheck } from 'react-icons/ai';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h2 className="admin-sidebar-logo">Admin Page</h2>
      <nav>
        <ul className="admin-sidebar-nav">
          <li className="admin-sidebar-nav-item">
            <Link href="/admin/statistics" passHref>
              <div className="link-item">
                <AiOutlineDashboard className="sidebar-icon" />
                <span>Thống kê</span>
              </div>
            </Link>
          </li>
          <li className="admin-sidebar-nav-item">
            <Link href="/admin/approval" passHref>
              <div className="link-item">
                <AiOutlineCheck className="sidebar-icon" />
                <span>Duyệt tài khoản</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
