import React, { useState } from "react";
import useAos from "../../hooks/useAos";

// Importing the necessary icons from your central file
import {
  MailIcon,
  WhatsAppIcon,
  PhoneIcon,
  CalendarIcon,
  DownloadIcon,
  LocationIcon,
} from "../common/Icons";

// Data for the contact cards
const contactSections = [
  {
    title: "For Learners & Students",
    items: [
      {
        icon: MailIcon,
        label: "Email",
        value: "support@xplorar.ai",
        href: "mailto:support@xplorar.ai",
      },
      {
        icon: WhatsAppIcon,
        label: "WhatsApp",
        value: "+91-XXXXX-XXXXX",
        href: "#",
      },
    ],
    note: "Response Time: Within 2 hours (9 AM - 9 PM IST)",
  },
  {
    title: "For Business & Partnerships",
    items: [
      {
        icon: MailIcon,
        label: "Email",
        value: "partnerships@xplorar.ai",
        href: "mailto:partnerships@xplorar.ai",
      },
      {
        icon: PhoneIcon,
        label: "Call",
        value: "+91-XXXXX-XXXXX",
        href: "tel:+91",
      },
      {
        icon: CalendarIcon,
        label: "Meeting",
        value: "Book a 30-minute strategy call",
        href: "#",
      },
    ],
  },
  {
    title: "For Media & Press",
    items: [
      {
        icon: MailIcon,
        label: "Email",
        value: "media@xplorar.ai",
        href: "mailto:media@xplorar.ai",
      },
      {
        icon: DownloadIcon,
        label: "Press Kit",
        value: "Download our media resources",
        href: "#",
      },
    ],
  },
];

// Reusable Contact Info Card
const ContactInfoCard = ({ title, items, note, delay }) => (
  <div
    className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <h3 className="font-poppins text-xl font-bold text-cosmic-indigo mb-6">
      {title}
    </h3>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-start gap-4">
          <div className="w-10 h-10 bg-electric-aqua/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-electric-aqua" />
          </div>
          <div>
            <p className="text-sm text-gray-500">{item.label}</p>
            <a
              href={item.href}
              className="font-semibold text-card-text hover:text-electric-aqua transition-colors"
            >
              {item.value}
            </a>
          </div>
        </div>
      ))}
    </div>
    {note && (
      <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
        {note}
      </p>
    )}
  </div>
);

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatusMessage(""), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm h-full">
      <h3 className="font-poppins text-xl font-bold text-cosmic-indigo mb-6">
        Send Us a Message Directly
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-md border-gray-200 bg-gray-50 p-4 text-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
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
            className="w-full rounded-md border-gray-200 bg-gray-50 p-4 text-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
            placeholder="Email address"
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full rounded-md border-gray-200 bg-gray-50 p-4 text-sm transition focus:ring-1 focus:ring-cosmic-indigo focus:border-cosmic-indigo"
            placeholder="Your message..."
            rows="5"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-green-600">{statusMessage}</p>
          <button
            type="submit"
            className="px-6 py-3 bg-electric-aqua rounded-lg font-poppins font-bold text-void-black transition hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

const HeadquartersCard = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-full overflow-hidden">
    <div className="p-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-electric-aqua/10 rounded-lg flex items-center justify-center flex-shrink-0">
          <LocationIcon className="w-6 h-6 text-electric-aqua" />
        </div>
        <div>
          <h3 className="font-poppins text-xl font-bold text-cosmic-indigo">
            Our Headquarters
          </h3>
          <p className="text-card-text mt-1">
            Xploar.ai Technologies Pvt Ltd, Hyderabad, Telangana - 500001 🇮🇳
          </p>
        </div>
      </div>
    </div>
    {/* Real Google Map Embed */}
    <iframe
      src="https://maps.google.com/maps?q=18.10,78.85&hl=en&z=15&output=embed"
      width="100%"
      height="256" // h-64
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Siddipet IT Tower Location"
    ></iframe>
  </div>
);

const ContactPage = () => {
  useAos();

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h1 className="font-space-grotesk text-4xl lg:text-5xl font-bold text-cosmic-indigo mb-4">
            Get in Touch with Xploar.ai
          </h1>
          <p className="text-lg text-card-text leading-relaxed">
            Have Questions? We Have Answers. Whether you're a UPSC aspirant, an
            educator, or an investor—we'd love to hear from you.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactSections.map((section, index) => (
              <ContactInfoCard
                key={section.title}
                title={section.title}
                items={section.items}
                note={section.note}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="200">
            <ContactForm />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <HeadquartersCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
