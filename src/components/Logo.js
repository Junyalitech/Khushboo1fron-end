import React, { useEffect, useState } from "react";
import "./css/Logo.css"; // Import your CSS file

const Logo = () => {
  const [images, setImages] = useState([]);

  const getAllUsersData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/showlogo`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setImages(data);
        console.log("data : ", data);
      } else {
        console.error("Invalid data format:", data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <h1>hello logo</h1>
      {images.map((imageUrl, index) => (
        <div className="Addlogo" key={index}>
          <img src={`${process.env.REACT_APP_API_URL}${imageUrl.image}`} alt={`Logo ${index + 1}`} />
        </div>
      ))}
      <link rel="stylesheet" href="/public/css/style.css" />


    </>
  );
}

export default Logo;
