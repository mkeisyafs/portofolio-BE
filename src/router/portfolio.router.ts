import express from "express";
import * as ctrl from "../controller/portfolio.controller.js";


const router = express.Router();
router.get("/find-all/:id", ctrl.findAllPortfoliosByUser);
router.get("/find-one/:id", ctrl.findOnePortfolio);
router.post("/create-many", ctrl.createManyPortfolios);
router.post("/create/:id", ctrl.createPortfolioByUserId);
router.delete("/delete/:id", ctrl.deletePortfolio);
router.put("/update/:id", ctrl.updatePortfolio);
router.get("/:id/find-all", ctrl.findPortfolioByUser);


export default router;