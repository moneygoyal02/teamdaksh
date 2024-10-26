// controllers/imageController.js
import Image from '../models/image.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import fs from 'fs';

const uploadImage = async (req, res) => {
  const localFilePath = req.file.path; // Temporary local path from multer

  try {
    // Upload the file to Cloudinary
    const uploadResult = await uploadOnCloudinary(localFilePath);

    if (!uploadResult) {
      return res.status(500).json({ error: 'Image upload failed' });
    }

    // Save image details to the database
    const image = new Image({
      url: uploadResult.url,
      public_id: uploadResult.public_id,
    });
    await image.save();

    // Delete local file after uploading to Cloudinary
    fs.unlinkSync(localFilePath);

    res.status(201).json({
      message: 'Image uploaded successfully',
      image,
    });
  } catch (error) {
    // Remove local file if there's an error
    fs.unlinkSync(localFilePath);
    console.error("Error in uploading image:", error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
};

export { uploadImage };
