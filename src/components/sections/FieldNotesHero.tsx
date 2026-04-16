import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import ProfilePicture from "@/images/ertugrul.jpeg";
import { socialLinks } from "@/data";

export default function FieldNotesHero({
  translations,
}: {
  translations: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    pictureAlt: string;
    nameLead: string;
    nameAccent: string;
    tagline: string;
    eyebrow: string;
    kickerLeft: string;
    kickerRight: string;
    figLabel: string;
    figCaption: string;
    bylineBy: string;
    bylineDateline: string;
    bylineDispatch: string;
    datelineValue: string;
    continued: string;
  };
}) {
  return (
    <Container className="pt-10 sm:pt-14 lg:pt-20">
      {/* Top kicker row — section numeral + category */}
      <div className="flex items-baseline justify-between gap-6 mb-10 sm:mb-14">
        <div className="flex items-baseline gap-4">
          <span className="font-display italic text-vermilion text-4xl sm:text-5xl leading-none">№01</span>
          <span className="tick-caps">{translations.kickerLeft}</span>
        </div>
        <span className="tick-caps hidden sm:inline">{translations.kickerRight}</span>
      </div>

      {/* Hairline rule with a red pencil mark */}
      <div className="relative mb-10 sm:mb-14">
        <span className="rule-h origin-left animate-rule-draw" />
        <span
          className="absolute -top-[3px] left-[4%] h-[7px] w-10 bg-vermilion origin-left animate-rule-draw"
          style={{ animationDelay: "0.9s" }}
          aria-hidden
        />
      </div>

      {/* The feature spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Portrait plate */}
        <figure className="lg:col-span-5 order-1 lg:order-none">
          <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 lg:max-w-none">
            {/* Vermilion offset card */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vermilion rounded-[2px]" aria-hidden />
            {/* Portrait with duotone */}
            <div className="relative h-full w-full overflow-hidden rounded-[2px] bg-ink">
              <Image
                alt={translations.pictureAlt}
                src={ProfilePicture}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover mix-blend-luminosity opacity-[0.92] contrast-[1.05]"
              />
              {/* Duotone wash */}
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{ background: "linear-gradient(180deg, rgba(200,50,30,0.35) 0%, rgba(21,19,15,0.55) 100%)" }}
                aria-hidden
              />
              {/* Halftone scanlines */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.6) 0 1px, transparent 1px 3px)",
                }}
                aria-hidden
              />
            </div>
          </div>
          <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted dark:text-cream-muted flex items-start gap-3">
            <span className="text-vermilion">{translations.figLabel}</span>
            <span>{translations.figCaption}</span>
          </figcaption>
        </figure>

        {/* Right: Masthead + essay opener */}
        <div className="lg:col-span-7 space-y-8">
          {/* Eyebrow / greeting as editorial slug */}
          <p className="tick-caps animate-settle opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            {translations.eyebrow}
          </p>

          {/* The headline — byline + thesis */}
          <h1
            className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.98] tracking-[-0.02em] text-ink dark:text-cream animate-settle opacity-0"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            {translations.nameLead}{" "}
            <em className="italic text-vermilion font-normal">
              {translations.nameAccent}
            </em>{" "}
            <span className="block text-ink-muted dark:text-cream-muted italic font-display">
              {translations.tagline}
            </span>
          </h1>

          {/* Deck / subhead */}
          <p
            className="font-display text-2xl sm:text-[1.75rem] leading-[1.35] text-ink-soft dark:text-cream/80 max-w-[46ch] animate-settle opacity-0"
            style={{ animationDelay: "0.45s", animationFillMode: "forwards" }}
          >
            {translations.description}
          </p>

          {/* Byline strip — role, location, correspondence */}
          <div
            className="pt-6 border-t border-[color:var(--rule)] grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 animate-settle opacity-0"
            style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
          >
            <Field label={translations.bylineBy} value={`${translations.nameLead} ${translations.nameAccent}`} />
            <Field label={translations.bylineDateline} value={translations.datelineValue} />
            <Field label={translations.bylineDispatch} value={translations.subtitle} />
          </div>

          {/* Social — rendered as a dispatch list, not a button row */}
          <ul
            className="flex flex-wrap gap-x-6 gap-y-2 pt-2 animate-settle opacity-0"
            style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}
          >
            {socialLinks.map((s) => (
              <li key={s.name}>
                <Link
                  href={s.link}
                  target="_blank"
                  className="group inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted dark:text-cream-muted hover:text-vermilion transition-colors"
                >
                  <span className="text-vermilion opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom continuation rule */}
      <div className="mt-14 sm:mt-20 flex items-center justify-between gap-6">
        <span className="rule-h flex-1 origin-left animate-rule-draw" style={{ animationDelay: "1.2s" }} />
        <span className="tick-caps whitespace-nowrap">{translations.continued}</span>
        <span className="rule-h flex-1 origin-right animate-rule-draw" style={{ animationDelay: "1.2s" }} />
      </div>
    </Container>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="tick-caps">{label}</span>
      <span className="font-sans text-sm text-ink dark:text-cream">{value}</span>
    </div>
  );
}
