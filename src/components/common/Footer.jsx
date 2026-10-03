import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import { Btn } from "../Btn";


const links = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/cart', 'Cart']
]

function Footer() {
  return (
    <footer className="bg-deep text-sm text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl text-white">Shopnix</p>
          <p className="mt-2 font-script text-xl text-gold">
            Good Food • Great Vibes • Always
          </p>
          <div className="mt-4 flex gap-3">
            {[FaFacebookF, FaInstagram, FaYoutube].map((I, i) => (
              <a
                key={i}
                href="#"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition hover:bg-gold hover:text-deep"
              >
                <I size={13} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Quick Links</p>
          {links.slice(0, 4).map(([t, l]) => (
            <Link key={t} to={t} className="block py-0.5 hover:text-gold">
              {l}
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Contact</p>
          <p className="flex gap-2">
            <Phone size={15} />
            +1 (555) 123-4567
          </p>
          <p className="flex gap-2">
            <Mail size={15} />
            hello@antixor.com
          </p>
          <p className="flex gap-2">
            <MapPin size={15} />
            123 Food Street, New York
          </p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-white">Subscribe</p>
          <input
            placeholder="Your email address"
            className="mb-2 w-full rounded border border-white/20 bg-transparent px-3 py-2"
          />
          <Btn className="w-full justify-center">Subscribe</Btn>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-xs">
        © 2025 Antixor Restaurant. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
