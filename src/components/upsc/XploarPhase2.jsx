import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { create } from "zustand";
import {
  ClipboardList,
  MessageSquare,
  Mic,
  Trophy,
  Target,
  Search,
  RefreshCcw,
  BarChart4,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const BRAND = { teal: "#30C7C7", darkBlue: "#1A145A", white: "#FFFFFF", soft: "#E9ECEF" };
const fmt = (d) => new Date(d).toISOString().slice(0, 10);
const uid = () => Math.random().toString(36).slice(2, 10);
const hasStorage = typeof globalThis !== "undefined" && ("localStorage" in globalThis);
const save = (k, v) => { try { if (hasStorage) localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const load = (k, d) => { try { if (!hasStorage) return d; const raw = localStorage.getItem(k); if (!raw) return d; const v = JSON.parse(raw); return v ?? d; } catch { return d; } };

const UPSC_FOUNDATION = [
  { id: "polity_preamble", name: "Polity: Preamble" },
  { id: "polity_fr", name: "Polity: Fundamental Rights" },
  { id: "history_ivc", name: "History: Indus Valley" },
  { id: "geog_monsoon", name: "Geography: Monsoons" },
  { id: "econ_fiscal", name: "Economy: Fiscal Policy" },
  { id: "env_bio", name: "Environment: Biodiversity" },
  { id: "sci_space", name: "Science: Space Tech" },
  { id: "ethics_integrity", name: "Ethics: Integrity" },
];

const MCQ_BANK = {
  polity_preamble: [
    { stem: "Who gives the Preamble its authority?", options: ["Parliament", "People of India", "Supreme Court", "President"], ans: 1 },
  ],
  polity_fr: [
    { stem: "Fundamental Rights are in which Part?", options: ["Part III", "Part IV", "Part V", "Part IX"], ans: 0 },
  ],
};

const useApp = create((set) => ({
  active: load("p2/active", "mocks"),
  setActive: (tab) => set(() => { save("p2/active", tab); return { active: tab }; }),
  mockHistory: load("p2/mockHistory", []),
  saveMockRun: (run) => set((s) => { const mockHistory = [run, ...s.mockHistory].slice(0, 20); save("p2/mockHistory", mockHistory); return { mockHistory }; }),
  resetAll: () => set(() => { try { if (hasStorage) localStorage.clear(); } catch {} return { active: "mocks", mockHistory: [] }; }),
}));

const Logo = () => (
  <div className="flex items-center gap-3 select-none">
    <div className="font-bold text-xl" style={{ color: BRAND.darkBlue }}>xploar.ai</div>
    <div className="text-xs opacity-70">Phase 2</div>
  </div>
);

const Header = ({ onSearch }) => {
  const resetAll = useApp((s) => s.resetAll);
  return (
    <div className="w-full flex items-center gap-3 p-4 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-10">
      <Logo />
      <div className="ml-auto flex items-center gap-2 w-full max-w-xl">
        <Search className="opacity-70" aria-hidden />
        <Input aria-label="Search" placeholder="Search mocks, debates…" onChange={(e) => onSearch(e.target.value)} />
      </div>
      <Button className="ml-2" variant="outline" onClick={resetAll} aria-label="Reset">Reset</Button>
    </div>
  );
};

const Sidebar = () => {
  const active = useApp((s) => s.active);
  const setActive = useApp((s) => s.setActive);
  const items = [
    { id: "mocks", label: "Mocks", icon: ClipboardList },
    { id: "debate", label: "Debate", icon: MessageSquare },
    { id: "interview", label: "Interview", icon: Mic },
    { id: "problems", label: "100 Problems", icon: Target },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
  ];
  return (
    <div className="h-full w-full p-4 flex flex-col gap-2">
      {items.map(({ id, label, icon: Icon }) => (
        <Button key={id} variant={active === id ? "default" : "ghost"} className={`justify-start gap-3 ${active === id ? "shadow" : ""}`} onClick={() => setActive(id)} aria-current={active === id}>
          <Icon className="h-4 w-4" aria-hidden /> {label}
        </Button>
      ))}
    </div>
  );
};

function Mocks() {
  const subjects = UPSC_FOUNDATION.map((t) => ({ id: t.id, name: t.name }));
  const [subject, setSubject] = useState(subjects[0].id);
  const [count, setCount] = useState(20);
  const [mins, setMins] = useState(20);
  const [started, setStarted] = useState(false);
  const [seed, setSeed] = useState(0);
  return (
    <div className="grid gap-4">
      {!started ? (
        <Card>
          <CardHeader><CardTitle>Start a Timed Mock</CardTitle></CardHeader>
          <CardContent className="grid md:grid-cols-4 gap-3">
            <div className="md:col-span-2">
              <label className="text-sm">Subject</label>
              <select className="w-full border rounded-md h-10 px-3" value={subject} onChange={(e)=>setSubject(e.target.value)}>
                {subjects.map(s=> <option key={s.id} value={s.id}>{s.name}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm">Questions</label>
              <Input type="number" value={count} onChange={(e)=>setCount(Number(e.target.value||0))} />
            </div>
            <div>
              <label className="text-sm">Time (mins)</label>
              <Input type="number" value={mins} onChange={(e)=>setMins(Number(e.target.value||0))} />
            </div>
            <div className="md:col-span-4 flex gap-2">
              <Button onClick={()=>{ setSeed(Math.random()); setStarted(true); }}>Start</Button>
              <div className="text-xs opacity-70 flex items-center gap-2"><Badge variant="outline">Neg Marking</Badge> +1 / −0.33</div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <MockRunner subject={subject} count={count} mins={mins} onExit={()=>setStarted(false)} key={seed} />
      )}
      <MockHistory />
    </div>
  );
}

function MockRunner({ subject, count, mins, onExit }) {
  const saveMockRun = useApp((s) => s.saveMockRun);
  const bank = MCQ_BANK[subject] || [];
  const qs = useMemo(() => bank.length ? Array.from({ length: count }).map((_, i) => ({ ...bank[i % bank.length], id: i + 1 })) : [], [bank, count]);
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState({});
  const [left, setLeft] = useState(mins * 60);
  useEffect(() => { const id = setInterval(()=> setLeft((s)=> Math.max(0, s-1)), 1000); return ()=>clearInterval(id); }, []);
  useEffect(() => { if (left===0) submit(); }, [left]);
  const q = qs[i];
  const choose = (idx) => setSelected((s)=>({ ...s, [q.id]: idx }));
  const next = () => setI((x)=> Math.min(qs.length-1, x+1));
  const prev = () => setI((x)=> Math.max(0, x-1));
  const submit = () => {
    const total = qs.length; let score = 0; const detail = [];
    qs.forEach((qq) => { const pick = selected[qq.id]; const correct = pick === qq.ans; if (pick == null) return; score += correct ? 1 : -0.33; detail.push({ id: qq.id, correct, pick, ans: qq.ans }); });
    const run = { id: uid(), date: fmt(new Date()), subject, score: Math.max(0, Number(score.toFixed(2))), total, time: mins, negMarking: true, detail };
    saveMockRun(run); onExit();
  };
  if (!qs.length) return (
    <Card>
      <CardHeader><CardTitle>No items</CardTitle></CardHeader>
      <CardContent className="text-sm">Seed more MCQs for this subject to run a mock.</CardContent>
    </Card>
  );
  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">Mock — {UPSC_FOUNDATION.find(t=>t.id===subject)?.name}<Badge variant="outline" className="ml-2">{i+1}/{qs.length}</Badge><Badge>{mm}:{ss}</Badge></CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm">{q.stem}</div>
        <div className="grid gap-2">
          {q.options.map((opt, idx) => (
            <Button key={idx} variant={selected[q.id] === idx ? "default" : "outline"} onClick={() => choose(idx)}>{opt}</Button>
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={prev}>Back</Button>
          <Button variant="outline" onClick={next}>Next</Button>
          <Button onClick={submit}>Submit</Button>
        </div>
        <div className="text-xs opacity-70">Marking: +1 / −0.33, unattempted: 0</div>
      </CardContent>
    </Card>
  );
}

function MockHistory() {
  const history = useApp((s) => s.mockHistory);
  if (!history.length) return null;
  return (
    <Card>
      <CardHeader><CardTitle className="flex items-center gap-2"><BarChart4 className="w-4 h-4"/> Recent Mock Runs</CardTitle></CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-5 text-xs font-semibold opacity-70"><div>Date</div><div>Subject</div><div>Score</div><div>Questions</div><div>Time</div></div>
        {history.map((h)=> (
          <div key={h.id} className="grid grid-cols-5 p-2 rounded-lg border items-center text-sm">
            <div>{h.date}</div>
            <div>{UPSC_FOUNDATION.find(t=>t.id===h.subject)?.name}</div>
            <div>{h.score}</div>
            <div>{h.total}</div>
            <div>{h.time}m</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function Debate() {
  const [msg, setMsg] = useState("");
  const [clock, setClock] = useState(60);
  const [run, setRun] = useState(false);
  const [thread, setThread] = useState([{ who: "AI", text: "Debate: Is simultaneous elections good for India? Opening in 60s." }]);
  useEffect(()=>{ if(!run) return; const id=setInterval(()=> setClock((c)=> Math.max(0,c-1)),1000); return ()=>clearInterval(id); },[run]);
  useEffect(()=>{ if(clock===0){ setRun(false); setThread((t)=>[...t,{who:"AI",text:"Time! Counter‑point: federal autonomy vs logistical efficiency."}]); } },[clock]);
  const send = () => { if (!msg.trim()) return; setThread((t) => [...t, { who: "You", text: msg }]); setMsg(""); };
  return (
    <Card>
      <CardHeader><CardTitle className="flex items-center gap-2"><MessageSquare className="w-4 h-4"/> Debate Rooms <Badge variant="outline">{clock}s</Badge> <Button size="sm" variant="ghost" onClick={()=>setRun((r)=>!r)}>{run?"Pause":"Start"}</Button></CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div className="h-56 overflow-auto rounded-xl border p-3 bg-white text-sm">
          {thread.map((m, i) => (<div key={i} className={`mb-2 ${m.who === "AI" ? "text-blue-800" : ""}`}><strong>{m.who}:</strong> {m.text}</div>))}
        </div>
        <div className="flex gap-2">
          <Input placeholder="Your point…" value={msg} onChange={(e) => setMsg(e.target.value)} />
          <Button onClick={send}>Send</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Interview() {
  const qs = [
    "Tell me about a time you showed leadership in a crisis.",
    "What reforms would you prioritize to improve primary healthcare?",
    "How would you handle a conflict between public interest and pressure from local leaders?",
  ];
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(null);
  const [left, setLeft] = useState(120);
  const [run, setRun] = useState(false);
  useEffect(()=>{ if(!run) return; const id=setInterval(()=> setLeft((s)=> Math.max(0,s-1)),1000); return ()=>clearInterval(id); },[run]);
  useEffect(()=>{ if(left===0) setRun(false); },[left]);
  const heuristicScore = (txt) => { const L = txt.length; const hasEx = /for example|e\.g\.|case/i.test(txt); const hasStruct = /first|second|conclude|therefore/i.test(txt); const clarity = Math.min(10, Math.round(L/120)); const depth = Math.min(10, hasEx ? 8 + Math.min(2, Math.floor(L/300)) : Math.min(7, Math.floor(L/200))); const structure = Math.min(10, hasStruct ? 9 : 6); const ethics = /integrity|equity|inclusion|transparency/i.test(txt) ? 9 : 6; return { clarity, depth, structure, ethics, total: clarity+depth+structure+ethics }; };
  const evaluate = () => { const s = heuristicScore(answer); setScore(s); };
  return (
    <Card>
      <CardHeader><CardTitle className="flex items-center gap-2"><Mic className="w-4 h-4"/> UPSC Personality Test (AI)</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        <div className="p-4 rounded-xl border bg-white text-sm">{qs[i]}</div>
        <div className="flex items-center gap-2 text-xs"><Badge variant="outline">{Math.floor(left/60)}:{String(left%60).padStart(2,'0')}</Badge><Button size="sm" variant="ghost" onClick={()=>setRun((r)=>!r)}>{run?"Pause":"Start"}</Button><Button size="sm" variant="ghost" onClick={()=>{setLeft(120); setRun(false);}}>Reset</Button></div>
        <Textarea rows={6} placeholder="Record or type your answer here…" value={answer} onChange={(e)=>setAnswer(e.target.value)} />
        <div className="flex gap-2">
          <Button variant="outline" onClick={()=> setI((x)=>(x+1)%qs.length)}>Next Question</Button>
          <Button onClick={evaluate}>Evaluate</Button>
        </div>
        {score && (
          <div className="grid grid-cols-4 gap-2 text-sm">
            <div>Clarity: <strong>{score.clarity}/10</strong></div>
            <div>Depth: <strong>{score.depth}/10</strong></div>
            <div>Structure: <strong>{score.structure}/10</strong></div>
            <div>Ethics: <strong>{score.ethics}/10</strong></div>
            <div className="col-span-4">Total: <Badge>{score.total}/40</Badge></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Problems100() {
  const [count, setCount] = useState(0);
  const pct = Math.min(100, Math.round((count / 100) * 100));
  return (
    <Card>
      <CardHeader><CardTitle>100 Problems / Day</CardTitle></CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm">Solved: {count}/100</div>
          <Button onClick={() => setCount((c) => Math.min(100, c + 5))}>+5</Button>
        </div>
        <Progress value={pct} className="h-3" />
      </CardContent>
    </Card>
  );
}

function Leaderboard() {
  const rows = [ { name: "Asha", score: 92 }, { name: "Rahul", score: 90 }, { name: "Priya", score: 86 }, { name: "You", score: 78 } ];
  return (
    <Card>
      <CardHeader><CardTitle>Weekly Leaderboard</CardTitle></CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-3 text-xs font-semibold opacity-70"><div>Name</div><div>Score</div><div>Status</div></div>
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-3 p-2 rounded-lg border items-center">
            <div>{r.name}</div><div>{r.score}</div><div>{i === 3 ? <Badge style={{ background: BRAND.teal, color: BRAND.darkBlue }}>You</Badge> : <Badge variant="secondary">Peer</Badge>}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function XploarPhase2() {
  const active = useApp((s) => s.active);
  const [query, setQuery] = useState("");
  const Feature = () => {
    const views = { mocks: <Mocks />, debate: <Debate />, interview: <Interview />, problems: <Problems100 />, leaderboard: <Leaderboard /> };
    return views[active] || null;
  };
  return (
    <div className="min-h-screen" style={{ background: "#F8FBFD" }}>
      <Header onSearch={query} />
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-4 max-w-7xl mx-auto p-4">
        <div className="rounded-2xl border bg-white sticky top-[76px] h-[calc(100vh-96px)]"><Sidebar /></div>
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border bg-white p-4">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold" style={{ color: BRAND.darkBlue }}>{active.replace(/^[a-z]/, (m) => m.toUpperCase()).replace("-", " ")}</h2>
            <Badge style={{ background: BRAND.teal, color: BRAND.darkBlue }}>Phase 2</Badge>
          </div>
          <Feature />
        </motion.div>
      </div>
      <footer className="text-xs text-center py-6 opacity-70">Phase 2 • Mocks • Debate • Interview • 100 Problems • Leaderboard</footer>
    </div>
  );
}
