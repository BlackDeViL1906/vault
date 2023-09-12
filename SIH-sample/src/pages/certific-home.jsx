import React from "react";
import CustomNavbar from "../components/navbar";
import generation from "../assets/images/certgen.jpg";
import certifview from "../assets/images/certiview.jpg";
import "../assets/css/certif-home.css";

const CertifHome = () => {
  return (
    <div className="certif-container">
      <CustomNavbar />
      <div>
        <h1 id="home-head">Digital Cert-Chain</h1>
        <div className="content-part">
          <div className="cert-img-container">
            <img src={generation} id="generate-img" />
            <p style={{ color: "white", marginLeft: "15%", marginTop: "5%" }}>
              Generate Certificate and issue it on your own !
            </p>
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(184, 53, 184)",
                padding: "10px",
                width: "200px",
                borderRadius: "10px",
                border: "none",
                marginLeft: "30%",
              }}
            >
              Create Certificates
            </button>
          </div>
          <div className="line-class"></div>
          <div>
            <img src={certifview} id="viewcertif-img" />
            <p style={{ color: "white", marginLeft: "15%", marginTop: "5%" }}>
              See the collection of Certificates that you have !
            </p>
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(184, 53, 184)",
                padding: "10px",
                width: "200px",
                borderRadius: "10px",
                border: "none",
                marginLeft: "30%",
              }}
            >
              View Certificates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CertifHome;
