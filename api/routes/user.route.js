import express from 'express';
import { test, updateUsers } from '../controllers/user.contoller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router =express.Router();

router.get('/test', test)
router.post('/update/:userId',verifyToken, updateUsers); 

export default router;