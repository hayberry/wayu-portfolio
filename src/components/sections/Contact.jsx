import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const PUBLIC_KEY = "-x7WaFPtjWIqOPofL";
    console.log(formData.name, formData.email, formData.message);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        "#contactForm",
        PUBLIC_KEY
      )
      .then((result) => {
        toast("Message Sent");
        // alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) =>
        toast.error("Oops Something Went Wrong. Please try again")
      );
  };
  return (
    <section
      id="contact"
      className="min-h-screen  flex items-center justify-center"
    >
      <RevealOnScroll>
        <div className="px w-80 md:w-150">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-yellow-800 bg-clip-text text-center text-transparent">
            Get In Touch
          </h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="relative my-3">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-amber-500 focus:bg-blue-500/5"
                placeholder="Enter your name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative my-3">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-amber-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative my-3">
              <textarea
                type="text"
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-amber-500 focus:bg-blue-500/5"
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full text-white py-3 px-6 cursor-pointer rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
            <ToastContainer position="top-right" />
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
