/**
 * TestimonialsSection displays a few quotes from satisfied clients to build trust and credibility.
 */
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'Omar helped us find our dream home and negotiated an incredible price. His professionalism and market insight are unmatched.',
      author: 'Sarah & Daniel',
    },
    {
      quote:
        'As first‑time investors, we were nervous about entering the real estate market. Omar guided us every step of the way and made the process seamless.',
      author: 'Priya S.',
    },
    {
      quote:
        'We listed our condo with Omar and it sold in under a week for above asking. We couldn’t be happier with the results!',
      author: 'Jason L.',
    },
  ];
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-8 text-center">What Clients Say</h2>
        <div className="space-y-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="text-center max-w-3xl mx-auto">
              <p className="text-xl italic text-gray-800 mb-4 leading-relaxed">
                “{t.quote}”
              </p>
              <p className="text-primary font-medium">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}