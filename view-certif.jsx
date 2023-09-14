import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomNavbar from "../components/navbar";

const API_TOKEN = "your_api_token_here";

const ViewCertif = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const cid =
          "bafybeiasfeuo6oakk44hefgtkyy3wfbpnubbls7xidddvnfvhub5jycxlm";

        const response = await axios.get(`https://ipfs.io/ipfs/${cid}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (response.status === 200) {
          setFiles([response.data]);
        } else {
          console.error("Error fetching files:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <div className="view-cert-container">
      <CustomNavbar />
      <div>
        <h1
          style={{
            color: "white",
            fontSize: "60px",
            marginLeft: "40%",
            marginTop: "2%",
          }}
        >
          View Files
        </h1>
        {loading ? (
          <p>Loading files...</p>
        ) : (
          <ul>
            {files.map((file) => (
              <li key={file.cid}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ViewCertif;
