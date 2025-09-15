/**
 * ServicesSection outlines the core services offered: Buy, Sell and Invest.
 */
export default function ServicesSection() {
  const services = [
    {
      title: 'Buy',
      description:
        'Guiding you through every step of the home‑buying process, from search to closing, with local expertise and personalised service.',
    },
    {
      title: 'Sell',
      description:
        'Strategic marketing and skilled negotiation to sell your property quickly and at top value in Edmonton’s dynamic market.',
    },
    {
      title: 'Invest',
      description:
        'Identifying and analysing investment opportunities to grow and diversify your real estate portfolio with confidence.',
    },
  ];
  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-8 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}