import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative pt-36">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700"
        >
          Contact Us
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-xl font-semibold  md:text-2xl  leading-tight text-gray-900 lg:text-5xl"
        >
          Let's Build <span className="text-yellow-500">Something</span> <br /> <span className="text-yellow-500">Amazing</span> Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto px-4 mt-5 max-w-2xl lg:text-lg leading-8 text-gray-500"
        >
          Tell us about your project and our team will contact you within 24
          hours.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactHero;
