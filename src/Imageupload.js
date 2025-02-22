import React, { useState } from 'react';

const ImageUpload = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Handle the file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);  // Set the preview image
        setImageFile(file);  // Set the file for future submission
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle the form submission (you can modify this for your backend)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }
    
    // Example: Upload the image to a server or handle submission
	alert("Image Submitted");
    
  };

  return (
    <div id="box">
      <h2>Upload and Preview Image</h2>
      <form onSubmit={handleSubmit}>
        Select an image <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
        />
        
        {/* Image preview section */}
        {imagePreview && (
          <div style={{ marginTop: '20px' }}>
            <h3>Image Preview</h3>
            <img src={imagePreview} alt="Image Preview" id="i"/>
          </div>
        )}
        
        <button type="submit" style={{ marginTop: '20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
