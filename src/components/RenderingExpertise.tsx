import React from "react";
import { FiEye, FiCpu, FiGitMerge } from "react-icons/fi";

const services = [
  {
    Icon: FiEye,
    title: "3D Visualization",
    description:
      "Deploy beautiful, interactive 3D viewers on any platform — Windows, Linux, macOS, Android, and Web. We support 50+ formats including GLB, STEP, USD, VTK, and point clouds.",
  },
  {
    Icon: FiCpu,
    title: "Scientific Rendering",
    description:
      "Built for engineers who need precision and real-time performance. We turn complex datasets into clear, actionable visualizations without the rendering overhead.",
  },
  {
    Icon: FiGitMerge,
    title: "Pipeline Integration",
    description:
      "Integrate F3D into your CI/CD pipelines, web APIs, or production infrastructure. Generate images from 3D models automatically, in any headless environment.",
  },
];

const RenderingExpertise = (_props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      id="services"
      style={{
        padding: "5rem 2rem",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <span className="section-label">What We Do</span>
        <h2
          style={{
            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
            fontWeight: 800,
            color: "var(--text-color)",
            marginBottom: "1rem",
          }}
        >
          Built for{" "}
          <span className="gradient-text">demanding workflows</span>
        </h2>
        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(250,253,255,0.5)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: "1.75",
          }}
        >
          We are specialists in F3D — the open-source powerhouse behind
          industrial 3D visualization. Here's how we help.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {services.map(({ Icon, title, description }) => (
          <div key={title} className="glass-card">
            <div className="service-icon">
              <Icon size={20} />
            </div>
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-color)",
                marginBottom: "0.75rem",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                color: "rgba(250,253,255,0.55)",
                lineHeight: "1.75",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RenderingExpertise;
