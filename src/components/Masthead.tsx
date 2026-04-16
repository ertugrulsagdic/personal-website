"use client";

import { useEffect, useState } from "react";

const FIRST_COMMIT_ISO = "2024-07-17T23:04:05-05:00";

function formatIssueDate(d: Date) {
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const yyyy = d.getUTCFullYear();
  return `${mm}.${dd}.${yyyy}`;
}

function formatIstanbulTime(d: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
}

function daysSince(iso: string, now: Date) {
  const start = new Date(iso).getTime();
  return Math.max(0, Math.floor((now.getTime() - start) / 86_400_000));
}

const LABELS = {
  en: {
    issue: "Issue",
    series: "Field Notes",
    vol: "Vol. 01",
    location: "Istanbul",
    uptime: "Uptime",
    uptimeUnit: "d",
  },
  tr: {
    issue: "Sayı",
    series: "Saha Notları",
    vol: "Cilt 01",
    location: "İstanbul",
    uptime: "Çalışma",
    uptimeUnit: "g",
  },
} as const;

export default function Masthead({ locale = "en" }: { locale?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  const t = LABELS[locale as keyof typeof LABELS] ?? LABELS.en;

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const issue = now ? formatIssueDate(now) : "——.——.————";
  const time = now ? formatIstanbulTime(now) : "——:——";
  const uptime = now ? daysSince(FIRST_COMMIT_ISO, now).toLocaleString(locale === "tr" ? "tr-TR" : "en-US") : "—,———";

  return (
    <div className="border-b border-[color:var(--rule)] print:hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="px-4 sm:px-8 lg:px-24 flex items-center justify-between gap-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted dark:text-cream-muted font-numeric">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline">{t.issue}</span>
            <span className="text-ink dark:text-cream">{issue}</span>
            <span className="hidden md:inline text-[color:var(--rule)]">/</span>
            <span className="hidden md:inline">{t.series}</span>
            <span className="hidden lg:inline text-[color:var(--rule)]">/</span>
            <span className="hidden lg:inline">{t.vol}</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <span className="hidden sm:inline">{t.location}</span>
            <span className="flex items-center gap-1.5 text-ink dark:text-cream">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-vermilion animate-blink" aria-hidden />
              {time}
              <span className="hidden sm:inline text-ink-muted dark:text-cream-muted">GMT+3</span>
            </span>
            <span className="hidden md:inline text-[color:var(--rule)]">/</span>
            <span className="hidden md:inline">
              {t.uptime} <span className="text-ink dark:text-cream">{uptime}{t.uptimeUnit}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
