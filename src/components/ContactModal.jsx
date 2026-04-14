import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
  const handleSend = () => {
    const email = "robindoirin@gmail.com";
    const subject = "Portfolio Inquiry";

    const message = document.getElementById("contact-message").value;

    // The "Magic" URL
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    // Close the modal after they send
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop: This is the dark overlay */}
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-slate-900 border border-slate-800 w-full max-w-lg p-10 rounded-[2rem] shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <span className="text-2xl">×</span>
        </button>

        <h2 className="text-3xl font-bold text-white mb-2 italic">
          Get in Touch
        </h2>
        <p className="text-slate-400 text-sm mb-8">
          Have a project in mind or just want to chat about React? Drop me a
          line.
        </p>

        <form className="space-y-6">
          <div className="text-left">
            <label className="block text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all"
              placeholder="your@email.com"
            />
          </div>

          <div className="text-left">
            <label className="block text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-2">
              Your Message
            </label>
            <textarea
              id="contact-message"
              rows="4"
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-cyan-500/50 transition-all resize-none"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleSend} // Add this line!
            className="w-full bg-white text-slate-950 font-black py-4 rounded-2xl hover:bg-cyan-400 transition-all hover:scale-[1.01] active:scale-[0.98]"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
