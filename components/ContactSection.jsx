/**
 * ContactSection provides contact methods and a message form.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-4 text-center">Get in Touch</h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Ready to talk about your real estate goals? Reach out anytime.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center gap-8 mb-8">
          <a href="tel:7802327978" className="text-primary font-medium">Call: 780‑232‑7978</a>
          <a href="mailto:info@homesbyomar.com" className="text-primary font-medium">Email: info@homesbyomar.com</a>
          <a href="https://wa.me/17802327978" className="text-primary font-medium">WhatsApp</a>
        </div>
        <form
          action="https://formsubmit.co/info@homesbyomar.com"
          method="POST"
          className="grid gap-4"
        >
          <input type="hidden" name="_subject" value="New Contact Message" />
          <input type="hidden" name="_next" value="/thank-you" />
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            required
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-black py-3 rounded-md font-medium hover:bg-primary/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}