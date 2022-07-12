import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const logo = "/images/android-chrome-192x192.png";

const NavBar = () => {
  const [path, setPath] = useState("");
  const { pathname } = useRouter();
  const homeLink = useRef();
  const aboutLink = useRef();
  const servicesLink = useRef();
  const packagesLink = useRef();
  const contactLink = useRef();

  useEffect(() => {
    if (pathname.includes("about")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.add("active");
      servicesLink.current.classList.remove("active");
      packagesLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("services")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.add("active");
      packagesLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("testimonials")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      packagesLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("packages")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      packagesLink.current.classList.add("active");
      contactLink.current.classList.remove("active");
    } else if (pathname.includes("contact")) {
      homeLink.current.classList.remove("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      packagesLink.current.classList.remove("active");
      contactLink.current.classList.add("active");
    } else {
      homeLink.current.classList.add("active");
      aboutLink.current.classList.remove("active");
      servicesLink.current.classList.remove("active");
      packagesLink.current.classList.remove("active");
      contactLink.current.classList.remove("active");
    }
  }, [pathname]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
        <div className="container">
          <Link href="/" passHref>
            <div className="navbar-brand d-flex align-items-end">
              <Image height={35} width={35} src={logo} alt="logo" />
            </div>
          </Link>
          <button
            id="navToggler"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center ">
                <Link href="/">
                  <a ref={homeLink} className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <Link href="/about">
                  <a ref={aboutLink} className="nav-link">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <Link href="/services">
                  <a ref={servicesLink} className="nav-link">
                    Services
                  </a>
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <Link href="/packages">
                  <a ref={packagesLink} className="nav-link">
                    Packages
                  </a>
                </Link>
              </li>

              <li className="nav-item d-flex align-items-center ">
                <Link href="/contact">
                  <a ref={contactLink} className="nav-link">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
