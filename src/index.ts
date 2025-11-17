import "dotenv/config";
import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";
import { PrismaClient } from "./generated/client/index.js";


const prisma = new PrismaClient()

const app = express();
app.use(express.json());
app.use(cors());

// Configure multer for image uploads
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  }
});

const fileFilter = (req: any, file: any, cb: any) => {
  const allowedMimes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, GIF and WebP are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Upload endpoint for images
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const fileUrl = `/uploads/${req.file.filename}`;
  res.json(req.file);
});

// Serve uploaded files statically
app.use("/uploads", express.static(uploadDir));

// portfolio endpoints

app.get("/api/portfolio/find-all", async (req, res) => {
  const portfolios = await prisma.portfolio.findMany({
    include: { project: true, skill: true }
  });
  res.json({
    data: portfolios
  });
});

app.get("/api/portfolio/find-one/:id", async (req, res) => {
  const { id } = req.params;
  const portfolio = await prisma.portfolio.findUnique({
    where: { portfolio_id: Number(id) },
    include: { project: true, skill: true }
  });
  res.json({
    data: portfolio
  });
});

app.post("/api/portfolio/create-many", async (req, res) => {
  const portfolios = req.body;
  const result = await prisma.portfolio.createMany({
    data: portfolios
  });
  res.send(result);

});

app.post("/api/portfolio/create", async (req, res) => {
  const portfolio = req.body;
  const result = await prisma.portfolio.create({
    data: portfolio
  });
  res.send(result);
});

app.delete("/api/portfolio/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await prisma.portfolio.delete({
    where: { portfolio_id: Number(id) }
  });
  res.send(result);
});

app.put("/api/portfolio/update/:id", async (req, res) => {
  const { id } = req.params;
  const portfolioData = req.body;
  const result = await prisma.portfolio.update({
    where: { portfolio_id: Number(id) },
    data: portfolioData
  });
  res.send(result);
});

// skill endpoints

app.post("/api/skill/create-many", async (req, res) => {
  const { skill } = req.body;
  const result = await prisma.skill.createMany({
    data: skill
  });
  res.send(result);
});

app.get("/api/skill/find-all", async (req, res) => {
  const skills = await prisma.skill.findMany();
  res.json({
    data: skills
  });
});

app.get("/api/skill/find-one/:id", async (req, res) => {
  const { id } = req.params;
  const skills = await prisma.skill.findMany({ where: { portfolio_id: Number(id) } });
  res.json({
    data: skills
  });
});

app.put("/api/skill/update/:id", async (req, res) => {
  const { id } = req.params;
  const skillData = req.body;
  const result = await prisma.skill.update({
    where: { skill_id: Number(id) },
    data: skillData
  });
  res.send(result);
});

app.delete("/api/skill/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await prisma.skill.delete({
    where: { skill_id: Number(id) }
  });
  res.send(result);
});

app.delete("/api/skill/delete-by-portfolio/:portfolio_id", async (req, res) => {
  const { portfolio_id } = req.params;
  const result = await prisma.skill.deleteMany({
    where: { portfolio_id: Number(portfolio_id) }
  });
  res.send(result);
});

// project endpoints

app.post("/api/project/create-many", async (req, res) => {
  const { projects } = req.body;
  const result = await prisma.project.createMany({
    data: projects
  });
  res.send(result);
});

app.get("/api/project/find-all", async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json({
    data: projects
  });
});
app.get("/api/project/find-one/:id", async (req, res) => {
  const { id } = req.params;
  const projects = await prisma.project.findMany({ where: { portfolio_id: Number(id) } });
  res.json({
    data: projects
  });
});

app.put("/api/project/update/:id", async (req, res) => {
  const { id } = req.params;
  const projectData = req.body;
  const result = await prisma.project.update({
    where: { project_id: Number(id) },
    data: projectData
  });
  res.send(result);
});

app.delete("/api/project/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await prisma.project.delete({
    where: { project_id: Number(id) }
  });
  res.send(result);
});

app.delete("/api/project/delete-by-portfolio/:portfolio_id", async (req, res) => {
  const { portfolio_id } = req.params;
  const result = await prisma.project.deleteMany({
    where: { portfolio_id: Number(portfolio_id) }
  });
  res.send(result);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
