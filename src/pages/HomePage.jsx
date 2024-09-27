// src/pages/HomePage.js
import React from 'react';
import FileUpload from '../components/FileUpload';
import ImageManipulation from '../components/ImageManipulation';

const HomePage = () => {
  return (
    <div>
      <h1>File Upload and Preview</h1>
      <FileUpload />
      <ImageManipulation />
    </div>
  );
};

export default HomePage;
