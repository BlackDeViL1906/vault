import React, { useEffect } from "react";
import "../assets/css/herosection.css";
import heroimage from "../assets/images/herosecimg.jpg";
import vaultimg from "../assets/images/vault.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="home-container">
      <h1 className="hero-welcome">Welcome to CertiChain</h1>
      <div className="herosec-certif">
        <div>
          <img src={heroimage} className="heroimage"></img>
        </div>
        <div className="hero-content">
          <h1 style={{ color: "white", fontSize: "45px" }}>
            Digital Cert-Chain
          </h1>
          <p
            style={{
              color: "white",
              marginTop: "4%",
              marginLeft: "8%",
              marginRight: "10%",
            }}
          >
            Welcome to CertiChain, your gateway to cutting-edge digital
            certificate solutions powered by blockchain technology. We
            specialize in transforming traditional certificates into secure,
            digital Non-Fungible Tokens (NFTs). With CertiChain, your
            achievements are not just credentials; they're unique, tamper-proof
            digital assets that are globally recognized. Our eco-friendly
            platform not only ensures the authenticity of your certificates but
            also contributes to a sustainable future by eliminating the need for
            paper. Join us today to experience the future of certification where
            security, transparency, and recognition converge seamlessly.
          </p>
          <Link to="/certif-home">
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(184, 53, 184)",
                padding: "10px",
                width: "150px",
                borderRadius: "10px",
                border: "none",
                marginLeft: "8%",
                marginTop: "2%",
              }}
            >
              Get Started{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="herosec-line"></div>
      <div className="herosec-vault">
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "45px",
              marginTop: "4%",
              marginLeft: "10%",
            }}
          >
            Cert-Chain Vault
          </h1>
          <p
            style={{
              color: "white",
              marginTop: "4%",
              marginLeft: "18%",
              marginRight: "10%",
            }}
          >
            Welcome to CertiChain, where we bring you the future of secure
            document management. Our blockchain-based vault offers a
            cutting-edge solution for storing, accessing, and verifying your
            vital certificates and documents. With the power of blockchain's
            immutability, your documents remain tamper-proof and unaltered.
            Whether you need to access your certificates from anywhere,
            instantly verify their authenticity, or simplify interactions with
            institutions and employers through smart contracts, CertiChain has
            you covered. We prioritize your data's security with advanced
            encryption, and our user-friendly interface ensures a seamless
            experience for all users. Choose CertiChain for a trusted partner in
            safeguarding your digital credentials.
          </p>
          <Link to="/blcvault">
            <button
              style={{
                color: "white",
                backgroundColor: "rgb(184, 53, 184)",
                padding: "10px",
                width: "150px",
                borderRadius: "10px",
                border: "none",
                marginLeft: "18%",
                marginTop: "2%",
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img src={vaultimg} className="hero-img" />
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
