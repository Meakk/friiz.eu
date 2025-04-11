import React from "react";
import { useLocation } from "wouter"; // Import the useLocation hook from wouter

const ThreeColumnText = () => {
  const [, navigate] = useLocation(); // Initialize the navigate function

  const columns = [
    {
      title: "Column 1",
      text: "This is a small paragraph for the first column. It provides some brief information.",
      route: "/page1", // Route for the first card
    },
    {
      title: "Column 2",
      text: "This is a small paragraph for the second column. It provides some additional details.",
      route: "/page2", // Route for the second card
    },
    {
      title: "Column 3",
      text: "This is a small paragraph for the third column. It wraps up the information.",
      route: "/page3", // Route for the third card
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "space-between",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      {columns.map((column, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            padding: "1.5rem",
            borderRadius: "8px",
            background: "transparent",
            backdropFilter: "blur(10px)",
            border: "2px solid var(--primary-color)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "pointer", // Add a pointer cursor to indicate it's clickable
          }}
          onClick={() => navigate(column.route)} // Navigate to the route on click
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>{column.title}</h3>
          <p>{column.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ThreeColumnText;