// src/components/Wallet.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Wallet.css";

const Wallet = ({ userId }) => {
    userId ="65316df470d14d00113e3ae0";
  const [balance, setBalance] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);

  const fetchWalletBalance = async () => {
    try {
      console.log('inifonafin');
        console.log(userId);
      const response = await axios.get(`https://test-backend-1-6top.onrender.com/api/wallets/wallet/${userId}`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  const handleTopUp = async () => {
    try {
      console.log(topUpAmount);
      await axios.post(`https://test-backend-1-6top.onrender.com/api/wallets/wallet/topup/${userId}`, { 
        amount: parseInt(topUpAmount) 
      });
      fetchWalletBalance(); // Refresh the wallet balance after top-up
    } catch (error) {
      console.error('Error topping up wallet:', error);
    }
  };

  useEffect(() => {
    fetchWalletBalance();
  }, [userId]);

  return (
    <div>
      <div class="balance-cont">
        <div class="balance-box">
          <div class="balance-text">
                  Balance Available:
                  <p>${balance}</p>
              <span class="currency-symbol">&euro;</span>
              <div class="available-balance"> 0</div>
          </div>
        </div>
      </div>
      <h2>Wallet</h2>
      <input
        type="number"
        placeholder="Enter top-up amount"
        value={topUpAmount}
        onChange={(e) => setTopUpAmount(e.target.value)}
      />
      <button onClick={handleTopUp}>Top Up Wallet</button>
    </div>
  );
};

export default Wallet;
