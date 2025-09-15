/**
 * MlsSection embeds an MLS® listings feed into the website. The
 * section contains a heading, a brief description and a responsive
 * iframe where the MLS widget will load. Instead of hard‑coding the
 * `src` attribute, the embed URL is read from the environment at
 * runtime. This allows you to configure the URL via Vercel’s
 * environment variables without modifying the code.
 *
 * To use this component:
 * 1. Set the `NEXT_PUBLIC_MLS_IFRAME_SRC` environment variable in
 *    your `.env.local` file or through the Vercel dashboard. This
 *    value should be the full `https://` URL provided by your MLS
 *    vendor or IDX provider.
 * 2. Deploy your project. The iframe will render your live MLS
 *    search/feed.
 */
export default function MlsSection() {
  // Read the embed URL from the environment. If the variable isn’t set,
  // fall back to a placeholder URL so the page continues to render.
  const embedUrl = process.env.NEXT_PUBLIC_MLS_IFRAME_SRC ||
    "https://example.com/embed-your-edmonton-mls-widget";

  return (
    <section id="mls" className="bg-gray-50 py-20">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-6 text-center">
          Edmonton MLS® Listings
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Explore the latest homes for sale directly from the MLS®. Our feed
          updates automatically as new properties hit the market.
        </p>
        {/* Responsive wrapper maintains a 16:9 aspect ratio for the iframe */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={embedUrl}
            title="Edmonton MLS® Listings"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          {/* Show a hint when using the placeholder so it’s clear to update the env */}
          {embedUrl.includes('example.com') && (
            <>
              This is a placeholder embed. Set the <code>NEXT_PUBLIC_MLS_IFRAME_SRC</code> environment variable with
              your MLS provider’s embed URL to enable the live feed.
            </>
          )}
        </p>
      </div>
    </section>
  );
}