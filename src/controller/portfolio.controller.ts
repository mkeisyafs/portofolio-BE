import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const findAllPortfoliosByUser = async (req: Request, res: Response) => {
    const { id } = req.params;
  const portfolios = await prisma.portfolio.findMany({
    where: { user_id: Number(id) },
    include: { project: true, skill: true },
  });
  res.json({ data: portfolios });
};

export const findOnePortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const portfolio = await prisma.portfolio.findUnique({
    where: { portfolio_id: Number(id) },
    include: { project: true, skill: true },
  });
  res.json({ data: portfolio });
};

export const createManyPortfolios = async (req: Request, res: Response) => {
  const portfolios = req.body;
  const result = await prisma.portfolio.createMany({ data: portfolios });
  res.send(result);
};

  export const createPortfolioByUserId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const portfolio = req.body;
    const result = await prisma.portfolio.create({ data: { ...portfolio, user_id: Number(id) } });
    res.send(result);
  };

export const deletePortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await prisma.portfolio.delete({
    where: { portfolio_id: Number(id) },
  });
  res.send(result);
};

export const updatePortfolio = async (req: Request, res: Response) => {
  const { id } = req.params;
  const portfolioData = req.body;
  const result = await prisma.portfolio.update({
    where: { portfolio_id: Number(id) },
    data: portfolioData,
  });
  res.send(result);
};

export const findPortfolioByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const portfolio = await prisma.user.findUnique({
    where: { user_id: Number(id) },
    include: { portfolio: { include: { project: true, skill: true } } },
  });
  res.json(portfolio);
};
