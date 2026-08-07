const ContactMap = () => {
  return (
    <section className="bg-[#FFFDF8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Our Location
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            Visit Our <span className="text-yellow-500">Office</span>
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-yellow-200 shadow-2xl">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28847.034357574907!2d82.98241118680349!3d25.34183113506093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2f881a620663%3A0x2127901a22b00fb4!2sIPTECH%20DIGITAL%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1782884178358!5m2!1sen!2sin"
            className="h-125 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
