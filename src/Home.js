
import AOS from "aos"
import Navbar from "./nav";
import projects from "./Data/projects.json";
import { useState } from "react";

AOS.init()

function App() {
  const [dropdownActive, setDropdownActive] = useState(true);
  return (
    <div>
      <Navbar />
      <section className="section">
        <div className="container home">
          <div className="container-data home">
            <h1 className="title">
              I bring <br /> web concepts <br /> to reality.
            </h1>
            <p className="description">
              I'm a front-end web developer who loves creating flawless
              websites.
            </p>
            <div className="buttons home">
              <a href="/" className="button-primary">
                View posts
              </a>
              <a href="/" className="button-secondary">
                Contact me
              </a>
            </div>
          </div>
          <div className="container-elements home">
            <div className="element-profile">
              <div className="element-profile-img">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                  alt=""
                />
              </div>
              <div>
                <h1 className="element-title">Ottilia Mynte</h1>
                <p className="element-description">
                  Do you want to be a part of our venture? We are available.
                </p>
                <div className="element-buttons">
                  <span className="element-button">Open</span>
                  <span className="element-button-primary">Cancel</span>
                </div>
              </div>
            </div>
            <div className="element-list">
              <ul>
                <li className="element-list-item">
                  <div className="element-checkbox-wrap">
                    <input
                      type="checkbox"
                      className="element-checkbox"
                      checked
                    ></input>
                    <span className="element-checkmark">
                      <i class="bx bx-check"></i>
                    </span>
                  </div>
                  <span>United Kingdom</span>
                </li>
                <li className="element-list-item">
                  <div className="element-checkbox-wrap">
                    <input type="checkbox" className="element-checkbox"></input>
                    <span className="element-checkmark">
                      <i class="bx bx-check"></i>
                    </span>
                  </div>
                  <span>Singapore</span>
                </li>
                <li className="element-list-item">
                  <div className="element-checkbox-wrap">
                    <input type="checkbox" className="element-checkbox"></input>
                    <span className="element-checkmark">
                      <i class="bx bx-check"></i>
                    </span>
                  </div>
                  <span>Germany</span>
                </li>
                <li className="element-list-item">
                  <div className="element-checkbox-wrap">
                    <input type="checkbox" className="element-checkbox"></input>
                    <span className="element-checkmark">
                      <i class="bx bx-check"></i>
                    </span>
                  </div>
                  <span>France</span>
                </li>
              </ul>
            </div>
            <div className="element-logo">
              <img src="./profile.png" alt="" />
            </div>
            <div className="element-dropdown">
              <div
                className={
                  dropdownActive
                    ? "element-dropdown-btn active"
                    : "element-dropdown-btn"
                }
                onClick={(e) => setDropdownActive(!dropdownActive)}
              >
                Choose one <i className="bx bx-chevron-down"></i>
              </div>
              <div
                className={
                  dropdownActive
                    ? "element-dropdown-content active"
                    : "element-dropdown-content"
                }
              >
                <div className="element-dropdown-item">Bruno Holfman</div>
                <div className="element-dropdown-item">Summer rose</div>
                <div className="element-dropdown-item">Chad kerley</div>
              </div>
            </div>
            <div className="element-load">
              <div className="element-load-loader"></div>
            </div>
            <div className="element-text">
              <div className="element-text-inp-wrap">
                <input
                  type="text"
                  className="element-text-inp"
                  id="elementTextInp"
                  placeholder=" "
                />
                <label for="elementTextInp" className="element-text-label">
                  Search
                </label>
              </div>
              <div className="element-text-btn">
                <i class="bx bx-search-alt-2"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="container projects"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
