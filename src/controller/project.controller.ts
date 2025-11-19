import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const createManyProjectByPortfolioId = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { projects } = req.body;
  const result = await prisma.project.createMany({ data: projects.map((project: any) => ({ ...project, portfolio_id: Number(id) })) });
  res.send(result);
};

export const findAllProject = async (_req: Request, res: Response) => {
  const projects = await prisma.project.findMany();
  res.json({ data: projects });
};

export const findProjectByPortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const projects = await prisma.project.findMany({
    where: { portfolio_id: Number(id) },
  });
  res.json({ data: projects });
};

export const updateProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const projectData = req.body;
  const result = await prisma.project.update({
    where: { project_id: Number(id) },
    data: projectData,
  });
  res.send(result);
};

export const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await prisma.project.delete({
    where: { project_id: Number(id) },
  });
  res.send(result);
};

export const deleteProjectByPortfolio = async (req: Request, res: Response) => {
  const { portfolio_id } = req.params;
  const result = await prisma.project.deleteMany({
    where: { portfolio_id: Number(portfolio_id) },
  });
  res.send(result);
};
