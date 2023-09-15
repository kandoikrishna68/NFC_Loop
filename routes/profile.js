import express from 'express';
import {calculateTax , createProfile} from "../controllers/profile.js"
import { isAuthenticated } from '../middleware/auth.js';

const router=express.Router();

router.post("/createprofile" , createProfile);
router.post("/calculate" , isAuthenticated, calculateTax);

export default router;