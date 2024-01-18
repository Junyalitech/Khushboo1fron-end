import React, { useEffect, useState } from "react";
import "./css/Logo.css"; // Import your CSS file

export const Product = () => {
  const [data, setData] = useState([]);

  const getAllUsersData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/showalltextandImage`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const responseData = await response.json();
      
      if (Array.isArray(responseData)) {
        setData(responseData);
        console.log("data : ", responseData);
      } else {
        console.error("Invalid data format:", responseData);
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
      <h1>MY home page </h1>
      {data.map((item, index) => (
        <div className="Addlogo Addtext " key={index}>
          <img src={`${process.env.REACT_APP_API_URL}${item.photo}`} alt={`Logo `} />
          <p className="Addtext" key={index}>{item.text}</p>
        </div>
      ))}
      <link rel="stylesheet" href="/public/css/style.css" />
    </>
  );
}

export default Product;
