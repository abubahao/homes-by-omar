/**
 * LeadMagnetSection presents the eBook download opt‑in form.
 * Form submissions are sent to formsubmit.co which forwards the details to the specified email.
 */
export default function LeadMagnetSection() {
  return (
    <section id="ebook" className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl mb-4">Get the Free eBook</h2>
        <p className="text-lg text-gray-700 mb-8">
          Download “Top Mistakes People Make When Purchasing Homes” and start your journey prepared.
        </p>
        <form
          action="https://formsubmit.co/info@homesbyomar.com"
          method="POST"
          className="grid gap-4 md:grid-cols-3"
        >
          {/* Subject used in the email heading */}
          <input type="hidden" name="_subject" value="New eBook Lead" />
          {/* Redirect after submission */}
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
          <input
            type="tel"
            name="Phone"
            placeholder="Your Phone"
            required
            className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
          />
          {/* The button spans full width on small screens */}
          <button
            type="submit"
            className="mt-4 md:mt-0 md:col-span-3 bg-primary text-black py-3 rounded-md font-medium hover:bg-primary/80 transition"
          >
            Receive the eBook
          </button>
        </form>
      </div>
    </section>
  );
}