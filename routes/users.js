const { Router } = require('express');
const sequelize = require('../database/connection');
//auth
const router = Router();

router.get('/hello', (request, response) => {
    try {
        response.json("world");
    } catch (err) {
        console.log(err.message);
    }
})




module.exports = router;