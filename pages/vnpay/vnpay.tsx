//import { useState } from 'react';
import { getData } from '../../utils/services'; 


export default function PaymentPage() {
  //const [payUrl, setPayUrl] = useState(null);
    
  const handlePayment = async () => {
    try {
      const response = await getData(`/Payment/CreateVNPayUrl?amount=100000`); // 100,000 VND
      const data = await response.json();
      if (data.payUrl) {
        window.location.href = data.payUrl; // Chuyển hướng đến URL của VNPay
      }
    } catch (error) {
      console.error("Error creating VNPay URL:", error);
    }
  };

  return (
    <div>
      <h1>Thanh toán với VNPay</h1>
      <button onClick={handlePayment}>Thanh toán ngay</button>
    </div>
  );
}
