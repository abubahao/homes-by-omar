/**
 * AboutSection introduces Omar Abubaha and his experience.
 */
export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-display text-4xl mb-4">About Omar</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Omar Abubaha is a dedicated REALTOR® serving Edmonton’s vibrant market. With years of experience guiding first‑time buyers, sellers and investors, Omar combines market insight, negotiation skill and a genuine passion for helping clients find the right home or investment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Whether you’re purchasing your first condo or acquiring a high‑end estate, Omar’s tailored approach ensures a seamless, rewarding experience. He prides himself on discretion, attention to detail and providing white‑glove service to every client.
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="/livingroom.jpg"
            alt="Luxury living space"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}