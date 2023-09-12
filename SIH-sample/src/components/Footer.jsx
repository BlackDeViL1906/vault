import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <MDBFooter className="footer-container">
      <MDBContainer className="p-4 pb-0">
        <div className="icons-sec">
          <section className="mb-4">
            <MDBBtn
              floating
              className="smedia-icon"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              floating
              className="smedia-icon"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              floating
              className="smedia-icon"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              floating
              className="smedia-icon"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              floating
              className="smedia-icon"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>

            <MDBBtn
              floating
              className="smedia-icon"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </section>
        </div>
      </MDBContainer>

      <div className="text-center p-3" style={{ color: "white" }}>
        {new Date().getFullYear()} CertiChain. All rights reserved.
      </div>
    </MDBFooter>
  );
};
export default Footer;
