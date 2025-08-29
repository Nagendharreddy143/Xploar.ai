import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "../../context/ModalContext";
import {
  CalendarIcon,
  StreakIcon,
  McqIcon,
  DocIcon,
  MicIcon,
  CardsIcon,
  DebateIcon,
  SparkIcon,
  ShieldIcon,
  ClockIcon
} from "../common/Icons";

function Chip({ children }) { return (<span className="rounded-full border border-white/15 px-2 py-1 text-xs text-slate-200 whitespace-nowrap">{children}</span>) }
function Tag({ children }) { return (<span className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 border border-white/10 whitespace-nowrap">{children}</span>) }
function Bubble({ children, glow }) { return (<span className={`grid place-items-center h-7 w-7 rounded-full border border-white/15 flex-shrink-0 ${glow ? "shadow-[0_0_20px_rgba(99,102,241,.6)]" : ""}`}>{children}</span>) }
function Card({ children }) { return (<span className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs whitespace-nowrap">{children}</span>) }
function Check({ dim }) { return (<span className={`text-base flex-shrink-0 ${dim ? "opacity-50" : ""}`} aria-hidden>✓</span>) }
function Flame() { return (<span className="animate-pulse flex-shrink-0">🔥</span>) }
function Progress({ value }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <div className="h-2 w-20 sm:w-28 overflow-hidden rounded bg-white/10 flex-shrink-0">
        <div className="h-full bg-white/80" style={{ width: `${value}%` }} />
      </div>
      <span className="text-xs text-slate-300 flex-shrink-0">{value}%</span>
    </div>
  )
}
function Bar({ value, label }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="text-xs text-slate-300 flex-shrink-0">{label}</span>
      <div className="h-2 w-16 sm:w-24 overflow-hidden rounded bg-white/10 flex-shrink-0">
        <motion.div initial={{ width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: .9 }} className="h-full bg-white/80" />
      </div>
    </div>
  )
}
function Wave() {
  return (
    <div className="flex gap-1 flex-shrink-0">
      {[0, 1, 2, 3, 4].map((n) => (
        <motion.span key={n} initial={{ height: 6 }} animate={{ height: [6, 18, 8, 22, 6] }} transition={{ duration: .9, repeat: Infinity, delay: n * 0.08 }} className="w-1 rounded bg-white/80" />
      ))}
    </div>
  );
}
function Avatar() { return (<span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-[10px] flex-shrink-0">A</span>) }
function Timer() { return (<span className="rounded-md border border-white/15 px-2 py-1 text-xs flex-shrink-0">00:58</span>) }
function FloatBadge({ children, className }) { return (<div className={`pointer-events-none absolute rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100 backdrop-blur ${className || ""}`}>{children}</div>) }

function labelFor(k) {
  switch (k) {
    case "journey": return "Day-0 Onboarding";
    case "planner": return "Study Planner";
    case "mocks": return "Adaptive Practice";
    case "evaluator": return "Mains Feedback";
    case "voice": return "Voice Tutor";
    case "current": return "Daily Current Affairs";
    case "debate": return "ClashPoint";
    default: return "";
  }
}

const scenes = [
  { key: "journey", title: "Journey Builder", blurb: "Pick 'UPSC Foundation in 100 days.' Get a daily, bite-sized plan with auto-revision.", Icon: CalendarIcon },
  { key: "planner", title: "Study Planner", blurb: "Clear tasks, streaks, and progress % so you always know what's next.", Icon: StreakIcon },
  { key: "mocks", title: "AI Mock Tests", blurb: "Daily adaptive MCQs + weekly full-length mocks with instant analytics.", Icon: McqIcon },
  { key: "evaluator", title: "Answer Evaluator (Mains)", blurb: "Upload or write—get structure, relevance, depth, and examples scored.", Icon: DocIcon },
  { key: "voice", title: "Voice Tutor", blurb: "Ask doubts hands-free; get crisp, cited explanations.", Icon: MicIcon },
  { key: "current", title: "Current-Affairs Nano-Feed", blurb: "Condensed, exam-ready updates with recall checks.", Icon: CardsIcon },
  { key: "debate", title: "Debate Mode (ClashPoint)", blurb: "1:1, 1:4, or team debates with rubrics to build argumentation.", Icon: DebateIcon },
];

function MicroStrip({ type }) {
  const base = "mt-4 flex items-center gap-2 overflow-x-auto scrollbar-hide";
  if (type === "journey") {
    return (
      <div className={base}>
        <div className="flex items-center gap-2 min-w-max">
          <Chip>Day 01</Chip><Chip>Day 02</Chip>
          <motion.div initial={{ scale: .8, opacity: .6 }} animate={{ scale: 1, opacity: 1 }} transition={{ repeat: Infinity, repeatType: "mirror", duration: .9 }}><Chip>Revision</Chip></motion.div>
        </div>
      </div>
    );
  }
  if (type === "planner") {
    return (
      <div className={base}>
        <div className="flex items-center gap-2 min-w-max">
          <Flame /> <Progress value={78} />
          <Check /> <Check dim />
        </div>
      </div>
    );
  }
  if (type === "mocks") {
    return (
      <div className={base}>
        <div className="flex flex-wrap items-center gap-2 w-full max-w-full">
          <Bubble>A</Bubble><Bubble>B</Bubble><Bubble glow>C</Bubble><Bubble>D</Bubble>
          <Bar value={92} label="Accuracy" />
        </div>
      </div>
    );
  }
  if (type === "evaluator") {
    return (
      <div className={`${base} flex-wrap`}>
        <div className="flex flex-wrap items-center gap-2 w-full max-w-full">
          <Tag>Structure</Tag><Tag>Relevance</Tag><Tag>Depth</Tag><Tag>Examples</Tag>
        </div>
      </div>
    );
  }
  if (type === "voice") {
    return (
      <div className={base}>
        <div className="flex items-center gap-2 min-w-max">
          <Wave /> <Tag>Sources ✓</Tag>
        </div>
      </div>
    );
  }
  if (type === "current") {
    return (
      <div className={base}>
        <div className="flex items-center gap-2 min-w-max">
          <Card>GS-II</Card><Card>IR</Card><Card>Eco</Card><Chip>Recall ✓</Chip>
        </div>
      </div>
    );
  }
  return (
    <div className={base}>
      <div className="flex flex-wrap items-center gap-2 w-full max-w-full">
        <Avatar /><Timer /><Tag>Clarity</Tag><Tag>Evidence</Tag><Tag>Rebuttal</Tag>
      </div>
    </div>
  );
}

const HeroSection = () => {
  const { openModal } = useModal();
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const DURATION = 3500; // ms per scene

  useEffect(() => {
    start();
    return stop;
  }, []);

  const start = () => {
    stop();
    timer.current = window.setInterval(() => setI((prev) => (prev + 1) % scenes.length), DURATION);
  };
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = null;
  };

  const active = scenes[i];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* glow background */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,.35), transparent 70%)" }} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 py-20 md:grid-cols-2 md:py-28 lg:py-32">
        {/* Left: copy */}
        <div className="flex flex-col items-start justify-center">

          <h1 className="text-balance text-3xl sm:text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Crack the{" "}
            <span className="relative">
              <span className="animate-gradient-flow bg-gradient-to-r from-electric-aqua via-neon-lilac to-cosmic-indigo bg-[length:200%_auto] bg-clip-text text-transparent">
                UPSC Foundation
              </span>
              <span className="absolute inset-0 blur-xl opacity-30 animate-gradient-flow bg-gradient-to-r from-electric-aqua via-neon-lilac to-cosmic-indigo bg-[length:200%_auto]" aria-hidden="true"></span>
            </span>{" "}
            in Just 100 Days
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-300 md:text-xl">
            Plan. Practice. Get feedback. Repeat — with an AI co-pilot.
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-400 italic">
            Where Curiosity Becomes Clarity
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full">
            <button
              onClick={openModal}
              className="rounded-xl bg-white px-4 sm:px-5 py-3 text-slate-900 shadow-lg transition hover:scale-[1.02] active:scale-[.98] text-sm sm:text-base"
            >
              Start Your 100-Day Journey
            </button>
            <a href="#demo" className="rounded-xl border border-white/20 px-4 sm:px-5 py-3 text-white/90 backdrop-blur hover:bg-white/5 text-sm sm:text-base">
              See It in 60 Seconds
            </a>
          </div>

          {/* quick trust strip */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-400">
            <span className="inline-flex items-center gap-2"><SparkIcon className="h-4 w-4 flex-shrink-0" /> Adaptive learning</span>
            <span className="inline-flex items-center gap-2"><ShieldIcon className="h-4 w-4 flex-shrink-0" /> Private & secure</span>
            <span className="inline-flex items-center gap-2"><ClockIcon className="h-4 w-4 flex-shrink-0" /> 10-min/day rhythm</span>
          </div>
        </div>

        {/* Right: animated scene */}
        <div className="relative h-[400px] sm:h-[520px] w-full select-none overflow-hidden" onMouseEnter={stop} onMouseLeave={start}>
          {/* device frame */}
          <div className="absolute inset-0 grid place-items-center px-2 sm:px-0">
            <div className="relative w-full max-w-[520px] rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-3 sm:p-4 shadow-2xl backdrop-blur">
              <div className="rounded-xl sm:rounded-2xl border border-white/10 bg-black/50 p-3 sm:p-5 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={active.key} initial={{ opacity: 0, y: 16, rotateX: -10 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: -16, rotateX: 10 }} transition={{ duration: 0.5, ease: "easeOut" }} className="grid grid-cols-[60px_1fr] sm:grid-cols-[72px_1fr] items-start gap-3 sm:gap-4 min-w-0">
                    {/* Icon / Lottie slot */}
                    <motion.div initial={{ scale: .9 }} animate={{ scale: 1 }} transition={{ duration: .5 }} className="grid h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] place-items-center rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 flex-shrink-0">
                      {/* Swap with Lottie if desired */}
                      <active.Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                    </motion.div>

                    <div className="min-w-0 overflow-hidden">
                      <div className="text-xs sm:text-sm uppercase tracking-wide text-indigo-200/80 truncate">{labelFor(active.key)}</div>
                      <h3 className="mt-1 text-lg sm:text-xl font-semibold leading-tight">{active.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">{active.blurb}</p>
                      {/* Mini scene-specific strip */}
                      <MicroStrip type={active.key} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* scene dots */}
              <div className="mt-3 sm:mt-4 flex justify-center gap-1.5 sm:gap-2">
                {scenes.map((s, idx) => (
                  <button key={s.key} onClick={() => setI(idx)} aria-label={`Show ${s.title}`} className={`h-1.5 w-4 sm:w-6 rounded-full transition ${idx === i ? "bg-white" : "bg-white/25 hover:bg-white/40"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* floating badges - hidden on mobile for better readability */}
          <FloatBadge className="hidden sm:block left-2 top-6">Auto-revision</FloatBadge>
          <FloatBadge className="hidden sm:block right-4 top-24">Instant analytics</FloatBadge>
          <FloatBadge className="hidden sm:block bottom-10 left-6">Cited answers</FloatBadge>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;