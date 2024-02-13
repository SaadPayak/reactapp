import React, { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import app from "../../backend/Firebase/firebase";
import { getAuth } from "firebase/auth";
import axios from "axios";

const Account = () => {
  const { setUser } = useUser();
  const auth = getAuth(app);
  return (
    <div className="w-full min-h-screen ">
      <button
        onClick={() => {
          try {
            auth.signOut();
            setUser(null);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        Logout
      </button>
      <ImageUpload />
    </div>
  );
};

export default Account;

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch("http://127.0.0.1:5000/process_image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("OK: ", result);
      setResult(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="text-white">
      <h1>Upload Image</h1>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        required
      />
      <button onClick={uploadImage}>Upload</button>

      {result && (
        <div>
          <h2>Result:</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
