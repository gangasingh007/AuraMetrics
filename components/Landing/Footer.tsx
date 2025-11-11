import { 
  BrainCircuitIcon, 
  TwitterIcon, 
  InstagramIcon, 
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  HeartIcon,
  ArrowUpIcon
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'How it works', href: '#howitworks' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Status', href: '/status' },
      { name: 'Community', href: '/community' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Cookies', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: GithubIcon, href: 'https://github.com', label: 'GitHub', color: 'hover:text-foreground' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-t bg-gradient-to-b from-background via-muted/30 to-muted/50">
      {/* Subtle top gradient line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mb-12">
          {/* Brand Section - Wider on desktop */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                <BrainCircuitIcon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                AuraMetrics
              </span>
            </Link>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm">
              Your personal AI companion for mental well-being. Empowering you to take control of your mental health journey.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`
                      p-2.5 rounded-lg bg-muted/50 text-muted-foreground
                      ${social.color}
                      transition-all duration-300
                      hover:scale-110 hover:bg-primary/10 hover:shadow-lg
                      active:scale-95
                    `}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter CTA - Mobile optimized */}
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Subscribe to updates"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  />
                </div>
                <button className="px-4 py-2.5 bg-primary text-background text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:col-span-2 lg:col-span-4">
            {/* Product Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Product</h4>
              <ul className="space-y-2.5">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-45 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Support</h4>
              <ul className="space-y-2.5">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-45 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="font-semibold text-sm sm:text-base text-foreground">Legal</h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{link.name}</span>
                      <ArrowUpIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 -rotate-45 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left flex items-center gap-1.5">
              <span>&copy; 2025 AuraMetrics.</span>
              <span className="hidden sm:inline">Built with</span>
              <HeartIcon className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block animate-pulse" />
              <span className="sm:hidden">Made</span>
              <span>for real people.</span>
            </p>

            {/* Scroll to top button */}
            <button
              aria-label="Scroll to top"
              className="
                p-2.5 rounded-lg bg-muted/50 text-muted-foreground
                hover:bg-primary/10 hover:text-primary hover:scale-110
                transition-all duration-300
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-primary/50
              "
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Trust Indicators (Optional) */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 opacity-60">
            <span className="text-xs text-muted-foreground">🔒 HIPAA Compliant</span>
            <span className="text-xs text-muted-foreground">✓ SSL Secured</span>
            <span className="text-xs text-muted-foreground">🛡️ Data Encrypted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
