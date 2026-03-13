import Image from "next/image";
import Link from "next/link";
import { theme } from "@/app/constants/theme";

export default function B2BShipping() {
  const useCases = [
    {
      icon: "🏭",
      title: "Plant to Warehouse",
      desc: "Scheduled and on-demand movement of finished goods and raw material from factories to regional / central warehouses.",
      points: [
        "Same-day & next-day dispatch",
        "Full-truckload & part-truckload options",
        "Route planning & milk runs",
      ],
      color: "#1F4E8C",
    },
    {
      icon: "🏪",
      title: "Warehouse to Distributor / Dealer",
      desc: "Fast replenishment for dealers, wholesalers and large-format retailers to keep shelves always stocked.",
      points: [
        "Fixed routes & dedicated vehicles",
        "Shipment visibility for your partners",
        "POD and reconciliation support",
      ],
      color: "#FF6B2B",
    },
    {
      icon: "🔒",
      title: "Project & High-Value Cargo",
      desc: "Special handling for sensitive, high-value components and time-bound project shipments.",
      points: [
        "Secured vehicles & monitored routes",
        "Insurance & documentation support",
        "Dedicated coordination team",
      ],
      color: "#A855F7",
    },
  ];

  const whyChoose = [
    {
      title: "High On-Time Performance",
      desc: "Optimised routing, disciplined line-haul planning and strong partner network to achieve high on-time delivery performance for B2B shipments.",
      bg: "linear-gradient(135deg,#0F1C35,#1F4E8C)",
    },
    {
      title: "End-to-End Visibility",
      desc: "Track every movement from pickup to delivery, with status updates, events and POD information centralised for your operations team.",
      bg: "linear-gradient(135deg,#FF6B2B,#e55a1c)",
    },
    {
      title: "Process-Driven Operations",
      desc: "Standard operating procedures, checklists and escalation matrices to reduce damage, pilferage and operational leakages.",
      bg: "linear-gradient(135deg,#1a3a6e,#2563EB)",
    },
  ];

  const onboardSteps = [
    {
      step: "01",
      title: "Requirement Study",
      text: "We understand your lanes, volumes, service levels and current pain points.",
      color: "#1F4E8C",
    },
    {
      step: "02",
      title: "Network Design",
      text: "We propose an optimised network, routes, vehicles and operating model.",
      color: "#FF6B2B",
    },
    {
      step: "03",
      title: "Pilot & Stabilisation",
      text: "We run pilots on key lanes, fine-tune operations and standardise processes.",
      color: "#A855F7",
    },
    {
      step: "04",
      title: "Scale Up",
      text: "We expand coverage, add lanes and continuously improve performance.",
      color: "#10B981",
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
        * { box-sizing: border-box; }

        .badge-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,107,43,.12); color: #FF6B2B;
          padding: 7px 18px; border-radius: 100px;
          font-size: 12px; font-weight: 700; letter-spacing: .04em;
          border: 1px solid rgba(255,107,43,.25);
        }
        .sdivider { width: 52px; height: 4px; background: linear-gradient(90deg,#FF6B2B,#1F4E8C); border-radius: 2px; margin: 14px auto 0; }
        .accent-bar { width: 4px; height: 52px; border-radius: 2px; background: linear-gradient(180deg,#FF6B2B,#1F4E8C); flex-shrink: 0; }
        .orb { position: absolute; border-radius: 50%; pointer-events: none; }

        /* Hero */
        .hero-bg {
          position: relative; overflow: hidden;
          background: linear-gradient(135deg,#0F1C35 0%,#1F4E8C 60%,#1a3a6e 100%);
        }
        .hero-bg::before {
          content: ''; position: absolute; inset: 0;
          background: url() center/cover no-repeat; opacity: .1;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
          background-size: 48px 48px;
        }
        .hero-gif-wrap {
          position: absolute; inset: 0; opacity: .18; pointer-events: none;
        }

        /* Buttons */
        .btn-accent {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg,#FF6B2B,#e55a1c); color: white;
          padding: 13px 28px; border-radius: 50px; font-size: 14px; font-weight: 800;
          text-decoration: none; transition: all .3s ease;
          box-shadow: 0 8px 24px rgba(255,107,43,.3); font-family: inherit;
        }
        .btn-accent:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(255,107,43,.45); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,.1); color: white;
          padding: 13px 28px; border-radius: 50px; font-size: 14px; font-weight: 800;
          text-decoration: none; border: 2px solid rgba(255,255,255,.3);
          backdrop-filter: blur(8px); transition: all .3s ease; font-family: inherit;
        }
        .btn-ghost:hover { background: rgba(255,255,255,.2); transform: translateY(-2px); }

        /* Use case cards */
        .uc-card {
          background: white; border-radius: 22px; padding: 32px 26px;
          border: 1.5px solid #F3F4F6;
          transition: all .35s ease; position: relative; overflow: hidden;
        }
        .uc-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          transform: scaleX(0); transform-origin: left; transition: transform .4s ease;
        }
        .uc-card:hover { transform: translateY(-8px); box-shadow: 0 24px 50px rgba(0,0,0,.1); border-color: transparent; }
        .uc-card:hover::before { transform: scaleX(1); }
        .uc-icon {
          width: 60px; height: 60px; border-radius: 18px; margin-bottom: 18px;
          display: flex; align-items: center; justify-content: center; font-size: 26px;
          background: rgba(31,78,140,.07); transition: all .3s ease;
        }
        .uc-card:hover .uc-icon { transform: scale(1.1) rotate(-5deg); }

        /* Why choose cards */
        .wc-card {
          border-radius: 24px; padding: 38px 32px;
          transition: all .35s ease;
        }
        .wc-card:hover { transform: translateY(-8px); box-shadow: 0 28px 56px rgba(0,0,0,.2); }

        /* Onboard steps */
        .ob-card {
          background: white; border-radius: 22px; padding: 30px 22px; text-align: center;
          border: 2px solid #F3F4F6; transition: all .35s ease;
        }
        .ob-card:hover { transform: translateY(-8px); box-shadow: 0 24px 50px rgba(0,0,0,.1); border-color: #FF6B2B; }
        .ob-num {
          width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; font-weight: 900; color: white;
          transition: transform .3s; box-shadow: 0 12px 28px rgba(0,0,0,.18);
        }
        .ob-card:hover .ob-num { transform: scale(1.1); }

        /* CTA */
        .cta-wrap {
          background: linear-gradient(135deg,#0F1C35,#1F4E8C);
          border-radius: 28px; position: relative; overflow: hidden;
        }
        .cta-wrap::before {
          content: ''; position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size: 40px 40px;
        }

        /* Grids */
        .two-col    { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: center; }
        .three-col  { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .four-col   { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }

        @media(max-width: 1024px) { .four-col  { grid-template-columns: repeat(2,1fr); } }
        @media(max-width: 768px)  { .two-col   { grid-template-columns: 1fr; } .three-col { grid-template-columns: 1fr; } }
        @media(max-width: 640px)  { .three-col { grid-template-columns: 1fr; } .four-col  { grid-template-columns: 1fr 1fr; } }
        @media(max-width: 400px)  { .four-col  { grid-template-columns: 1fr; } }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section className="hero-bg" style={{ padding: "90px 0 80px" }}>
        <div className="hero-grid" />
        {/* GIF as subtle overlay */}
        <div className="hero-gif-wrap">
          <Image
            src="/images/b2b.gif"
            alt=""
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
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
            bottom: -120,
            left: -60,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "0 24px",
            maxWidth: 860,
            margin: "0 auto",
          }}
        >
          <div className="badge-pill" style={{ marginBottom: 20 }}>
            🚛 B2B & Critical Logistics
          </div>
          <h1
            style={{
              fontSize: "clamp(30px,5.5vw,62px)",
              fontWeight: 900,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            B2B &{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#FF6B2B,#FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Critical Logistics
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px,2vw,18px)",
              color: "rgba(255,255,255,.74)",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 600,
            }}
          >
            Same-day and next-day B2B deliveries from plants to distributors,
            warehouses, and hubs – with full visibility, strict SLAs, and secure
            handling for your critical shipments.
          </p>
          {/* Road accent */}
          <div
            style={{
              width: 320,
              height: 3,
              marginBottom: 32,
              background:
                "repeating-linear-gradient(90deg,#FF6B2B 0,#FF6B2B 36px,transparent 36px,transparent 56px)",
              opacity: 0.55,
              borderRadius: 2,
            }}
          />
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contactus" className="btn-accent">
              Talk to Logistics Expert
            </Link>
            <Link href="/services" className="btn-ghost">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT IS B2B ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="two-col">
            {/* Left */}
            <div>
              <div className="badge-pill" style={{ marginBottom: 20 }}>
                📖 Overview
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
                    fontSize: "clamp(22px,3.5vw,34px)",
                    fontWeight: 900,
                    color: "#111827",
                    lineHeight: 1.2,
                  }}
                >
                  What is B2B &amp; Critical Logistics?
                </h2>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "#6B7280",
                  lineHeight: 1.9,
                  marginBottom: 14,
                }}
              >
                B2B &amp; critical logistics focuses on time-bound, high-value
                and operationally sensitive shipments between manufacturers,
                regional distribution centres, wholesalers, and large retail
                networks.
              </p>
              <p
                style={{
                  fontSize: 15,
                  color: "#6B7280",
                  lineHeight: 1.9,
                  marginBottom: 14,
                }}
              >
                At ParcelSetu, we design dedicated movement plans, secure
                routing and optimized consolidation so that your production
                lines never stop due to missing parts and your distributors
                always receive stock on time.
              </p>
              <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.9 }}>
                From plant dispatch to last-mile delivery at DCs, our network
                and technology ensure high on-time delivery rate, real-time
                tracking, and proactive exception management.
              </p>
            </div>
            {/* Right */}
            <div
              style={{
                position: "relative",
                height: 400,
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 56px rgba(0,0,0,.1)",
                border: "1.5px solid #F3F4F6",
              }}
            >
              <Image
                src="/images/ship.png"
                alt="B2B logistics operations"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg,rgba(15,28,53,.15),transparent)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ USE CASES ══════════ */}
      <section style={{ padding: "72px 24px", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 44,
            }}
          >
            <div className="accent-bar" />
            <div>
              <div className="badge-pill" style={{ marginBottom: 8 }}>
                🗺️ Use Cases
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px,3.5vw,34px)",
                  fontWeight: 900,
                  color: "#111827",
                }}
              >
                Where Our B2B Logistics Fits Best
              </h2>
            </div>
          </div>

          <div className="three-col">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="uc-card"
                style={{ "--uc-color": uc.color }}
              >
                <style>{`.uc-card:nth-child(${i + 1})::before { background: linear-gradient(90deg,${uc.color},${uc.color}88); }`}</style>
                <div
                  className="uc-icon"
                  style={{
                    background: `rgba(${uc.color === "#1F4E8C" ? "31,78,140" : uc.color === "#FF6B2B" ? "255,107,43" : "168,85,247"},.08)`,
                  }}
                >
                  {uc.icon}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 10,
                  }}
                >
                  {uc.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    lineHeight: 1.8,
                    marginBottom: 16,
                  }}
                >
                  {uc.desc}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {uc.points.map((p, j) => (
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
                          color: uc.color,
                          fontWeight: 900,
                          fontSize: 14,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              ⭐ Why Us
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,4vw,38px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 12,
              }}
            >
              Why Businesses Choose ParcelSetu for B2B Shipments
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6B7280",
                maxWidth: 580,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Built for manufacturers, distributors and enterprises that cannot
              afford delays and uncertainty in their supply chain.
            </p>
            <div className="sdivider" />
          </div>

          <div className="three-col">
            {whyChoose.map((wc, i) => (
              <div key={i} className="wc-card" style={{ background: wc.bg }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>
                  {["📦", "🔍", "⚙️"][i]}
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 900,
                    color: "white",
                    marginBottom: 14,
                  }}
                >
                  {wc.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,.76)",
                    lineHeight: 1.8,
                  }}
                >
                  {wc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ONBOARDING STEPS ══════════ */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              🚀 Onboarding
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,4vw,38px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 12,
              }}
            >
              How We Onboard B2B Clients
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6B7280",
                maxWidth: 520,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A structured engagement model that makes it simple to start, scale
              and optimise your B2B logistics with us.
            </p>
            <div className="sdivider" />
          </div>

          <div style={{ position: "relative" }}>
            {/* Connector */}
            <div
              style={{
                position: "absolute",
                top: 46,
                left: "12%",
                width: "76%",
                height: 2,
                background: "linear-gradient(90deg,#FF6B2B,#1F4E8C)",
                opacity: 0.18,
                borderRadius: 1,
              }}
            />
            <div className="four-col">
              {onboardSteps.map((step, i) => (
                <div key={i} className="ob-card">
                  <div
                    className="ob-num"
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
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 10,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}
                  >
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link
              href="/contactus"
              className="btn-accent"
              style={{ fontSize: 15, padding: "14px 36px" }}
            >
              Schedule a B2B Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ padding: "56px 24px", background: "white" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            className="cta-wrap"
            style={{ padding: "56px 44px", textAlign: "center" }}
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
            <div style={{ position: "relative", zIndex: 1 }}>
              <div className="badge-pill" style={{ margin: "0 auto 18px" }}>
                📞 Get in Touch
              </div>
              <h2
                style={{
                  fontSize: "clamp(22px,4vw,36px)",
                  fontWeight: 900,
                  color: "white",
                  marginBottom: 14,
                }}
              >
                Ready to Optimise Your B2B Supply Chain?
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,.7)",
                  marginBottom: 32,
                  maxWidth: 460,
                  margin: "0 auto 32px",
                  lineHeight: 1.7,
                }}
              >
                Talk to our logistics experts and get a customised B2B solution
                for your business.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="/contactus"
                  className="btn-accent"
                  style={{ fontSize: 15, padding: "14px 32px" }}
                >
                  Talk to Expert →
                </Link>
                <Link
                  href="/services"
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
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
