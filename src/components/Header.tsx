import { Link } from "wouter";
import logo from "../assets/friiz_white.svg";

const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link href="/" style={{ color: "var(--text-color)", textDecoration: "none" }}>
            <img src={logo} alt="friiz" height={40} style={{ margin: "0 20px" }} />
          </Link>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleScroll("hero");
              }}
              style={{ color: "var(--text-color)", textDecoration: "none" }}
            >
              Home
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleScroll("contact");
              }}
              style={{ color: "var(--text-color)", textDecoration: "none" }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;