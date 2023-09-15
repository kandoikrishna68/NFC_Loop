import express from "express";

import{ calculateBusinessTax, createBusinessProfile } from "../controllers/business.js";

const businessRouter = express.Router();

businessRouter.post("/createBusinessProfile", createBusinessProfile);
businessRouter.post("/calculateBusinessTax", calculateBusinessTax);

export default businessRouter;