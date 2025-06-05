import React, { FormEvent, useState } from "react";

export default function Contact(props: React.HTMLAttributes<HTMLDivElement>) {
    const [result, setResult] = useState<string>("");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        // Store the currentTarget in a variable before the async operation
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
                setResult("Form Submitted Successfully");
                form.reset(); // Use the stored form reference
            } else {
                console.error("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission failed", error);
            setResult("An error occurred. Please try again.");
        }
    };

    return (
        <div
            {...props}
            style={{
                maxWidth: "800px", // Increased width
                margin: "3rem auto", // Adjusted margin for better spacing
                padding: "3rem", // Increased padding
                background: "var(--background-color)", // Dark background matching the theme
                borderRadius: "12px", // Slightly larger border radius
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)", // Stronger shadow for depth
                color: "var(--text-color)", // Text color matching the theme
            }}
        >
            <h2 style={{ textAlign: "center", color: "var(--primary-color)", marginBottom: "1.5rem" }}>
                Contact Us
            </h2>
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    style={{
                        padding: "1rem",
                        border: "1px solid var(--primary-color)",
                        borderRadius: "6px",
                        fontSize: "1.1rem",
                        background: "var(--background-color)",
                        color: "var(--text-color)",
                    }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    style={{
                        padding: "1rem",
                        border: "1px solid var(--primary-color)",
                        borderRadius: "6px",
                        fontSize: "1.1rem",
                        background: "var(--background-color)",
                        color: "var(--text-color)",
                    }}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    style={{
                        padding: "1rem",
                        border: "1px solid var(--primary-color)",
                        borderRadius: "6px",
                        fontSize: "1.1rem",
                        background: "var(--background-color)",
                        color: "var(--text-color)",
                        minHeight: "150px",
                    }}
                ></textarea>
                <button
                    type="submit"
                    style={{
                        padding: "1rem",
                        background: "var(--primary-color)",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "1.1rem",
                        cursor: "pointer",
                        transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--secondary-color)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--primary-color)")}
                >
                    Submit Form
                </button>
            </form>
            <span style={{ display: "block", marginTop: "1.5rem", textAlign: "center", color: "var(--text-color)" }}>
                {result}
            </span>
        </div>
    );
}
