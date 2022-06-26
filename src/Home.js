import { useState } from "react";
import projects from "./Data/projects.json";

function App() {
  return (
    <div>
      <section className="section">
        <div className="container hero">
          <div className="hero-img-wrap">
            <div className="hero-img">
              {/* <img src="./hero-img.png" alt="" className="hero-img-pc" />
            <img
              src="./hero-img-mobile.png"
              alt=""
              className="hero-img-mobile"
            /> */}
              <div className="hero-img-div"></div>
              <div className="hero-img-div"></div>
              <div className="hero-img-div"></div>
              <div className="hero-img-div">
                WEB <br /> DEV
              </div>
              <div className="hero-img-div">
                Bring your ideas <br /> to reality
              </div>
              <div className="hero-img-div">
                <img src="./fancy-ball.png" alt="profile" />
                <span>
                  WEB DESIGNER <br /> UI/UX DESIGNER
                </span>
              </div>
              <div className="hero-img-div"></div>
            </div>
          </div>
          <div className="container-data hero">
            <h1 className="title">
              I Design <br /> your vision
            </h1>
            <div className="buttons hero">
              <a href="/posts" className="button">
                View posts
              </a>
              <div className="external-link-wrap">
                <i class="bx bx-arrow-back"></i>
              </div>
            </div>
            <ul className="hero-container-data">
              <li>
                <h1 className="number">01</h1>
                <h3 className="li-title">Get the required data</h3>
                <span className="li-duration">20 min</span>
              </li>
              <li>
                <h1 className="number">02</h1>
                <h3 className="li-title">Make a template on Figma</h3>
                <span className="li-duration">2 hrs</span>
              </li>
              <li>
                <h1 className="number">03</h1>
                <h3 className="li-title">Design it using HTML, CSS, etc.</h3>
                <span className="li-duration">1 day</span>
              </li>
              <li>
                <h1 className="number">04</h1>
                <h3 className="li-title">Host it on a web server</h3>
                <span className="li-duration">30 min</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="container projects">
            <h1 className="title fancy">Note-worthy projects</h1>
            <ul className="projects-grid">
              {projects.map((e) => (
                <li className="projects-item">
                  <div className="project-inner">
                    <header>
                      <div className="project-top">
                        <div className="folder">
                          {e.type === "website" && <i class="bx bx-world"></i>}
                          {e.type === "folder" && <i class="bx bx-folder"></i>}
                        </div>
                        <div className="project-links">
                          {e.githubLink && (
                            <a href={e.githubLink}>
                              <i class="bx bxl-github"></i>
                            </a>
                          )}
                          {e.url && (
                            <a href={e.url}>
                              <i class="bx bx-link"></i>
                            </a>
                          )}
                        </div>
                      </div>
                      <h3 className="project-title">
                        <a
                          href={e.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {e.title}
                        </a>
                      </h3>
                      <div className="project-description">
                        <p>{e.description}</p>
                      </div>
                    </header>
                    <footer>
                      <ul className="project-tech-list">
                        {e.tagA && <li>{e.tagA}</li>}
                        {e.tagB && <li>{e.tagB}</li>}
                        {e.tagC && <li>{e.tagC}</li>}
                      </ul>
                    </footer>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
