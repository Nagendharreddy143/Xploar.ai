import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setStatusMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setStatusMessage("");
    }, 3000);
  };

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Panel */}
          <div
            className="lg:col-span-1 bg-cosmic-indigo text-white p-8 rounded-2xl flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div>
              <h2 className="font-space-grotesk text-3xl font-bold">
                Let's Connect
              </h2>
              <p className="mt-2 text-ice-white/80">
                Fill out the form or contact us through one of the channels
                below.
              </p>
              <div className="mt-10 space-y-6">
                {/* Email and Office info */}
              </div>
            </div>
            <div className="mt-10 flex space-x-4">{/* Social Icons */}</div>
          </div>

          {/* Contact Form Panel */}
          <div
            className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
            data-aos="fade-left"
          >
            <h2 className="font-poppins text-3xl font-bold text-cosmic-indigo mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name, Email, Subject, Message inputs */}
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-md border-gray-200 bg-white p-4 pr-12 text-sm shadow-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
                  placeholder="Full Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-md border-gray-200 bg-white p-4 pr-12 text-sm shadow-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full rounded-md border-gray-200 bg-white p-4 pr-12 text-sm shadow-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
                  placeholder="Subject"
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border-gray-200 bg-white p-4 pr-12 text-sm shadow-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
                  placeholder="Your message..."
                  rows="6"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="mt-2 text-sm h-5 text-green-600">
                {statusMessage}
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-electric-aqua px-8 py-3 font-poppins font-bold text-void-black transition hover:bg-neon-lilac hover:text-white focus:outline-none focus:ring focus:ring-neon-lilac/50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
