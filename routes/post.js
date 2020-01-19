const router = require('express').Router();
const verifyToken = require('../routes/verifyToken');

router.get('/', verifyToken, (req, res)=>{
    res.json({post:{ 
        title: 'BaslikSennaber',
        description: 'BU BENIM ACIKLAMAM'
     }});
});

module.exports = router;