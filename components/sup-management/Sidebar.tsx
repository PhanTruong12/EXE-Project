import React from 'react';
import Link from 'next/link';
import { FaChartLine, FaBoxOpen } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link href="/analytics" legacyBehavior>
        <a className="sidebar-icon">
          <FaChartLine />
          
        </a>
      </Link>
      <Link href="/sup-management" legacyBehavior>
        <a className="sidebar-icon">
          <FaBoxOpen />
          
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;