import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ color: "var(--footer-text-color)", padding: "1rem", textAlign: "center" }}>
      <h3>About Us</h3>
      <p>
        <span style={{ display: "inline-flex", alignItems: "center" }}><FaEnvelope style={{ marginRight: "0.5rem" }} /><a href="mailto:contact@friiz.eu">contact@friiz.eu</a></span>
        <span style={{ margin: "0 0.5rem" }}>|</span>
        <span style={{ display: "inline-flex", alignItems: "center" }}><FaPhoneAlt style={{ marginRight: "0.5rem" }} /><a href="tel:+33603783967">+33 6 03 78 39 67</a></span>
        <span style={{ margin: "0 0.5rem" }}>|</span>
        <span style={{ display: "inline-flex", alignItems: "center" }}><FaMapMarkerAlt style={{ marginRight: "0.5rem" }} />Lyon, France</span>
      </p>
      <p>Copyright &copy; {new Date().getFullYear()} Friiz.eu</p>
    </footer>
  );
};

export default Footer;
