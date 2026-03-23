"use client";

import Link from "next/link";
import Image from "next/image";
import { theme } from "@/app/constants/theme";

export default function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/aboutus" },
    { label: "Contact", href: "/contactus" },
    { label: "Our Services", href: "/services" },
  ];

  const services = [
    { emoji: "🚛", label: "Freight Transportation" },
    { emoji: "🏭", label: "Warehouse Management" },
    { emoji: "⚡", label: "Express Delivery" },
    { emoji: "🔗", label: "Supply Chain Solutions" },
    { emoji: "❄️", label: "Cold Chain Logistics" },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "#",
      color: "#1877F2",
      icon: (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      ),
    },
    {
      label: "Twitter/X",
      href: "#",
      color: "#000",
      icon: (
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/parcelsetu/",
      color: "#0A66C2",
      icon: (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      ),
    },
    {
      label: "Instagram",
      href: "#",
      color: "#E1306C",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
  ];

  return (
    <footer style={{ fontFamily: "'Outfit','Segoe UI',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        /* ── Footer bg ── */
        .footer-bg {
          background: linear-gradient(180deg,#0C1629 0%,#071020 100%);
          position: relative; overflow: hidden;
        }
        .footer-grid {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle at 2px 2px,rgba(255,255,255,.04) 1px,transparent 0);
          background-size: 36px 36px;
        }
        .orb { position: absolute; border-radius: 50%; pointer-events: none; }

        /* ── Top accent bar ── */
        .accent-top {
          height: 4px;
          background: linear-gradient(90deg,#1F4E8C 0%,#FF6B2B 40%,#FFD700 70%,#1F4E8C 100%);
        }

        /* ── Trust pills ── */
        .trust-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,.06); color: rgba(255,255,255,.65);
          padding: 5px 12px; border-radius: 100px;
          font-size: 11px; font-weight: 600;
          border: 1px solid rgba(255,255,255,.08);
        }
        .trust-dot { width: 6px; height: 6px; border-radius: 50%; background: #10B981; }

        /* ── Section heading ── */
        .footer-heading {
          font-size: 11px; font-weight: 800; color: rgba(255,255,255,.9);
          text-transform: uppercase; letter-spacing: .12em; margin-bottom: 20px;
          display: flex; align-items: center; gap: 10px;
        }
        .footer-heading::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg,rgba(255,107,43,.4),transparent);
        }

        /* ── Quick links ── */
        .footer-link {
          display: flex; align-items: center; gap: 8px;
          font-size: 13px; color: rgba(255,255,255,.55); font-weight: 500;
          text-decoration: none; padding: 5px 0;
          transition: all .25s ease; border-bottom: 1px solid rgba(255,255,255,.04);
        }
        .footer-link:last-child { border-bottom: none; }
        .footer-link:hover { color: #FF6B2B; padding-left: 6px; }
        .footer-link-arrow {
          font-size: 14px; color: rgba(255,107,43,.0);
          transition: all .25s ease;
        }
        .footer-link:hover .footer-link-arrow { color: #FF6B2B; }

        /* ── Services list ── */
        .svc-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,.55); font-weight: 500;
          padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,.04);
          transition: color .25s;
        }
        .svc-item:last-child { border-bottom: none; }
        .svc-item:hover { color: rgba(255,255,255,.85); }

        /* ── Contact chips ── */
        .contact-chip {
          display: flex; align-items: flex-start; gap: 12px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.07);
          border-radius: 12px; padding: 11px 14px; margin-bottom: 10px;
          transition: all .25s ease;
        }
        .contact-chip:hover { background: rgba(255,255,255,.08); border-color: rgba(255,107,43,.3); }
        .contact-chip-icon {
          width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;
          background: linear-gradient(135deg,#FF6B2B,#e55a1c);
          display: flex; align-items: center; justify-content: center;
        }
        .contact-chip a, .contact-chip span {
          font-size: 13px; color: rgba(255,255,255,.65); font-weight: 500;
          text-decoration: none; transition: color .2s;
        }
        .contact-chip:hover a, .contact-chip:hover span { color: rgba(255,255,255,.9); }

        /* ── Social buttons ── */
        .social-btn {
          width: 36px; height: 36px; border-radius: 10px;
          background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.1);
          display: flex; align-items: center; justify-content: center;
          transition: all .3s ease; cursor: pointer; text-decoration: none;
        }
        .social-btn:hover { transform: translateY(-3px) scale(1.1); }

        /* ── Portal login btn ── */
        .portal-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,#FF6B2B,#e55a1c); color: white;
          padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 800;
          text-decoration: none; transition: all .3s ease; font-family: inherit;
          box-shadow: 0 6px 18px rgba(255,107,43,.3);
        }
        .portal-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,107,43,.45); }

        /* ── Bottom bar ── */
        .footer-bottom {
          background: rgba(0,0,0,.35);
          border-top: 1px solid rgba(255,255,255,.06);
          padding: 16px 24px;
        }
        .bottom-link {
          font-size: 12px; color: rgba(255,255,255,.35);
          text-decoration: none; transition: color .2s;
        }
        .bottom-link:hover { color: #FF6B2B; }

        /* ── Grid ── */
        .footer-grid-cols {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.9fr 1.1fr;
          gap: 40px;
          max-width: 1200px; margin: 0 auto;
        }

        @media(max-width: 1024px) { .footer-grid-cols { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media(max-width: 600px)  { .footer-grid-cols { grid-template-columns: 1fr; gap: 28px; } }
      `}</style>

      {/* Accent top bar */}
      <div className="accent-top" />

      <div className="footer-bg">
        <div className="footer-grid" />
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle,rgba(255,107,43,.06) 0%,transparent 70%)",
            top: -200,
            right: -150,
          }}
        />
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle,rgba(31,78,140,.1) 0%,transparent 70%)",
            bottom: -150,
            left: -100,
          }}
        />

        {/* Main content */}
        <div
          style={{ position: "relative", zIndex: 1, padding: "52px 24px 44px" }}
        >
          <div className="footer-grid-cols">
            {/* ── Col 1: Brand ── */}
            <div>
              <div style={{ marginBottom: 16 }}>
                <Image
                  src="/images/logo.png"
                  alt="ParcelSetu"
                  width={230}
                  height={145}
                  style={{
                    height: 145,
                    width: "auto",
                    objectFit: "contain",
                    borderRadius: 8,
                    filter: "brightness(1.05)",
                  }}
                />
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.5)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                  maxWidth: 240,
                }}
              >
                Your trusted logistics partner connecting businesses across
                India with reliable transportation and fast delivery services.
              </p>

              {/* Trust pills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                <div className="trust-pill">
                  <div className="trust-dot" />
                  500+ Cities Covered
                </div>
                <div className="trust-pill">
                  <div className="trust-dot" />
                  99% On-Time Delivery
                </div>
                <div className="trust-pill">
                  <div className="trust-dot" />
                  10K+ Happy Customers
                </div>
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: 8 }}>
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : "_self"}
                    className="social-btn"
                    aria-label={s.label}
                    style={{ "--hover-bg": s.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = s.color;
                      e.currentTarget.style.borderColor = s.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,.07)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,.1)";
                    }}
                  >
                    <svg
                      style={{ width: 15, height: 15, fill: "white" }}
                      viewBox="0 0 24 24"
                    >
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2: Quick Links ── */}
            <div>
              <div className="footer-heading">Quick Links</div>
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="footer-link">
                  <span className="footer-link-arrow">›</span>
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── Col 3: Services ── */}
            <div>
              <div className="footer-heading">Services</div>
              {services.map((svc) => (
                <div key={svc.label} className="svc-item">
                  <span style={{ fontSize: 15 }}>{svc.emoji}</span>
                  <span>{svc.label}</span>
                </div>
              ))}
            </div>

            {/* ── Col 4: Contact ── */}
            <div>
              <div className="footer-heading">Contact</div>

              <div className="contact-chip">
                <div className="contact-chip-icon">
                  <svg
                    style={{ width: 14, height: 14, fill: "white" }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,.35)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginBottom: 3,
                    }}
                  >
                    Email
                  </div>
                  <a href="mailto:info@parcelsetu.com" className="">
                    support@parcelsetu.in
                  </a>
                </div>
              </div>

              <div className="contact-chip">
                <div className="contact-chip-icon">
                  <svg
                    style={{ width: 14, height: 14, fill: "white" }}
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,.35)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginBottom: 3,
                    }}
                  >
                    Phone
                  </div>
                  <a href="tel:+91XXXXXXXXXX">+91-XXX-XXX-XXXX</a>
                </div>
              </div>

              <div className="contact-chip">
                <div className="contact-chip-icon">
                  <svg
                    style={{ width: 14, height: 14, fill: "white" }}
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,.35)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      marginBottom: 3,
                    }}
                  >
                    Location
                  </div>
                  <span>India</span>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <a
                  href="https://app.parcelsetu.in"
                  target="_blank"
                  className="portal-btn"
                >
                  🔐 Portal Login
                  <svg
                    style={{ width: 14, height: 14 }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>
              © {new Date().getFullYear()} ParcelSetu. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <Link href="#" className="bottom-link">
                Privacy Policy
              </Link>
              <span style={{ color: "rgba(255,255,255,.1)" }}>•</span>
              <Link href="#" className="bottom-link">
                Terms of Service
              </Link>
              <span style={{ color: "rgba(255,255,255,.1)" }}>•</span>
              <Link href="#" className="bottom-link">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
