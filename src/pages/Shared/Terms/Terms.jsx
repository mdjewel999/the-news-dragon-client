import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h1>Terms and Conditions</h1>
      <p>Here you can include the full text of your Terms and Conditions.</p>
      <p>You may want to break the text into sections for easier reading.</p>
      <p>
        Make sure to include any necessary disclaimers, limitations of
        liability, and other legal language required to protect your business.
      </p>

      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </Container>
  );
};

export default Terms;
