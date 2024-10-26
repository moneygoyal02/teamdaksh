import express from 'express';
import upload from '../utils/multer.js';
import { uploadImage } from '../controller/image.js';

const router = express.Router();

// Define the route to upload an image
router.post('/upload', upload.single('image'), uploadImage);

export default router;
