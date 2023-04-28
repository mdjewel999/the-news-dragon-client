import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {


  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt=""/>
        <p>
          <small className="text-secondary">
            Journalism Without Fear or Favour
          </small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={25}>
        Experts warn of new cyber attack targeting global financial institutions
Study finds significant progress in cancer research, leading to potential breakthroughs
World Health Organization announces global initiative to combat new strain of flu
UN peacekeeping mission extends mandate in conflict-ridden region
Tech giants face new antitrust investigations over alleged monopolistic practices
Sports fans outraged as major league baseball players strike for better pay
Climate change worsens as Arctic sea ice reaches record low for third consecutive year
Major airlines announce plans to launch supersonic commercial flights
Pop star's latest album breaks streaming records, sets new industry standards
World leaders convene for summit on global economic recovery and trade agreements.
        </Marquee>
      </div>
   
    </Container>
  );
};

export default Header;
