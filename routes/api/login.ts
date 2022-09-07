import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from express and typescript');
});

router.post('/login', (req, res) => {

});

export default router;