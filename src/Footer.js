import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Link to="/contact">
      <div className="footer" >
        <span >
          © 2023 E Ma. All rights reserved.
        </span>
      </div>
    </Link>
  );
}
export default Footer;