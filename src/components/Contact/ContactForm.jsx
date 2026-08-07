import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, FileText, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-yellow-200 bg-white p-8 shadow-2xl"
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-300/20 blur-[120px]" />

      <h2 className="text-3xl font-bold text-gray-900">Send Message</h2>

      <p className="mt-3 text-gray-500">
        Fill in your information and we'll get back to you shortly.
      </p>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 rounded-xl border border-green-300 bg-green-50 p-4 text-green-700"
        >
          Your message has been sent successfully.
        </motion.div>
      )}

      <form onSubmit={submitHandler} className="relative mt-10">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Name */}

          <div className="relative">
            <User
              className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
              size={20}
            />

            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-yellow-100 bg-yellow-50/40 py-4 pl-12 pr-4 backdrop-blur-sm transition-all duration-300 outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-200/40"
            />
          </div>

          {/* Email */}

          <div className="relative">
            <Mail
              className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
              size={20}
            />

            <input
              required
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-yellow-100 bg-yellow-50/40 py-4 pl-12 pr-4 backdrop-blur-sm transition-all duration-300 outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-200/40"
            />
          </div>

          {/* Phone */}

          <div className="relative">
            <Phone
              className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
              size={20}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-yellow-100 bg-yellow-50/40 py-4 pl-12 pr-4 backdrop-blur-sm transition-all duration-300 outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-200/40"
            />
          </div>

          {/* Subject */}

          <div className="relative">
            <FileText
              className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500"
              size={20}
            />

            <input
              required
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-yellow-100 bg-yellow-50/40 py-4 pl-12 pr-4 backdrop-blur-sm transition-all duration-300 outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-200/40"
            />
          </div>
        </div>

        {/* Message */}

        <div className="relative mt-6">
          <MessageSquare
            className="absolute left-4 top-6 text-yellow-500"
            size={20}
          />

          <textarea
            required
            rows={7}
            placeholder="Tell us about your project..."
            className="w-full rounded-2xl border border-yellow-100 bg-yellow-50/40 py-4 pl-12 pr-4 backdrop-blur-sm transition-all duration-300 outline-none focus:border-yellow-400 focus:bg-white focus:ring-4 focus:ring-yellow-200/40"
          />
        </div>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.02,
            y: -3,
          }}
          whileTap={{
            scale: 0.97,
          }}
          disabled={loading}
          className="
      mt-8
      flex
      w-full
      items-center
      justify-center
      gap-3
      rounded-2xl
      bg-linear-to-r
      from-yellow-400
      to-yellow-500
      py-4
      text-lg
      font-semibold
      text-black
      shadow-lg
      transition-all
      hover:shadow-yellow-300/50
    "
        >
          {loading ? (
            <>
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
