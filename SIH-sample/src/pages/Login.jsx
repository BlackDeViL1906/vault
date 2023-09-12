import React, { useState } from "react";
import Web3 from "web3";
import logimg from "../assets/images/login.jpg";
import micon from "../assets/images/metamask.png";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../assets/css/Login.css";

const Login = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const connectMetamask = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
        setSelectedAccount(accounts[0] || "");

        if (accounts.length > 0) {
          console.log("Connected with Metamask");
          console.log("Selected account:", accounts[0]);
        }
        setSnackbarSeverity("success");
        setSnackbarMessage("Successfully logged in!");
        setSnackbarOpen(true);
        setTimeout(() => {
          window.location.href = "/home";
        }, 1000);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      console.error("Metamask not detected.");
    }
  };

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="login-container">
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div className="loginimage">
        <img
          src={logimg}
          style={{
            height: "500px",
            width: "550px",
            borderRadius: "10px",
            marginTop: "18%",
            marginLeft: "20%",
            marginBottom: "28.25%",
          }}
          alt="Login"
        />
      </div>
      <div className="log-cont">
        <h1 style={{ color: "white" }}>Login</h1>
        {!web3 && (
          <button onClick={connectMetamask} id="log-button">
            <img
              src={micon}
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              alt="Metamask Icon"
            />
            <span style={{ fontSize: "20px", color: "white" }}>
              Connect with Metamask
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
