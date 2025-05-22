import React from "react";

const RenderingExpertise = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      {...props}
      style={{
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--primary-color)" }}>Our Expertise</h2>
      <p style={{ fontSize: "1.25rem", maxWidth: "800px", margin: "1rem auto" }}>
        At <strong>Friiz</strong>, we specialize in cutting-edge <strong>3D rendering</strong> solutions. Our team is dedicated to
        delivering high-quality visualizations, enabling seamless integration of 3D assets into your projects. Whether it's for
        scientific visualization, machine learning, or creative rendering, we bring your ideas to life with precision and innovation.
      </p>
    </section>
  );
};

export default RenderingExpertise;
