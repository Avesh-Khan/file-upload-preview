// src/components/ImageManipulation.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageManipulation = ({ file, preview }) => {
  const [manipulatedImage, setManipulatedImage] = useState(null);

  const handleManipulateImage = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

      // Upload the image to Cloudinary
      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload`,
        formData
      );
      const imageUrl = uploadResponse.data.secure_url;

      // Manipulate the uploaded image
      const manipulateResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/manipulate',
        { imageUrl },
        {
          headers: {
            Authorization: `Bearer YOUR_API_KEY`,
          },
        }
      );
      setManipulatedImage(manipulateResponse.data.secure_url);
    } catch (error) {
      console.error('Error manipulating image:', error);
    }
  };

  return (
    <div>
      <button onClick={handleManipulateImage}>Manipulate Image</button>
      {manipulatedImage && <img src={manipulatedImage} alt="manipulated" />}
    </div>
  );
};

export default ImageManipulation;
