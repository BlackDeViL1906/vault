import React from "react";
import { useState } from "react";
import axios from "axios";
import CustomNavbar from "../components/navbar";
import "../assets/css/verifyCert.css";

const VerifyCert = () => {
  const [nftId, setNftId] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const handleInputChange = (event) => {
    setNftId(event.target.value);
  };
  const handleVerifyClick = () => {
    axios
      .get(`http://localhost:3000/tokenURI/${nftId}`)
      .then((response) => {
        const result = response.data;
        if (result === "Token not found") {
          setVerificationResult(result);
        } else {
          setVerificationResult("The File You have uploaded is a valid File!");
        }
      })
      .catch((error) => {
        console.error("Error verifying document:", error);
      });
  };
  return (
    <div className="verif-container">
      <CustomNavbar />
      <h1
        style={{
          color: "white",
          fontSize: "65px",
          marginLeft: "30%",
          marginTop: "2%",
        }}
      >
        Verify-Document
      </h1>
      <div className="verif-contents">
        <label style={{ color: "white", marginTop: "5%", marginLeft: "2%" }}>
          Enter The NFT ID
        </label>
        <input
          style={{
            marginLeft: "2%",
            width: "60%",
            borderRadius: "5px",
            height: "40px",
          }}
          type="text"
          value={nftId}
          onChange={handleInputChange}
        ></input>
        <button
          style={{
            height: "50px",
            width: "30%",
            marginLeft: "30%",
            marginTop: "7%",
            borderRadius: "5px",
            fontSize: "21px",
            color: "white",
            backgroundColor: "rgb(184, 53, 184, 0.9)",
          }}
          onClick={handleVerifyClick}
        >
          Verify
        </button>
      </div>
      {verificationResult && (
        <div
          style={{
            color: "white",
            marginLeft: "30%",
            marginTop: "5%",
            fontSize: "20px",
          }}
        >
          Verification Result: {verificationResult}
        </div>
      )}
    </div>
  );
};
export default VerifyCert;
