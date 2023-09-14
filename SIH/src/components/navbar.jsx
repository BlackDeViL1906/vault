import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "../assets/css/navbar.css";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showBasic, setShowBasic] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // console.log(localStorage.getItem("accId"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setScrolling(currentScrollPos > prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  return (
    <MDBNavbar
      expand="lg"
      dark
      className={`nav-container ${scrolling ? "scrolling" : ""}`}
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
            src={logo}
            style={{ height: "55px", width: "170px", marginRight: "10px" }}
            alt="Logo"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav
            className="mr-auto mb-2 mb-lg-0 "
            style={{ marginTop: "0.7%", fontSize: "17px" }}
          >
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Features
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link
                      to="/verify-cert"
                      style={{
                        color: "gray",
                        marginLeft: "10%",
                      }}
                    >
                      Verify Certificate
                    </Link>
                  </MDBDropdownItem>

                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              ></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default CustomNavbar;
