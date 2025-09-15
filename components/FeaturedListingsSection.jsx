/**
 * FeaturedListingsSection showcases a few example properties with images and brief details.
 * These sample listings help visitors visualise the kinds of luxury homes Omar works with.
 */
export default function FeaturedListingsSection() {
  const listings = [
    {
      title: 'Modern Hillside Villa',
      description:
        'A stunning contemporary villa perched on the hills of Edmonton with panoramic city views and an infinity pool.',
      image: '/villa.jpg',
      price: '$2.5M',
      location: 'Southwest Edmonton',
      status: 'For Sale',
    },
    {
      title: 'Downtown Luxury Condo',
      description:
        'An elegant high‑rise condominium located in the heart of downtown, featuring floor‑to‑ceiling windows and premium finishes.',
      image: '/livingroom.jpg',
      price: '$950K',
      location: 'Downtown Edmonton',
      status: 'For Sale',
    },
  ];
  return (
    <section id="listings" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-8 text-center">Featured Listings</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {listings.map((item, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition"
            >
              {/* Status tag */}
              <span className="absolute top-3 left-3 bg-primary text-black text-xs font-semibold px-3 py-1 rounded-full z-20">
                {item.status}
              </span>
              {/* Property image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{item.location}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}