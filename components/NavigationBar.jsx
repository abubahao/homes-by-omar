/**
 * NavigationBar renders the sticky top navigation with section links and contact information.
 */
export default function NavigationBar() {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Listings', href: '#listings' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="fixed inset-x-0 top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo / site name */}
        <a href="#" className="font-display text-2xl font-semibold text-primary">
          Homes by Omar
        </a>
        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-800 hover:text-primary font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Contact info */}
        <div className="hidden md:block text-sm">
          <a href="tel:7802327978" className="text-primary font-medium">
            780‑232‑7978
          </a>
        </div>
      </div>
    </nav>
  );
}