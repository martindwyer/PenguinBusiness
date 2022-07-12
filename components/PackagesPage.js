import React, { Component } from "react";

import PackagesAccordion from "./packages/PackagesAccordion";
import Seo from "./layout/Seo";

class PackagesPage extends Component {
  render() {
    return (
      <section id="faq" className="faq">
        <Seo title="Tour Packages" />
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold">Tour Packages</h1>
            <div className="heading-line"></div>
            <p className="lead">An overview of our tour packages</p>
          </div>

          <PackagesAccordion />
        </div>
      </section>
    );
  }
}

export default PackagesPage;
