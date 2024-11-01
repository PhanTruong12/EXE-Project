import React from 'react';
const RecentSales = () => {
    return (
      <div className="admin-recent-sales">
        <h3>Recent Sales | Today</h3>
        <table className="admin-recent-sales-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#2457</td>
              <td>Brandon Jacob</td>
              <td>At Praesentium Minu</td>
              <td>$64</td>
              <td>Approved</td>
            </tr>
            <tr>
              <td>#2147</td>
              <td>Bridie Kessler</td>
              <td>Blanditiis Omnis Similique</td>
              <td>$47</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default RecentSales;
  