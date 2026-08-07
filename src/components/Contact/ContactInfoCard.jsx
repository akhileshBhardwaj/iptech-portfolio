import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const data = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@iptech.in",
  },
  {
    icon: MapPin,
    title: "Location",
    value: " Varanasi - Pandeypur, Paharia,",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat : 9 AM - 7 PM",
  },
];

const ContactInfoCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
        Contact Information
      </span>

      <h2 className="mt-6 text-2xl md:text-3xl font-semibold  text-gray-900 lg:text-4xl lg:font-bold">
        Get In <span className="text-yellow-500">Touch</span>
      </h2>

      <p className="mt-5 max-w-lg text-md lg:text-lg leading-8 text-gray-500">
        We'd love to hear about your project. Reach out anytime and our team
        will respond within 24 hours.
      </p>

      <div className="mt-12 space-y-6">
        {data.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-yellow-200
                bg-white/90
                backdrop-blur-md
                p-6
                shadow-lg
                transition-all
                duration-500
                hover:border-yellow-400
                hover:shadow-2xl
              "
            >
              {/* Glow */}

              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-yellow-300/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="flex items-center gap-5">
                {/* Icon */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-yellow-400
                    text-black
                    shadow-lg
                    transition-all
                    duration-500
                    group-hover:rotate-12
                    group-hover:scale-110
                  "
                >
                  <Icon size={28} />
                </div>

                {/* Content */}

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-500">{item.value}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfoCard;
