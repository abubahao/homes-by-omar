/**
 * Footer displays basic copyright information and social links.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {year} Homes by Omar. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Instagram
          </a>
          <a
            href="https://tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            TikTok
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}