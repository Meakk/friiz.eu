import React, { FormEvent, useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact(props: React.HTMLAttributes<HTMLDivElement>) {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending...");

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "94c33277-8883-40d7-9615-5b84b31c09b9");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data: { success: boolean; message: string } = await response.json();

            if (data.success) {
                setResult("Message sent! We'll be in touch soon.");
                form.reset();
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission failed", error);
            setResult("An error occurred. Please try again.");
        }
    };

    const inputStyle: React.CSSProperties = {
        padding: "0.875rem 1rem",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        fontSize: "0.95rem",
        background: "rgba(255,255,255,0.04)",
        color: "var(--text-color)",
        fontFamily: "'Albert Sans', sans-serif",
        width: "100%",
        boxSizing: "border-box",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    };

    return (
        <div
            {...props}
            style={{
                maxWidth: "1280px",
                margin: "0 auto",
                padding: "5rem 2rem 6rem",
                ...props.style,
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "5rem",
                    alignItems: "start",
                }}
            >
                {/* Left: info panel */}
                <div>
                    <span className="section-label">Contact</span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                            fontWeight: 800,
                            color: "var(--text-color)",
                            marginBottom: "0.5rem",
                            lineHeight: "1.2",
                        }}
                    >
                        Let's build something{" "}
                        <span className="gradient-text">together</span>
                    </h2>
                    <div className="section-divider" />
                    <p
                        style={{
                            color: "rgba(250,253,255,0.55)",
                            lineHeight: "1.8",
                            fontSize: "1rem",
                            marginBottom: "2.5rem",
                        }}
                    >
                        F3D is much more than just a 3D viewer. It's a powerful open-source framework for building high-performance 3D applications.
                        Whether you need a custom 3D viewer, scientific visualization tooling, or enterprise F3D support — we'd love to hear from you.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <a
                            href="mailto:contact@friiz.eu"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.85rem",
                                color: "rgba(250,253,255,0.7)",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                transition: "color 0.2s ease",
                            }}
                        >
                            <span className="service-icon" style={{ width: "36px", height: "36px", borderRadius: "8px", marginBottom: 0, flexShrink: 0 }}>
                                <FaEnvelope size={13} />
                            </span>
                            contact@friiz.eu
                        </a>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.85rem",
                                color: "rgba(250,253,255,0.7)",
                                fontSize: "0.95rem",
                            }}
                        >
                            <span className="service-icon" style={{ width: "36px", height: "36px", borderRadius: "8px", marginBottom: 0, flexShrink: 0 }}>
                                <FaMapMarkerAlt size={13} />
                            </span>
                            Lyon, France
                        </div>
                    </div>
                </div>

                {/* Right: form */}
                <div className="glass-card">
                    <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            style={inputStyle}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            style={inputStyle}
                        />
                        <textarea
                            name="message"
                            placeholder="Tell us about your project..."
                            required
                            style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                        />
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center" }}
                        >
                            Send Message
                        </button>
                    </form>
                    {result && (
                        <p
                            style={{
                                marginTop: "1rem",
                                textAlign: "center",
                                fontSize: "0.875rem",
                                color: result.includes("sent") ? "#4ade80" : "rgba(250,253,255,0.55)",
                                margin: "1rem 0 0",
                            }}
                        >
                            {result}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
