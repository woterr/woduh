import React, { useState, useEffect } from "react";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <header
      className={offset >= "100" ? "header active" : "header"}
      id="header"
    >
      <nav className="nav container">
        <div className="nav-logo">
          <a href="/">Woduh</a>
        </div>

        <div className={openNav ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/">Home</a>
            </li>
            <li className="nav-item">
              <a href="/posts">Posts</a>
            </li>
            <li className="nav-item">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav-item mobile-cta nav-mobile-cta">
              <a href="/design">Request design</a>
            </li>
          </ul>
          <i
            className="bx bx-x nav-close mobile-cta"
            onClick={() => setOpenNav(!openNav)}
          ></i>
        </div>

        <a href="/design" className="nav-cta">
          Request design
        </a>
        <i
          class="bx bx-menu-alt-right nav-toggle mobile-cta"
          onClick={() => setOpenNav(!openNav)}
        ></i>
      </nav>
    </header>
  );
}
