import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-[#00a3ff] via-[#4cff00] to-[#00a3ff]" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adorn Soft Tech</h3>
            <p className="text-gray-400">
              Empowering businesses with innovative tech solutions in Fort Portal, Uganda.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-[#4cff00] hover:pl-2 transition-all duration-300 inline-block">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[#4cff00] hover:pl-2 transition-all duration-300 inline-block">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-[#4cff00] hover:pl-2 transition-all duration-300 inline-block">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#4cff00] hover:pl-2 transition-all duration-300 inline-block">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Website Development</li>
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">CCTV Installation</li>
              <li className="text-gray-400">Network Solutions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-[#00a3ff] hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Adorn Soft Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
