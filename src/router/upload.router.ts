import express from "express";
import { upload } from "../utils/multer.js";
import { uploadImage } from "../controller/upload.controller.js";


const router = express.Router();
router.post("/", upload.single("image"), uploadImage);


export default router;