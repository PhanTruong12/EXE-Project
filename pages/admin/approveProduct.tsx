import Header from '@/components/admin-management/Header';
import Sidebar from '@/components/admin-management/Sidebar';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

interface ProductData {
    id: number;
    userName: string;
    productName: string;
    price: string;
    imageUrl: string;
    status: 'Pending' | 'Approved' | 'Rejected';
}

const ApproveProduct: React.FC = () => {
    // Dữ liệu mẫu cho danh sách sản phẩm cần duyệt
    const products: ProductData[] = [
        {
            id: 1,
            userName: 'Nguyễn Văn A',
            productName: 'SUP DEP',
            price: '300.000 VND',
            imageUrl: '/path/to/image.jpg',
            status: 'Pending',
        },
        {
            id: 2,
            userName: 'Trần Văn B',
            productName: 'SUP VIP',
            price: '500.000 VND',
            imageUrl: '/path/to/image.jpg',
            status: 'Pending',
        },
    ];

    // Xử lý khi admin chọn duyệt
    const handleApprove = (id: number) => {
        // Logic để cập nhật trạng thái sản phẩm
        alert(`Sản phẩm ${id} đã được duyệt.`);
    };

    // Xử lý khi admin từ chối duyệt
    const handleReject = (id: number) => {
        // Logic để cập nhật trạng thái sản phẩm
        alert(`Sản phẩm ${id} đã bị từ chối.`);
    };

    return (

        <div className="admin-container">
            <Sidebar />
            <div className="admin-main-content">
                <Header />
                <div className="approve-product-container">
                    <h2>Duyệt Sản Phẩm</h2>
                    <table className="approve-product-table">
                        <thead>
                            <tr>
                                <th>Ảnh</th>
                                <th>Người đăng</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>
                                        <img
                                            src={product.imageUrl}
                                            alt={product.productName}
                                            className="product-image"
                                        />
                                    </td>
                                    <td>{product.userName}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <span
                                            className={
                                                product.status === 'Pending'
                                                    ? 'status-pending'
                                                    : product.status === 'Approved'
                                                        ? 'status-approved'
                                                        : 'status-rejected'
                                            }
                                        >
                                            {product.status}
                                        </span>
                                    </td>
                                    <td>
                                        {product.status === 'Pending' && (
                                            <div className="action-buttons">
                                                <button
                                                    className="approve-button"
                                                    onClick={() => handleApprove(product.id)}
                                                >
                                                    <AiOutlineCheck /> Duyệt
                                                </button>
                                                <button
                                                    className="reject-button"
                                                    onClick={() => handleReject(product.id)}
                                                >
                                                    <AiOutlineClose /> Từ chối
                                                </button>
                                            </div>
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

export default ApproveProduct;
