"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/app/constants/theme";

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else setCount(start);
          }, 16);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Aboutus() {
  const [selectedYear, setSelectedYear] = useState(2020);
  const years = [2020, 2021, 2022, 2023, 2024, 2025];

  const journeyContent = {
    2020: {
      emoji: "🏥",
      tag: "Resilience",
      points: [
        "Delivered essential supplies and medical equipment to customers' doorsteps during COVID.",
        "Launched a dedicated COVID care program for all delivery partners.",
      ],
    },
    2021: {
      emoji: "🗺️",
      tag: "Expansion",
      points: [
        "Expanded network to 200+ cities nationwide.",
        "Introduced AI-powered route optimization system.",
      ],
    },
    2022: {
      emoji: "📱",
      tag: "Technology",
      points: [
        "Launched mobile app for seamless booking and real-time tracking.",
        "Reached the 50,000+ happy customers milestone.",
      ],
    },
    2023: {
      emoji: "🏭",
      tag: "Infrastructure",
      points: [
        "Opened state-of-the-art automated warehouse facilities.",
        "Introduced sustainable logistics with eco-friendly vehicle fleet.",
      ],
    },
    2024: {
      emoji: "🌍",
      tag: "Global",
      points: [
        "Expanded international shipping capabilities to 20+ countries.",
        "Launched same-day delivery service across major metro cities.",
      ],
    },
    2025: {
      emoji: "🚀",
      tag: "Future",
      points: [
        "Expanding to 500+ cities across India.",
        "Investing in next-generation AI logistics technology.",
      ],
    },
  };

  const leadershipTeam = [
    {
      name: "Santosh Abbimane",
      role: "Chief Financial Officer",
      li: "https://linkedin.com",
    },
    {
      name: "Ajoy Salve",
      role: "Chief HR & Administration Officer",
      li: "https://linkedin.com",
    },
    {
      name: "Mohit Sardana",
      role: "Chief Executive Officer – B2C",
      li: "https://linkedin.com",
    },
    {
      name: "Harshal Bhoi",
      role: "Chief Business Officer",
      li: "https://linkedin.com",
    },
    {
      name: "Somasudarshan Chandraiah",
      role: "Vice President",
      li: "https://linkedin.com",
    },
    {
      name: "Rajasekhar Khandrika",
      role: "Vice President",
      li: "https://linkedin.com",
    },
    { name: "Anil Kabra", role: "Vice President", li: "https://linkedin.com" },
    {
      name: "Abhinav Mishra",
      role: "Vice President",
      li: "https://linkedin.com",
    },
  ];

  const founders = [
    {
      name: "Founder Name 1",
      role: "Co-Founder & CEO",
      li: "https://linkedin.com",
    },
    {
      name: "Founder Name 2",
      role: "Co-Founder & COO",
      li: "https://linkedin.com",
    },
    {
      name: "Founder Name 3",
      role: "Co-Founder & CTO",
      li: "https://linkedin.com",
    },
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Cities Covered" },
    { value: 50000, suffix: "+", label: "Happy Customers" },
    { value: 98, suffix: "%", label: "On-Time Delivery" },
    { value: 5, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Outfit','Segoe UI',sans-serif",
        background: "#F8FAFC",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .hero-bg {
          background: linear-gradient(135deg,#0F1C35 0%,#1F4E8C 60%,#1a3a6e 100%);
          position: relative; overflow: hidden;
        }
        .hero-bg::before {
          content:''; position:absolute; inset:0;
          background:url(/images/banner.png) center/cover no-repeat; opacity:.12;
        }
        .hero-grid {
          position:absolute; inset:0;
          background-image: linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
          background-size:48px 48px;
        }
        .orb { position:absolute; border-radius:50%; pointer-events:none; }
        .badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,107,43,.13); color:#FF6B2B;
          padding:8px 20px; border-radius:100px;
          font-size:13px; font-weight:700;
          border:1px solid rgba(255,107,43,.28);
          letter-spacing:.02em;
        }
        .sdivider {
          width:56px; height:4px;
          background:linear-gradient(90deg,#FF6B2B,#1F4E8C);
          border-radius:2px; margin:14px auto 0;
        }
        .stat-card {
          background:rgba(255,255,255,.08); backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,.15); border-radius:16px;
          transition:all .3s ease;
        }
        .stat-card:hover { background:rgba(255,255,255,.14); transform:translateY(-4px); }

        /* Story section */
        .story-img {
          border-radius:24px; overflow:hidden; position:relative;
          box-shadow:0 24px 60px rgba(0,0,0,.12);
        }
        .story-img::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(31,78,140,.15),transparent);
        }
        .story-tag {
          display:inline-block; background:rgba(255,107,43,.1); color:#FF6B2B;
          padding:5px 14px; border-radius:50px; font-size:12px; font-weight:700;
          letter-spacing:.06em; text-transform:uppercase; margin-bottom:14px;
        }

        /* Team cards */
        .founder-card {
          background:white; border-radius:24px; overflow:hidden;
          border:2px solid #F3F4F6; text-align:center; padding:32px 24px 28px;
          transition:all .35s cubic-bezier(.4,0,.2,1);
          position:relative;
        }
        .founder-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:4px;
          background:linear-gradient(90deg,#FF6B2B,#1F4E8C);
          transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
        }
        .founder-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,0,0,.1); border-color:transparent; }
        .founder-card:hover::before { transform:scaleX(1); }
        .avatar-ring {
          width:112px; height:112px; margin:0 auto 20px;
          border-radius:50%; overflow:hidden; position:relative;
          border:3px solid #F3F4F6; transition:border-color .3s ease;
        }
        .founder-card:hover .avatar-ring { border-color:#FF6B2B; }
        .li-btn {
          display:inline-flex; align-items:center; justify-content:center;
          width:36px; height:36px; border-radius:50%;
          background:#0077b5; color:white; margin-top:14px;
          transition:all .25s ease; text-decoration:none;
        }
        .li-btn:hover { background:#005885; transform:scale(1.12); }

        .leader-card {
          background:white; border-radius:20px; padding:24px 18px;
          border:1.5px solid #F3F4F6; text-align:center;
          transition:all .3s ease; position:relative; overflow:hidden;
        }
        .leader-card:hover { transform:translateY(-6px); box-shadow:0 20px 44px rgba(0,0,0,.09); border-color:#E5E7EB; }
        .leader-avatar {
          width:80px; height:80px; border-radius:50%; overflow:hidden;
          position:relative; margin:0 auto 14px; border:2px solid #F3F4F6;
          transition:border-color .3s;
        }
        .leader-card:hover .leader-avatar { border-color:#FF6B2B; }
        .li-chip {
          position:absolute; bottom:0; right:0;
          width:26px; height:26px; background:#0077b5;
          border-radius:50%; display:flex; align-items:center; justify-content:center;
          border:2px solid white; transition:transform .25s;
        }
        .leader-card:hover .li-chip { transform:scale(1.15); }

        /* Journey */
        .year-btn {
          padding:10px 20px; border-radius:50px; font-size:15px; font-weight:700;
          border:2px solid transparent; cursor:pointer; transition:all .25s ease;
          font-family:inherit; white-space:nowrap;
          background:white; color:#6B7280;
        }
        .year-btn.active {
          background:linear-gradient(135deg,#FF6B2B,#e55a1c);
          color:white; border-color:transparent;
          box-shadow:0 8px 20px rgba(255,107,43,.3);
        }
        .year-btn:not(.active):hover { border-color:#FF6B2B; color:#FF6B2B; }
        .nav-btn {
          width:48px; height:48px; border-radius:50%; border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:all .25s ease; font-family:inherit;
        }
        .nav-btn:not(:disabled) { background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white; }
        .nav-btn:not(:disabled):hover { transform:scale(1.1); box-shadow:0 8px 20px rgba(255,107,43,.35); }
        .nav-btn:disabled { background:#E5E7EB; color:#9CA3AF; cursor:not-allowed; }
        .journey-point {
          display:flex; align-items:flex-start; gap:14px;
          padding:16px 20px; background:#F8FAFC; border-radius:14px;
          border-left:3px solid #FF6B2B;
          transition:all .25s ease;
        }
        .journey-point:hover { background:white; box-shadow:0 8px 24px rgba(0,0,0,.06); transform:translateX(4px); }

        /* Mission / Vision */
        .mv-card {
          border-radius:24px; padding:40px 36px; position:relative; overflow:hidden;
        }
        .mv-card::before {
          content:''; position:absolute; width:200px; height:200px; border-radius:50%;
          top:-80px; right:-60px; opacity:.08;
        }

        /* CTA */
        .cta-section {
          background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 100%);
          position:relative; overflow:hidden;
        }
        .cta-btn {
          display:inline-flex; align-items:center; gap:10px;
          padding:15px 36px; border-radius:50px; font-size:15px; font-weight:800;
          font-family:inherit; text-decoration:none; transition:all .3s ease;
          letter-spacing:.02em;
        }
        .cta-btn-orange {
          background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white;
          box-shadow:0 10px 30px rgba(255,107,43,.35);
        }
        .cta-btn-orange:hover { transform:translateY(-3px); box-shadow:0 18px 40px rgba(255,107,43,.5); }
        .cta-btn-white {
          background:rgba(255,255,255,.1); color:white;
          border:2px solid rgba(255,255,255,.25); backdrop-filter:blur(8px);
        }
        .cta-btn-white:hover { background:rgba(255,255,255,.18); transform:translateY(-3px); }

        .slide-in { animation: slideIn .4s ease forwards; }
        @keyframes slideIn { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="hero-bg py-32 relative">
        <div className="hero-grid"></div>
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle,rgba(255,107,43,.2) 0%,transparent 70%)",
            top: -200,
            right: -80,
          }}
        ></div>
        <div
          className="orb"
          style={{
            width: 350,
            height: 350,
            background:
              "radial-gradient(circle,rgba(31,78,140,.35) 0%,transparent 70%)",
            bottom: -120,
            left: -60,
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="badge" style={{ margin: "0 auto 20px" }}>
            🏢 Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">
            About{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#FF6B2B,#FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ParcelSetu
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-12">
            Connecting businesses across India with reliable, efficient, and
            innovative logistics solutions since 2020.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <div key={i} className="stat-card px-4 py-5">
                <div className="text-3xl font-black text-white">
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div className="text-blue-200 text-sm mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
            className="md:grid-cols-2 grid-cols-1"
          >
            <div className="story-img" style={{ height: 420 }}>
              <Image
                src="/images/0.png"
                alt="ParcelSetu Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="story-tag">Our Story</span>
              <h2 className="text-4xl font-black text-gray-900 mb-5 leading-tight">
                Built to Bridge the
                <br />
                <span style={{ color: "#FF6B2B" }}>Logistics Gap</span>
              </h2>
              <div className="sdivider" style={{ margin: "0 0 24px" }}></div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                {[
                  "ParcelSetu was founded with a vision to simplify shipping and modernize logistics in India. We started as a small transportation company with a commitment to excellence and customer satisfaction.",
                  "Our journey began by deeply understanding the challenges businesses face in logistics and supply chain management — the need for reliability, transparency, and efficiency.",
                  "With years of experience, we've built a robust network of warehouses, distribution centers, and carrier partners. Our experts work tirelessly to ensure every shipment reaches its destination on time.",
                ].map((p, i) => (
                  <p
                    key={i}
                    style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING STORY ────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "center",
            }}
          >
            <div>
              <span className="story-tag">Our Founding</span>
              <h2 className="text-4xl font-black text-gray-900 mb-5 leading-tight">
                From Humble Beginnings
                <br />
                <span style={{ color: "#1F4E8C" }}>to National Scale</span>
              </h2>
              <div className="sdivider" style={{ margin: "0 0 24px" }}></div>
              {[
                "Our founders, with decades of combined experience in the transportation industry, identified the critical gaps in India's logistics market and decided to bridge them with technology and trust.",
                "Starting from humble beginnings, we focused on building deep relationships with clients, understanding their unique needs, and delivering solutions that consistently exceeded expectations.",
                "Today, we stand proud as a company that has transformed logistics in India — serving thousands of businesses and empowering them through seamless supply chain management.",
              ].map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 15,
                    color: "#4B5563",
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
            <div className="story-img" style={{ height: 420 }}>
              <Image
                src="/images/0.png"
                alt="ParcelSetu Founding"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING TEAM ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              👥 The Visionaries
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Founding Team
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              The minds behind ParcelSetu's vision
            </p>
            <div className="sdivider"></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
              maxWidth: 900,
              margin: "0 auto",
            }}
          >
            {founders.map((f, i) => (
              <div key={i} className="founder-card">
                <div className="avatar-ring">
                  <Image
                    src="/images/0.png"
                    alt={f.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 4,
                  }}
                >
                  {f.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#FF6B2B",
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {f.role}
                </p>
                <a
                  href={f.li}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="li-btn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP TEAM ───────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              🏆 Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Meet Our Leaders
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Experienced professionals driving growth and innovation
            </p>
            <div className="sdivider"></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: 20,
              maxWidth: 1100,
              margin: "0 auto",
            }}
          >
            {leadershipTeam.map((l, i) => (
              <div key={i} className="leader-card">
                <div className="leader-avatar" style={{ position: "relative" }}>
                  <Image
                    src="/images/0.png"
                    alt={l.name}
                    fill
                    className="object-cover"
                  />
                  <a
                    href={l.li}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="li-chip"
                  >
                    <svg
                      width="12"
                      height="12"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 4,
                  }}
                >
                  {l.name}
                </h3>
                <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5 }}>
                  {l.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div className="text-center mb-14">
              <div className="badge" style={{ margin: "0 auto 16px" }}>
                📅 Milestones
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Our Journey So Far
              </h2>
              <p className="text-gray-500 mt-3 text-lg">
                Five years of growth, resilience, and innovation
              </p>
              <div className="sdivider"></div>
            </div>

            {/* Year pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
                marginBottom: 40,
              }}
            >
              <button
                className="nav-btn"
                onClick={() => {
                  const i = years.indexOf(selectedYear);
                  if (i > 0) setSelectedYear(years[i - 1]);
                }}
                disabled={selectedYear === years[0]}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  className={`year-btn ${selectedYear === y ? "active" : ""}`}
                  onClick={() => setSelectedYear(y)}
                >
                  {y}
                </button>
              ))}
              <button
                className="nav-btn"
                onClick={() => {
                  const i = years.indexOf(selectedYear);
                  if (i < years.length - 1) setSelectedYear(years[i + 1]);
                }}
                disabled={selectedYear === years[years.length - 1]}
              >
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div
              key={selectedYear}
              className="slide-in"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <span style={{ fontSize: 52 }}>
                    {journeyContent[selectedYear].emoji}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#FF6B2B",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                        marginBottom: 4,
                      }}
                    >
                      {journeyContent[selectedYear].tag}
                    </div>
                    <div
                      style={{
                        fontSize: 64,
                        fontWeight: 900,
                        background: "linear-gradient(135deg,#FF6B2B,#1F4E8C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1,
                      }}
                    >
                      {selectedYear}
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {journeyContent[selectedYear].points.map((p, i) => (
                    <div key={i} className="journey-point">
                      <span
                        style={{
                          color: "#FF6B2B",
                          fontSize: 18,
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </span>
                      <span
                        style={{
                          fontSize: 15,
                          color: "#374151",
                          lineHeight: 1.7,
                        }}
                      >
                        {p}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="story-img" style={{ height: 380 }}>
                <Image
                  src="/images/0.png"
                  alt={`ParcelSetu ${selectedYear}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              🎯 Purpose
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Mission & Vision
            </h2>
            <div className="sdivider"></div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 28,
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {/* Mission */}
            <div
              className="mv-card"
              style={{ background: "linear-gradient(135deg,#0F1C35,#1F4E8C)" }}
            >
              <div
                className="mv-card-before"
                style={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  top: -80,
                  right: -60,
                  background: "#FF6B2B",
                  opacity: 0.08,
                }}
              ></div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎯</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,107,43,.8)",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    marginBottom: 10,
                  }}
                >
                  Our Mission
                </div>
                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: "white",
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  Delivering With Purpose
                </h3>
                <div
                  style={{
                    width: 40,
                    height: 3,
                    background:
                      "linear-gradient(90deg,#FF6B2B,rgba(255,107,43,.3))",
                    borderRadius: 2,
                    marginBottom: 20,
                  }}
                ></div>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(255,255,255,.8)",
                    lineHeight: 1.8,
                  }}
                >
                  To deliver fast, reliable, and transparent logistics through
                  technology, operational excellence, and a strong delivery
                  network — helping businesses scale with confidence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div
              className="mv-card"
              style={{
                background: "white",
                border: "2px solid #F3F4F6",
                boxShadow: "0 20px 50px rgba(0,0,0,.06)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  top: -80,
                  right: -60,
                  background: "#1F4E8C",
                  opacity: 0.05,
                }}
              ></div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🌟</div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#1F4E8C",
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    marginBottom: 10,
                  }}
                >
                  Our Vision
                </div>
                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    color: "#111827",
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  India's Most Trusted Partner
                </h3>
                <div
                  style={{
                    width: 40,
                    height: 3,
                    background:
                      "linear-gradient(90deg,#1F4E8C,rgba(31,78,140,.3))",
                    borderRadius: 2,
                    marginBottom: 20,
                  }}
                ></div>
                <p style={{ fontSize: 15, color: "#4B5563", lineHeight: 1.8 }}>
                  To make ParcelSetu the most trusted shipping partner in India
                  — offering unmatched service quality and a delightful delivery
                  experience for every single shipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="cta-section py-20">
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle,rgba(255,107,43,.2) 0%,transparent 70%)",
            top: -120,
            right: -80,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="container mx-auto px-6 text-center"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div style={{ fontSize: 52, marginBottom: 16 }}>🤝</div>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 900,
              color: "white",
              marginBottom: 14,
            }}
          >
            Ready to Partner With Us?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,.75)",
              maxWidth: 540,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Experience the difference that professional logistics services can
            make for your business. Get in touch with us today!
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contactus" className="cta-btn cta-btn-orange">
              📞 Contact Us
            </Link>
            <Link href="/services" className="cta-btn cta-btn-white">
              🚚 Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );

  function LinkedInIcon() {
    return (
      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
}
