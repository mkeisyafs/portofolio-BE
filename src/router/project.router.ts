import express from "express";
import * as ctrl from "../controller/project.controller.js";


const router = express.Router();
router.post("/create-many/:id", ctrl.createManyProjectByPortfolioId);
router.get("/find-all", ctrl.findAllProject);
router.get("/find-one/:id", ctrl.findProjectByPortfolio);
router.put("/update/:id", ctrl.updateProject);
router.delete("/delete/:id", ctrl.deleteProject);
router.delete("/delete-by-portfolio/:portfolio_id", ctrl.deleteProjectByPortfolio);


export default router;