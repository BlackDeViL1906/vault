import React, { useRef, useState, useEffect } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import uplimg from "../assets/images/fileupl.jpg";
import "../assets/css/eVault.css";
import CustomNavbar from "../components/navbar";
import { Web3Storage } from "web3.storage";

const EVault = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);

  // useEffect(() => {
  //   fetchFileList();
  // }, []);

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
      } catch (error) {
        console.error("Error uploading to Web3.Storage:", error);
      }
    }
  };

  const uploadToWeb3Storage = async (file) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2NmViYjEzYzY3RjM0NGUwMmZhRTEzN0VmMDY0NDhCNWE5MkJBZWQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTM5MTkyMDAyMTksIm5hbWUiOiJ3ZWIzZVZhdWx0In0.6uqYCwC3MyhfQrXCtJUzmNoSBep_SHvreYCbecLXGUk";
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
    <div className="ev-container">
      <CustomNavbar />
      <h1 style={{ color: "white", marginLeft: "30%", fontSize: "65px" }}>
        Certi-Chain Vault
      </h1>
      <div>
        <p
          style={{
            color: "white",
            marginLeft: "20%",
            marginTop: "3%",
            marginBottom: "3%",
          }}
        >
          Certi-Chain offers blockchain-powered decentralized file storage,
          ensuring security and integrity for your
          <p style={{ marginLeft: "15%" }}>
            valuable data, making data storage reliable and accessible.
          </p>
        </p>
      </div>
      <div className="evaul-main">
        <div className="ev-img">
          <img src={uplimg} id="upload-img" alt="Upload" />
        </div>
        <div className="ev-upl-button">
          <button id="uploadfiles" onClick={handleUploadButtonClick}>
            <FileUploadIcon sx={{ fontSize: "35px" }} />
            {"   "}
            Upload Files
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export default EVault;
