import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sup-management/Sidebar';
import ActionMenu from '../components/sup-management/ActionMenu';
import AddSupModal from '../components/sup-management/AddSupModal';
import { postData, putDataFormData } from 'utils/services';
import useSwr from 'swr';
import { ProductType } from 'types';

const fetcher = async (userId: string) => {
  const response = await postData('/Products/GetProductsByAccountId', userId);
  return Array.isArray(response) ? response : []; // Đảm bảo luôn trả về mảng
};

const SupManagement = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [userId, setUserId] = useState('');
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo") ?? 'null');
    setUserId(userInfo?.Id || '');
  }, []);
  
  const { data: products = [], error } = useSwr<ProductType[]>(userId ? userId : null, fetcher);

  if (error) return <div>Error loading data</div>;
  if (!products) return <div>Loading...</div>;

  const handleAddSup = async (supData: { name: string; price: number; description: string; unitsInstock: string; accountId: string; image: File | null }) => {
    await putDataFormData(`/Products/AddProduct`, {
      productName: supData.name,
      description: supData.description,
      unitPrice: supData.price,
      unitsInstock: supData.unitsInstock,
      accountId: supData.accountId,
      imageFile: supData.image
    });
    setShowAddModal(false);
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
                <th>Price (VND)</th>
                <th>Description</th>
                <th>Total Sales</th>
                <th>Created At</th>
                <th>Hire Date</th>
                <th>Hire Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td>
                    <img src={product.thumb || '/path-to-default-image.jpg'} alt="SUP" className="product-image" />
                  </td>
                  <td><span className={`status ${product.count > 0 ? 'active' : 'inactive'}`}>{product.count > 0 ? 'Active' : 'Inactive'}</span></td>
                  <td>{product.unitPrice}</td>
                  <td>{product.description}</td>
                  <td>{product.count}</td>
                  <td>{new Date().toLocaleDateString()}</td>
                  <td>{product.count > 0 ? 'Available' : 'Not Available'}</td>
                  <td>N/A</td>
                  <td>
                    <ActionMenu product={product} />
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
