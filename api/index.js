import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	// api call: send json response by sending object
	res.send({ "data": [] });
});

export default router; 
