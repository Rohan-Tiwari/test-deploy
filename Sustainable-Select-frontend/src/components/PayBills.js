import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PayBills({ userId }) {
  userId ="65316df470d14d00113e3ae0";
  const [balance, setBalance] = useState(0); // Replace with the actual user's wallet balance
  const [billAmount, setBillAmount] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState('');

  const fetchWalletBalance = async () => {
    try {
      console.log('bill payments');
        console.log(userId);
      const response = await axios.get(`http://localhost:5000/api/wallets/wallet/${userId}`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  const handlePayment = async () => {
    const amount = parseInt(billAmount);

    if (amount <= 0) {
      setPaymentStatus('Invalid amount');
    } else if (amount > balance) {
      setPaymentStatus('Insufficient funds');
    } else {
      // Replace this with actual payment processing logic (e.g., API calls to payment gateway)
      // In a real app, you would handle authentication and payment processing here.
      await axios.post(`http://localhost:5000/api/wallets/wallet/payment/${userId}`, { 
        amount: parseInt(billAmount) 
      });
      setBalance(balance - amount);
      fetchWalletBalance();
      setPaymentStatus('Payment successful');
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, [userId]);

  return (
    <div>
      <h1>Bill Payment</h1>
      <p>Wallet Balance: ${balance}</p>

      <input
        type="number"
        placeholder="Enter bill amount"
        value={billAmount}
        onChange={(e) => setBillAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Bill</button>
      <p>{paymentStatus}</p>
    </div>
  );
}

export default PayBills;
