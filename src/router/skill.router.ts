import express from "express";
import * as ctrl from "../controller/skill.controller.js";


const router = express.Router();
router.post("/create-many/:id", ctrl.createManySkillByPortfolioId);
router.get("/find-all", ctrl.findAllSkill);
router.get("/find-one/:id", ctrl.findSkillByPortfolio);
router.put("/update/:id", ctrl.updateSkill);
router.delete("/delete/:id", ctrl.deleteSkill);
router.delete("/delete-by-portfolio/:portfolio_id", ctrl.deleteSkillByPortfolio);


export default router;