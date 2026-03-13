"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { theme } from "@/app/constants/theme";
import { Package, Calendar, Truck, CheckCircle2, Clock } from "lucide-react";
import { MapPin, User } from "lucide-react";

export default function Track() {
  const [trackingData, setTrackingData] = useState({
    awbNumber: "",
    orderId: "",
  });
  const [trackingType, setTrackingType] = useState("awb");
  const [isLoading, setIsLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState(null);
  const resultRef = useRef(null);

  const steps = [
    {
      title: "Order Confirmed",
      desc: "Shipment request registered with our courier partner.",
      icon: <Package className="w-6 h-6" />,
      color: "#10B981",
      bg: "from-emerald-500 to-green-400",
    },
    {
      title: "Package Collected",
      desc: "Courier partner has picked up your shipment.",
      icon: <User className="w-6 h-6" />,
      color: "#6366F1",
      bg: "from-indigo-500 to-indigo-400",
    },
    {
      title: "In Transit",
      desc: "Shipment is on its way to the destination.",
      icon: <Truck className="w-6 h-6" />,
      color: "#A855F7",
      bg: "from-purple-500 to-purple-400",
    },
    {
      title: "Out for Delivery",
      desc: "Delivery executive heading to customer's address.",
      icon: <Truck className="w-6 h-6" />,
      color: "#3B82F6",
      bg: "from-blue-500 to-blue-400",
    },
    {
      title: "Delivered",
      desc: "Shipment has reached the customer successfully.",
      icon: <MapPin className="w-6 h-6" />,
      color: "#FF6B2B",
      bg: "from-orange-500 to-amber-400",
    },
  ];

  const handleChange = (e) => {
    setTrackingData({ ...trackingData, [e.target.name]: e.target.value });
    setError(null);
    setTrackingResult(null);
  };
  const fmt = (s) => {
    if (!s) return "";
    const d = new Date(s.replace(" ", "T"));
    return isNaN(d)
      ? s
      : d.toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
  };
  const fmtT = (s) => {
    if (!s) return "";
    const d = new Date(s.replace(" ", "T"));
    return isNaN(d)
      ? s.split(" ")[1] || ""
      : d.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    setError(null);
    setTrackingResult(null);
    if (trackingType === "awb" && !trackingData.awbNumber.trim()) {
      setError("Please enter AWB Number");
      return;
    }
    if (trackingType === "order" && !trackingData.orderId.trim()) {
      setError("Please enter Order ID");
      return;
    }
    setIsLoading(true);
    try {
      const val =
        trackingType === "awb" ? trackingData.awbNumber : trackingData.orderId;
      const res = await fetch(
        `https://backend.sureship.in/tracking/trackall?awbs=${val}`,
      );
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      if (!data?.length) {
        setError(
          "No tracking information found. Please verify your AWB number.",
        );
        return;
      }
      if (!data[0].isSuccess) {
        setError(
          "Tracking information not available. Please verify and try again.",
        );
        return;
      }
      const api = data[0];
      const lastScan = api.scans?.at(-1);
      const timeline = (api.scans || [])
        .map((scan, i) => ({
          id: i + 1,
          status: scan.Scan,
          location: scan.ScannedLocation,
          date: fmt(scan.ScanDateTime || scan.StatusDateTime),
          time: fmtT(scan.ScanDateTime || scan.StatusDateTime),
          completed:
            scan.Scan?.toLowerCase().includes("delivered") ||
            i < api.scans.length - 1,
          instructions: scan.Instructions || scan.Scan || "",
        }))
        .reverse();
      setTrackingResult({
        trackingNumber: api.AWB || val,
        referenceNo: api.referenceNo,
        status: api.currentStatus,
        carrier: api.carrier,
        estimatedDelivery: fmt(api.estimatedDeliveryDate),
        timeline,
        shipmentDetails: {
          carrier: api.carrier,
          referenceNo: api.referenceNo,
          estimatedDelivery: fmt(api.estimatedDeliveryDate),
          status: api.currentStatus,
        },
      });
    } catch (err) {
      console.error(err);
      setError("Unable to fetch tracking information. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (trackingResult && resultRef.current)
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [trackingResult]);

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

        .hero-bg { background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 60%,#1a3a6e 100%); position:relative; overflow:hidden; }
        .hero-bg::before { content:''; position:absolute; inset:0; background:url() center/cover no-repeat; opacity:.12; }
        .hero-grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px); background-size:48px 48px; }
        .orb { position:absolute; border-radius:50%; pointer-events:none; }
        .badge { display:inline-flex; align-items:center; gap:8px; background:rgba(255,107,43,.13); color:#FF6B2B; padding:8px 20px; border-radius:100px; font-size:13px; font-weight:700; border:1px solid rgba(255,107,43,.28); }
        .sdivider { width:56px; height:4px; background:linear-gradient(90deg,#FF6B2B,#1F4E8C); border-radius:2px; margin:14px auto 0; }

        /* form card */
        .track-card { background:white; border-radius:28px; padding:40px 36px; border:1.5px solid #E5E7EB; box-shadow:0 24px 64px rgba(0,0,0,.08); position:relative; overflow:hidden; }
        .track-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#FF6B2B,#1F4E8C); }
        .toggle-wrap { display:flex; background:#F3F4F6; border-radius:14px; padding:5px; gap:4px; }
        .toggle-btn { flex:1; padding:10px 16px; border-radius:10px; font-size:14px; font-weight:700; border:none; cursor:pointer; transition:all .25s ease; font-family:inherit; color:#6B7280; background:transparent; text-align:center; }
        .toggle-btn.active { background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white; box-shadow:0 6px 18px rgba(255,107,43,.3); }
        .toggle-btn:not(.active):hover { background:#E5E7EB; color:#374151; }
        .track-input { flex:1; padding:14px 18px; font-size:14px; font-family:inherit; border:2px solid #E5E7EB; border-radius:14px; background:#FAFAFA; color:#111827; transition:all .25s ease; outline:none; min-width:0; }
        .track-input:focus { border-color:#FF6B2B; background:white; box-shadow:0 0 0 4px rgba(255,107,43,.1); }
        .track-btn { background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white; padding:14px 24px; border-radius:14px; font-size:15px; font-weight:800; border:none; cursor:pointer; transition:all .3s ease; font-family:inherit; white-space:nowrap; display:flex; align-items:center; justify-content:center; gap:8px; box-shadow:0 8px 24px rgba(255,107,43,.3); flex-shrink:0; }
        .track-btn:hover:not(:disabled) { transform:translateY(-2px); box-shadow:0 14px 32px rgba(255,107,43,.45); }
        .track-btn:disabled { opacity:.65; cursor:not-allowed; }

        /* result */
        .result-wrap { background:white; border-radius:28px; overflow:hidden; border:1.5px solid #E5E7EB; box-shadow:0 24px 64px rgba(0,0,0,.08); animation:fadeUp .5s ease forwards; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .status-banner { padding:28px 32px; background:linear-gradient(135deg,#0F1C35,#1F4E8C); position:relative; overflow:hidden; }
        .status-banner::before { content:''; position:absolute; width:250px; height:250px; border-radius:50%; background:radial-gradient(circle,rgba(255,107,43,.2) 0%,transparent 70%); top:-80px; right:-60px; }
        .tl-item { display:flex; gap:14px; padding:13px 10px; border-bottom:1px solid #F3F4F6; transition:background .2s; }
        .tl-item:last-child { border-bottom:none; }
        .tl-item:hover { background:#FAFAFA; border-radius:12px; }
        .tl-dot { width:32px; height:32px; border-radius:50%; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
        .detail-chip { display:flex; align-items:center; gap:12px; padding:14px 16px; background:#F8FAFC; border-radius:14px; border:1.5px solid #F3F4F6; transition:all .25s; }
        .detail-chip:hover { border-color:#E5E7EB; background:white; box-shadow:0 6px 20px rgba(0,0,0,.06); }
        .chip-icon { width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,#1F4E8C,#2563EB); display:flex; align-items:center; justify-content:center; flex-shrink:0; color:white; }

        /* steps */
        .step-card { background:white; border-radius:20px; padding:24px 18px; border:1.5px solid #F3F4F6; text-align:center; transition:all .35s ease; position:relative; overflow:hidden; }
        .step-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; transform:scaleX(0); transform-origin:left; transition:transform .4s ease; }
        .step-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,0,0,.09); border-color:transparent; }
        .step-card:hover::after { transform:scaleX(1); }
        .step-icon { width:62px; height:62px; border-radius:18px; margin:0 auto 14px; display:flex; align-items:center; justify-content:center; color:white; transition:transform .3s ease; }
        .step-card:hover .step-icon { transform:scale(1.1) rotate(-5deg); }
        .spin { animation:spin 1s linear infinite; }
        @keyframes spin { to{transform:rotate(360deg)} }

        /* ── RESPONSIVE LAYOUT CLASSES ── */
        .form-grid { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; }
        .illus-col { display:block; position:relative; }
        .input-row { display:flex; gap:12px; }
        .steps-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:20px; }
        .detail-grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .sbanner-row { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; }

        /* Tablet */
        @media(max-width:1024px){
          .steps-grid { grid-template-columns:repeat(3,1fr); }
        }
        /* Hide illustration, single column form */
        @media(max-width:900px){
          .form-grid { grid-template-columns:1fr; gap:0; max-width:560px; }
          .illus-col { display:none; }
        }
        /* Mobile */
        @media(max-width:640px){
          .track-card { padding:24px 18px !important; border-radius:20px; }
          .input-row { flex-direction:column; }
          .track-btn { width:100%; }
          .steps-grid { grid-template-columns:1fr 1fr; gap:12px; }
          .detail-grid { grid-template-columns:1fr; }
          .status-banner { padding:18px 16px !important; }
          .result-body { padding:18px 16px 22px !important; }
          .tl-item { gap:10px !important; }
          .sbanner-row { flex-direction:column; align-items:flex-start; }
          .hero-h1 { font-size:clamp(28px,8vw,44px) !important; }
        }
        /* Very small */
        @media(max-width:380px){
          .steps-grid { grid-template-columns:1fr; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-bg" style={{ padding: "72px 0" }}>
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
        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 20px",
          }}
        >
          <div className="badge" style={{ margin: "0 auto 20px" }}>
            📦 Real-Time Tracking
          </div>
          <h1
            className="hero-h1"
            style={{
              fontSize: "clamp(32px,6vw,68px)",
              fontWeight: 900,
              color: "white",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Track Your{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#FF6B2B,#FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Shipment
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px,2.5vw,18px)",
              color: "rgba(255,255,255,.72)",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Enter your AWB Number or Order ID to get live delivery updates
            instantly.
          </p>
        </div>
      </section>

      {/* ── FORM ─────────────────────────────────────────────── */}
      <section style={{ padding: "56px 20px", background: "white" }}>
        <div className="form-grid">
          {/* Illustration — desktop only */}
          <div className="illus-col">
            <div
              style={{
                position: "absolute",
                top: -40,
                left: -40,
                width: 280,
                height: 280,
                borderRadius: "50%",
                background: "rgba(255,107,43,.12)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: -20,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "rgba(31,78,140,.12)",
                filter: "blur(60px)",
                zIndex: 0,
              }}
            ></div>
            <Image
              src="/images/tracking.png"
              alt="Tracking illustration"
              width={900}
              height={650}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: 460,
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,.12))",
              }}
              priority
            />
          </div>

          {/* Form card */}
          <div className="track-card">
            <div style={{ marginBottom: 22 }}>
              <div className="badge" style={{ marginBottom: 14 }}>
                🔍 Track Now
              </div>
              <h2
                style={{
                  fontSize: "clamp(20px,4vw,28px)",
                  fontWeight: 900,
                  color: "#111827",
                  marginBottom: 8,
                  lineHeight: 1.2,
                }}
              >
                Where's Your
                <br />
                <span style={{ color: "#FF6B2B" }}>Package?</span>
              </h2>
              <p style={{ fontSize: 14, color: "#9CA3AF" }}>
                Get live updates on your shipment in seconds.
              </p>
            </div>

            <div className="toggle-wrap" style={{ marginBottom: 20 }}>
              {["awb", "order"].map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`toggle-btn${trackingType === t ? " active" : ""}`}
                  onClick={() => {
                    setTrackingType(t);
                    setError(null);
                    setTrackingResult(null);
                  }}
                >
                  {t === "awb" ? "📋 AWB Number" : "🛍️ Order ID"}
                </button>
              ))}
            </div>

            <form onSubmit={handleTrack}>
              <label
                style={{
                  display: "block",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: ".07em",
                  marginBottom: 8,
                }}
              >
                {trackingType === "awb" ? "AWB Number" : "Order ID"} *
              </label>
              <div className="input-row">
                <input
                  type="text"
                  required
                  name={trackingType === "awb" ? "awbNumber" : "orderId"}
                  value={
                    trackingType === "awb"
                      ? trackingData.awbNumber
                      : trackingData.orderId
                  }
                  onChange={handleChange}
                  placeholder={
                    trackingType === "awb"
                      ? "Enter your AWB Number"
                      : "Enter your Order ID"
                  }
                  className="track-input"
                />
                <button
                  type="submit"
                  className="track-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spin"
                        style={{
                          width: 17,
                          height: 17,
                          border: "3px solid rgba(255,255,255,.4)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          display: "inline-block",
                        }}
                      ></span>
                      Tracking...
                    </>
                  ) : (
                    "🔍 Track"
                  )}
                </button>
              </div>
              {error && (
                <div
                  style={{
                    marginTop: 12,
                    background: "#FEF2F2",
                    border: "1.5px solid #FECACA",
                    color: "#DC2626",
                    padding: "12px 14px",
                    borderRadius: 12,
                    fontSize: 14,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  ⚠️ {error}
                </div>
              )}
            </form>

            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 18,
                flexWrap: "wrap",
                borderTop: "1px solid #F3F4F6",
                paddingTop: 14,
              }}
            >
              {["🔒 Secure", "⚡ Real-Time", "📍 Live Location"].map((b, i) => (
                <span
                  key={i}
                  style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 600 }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULT ───────────────────────────────────────────── */}
      {trackingResult && (
        <section
          ref={resultRef}
          style={{
            padding: "16px 20px 56px",
            background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div className="result-wrap">
              <div className="status-banner">
                <div
                  className="sbanner-row"
                  style={{ position: "relative", zIndex: 1 }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "rgba(255,107,43,.85)",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                        marginBottom: 5,
                      }}
                    >
                      Shipment Status
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(15px,3vw,20px)",
                        fontWeight: 900,
                        color: "white",
                        marginBottom: 4,
                      }}
                    >
                      {trackingResult.status}
                    </div>
                    {trackingResult.carrier && (
                      <div
                        style={{ fontSize: 13, color: "rgba(255,255,255,.6)" }}
                      >
                        Carrier: {trackingResult.carrier}
                      </div>
                    )}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,.4)",
                        marginBottom: 3,
                        textTransform: "uppercase",
                        letterSpacing: ".06em",
                      }}
                    >
                      AWB Number
                    </div>
                    <div
                      style={{
                        fontSize: "clamp(13px,2.5vw,17px)",
                        fontWeight: 800,
                        color: "white",
                        marginBottom: 3,
                        wordBreak: "break-all",
                      }}
                    >
                      {trackingResult.trackingNumber}
                    </div>
                    {trackingResult.estimatedDelivery && (
                      <div
                        style={{ fontSize: 12, color: "rgba(255,255,255,.6)" }}
                      >
                        EDD: {trackingResult.estimatedDelivery}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div
                className="result-body"
                style={{ padding: "24px 24px 28px" }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 14,
                  }}
                >
                  📍 Tracking Timeline
                </h3>
                {trackingResult.timeline.map((ev, i) => (
                  <div key={ev.id} className="tl-item">
                    <div
                      style={{
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        className="tl-dot"
                        style={{
                          background: ev.completed
                            ? "linear-gradient(135deg,#FF6B2B,#e55a1c)"
                            : "#E5E7EB",
                          color: ev.completed ? "white" : "#9CA3AF",
                        }}
                      >
                        {ev.completed ? (
                          <CheckCircle2 style={{ width: 14, height: 14 }} />
                        ) : (
                          <Clock style={{ width: 14, height: 14 }} />
                        )}
                      </div>
                      {i < trackingResult.timeline.length - 1 && (
                        <div
                          style={{
                            width: 2,
                            flexGrow: 1,
                            minHeight: 14,
                            background: ev.completed
                              ? "linear-gradient(180deg,#FF6B2B,rgba(255,107,43,.25))"
                              : "#E5E7EB",
                            marginTop: 3,
                          }}
                        ></div>
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 6,
                        }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: ev.completed ? "#111827" : "#9CA3AF",
                              marginBottom: 2,
                            }}
                          >
                            {ev.status}
                          </p>
                          <p
                            style={{
                              fontSize: 12,
                              color: ev.completed ? "#6B7280" : "#C4C4C4",
                              wordBreak: "break-word",
                            }}
                          >
                            {ev.location}
                          </p>
                          {ev.instructions && ev.instructions !== ev.status && (
                            <p
                              style={{
                                fontSize: 11,
                                color: "#9CA3AF",
                                fontStyle: "italic",
                                marginTop: 2,
                              }}
                            >
                              {ev.instructions}
                            </p>
                          )}
                        </div>
                        {ev.date && (
                          <div style={{ textAlign: "right", flexShrink: 0 }}>
                            <p
                              style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: ev.completed ? "#374151" : "#9CA3AF",
                              }}
                            >
                              {ev.date}
                            </p>
                            <p
                              style={{
                                fontSize: 11,
                                color: ev.completed ? "#6B7280" : "#9CA3AF",
                              }}
                            >
                              {ev.time}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    borderTop: "1.5px solid #F3F4F6",
                    paddingTop: 20,
                    marginTop: 8,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 12,
                    }}
                  >
                    📦 Shipment Details
                  </h3>
                  <div className="detail-grid">
                    {[
                      {
                        icon: <Truck style={{ width: 14, height: 14 }} />,
                        label: "Carrier",
                        val: trackingResult.shipmentDetails.carrier,
                      },
                      {
                        icon: <Package style={{ width: 14, height: 14 }} />,
                        label: "Reference No.",
                        val: trackingResult.shipmentDetails.referenceNo,
                      },
                      {
                        icon: <Calendar style={{ width: 14, height: 14 }} />,
                        label: "Est. Delivery",
                        val:
                          trackingResult.shipmentDetails.estimatedDelivery ||
                          "Pending",
                      },
                      {
                        icon: (
                          <CheckCircle2 style={{ width: 14, height: 14 }} />
                        ),
                        label: "Current Status",
                        val: trackingResult.shipmentDetails.status,
                      },
                    ].map((d, i) => (
                      <div key={i} className="detail-chip">
                        <div className="chip-icon">{d.icon}</div>
                        <div style={{ minWidth: 0 }}>
                          <p
                            style={{
                              fontSize: 10,
                              color: "#9CA3AF",
                              fontWeight: 700,
                              textTransform: "uppercase",
                              letterSpacing: ".05em",
                              marginBottom: 2,
                            }}
                          >
                            {d.label}
                          </p>
                          <p
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "#111827",
                              wordBreak: "break-word",
                            }}
                          >
                            {d.val}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ORDER STEPS ──────────────────────────────────────── */}
      <section style={{ padding: "60px 20px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="badge" style={{ margin: "0 auto 16px" }}>
              📊 Order Flow
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,4vw,38px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 8,
              }}
            >
              What's Your Order Status?
            </h2>
            <p style={{ fontSize: 15, color: "#9CA3AF" }}>
              Track every step of your shipment journey
            </p>
            <div className="sdivider"></div>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <style>{`.step-card:nth-child(${index + 1})::after{background:linear-gradient(90deg,${step.color},${step.color}88)}`}</style>
                <div className={`step-icon bg-gradient-to-br ${step.bg}`}>
                  {step.icon}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: step.color,
                    textTransform: "uppercase",
                    letterSpacing: ".08em",
                    marginBottom: 6,
                  }}
                >
                  Step {index + 1}
                </div>
                <h3
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#111827",
                    marginBottom: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
