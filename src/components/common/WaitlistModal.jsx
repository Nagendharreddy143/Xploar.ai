import { useState, useEffect, useCallback, memo } from "react";
import { supabase } from "../../lib/supabase";
import { handleSupabaseError, validateEmail, sanitizeInput } from "../../lib/supabase-utils";

const WaitlistModal = memo(({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [message, setMessage] = useState("");
  const [isSuccess, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showFeatures, setShowFeatures] = useState(true);

  useEffect(() => {
    if (isOpen) {
      // Reset state on open
      setSuccess(false);
      setFormData({ name: "", email: "" });
      setMessage("");
      setShowContent(true);
      setShowFeatures(true);
    } else {
      // Start fade out animation
      setShowContent(false);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setShowContent(false);
    // Wait for animation to finish before calling parent's close function
    setTimeout(onClose, 300);
  }, [onClose]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async () => {
    // Validation
    if (!formData.name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    if (!formData.email || !validateEmail(formData.email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([
          {
            name: sanitizeInput(formData.name),
            email: sanitizeInput(formData.email),
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        setMessage(handleSupabaseError(error));
        return;
      }

      setSuccess(true);
      console.log("Waitlist entry added:", data);
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [formData]);

  const handleTryDemo = useCallback(() => {
    // Close modal and redirect to UPSC app
    handleClose();
    setTimeout(() => {
      window.location.href = '/upsc';
    }, 300);
  }, [handleClose]);

  const toggleFeatures = useCallback(() => {
    setShowFeatures(prev => !prev);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleClose]);

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
        className={`bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl transform transition-all duration-300 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
      >
        {!isSuccess ? (
          <div id="modal-initial-state">
            <h4 className="font-poppins text-3xl font-bold text-cosmic-indigo text-center mb-6">
              🚀 UPSC Preparation Platform
            </h4>

            {showFeatures ? (
              <div className="mb-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {/* Phase 1 */}
                  <div className="border rounded-lg p-4 bg-blue-50">
                    <h5 className="font-semibold text-blue-800 mb-2">📚 Phase 1: Learning & Planning</h5>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Day-0 Onboarding & Goal Setting</li>
                      <li>• Auto 100-Day Study Plan</li>
                      <li>• Interactive Study Planner</li>
                      <li>• Multi-Mode Learning (Read/Practice/Explain)</li>
                      <li>• Progress Tracking & Streaks</li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="border rounded-lg p-4 bg-green-50">
                    <h5 className="font-semibold text-green-800 mb-2">🎯 Phase 2: Performance & Evaluation</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Timed Mock Tests with Negative Marking</li>
                      <li>• Debate Practice Rooms</li>
                      <li>• AI Interview Evaluator</li>
                      <li>• 100 Problems Daily Tracker</li>
                      <li>• Leaderboard System</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <button
                    onClick={handleTryDemo}
                    className="bg-electric-aqua text-void-black font-bold px-8 py-3 rounded-lg hover:scale-105 transition-transform mr-4"
                  >
                    🎮 Try Demo Now
                  </button>
                  <button
                    onClick={toggleFeatures}
                    className="bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
                  >
                    Join Waitlist
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-center text-card-text mb-6">
                  Be among the first to access our AI-powered UPSC preparation platform.
                </p>

                <div className="space-y-3">
                  <input
                    id="nameInput"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-lilac focus:outline-none"
                    disabled={isLoading}
                  />

                  <input
                    id="emailInput"
                    name="email"
                    type="email"
                    placeholder="you@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-lilac focus:outline-none"
                    disabled={isLoading}
                  />
                </div>

                <div id="modal-message" className="mt-2 text-sm text-red-600 h-5">
                  {message}
                </div>

                <div className="mt-4 flex gap-4 justify-end">
                  <button
                    onClick={toggleFeatures}
                    type="button"
                    className="bg-gray-200 text-gray-700 font-bold px-5 py-2 rounded-lg hover:bg-gray-300 transition"
                    disabled={isLoading}
                  >
                    Back to Features
                  </button>
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className={`bg-electric-aqua text-void-black font-bold px-5 py-2 rounded-lg transition ${isLoading
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:scale-105 transition-transform'
                      }`}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Adding...' : 'Notify Me'}
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div id="modal-success-state" className="text-center">
            <h4 className="font-poppins text-2xl font-bold text-cosmic-indigo">
              You're on the list!
            </h4>
            <p className="mt-2 text-card-text">
              Thank you for joining, {formData.name}! We'll send you an email as soon as we're
              ready.
            </p>
            <div className="mt-6 space-y-3">
              <button
                onClick={handleTryDemo}
                className="w-full bg-electric-aqua text-void-black font-bold px-5 py-2 rounded-lg hover:scale-105 transition-transform"
              >
                🎮 Try Demo Now
              </button>
              <button
                onClick={handleClose}
                type="button"
                className="w-full bg-gray-200 text-gray-700 font-bold px-5 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

WaitlistModal.displayName = 'WaitlistModal';

export default WaitlistModal;
