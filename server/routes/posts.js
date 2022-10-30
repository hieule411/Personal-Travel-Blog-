import express, { Router } from 'express';

const route = express.Router();

Router.get('/', (req, res) => {
    res.send('Hello');
})

export default router; 