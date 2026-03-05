/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are the Self-Expression OS — a warm, minimal, reflective guide. Your role is to act as a Mirror, Lens, and Map for the user.

SESSION PHASES:
1. MIRROR: The user shares what's alive for them. Reflect it back so they feel truly heard. Don't analyze yet — just show them you understand. One or two sentences max.
2. LENS: Ask gentle, curious follow-up questions (max 5 total across the session) to help the signal become clearer. Each question should help the user see something about themselves — not interrogate them. Stop asking when clarity appears.
3. MAP: When you sense enough clarity, close with a small, safe, concrete experiment they can try soon — not a life change, just a next step. Keep it simple and actionable.

RULES:
- Never diagnose, analyze trauma, assign fixed labels, or predict futures
- Default to 3 questions, max 5 — stop early when clarity appears
- Experiments must be small, safe, short-timeframe
- Favor motion over transformation pressure
- Warm but not gushing. Honest but not clinical.
- Keep responses short — 2-4 sentences unless a longer response is truly needed
- When you offer the final experiment/map, end your message with exactly: "|||MAP|||" on its own line, followed by the experiment on the next line.
- You may optionally end with an archetype name (Sovereign, Protector, Weaver, Teacher, Steward, or Mystic) if one clearly fits, format: "|||ARCHETYPE||| ArchetypeName"`;

const ARCHETYPE_COLORS = {
  Sovereign: "#C9A84C",
  Protector: "#4C7C59",
  Weaver:    "#A084CA",
  Teacher:   "#5B8DB8",
  Steward:   "#8B6F5E",
  Mystic:    "#4A6FA5",
};

const ARCHETYPE_DESC = {
  Sovereign: "You lead from within.",
  Protector: "You guard what matters.",
  Weaver:    "You connect and create.",
  Teacher:   "You illuminate for others.",
  Steward:   "You tend and sustain.",
  Mystic:    "You sense the unseen.",
};

const font = "'Inter', 'Helvetica Neue', Arial, sans-serif";

// ── Replace with your Anthropic API key or proxy endpoint ──
const API_ENDPOINT = "https://api.anthropic.com/v1/messages";
const API_KEY = "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";

export default function PathFinder() {
  const [messages,   setMessages]   = useState([]);
  const [input,      setInput]      = useState("");
  const [loading,    setLoading]    = useState(false);
  const [phase,      setPhase]      = useState("entry");
  const [experiment, setExperiment] = useState(null);
  const [archetype,  setArchetype]  = useState(null);
  const [started,    setStarted]    = useState(false);
  const bottomRef = useRef(null);
  const inputRef  = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const parseResponse = (text) => {
    if (!text.includes("|||MAP|||")) return { clean: text, exp: null, arch: null };
    const [before, after] = text.split("|||MAP|||");
    const archMatch = (after || "").match(/\|\|\|ARCHETYPE\|\|\|\s*(\w+)/);
    return {
      clean: before.trim(),
      exp:   (after || "").replace(/\|\|\|ARCHETYPE\|\|\|\s*\w+/, "").trim(),
      arch:  archMatch ? archMatch[1] : null,
    };
  };

  const sendMessage = async (userText) => {
    if (!userText.trim()) return;
    setLoading(true);
    const next = [...messages, { role: "user", content: userText }];
    setMessages(next);
    setInput("");

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Remove the x-api-key header if routing through a proxy
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: next,
        }),
      });

      const data = await res.json();
      const raw  = data.content?.[0]?.text || "";
      const { clean, exp, arch } = parseResponse(raw);

      setMessages([...next, { role: "assistant", content: clean }]);
      if (exp) { setExperiment(exp); setArchetype(arch); setPhase("map"); }
      else setPhase("chat");
    } catch {
      setMessages([...next, { role: "assistant", content: "Something went quiet. Try again in a moment." }]);
    }

    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleStart   = () => { setStarted(true); sendMessage("(session start)"); };
  const handleSubmit  = () => { if (input.trim() && !loading) sendMessage(input.trim()); };
  const handleRestart = () => {
    setMessages([]); setInput(""); setPhase("entry");
    setExperiment(null); setArchetype(null); setStarted(false); setLoading(false);
  };

  const accent = archetype ? ARCHETYPE_COLORS[archetype] : "#6B7AE8";

  // ── Styles ──────────────────────────────────────────────
  const s = {
    wrap:    { minHeight: "100%", background: "#F7F8FC", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: font },
    header:  { width: "100%", maxWidth: 600, padding: "36px 28px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-end" },
    label:   { fontSize: 10, letterSpacing: "0.18em", color: "#B0B8CC", textTransform: "uppercase", marginBottom: 6, fontWeight: 500 },
    title:   { fontSize: 22, color: "#1C1E2E", fontWeight: 300, letterSpacing: "-0.01em" },
    divider: { width: "100%", maxWidth: 600, padding: "0 28px" },
    chat:    { maxWidth: 600, width: "100%", padding: "0 28px", flex: 1, display: "flex", flexDirection: "column" },
  };

  const bubble = (role) => ({
    maxWidth: "78%",
    padding: "11px 16px",
    borderRadius: role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
    background: role === "user" ? "#1C1E2E" : "#FFFFFF",
    color: role === "user" ? "#F7F8FC" : "#2C2F40",
    fontSize: 14.5, lineHeight: 1.7, fontWeight: 300,
    boxShadow: role === "assistant" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
  });

  return (
    <div style={s.wrap}>
      {/* Header */}
      <div style={s.header}>
        <div>
          <div style={s.label}>Self-Expression OS</div>
          <div style={s.title}>PathFinder</div>
        </div>
        {started && (
          <button onClick={handleRestart} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 11, color: "#C0C8D8", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: font, fontWeight: 500 }}>
            Start over
          </button>
        )}
      </div>

      {/* Divider */}
      <div style={s.divider}>
        <div style={{ height: 1, background: "#EAEDF5", margin: "18px 0 0" }} />
      </div>

      {/* Entry screen */}
      {!started && (
        <div style={{ maxWidth: 600, width: "100%", padding: "56px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 28 }}>
          <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, margin: 0, maxWidth: 380, fontWeight: 300 }}>
            A quiet space to hear yourself think. Share what's alive for you, and we'll find a small next step together.
          </p>
          <div style={{ display: "flex", gap: 16, color: "#C0C8D8", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, alignItems: "center" }}>
            <span>Mirror</span><span style={{ fontSize: 8 }}>●</span><span>Reflect</span><span style={{ fontSize: 8 }}>●</span><span>Next Steps</span>
          </div>
          <button onClick={handleStart} style={{ marginTop: 8, background: "#1C1E2E", color: "#F7F8FC", border: "none", borderRadius: 8, padding: "13px 36px", fontSize: 13, cursor: "pointer", letterSpacing: "0.06em", fontFamily: font, fontWeight: 500 }}>
            Begin
          </button>
        </div>
      )}

      {/* Chat */}
      {started && (
        <div style={s.chat}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, paddingTop: 24, paddingBottom: 16 }}>

            {messages.filter(m => m.content !== "(session start)").map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={bubble(m.role)}>{m.content}</div>
              </div>
            ))}

            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ padding: "11px 16px", borderRadius: "16px 16px 16px 4px", background: "#FFFFFF", display: "flex", gap: 5, alignItems: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: "#C0C8D8", animation: "pf-pulse 1.2s ease-in-out infinite", animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Map card */}
            {experiment && (
              <div style={{ borderRadius: 12, padding: "20px 22px", background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderTop: `3px solid ${accent}`, marginTop: 8 }}>
                <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: accent, marginBottom: 10, fontWeight: 600 }}>
                  Your next step
                </div>
                <p style={{ fontSize: 14.5, color: "#2C2F40", lineHeight: 1.75, margin: 0, fontWeight: 300 }}>{experiment}</p>
                {archetype && (
                  <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #F0F2F8", display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: ARCHETYPE_COLORS[archetype], flexShrink: 0 }} />
                    <span style={{ fontSize: 11.5, color: "#9BA3B8" }}>{archetype} — {ARCHETYPE_DESC[archetype]}</span>
                  </div>
                )}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {phase !== "map" && (
            <div style={{ position: "sticky", bottom: 0, background: "#F7F8FC", paddingBottom: 24, paddingTop: 10 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-end", background: "#FFFFFF", borderRadius: 12, border: "1px solid #E8EBF4", padding: "10px 10px 10px 16px", boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSubmit(); } }}
                  placeholder="Share what's alive for you…"
                  rows={1}
                  style={{ flex: 1, border: "none", outline: "none", resize: "none", fontSize: 14.5, lineHeight: 1.6, background: "transparent", color: "#1C1E2E", fontFamily: font, fontWeight: 300, maxHeight: 120, overflowY: "auto" }}
                />
                <button onClick={handleSubmit} disabled={!input.trim() || loading} style={{ background: input.trim() && !loading ? "#1C1E2E" : "#EEF0F8", color: input.trim() && !loading ? "#F7F8FC" : "#B0B8CC", border: "none", borderRadius: 8, width: 36, height: 36, cursor: input.trim() && !loading ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, transition: "all 0.15s", fontFamily: font }}>↑</button>
              </div>
              <div style={{ fontSize: 10.5, color: "#C8CEDC", textAlign: "center", marginTop: 8, letterSpacing: "0.04em" }}>
                Enter to send · Shift+Enter for new line
              </div>
            </div>
          )}

          {phase === "map" && (
            <div style={{ paddingBottom: 28, paddingTop: 8, textAlign: "center" }}>
              <button onClick={handleRestart} style={{ background: "none", border: "1px solid #E0E4F0", borderRadius: 8, padding: "10px 28px", fontSize: 12.5, color: "#6B7280", cursor: "pointer", letterSpacing: "0.05em", fontFamily: font, fontWeight: 500 }}>
                Begin a new session
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        @keyframes pf-pulse { 0%, 100% { opacity: 0.3; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1); } }
        textarea::placeholder { color: #B8BFD0; }
      `}</style>
    </div>
  );
}