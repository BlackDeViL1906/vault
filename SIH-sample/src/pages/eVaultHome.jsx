import React, { useRef, useState, useEffect } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import uplimg from "../assets/images/fileupl.jpg";
import "../assets/css/eVault.css";
import CustomNavbar from "../components/navbar";
import { Web3Storage } from "web3.storage";
import axios from "axios";

const EVault = () => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [retrievedFile, setRetrievedFile] = useState(null);

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

        // fetchFileList();
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
      const request = await axios.get(
        "http://localhost:3000/0xBbefc461F6D944932EEea9C6d4c26C21e9cCeFB8?cid=" +
          response
      );
      console.log(request);
      return response;
    } catch (error) {
      console.error("Error uploading to Web3.Storage:", error);
      throw new Error("Failed to upload to Web3.Storage");
    }
  };

  const fetchFileList = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2NmViYjEzYzY3RjM0NGUwMmZhRTEzN0VmMDY0NDhCNWE5MkJBZWQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTM5MTkyMDAyMTksIm5hbWUiOiJ3ZWIzZVZhdWx0In0.6uqYCwC3MyhfQrXCtJUzmNoSBep_SHvreYCbecLXGUk";
    const storage = new Web3Storage({ token });

    try {
      const response = await storage.put([file]);

      if (response.ok) {
        const { cid } =
          "bafybeihj7uk3dk6y75y2qju5oed2n77nn7pyxad4rb4q2335eumxkfjemu";
        console.log("Content added with CID:", cid);
        return cid;
      } else {
        console.error("Error uploading to Web3.Storage:", response.statusText);
        throw new Error("Failed to upload to Web3.Storage");
      }
    } catch (error) {
      console.error("Error uploading to Web3.Storage:", error);
      throw new Error("Failed to upload to Web3.Storage");
    }
  };

  const handleRetrieveButtonClick = async (cid) => {
    try {
      const retrievedBlob = await retrieveFromWeb3Storage(cid);
      setRetrievedFile(retrievedBlob);
    } catch (error) {
      console.error("Error retrieving from Web3.Storage:", error);
    }
  };

  const retrieveFromWeb3Storage = async (cid) => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2NmViYjEzYzY3RjM0NGUwMmZhRTEzN0VmMDY0NDhCNWE5MkJBZWQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTM5MTkyMDAyMTksIm5hbWUiOiJ3ZWIzZVZhdWx0In0.6uqYCwC3MyhfQrXCtJUzmNoSBep_SHvreYCbecLXGUk";
    const storage = new Web3Storage({ token });

    try {
      const { value } = await storage.get(cid);
      return new Blob([value]);
    } catch (error) {
      console.error("Error retrieving from Web3.Storage:", error);
      throw new Error("Failed to retrieve from Web3.Storage");
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
        {fileList.length > 0 && (
          <div>
            <h2>List of Files:</h2>
            <ul>
              {fileList.map((file) => (
                <li key={file.cid}>
                  {file.name}{" "}
                  <button onClick={() => handleRetrieveButtonClick(file.cid)}>
                    Retrieve
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {retrievedFile && (
          <div>
            <p>Retrieved File:</p>
            <a
              href={URL.createObjectURL(retrievedFile)}
              download={selectedFile.name}
            >
              Download Retrieved File
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default EVault;
