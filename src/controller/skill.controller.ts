import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const createManySkillByPortfolioId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { skill } = req.body;
  const result = await prisma.skill.createMany({ data: skill.map((s: any) => ({ ...s, portfolio_id: Number(id) })) });
  res.send(result);
};

export const findAllSkill = async (_req: Request, res: Response) => {
  const skills = await prisma.skill.findMany();
  res.json({ data: skills });
};

export const findSkillByPortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const skills = await prisma.skill.findMany({
    where: { portfolio_id: Number(id) },
  });
  res.json({ data: skills });
};

export const updateSkill = async (req: Request, res: Response) => {
  const { id } = req.params;
  const skillData = req.body;
  const result = await prisma.skill.update({
    where: { skill_id: Number(id) },
    data: skillData,
  });
  res.send(result);
};

export const deleteSkill = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await prisma.skill.delete({ where: { skill_id: Number(id) } });
  res.send(result);
};

export const deleteSkillByPortfolio = async (req: Request, res: Response) => {
  const { portfolio_id } = req.params;
  const result = await prisma.skill.deleteMany({
    where: { portfolio_id: Number(portfolio_id) },
  });
  res.send(result);
};
