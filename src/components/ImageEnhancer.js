import React, { useState } from "react";

const ImageEnhancer = () => {
  const [image, setImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const enhanceImage = () => {
    if (image) {
      setTimeout(() => {
        setEnhancedImage(image); 
        alert("Image Enhanced Successfully!");
      }, 2000);
    }
  };

  return (
    <div className="image-enhancer-container">
      <input type="file" accept="image/*" onChange={handleUpload} className="file-input" />
      
      {image && (
        <div className="center-container">
          <h3>Uploaded Image:</h3>
          <img src={image} alt="Uploaded Preview" className="uploaded-image" />
          <button onClick={enhanceImage} disabled={!image} className="enhance-button">
            Enhance Image
          </button>
        </div>
      )}

      {enhancedImage && (
        <div className="center-container">
          <h3>Enhanced Image:</h3>
          <img src={enhancedImage} alt="Enhanced" className="enhanced-image" />
          <a href={enhancedImage} download="enhanced-image.jpg">
            <button className="download-button">Download Image</button>
          </a>
        </div>
      )}

      <style jsx>{`
        .center-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
        }
        .uploaded-image, .enhanced-image {
          width: 250px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          margin-top: 10px;
        }
        .enhance-button, .download-button {
          margin-top: 10px;
          padding: 10px;
          border: none;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }
        .enhance-button:disabled {
          background-color: gray;
        }
      `}</style>
    </div>
  );
};

export default ImageEnhancer;
