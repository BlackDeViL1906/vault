import React from "react";
import { useState } from "react";
import axios from "axios";
import CustomNavbar from "../components/navbar";
import "../assets/css/verifyCert.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const VerifyCert = () => {
  const [nftId, setNftId] = useState("");
  const [verificationResult, setVerificationResult] = useState("");
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const [cid, setCID] = useState("");
  const handleSuccessSnackbarClose = () => {
    setOpenSuccessSnackbar(false);
  };

  const handleErrorSnackbarClose = () => {
    setOpenErrorSnackbar(false);
  };

  const handleInputChange = (event) => {
    setNftId(event.target.value);
  };
  const handleVerifyClick = () => {
    axios
      .get(`http://localhost:3000/tokenURI/${nftId}`)
      .then((response) => {
        const result = response.data;
        if (result === "Token not found") {
          setVerificationResult("It's not an Original File !");
          setCID("No cid found for token found ! Invalid File");
          setOpenErrorSnackbar(true);
        } else {
          setVerificationResult("The File You have uploaded is a valid File!");
          setCID(response.data + " is your cid");
          setOpenSuccessSnackbar(true);
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
        {verificationResult && (
          <div
            style={{
              color: "white",
              marginLeft: "-8%",
              marginTop: "30%",
              fontSize: "20px",
              width: "140%",
            }}
          >
            Verification Result: {cid}
          </div>
        )}

        {/* Success Snackbar */}
        <Snackbar
          open={openSuccessSnackbar}
          autoHideDuration={3000}
          onClose={handleSuccessSnackbarClose}
        >
          <MuiAlert
            elevation={0}
            variant="filled"
            onClose={handleSuccessSnackbarClose}
            severity="success"
          >
            Verification Result: The File You have uploaded is a valid File!
          </MuiAlert>
        </Snackbar>

        <Snackbar
          open={openErrorSnackbar}
          autoHideDuration={3000}
          onClose={handleErrorSnackbarClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleErrorSnackbarClose}
            severity="error"
          >
            Verification Result: It's not an Original File!
          </MuiAlert>
        </Snackbar>
      </div>
    </div>
  );
};
export default VerifyCert;
