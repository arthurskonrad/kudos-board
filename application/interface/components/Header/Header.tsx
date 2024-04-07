import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>Kudos Board</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/panels">Panels</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
