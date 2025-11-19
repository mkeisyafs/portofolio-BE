import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { prisma } from "./lib/prisma.js";
import authRoutes from "./router/auth.router.js";
import portfolioRoutes from "./router/portfolio.router.js";
import projectRoutes from "./router/project.router.js";
import skillRoutes from "./router/skill.router.js";
import uploadRoutes from "./router/upload.router.js";
import { AuthMiddleware } from "./middleware/auth.middleware.js";


const app = express();
app.use(express.json());
app.use(cors());


// Static uploads
const uploadDir = path.join(process.cwd(), "uploads");
app.use("/uploads", express.static(uploadDir));


app.get("/", (_req, res) => res.send("Hello World!"));


app.use("/api/auth", authRoutes);
app.use("/api/upload", AuthMiddleware, uploadRoutes);
app.use("/api/portfolio", AuthMiddleware, portfolioRoutes);
app.use("/api/project", AuthMiddleware, projectRoutes);
app.use("/api/skill", AuthMiddleware, skillRoutes);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));