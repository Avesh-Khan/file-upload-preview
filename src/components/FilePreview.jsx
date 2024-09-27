// src/components/FilePreview.js
import React from 'react';

const FilePreview = ({ file, preview }) => {
  const renderPreview = () => {
    switch (file.type) {
      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
        return <img src={preview} alt="preview" />;
      case 'audio/mpeg':
      case 'audio/wav':
        return <audio controls src={preview} />;
      case 'video/mp4':
      case 'video/webm':
        return <video controls src={preview} />;
      case 'application/pdf':
        return <embed src={preview} type="application/pdf" width="600" height="400" />;
      default:
        return <p>Unsupported file type</p>;
    }
  };

  return (
    <div>
      <h3>File Preview:</h3>
      {renderPreview()}
    </div>
  );
};

export default FilePreview;
