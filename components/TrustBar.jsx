/**
 * TrustBar displays credibility points to build trust with visitors.
 */
export default function TrustBar() {
  const items = [
    {
      title: 'Licensed in Alberta',
      description: 'Professionally accredited REALTOR®',
    },
    {
      title: 'Investor‑Friendly',
      description: 'Deep experience with investment properties',
    },
    {
      title: 'Top Negotiator',
      description: 'Skilled at securing the best deals',
    },
    {
      title: 'Luxury Specialist',
      description: 'Focused on high‑end homes',
    },
  ];
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {items.map((item, idx) => (
          <div key={idx} className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}