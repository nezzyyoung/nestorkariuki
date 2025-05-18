import React, { useState } from "react";
import { Instagram, Linkedin, Mail, Phone, Send, Twitch, Twitter, Youtube } from "lucide-react";
import { cn } from "../lib/utils";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Please fill in all fields.");
      setIsSending(false);
      return;
    }

    emailjs
      .send(
        "service_qqs3jjh", // Replace with your EmailJS service ID
        "template_n99ndrk", // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "3mXYMEZ1KZCHUyEza" // Replace with your EmailJS user ID (public key)
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setIsSending(false);
        },
        () => {
          setStatusMessage("Failed to send message. Please try again later.");
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6"> Contact Information </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Email Me</h4>
                  <a
                    href="mailto:nezzybucumi@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    nezzubucumi@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Phone Me</h4>
                  <a
                    href="tel:+254796627375"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +254 796 62 73 75
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium"> Reach out </h4>
                  <a
                    href="https://www.linkedin.com/in/nestor-bucumi-abdiyah/"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Nestor Kariuki
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me </h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.instagram.com/untamedcountdown/" target="_blank" rel="noreferrer">
                  <Instagram />
                </a>
                <a href="https://www.youtube.com/@nezzyyoung" target="_blank" rel="noreferrer">
                  <Youtube />
                </a>
                <a href="https://x.com/nezzy__young?s=21" target="_blank" rel="noreferrer">
                  <Twitter />
                </a>
                <a>
                  <Twitch />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Abdiyah Shalom.."
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="hello@example.com.."
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 ">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello there.."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
                disabled={isSending}
              >
                <Send size={16} />
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
            {statusMessage && (
              <p className="mt-4 text-center text-sm text-primary">{statusMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
