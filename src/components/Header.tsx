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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
          <Link href="/" style={{ color: "var(--text-color)", textDecoration: "none", display: "flex" }}>
            <img src={logo} alt="friiz" height={34} style={{ display: "block" }} />
          </Link>
          <div style={{ display: "flex", gap: "1.75rem" }}>
            <a
              href="#hero"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("hero");
              }}
            >
              Home
            </a>
            <a
              href="#services"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("services");
              }}
            >
              Services
            </a>
          </div>
        </div>

        <button
          className="btn-primary"
          style={{ padding: "0.55rem 1.4rem", fontSize: "0.875rem" }}
          onClick={() => handleScroll("contact")}
        >
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Header;