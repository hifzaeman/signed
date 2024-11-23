import "./nav-styles.css";

function Nav() {
  return (
    <div className="main-nav">
      <h4>Signify</h4>
      <ul className="nav-links">
        <li>
          {" "}
          <a href=".home">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href=".home">About</a>
        </li>
        <li>
          {" "}
          <a href=".home">Get Started</a>
        </li>
        <li>
          {" "}
          <a href=".home">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
