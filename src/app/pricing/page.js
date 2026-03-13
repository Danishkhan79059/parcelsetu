"use client";

import Link from "next/link";
import { theme } from "@/app/constants/theme";

const plans = [
  {
    name: "Lite",
    badge: "Starter",
    emoji: "🌱",
    description:
      "Perfect for new and growing sellers who want reliable shipping support without fixed commitments.",
    price: "₹26",
    unit: "/500 gms*",
    highlight: false,
    buttonLabel: "Create an account",
    buttonHref: "https://app.parcelsetu.com",
    popular: false,
    features: [
      "Single ecommerce / marketplace channel integration",
      "Domestic surface & air shipping across major pincodes",
      "Basic NDR & RTO management via dashboard",
      "Email & chat support during business hours",
    ],
  },
  {
    name: "Professional",
    badge: "Best for Ecommerce Brands",
    emoji: "🚀",
    description:
      "Ideal for D2C & marketplace brands that want lower per‑shipment cost, automation and stronger control on logistics.",
    price: "₹20",
    unit: "/500 gms*",
    highlight: true,
    buttonLabel: "Start with Professional",
    buttonHref: "https://app.parcelsetu.com",
    popular: true,
    features: [
      "Plug‑and‑play integration with top ecommerce & marketplace channels",
      "Smart courier selection based on speed, cost & performance",
      "Priority support with dedicated logistics success manager",
      "Automated NDR communication, RTO control & exception handling",
      "Branded tracking page, notifications & post‑delivery experience",
    ],
  },
  {
    name: "Enterprise",
    badge: "Shipping Solution",
    emoji: "🏢",
    description:
      "Custom-built shipping programs for high-volume shippers, 3PLs and large enterprises.",
    price: "Let's talk",
    unit: "for a custom quote",
    highlight: false,
    buttonLabel: "Contact sales",
    buttonHref: "/contactus",
    popular: false,
    features: [
      "Pan‑India multi-warehouse & multi-origin support",
      "Dedicated key account manager & operations team",
      "Custom pricing slabs & credit terms as per volume",
      "API-first integrations with ERP, WMS & OMS systems",
      "Custom analytics, SLA reporting & governance reviews",
    ],
  },
];

export default function PricingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Outfit','Segoe UI',sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; }

        /* ── Page bg ── */
        .page-bg {
          background: linear-gradient(160deg,#0F1C35 0%,#1F4E8C 40%,#1a3a6e 70%,#0F1C35 100%);
          position: relative; overflow: hidden;
          min-height: 100vh; padding: 80px 24px 100px;
        }
        .page-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size: 48px 48px;
        }
        .orb { position: absolute; border-radius: 50%; pointer-events: none; }

        /* ── Badge pill ── */
        .badge-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,107,43,.14); color: #FF6B2B;
          padding: 8px 22px; border-radius: 100px;
          font-size: 13px; font-weight: 700; letter-spacing: .04em;
          border: 1px solid rgba(255,107,43,.3);
        }
        .sdivider { width: 52px; height: 4px; background: linear-gradient(90deg,#FF6B2B,#1F4E8C); border-radius: 2px; margin: 14px auto 0; }

        /* ── Cards ── */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }

        .plan-card {
          background: rgba(255,255,255,.05);
          backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255,255,255,.1);
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all .35s ease;
          position: relative;
        }
        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 32px 64px rgba(0,0,0,.35);
          border-color: rgba(255,255,255,.2);
        }
        .plan-card.featured {
          background: white;
          border-color: rgba(255,107,43,.5);
          box-shadow: 0 28px 72px rgba(255,107,43,.25);
          transform: translateY(-12px) scale(1.02);
        }
        .plan-card.featured:hover {
          transform: translateY(-20px) scale(1.02);
          box-shadow: 0 40px 80px rgba(255,107,43,.35);
        }

        /* ── Popular ribbon ── */
        .popular-ribbon {
          position: absolute; top: 0; left: 0; right: 0;
          background: linear-gradient(135deg,#FF6B2B,#e55a1c);
          padding: 8px 0; text-align: center;
          font-size: 11px; font-weight: 800; color: white;
          text-transform: uppercase; letter-spacing: .1em;
        }

        /* ── Card header ── */
        .card-header-dark {
          padding: 36px 32px 28px;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.03);
        }
        .card-header-featured {
          padding: 36px 32px 28px;
          border-bottom: 1px solid #F3F4F6;
          background: linear-gradient(135deg,#0F1C35,#1F4E8C);
          position: relative; overflow: hidden;
        }
        .card-header-featured::before {
          content: ''; position: absolute; width: 200px; height: 200px;
          border-radius: 50%; background: radial-gradient(circle,rgba(255,107,43,.25) 0%,transparent 70%);
          top: -80px; right: -60px;
        }

        /* ── Card body ── */
        .card-body { padding: 28px 32px 32px; flex: 1; display: flex; flex-direction: column; }

        /* ── Feature list ── */
        .feat-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 13.5px; color: rgba(255,255,255,.78);
          padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,.06);
        }
        .feat-item:last-child { border-bottom: none; }
        .feat-item.dark-text { color: #374151; border-bottom-color: #F3F4F6; }
        .feat-check-dark {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
          background: rgba(255,107,43,.15); border: 1.5px solid rgba(255,107,43,.4);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; color: #FF6B2B; font-weight: 900;
        }
        .feat-check-featured {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
          background: linear-gradient(135deg,#FF6B2B,#e55a1c);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; color: white; font-weight: 900;
        }
        .feat-check-light {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
          background: rgba(31,78,140,.08); border: 1.5px solid rgba(31,78,140,.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; color: #1F4E8C; font-weight: 900;
        }

        /* ── Buttons ── */
        .btn-orange {
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,#FF6B2B,#e55a1c); color: white;
          padding: 13px 24px; border-radius: 50px; font-size: 14px; font-weight: 800;
          text-decoration: none; transition: all .3s; font-family: inherit;
          box-shadow: 0 8px 24px rgba(255,107,43,.35);
        }
        .btn-orange:hover { transform: translateY(-2px); box-shadow: 0 14px 36px rgba(255,107,43,.5); }
        .btn-ghost-dark {
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,.08); color: rgba(255,255,255,.9);
          padding: 13px 24px; border-radius: 50px; font-size: 14px; font-weight: 800;
          text-decoration: none; transition: all .3s; font-family: inherit;
          border: 1.5px solid rgba(255,255,255,.2);
        }
        .btn-ghost-dark:hover { background: rgba(255,255,255,.15); transform: translateY(-2px); }
        .btn-navy {
          display: flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg,#0F1C35,#1F4E8C); color: white;
          padding: 13px 24px; border-radius: 50px; font-size: 14px; font-weight: 800;
          text-decoration: none; transition: all .3s; font-family: inherit;
          box-shadow: 0 8px 24px rgba(31,78,140,.3);
        }
        .btn-navy:hover { background: linear-gradient(135deg,#FF6B2B,#e55a1c); transform: translateY(-2px); box-shadow: 0 12px 32px rgba(255,107,43,.4); }

        /* ── Responsive ── */
        @media(max-width: 1024px) { .cards-grid { grid-template-columns: 1fr; max-width: 480px; } .plan-card.featured { transform: none; } .plan-card.featured:hover { transform: translateY(-10px); } }
        @media(max-width: 600px)  { .page-bg { padding: 60px 16px 80px; } .card-header-dark, .card-header-featured, .card-body { padding-left: 22px; padding-right: 22px; } }
      `}</style>

      <div className="page-bg">
        <div className="page-grid" />
        <div
          className="orb"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle,rgba(255,107,43,.12) 0%,transparent 70%)",
            top: -250,
            right: -150,
          }}
        />
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle,rgba(31,78,140,.2) 0%,transparent 70%)",
            bottom: -200,
            left: -100,
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* ── Hero ── */}
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="badge-pill" style={{ margin: "0 auto 20px" }}>
              💰 Simple Pricing
            </div>
            <h1
              style={{
                fontSize: "clamp(28px,5vw,56px)",
                fontWeight: 900,
                color: "white",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Choose the right{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#FF6B2B,#FFD700)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ParcelSetu
              </span>{" "}
              plan
            </h1>
            <p
              style={{
                fontSize: "clamp(14px,2vw,17px)",
                color: "rgba(255,255,255,.65)",
                maxWidth: 540,
                margin: "0 auto 12px",
                lineHeight: 1.8,
              }}
            >
              Start with flexible pay‑as‑you‑ship plans and scale into
              enterprise‑grade logistics without changing your platform or
              tools.
            </p>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,.35)",
                marginTop: 8,
              }}
            >
              *Illustrative base rate for metro‑to‑metro shipping. Final pricing
              may vary by lane, service type and volume.
            </p>
            <div className="sdivider" />
          </div>

          {/* ── Cards ── */}
          <div className="cards-grid">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card${plan.highlight ? " featured" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-ribbon">⭐ Most Popular</div>
                )}

                {/* Header */}
                {plan.highlight ? (
                  <div
                    className="card-header-featured"
                    style={{ paddingTop: plan.popular ? 48 : 36 }}
                  >
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: "rgba(255,107,43,.9)",
                          textTransform: "uppercase",
                          letterSpacing: ".1em",
                          marginBottom: 8,
                        }}
                      >
                        {plan.badge}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          marginBottom: 10,
                        }}
                      >
                        <span style={{ fontSize: 32 }}>{plan.emoji}</span>
                        <h2
                          style={{
                            fontSize: 26,
                            fontWeight: 900,
                            color: "white",
                          }}
                        >
                          {plan.name}
                        </h2>
                      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,.7)",
                          lineHeight: 1.7,
                          marginBottom: 20,
                        }}
                      >
                        {plan.description}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: 6,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 36,
                            fontWeight: 900,
                            color: "white",
                          }}
                        >
                          {plan.price}
                        </span>
                        <span
                          style={{
                            fontSize: 14,
                            color: "rgba(255,255,255,.55)",
                            fontWeight: 600,
                          }}
                        >
                          {plan.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="card-header-dark"
                    style={{ paddingTop: plan.popular ? 48 : 36 }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: "rgba(255,107,43,.8)",
                        textTransform: "uppercase",
                        letterSpacing: ".1em",
                        marginBottom: 8,
                      }}
                    >
                      {plan.badge}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 10,
                      }}
                    >
                      <span style={{ fontSize: 32 }}>{plan.emoji}</span>
                      <h2
                        style={{
                          fontSize: 24,
                          fontWeight: 900,
                          color: "white",
                        }}
                      >
                        {plan.name}
                      </h2>
                    </div>
                    <p
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,.55)",
                        lineHeight: 1.7,
                        marginBottom: 20,
                      }}
                    >
                      {plan.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          fontSize: plan.price.length > 4 ? 22 : 34,
                          fontWeight: 900,
                          color: "white",
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,.4)",
                          fontWeight: 600,
                        }}
                      >
                        {plan.unit}
                      </span>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="card-body">
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 28px",
                      flex: 1,
                    }}
                  >
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className={`feat-item${plan.highlight ? " dark-text" : ""}`}
                      >
                        <div
                          className={
                            plan.highlight
                              ? "feat-check-featured"
                              : "feat-check-dark"
                          }
                        >
                          ✓
                        </div>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "auto" }}>
                    <Link
                      href={plan.buttonHref}
                      className={
                        plan.highlight
                          ? "btn-orange"
                          : plan.name === "Enterprise"
                            ? "btn-ghost-dark"
                            : "btn-ghost-dark"
                      }
                    >
                      {plan.buttonLabel} {plan.highlight ? "→" : ""}
                    </Link>
                    {plan.highlight && (
                      <p
                        style={{
                          marginTop: 10,
                          fontSize: 11,
                          color: "#9CA3AF",
                          textAlign: "center",
                        }}
                      >
                        Recommended for brands shipping 300+ orders per month
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom note ── */}
          <div
            style={{
              textAlign: "center",
              marginTop: 60,
              padding: "32px 24px",
              background: "rgba(255,255,255,.04)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: 20,
              maxWidth: 700,
              margin: "60px auto 0",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.5)",
                lineHeight: 1.8,
              }}
            >
              <span style={{ color: "rgba(255,107,43,.8)", fontWeight: 700 }}>
                Need help choosing?
              </span>{" "}
              Talk to our logistics experts and we'll recommend the right plan
              for your business.{" "}
              <Link
                href="/contactus"
                style={{
                  color: "#FF6B2B",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
