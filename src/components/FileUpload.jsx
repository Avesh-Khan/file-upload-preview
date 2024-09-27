// src/components/FileUpload.js
import React, { useState } from 'react';
import FilePreview from './FilePreview';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {preview && <FilePreview file={file} preview={preview} />}
    </div>
  );
};

export default FileUpload;
