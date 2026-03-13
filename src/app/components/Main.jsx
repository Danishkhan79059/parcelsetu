"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/app/constants/theme";
import { CheckCircle } from "lucide-react";
import {
  Truck,
  Building2,
  MapPin,
  Package,
  FileText,
  DollarSign,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Quote,
  Clock,
  Receipt,
  BarChart3,
  CreditCard,
  LayoutDashboard,
  UserCheck,
  UserPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState("b2c");
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const carouselSlides = [
    {
      title: "India's Most Trusted Fast & Express Logistics Network",
      subtitle:
        "We provide secure, time-bound and technology-driven transportation solutions across India to ensure your shipments reach safely and on schedule.",
      image: "/images/36.png",
    },
    {
      title: "Lightning Fast Express Delivery Services Across Cities",
      subtitle:
        "From same-day dispatch to urgent express shipments, we guarantee speed, reliability and real-time tracking for every delivery.",
      image: "/images/118.png",
    },
    {
      title: "Complete End-to-End Supply Chain & Freight Management",
      subtitle:
        "Comprehensive logistics solutions including pickup scheduling, warehousing, distribution and last-mile delivery tailored for your business growth.",
      image: "/images/119.png",
    },
  ];

  const image = [
    "/images/aramax.png",
    "/images/bluedarttt.jpg",
    "/images/dhl.png",
    "/images/dtdtc.png",
    "/images/ekartts.png",
    "/images/expressone.png",
    "/images/fedex.png",
    "/images/shadowfx.png",
    "/images/photoses.jpg",
  ];

  const whatWeDoItems = [
    {
      number: "1.",
      title: "B2B Shipping",
      description:
        "Reliable B2B movement between your plants, warehouses, and customers.",
      icon: Building2,
    },
    {
      number: "2.",
      title: "Bulk & Heavy Shipments",
      description:
        "Specialized handling for bulk loads, heavy cargo, and project logistics.",
      icon: Package,
    },
    {
      number: "3.",
      title: "D2C Shipping",
      description:
        "Direct-to-customer parcel delivery with COD, tracking, and notifications.",
      icon: Truck,
    },
    {
      number: "4.",
      title: "Domestic Shipping",
      description:
        "Pan-India coverage with optimized routes for metros and tier-2/3 cities.",
      icon: MapPin,
    },
  ];

  const stats = [
    { target: 500, suffix: "+", label: "Cities Covered" },
    { target: 10000, suffix: "+", label: "Happy Customers", isK: true },
    { target: 50000, suffix: "+", label: "Shipments Delivered", isK: true },
    { target: 99, suffix: "%", label: "On-Time Delivery" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Enterprises",
      text: "ParcelSetu has been our trusted partner for over 2 years. Their service is reliable and delivery is always on time.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "XYZ Industries",
      text: "Excellent service! The real-time tracking feature helps us keep our customers informed. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Global Trading Co.",
      text: "Best logistics partner we've worked with. Competitive rates and professional service. Great team!",
      rating: 5,
    },
  ];

  const serviceTabs = [
    { id: "b2c", label: "Direct Customer Shipping" },
    { id: "b2b", label: "Business Freight Solutions" },
    { id: "intl", label: "Global Delivery Services" },
    { id: "thirdParty", label: "Third-Party Fulfillment (3PL)" },
  ];

  const serviceDetails = {
    b2c: {
      title: "Direct Customer Shipping",
      subtitle:
        "Reliable last-mile logistics that connect businesses straight to customers.",
      description:
        "ParcelSetu enables companies to deliver products directly to end users with optimized routing, dependable transit schedules and full visibility. From pickup to final handoff, we handle operations seamlessly so your brand can provide a great delivery experience.",
      points: [
        "Extensive reach across urban and semi-urban locations",
        "Express, scheduled and economy delivery modes",
        "Live shipment tracking with status alerts",
        "Careful handling for sensitive or premium goods",
      ],
      image: "/images/shipping.png",
    },
    b2b: {
      title: "Business Freight Solutions",
      subtitle:
        "Efficient cargo movement designed for enterprise supply chains.",
      description:
        "Our freight services support manufacturers, suppliers and distributors with structured transportation plans. ParcelSetu ensures consistent flow between facilities by optimizing load management, scheduling and operational coordination.",
      points: [
        "Flexible transport for partial and full loads",
        "Planned routes connecting production and retail points",
        "Scheduled pickups and deliveries for partners",
        "Priority support for large-scale operations",
      ],
      image: "/images/233.png",
    },
    intl: {
      title: "Global Delivery Services",
      subtitle:
        "Expand beyond borders with dependable cross-country logistics.",
      description:
        "Through trusted global collaborations, ParcelSetu facilitates international shipping for parcels and commercial consignments. We streamline compliance, documentation and movement tracking so businesses can reach customers worldwide with ease.",
      points: [
        "Worldwide shipping coverage and coordination",
        "Guidance on paperwork and regulatory processes",
        "End-to-end visibility throughout transit",
        "Speed-based options for urgent or budget shipments",
      ],
      image: "/images/244.png",
    },
    thirdParty: {
      title: "Third-Party Fulfillment (3PL)",
      subtitle:
        "Integrated outsourcing for storage, processing and distribution.",
      description:
        "With our fulfillment support, ParcelSetu manages backend logistics operations including storage, order preparation and dispatch workflows. This integration allows businesses to scale without managing infrastructure themselves.",
      points: [
        "Warehouse network for stock management",
        "Order picking, packing and shipping support",
        "Reverse logistics for product returns",
        "Analytics and reporting for performance monitoring",
      ],
      image: "/images/255.png",
    },
  };

  const featuress = [
    {
      title: "Nationwide Delivery Network",
      desc: "We connect businesses with a wide delivery network ensuring fast, reliable, and secure shipments across cities and regions.",
    },
    {
      title: "Real-Time Shipment Tracking",
      desc: "Track your parcels live with status updates and notifications so you always know where your shipment is.",
    },
    {
      title: "Bulk & B2B Logistics Support",
      desc: "Handle high-volume shipments with optimized routing and dedicated support tailored for business logistics.",
    },
    {
      title: "Secure & Reliable Handling",
      desc: "Advanced packaging standards and monitoring ensure goods are transported safely with minimal risk or damage.",
    },
  ];

  const whyChooseFeatures = [
    {
      number: "1",
      icon: Clock,
      title: "Fast COD Settlements",
      description:
        "Get your COD payments settled faster, without delays or hassles. ParcelSetu automates COD reconciliation for faster business cycles.",
    },
    {
      number: "2",
      icon: Receipt,
      title: "Centralized Billing System",
      description:
        "Track all your invoices, credits, and payments in one clear dashboard. ParcelSetu makes billing simple, accurate, and effortless.",
    },
    {
      number: "3",
      icon: BarChart3,
      title: "Advanced Analytics & MIS",
      description:
        "Get real-time performance reports, RTO trends, and shipping analytics. ParcelSetu turns raw data into clear, growth-focused insights.",
    },
    {
      number: "4",
      icon: CreditCard,
      title: "Zero Subscription Fees",
      description:
        "Pay only for what you ship. Go live in minutes with zero monthly costs. ParcelSetu is built for instant activation and zero overhead.",
    },
    {
      number: "5",
      icon: LayoutDashboard,
      title: "Unified Control Panel",
      description:
        "Manage orders, couriers, tracking, billing & reports—all from one place. Track, manage, analyze, and grow—all from one smart dashboard.",
    },
    {
      number: "6",
      icon: UserCheck,
      title: "Personal Support Manager",
      description:
        "Get personalized support from a logistics expert who knows your business. One point of contact for faster resolutions and smarter guidance.",
    },
  ];

  const platformFeatures = [
    "AI-Driven Courier Allocation Across 25+ Partners",
    "Real-Time Shipment Tracking & Status Updates",
    "Data-Driven Analytics & RTO Insights",
    "Automated NDR (Non-Delivery Report) Handling",
    "Dedicated Account Manager for Priority Support",
    "Seamless Integration with Shopify, WooCommerce, Amazon, Flipkart & More",
  ];

  const howItWorks = [
    {
      Icon: FileText,
      label: "Request Quote",
      desc: "Contact us with your shipment details and requirements",
      bg: "linear-gradient(135deg,#1F4E8C,#2563EB)",
    },
    {
      Icon: DollarSign,
      label: "Get Quote",
      desc: "Receive competitive pricing and transparent rates",
      bg: "linear-gradient(135deg,#FF6B2B,#e55a1c)",
    },
    {
      Icon: Calendar,
      label: "Schedule Pickup",
      desc: "We pick up your shipment at your convenience",
      bg: "linear-gradient(135deg,#A855F7,#7C3AED)",
    },
    {
      Icon: CheckCircle2,
      label: "Track & Deliver",
      desc: "Real-time tracking and safe delivery to destination",
      bg: "linear-gradient(135deg,#10B981,#059669)",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((p) => (p + 1) % carouselSlides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (hasAnimated) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              const steps = 60,
                duration = 2000;
              const increment = stat.target / steps;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.target) {
                  current = stat.target;
                  clearInterval(timer);
                }
                setAnimatedStats((prev) => {
                  const n = [...prev];
                  n[index] = Math.floor(current);
                  return n;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasAnimated]);

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

        /* ── Shared ── */
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
          background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 55%,#1a3a6e 100%);
          position:relative; overflow:hidden;
        }
        .hero-bg::before {
          content:''; position:absolute; inset:0;
          background:url(/images/banner.png) center/cover no-repeat; opacity:.1;
        }
        .hero-grid {
          position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px);
          background-size:48px 48px;
        }

        /* slide dot */
        .sdot { height:8px; border-radius:4px; border:none; cursor:pointer; transition:all .3s; }

        /* ── Buttons ── */
        .btn-primary {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#1F4E8C,#2563EB); color:white;
          padding:13px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; border:none; cursor:pointer;
          transition:all .3s ease; box-shadow:0 8px 24px rgba(31,78,140,.3);
          font-family:inherit;
        }
        .btn-primary:hover { background:linear-gradient(135deg,#FF6B2B,#e55a1c); box-shadow:0 12px 32px rgba(255,107,43,.4); transform:translateY(-2px); }
        .btn-accent {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white;
          padding:13px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; border:none; cursor:pointer;
          transition:all .3s ease; box-shadow:0 8px 24px rgba(255,107,43,.3);
          font-family:inherit;
        }
        .btn-accent:hover { transform:translateY(-2px); box-shadow:0 14px 36px rgba(255,107,43,.45); }
        .btn-ghost {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.1); color:white;
          padding:13px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; border:2px solid rgba(255,255,255,.25);
          backdrop-filter:blur(8px); transition:all .3s ease; font-family:inherit;
        }
        .btn-ghost:hover { background:rgba(255,255,255,.2); transform:translateY(-2px); }

        /* ── Service tabs ── */
        .svc-tab {
          flex:1; min-width:140px; padding:14px 16px;
          font-size:13px; font-weight:700; font-family:inherit;
          border:none; cursor:pointer; transition:all .25s;
          background:white; color:#6B7280;
          border-bottom:2px solid #F3F4F6;
        }
        .svc-tab.on { background:linear-gradient(135deg,#0F1C35,#1F4E8C); color:white; border-bottom-color:transparent; }
        .svc-tab:not(.on):hover { background:#F8FAFC; color:#1F4E8C; border-bottom-color:#1F4E8C; }

        /* ── Why choose cards ── */
        .wc-card {
          background:white; border-radius:20px; padding:28px 24px;
          border:1.5px solid #F3F4F6;
          transition:all .35s cubic-bezier(.4,0,.2,1);
          position:relative; overflow:hidden;
        }
        .wc-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#FF6B2B,#1F4E8C);
          transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
        }
        .wc-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,0,0,.1); border-color:transparent; }
        .wc-card:hover::before { transform:scaleX(1); }
        .wc-icon {
          width:56px; height:56px; border-radius:16px; margin-bottom:18px;
          display:flex; align-items:center; justify-content:center;
          background:rgba(31,78,140,.08); transition:all .3s ease;
        }
        .wc-card:hover .wc-icon { background:rgba(255,107,43,.1); transform:scale(1.1) rotate(-5deg); }

        /* ── Feature cards ── */
        .feat-card {
          background:white; border-radius:20px; padding:24px;
          box-shadow:0 4px 20px rgba(0,0,0,.06); border:1.5px solid #F3F4F6;
          transition:all .3s ease;
        }
        .feat-card:hover { transform:translateY(-6px); box-shadow:0 20px 44px rgba(0,0,0,.1); border-color:rgba(255,107,43,.2); }

        /* ── What we do ── */
        .wwd-card {
          background:white; border-radius:18px; padding:22px 20px;
          border:1.5px solid #F3F4F6;
          transition:all .3s ease; position:relative; overflow:hidden;
        }
        .wwd-card::after {
          content:''; position:absolute; bottom:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#FF6B2B,#1F4E8C);
          transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
        }
        .wwd-card:hover { transform:translateY(-6px); box-shadow:0 20px 44px rgba(0,0,0,.09); border-color:transparent; }
        .wwd-card:hover::after { transform:scaleX(1); }

        /* ── How it works ── */
        .hiw-card {
          background:white; border-radius:24px; padding:32px 20px; text-align:center;
          border:2px solid #F3F4F6; transition:all .35s ease; position:relative; overflow:hidden;
        }
        .hiw-card:hover { transform:translateY(-10px); box-shadow:0 28px 56px rgba(0,0,0,.1); border-color:#FF6B2B; }
        .hiw-icon {
          width:88px; height:88px; border-radius:50%; margin:0 auto 20px;
          display:flex; align-items:center; justify-content:center;
          transition:transform .3s ease;
        }
        .hiw-card:hover .hiw-icon { transform:scale(1.1); }

        /* ── Stats ── */
        .stats-bg {
          background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 100%);
          position:relative; overflow:hidden;
        }
        .stats-bg::before {
          content:''; position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size:40px 40px;
        }
        .stat-box {
          background:rgba(255,255,255,.07); backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,.12); border-radius:20px;
          padding:28px 20px; text-align:center; transition:all .3s ease;
        }
        .stat-box:hover { background:rgba(255,255,255,.13); transform:translateY(-4px); }

        /* ── Testimonial ── */
        .test-card {
          background:white; border-radius:24px; padding:32px 28px;
          border:1.5px solid #F3F4F6;
          transition:all .35s ease; position:relative; overflow:hidden;
        }
        .test-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,.1); border-color:rgba(255,107,43,.3); }

        /* ── Ticker ── */
        .ticker-logo {
          height:100px; min-width:200px; flex-shrink:0;
          background:white; border-radius:16px; border:1.5px solid #F3F4F6;
          display:flex; align-items:center; justify-content:center;
          transition:border-color .2s, box-shadow .2s;
        }
        .ticker-logo:hover { border-color:rgba(255,107,43,.3); box-shadow:0 8px 24px rgba(0,0,0,.08); }

        /* ── Responsive grids ── */
        .hero-grid-layout   { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; max-width:1200px; margin:0 auto; }
        .svc-content-grid   { display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:center; }
        .wc-grid            { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; max-width:1100px; margin:0 auto; }
        .feat-layout        { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; max-width:1200px; margin:0 auto; }
        .feat-cards-grid    { display:grid; grid-template-columns:1fr 1fr; gap:18px; }
        .intg-layout        { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:center; max-width:1200px; margin:0 auto; }
        .plat-layout        { display:grid; grid-template-columns:1fr 1fr; gap:52px; align-items:center; max-width:1200px; margin:0 auto; }
        .wwd-layout         { display:grid; grid-template-columns:1fr 1fr; gap:52px; align-items:center; max-width:1200px; margin:0 auto; }
        .wwd-cards-grid     { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .hiw-grid           { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; position:relative; }
        .stats-grid         { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; max-width:1000px; margin:0 auto; }
        .test-grid          { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; max-width:1100px; margin:0 auto; }

        @media(max-width:1024px) {
          .wc-grid   { grid-template-columns:repeat(2,1fr); }
          .hiw-grid  { grid-template-columns:repeat(2,1fr); }
          .test-grid { grid-template-columns:repeat(2,1fr); }
          .stats-grid{ grid-template-columns:repeat(2,1fr); }
        }
        @media(max-width:768px) {
          .hero-grid-layout  { grid-template-columns:1fr; }
          .hero-img-col      { display:none; }
          .svc-content-grid  { grid-template-columns:1fr; }
          .feat-layout       { grid-template-columns:1fr; }
          .intg-layout       { grid-template-columns:1fr; }
          .intg-img-col      { display:none; }
          .plat-layout       { grid-template-columns:1fr; }
          .wwd-layout        { grid-template-columns:1fr; }
          .wwd-img-col       { display:none; }
          .wc-grid           { grid-template-columns:1fr; }
        }
        @media(max-width:600px) {
          .hiw-grid           { grid-template-columns:1fr 1fr; }
          .test-grid          { grid-template-columns:1fr; }
          .stats-grid         { grid-template-columns:1fr 1fr; }
          .feat-cards-grid    { grid-template-columns:1fr; }
          .wwd-cards-grid     { grid-template-columns:1fr; }
        }
      `}</style>

      {/* ══════════ HERO CAROUSEL ══════════ */}
      <section
        className="hero-bg"
        style={{ minHeight: 560, display: "flex", alignItems: "center" }}
      >
        <div className="hero-grid" />
        <div
          className="orb"
          style={{
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle,rgba(255,107,43,.18) 0%,transparent 70%)",
            top: -250,
            right: -150,
          }}
        />
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle,rgba(31,78,140,.3) 0%,transparent 70%)",
            bottom: -180,
            left: -100,
          }}
        />

        <div style={{ width: "100%", position: "relative", zIndex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ padding: "60px 24px" }}>
                <div className="hero-grid-layout">
                  {/* Left */}
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="badge-pill" style={{ marginBottom: 20 }}>
                      🚛 India's Trusted Logistics Partner
                    </div>
                    <h1
                      style={{
                        fontSize: "clamp(28px,4vw,52px)",
                        fontWeight: 900,
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: 18,
                      }}
                    >
                      {carouselSlides[currentSlide].title}
                    </h1>
                    <p
                      style={{
                        fontSize: "clamp(14px,2vw,17px)",
                        color: "rgba(255,255,255,.72)",
                        lineHeight: 1.8,
                        marginBottom: 32,
                      }}
                    >
                      {carouselSlides[currentSlide].subtitle}
                    </p>
                    {/* Road-line accent */}
                    <div
                      style={{
                        width: "100%",
                        height: 3,
                        marginBottom: 28,
                        background:
                          "repeating-linear-gradient(90deg,#FF6B2B 0,#FF6B2B 36px,transparent 36px,transparent 56px)",
                        opacity: 0.55,
                        borderRadius: 2,
                      }}
                    />
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                      <Link href="/services" className="btn-primary">
                        🚚 Our Services
                      </Link>
                      <Link href="/contactus" className="btn-ghost">
                        Get Quote →
                      </Link>
                    </div>
                  </motion.div>

                  {/* Right image */}
                  <motion.div
                    className="hero-img-col"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{
                      position: "relative",
                      height: "clamp(260px,35vw,480px)",
                    }}
                  >
                    <Image
                      src={carouselSlides[currentSlide].image}
                      alt={carouselSlides[currentSlide].title}
                      fill
                      style={{ objectFit: "contain" }}
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide dots */}
          <div
            style={{
              position: "absolute",
              bottom: 22,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 10,
              zIndex: 10,
            }}
          >
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                className="sdot"
                onClick={() => setCurrentSlide(i)}
                style={{
                  width: i === currentSlide ? 28 : 8,
                  background:
                    i === currentSlide ? "#FF6B2B" : "rgba(255,255,255,.3)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES TABS ══════════ */}
      <section style={{ padding: "72px 0", background: "#F8FAFC" }}>
        <div className="container mx-auto px-6">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              📦 What We Offer
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,4vw,42px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Our Services
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              End-to-end logistics solutions from ParcelSetu for every type of
              business movement.
            </p>
            <div className="sdivider" />
          </div>

          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              background: "white",
              borderRadius: 24,
              overflow: "hidden",
              border: "1.5px solid #E5E7EB",
              boxShadow: "0 20px 60px rgba(0,0,0,.07)",
            }}
          >
            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                borderBottom: "1.5px solid #F3F4F6",
              }}
            >
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`svc-tab${activeServiceTab === tab.id ? " on" : ""}`}
                  onClick={() => setActiveServiceTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="svc-content-grid" style={{ padding: "40px 44px" }}>
              <div>
                <h3
                  style={{
                    fontSize: "clamp(20px,3vw,28px)",
                    fontWeight: 900,
                    color: "#111827",
                    marginBottom: 10,
                  }}
                >
                  {serviceDetails[activeServiceTab].title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "#FF6B2B",
                    fontWeight: 700,
                    marginBottom: 12,
                  }}
                >
                  {serviceDetails[activeServiceTab].subtitle}
                </p>
                <p
                  style={{
                    fontSize: 14,
                    color: "#6B7280",
                    lineHeight: 1.8,
                    marginBottom: 20,
                  }}
                >
                  {serviceDetails[activeServiceTab].description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: 28,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {serviceDetails[activeServiceTab].points.map((p, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 14,
                        color: "#374151",
                      }}
                    >
                      <span
                        style={{
                          color: "#FF6B2B",
                          fontSize: 18,
                          lineHeight: 1.2,
                          flexShrink: 0,
                        }}
                      >
                        ✦
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="btn-primary"
                  style={{ display: "inline-flex" }}
                >
                  Learn More →
                </Link>
              </div>
              <div
                style={{
                  position: "relative",
                  height: 300,
                  borderRadius: 18,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={
                    serviceDetails[activeServiceTab]?.image ||
                    "/images/parcel.png"
                  }
                  alt={serviceDetails[activeServiceTab]?.title || "Service"}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WHY CHOOSE US ══════════ */}
      <section style={{ padding: "72px 0", background: "white" }}>
        <div className="container mx-auto px-6">
          <motion.div
            style={{ textAlign: "center", marginBottom: 52 }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              ⭐ Why Us
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,4vw,42px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              Why{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#FF6B2B,#1F4E8C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Choose
              </span>{" "}
              ParcelSetu
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Discover what makes ParcelSetu the most trusted logistics partner
              for fast-growing businesses.
            </p>
            <div className="sdivider" />
          </motion.div>

          <motion.div
            className="wc-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {whyChooseFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { y: 50, opacity: 0, scale: 0.95 },
                    visible: { y: 0, opacity: 1, scale: 1 },
                  }}
                  transition={{ type: "spring", stiffness: 80 }}
                >
                  <div className="wc-card">
                    <div className="wc-icon">
                      <Icon size={28} style={{ color: "#1F4E8C" }} />
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: "#FF6B2B",
                        textTransform: "uppercase",
                        letterSpacing: ".08em",
                        marginBottom: 8,
                      }}
                    >
                      {f.number}. Feature
                    </div>
                    <h3
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#111827",
                        marginBottom: 10,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#6B7280",
                        lineHeight: 1.7,
                      }}
                    >
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══════════ FEATURES (image + 4 cards) ══════════ */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div className="feat-layout">
          {/* Left image */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              height: 460,
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 20px 56px rgba(0,0,0,.08)",
              background: "white",
              border: "1.5px solid #F3F4F6",
            }}
          >
            <Image
              src="/images/121.png"
              alt="ParcelSetu Express Logistics"
              fill
              style={{ objectFit: "contain", padding: 16 }}
            />
          </motion.div>

          {/* Right cards */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-pill" style={{ marginBottom: 16 }}>
              ✅ Core Capabilities
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,38px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 32,
                textAlign: "left",
              }}
            >
              Built for <span style={{ color: "#FF6B2B" }}>Modern</span>{" "}
              Logistics
            </h2>
            <div className="feat-cards-grid">
              {featuress.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="feat-card"
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(255,107,43,.12),rgba(255,107,43,.06))",
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 14,
                    }}
                  >
                    <CheckCircle size={20} style={{ color: "#FF6B2B" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: "#111827",
                      marginBottom: 8,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontSize: 13, color: "#6B7280", lineHeight: 1.7 }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ STATISTICS ══════════ */}
      <section
        ref={statsRef}
        className="stats-bg"
        style={{ padding: "64px 24px" }}
      >
        <div
          className="orb"
          style={{
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle,rgba(255,107,43,.15) 0%,transparent 70%)",
            top: -150,
            right: -80,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="stats-grid">
            {stats.map((stat, i) => {
              const display = stat.isK
                ? `${Math.floor(animatedStats[i] / 1000)}K`
                : Math.floor(animatedStats[i]).toString();
              return (
                <div key={i} className="stat-box">
                  <div
                    style={{
                      fontSize: "clamp(32px,5vw,52px)",
                      fontWeight: 900,
                      color: "white",
                      marginBottom: 6,
                    }}
                  >
                    {display}
                    {stat.suffix}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,.65)",
                      fontWeight: 600,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════ INTEGRATION ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div className="intg-layout">
          {/* Left */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-pill" style={{ marginBottom: 16 }}>
              🔗 Integrations
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,3.5vw,38px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 14,
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              <span
                style={{
                  background: "linear-gradient(135deg,#1F4E8C,#2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Seamless Integration
              </span>{" "}
              With Leading Marketplaces & Channels — No Coding Required
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6B7280",
                marginBottom: 22,
                lineHeight: 1.7,
              }}
            >
              Start working in real-time, effortlessly and swiftly.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: 20,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {[
                "Realtime Order Syncing",
                "Realtime Orders Tracking",
                "Fast & Efficient Order Processing",
              ].map((f, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "#374151",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2
                    size={18}
                    style={{ color: "#1F4E8C", flexShrink: 0 }}
                  />
                  {f}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: "#9CA3AF", marginBottom: 28 }}>
              <strong style={{ color: "#374151" }}>Supported:</strong>{" "}
              WooCommerce, Shopify, Amazon (Self-Ship), Flipkart & more.
            </p>
            <Link href="/contactus" className="btn-accent">
              <UserPlus size={16} />
              Signup Today for Free
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="intg-img-col"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              height: 400,
              borderRadius: 24,
              overflow: "hidden",
              border: "1.5px solid #F3F4F6",
              boxShadow: "0 20px 56px rgba(0,0,0,.08)",
            }}
          >
            <Image
              src="/images/124.png"
              alt="Marketplace Integration"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════ PLATFORM / RESHAPING ══════════ */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg,#F1F5F9 0%,white 100%)",
        }}
      >
        <div className="plat-layout">
          {/* Left content */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-pill" style={{ marginBottom: 16 }}>
              🚀 Platform
            </div>
            <h2
              style={{
                fontSize: "clamp(22px,3.5vw,38px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 14,
                lineHeight: 1.2,
                textAlign: "left",
              }}
            >
              Reshaping Logistics With{" "}
              <span style={{ color: "#1F4E8C" }}>ParcelSetu</span>
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                marginBottom: 22,
                lineHeight: 1.8,
              }}
            >
              ParcelSetu is India's most intuitive and intelligent shipping
              platform designed to streamline your fulfillment operations. Our
              unified, AI-driven dashboard automates logistics from courier
              selection to real-time tracking, giving you complete control over
              every shipment.
            </p>
            <motion.ul
              style={{
                listStyle: "none",
                padding: 0,
                marginBottom: 22,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {platformFeatures.map((f, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { x: -30, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    color: "#374151",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    style={{ color: "#FF6B2B", flexShrink: 0, marginTop: 2 }}
                  />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
            <p style={{ fontSize: 13, color: "#9CA3AF", lineHeight: 1.7 }}>
              Whether you're D2C, B2B, or an Ecommerce brand, ParcelSetu gives
              you the tools to deliver better, faster, and smarter—every time.
            </p>
          </motion.div>

          {/* Right dashboard image */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              border: "1.5px solid #E5E7EB",
              boxShadow: "0 20px 56px rgba(0,0,0,.08)",
              background: "white",
              height: 340,
            }}
          >
            <Image
              src="/images/0.png"
              alt="ParcelSetu Logistics Dashboard"
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════ WHAT WE DO ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div className="wwd-layout">
          {/* Left image */}
          <motion.div
            className="wwd-img-col"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              height: 350,
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,.1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg,rgba(255,107,43,.06),rgba(31,78,140,.06))",
              }}
            />
            <Image
              src="/images/116.png"
              alt="ParcelSetu logistics network"
              fill
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-pill" style={{ marginBottom: 16 }}>
              📋 Capabilities
            </div>
            <h2
              style={{
                fontSize: "clamp(24px,3.5vw,40px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 12,
                textAlign: "left",
              }}
            >
              What We <span style={{ color: "#FF6B2B" }}>Do</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#6B7280",
                marginBottom: 30,
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              From B2B freight to doorstep deliveries, ParcelSetu provides
              complete shipping solutions tailored for modern businesses.
            </p>
            <motion.div
              className="wwd-cards-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {whatWeDoItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { y: 30, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="wwd-card">
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "rgba(31,78,140,.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 14,
                        }}
                      >
                        <Icon size={22} style={{ color: "#1F4E8C" }} />
                      </div>
                      <h3
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: "#111827",
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#6B7280",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section
        style={{
          padding: "72px 24px",
          background: "linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              ⚙️ Process
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,4vw,42px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              How <span style={{ color: "#FF6B2B" }}>It Works</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Simple steps to get your shipment delivered quickly and safely
            </p>
            <div className="sdivider" />
          </div>

          <div style={{ position: "relative" }}>
            {/* Connector line */}
            <div
              style={{
                position: "absolute",
                top: 54,
                left: "12%",
                width: "76%",
                height: 2,
                background: "linear-gradient(90deg,#FF6B2B,#1F4E8C)",
                opacity: 0.2,
                borderRadius: 1,
              }}
            />
            <div className="hiw-grid">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="hiw-card">
                    <div
                      className="hiw-icon"
                      style={{
                        background: step.bg,
                        boxShadow: "0 12px 30px rgba(0,0,0,.18)",
                      }}
                    >
                      <step.Icon size={36} style={{ color: "white" }} />
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
                      style={{
                        fontSize: 13,
                        color: "#6B7280",
                        lineHeight: 1.6,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link
              href="/contactus"
              className="btn-accent"
              style={{ fontSize: 16, padding: "15px 36px" }}
            >
              🚀 Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <section style={{ padding: "72px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div
            style={{ textAlign: "center", marginBottom: 52 }}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="badge-pill" style={{ margin: "0 auto 16px" }}>
              💬 Reviews
            </div>
            <h2
              style={{
                fontSize: "clamp(26px,4vw,42px)",
                fontWeight: 900,
                color: "#111827",
                marginBottom: 10,
              }}
            >
              What Our <span style={{ color: "#FF6B2B" }}>Customers Say</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6B7280",
                maxWidth: 500,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Trusted by thousands of businesses across India.
            </p>
            <div className="sdivider" />
          </motion.div>

          <motion.div
            className="test-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { y: 50, opacity: 0, scale: 0.95 },
                  visible: { y: 0, opacity: 1, scale: 1 },
                }}
                transition={{ type: "spring", stiffness: 80 }}
              >
                <div className="test-card">
              
                  <div style={{ height: 20 }} />
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} style={{ fontSize: 16, color: "#FBBF24" }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#374151",
                      lineHeight: 1.8,
                      marginBottom: 24,
                      fontStyle: "italic",
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div
                    style={{
                      borderTop: "1.5px solid #F3F4F6",
                      paddingTop: 20,
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: "50%",
                        background: "linear-gradient(135deg,#0F1C35,#1F4E8C)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: 900,
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: "#111827",
                        }}
                      >
                        {t.name}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          color: "#9CA3AF",
                          fontWeight: 600,
                        }}
                      >
                        {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ TRANSIT PARTNERS TICKER ══════════ */}
      <section
        style={{ padding: "56px 0", background: "#F8FAFC", overflow: "hidden" }}
      >
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="badge-pill" style={{ margin: "0 auto 14px" }}>
            🤝 Partners
          </div>
          <h2
            style={{
              fontSize: "clamp(20px,3vw,32px)",
              fontWeight: 900,
              color: "#111827",
            }}
          >
            Transit Partners
          </h2>
        </div>
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Fade edges */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(90deg,#F8FAFC,transparent)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 80,
              background: "linear-gradient(-90deg,#F8FAFC,transparent)",
              zIndex: 1,
            }}
          />
          <motion.div
            style={{ display: "flex", gap: 16 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 22, repeat: Infinity }}
          >
            {[...image, ...image].map((logo, idx) => (
              <div key={idx} className="ticker-logo">
                <Image
                  src={logo}
                  alt={`partner-${idx}`}
                  width={140}
                  height={60}
                  style={{ objectFit: "contain", padding: 16 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
