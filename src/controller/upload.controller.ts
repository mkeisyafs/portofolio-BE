import { Request, Response } from "express";

export const uploadImage = (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const normalizedPath = req.file.path.replace(/\\/g, "/");

  const relativePath = "/uploads" + normalizedPath.split("uploads")[1];

  res.json({
    path: relativePath,   
    filename: req.file.filename
  });
};
