'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ChevronDown, X, Menu } from 'lucide-react'
import { theme } from '@/app/constants/theme'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: 'About Us', href: '/aboutus' },
    { name: 'Carriers', href: '/carriers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contactus' },
  ]

  const serviceLinks = [
    { name: '📦 All Services', href: '/services', desc: 'Explore our full range' },
    { name: '🏢 B2B Shipping', href: '/b2b-shipping', desc: 'Business to business' },
    { name: '🚚 Domestic Shipping', href: '/domestic-shipping', desc: 'Across India' },
  ]

  const isActive = (href) => pathname === href

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        .hdr-root {
          font-family: 'Outfit', 'Segoe UI', sans-serif;
          position: sticky; top: 0; z-index: 50; width: 100%;
          transition: all .3s ease;
        }
        .hdr-root.scrolled .hdr-inner {
          background: rgba(255,255,255,.97);
          box-shadow: 0 4px 32px rgba(0,0,0,.1);
          border-bottom-color: rgba(0,0,0,.06);
        }
        .hdr-inner {
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(20px);
          border-bottom: 1.5px solid rgba(0,0,0,.04);
          transition: all .3s ease;
        }
        .hdr-wrap {
          max-width: 1280px; margin: 0 auto;
          padding: 0 28px;
          display: flex; align-items: center; justify-content: space-between;
          height: 72px;
        }

        /* Nav link base */
        .nav-link {
          position: relative; font-size: 14px; font-weight: 600;
          color: #374151; text-decoration: none;
          padding: 6px 2px; transition: color .2s ease;
          white-space: nowrap;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; border-radius: 1px;
          background: linear-gradient(90deg, #FF6B2B, #1F4E8C);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s ease;
        }
        .nav-link:hover { color: #FF6B2B; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: #FF6B2B; }
        .nav-link.active::after { transform: scaleX(1); }

        /* Services dropdown trigger */
        .svc-trigger {
          display: flex; align-items: center; gap: 4px;
          font-size: 14px; font-weight: 600; color: #374151;
          cursor: pointer; padding: 6px 2px;
          transition: color .2s; position: relative;
          text-decoration: none;
        }
        .svc-trigger::after {
          content: ''; position: absolute; bottom: -2px; left: 0; right: 0;
          height: 2px; border-radius: 1px;
          background: linear-gradient(90deg, #FF6B2B, #1F4E8C);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s ease;
        }
        .svc-group:hover .svc-trigger { color: #FF6B2B; }
        .svc-group:hover .svc-trigger::after { transform: scaleX(1); }
        .svc-group:hover .svc-chevron { transform: rotate(180deg); }
        .svc-chevron { transition: transform .3s ease; }

        /* Dropdown */
        .svc-dropdown {
          position: absolute; top: calc(100% + 14px); left: -16px;
          width: 260px; background: white;
          border-radius: 18px; padding: 8px;
          border: 1.5px solid #F3F4F6;
          box-shadow: 0 20px 60px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.05);
          opacity: 0; visibility: hidden; transform: translateY(8px);
          transition: all .3s cubic-bezier(.4,0,.2,1);
        }
        .svc-group:hover .svc-dropdown {
          opacity: 1; visibility: visible; transform: translateY(0);
        }
        /* Arrow pointer */
        .svc-dropdown::before {
          content: ''; position: absolute; top: -7px; left: 28px;
          width: 13px; height: 13px; background: white;
          border-left: 1.5px solid #F3F4F6; border-top: 1.5px solid #F3F4F6;
          transform: rotate(45deg);
        }
        .drop-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px; border-radius: 12px;
          text-decoration: none; transition: all .2s ease;
        }
        .drop-item:hover { background: #FFF7ED; }
        .drop-item:hover .drop-title { color: #FF6B2B; }
        .drop-title { font-size: 14px; font-weight: 700; color: #111827; line-height: 1.2; }
        .drop-desc { font-size: 11px; color: #9CA3AF; margin-top: 1px; }

        /* Login link */
        .login-link {
          font-size: 14px; font-weight: 600; color: #374151;
          text-decoration: none; padding: 6px 2px; transition: color .2s;
        }
        .login-link:hover { color: #1F4E8C; }

        /* Track CTA */
        .track-btn {
          background: linear-gradient(135deg, #1F4E8C, #2563EB);
          color: white; padding: 10px 22px; border-radius: 50px;
          font-size: 14px; font-weight: 800; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: all .3s ease; white-space: nowrap;
          box-shadow: 0 6px 20px rgba(31,78,140,.3);
          letter-spacing: .01em;
        }
        .track-btn:hover {
          background: linear-gradient(135deg, #FF6B2B, #e55a1c);
          box-shadow: 0 10px 28px rgba(255,107,43,.4);
          transform: translateY(-2px);
        }

        /* Mobile menu */
        .mob-menu {
          position: fixed; inset: 0; z-index: 100;
          display: flex; flex-direction: column;
          background: #0C1629;
          transform: translateX(100%);
          transition: transform .35s cubic-bezier(.4,0,.2,1);
        }
        .mob-menu.open { transform: translateX(0); }
        .mob-link {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 18px; font-weight: 700; color: rgba(255,255,255,.85);
          text-decoration: none; padding: 16px 0;
          border-bottom: 1px solid rgba(255,255,255,.07);
          transition: color .2s;
        }
        .mob-link:hover { color: #FF6B2B; }
        .mob-link.active { color: #FF6B2B; }
        .mob-sub-link {
          display: block; font-size: 14px; font-weight: 600;
          color: rgba(255,255,255,.5); text-decoration: none;
          padding: 10px 0 10px 16px; border-bottom: 1px solid rgba(255,255,255,.04);
          transition: color .2s;
        }
        .mob-sub-link:hover { color: #FF6B2B; }

        /* Responsive visibility */
        @media (min-width: 768px) { .hbg-btn { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }

        /* Hamburger */
        .hbg-btn {
          width: 42px; height: 42px; border-radius: 12px; border: none;
          background: rgba(31,78,140,.08); color: #1F4E8C;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all .2s ease;
        }
        .hbg-btn:hover { background: rgba(31,78,140,.15); }

        /* Overlay */
        .mob-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,.5);
          z-index: 99; backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none; transition: opacity .3s;
        }
        .mob-overlay.open { opacity: 1; pointer-events: all; }
      `}</style>

      <div className={`hdr-root${scrolled ? ' scrolled' : ''}`}>
        <div className="hdr-inner">
          <div className="hdr-wrap">

            {/* ── LOGO ──────────────────────────────────────────────────── */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <Image
                src="/images/logo.png"
                alt="ParcelSetu"
                width={420} height={80}
                style={{ height: 140, width: 'auto', objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* ── DESKTOP NAV ───────────────────────────────────────────── */}
            <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>

              {/* Services dropdown */}
              <div className="svc-group" style={{ position: 'relative' }}>
                <Link href="/services" className="svc-trigger">
                  Services
                  <ChevronDown size={15} className="svc-chevron" />
                </Link>
                <div className="svc-dropdown">
                  {serviceLinks.map((s, i) => (
                    <Link key={i} href={s.href} className="drop-item">
                      <div>
                        <div className="drop-title">{s.name}</div>
                        <div className="drop-desc">{s.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.map(l => (
                <Link key={l.name} href={l.href} className={`nav-link${isActive(l.href) ? ' active' : ''}`}>
                  {l.name}
                </Link>
              ))}

              {/* Divider */}
              <div style={{ width: 1, height: 22, background: '#E5E7EB', flexShrink: 0 }}></div>

              <Link href="https://app.parcelsetu.com" target="_blank" className="login-link">
                Login
              </Link>

              <Link href="/track" className="track-btn">
                📦 Track Shipment
              </Link>
            </div>

            {/* ── MOBILE HAMBURGER ──────────────────────────────────────── */}
            <button
              className="hbg-btn"
              style={{ display: 'flex' }}
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE OVERLAY ────────────────────────────────────────────────── */}
      <div className={`mob-overlay${isMenuOpen ? ' open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

      {/* ── MOBILE MENU ───────────────────────────────────────────────────── */}
      <div className={`mob-menu${isMenuOpen ? ' open' : ''}`}>

        {/* Header */}
        <div style={{ padding: '20px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
          <Image src="/images/logo.png" alt="ParcelSetu" width={140} height={48}
            style={{ height: 40, width: 'auto', objectFit: 'contain', filter: 'brightness(1.2)' }} />
          <button onClick={() => setIsMenuOpen(false)}
            style={{ width: 40, height: 40, borderRadius: 12, border: 'none', background: 'rgba(255,255,255,.08)', color: 'rgba(255,255,255,.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 28px 40px' }}>

          {/* Services accordion */}
          <button onClick={() => setIsServicesOpen(!isServicesOpen)}
            style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
            <div className="mob-link" style={{ color: isServicesOpen ? '#FF6B2B' : 'rgba(255,255,255,.85)' }}>
              Services
              <ChevronDown size={18} style={{ transition: 'transform .3s', transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
            </div>
          </button>

          {isServicesOpen && (
            <div style={{ marginBottom: 8 }}>
              {serviceLinks.map((s, i) => (
                <Link key={i} href={s.href} className="mob-sub-link" onClick={() => setIsMenuOpen(false)}>
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map(l => (
            <Link key={l.name} href={l.href} className={`mob-link${isActive(l.href) ? ' active' : ''}`}
              onClick={() => setIsMenuOpen(false)}>
              {l.name}
              <span style={{ fontSize: 18, color: 'rgba(255,255,255,.2)' }}>›</span>
            </Link>
          ))}

          <Link href="https://app.parcelsetu.com" target="_blank"
            className="mob-link" onClick={() => setIsMenuOpen(false)}>
            Login
            <span style={{ fontSize: 18, color: 'rgba(255,255,255,.2)' }}>›</span>
          </Link>

          {/* Track CTA */}
          <div style={{ paddingTop: 24 }}>
            <Link href="/track" onClick={() => setIsMenuOpen(false)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'linear-gradient(135deg,#FF6B2B,#e55a1c)', color: 'white', padding: '16px 24px', borderRadius: 16, fontSize: 16, fontWeight: 800, textDecoration: 'none', boxShadow: '0 10px 30px rgba(255,107,43,.35)' }}>
              📦 Track Shipment
            </Link>
          </div>

          {/* Social links */}
          <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.07)' }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,107,43,.7)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 14 }}>Follow Us</p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/parcelsetu/', color: '#0077B5' },
                { label: 'Instagram', href: '#', color: '#E1306C' },
                { label: 'Facebook', href: '#', color: '#1877F2' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,.07)', color: 'rgba(255,255,255,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: 13, fontWeight: 700 }}>
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div style={{ padding: '16px 28px', borderTop: '1px solid rgba(255,255,255,.07)', background: 'rgba(0,0,0,.2)' }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', marginBottom: 4 }}>Need help?</p>
          <a href="tel:+919990746208" style={{ fontSize: 15, fontWeight: 700, color: '#FF6B2B', textDecoration: 'none' }}>+91-9990746208</a>
        </div>
      </div>
    </>
  )
}
