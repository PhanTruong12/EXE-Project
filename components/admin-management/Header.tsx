import React from 'react';

const Header = () => {
  return (
    <header className="admin-header">
      <div className="admin-search-container">
        <input type="text" placeholder="Search" className="admin-search-bar" />
      </div>
      <div className="admin-user-profile">
        {/* <img
          src="/path-to-avatar/avatar.png" // Thay thế bằng đường dẫn thực tế đến ảnh đại diện của user
          alt="User Avatar"
          className="user-avatar"
        /> */}
        <i className="icon-avatar"></i>
        <span>System Admin</span>
      </div>
    </header>
  );
};

export default Header;
