"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { theme } from "@/app/constants/theme";

// ─── Animated Counter ───────────────────────────────────────────────────────
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

export default function Carriers() {
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
    experience: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) =>
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setApplicationData({
        name: "",
        email: "",
        phone: "",
        vehicleType: "",
        experience: "",
        location: "",
        message: "",
      });
    }, 4000);
  };

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Rates",
      description:
        "Earn top rates with guaranteed weekly payment cycles and zero delays.",
      color: "#FF6B2B",
    },
    {
      icon: "📱",
      title: "Smart Dashboard",
      description:
        "AI-powered load matching with real-time tracking and instant booking.",
      color: "#1F4E8C",
    },
    {
      icon: "🛣️",
      title: "Premium Routes",
      description:
        "Priority access to high-value routes and consistent, reliable business.",
      color: "#22C55E",
    },
    {
      icon: "🔧",
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for breakdowns, disputes, and guidance.",
      color: "#A855F7",
    },
    {
      icon: "📊",
      title: "Transparent Pay",
      description:
        "Crystal-clear payment terms — what you see is exactly what you get.",
      color: "#EAB308",
    },
    {
      icon: "🤝",
      title: "Growth Partner",
      description:
        "Scale your fleet with preferential rates, loans, and exclusive benefits.",
      color: "#EC4899",
    },
  ];

  const vehicleTypes = [
    "Truck (10-14 Ton)",
    "Truck (15-20 Ton)",
    "Truck (20+ Ton)",
    "Container Truck",
    "Refrigerated Truck",
    "Flatbed Truck",
    "Mini Truck",
    "Other",
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Active Carriers" },
    { value: 50, suffix: "+", label: "Cities Covered" },
    { value: 98, suffix: "%", label: "On-Time Rate" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  const requirements = [
    {
      title: "Valid Documents",
      desc: "Valid driving license, vehicle registration, insurance, and all necessary permits.",
      color: "from-orange-500 to-amber-400",
      icon: "📄",
    },
    {
      title: "Vehicle Condition",
      desc: "Well-maintained vehicle in excellent working condition with valid fitness certification.",
      color: "from-blue-600 to-blue-400",
      icon: "🚛",
    },
    {
      title: "2+ Years Experience",
      desc: "Minimum 2 years of experience in logistics, transport, or fleet operations.",
      color: "from-green-600 to-emerald-400",
      icon: "⭐",
    },
    {
      title: "GPS Tracking",
      desc: "Active GPS tracking device required — we offer free installation support.",
      color: "from-purple-600 to-purple-400",
      icon: "📍",
    },
    {
      title: "Reliability & Professionalism",
      desc: "Strong commitment to on-time delivery and professional service standards.",
      color: "from-rose-600 to-rose-400",
      icon: "🏆",
      wide: true,
    },
  ];

  const steps = [
    {
      num: 1,
      title: "Submit Application",
      desc: "Fill out the partner form with your vehicle and contact details.",
      icon: "✍️",
      color: "from-orange-500 to-amber-400",
    },
    {
      num: 2,
      title: "Document Verification",
      desc: "We verify your licenses, permits, insurance, and compliance docs.",
      icon: "🔍",
      color: "from-blue-600 to-blue-400",
    },
    {
      num: 3,
      title: "Vehicle Inspection",
      desc: "Physical inspection and GPS setup validation of your vehicle.",
      icon: "🔧",
      color: "from-green-600 to-emerald-400",
    },
    {
      num: 4,
      title: "Start Earning",
      desc: "Onboarding complete — begin receiving loads and growing your income.",
      icon: "🚀",
      color: "from-purple-600 to-purple-400",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Outfit', 'Segoe UI', sans-serif",
        background: "#F8FAFC",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        .hero-bg {
          background: linear-gradient(135deg, #0F1C35 0%, #1F4E8C 60%, #1a3a6e 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: url(/images/banner.png) center/cover no-repeat;
          opacity: 0.15;
        }
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .hero-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,107,43,0.25) 0%, transparent 70%);
          top: -200px; right: -100px;
          pointer-events: none;
        }
        .hero-glow-2 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(31,78,140,0.4) 0%, transparent 70%);
          bottom: -100px; left: -50px;
          pointer-events: none;
        }
        .stat-card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.14);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        .benefit-card {
          background: white;
          border-radius: 20px;
          border: 2px solid transparent;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .benefit-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,107,43,0.04) 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.1);
          border-color: #FF6B2B;
        }
        .benefit-card:hover::before { opacity: 1; }
        .icon-ring {
          width: 64px; height: 64px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          transition: transform 0.3s ease;
        }
        .benefit-card:hover .icon-ring { transform: scale(1.15) rotate(8deg); }
        .req-card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          border: 1.5px solid #E5E7EB;
          transition: all 0.3s ease;
        }
        .req-card:hover {
          border-color: transparent;
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }
        .step-card {
          background: white;
          border-radius: 24px;
          padding: 32px 24px;
          border: 1.5px solid #E5E7EB;
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .step-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #FF6B2B, #1F4E8C);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .step-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
          border-color: transparent;
        }
        .step-card:hover::after { transform: scaleX(1); }
        .connector {
          position: absolute;
          top: 50px; left: calc(50% + 60px);
          width: calc(100% - 120px);
          height: 2px;
          background: linear-gradient(90deg, #FF6B2B 0%, #1F4E8C 100%);
          display: none;
        }
        @media (min-width: 768px) { .connector { display: block; } }
        .form-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 14px;
          font-family: inherit;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          background: white;
          color: #1F2937;
          transition: all 0.25s ease;
          outline: none;
        }
        .form-input:focus {
          border-color: #1F4E8C;
          box-shadow: 0 0 0 4px rgba(31,78,140,0.08);
        }
        .form-input:hover { border-color: #9CA3AF; }
        .form-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #6B7280;
          margin-bottom: 6px;
        }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #FF6B2B 0%, #e55a1c 100%);
          color: white;
          padding: 15px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.05em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          position: relative;
          overflow: hidden;
        }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255,107,43,0.4);
        }
        .submit-btn:hover::before { opacity: 1; }
        .submit-btn:active { transform: translateY(0); }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,107,43,0.1);
          color: #FF6B2B;
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(255,107,43,0.25);
          margin-bottom: 20px;
        }
        .section-divider {
          width: 60px; height: 4px;
          background: linear-gradient(90deg, #FF6B2B, #1F4E8C);
          border-radius: 2px;
          margin: 16px auto 0;
        }
        .success-box {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .float-truck {
          animation: floatTruck 6s ease-in-out infinite;
        }
        @keyframes floatTruck {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-12px) translateX(8px); }
          66% { transform: translateY(8px) translateX(-4px); }
        }
        .road-line {
          width: 100%; height: 4px;
          background: repeating-linear-gradient(90deg, #FF6B2B 0, #FF6B2B 40px, transparent 40px, transparent 70px);
          animation: roadScroll 2s linear infinite;
        }
        @keyframes roadScroll {
          from { background-position: 0 0; }
          to { background-position: 70px 0; }
        }
        .shine-text {
          background: linear-gradient(90deg, #fff 0%, #FFD700 50%, #fff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }
        @keyframes shine {
          from { background-position: 0% center; }
          to { background-position: 200% center; }
        }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-bg py-32 relative">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow-2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge">
              <span>🚛</span> Now Accepting Partner Applications
            </div>

            <div className="float-truck text-7xl mb-6">🚛</div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Drive More.
              <br />
              <span className="shine-text">Earn More.</span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl mx-auto">
              Join <span className="text-white font-bold">ParcelSetu</span>'s
              growing network of trusted carrier partners — get regular loads,
              competitive rates, and 24/7 support to grow your business.
            </p>

            <div className="road-line mb-10 opacity-60"></div>

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
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              ✨ Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Why Partner With
              <br />
              <span style={{ color: "#FF6B2B" }}>ParcelSetu?</span>
            </h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="benefit-card p-7 shadow-sm"
                style={{ "--hover-color": b.color }}
              >
                <div
                  className="icon-ring mb-5"
                  style={{ background: `${b.color}18` }}
                >
                  <span>{b.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {b.description}
                </p>
                <div
                  className="mt-5 h-1 rounded-full w-12 transition-all duration-300"
                  style={{ background: b.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REQUIREMENTS ─────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, #F1F5F9 0%, #F8FAFC 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              📋 Eligibility
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Partner Requirements
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Meet these criteria to join our network
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {requirements.map((r, i) => (
              <div
                key={i}
                className={`req-card ${r.wide ? "md:col-span-2" : ""}`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`bg-gradient-to-br ${r.color} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {r.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPLICATION FORM ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Form Header */}
            <div className="text-center mb-10">
              <div className="badge" style={{ margin: "0 auto 16px" }}>
                🤝 Apply Now
              </div>
              <h2 className="text-4xl font-black text-gray-900">
                Become a Partner
              </h2>
              <p className="text-gray-500 mt-3">
                Fill in your details and our team will reach out within 24 hours
              </p>
              <div className="section-divider"></div>
            </div>

            {/* Form Card */}
            <div
              style={{
                background: "white",
                borderRadius: 24,
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                border: "1.5px solid #F3F4F6",
                padding: 36,
              }}
            >
              {submitted ? (
                <div className="success-box">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-green-100">
                    Our partnership team will contact you within 24 hours.
                    Welcome to the ParcelSetu family!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 18 }}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={applicationData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                        className="form-input"
                        placeholder="Rahul Sharma"
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={applicationData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={applicationData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="rahul@example.com"
                    />
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label className="form-label">Vehicle Type *</label>
                      <select
                        name="vehicleType"
                        required
                        value={applicationData.vehicleType}
                        onChange={handleChange}
                        className="form-input"
                        style={{ appearance: "auto" }}
                      >
                        <option value="">Select Vehicle Type</option>
                        {vehicleTypes.map((t, i) => (
                          <option key={i} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">
                        Years of Experience *
                      </label>
                      <input
                        type="text"
                        name="experience"
                        required
                        value={applicationData.experience}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="e.g. 5 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Operating Location *</label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={applicationData.location}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Mumbai, Maharashtra"
                    />
                  </div>

                  <div>
                    <label className="form-label">Additional Information</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={applicationData.message}
                      onChange={handleChange}
                      className="form-input"
                      style={{ resize: "vertical", minHeight: 100 }}
                      placeholder="Tell us about your fleet, specialization, or anything else..."
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    🚀 Submit Application
                  </button>

                  <p
                    style={{
                      textAlign: "center",
                      fontSize: 12,
                      color: "#9CA3AF",
                    }}
                  >
                    By submitting, you agree to our Terms & Privacy Policy.
                    We'll never spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS STEPS ────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, #F1F5F9 0%, #F8FAFC 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              📍 Process
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Partnership Process
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              4 simple steps to start earning with ParcelSetu
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <div key={i} className="step-card relative">
                {i < steps.length - 1 && <div className="connector"></div>}
                <div
                  className={`bg-gradient-to-br ${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg`}
                >
                  {s.icon}
                </div>
                <div
                  style={{
                    background: "linear-gradient(135deg, #FF6B2B, #1F4E8C)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: 13,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  STEP {s.num}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #0F1C35 0%, #1F4E8C 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-100px",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,107,43,0.2) 0%, transparent 70%)",
          }}
        ></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="text-5xl mb-6">💬</div>
          <h2 className="text-4xl font-black text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Our dedicated partnership team is ready to answer all your queries
            and help you get started on your journey with ParcelSetu.
          </p>
          <Link
            href="/contactus"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "linear-gradient(135deg, #FF6B2B, #e55a1c)",
              color: "white",
              padding: "16px 40px",
              borderRadius: 50,
              fontWeight: 700,
              fontSize: 16,
              textDecoration: "none",
              boxShadow: "0 12px 30px rgba(255,107,43,0.4)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(255,107,43,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(255,107,43,0.4)";
            }}
          >
            📞 Contact Partnership Team →
          </Link>
        </div>
      </section>
    </div>
  );
}
