import { AiOutlineDashboard, AiOutlineCheck} from 'react-icons/ai';
import {GoPackageDependents } from 'react-icons/go';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="admin-sidebar">
      <h2 className="admin-sidebar-logo">Admin</h2>
      <nav>
        <ul className="admin-sidebar-nav">
          <li className="admin-sidebar-nav-item">
            <Link href="/admin/statistics" passHref>
              <div className="link-item">
                <AiOutlineDashboard className="admin-sidebar-icon" />
                <span>Statistics</span>
              </div>
            </Link>
          </li>
          <li className="admin-sidebar-nav-item">
            <Link href="/admin/approval" passHref>
              <div className="link-item">
                <AiOutlineCheck className="admin-sidebar-icon" />
                <span>Approval</span>
              </div>
            </Link>
          </li>
          <li className="admin-sidebar-nav-item">
            <Link href="/admin/approveProduct" passHref>
              <div className="link-item">
                <GoPackageDependents className="admin-sidebar-icon" />
                <span>Approve Product</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

