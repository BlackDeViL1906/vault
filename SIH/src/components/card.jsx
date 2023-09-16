import React from "react";
import "../assets/css/card.css";

const CardComp = ({ file }) => {
  const viewLink = `https://ipfs.io/ipfs/${file.cid}`;

  return (
    <div className="file-card">
      <div className="file-name">{file.name}</div>
      <div className="file-cid">CID: {file.cid}</div>
      <div className="file-size">Size: {file.dagSize} bytes</div>
      <h5 style={{ marginLeft: "-10%" }}>
        NFT ID : uiu456YGBtvhs78vUbYhRcU7BFy
      </h5>
      <div className="side-view-button">
        <a href={viewLink} target="_blank" rel="noopener noreferrer">
          <button className="view-button">View File</button>
        </a>
        <button className="download-button">Download</button>
      </div>
    </div>
  );
};

export default CardComp;
