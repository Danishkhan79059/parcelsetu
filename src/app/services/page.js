"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/app/constants/theme";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Critical Logistics");

  const tabContent = {
    "Reverse Parcel": {
      title: "Reverse Parcel",
      description:
        "Efficient reverse logistics solutions for returns and exchanges. We handle product returns seamlessly, ensuring quick processing and customer satisfaction.",
      image: "/images/S11.png",
    },
    "Express Parcel": {
      title: "Express Parcel",
      description:
        "Fast and reliable express parcel delivery services for urgent shipments. Same-day and next-day delivery options available across major cities.",
      image: "/images/S15.png",
    },
    Prime: {
      title: "Prime",
      description:
        "Premium logistics services with priority handling, dedicated support, and guaranteed delivery times. Perfect for high-value and time-sensitive shipments.",
      image: "/images/S9.png",
    },
    "Critical Logistics": {
      title: "Critical Logistics (B2B)",
      description:
        "We specialize in secure same day and next day delivery/courier services for critical and high-value items, from manufacturing plants to distributor warehouses, ensuring timely delivery and maximum TAT adherence.",
      image: "/images/S10.png",
    },
  };

  const tabs = [
    "Reverse Parcel",
    "Express Parcel",
    "Prime",
    "Critical Logistics",
  ];

  const services = [
    {
      icon: "🚚",
      title: "Express Delivery",
      description:
        "Fast and reliable express delivery services for time-sensitive shipments. We ensure your packages reach their destination within 24-48 hours across major cities.",
      features: [
        "Same-day delivery available",
        "Real-time tracking",
        "Priority handling",
        "Dedicated support",
      ],
    },
    {
      icon: "📦",
      title: "Warehouse Management",
      description:
        "Comprehensive warehousing solutions with state-of-the-art facilities. We offer inventory management, order fulfillment, and distribution services.",
      features: [
        "Secure storage facilities",
        "Inventory management system",
        "Order fulfillment",
        "Pick & pack services",
      ],
    },
    {
      icon: "🚛",
      title: "Freight Transportation",
      description:
        "Full truckload (FTL) and less than truckload (LTL) services for businesses of all sizes. Cost-effective solutions for bulk shipments.",
      features: [
        "FTL & LTL services",
        "Temperature-controlled transport",
        "Heavy cargo handling",
        "Route optimization",
      ],
    },
    {
      icon: "🌐",
      title: "Supply Chain Solutions",
      description:
        "End-to-end supply chain management services to streamline your operations and reduce costs while improving efficiency.",
      features: [
        "End-to-end solutions",
        "Vendor management",
        "Demand forecasting",
        "Cost optimization",
      ],
    },
    {
      icon: "🏪",
      title: "E-commerce Fulfillment",
      description:
        "Complete e-commerce fulfillment services including order processing, packaging, and last-mile delivery to help your online business grow.",
      features: [
        "Order processing",
        "Custom packaging",
        "Last-mile delivery",
        "Returns management",
      ],
    },
    {
      icon: "📋",
      title: "Customs & Documentation",
      description:
        "Expert assistance with customs clearance, documentation, and compliance for international shipments and cross-border logistics.",
      features: [
        "Customs clearance",
        "Documentation support",
        "Compliance management",
        "Import/Export services",
      ],
    },
    {
      icon: "❄️",
      title: "Cold Chain Logistics",
      description:
        "Specialized temperature-controlled transportation and storage for pharmaceuticals, food products, and other temperature-sensitive goods.",
      features: [
        "Temperature monitoring",
        "Pharma-grade facilities",
        "Food-grade storage",
        "24/7 monitoring",
      ],
    },
    {
      icon: "🔒",
      title: "Secure Cargo Services",
      description:
        "High-security transportation services for valuable goods, electronics, and sensitive materials with enhanced security measures.",
      features: [
        "GPS tracking",
        "Armed security",
        "Insurance coverage",
        "Secure vehicles",
      ],
    },
  ];

  const howItWorks = [
    {
      step: "01",
      label: "Request Quote",
      desc: "Contact us with your shipment details and requirements",
      color: "#1F4E8C",
    },
    {
      step: "02",
      label: "Get Quote",
      desc: "Receive a competitive quote tailored to your needs",
      color: "#FF6B2B",
    },
    {
      step: "03",
      label: "Schedule Pickup",
      desc: "We pick up your shipment at your preferred time",
      color: "#A855F7",
    },
    {
      step: "04",
      label: "Track & Deliver",
      desc: "Track in real-time and receive on-time delivery",
      color: "#10B981",
    },
  ];

  const keyFeatures = [
    {
      emoji: "⚡",
      title: "Fast & Reliable",
      desc: "Our optimized routes and efficient processes ensure your shipments arrive on time, every time.",
      bg: "linear-gradient(135deg,#0F1C35,#1F4E8C)",
    },
    {
      emoji: "💼",
      title: "Business Solutions",
      desc: "Tailored logistics solutions designed to meet the unique needs of your business.",
      bg: "linear-gradient(135deg,#FF6B2B,#e55a1c)",
    },
    {
      emoji: "📱",
      title: "Technology Driven",
      desc: "Advanced tracking systems and digital platforms for seamless logistics management.",
      bg: "linear-gradient(135deg,#1a3a6e,#2563EB)",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Outfit','Segoe UI',sans-serif",
        background: "#F8FAFC",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        * { box-sizing:border-box; }
        .badge-pill {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,107,43,.12); color:#FF6B2B;
          padding:7px 18px; border-radius:100px;
          font-size:12px; font-weight:700; letter-spacing:.04em;
          border:1px solid rgba(255,107,43,.25);
        }
        .sdivider { width:52px; height:4px; background:linear-gradient(90deg,#FF6B2B,#1F4E8C); border-radius:2px; margin:14px auto 0; }
        .orb { position:absolute; border-radius:50%; pointer-events:none; }

        /* ── Hero ── */
        .hero-bg {
          background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 60%,#1a3a6e 100%);
          position:relative; overflow:hidden;
        }
        .hero-bg::before {
          content:''; position:absolute; inset:0;
          background:url(/images/banner.png) center/cover no-repeat; opacity:.12;
        }
        .hero-grid {
          position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
          background-size:48px 48px;
        }

        /* ── Buttons ── */
        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#1F4E8C,#2563EB); color:white;
          padding:12px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; transition:all .3s ease;
          box-shadow:0 8px 24px rgba(31,78,140,.3); font-family:inherit;
        }
        .btn-primary:hover { background:linear-gradient(135deg,#FF6B2B,#e55a1c); transform:translateY(-2px); box-shadow:0 12px 32px rgba(255,107,43,.4); }
        .btn-accent {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white;
          padding:12px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; transition:all .3s ease;
          box-shadow:0 8px 24px rgba(255,107,43,.3); font-family:inherit;
        }
        .btn-accent:hover { transform:translateY(-2px); box-shadow:0 14px 36px rgba(255,107,43,.45); }
        .btn-sm-accent {
          display:inline-flex; align-items:center; gap:6px;
          background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white;
          padding:10px 22px; border-radius:50px; font-size:13px; font-weight:800;
          text-decoration:none; transition:all .3s; font-family:inherit;
          box-shadow:0 6px 18px rgba(255,107,43,.28);
        }
        .btn-sm-accent:hover { transform:translateY(-2px); box-shadow:0 10px 28px rgba(255,107,43,.4); }

        /* ── Service tabs ── */
        .svc-tab {
          padding:12px 22px; border-radius:50px; font-size:13px; font-weight:700;
          font-family:inherit; border:2px solid #E5E7EB; cursor:pointer;
          transition:all .25s; background:white; color:#6B7280;
        }
        .svc-tab.on {
          background:linear-gradient(135deg,#0F1C35,#1F4E8C); color:white;
          border-color:transparent; box-shadow:0 8px 24px rgba(31,78,140,.28);
        }
        .svc-tab:not(.on):hover { border-color:#FF6B2B; color:#FF6B2B; background:rgba(255,107,43,.05); }

        /* ── Tab content card ── */
        .tab-content-card {
          background:white; border-radius:28px; overflow:hidden;
          border:1.5px solid #E5E7EB; box-shadow:0 20px 60px rgba(0,0,0,.07);
        }
        .tab-accent-bar {
          height:4px; background:linear-gradient(90deg,#FF6B2B,#1F4E8C);
        }

        /* ── What is it ── */
        .accent-bar {
          width:4px; height:52px; border-radius:2px;
          background:linear-gradient(180deg,#FF6B2B,#1F4E8C);
          flex-shrink:0;
        }

        /* ── Service cards ── */
        .svc-card {
          background:white; border-radius:20px; padding:24px 20px;
          border:1.5px solid #F3F4F6;
          transition:all .35s ease; position:relative; overflow:hidden;
        }
        .svc-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#FF6B2B,#1F4E8C);
          transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
        }
        .svc-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,0,0,.1); border-color:transparent; }
        .svc-card:hover::before { transform:scaleX(1); }
        .svc-icon-wrap {
          width:68px; height:68px; border-radius:20px; margin:0 auto 16px;
          display:flex; align-items:center; justify-content:center; font-size:30px;
          background:linear-gradient(135deg,rgba(31,78,140,.07),rgba(31,78,140,.03));
          transition:transform .3s ease, background .3s ease;
        }
        .svc-card:hover .svc-icon-wrap { transform:scale(1.1) rotate(-5deg); background:linear-gradient(135deg,rgba(255,107,43,.1),rgba(255,107,43,.05)); }

        /* ── How it works ── */
        .hiw-card {
          background:white; border-radius:24px; padding:32px 22px; text-align:center;
          border:2px solid #F3F4F6; transition:all .35s ease;
        }
        .hiw-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,.1); border-color:#FF6B2B; }
        .hiw-num {
          width:80px; height:80px; border-radius:50%; margin:0 auto 18px;
          display:flex; align-items:center; justify-content:center;
          font-size:26px; font-weight:900; color:white;
          transition:transform .3s; box-shadow:0 12px 30px rgba(0,0,0,.18);
        }
        .hiw-card:hover .hiw-num { transform:scale(1.1); }

        /* ── Other services ── */
        .other-card {
          background:white; border-radius:24px; overflow:hidden;
          border:1.5px solid #F3F4F6; box-shadow:0 8px 28px rgba(0,0,0,.06);
          transition:all .35s ease;
        }
        .other-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,.1); border-color:rgba(255,107,43,.25); }

        /* ── Key features ── */
        .kf-card {
          border-radius:24px; padding:40px 32px;
          transition:all .35s ease;
        }
        .kf-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,.2); }

        /* ── CTA ── */
        .cta-wrap {
          background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 100%);
          position:relative; overflow:hidden; border-radius:28px;
        }
        .cta-wrap::before {
          content:''; position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size:40px 40px;
        }

        /* ── Responsive ── */
        .two-col      { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
        .svc-grid     { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
        .hiw-grid     { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
        .kf-grid      { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
        .other-grid   { display:grid; grid-template-columns:1fr 1fr; gap:28px; }

        @media(max-width:1024px) {
          .svc-grid { grid-template-columns:repeat(2,1fr); }
          .hiw-grid { grid-template-columns:repeat(2,1fr); }
          .kf-grid  { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:768px) {
          .two-col    { grid-template-columns:1fr; }
          .other-grid { grid-template-columns:1fr; }
          .kf-grid    { grid-template-columns:1fr; }
          .tab-img-col { display:none; }
        }
        @media(max-width:600px) {
          .svc-grid { grid-template-columns:1fr; }
          .hiw-grid { grid-template-columns:1fr 1fr; }
        }
        @media(max-width:400px) {
          .hiw-grid { grid-template-columns:1fr; }
        }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section className="hero-bg" style={{ padding: "90px 0 80px" }}>
        <div className="hero-grid" />
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
        />
        <div
          className="orb"
          style={{
            width: 350,
            height: 350,
            background:
              "radial-gradient(circle,rgba(31,78,140,.35) 0%,transparent 70%)",
            bottom: -130,
            left: -60,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <div className="badge-pill" style={{ margin: "0 auto 20px" }}>
            📦 Logistics Services
          </div>
          <h1
            style={{
              fontSize: "clamp(32px,6vw,68px)",
              fontWeight: 900,
              color: "white",
              marginBottom: 18,
              lineHeight: 1.1,
            }}
          >
            Our{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#FF6B2B,#FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Services
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px,2.5vw,18px)",
              color: "rgba(255,255,255,.72)",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Comprehensive logistics solutions tailored to meet your business
            needs. From express delivery to complete supply chain management,
            we've got you covered.
          </p>
        </div>
      </section>

      {/* ══════════ WHAT IS IT ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col">
            {/* Left */}
            <div>
              <div className="badge-pill" style={{ marginBottom: 20 }}>
                🤔 About Our Services
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                  marginBottom: 22,
                }}
              >
                <div className="accent-bar" />
                <h2
                  style={{
                    fontSize: "clamp(24px,3.5vw,36px)",
                    fontWeight: 900,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  What is it?
                </h2>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "#6B7280",
                  lineHeight: 1.9,
                  marginBottom: 16,
                }}
              >
                ParcelSetu offers comprehensive delivery and courier services
                tailored specifically for D2C & E-commerce businesses. We
                provide standard, same-day, and next-day delivery options to
                meet your diverse shipping needs.
              </p>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.9 }}>
                Our advanced logistics infrastructure and cutting-edge
                technology ensure efficient routes, fast transit times, and
                exceptional customer experiences. Whether you need express
                delivery for urgent shipments or scheduled delivery for regular
                orders, we've got you covered with reliable and cost-effective
                solutions.
              </p>
            </div>
            {/* Right */}
            <div
              style={{
                position: "relative",
                height: 360,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 56px rgba(0,0,0,.1)",
                border: "1.5px solid #F3F4F6",
              }}
            >
              <Image
                src="/images/serives.png"
                alt="ParcelSetu Services"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ TABBED SERVICES ══════════ */}
      <section style={{ padding: "72px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              🚀 Service Types
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,4vw,40px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Our Core Offerings
            </h2>
            <div className="sdivider" />
          </div>

          {/* Tab pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`svc-tab${activeTab === tab ? " on" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="tab-content-card">
            <div className="tab-accent-bar" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
              }}
            >
              {/* Image */}
              <div
                className="tab-img-col"
                style={{
                  position: "relative",
                  height: 400,
                  borderRadius: "0 0 0 28px",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg,rgba(15,28,53,.2),transparent)",
                  }}
                />
              </div>
              {/* Text */}
              <div
                style={{
                  padding: "48px 44px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className="badge-pill"
                  style={{ marginBottom: 18, alignSelf: "flex-start" }}
                >
                  ✨ Featured
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 20,
                  }}
                >
                  <div className="accent-bar" />
                  <h2
                    style={{
                      fontSize: "clamp(20px,3vw,28px)",
                      fontWeight: 900,
                      color: "#111827",
                      lineHeight: 1.2,
                    }}
                  >
                    {tabContent[activeTab].title}
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "#6B7280",
                    lineHeight: 1.9,
                    marginBottom: 28,
                  }}
                >
                  {tabContent[activeTab].description}
                </p>
                <Link
                  href="/contactus"
                  className="btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ OTHER SERVICES ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 40,
            }}
          >
            <div className="accent-bar" />
            <div>
              <div className="badge-pill" style={{ marginBottom: 8 }}>
                ➕ More Options
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px,3.5vw,34px)",
                  fontWeight: 900,
                  color: "#111827",
                }}
              >
                Other Services
              </h2>
            </div>
          </div>

          <div className="other-grid">
            {[
              {
                title: "Hyperlocal & Quick Commerce",
                desc: "Enjoy rapid deliveries within hours or choose flexible slots for same day or next day service. Perfect for groceries, medicines, and urgent essentials with real-time tracking.",
              },
              {
                title: "SME & Personal Courier",
                desc: "On-demand pickup and drop services within the city for individuals and small businesses. Affordable, reliable, and backed by our fast-growing last-mile delivery network.",
              },
            ].map((card, i) => (
              <div key={i} className="other-card">
                <div
                  style={{
                    position: "relative",
                    height: 260,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/0.png"
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover", transition: "transform .5s" }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,rgba(15,28,53,.5),transparent)",
                    }}
                  />
                </div>
                <div style={{ padding: "28px 28px 32px" }}>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 10,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6B7280",
                      lineHeight: 1.8,
                      marginBottom: 22,
                    }}
                  >
                    {card.desc}
                  </p>
                  <Link href="/contactus" className="btn-sm-accent">
                    Know More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES GRID ══════════ */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              🗂️ Full Range
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,4vw,40px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Our Comprehensive Services
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Discover our wide range of logistics solutions designed to meet
              all your business needs
            </p>
            <div className="sdivider" />
          </div>

          <div className="svc-grid">
            {services.map((svc, i) => (
              <div key={i} className="svc-card">
                <div className="svc-icon-wrap">{svc.icon}</div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 8,
                    textAlign: "center",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    lineHeight: 1.7,
                    marginBottom: 14,
                    minHeight: 56,
                  }}
                >
                  {svc.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 7,
                  }}
                >
                  {svc.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        fontSize: 13,
                        color: "#374151",
                      }}
                    >
                      <span
                        style={{
                          color: "#FF6B2B",
                          fontWeight: 900,
                          fontSize: 14,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW WE WORK ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              ⚙️ Process
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,4vw,40px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              How We <span style={{ color: "#FF6B2B" }}>Work</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Simple, streamlined process to get your shipments delivered
              efficiently
            </p>
            <div className="sdivider" />
          </div>

          <div style={{ position: "relative" }}>
            {/* Connector */}
            <div
              style={{
                position: "absolute",
                top: 50,
                left: "12%",
                width: "76%",
                height: 2,
                background: "linear-gradient(90deg,#FF6B2B,#1F4E8C)",
                opacity: 0.18,
                borderRadius: 1,
              }}
            />
            <div className="hiw-grid">
              {howItWorks.map((step, i) => (
                <div key={i} className="hiw-card">
                  <div
                    className="hiw-num"
                    style={{
                      background: `linear-gradient(135deg,${step.color},${step.color}cc)`,
                    }}
                  >
                    {step.step}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      background: "linear-gradient(135deg,#FF6B2B,#1F4E8C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      marginBottom: 10,
                    }}
                  >
                    Step {i + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 10,
                    }}
                  >
                    {step.label}
                  </h3>
                  <p
                    style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.6 }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ KEY FEATURES ══════════ */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg,#F8FAFC 0%,#F1F5F9 100%)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              🏆 Advantages
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,4vw,40px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Why Our Services Stand Out
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Experience the difference with our innovative and reliable
              logistics solutions
            </p>
            <div className="sdivider" />
          </div>

          <div className="kf-grid">
            {keyFeatures.map((kf, i) => (
              <div key={i} className="kf-card" style={{ background: kf.bg }}>
                <div
                  style={{
                    fontSize: 48,
                    marginBottom: 20,
                    display: "block",
                    transition: "transform .3s",
                  }}
                >
                  {kf.emoji}
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "white",
                    marginBottom: 14,
                  }}
                >
                  {kf.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,.78)",
                    lineHeight: 1.8,
                  }}
                >
                  {kf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            className="cta-wrap"
            style={{
              padding: "56px 48px",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              className="orb"
              style={{
                width: 300,
                height: 300,
                background:
                  "radial-gradient(circle,rgba(255,107,43,.2) 0%,transparent 70%)",
                top: -100,
                right: -60,
              }}
            />
            <div
              className="badge-pill"
              style={{
                margin: "0 auto 20px",
                borderColor: "rgba(255,107,43,.4)",
              }}
            >
              💬 Let's Talk
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,4vw,38px)",
                fontWeight: 900,
                color: "white",
                marginBottom: 14,
                position: "relative",
                zIndex: 1,
              }}
            >
              Need a Custom Solution?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,.7)",
                marginBottom: 36,
                maxWidth: 480,
                margin: "0 auto 36px",
                lineHeight: 1.7,
                position: "relative",
                zIndex: 1,
              }}
            >
              Every business is unique. Let us create a logistics solution that
              fits your specific requirements. Contact our team to discuss your
              needs.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Link
                href="/contactus"
                className="btn-accent"
                style={{ fontSize: 15, padding: "14px 32px" }}
              >
                Get a Quote →
              </Link>
              <Link
                href="/aboutus"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,.12)",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "50px",
                  fontSize: 15,
                  fontWeight: 800,
                  textDecoration: "none",
                  border: "2px solid rgba(255,255,255,.25)",
                  backdropFilter: "blur(8px)",
                  transition: "all .3s",
                  fontFamily: "inherit",
                }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
