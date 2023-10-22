const router = require("express").Router()
// const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Wallet = require("../models/Wallet")

// Get wallet balance
router.get('/wallet/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log(req.params);
  try {
    const wallet = await Wallet.findOne({ user_id: userId });
    if (wallet) {
        console.log('found');
      res.json({ balance: wallet.balance });
    } else {
        //console.log('*******************');
        console.log(userId);
      res.status(404).json({ error: 'Wallet not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Top up wallet
router.post('/wallet/topup/:userId', async (req, res) => {
  const userId = req.params.userId;
  const topUpAmount = req.body.amount;
    console.log(req.body);
  try {
    const wallet = await Wallet.findOne({ user_id: userId });
    if (wallet) {
      wallet.balance = parseInt(wallet.balance)+parseInt(topUpAmount);
      console.log(wallet.balance);
      await wallet.save();
      res.json({ balance: wallet.balance });
    } else {
        console.log('*******************');
        //console.log(user);
      res.status(404).json({ error: 'Wallet not found here' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.get("/",async (req,res) =>{
    "done";
});

router.post('/wallet/payment/:userId', async (req, res) => {
    const userId = req.params.userId;
    const billAmount = req.body.amount;
      console.log(req.body);
    try {
      const wallet = await Wallet.findOne({ user_id: userId });
      if (wallet) {
        wallet.balance = parseInt(wallet.balance) - parseInt(billAmount);
        console.log(wallet.balance);
        await wallet.save();
        res.json({ balance: wallet.balance });
      } else {
          console.log('*******************');
          //console.log(user);
        res.status(404).json({ error: 'Wallet not found here' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports = router 
