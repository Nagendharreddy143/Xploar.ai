import { useState, useEffect } from "react";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset state on open
      setSuccess(false);
      setEmail("");
      setMessage("");
      setShowContent(true);
    } else {
      // Start fade out animation
      setShowContent(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowContent(false);
    // Wait for animation to finish before calling parent's close function
    setTimeout(onClose, 300);
  };

  const handleSubmit = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("");
    console.log("Submitted email:", email);
    setSuccess(true);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      id="modal"
      onClick={handleClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
      aria-modal="true"
      role="dialog"
    >
      <div
        id="modal-content"
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {!isSuccess ? (
          <div id="modal-initial-state">
            <h4 className="font-poppins text-2xl font-bold text-cosmic-indigo">
              Join the waitlist
            </h4>
            <p className="mt-2 text-card-text">
              Enter your email and we'll notify you when early access opens.
            </p>
            <input
              id="emailInput"
              type="email"
              placeholder="you@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-lilac focus:outline-none"
            />
            <div id="modal-message" className="mt-2 text-sm text-red-600 h-5">
              {message}
            </div>
            <div className="mt-4 flex gap-4 justify-end">
              <button
                onClick={handleClose}
                type="button"
                className="bg-gray-200 text-gray-700 font-bold px-5 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                type="button"
                className="bg-electric-aqua text-void-black font-bold px-5 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                Notify Me
              </button>
            </div>
          </div>
        ) : (
          <div id="modal-success-state" className="text-center">
            <h4 className="font-poppins text-2xl font-bold text-cosmic-indigo">
              You're on the list!
            </h4>
            <p className="mt-2 text-card-text">
              Thank you for joining. We'll send you an email as soon as we're
              ready.
            </p>
            <button
              onClick={handleClose}
              type="button"
              className="mt-6 w-full bg-electric-aqua text-void-black font-bold px-5 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
