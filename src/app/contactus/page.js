'use client'

import { useState } from 'react'
import Link from 'next/link'
import { theme } from '@/app/constants/theme'

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
      }, 5000)
    }, 1500)
  }

  const contactCards = [
    {
      icon: '📧',
      title: 'Email Us',
      value: 'support@parcelsetu.in',
      sub: 'We reply within 2 hours',
      color: '#1F4E8C',
      bg: 'from-blue-600 to-blue-500',
      href: 'mailto:support@parcelsetu.in'
    },
    {
      icon: '📞',
      title: 'Call Us',
      value: '+91-9990746208',
      sub: 'Mon–Sat: 9 AM – 6 PM',
      color: '#FF6B2B',
      bg: 'from-orange-500 to-amber-400',
      href: 'tel:+919990746208'
    },
    {
      icon: '📍',
      title: 'Office',
      value: 'ParcelSetu Logistics Pvt. Ltd.',
      sub: 'City, State – PIN, India',
      color: '#10B981',
      bg: 'from-emerald-500 to-green-400',
      href: '#'
    }
  ]

  const hours = [
    { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM', open: true },
    { day: 'Saturday', time: '9:00 AM – 2:00 PM', open: true },
    { day: 'Sunday', time: 'Closed', open: false },
  ]

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Outfit', 'Segoe UI', sans-serif", background: '#F8FAFC' }}>

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
          opacity: 0.12;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,107,43,0.15);
          color: #FF6B2B;
          padding: 8px 20px; border-radius: 100px;
          font-size: 13px; font-weight: 700;
          border: 1px solid rgba(255,107,43,0.3);
          margin-bottom: 20px;
          letter-spacing: 0.02em;
        }
        .section-divider {
          width: 56px; height: 4px;
          background: linear-gradient(90deg, #FF6B2B, #1F4E8C);
          border-radius: 2px;
          margin: 14px auto 0;
        }
        .contact-card {
          background: white;
          border-radius: 20px;
          padding: 28px 24px;
          border: 2px solid #F3F4F6;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          cursor: pointer;
          text-decoration: none;
          display: block;
          position: relative;
          overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #FF6B2B, #1F4E8C);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .contact-card:hover {
          border-color: transparent;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          transform: translateY(-6px);
        }
        .contact-card:hover::before { transform: scaleX(1); }
        .icon-box {
          width: 56px; height: 56px;
          border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          margin-bottom: 16px;
          transition: transform 0.3s ease;
        }
        .contact-card:hover .icon-box { transform: scale(1.1) rotate(-5deg); }
        .form-wrap {
          background: white;
          border-radius: 24px;
          padding: 40px;
          border: 1.5px solid #E5E7EB;
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
        }
        .info-wrap {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-group label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #6B7280;
          margin-bottom: 7px;
        }
        .form-input {
          width: 100%;
          padding: 13px 16px;
          font-size: 14px;
          font-family: inherit;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          background: #FAFAFA;
          color: #111827;
          transition: all 0.25s ease;
          outline: none;
        }
        .form-input:focus {
          border-color: #1F4E8C;
          background: white;
          box-shadow: 0 0 0 4px rgba(31,78,140,0.08);
        }
        .form-input:hover:not(:focus) { border-color: #9CA3AF; background: white; }
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #FF6B2B 0%, #e55a1c 100%);
          color: white;
          padding: 15px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 0.04em;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
          position: relative; overflow: hidden;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 35px rgba(255,107,43,0.4);
        }
        .submit-btn:disabled { opacity: 0.75; cursor: not-allowed; }
        .hours-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px dashed #E5E7EB;
          font-size: 13px;
        }
        .hours-row:last-child { border-bottom: none; }
        .dot {
          width: 8px; height: 8px; border-radius: 50%;
          display: inline-block; margin-right: 8px;
        }
        .success-anim {
          animation: popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275);
        }
        @keyframes popIn {
          from { transform: scale(0.7); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .emergency-card {
          background: linear-gradient(135deg, #0F1C35 0%, #1F4E8C 100%);
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          padding: 56px 48px;
        }
        .emergency-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        .emg-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 32px;
          border-radius: 50px;
          font-size: 15px; font-weight: 700;
          font-family: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none; cursor: pointer;
        }
        .emg-btn-orange {
          background: linear-gradient(135deg, #FF6B2B, #e55a1c);
          color: white;
          box-shadow: 0 10px 30px rgba(255,107,43,0.35);
        }
        .emg-btn-orange:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(255,107,43,0.5);
        }
        .emg-btn-white {
          background: rgba(255,255,255,0.1);
          color: white;
          border: 2px solid rgba(255,255,255,0.25);
          backdrop-filter: blur(8px);
        }
        .emg-btn-white:hover {
          background: rgba(255,255,255,0.18);
          transform: translateY(-3px);
        }
        .pulse-ring {
          display: inline-flex; align-items: center; justify-content: center;
          position: relative;
        }
        .pulse-ring::after {
          content: '';
          position: absolute; inset: -8px;
          border-radius: 50%;
          border: 2px solid rgba(255,107,43,0.4);
          animation: pulseRing 1.5s ease-out infinite;
        }
        @keyframes pulseRing {
          from { transform: scale(0.8); opacity: 1; }
          to { transform: scale(1.6); opacity: 0; }
        }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 640px) { .grid-2 { grid-template-columns: 1fr; } }
        .lg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 36px; }
        @media (max-width: 1024px) { .lg-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="hero-bg py-32 relative">
        <div className="hero-grid"></div>
        {/* Orbs */}
        <div className="hero-orb" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,107,43,0.2) 0%, transparent 70%)', top: -200, right: -80 }}></div>
        <div className="hero-orb" style={{ width: 350, height: 350, background: 'radial-gradient(circle, rgba(31,78,140,0.35) 0%, transparent 70%)', bottom: -120, left: -60 }}></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="badge">💬 We'd Love to Hear From You</div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-5 leading-tight">
            Get In <span style={{ background: 'linear-gradient(90deg,#FF6B2B,#FFD700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Touch</span>
          </h1>

          <p className="text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Questions, partnerships, or urgent logistics support — our team is ready to help you every step of the way.
          </p>

          {/* 3 quick contact pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['📧 support@parcelsetu.in', '📞 +91-9990746208', '⏰ Mon–Sat, 9AM–6PM'].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 100, padding: '10px 20px', color: 'rgba(255,255,255,0.9)', fontSize: 14, fontWeight: 500 }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CARDS ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 960, margin: '0 auto' }}>
            {contactCards.map((c, i) => (
              <a key={i} href={c.href} className="contact-card">
                <div className={`icon-box bg-gradient-to-br ${c.bg}`}>{c.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{c.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: c.color, marginBottom: 4 }}>{c.value}</p>
                <p style={{ fontSize: 13, color: '#9CA3AF' }}>{c.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM + INFO ──────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #F1F5F9 0%, #F8FAFC 100%)' }}>
        <div className="container mx-auto px-6">
          <div className="lg-grid" style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* LEFT: FORM */}
            <div className="form-wrap">
              <div style={{ marginBottom: 28 }}>
                <div className="badge" style={{ margin: '0 0 12px' }}>✉️ Send a Message</div>
                <h2 style={{ fontSize: 28, fontWeight: 800, color: '#111827', marginBottom: 6 }}>How Can We Help?</h2>
                <p style={{ fontSize: 14, color: '#9CA3AF' }}>Fill in the form and we'll get back to you within 2 hours.</p>
              </div>

              {submitted ? (
                <div className="success-anim" style={{ background: 'linear-gradient(135deg, #10B981, #059669)', borderRadius: 20, padding: 40, textAlign: 'center', color: 'white' }}>
                  <div style={{ fontSize: 64, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Message Sent!</h3>
                  <p style={{ fontSize: 14, opacity: 0.9 }}>Thank you for reaching out. Our team will respond to you within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} className="form-input" placeholder="Rahul Sharma" />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="form-input" placeholder="rahul@example.com" />
                    </div>
                  </div>
                  <div className="grid-2">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="form-input" placeholder="+91 98765 43210" />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="Optional" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Subject *</label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="form-input" placeholder="How can we help you?" />
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="form-input" style={{ resize: 'vertical', minHeight: 120 }} placeholder="Describe your query in detail..."></textarea>
                  </div>
                  <button type="submit" className="submit-btn" disabled={sending}>
                    {sending ? (
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                        <span className="spin" style={{ display: 'inline-block', width: 18, height: 18, border: '3px solid rgba(255,255,255,0.4)', borderTopColor: 'white', borderRadius: '50%' }}></span>
                        Sending...
                      </span>
                    ) : '🚀 Send Message'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12, color: '#9CA3AF' }}>We typically respond within 2 business hours.</p>
                </form>
              )}
            </div>

            {/* RIGHT: INFO */}
            <div className="info-wrap">

              {/* Intro */}
              <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #E5E7EB' }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#111827', marginBottom: 10 }}>We're Here for You</h2>
                <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
                  Whether you're a shipper needing transport, a carrier looking to partner, or just have a quick question — our team is standing by to provide fast, reliable support.
                </p>
              </div>

              {/* Business Hours */}
              <div style={{ background: 'white', borderRadius: 20, padding: 28, border: '1.5px solid #E5E7EB' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{ background: 'linear-gradient(135deg, #1F4E8C, #2563EB)', width: 44, height: 44, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🕐</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827' }}>Business Hours</h3>
                </div>
                {hours.map((h, i) => (
                  <div key={i} className="hours-row">
                    <span style={{ color: '#374151', fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                      <span className="dot" style={{ background: h.open ? '#10B981' : '#EF4444' }}></span>
                      {h.day}
                    </span>
                    <span style={{ color: h.open ? '#1F4E8C' : '#EF4444', fontWeight: 700, fontSize: 13 }}>{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div style={{ background: 'linear-gradient(135deg, #FFF7ED, #FFF3E0)', borderRadius: 20, padding: 28, border: '2px solid #FED7AA' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#92400E', marginBottom: 8 }}>Quick Response Promise</h3>
                <p style={{ fontSize: 13, color: '#A16207', lineHeight: 1.7 }}>
                  All enquiries are responded to within <strong>2 business hours</strong>. For urgent shipments, call our emergency line for immediate assistance.
                </p>
                <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                  {['📧 Email: 2hr', '📞 Call: Instant', '🆘 Emergency: 24/7'].map((t, i) => (
                    <span key={i} style={{ background: 'rgba(255,107,43,0.12)', color: '#92400E', padding: '6px 12px', borderRadius: 50, fontSize: 12, fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY SECTION ────────────────────────────────────────────── */}
      <section style={{ padding: '60px 0', background: '#F8FAFC' }}>
        <div className="container mx-auto px-6">
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="emergency-card">
              {/* Orb */}
              <div style={{ position: 'absolute', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,107,43,0.2) 0%, transparent 70%)', top: -120, right: -80, pointerEvents: 'none' }}></div>

              <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div className="pulse-ring" style={{ fontSize: 52, marginBottom: 20, display: 'inline-flex' }}>🚨</div>
                <h2 style={{ fontSize: 32, fontWeight: 900, color: 'white', marginBottom: 12 }}>Priority Logistics Support</h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7 }}>
                  Critical shipment? Time-sensitive delivery? Our emergency team responds immediately, 24 hours a day, 7 days a week.
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="tel:+91XXXXXXXXXX" className="emg-btn emg-btn-orange">📞 Call Emergency Line</a>
                  <a href="mailto:emergency@parcelsetu.in" className="emg-btn emg-btn-white">📧 Email Emergency</a>
                </div>

                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 28, flexWrap: 'wrap' }}>
                  {['✅ Available 24 Hours', '✅ 7 Days a Week', '✅ Immediate Response'].map((t, i) => (
                    <span key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
