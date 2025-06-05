import { Link } from "wouter";
import logo from "../assets/friiz_white.svg";

const Header = () => {
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link href="/" style={{ color: "var(--text-color)", textDecoration: "none" }}>
          <img src={ logo } alt="friiz" height={40} style={{ margin: "0 20px" }} />
          </Link>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/" style={{ color: "var(--text-color)", textDecoration: "none" }}>Home</Link>
            <Link href="/contact" style={{ color: "var(--text-color)", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;