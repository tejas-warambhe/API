const { Router } = require('express');
const authorisation = require('../middlewares/authorization');
const jwtGenerator = require('../utils/jwtGenerator');

const User = require('../models/user');
const router = Router();




router.post('/login', async(req, res) => {

    try {
        const { name, password } = req.body;


        if (name === "admin" && password === "admin") {
            const token = jwtGenerator("admin");

            return res.json({ token });
        }

        res.json("invalid");


    } catch (err) {
        res.set(401).send(err.message);
    }
});



router.get('/', async(req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/details/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const response = await User.findAll({
            where: {
                user_id: id
            }
        });
        if (response.length === 0) {
            res.json("User Not Available");
        }
        res.json(response);
    } catch (err) {
        console.log(err.message);
    }
});

router.post('/insert', authorisation, async(req, res) => {
    const { user_name, user_email, user_password, user_image, total_orders } = req.body;
    console.log(user_image);
    try {
        const user = await User.create({
            user_name: user_name,
            user_email: user_email,
            user_password: user_password,
            user_image: user_image,
            total_orders: total_orders
        });
        console.log(user);
        res.json("User Created Succesfully");
    } catch (err) {
        console.log(err.message);
    }
});

router.get('/image/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const response = await User.findAll({ where: { user_id: id } });
        const imageRes = response[0].user_image;
        res.json(imageRes);
    } catch (err) {
        console.log(err.message);
    }
})

router.put('/update', authorisation, async(req, res) => {
    const { user_id, user_name, user_email, user_password, user_image, total_orders } = req.body;

    try {
        const response = await User.update({ user_name: user_name, user_email: user_email, user_password: user_password, user_image: user_image, total_orders: total_orders }, {
            where: {
                user_id: user_id
            }
        });
        console.log(response);
        res.json(response);
    } catch (err) {
        console.log(err.message);
    }

});

router.delete('/delete/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const response = await User.destroy({
            where: {
                user_id: id
            }
        });
        console.log(response);
        res.json(response);
    } catch (err) {
        console.log(err.message);
    }
})




module.exports = router;