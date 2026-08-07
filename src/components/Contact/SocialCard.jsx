import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const SocialCard = () => {
  return (
    <div className="rounded-3xl bg-linear-to-r from-yellow-400 to-yellow-300 p-10">
      <h2 className="text-3xl font-bold">Follow Us</h2>

      <p className="mt-3 text-gray-800">Stay connected with us.</p>

      <div className="mt-8 flex gap-5">
        {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
          (Icon, index) => (
            <button
              key={index}
              className="rounded-full bg-white p-4 transition hover:-translate-y-2"
            >
              <Icon size={20} />
            </button>
          ),
        )}
      </div>
    </div>
  );
};

export default SocialCard;
