const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/this', (req,res) => {
    res.json({
        success:true,
        message:'success, cunt'
    });
});

module.exports = router;
