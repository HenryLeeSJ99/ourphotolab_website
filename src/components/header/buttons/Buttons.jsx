import "./buttons.css";

export default function Buttons() {
  return (
    <div>
      <nav className="mainmenu">
        <div className="mainmenu-wrapper">
          <ul role="menuitem" className="mainmenu-list">
            <li className="menu-items active" >
              <a href="/main">
                <span className="menu-items-text">
                  <h3>Main</h3>
                </span>
              </a>
            </li>
            <li className="menu-items">
              <a href="/gallery">
                <span className="menu-items-text">
                  <h3>Gallery</h3>
                </span>
              </a>
            </li>
            <li className="menu-items">
              <a href="/about">
                <span className="menu-items-text">
                  <h3>About me</h3>
                </span>
              </a>
            </li>
            <li className="menu-items">
              <a href="/contact">
                <span className="menu-items-text">
                  <h3>Contact</h3>
                </span>
              </a>
            </li>
            <li className="menu-items">
              <a href="/testimonials">
                <span className="menu-items-text">
                  <h3>Testimonials</h3>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
