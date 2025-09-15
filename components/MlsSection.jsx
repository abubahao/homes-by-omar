/**
 * MlsSection embeds an Edmonton MLS® listings feed into the website.  The
 * section contains a heading, a brief description and a responsive iframe
 * where the MLS widget will load.  You should replace the example `src`
 * attribute with the actual embed URL provided by your MLS or IDX vendor.
 *
 * According to RealtyNinja’s documentation, their MLS/IDX widgets can be
 * integrated on any website by copying a simple embed code and pasting it
 * into your HTML【872952495794926†L42-L68】.  The listings are imported and
 * synced multiple times per day with the MLS® feed【872952495794926†L76-L79】,
 * ensuring that your site displays the latest properties automatically.
 */
export default function MlsSection() {
  return (
    <section id="mls" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-6 text-center">
          Edmonton MLS® Listings
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Explore the latest homes for sale directly from the MLS®.  Our feed
          updates automatically as new properties hit the market.
        </p>
        {/* Responsive wrapper maintains a 16:9 aspect ratio for the iframe */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src="https://example.com/embed-your-edmonton-mls-widget"
            title="Edmonton MLS Listings"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          *This is a placeholder embed. Replace the <code>src</code> value
          with your MLS provider’s embed URL to enable the live feed.
        </p>
      </div>
    </section>
  );
}