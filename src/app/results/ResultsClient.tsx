"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, ArrowDown, X, ChevronRight } from "lucide-react";

// ─── Chart Data ──────────────────────────────────────────────────────────────

const cutshortData = [
  { label: "W1",  clicks: 3800,  impressions: 138000 },
  { label: "W2",  clicks: 4200,  impressions: 148000 },
  { label: "W3",  clicks: 3600,  impressions: 132000 },
  { label: "W4",  clicks: 4600,  impressions: 162000 },
  { label: "W5",  clicks: 3900,  impressions: 142000 },
  { label: "W6",  clicks: 4900,  impressions: 172000 },
  { label: "W7",  clicks: 4100,  impressions: 150000 },
  { label: "W8",  clicks: 5200,  impressions: 183000 },
  { label: "W9",  clicks: 4400,  impressions: 158000 },
  { label: "W10", clicks: 5600,  impressions: 196000 },
  { label: "W11", clicks: 4700,  impressions: 168000 },
  { label: "W12", clicks: 5900,  impressions: 207000 },
  { label: "W13", clicks: 5100,  impressions: 179000 },
  { label: "W14", clicks: 6300,  impressions: 220000 },
  { label: "W15", clicks: 5400,  impressions: 191000 },
  { label: "W16", clicks: 6700,  impressions: 234000 },
  { label: "W17", clicks: 5800,  impressions: 204000 },
  { label: "W18", clicks: 7100,  impressions: 248000 },
  { label: "W19", clicks: 6200,  impressions: 217000 },
  { label: "W20", clicks: 7500,  impressions: 263000 },
  { label: "W21", clicks: 6600,  impressions: 231000 },
  { label: "W22", clicks: 7900,  impressions: 277000 },
  { label: "W23", clicks: 7100,  impressions: 248000 },
  { label: "W24", clicks: 8300,  impressions: 291000 },
  { label: "W25", clicks: 7500,  impressions: 263000 },
  { label: "W26", clicks: 8600,  impressions: 302000 },
];

const semanticData = [
  { label: "D1",  clicks: 8,   impressions: 320 },
  { label: "D2",  clicks: 12,  impressions: 480 },
  { label: "D3",  clicks: 6,   impressions: 260 },
  { label: "D4",  clicks: 10,  impressions: 400 },
  { label: "D5",  clicks: 8,   impressions: 320 },
  { label: "D6",  clicks: 15,  impressions: 580 },
  { label: "D7",  clicks: 38,  impressions: 1400 },
  { label: "D8",  clicks: 72,  impressions: 2600 },
  { label: "D9",  clicks: 98,  impressions: 3500 },
  { label: "D10", clicks: 145, impressions: 5200 },
  { label: "D11", clicks: 162, impressions: 5800 },
  { label: "D12", clicks: 178, impressions: 6300 },
  { label: "D13", clicks: 191, impressions: 6800 },
  { label: "D14", clicks: 205, impressions: 7300 },
  { label: "D15", clicks: 218, impressions: 7800 },
];

const sptechData = [
  { label: "M1",  clicks: 55,  impressions: 22000 },
  { label: "M2",  clicks: 70,  impressions: 26000 },
  { label: "M3",  clicks: 85,  impressions: 31000 },
  { label: "M4",  clicks: 95,  impressions: 36000 },
  { label: "M5",  clicks: 110, impressions: 42000 },
  { label: "M6",  clicks: 125, impressions: 48000 },
  { label: "M7",  clicks: 145, impressions: 56000 },
  { label: "M8",  clicks: 168, impressions: 65000 },
  { label: "M9",  clicks: 192, impressions: 74000 },
  { label: "M10", clicks: 218, impressions: 84000 },
  { label: "M11", clicks: 248, impressions: 96000 },
  { label: "M12", clicks: 282, impressions: 109000 },
  { label: "M13", clicks: 318, impressions: 123000 },
  { label: "M14", clicks: 358, impressions: 138000 },
  { label: "M15", clicks: 402, impressions: 155000 },
  { label: "M16", clicks: 448, impressions: 173000 },
  { label: "M17", clicks: 498, impressions: 192000 },
  { label: "M18", clicks: 552, impressions: 213000 },
  { label: "M19", clicks: 608, impressions: 235000 },
  { label: "M20", clicks: 668, impressions: 258000 },
];

const turitoData = [
  { label: "W1",  clicks: 80,    impressions: 8000 },
  { label: "W2",  clicks: 120,   impressions: 11000 },
  { label: "W3",  clicks: 95,    impressions: 9500 },
  { label: "W4",  clicks: 140,   impressions: 13000 },
  { label: "W5",  clicks: 110,   impressions: 10500 },
  { label: "W6",  clicks: 160,   impressions: 15000 },
  { label: "W7",  clicks: 130,   impressions: 12500 },
  { label: "W8",  clicks: 185,   impressions: 17500 },
  { label: "W9",  clicks: 150,   impressions: 14000 },
  { label: "W10", clicks: 210,   impressions: 20000 },
  { label: "W11", clicks: 180,   impressions: 17000 },
  { label: "W12", clicks: 245,   impressions: 23000 },
  { label: "W13", clicks: 210,   impressions: 20000 },
  { label: "W14", clicks: 290,   impressions: 27500 },
  { label: "W15", clicks: 250,   impressions: 24000 },
  { label: "W16", clicks: 340,   impressions: 32000 },
  { label: "W17", clicks: 500,   impressions: 48000 },
  { label: "W18", clicks: 780,   impressions: 75000 },
  { label: "W19", clicks: 1200,  impressions: 115000 },
  { label: "W20", clicks: 1800,  impressions: 175000 },
  { label: "W21", clicks: 2600,  impressions: 252000 },
  { label: "W22", clicks: 3600,  impressions: 350000 },
  { label: "W23", clicks: 4800,  impressions: 465000 },
  { label: "W24", clicks: 6200,  impressions: 600000 },
  { label: "W25", clicks: 7800,  impressions: 755000 },
  { label: "W26", clicks: 9600,  impressions: 930000 },
  { label: "W27", clicks: 11500, impressions: 1115000 },
  { label: "W28", clicks: 13200, impressions: 1280000 },
  { label: "W29", clicks: 14600, impressions: 1415000 },
  { label: "W30", clicks: 15200, impressions: 1470000 },
];

const wiingyData = [
  { label: "W1",  clicks: 120,  impressions: 18000 },
  { label: "W2",  clicks: 165,  impressions: 24000 },
  { label: "W3",  clicks: 145,  impressions: 21000 },
  { label: "W4",  clicks: 195,  impressions: 28000 },
  { label: "W5",  clicks: 170,  impressions: 25000 },
  { label: "W6",  clicks: 280,  impressions: 42000 },
  { label: "W7",  clicks: 390,  impressions: 58000 },
  { label: "W8",  clicks: 510,  impressions: 76000 },
  { label: "W9",  clicks: 640,  impressions: 95000 },
  { label: "W10", clicks: 780,  impressions: 116000 },
  { label: "W11", clicks: 870,  impressions: 130000 },
  { label: "W12", clicks: 960,  impressions: 143000 },
  { label: "W13", clicks: 1010, impressions: 150000 },
  { label: "W14", clicks: 1050, impressions: 156000 },
  { label: "W15", clicks: 1080, impressions: 161000 },
  { label: "W16", clicks: 1100, impressions: 164000 },
  { label: "W17", clicks: 1120, impressions: 167000 },
  { label: "W18", clicks: 1140, impressions: 170000 },
];

// ─── Case Study Config ────────────────────────────────────────────────────────

interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

interface CaseStudy {
  id: string;
  brand: string;
  industry: string;
  period: string;
  headline: string;
  growth: string;
  metrics: Metric[];
  data: { label: string; clicks: number; impressions: number }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "cutshort",
    brand: "CutShort",
    industry: "HR Tech / Job Platform",
    period: "Dec 2021 – Jun 2022",
    headline: "2.3x organic clicks in 6 months",
    growth: "+132%",
    metrics: [
      { label: "Clicks",       value: "326K → 759K", highlight: true },
      { label: "Impressions",  value: "12M → 27.2M" },
      { label: "CTR",          value: "2.7% → 2.8%" },
      { label: "Avg Position", value: "17.9 → 17.8" },
    ],
    data: cutshortData,
  },
  {
    id: "semantic",
    brand: "Semantic SEO",
    industry: "B2B SaaS / Content",
    period: "2-Week Sprint",
    headline: "Zero to 1.7K clicks in under 2 weeks",
    growth: "+2,625%",
    metrics: [
      { label: "Clicks",       value: "0 → 1.7K",   highlight: true },
      { label: "Impressions",  value: "0 → 30.7K" },
      { label: "Time",         value: "14 days" },
      { label: "Strategy",     value: "Semantic Clustering" },
    ],
    data: semanticData,
  },
  {
    id: "sptech",
    brand: "SP Tech Inc",
    industry: "IT Services / B2B",
    period: "15-Month Campaign",
    headline: "Consistent 15-month growth from a standing start",
    growth: "+1,115%",
    metrics: [
      { label: "Clicks",       value: "55 → 668",   highlight: true },
      { label: "Impressions",  value: "22K → 258K" },
      { label: "Duration",     value: "15 months" },
      { label: "Trajectory",   value: "Steady Growth" },
    ],
    data: sptechData,
  },
  {
    id: "turito",
    brand: "Turito",
    industry: "EdTech / K-12",
    period: "12-Month Campaign",
    headline: "0 to 1.1M clicks in 12 months",
    growth: "+18,900%",
    metrics: [
      { label: "Clicks",       value: "80 → 15.2K/wk", highlight: true },
      { label: "Impressions",  value: "8K → 1.47M/wk" },
      { label: "Total Clicks", value: "1.1M+" },
      { label: "Total Impr.",  value: "113M+" },
    ],
    data: turitoData,
  },
  {
    id: "wiingy",
    brand: "Wiingy",
    industry: "EdTech / Tutoring",
    period: "4-Month Campaign",
    headline: "5x traffic growth in 4 months",
    growth: "+850%",
    metrics: [
      { label: "Clicks",       value: "120 → 1.14K/wk", highlight: true },
      { label: "Impressions",  value: "18K → 170K/wk" },
      { label: "Peak CTR",     value: "~0.67%" },
      { label: "Inflection",   value: "Week 6" },
    ],
    data: wiingyData,
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: number, duration = 2000, inView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return value;
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────

function formatTooltipValue(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return String(value);
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { color: string; name: string; value: number }[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border-strong)",
        borderRadius: "var(--radius-md)",
        padding: "0.75rem 1rem",
        boxShadow: "var(--shadow-lg)",
        fontFamily: "var(--font-body)",
        fontSize: "0.8125rem",
      }}
    >
      <p style={{ color: "var(--color-text-muted)", marginBottom: "0.25rem" }}>
        {label}
      </p>
      {payload.map((entry, i) => (
        <p key={i} style={{ color: entry.color, fontWeight: 600, margin: 0 }}>
          {entry.name}: {formatTooltipValue(entry.value)}
        </p>
      ))}
    </div>
  );
};

// ─── Tick Formatter ───────────────────────────────────────────────────────────

function formatAxisTick(v: number): string {
  if (v >= 1000000) return `${(v / 1000000).toFixed(0)}M`;
  if (v >= 1000) return `${(v / 1000).toFixed(0)}K`;
  return String(v);
}

// ─── Case Study Card ──────────────────────────────────────────────────────────

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className="card"
      style={{
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        willChange: "transform",
      }}
    >
      {/* Card Header */}
      <div
        className="flex items-start"
        style={{
          justifyContent: "space-between",
          marginBottom: "0.5rem",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            {study.brand}
          </h2>
          <div
            className="flex items-center"
            style={{ gap: "0.5rem", marginTop: "0.375rem", flexWrap: "wrap" }}
          >
            <span className="badge badge-muted">{study.industry}</span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
              }}
            >
              {study.period}
            </span>
          </div>
        </div>
        <span className="badge badge-accent" style={{ flexShrink: 0 }}>
          {study.growth} Clicks
        </span>
      </div>

      {/* Metric Pills */}
      <div
        className="flex"
        style={{
          gap: "0.5rem",
          flexWrap: "wrap",
          margin: "1rem 0",
        }}
      >
        {study.metrics.map((m) => (
          <div
            key={m.label}
            style={{
              backgroundColor: "var(--color-surface-2)",
              border: `1px solid ${m.highlight ? "var(--color-accent-border)" : "var(--color-border)"}`,
              borderRadius: "var(--radius-sm)",
              padding: "0.375rem 0.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.125rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6875rem",
                fontWeight: 500,
                color: "var(--color-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {m.label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: m.highlight
                  ? "var(--color-accent)"
                  : "var(--color-text-secondary)",
              }}
            >
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div
        aria-label={`${study.brand} organic growth chart`}
        style={{ height: "220px", minHeight: "180px", width: "100%" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={study.data}
            margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id={`grad-clicks-${study.id}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#6C63FF" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#6C63FF" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient
                id={`grad-impr-${study.id}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="rgba(128,117,255,0.4)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="95%"
                  stopColor="rgba(128,117,255,0.4)"
                  stopOpacity={0.01}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#2A2A4A"
              vertical={false}
            />
            <XAxis
              dataKey="label"
              tick={false}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={formatAxisTick}
              tick={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fill: "#7070A0",
              }}
              axisLine={false}
              tickLine={false}
              width={36}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={formatAxisTick}
              tick={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fill: "#7070A0",
              }}
              axisLine={false}
              tickLine={false}
              width={42}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="clicks"
              name="Clicks"
              stroke="#6C63FF"
              strokeWidth={2.5}
              fill={`url(#grad-clicks-${study.id})`}
              fillOpacity={0.15}
              dot={false}
              isAnimationActive={inView}
              animationDuration={1500}
              animationEasing="ease-out"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="impressions"
              name="Impressions"
              stroke="rgba(128,117,255,0.6)"
              strokeWidth={2.5}
              fill={`url(#grad-impr-${study.id})`}
              fillOpacity={0.15}
              dot={false}
              isAnimationActive={inView}
              animationDuration={1500}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Headline Insight */}
      <div
        className="flex items-center"
        style={{
          gap: "0.5rem",
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <TrendingUp
          size={16}
          color="var(--color-accent)"
          aria-hidden="true"
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9375rem",
            fontWeight: 600,
            color: "var(--color-text-primary)",
            margin: 0,
          }}
        >
          {study.headline}
        </p>
      </div>
    </div>
  );
}

// ─── Aggregate Stats ──────────────────────────────────────────────────────────

function AggregateStat({
  target,
  suffix,
  label,
  inView,
}: {
  target: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const value = useCountUp(target, 2000, inView);

  const display =
    target >= 1000000
      ? `${(value / 1000000).toFixed(1)}M${suffix}`
      : `${value}${suffix}`;

  return (
    <div style={{ textAlign: "center" }}>
      <div className="stat-number" style={{ color: "var(--color-accent)" }}>
        {display}
      </div>
      <div className="stat-label" style={{ marginTop: "0.25rem" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ResultsClient() {
  const [showFloating, setShowFloating] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const [heroStatsInView, setHeroStatsInView] = useState(false);
  const aggregateRef = useRef<HTMLDivElement>(null);
  const [aggregateInView, setAggregateInView] = useState(false);

  // Floating CTA scroll listener
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 600 && !dismissed) setShowFloating(true);
      else if (window.scrollY <= 600) setShowFloating(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  // Hero stats IntersectionObserver
  useEffect(() => {
    const el = heroStatsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeroStatsInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Aggregate section IntersectionObserver
  useEffect(() => {
    const el = aggregateRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAggregateInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          paddingTop: "8rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center, rgba(108,99,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>
            Proof of Work
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--color-text-primary)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginTop: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            Real Results.{" "}
            <span style={{ color: "var(--color-accent)" }}>Real Data.</span>{" "}
            No Fluff.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.125rem",
              color: "var(--color-text-secondary)",
              maxWidth: "560px",
              margin: "0 auto 3rem",
              lineHeight: 1.7,
            }}
          >
            Every chart below is sourced directly from Google Search Console.
            Real clients, real growth, real impact.
          </p>

          {/* Hero Aggregate Stats */}
          <div
            ref={heroStatsRef}
            style={{
              display: "inline-grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)",
              maxWidth: "640px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div style={{ padding: "1.5rem 1rem", borderRight: "1px solid var(--color-border)", textAlign: "center" }}>
              <HeroStat target={1200000} suffix="+" label="Total organic clicks generated" inView={heroStatsInView} />
            </div>
            <div style={{ padding: "1.5rem 1rem", borderRight: "1px solid var(--color-border)", textAlign: "center" }}>
              <HeroStat target={142000000} suffix="+" label="Total search impressions driven" inView={heroStatsInView} />
            </div>
            <div style={{ padding: "1.5rem 1rem", textAlign: "center" }}>
              <HeroStat target={22} suffix="+" label="Scaled across industries" inView={heroStatsInView} />
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-muted)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                letterSpacing: "0.05em",
              }}
            >
              Scroll to explore
            </span>
            <div
              aria-hidden="true"
              style={{
                animation: "bounce 1.8s ease-in-out infinite",
              }}
            >
              <ArrowDown size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      {/* ── AGGREGATE IMPACT ─────────────────────────────────────────────── */}
      <section
        className="section"
        style={{
          backgroundColor: "var(--color-surface)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>
            Aggregate Impact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              fontWeight: 700,
              color: "var(--color-text-primary)",
              marginTop: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            The numbers speak for themselves
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--color-text-secondary)",
              marginBottom: "3rem",
            }}
          >
            Compounded across 22+ brands, industries, and market sizes.
          </p>

          <div
            ref={aggregateRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <AggregateStat
              target={1200000}
              suffix="+"
              label="Total Organic Clicks"
              inView={aggregateInView}
            />
            <AggregateStat
              target={142000000}
              suffix="+"
              label="Total Impressions"
              inView={aggregateInView}
            />
            <AggregateStat
              target={22}
              suffix="+"
              label="Brands Scaled"
              inView={aggregateInView}
            />
            <AggregateStat
              target={9}
              suffix="+"
              label="Years Experience"
              inView={aggregateInView}
            />
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────────────── */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <div
            style={{
              backgroundColor: "var(--color-surface-2)",
              border: "1px solid var(--color-accent-border)",
              borderRadius: "var(--radius-xl)",
              padding: "4rem 2rem",
              boxShadow: "var(--shadow-accent)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(108,99,255,0.1) 0%, transparent 60%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <p
                className="section-label"
                style={{ justifyContent: "center" }}
              >
                Ready to grow?
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
                  fontWeight: 700,
                  color: "var(--color-text-primary)",
                  marginTop: "0.75rem",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Your brand could be the next case study
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.0625rem",
                  color: "var(--color-text-secondary)",
                  maxWidth: "480px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.7,
                }}
              >
                Let&apos;s talk about your SEO goals and build a strategy
                backed by data, not guesswork.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{ display: "inline-flex", gap: "0.5rem" }}
              >
                Book a Free Strategy Call
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING CTA ─────────────────────────────────────────────────── */}
      {showFloating && !dismissed && (
        <div
          role="complementary"
          aria-label="Book a strategy call"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 40,
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-accent-border)",
            borderRadius: "var(--radius-lg)",
            padding: "1rem 1.25rem",
            boxShadow: "var(--shadow-accent)",
            display: "flex",
            alignItems: "center",
            gap: "0.875rem",
            maxWidth: "320px",
            animation: "slideUp 0.3s ease",
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                margin: "0 0 0.25rem",
              }}
            >
              Impressed by the results?
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
                margin: 0,
              }}
            >
              Let&apos;s do the same for your brand.
            </p>
          </div>
          <div className="flex items-center" style={{ gap: "0.5rem", flexShrink: 0 }}>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Talk to me
            </Link>
            <button
              onClick={() => {
                setDismissed(true);
                setShowFloating(false);
              }}
              aria-label="Dismiss floating call-to-action"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-text-muted)",
                cursor: "pointer",
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "var(--radius-sm)",
              }}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* ── KEYFRAME STYLES ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

// ─── Hero Stat (uses hook internally) ────────────────────────────────────────

function useCountUpValue(target: number, duration: number, inView: boolean): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return value;
}

function HeroStat({
  target,
  suffix,
  label,
  inView,
}: {
  target: number;
  suffix: string;
  label: string;
  inView: boolean;
}) {
  const value = useCountUpValue(target, 2000, inView);

  const display =
    target >= 1000000
      ? `${(value / 1000000).toFixed(1)}M${suffix}`
      : `${value}${suffix}`;

  return (
    <>
      <div
        className="stat-number"
        style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}
      >
        {display}
      </div>
      <div
        className="stat-label"
        style={{ marginTop: "0.25rem", fontFamily: "var(--font-body)" }}
      >
        {label}
      </div>
    </>
  );
}
