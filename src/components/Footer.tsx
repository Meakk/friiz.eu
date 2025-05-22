import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ color: "var(--footer-text-color)", padding: "1rem", textAlign: "center" }}>
      <h3>About Us</h3>
      <p>
        <FaPhoneAlt style={{ marginRight: "0.5rem" }} /> +33 6 03 78 39 67{" "}
        <span style={{ margin: "0 0.5rem" }}>|</span>{" "}
        <FaMapMarkerAlt style={{ marginRight: "0.5rem" }} /> Lyon, France
      </p>
      <p>Copyright &copy; {new Date().getFullYear()} Friiz.eu</p>
    </footer>
  );
};

export default Footer;
