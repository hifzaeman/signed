
import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  // Handle file selection
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload and API request
  const handleUpload = async () => {
    if (!file) {
      setResult('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);  // Use 'image' here to match the backend

    try {
      const response = await fetch('http://20.24.162.71:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Assuming the API returns a 'prediction' field
     
      setResult(JSON.stringify(data)); 
      

    } catch (error) {
      console.error('Error:', error);
      setResult('Error occurred while processing.');
    }
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2>Upload Image or Video</h2>
        <p>Please select an image or video to upload.</p>

        {/* File input for uploading image */}
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          style={styles.fileInput} 
        />

        {/* Button to trigger file upload */}
        <button onClick={handleUpload} style={styles.button}>
          Interpret Sign Language
        </button>

        {/* Display the result */}
        {result && (
          <div>
            <h3>{result}</h3>
          </div>
        )}
      </div>
    </section>
  );
};



const styles = {
  section: {
    height: "90vh", // 90% of the viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px dashed #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  fileInput: {
    marginTop: "15px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50", // Green background
    color: "#fff", // White text
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Upload;
