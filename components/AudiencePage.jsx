"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function AudiencePage({
  hero,
  painPoints = [],
  mondayItems = [],
  fridayMetrics = [],
  dashboard = {},
  testimonial,
  metrics = [],
  faq = [],
  cta,
}) {
  const [activeTab, setActiveTab] = useState('monday');

  const handleCardHover = (event, hovering) => {
    if (!event?.currentTarget) return;
    event.currentTarget.style.transform = hovering ? 'scale(1.03)' : 'scale(1)';
    event.currentTarget.style.boxShadow = hovering
      ? '0 25px 65px rgba(0,0,0,0.45)'
      : '0 12px 30px rgba(0,0,0,0.25)';
  };

  const heroGradient = hero?.gradient ?? 'linear-gradient(120deg, #052b20, #010101)';
  const mini = hero?.miniDashboard ?? {};
  const dashboardMetrics = dashboard.metrics ?? [];
  const dashboardTable = dashboard.table ?? { columns: [], rows: [] };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '80px',
        padding: '60px 24px 80px',
        background: '#020807',
        color: '#F8FAFC',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <section data-hero-section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          padding: '48px',
          borderRadius: '32px',
          background: heroGradient,
          boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
        }}
      >
        <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '11px', color: 'rgba(255,255,255,0.65)', marginBottom: '14px' }}>
              Persona Spotlight
            </p>
            <h1 style={{ fontSize: '44px', lineHeight: 1.15, margin: 0 }}>{hero?.title}</h1>
            <p style={{ fontSize: '18px', lineHeight: 1.6, color: 'rgba(148, 233, 210, 0.9)', marginTop: '16px', maxWidth: 560 }}>
              {hero?.subtitle}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/book-demo"
              style={{
                padding: '14px 32px',
                borderRadius: '999px',
                background: '#4ADE80',
                color: '#04130d',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 15px 30px rgba(74,222,128,0.35)',
              }}
            >
              Book a Demo
            </Link>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', alignSelf: 'center' }}>
              {hero?.supportText}
            </span>
          </div>
        </div>

        <div
          style={{
            flex: '1 1 320px',
            minWidth: '320px',
            background: 'rgba(1, 6, 5, 0.72)',
            borderRadius: '24px',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '24px',
            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.45)',
          }}
        >
          <div style={{ display: 'flex', gap: '6px', marginBottom: '18px' }}>
            {[ '#ff5f56', '#ffbd2e', '#27c93f' ].map((color) => (
              <span key={color} style={{ width: 12, height: 12, borderRadius: '50%', background: color, opacity: 0.9 }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{mini.title}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)' }}>{mini.subtitle}</div>
            </div>
            {mini.pill && (
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#F8FAFC', background: 'rgba(74,222,128,0.15)', borderRadius: '999px', padding: '4px 12px' }}>
                {mini.pill}
              </span>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {(mini.rows || []).map((row) => (
              <div
                key={row.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>{row.label}</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)' }}>{row.detail}</span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: row.color || '#4ADE80' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {painPoints.map((pain) => (
            <div
              key={pain.title}
              onMouseEnter={(event) => handleCardHover(event, true)}
              onMouseLeave={(event) => handleCardHover(event, false)}
              style={{
                background: 'rgba(9,25,20,0.85)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: '24px',
                minHeight: '200px',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
            >
              <div style={{ fontSize: '32px' }}>{pain.icon}</div>
              <h3 style={{ fontSize: '18px', margin: '16px 0 8px', color: '#F8FAFC' }}>{pain.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{pain.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'rgba(4,12,10,0.9)', borderRadius: '28px', padding: '36px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          {['monday', 'friday'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 22px',
                borderRadius: '999px',
                border: activeTab === tab ? '1px solid rgba(255,255,255,0.8)' : '1px solid rgba(255,255,255,0.2)',
                background: activeTab === tab ? 'rgba(255,255,255,0.05)' : 'transparent',
                color: '#F8FAFC',
                cursor: 'pointer',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              {tab === 'monday' ? 'Your Monday Morning' : 'Your Friday Report'}
            </button>
          ))}
        </div>
        {activeTab === 'monday' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '20px', background: 'rgba(0,0,0,0.35)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            {(mondayItems || []).map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: item.color || '#4ADE80', boxShadow: `0 0 10px ${item.color || '#4ADE80'}` }} />
                <div>
                  <div style={{ fontWeight: 600 }}>{item.label}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', padding: '20px', background: 'rgba(0,0,0,0.3)', borderRadius: '20px' }}>
            {(fridayMetrics || []).map((metric) => (
              <div key={metric.label} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '18px', background: 'rgba(8,15,14,0.9)' }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{metric.label}</div>
                <div style={{ fontSize: '28px', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{metric.value}</div>
                <div style={{ fontSize: '12px', color: metric.trendColor || '#4ADE80', marginTop: '4px' }}>{metric.trend}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section
        style={{
          background: 'rgba(3,8,7,0.85)',
          borderRadius: '32px',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '40px',
          boxShadow: '0 30px 90px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 60px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['#F87171', '#FBBF24', '#34D399', '#60A5FA'].map((dot) => (
              <span key={dot} style={{ width: 12, height: 12, borderRadius: '50%', background: dot, opacity: 0.9 }} />
            ))}
          </div>
          <div style={{ flex: '1 1 340px', minWidth: '280px' }}>
            <h3 style={{ marginBottom: '6px', fontSize: '18px' }}>{dashboard.title}</h3>
            <p style={{ marginTop: 0, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{dashboard.subtitle}</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '18px' }}>
              {dashboardMetrics.map((metric) => (
                <div key={metric.label} style={{ flex: '1 1 140px', minWidth: '140px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '18px', padding: '14px' }}>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginBottom: '4px' }}>{metric.label}</div>
                  <div style={{ fontSize: '24px', fontWeight: 700 }}>{metric.value}</div>
                  <div style={{ marginTop: '8px', height: '6px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)' }}>
                    <div style={{ width: `${(metric.fill || 0.6) * 100}%`, height: '100%', borderRadius: '999px', background: metric.barColor || '#4ADE80' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: '1 1 320px', minWidth: '280px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', color: 'rgba(255,255,255,0.85)' }}>
              <thead>
                <tr>
                  {dashboardTable.columns.map((col) => (
                    <th key={col} style={{ textAlign: 'left', paddingBottom: '8px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dashboardTable.rows.map((row, index) => (
                  <tr key={index} style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    {row.cells.map((cell, idx) => (
                      <td key={idx} style={{ padding: '10px 0' }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {testimonial && (
        <section
          style={{
            borderLeft: '6px solid #4ADE80',
            background: 'rgba(255,255,255,0.03)',
            padding: '30px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
          }}
        >
          <div style={{ fontSize: '48px', lineHeight: 0.5, color: 'rgba(255,255,255,0.2)' }}>&ldquo;</div>
          <p style={{ fontSize: '18px', fontStyle: 'italic', lineHeight: 1.8, margin: '10px 0', color: 'rgba(255,255,255,0.9)' }}>{testimonial.quote}</p>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
            <strong style={{ color: '#F8FAFC' }}>{testimonial.name}</strong> &middot; {testimonial.title}, {testimonial.club}
          </div>
        </section>
      )}

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
        {metrics.map((metric) => (
          <div key={metric.label} style={{ textAlign: 'center', padding: '24px', borderRadius: '22px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: '42px', fontWeight: 700, color: metric.accent || '#4ADE80' }}>{metric.value}</div>
            <div style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.55)' }}>{metric.label}</div>
          </div>
        ))}
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faq.map((item) => (
          <details
            key={item.question}
            style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '14px 18px',
            }}
          >
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{item.question}</summary>
            <p style={{ marginTop: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{item.answer}</p>
          </details>
        ))}
      </section>

      <section
        style={{
          padding: '48px',
          background: 'linear-gradient(135deg, #04140f, #010203)',
          borderRadius: '32px',
          border: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>{cta?.headline}</h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '24px', fontSize: '16px' }}>{cta?.subtext}</p>
        <Link
          href="/book-demo"
          style={{
            padding: '14px 36px',
            borderRadius: '999px',
            background: '#4ADE80',
            color: '#04130d',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 20px 50px rgba(74,222,128,0.35)',
          }}
        >
          {cta?.buttonText || 'Book a Demo'}
        </Link>
      </section>
    </div>
  );
}
