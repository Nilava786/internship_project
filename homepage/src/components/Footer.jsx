import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4 bg-primary">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">APPLE MART</h5>
            <p>
              Suite 642 620 Cindy Trail, Gusikowskiview, NC 56532
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home" className="text-white">Home</a>
              </li>
              <li>
                <a href="/products" className="text-white">Product</a>
              </li>
              <li>
                <a href="/about" className="text-white">About</a>
              </li>
              <li>
                <a href="/contact" className="text-white">Contact</a>
              </li>
              <li>
                <a href="/terms" className="text-white">T & C</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com" className="text-white"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
