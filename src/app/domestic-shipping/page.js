import Image from 'next/image'
import Link from 'next/link'
import { theme } from '@/app/constants/theme'

export default function DomesticShipping() {

  const serviceVariants = [
    {
      icon: '📦',
      title: 'Standard Delivery',
      desc: 'Cost-effective ground shipping for non-urgent parcels with reliable transit times across India.',
      points: ['Ideal for non-urgent orders', 'Wide coverage across India', 'Perfect balance of speed & cost'],
      color: '#1F4E8C',
    },
    {
      icon: '⚡',
      title: 'Express Delivery',
      desc: 'Faster delivery for time-sensitive shipments with priority handling and shorter TAT.',
      points: ['Same-day & next-day where available', 'Priority processing at hubs', 'Great for premium customers'],
      color: '#FF6B2B',
    },
    {
      icon: '🏙️',
      title: 'Hyperlocal & Citywide',
      desc: 'Intra-city deliveries for quick commerce, same-day orders and urgent local shipments.',
      points: ['Slot-based & on-demand delivery', 'Ideal for food, grocery & pharma', 'Real-time tracking & alerts'],
      color: '#10B981',
    },
  ]

  const whyTrust = [
    { emoji: '🗺️', title: 'Pan-India Reach',         desc: 'Strong coverage from metros to emerging towns so you can sell and deliver across India with confidence.',                                                         bg: 'linear-gradient(135deg,#0F1C35,#1F4E8C)' },
    { emoji: '😊', title: 'Customer Experience',     desc: 'Proactive communication, branded tracking and clear ETAs create a smoother experience for your end-customers.',                                                   bg: 'linear-gradient(135deg,#FF6B2B,#e55a1c)' },
    { emoji: '🔗', title: 'Flexible Integrations',   desc: 'Easy onboarding through APIs, shipment dashboards and simple order upload workflows tailored for your operations.',                                              bg: 'linear-gradient(135deg,#1a3a6e,#2563EB)' },
  ]

  const shippingFlow = [
    { step:'01', title:'Create Order',       text:'Upload or sync orders from your store, marketplace or ERP.',                color:'#1F4E8C' },
    { step:'02', title:'Pickup & Sort',      text:'We pick up parcels, sort them and allocate best routes.',                   color:'#FF6B2B' },
    { step:'03', title:'In Transit',         text:'Shipments move through our network with live tracking.',                    color:'#A855F7' },
    { step:'04', title:'Out for Delivery',   text:'Customers receive timely updates and on-time delivery.',                    color:'#10B981' },
  ]

  return (
    <div style={{ minHeight:'100vh', fontFamily:"'Outfit','Segoe UI',sans-serif", background:'#F8FAFC' }}>
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
        .accent-bar { width:4px; height:52px; border-radius:2px; background:linear-gradient(180deg,#FF6B2B,#1F4E8C); flex-shrink:0; }
        .orb { position:absolute; border-radius:50%; pointer-events:none; }

        /* Hero */
        .hero-bg {
          position:relative; overflow:hidden;
          background:linear-gradient(135deg,#0F1C35 0%,#1F4E8C 60%,#1a3a6e 100%);
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

        /* Buttons */
        .btn-accent {
          display:inline-flex; align-items:center; gap:8px;
          background:linear-gradient(135deg,#FF6B2B,#e55a1c); color:white;
          padding:13px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; transition:all .3s ease;
          box-shadow:0 8px 24px rgba(255,107,43,.3); font-family:inherit;
        }
        .btn-accent:hover { transform:translateY(-2px); box-shadow:0 14px 36px rgba(255,107,43,.45); }
        .btn-ghost {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(255,255,255,.1); color:white;
          padding:13px 28px; border-radius:50px; font-size:14px; font-weight:800;
          text-decoration:none; border:2px solid rgba(255,255,255,.3);
          backdrop-filter:blur(8px); transition:all .3s ease; font-family:inherit;
        }
        .btn-ghost:hover { background:rgba(255,255,255,.2); transform:translateY(-2px); }

        /* Service variant cards */
        .sv-card {
          background:white; border-radius:22px; padding:32px 26px;
          border:1.5px solid #F3F4F6;
          transition:all .35s ease; position:relative; overflow:hidden;
        }
        .sv-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          transform:scaleX(0); transform-origin:left; transition:transform .4s ease;
        }
        .sv-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,0,0,.1); border-color:transparent; }
        .sv-card:hover::before { transform:scaleX(1); }
        .sv-icon {
          width:60px; height:60px; border-radius:18px; margin-bottom:18px;
          display:flex; align-items:center; justify-content:center; font-size:26px;
          background:rgba(31,78,140,.07); transition:all .3s ease;
        }
        .sv-card:hover .sv-icon { transform:scale(1.1) rotate(-5deg); }

        /* Why trust cards */
        .wt-card {
          border-radius:24px; padding:38px 32px;
          transition:all .35s ease;
        }
        .wt-card:hover { transform:translateY(-8px); box-shadow:0 28px 56px rgba(0,0,0,.2); }

        /* Flow steps */
        .flow-card {
          background:white; border-radius:22px; padding:30px 20px; text-align:center;
          border:2px solid #F3F4F6; transition:all .35s ease;
        }
        .flow-card:hover { transform:translateY(-8px); box-shadow:0 24px 50px rgba(0,0,0,.1); border-color:#FF6B2B; }
        .flow-num {
          width:72px; height:72px; border-radius:50%; margin:0 auto 18px;
          display:flex; align-items:center; justify-content:center;
          font-size:22px; font-weight:900; color:white;
          transition:transform .3s; box-shadow:0 12px 28px rgba(0,0,0,.18);
        }
        .flow-card:hover .flow-num { transform:scale(1.1); }

        /* CTA */
        .cta-wrap {
          background:linear-gradient(135deg,#0F1C35,#1F4E8C);
          border-radius:28px; position:relative; overflow:hidden;
        }
        .cta-wrap::before {
          content:''; position:absolute; inset:0;
          background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
            linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
          background-size:40px 40px;
        }

        /* Grids */
        .two-col   { display:grid; grid-template-columns:1fr 1fr; gap:52px; align-items:center; }
        .three-col { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .four-col  { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }

        @media(max-width:1024px) { .four-col { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:768px)  { .two-col  { grid-template-columns:1fr; } .three-col { grid-template-columns:1fr; } }
        @media(max-width:600px)  { .four-col { grid-template-columns:1fr 1fr; } }
        @media(max-width:400px)  { .four-col { grid-template-columns:1fr; } }
      `}</style>

      {/* ══════════ HERO ══════════ */}
      <section className="hero-bg" style={{ padding:'90px 0 80px' }}>
        <div className="hero-grid" />
        {/* GIF subtle overlay */}
        <div style={{ position:'absolute',inset:0,opacity:.16,pointerEvents:'none' }}>
          <Image src="/images/b2c.gif" alt="" fill style={{ objectFit:'cover' }} unoptimized />
        </div>
        <div className="orb" style={{ width:500,height:500,background:'radial-gradient(circle,rgba(255,107,43,.2) 0%,transparent 70%)',top:-200,right:-80 }} />
        <div className="orb" style={{ width:350,height:350,background:'radial-gradient(circle,rgba(31,78,140,.35) 0%,transparent 70%)',bottom:-120,left:-60 }} />

        <div style={{ position:'relative',zIndex:1,padding:'0 24px',maxWidth:860,margin:'0 auto' }}>
          <div className="badge-pill" style={{ marginBottom:20 }}>🚚 Pan-India Delivery</div>
          <h1 style={{ fontSize:'clamp(30px,5.5vw,62px)',fontWeight:900,color:'white',lineHeight:1.1,marginBottom:20 }}>
            Domestic Shipping{' '}
            <span style={{ background:'linear-gradient(90deg,#FF6B2B,#FFD700)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent' }}>
              Across India
            </span>
          </h1>
          <p style={{ fontSize:'clamp(14px,2vw,18px)',color:'rgba(255,255,255,.74)',lineHeight:1.8,marginBottom:36,maxWidth:580 }}>
            Reliable pan-India courier and parcel services for D2C, e-commerce and
            SMEs – from metros to Tier 2 &amp; Tier 3 cities, with real-time
            tracking and flexible delivery options.
          </p>
          <div style={{ width:320,height:3,marginBottom:32,background:'repeating-linear-gradient(90deg,#FF6B2B 0,#FF6B2B 36px,transparent 36px,transparent 56px)',opacity:.55,borderRadius:2 }} />
          <div style={{ display:'flex',gap:14,flexWrap:'wrap' }}>
            <Link href="/pricing" className="btn-accent">Check Domestic Rates</Link>
            <Link href="/track" className="btn-ghost">Track a Shipment →</Link>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT IS DOMESTIC SHIPPING ══════════ */}
      <section style={{ padding:'72px 24px',background:'white' }}>
        <div style={{ maxWidth:1100,margin:'0 auto' }}>
          <div className="two-col">
            {/* Left */}
            <div>
              <div className="badge-pill" style={{ marginBottom:20 }}>📖 Overview</div>
              <div style={{ display:'flex',alignItems:'flex-start',gap:16,marginBottom:22 }}>
                <div className="accent-bar" />
                <h2 style={{ fontSize:'clamp(22px,3.5vw,34px)',fontWeight:900,color:'#111827',lineHeight:1.2 }}>
                  Domestic Shipping with ParcelSetu
                </h2>
              </div>
              <p style={{ fontSize:15,color:'#6B7280',lineHeight:1.9,marginBottom:14 }}>
                Our domestic shipping network is built for fast, predictable and
                cost-efficient deliveries within India. Whether you ship a few
                parcels a day or manage thousands of orders, we provide flexible
                options to match your SLA and cost expectations.
              </p>
              <p style={{ fontSize:15,color:'#6B7280',lineHeight:1.9,marginBottom:14 }}>
                We combine multiple delivery modes, strong local partners and
                technology-led routing to cover urban, semi-urban and emerging
                markets with consistent service quality.
              </p>
              <p style={{ fontSize:15,color:'#6B7280',lineHeight:1.9 }}>
                From first-mile pickup to last-mile delivery, every shipment is
                monitored with clear status updates so that you and your customers
                always know where the order is.
              </p>
            </div>
            {/* Right */}
            <div style={{ position:'relative',height:400,borderRadius:24,overflow:'hidden',boxShadow:'0 20px 56px rgba(0,0,0,.1)',border:'1.5px solid #F3F4F6' }}>
              <Image src="/images/domestic.png" alt="Domestic shipping network" fill style={{ objectFit:'cover' }} />
              <div style={{ position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(15,28,53,.15),transparent)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SERVICE VARIANTS ══════════ */}
      <section style={{ padding:'72px 24px',background:'#F8FAFC' }}>
        <div style={{ maxWidth:1100,margin:'0 auto' }}>
          <div style={{ display:'flex',alignItems:'center',gap:16,marginBottom:44 }}>
            <div className="accent-bar" />
            <div>
              <div className="badge-pill" style={{ marginBottom:8 }}>🚀 Options</div>
              <h2 style={{ fontSize:'clamp(22px,3.5vw,34px)',fontWeight:900,color:'#111827' }}>
                Domestic Shipping Options
              </h2>
            </div>
          </div>

          <div className="three-col">
            {serviceVariants.map((sv,i) => (
              <div key={i} className="sv-card">
                <style>{`.sv-card:nth-child(${i+1})::before { background:linear-gradient(90deg,${sv.color},${sv.color}88); }`}</style>
                <div className="sv-icon" style={{ background:`rgba(${sv.color==='#1F4E8C'?'31,78,140':sv.color==='#FF6B2B'?'255,107,43':'16,185,129'},.08)` }}>
                  {sv.icon}
                </div>
                <h3 style={{ fontSize:17,fontWeight:800,color:'#111827',marginBottom:10 }}>{sv.title}</h3>
                <p style={{ fontSize:13,color:'#6B7280',lineHeight:1.8,marginBottom:16 }}>{sv.desc}</p>
                <ul style={{ listStyle:'none',padding:0,display:'flex',flexDirection:'column',gap:8 }}>
                  {sv.points.map((p,j) => (
                    <li key={j} style={{ display:'flex',alignItems:'center',gap:8,fontSize:13,color:'#374151' }}>
                      <span style={{ color:sv.color,fontWeight:900,fontSize:14,flexShrink:0 }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY TRUST ══════════ */}
      <section style={{ padding:'72px 24px',background:'white' }}>
        <div style={{ maxWidth:1100,margin:'0 auto' }}>
          <div style={{ textAlign:'center',marginBottom:52 }}>
            <div className="badge-pill" style={{ margin:'0 auto 16px' }}>⭐ Why Us</div>
            <h2 style={{ fontSize:'clamp(22px,4vw,38px)',fontWeight:900,color:'#111827',marginBottom:12 }}>
              Why Brands Trust Our Domestic Network
            </h2>
            <p style={{ fontSize:15,color:'#6B7280',maxWidth:580,margin:'0 auto',lineHeight:1.7 }}>
              Designed for D2C, marketplaces, SMEs and enterprises who want reliable
              domestic deliveries with strong post-purchase experience.
            </p>
            <div className="sdivider" />
          </div>

          <div className="three-col">
            {whyTrust.map((wt,i) => (
              <div key={i} className="wt-card" style={{ background:wt.bg }}>
                <div style={{ fontSize:38,marginBottom:20 }}>{wt.emoji}</div>
                <h3 style={{ fontSize:20,fontWeight:900,color:'white',marginBottom:14 }}>{wt.title}</h3>
                <p style={{ fontSize:14,color:'rgba(255,255,255,.76)',lineHeight:1.8 }}>{wt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SHIPPING FLOW ══════════ */}
      <section style={{ padding:'72px 24px',background:'linear-gradient(180deg,#F1F5F9 0%,#F8FAFC 100%)' }}>
        <div style={{ maxWidth:1100,margin:'0 auto' }}>
          <div style={{ textAlign:'center',marginBottom:52 }}>
            <div className="badge-pill" style={{ margin:'0 auto 16px' }}>⚙️ How It Works</div>
            <h2 style={{ fontSize:'clamp(22px,4vw,38px)',fontWeight:900,color:'#111827',marginBottom:12 }}>
              Simple Domestic <span style={{ color:'#FF6B2B' }}>Shipping Flow</span>
            </h2>
            <p style={{ fontSize:15,color:'#6B7280',maxWidth:480,margin:'0 auto',lineHeight:1.7 }}>
              From order creation to delivery, we keep the process transparent and easy to manage.
            </p>
            <div className="sdivider" />
          </div>

          <div style={{ position:'relative' }}>
            <div style={{ position:'absolute',top:46,left:'12%',width:'76%',height:2,background:'linear-gradient(90deg,#FF6B2B,#1F4E8C)',opacity:.18,borderRadius:1 }} />
            <div className="four-col">
              {shippingFlow.map((step,i) => (
                <div key={i} className="flow-card">
                  <div className="flow-num" style={{ background:`linear-gradient(135deg,${step.color},${step.color}cc)` }}>
                    {step.step}
                  </div>
                  <div style={{ fontSize:11,fontWeight:800,background:'linear-gradient(135deg,#FF6B2B,#1F4E8C)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',textTransform:'uppercase',letterSpacing:'.1em',marginBottom:10 }}>
                    Step {i+1}
                  </div>
                  <h3 style={{ fontSize:16,fontWeight:800,color:'#111827',marginBottom:10 }}>{step.title}</h3>
                  <p style={{ fontSize:13,color:'#6B7280',lineHeight:1.7 }}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign:'center',marginTop:44 }}>
            <Link href="/contactus" className="btn-accent" style={{ fontSize:15,padding:'14px 36px' }}>
              Start Domestic Shipping with Us
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section style={{ padding:'56px 24px',background:'white' }}>
        <div style={{ maxWidth:820,margin:'0 auto' }}>
          <div className="cta-wrap" style={{ padding:'56px 44px',textAlign:'center' }}>
            <div className="orb" style={{ width:300,height:300,background:'radial-gradient(circle,rgba(255,107,43,.2) 0%,transparent 70%)',top:-100,right:-60 }} />
            <div style={{ position:'relative',zIndex:1 }}>
              <div className="badge-pill" style={{ margin:'0 auto 18px' }}>🇮🇳 Ship Anywhere in India</div>
              <h2 style={{ fontSize:'clamp(22px,4vw,36px)',fontWeight:900,color:'white',marginBottom:14 }}>
                Ready to Ship Pan-India?
              </h2>
              <p style={{ fontSize:15,color:'rgba(255,255,255,.7)',marginBottom:32,maxWidth:460,margin:'0 auto 32px',lineHeight:1.7 }}>
                Join thousands of D2C brands and SMEs who trust ParcelSetu for fast, reliable domestic deliveries.
              </p>
              <div style={{ display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap' }}>
                <Link href="/contactus" className="btn-accent" style={{ fontSize:15,padding:'14px 32px' }}>Get Started →</Link>
                <Link href="/track" style={{
                  display:'inline-flex',alignItems:'center',gap:8,
                  background:'rgba(255,255,255,.12)',color:'white',
                  padding:'14px 32px',borderRadius:'50px',fontSize:15,fontWeight:800,
                  textDecoration:'none',border:'2px solid rgba(255,255,255,.25)',
                  backdropFilter:'blur(8px)',transition:'all .3s',fontFamily:'inherit'
                }}>Track Shipment</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
