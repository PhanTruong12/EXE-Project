// pages/sup-management.tsx
import React, { useState } from 'react';
import Sidebar from '../components/sup-management/Sidebar';
import ActionMenu from '../components/sup-management/ActionMenu';
import AddSupModal from '../components/sup-management/AddSupModal'; // Import the AddSupModal component

const SupManagement = () => {
  // Fake data for SUPs
  const supList = [
    {
      id: 1,
      name: 'SUP 1',
      status: 'Active',
      price: '$999.00',
      totalSales: 150,
      createdAt: '6/23/2024',
      hireDate: '6/24/2024',
      hireTime: '08:00 - 12:00',
    },
    {
      id: 2,
      name: 'SUP 2',
      status: 'Available',
      price: '$500.00',
      totalSales: 50,
      createdAt: '6/10/2024',
      hireDate: null,
      hireTime: null,
    },
  ];

  const [showAddModal, setShowAddModal] = useState(false); // Control Add SUP modal visibility

  const handleAddSup = (supData: { name: string; price: string; description: string; image: File | null }) => {
    console.log('New SUP Data:', supData);
    // Logic to save the SUP data can be added here
    setShowAddModal(false); // Close modal after saving
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="main-content">
        <div className="header-container">
          <div className="page-info">
            <div className="page-breadcrumbs">
              <span>Dashboard</span> <span className="breadcrumb-separator">{'>'}</span>
              <span>Products</span> <span className="breadcrumb-separator">{'>'}</span>
              <span className="breadcrumb-current">All SUPs</span>
            </div>
            <h1 className="page-title">SUPs</h1>
            <p className="page-subtitle">Manage your SUPs and view their status.</p>
          </div>
          <div className="action-container">
            <div className="search-container">
              <input type="text" className="search-input" placeholder="Search..." />
              <span className="search-icon">🔍</span>
            </div>
            <img src="/path/to/avatar.png" alt="User Avatar" className="user-avatar" />
          </div>
        </div>

        <div className="toolbar">
          <div className="filters">
            <button className="filter active">All</button>
            <button className="filter">Active</button>
            <button className="filter">Draft</button>
            <button className="filter">Archived</button>
          </div>
          <div className="actions">
            <input type="text" placeholder="Search..." className="search" />
            <button className="export-btn">Export</button>
            <button className="add-sup-btn" onClick={() => setShowAddModal(true)}>+ Add SUP</button>
          </div>
        </div>

        <div className="table-container">
          <table className="sup-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Price</th>
                <th>Total Sales</th>
                <th>Created At</th>
                <th>Hire Date</th>
                <th>Hire Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {supList.map((sup) => (
                <tr key={sup.id}>
                  <td>
                    <img src="/path-to-image.jpg" alt="SUP" className="product-image" />
                    {sup.name}
                  </td>
                  <td><span className={`status ${sup.status.toLowerCase()}`}>{sup.status}</span></td>
                  <td>{sup.price}</td>
                  <td>{sup.totalSales}</td>
                  <td>{sup.createdAt}</td>
                  <td>{sup.hireDate || 'Available'}</td>
                  <td>{sup.hireTime || 'N/A'}</td>
                  <td>
                    <ActionMenu product={sup} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showAddModal && (
          <AddSupModal 
            onClose={() => setShowAddModal(false)} 
            onSave={handleAddSup} 
          />
        )}
      </div>
    </div>
  );
};

export default SupManagement;
