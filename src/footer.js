export default function Nav() {
  return (
    <footer className="footer section" id="footer">
      <div className="container">
        <div>
          <a href="/" className="footer-logo">
            Woduh
          </a>
          <p className="footer-description">
            I'm a front-end web developer who loves creating flawless web
            applications and websites
          </p>
        </div>
        <div className="footer-content">
          <div>
            <h3 className="footer-title">Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/posts">Posts</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/design">Design</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Socials</h3>
            <ul className="footer-social">
              <li>
                <a
                  href="https://github.com/woterr"
                  className="footer-social-link"
                  target="_blank"
                >
                  <i class="bx bxl-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/users/581048093412425750/"
                  className="footer-social-link"
                  target="_blank"
                >
                  <i class="bx bxl-discord-alt"></i>
                </a>
              </li>
              <li>
                <a
                  href="mailto:im.woterr@gmail.com"
                  className="footer-social-link"
                  target="_blank"
                >
                  <i class="bx bxs-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
