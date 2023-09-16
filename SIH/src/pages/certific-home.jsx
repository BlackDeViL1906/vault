import React from "react";
import CustomNavbar from "../components/navbar";
import generation from "../assets/images/certgen.jpg";
import certifview from "../assets/images/certiview.jpg";
import "../assets/css/certif-home.css";
import { useState, useRef } from "react";
import { Web3Storage } from "web3.storage";
import axios from "axios";
import { Link } from "react-router-dom";

const CertifHome = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [retrievedFile, setRetrievedFile] = useState(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected File:", file);
      setSelectedFile(file);

      try {
        const cid = await uploadToWeb3Storage(file);
        console.log("Content added with CID:", cid);

        const getResponse = await axios.get(
          `http://localhost:3000/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8?cid=${cid}`
        );

        if (getResponse.status === 200) {
          console.log("GET Request Successful");
          console.log("Response Data:", getResponse.data);
          return getResponse.data;
        } else {
          console.error("GET Request Failed with status:", getResponse.status);
          throw new Error("Failed to retrieve data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const uploadToWeb3Storage = async (file) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk0MzU1NDQ3M0Q3MDdkMDIxRDNEZTdhNGY3NDgzNzFENjhCNGEyNEMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ2OTQyMTkzMTAsIm5hbWUiOiJuZnRfdmVyaWZ5In0.iC7sd6RofUeMKRw-UEtNGt56aCu0deyzrGxVQH3wGi0";
    const storage = new Web3Storage({ token });

    console.log(storage);
    try {
      console.log("Uploaded", file);
      const uploadingFile = new File([file], file.name, { type: file.type });
      const response = await storage.put([uploadingFile]);
      console.log(response);
      return response;
    } catch (error) {
      console.error("Error uploading to Web3.Storage:", error);
      throw new Error("Failed to upload to Web3.Storage");
    }
  };

  return (
    <div className="certif-container">
      <CustomNavbar />
      <div>
        <h1 id="home-head">Digital Cert-Chain</h1>
        <div className="content-part">
          <div className="cert-img-container">
            <img
              src={generation}
              id="generate-img"
              alt="Generate Certificate"
            />
            <p style={{ color: "white", marginLeft: "15%", marginTop: "5%" }}>
              Generate Certificate and issue it on your own !
            </p>
            <div className="ev-upl-button">
              <button
                style={{
                  color: "white",
                  backgroundColor: "rgb(184, 53, 184)",
                  padding: "10px",
                  width: "200px",
                  borderRadius: "10px",
                  border: "none",
                  marginLeft: "15%",
                  marginTop: "-50px",
                }}
                onClick={() => fileInputRef.current.click()}
              >
                Create Certificates
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="line-class"></div>
          <div>
            <img src={certifview} id="viewcertif-img" alt="View Certificates" />
            <p style={{ color: "white", marginLeft: "19%", marginTop: "5%" }}>
              See the collection of Certificates that you have !
            </p>
            <Link to="/view-cert">
              <button
                style={{
                  color: "white",
                  backgroundColor: "rgb(184, 53, 184)",
                  padding: "10px",
                  width: "200px",
                  borderRadius: "10px",
                  border: "none",
                  marginLeft: "37%",
                  marginTop: "5px",
                }}
              >
                View Certificates
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifHome;
