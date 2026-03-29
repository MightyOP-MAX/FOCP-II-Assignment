const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "LeetCode 134 - Gas Station";

// Color palette: Dark techy theme
const C = {
  bg: "0F1117",         // Near-black bg
  card: "1A1F2E",       // Card bg
  accent: "F7C948",     // Yellow accent
  accent2: "3DD68C",    // Green
  accent3: "F87171",    // Red
  accent4: "60A5FA",    // Blue
  textMain: "F1F5F9",
  textSub: "94A3B8",
  white: "FFFFFF",
};

const makeShadow = () => ({ type: "outer", blur: 10, offset: 3, angle: 135, color: "000000", opacity: 0.3 });

// ─────────────────────────────────────────────
// SLIDE 1: TITLE
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };

  // Top accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });

  // LeetCode badge
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.55, y: 0.65, w: 1.5, h: 0.42,
    fill: { color: "F7A800" }, line: { color: "F7A800" }, rectRadius: 0.1
  });
  s.addText("#134", { x: 0.55, y: 0.65, w: 1.5, h: 0.42, fontSize: 14, bold: true, color: "1A1200", align: "center", valign: "middle", margin: 0 });

  // Medium badge
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 2.2, y: 0.65, w: 1.3, h: 0.42,
    fill: { color: "F59E0B" }, line: { color: "F59E0B" }, rectRadius: 0.1
  });
  s.addText("MEDIUM", { x: 2.2, y: 0.65, w: 1.3, h: 0.42, fontSize: 12, bold: true, color: "1A1200", align: "center", valign: "middle", margin: 0 });

  // Main title
  s.addText("Gas Station", {
    x: 0.5, y: 1.3, w: 9, h: 1.5,
    fontSize: 60, bold: true, color: C.white, fontFace: "Calibri", align: "left", margin: 0
  });

  // Yellow underline effect using shape
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 2.75, w: 5.5, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });

  // Subtitle
  s.addText("Greedy Algorithm | Circular Route | O(n) Solution", {
    x: 0.5, y: 3.0, w: 9, h: 0.5,
    fontSize: 18, color: C.textSub, fontFace: "Calibri", align: "left", margin: 0
  });

  // Info strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.7, w: 4.0, h: 1.2, fill: { color: C.card }, line: { color: "2A3040" }, shadow: makeShadow() });
  s.addText([
    { text: "Topic: ", options: { color: C.accent, bold: true } },
    { text: "Greedy, Arrays", options: { color: C.textMain } }
  ], { x: 0.7, y: 3.85, w: 3.6, h: 0.35, fontSize: 14, margin: 0 });
  s.addText([
    { text: "Difficulty: ", options: { color: C.accent, bold: true } },
    { text: "Medium", options: { color: "F59E0B" } }
  ], { x: 0.7, y: 4.22, w: 3.6, h: 0.35, fontSize: 14, margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 5.0, y: 3.7, w: 4.5, h: 1.2, fill: { color: C.card }, line: { color: "2A3040" }, shadow: makeShadow() });
  s.addText([
    { text: "Time: ", options: { color: C.accent2, bold: true } },
    { text: "O(n)", options: { color: C.textMain } }
  ], { x: 5.2, y: 3.85, w: 4.1, h: 0.35, fontSize: 14, margin: 0 });
  s.addText([
    { text: "Space: ", options: { color: C.accent2, bold: true } },
    { text: "O(1)", options: { color: C.textMain } }
  ], { x: 5.2, y: 4.22, w: 4.1, h: 0.35, fontSize: 14, margin: 0 });

  // Bottom bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Prepared by: Aman  |  B.Tech AI & ML", {
    x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0
  });
}

// ─────────────────────────────────────────────
// SLIDE 2: PROBLEM STATEMENT (replaces "problem pic")
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent }, line: { color: C.accent } });

  // Slide tag
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 1.8, h: 0.38, fill: { color: C.accent }, line: { color: C.accent } });
  s.addText("PROBLEM", { x: 0.5, y: 0.3, w: 1.8, h: 0.38, fontSize: 13, bold: true, color: "1A1200", align: "center", valign: "middle", margin: 0 });
  s.addText("Gas Station — LeetCode 134", { x: 2.5, y: 0.3, w: 7, h: 0.38, fontSize: 18, bold: true, color: C.white, align: "left", valign: "middle", margin: 0 });

  // Problem description box
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 0.88, w: 9.2, h: 1.28, fill: { color: C.card }, line: { color: "2A3040" }, shadow: makeShadow() });
  s.addText(
    "There are n gas stations along a circular route. You are given two integer arrays gas[i] and cost[i]. " +
    "You have a car with an unlimited gas tank. Start at some station s with an empty tank. " +
    "Travelling from station i to station i+1 consumes cost[i] units of gas. " +
    "Return the starting station index if you can travel the circuit once; otherwise return -1.",
    { x: 0.65, y: 0.95, w: 8.7, h: 1.1, fontSize: 13.5, color: C.textMain, align: "left", valign: "top", margin: 0 }
  );

  // Constraints header
  s.addText("Constraints", { x: 0.5, y: 2.28, w: 9, h: 0.35, fontSize: 15, bold: true, color: C.accent, margin: 0 });

  const constraints = [
    "n == gas.length == cost.length",
    "1 ≤ n ≤ 10⁵",
    "0 ≤ gas[i], cost[i] ≤ 10⁴",
    "The answer is guaranteed to be unique if it exists.",
  ];
  constraints.forEach((c, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 2.72 + i * 0.52, w: 9.2, h: 0.42, fill: { color: i % 2 === 0 ? C.card : "151A27" }, line: { color: "2A3040" } });
    s.addText([
      { text: "→  ", options: { color: C.accent, bold: true } },
      { text: c, options: { color: C.textMain } }
    ], { x: 0.6, y: 2.72 + i * 0.52, w: 9.0, h: 0.42, fontSize: 13, valign: "middle", margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Slide 2 — Problem Statement", { x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0 });
}

// ─────────────────────────────────────────────
// SLIDE 3: CODE
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent2 }, line: { color: C.accent2 } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 1.5, h: 0.38, fill: { color: C.accent2 }, line: { color: C.accent2 } });
  s.addText("CODE", { x: 0.5, y: 0.3, w: 1.5, h: 0.38, fontSize: 13, bold: true, color: "0F2A1A", align: "center", valign: "middle", margin: 0 });
  s.addText("Python Solution — Greedy Approach", { x: 2.15, y: 0.3, w: 7, h: 0.38, fontSize: 18, bold: true, color: C.white, align: "left", valign: "middle", margin: 0 });

  // Code block background
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 0.85, w: 9.2, h: 4.3, fill: { color: "0D1117" }, line: { color: "30363D" }, shadow: makeShadow() });

  // Line numbers strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 0.85, w: 0.55, h: 4.3, fill: { color: "161B22" }, line: { color: "30363D" } });

  const codeLines = [
    { ln: "1", code: "class Solution:", color: C.accent4 },
    { ln: "2", code: "    def canCompleteCircuit(self, gas, cost):", color: C.accent4 },
    { ln: "3", code: "        total_gas  = 0", color: C.textMain },
    { ln: "4", code: "        curr_gas   = 0", color: C.textMain },
    { ln: "5", code: "        start      = 0", color: C.textMain },
    { ln: "6", code: " ", color: C.textMain },
    { ln: "7", code: "        for i in range(len(gas)):", color: C.accent },
    { ln: "8", code: "            total_gas += gas[i] - cost[i]", color: C.textMain },
    { ln: "9", code: "            curr_gas  += gas[i] - cost[i]", color: C.textMain },
    { ln: "10", code: " ", color: C.textMain },
    { ln: "11", code: "            if curr_gas < 0:       # reset start", color: C.textSub },
    { ln: "12", code: "                start    = i + 1", color: C.textMain },
    { ln: "13", code: "                curr_gas = 0", color: C.textMain },
    { ln: "14", code: " ", color: C.textMain },
    { ln: "15", code: "        return start if total_gas >= 0 else -1", color: C.accent2 },
  ];

  codeLines.forEach((line, i) => {
    const y = 0.98 + i * 0.27;
    s.addText(line.ln, { x: 0.42, y, w: 0.5, h: 0.26, fontSize: 10, color: "4B5563", align: "center", margin: 0, fontFace: "Consolas" });
    s.addText(line.code, { x: 1.05, y, w: 8.4, h: 0.26, fontSize: 11, color: line.color, fontFace: "Consolas", margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Slide 3 — Code  |  Add screenshot of your IDE here", { x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0 });
}

// ─────────────────────────────────────────────
// SLIDE 4: LOGIC / INTUITION
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent4 }, line: { color: C.accent4 } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 1.5, h: 0.38, fill: { color: C.accent4 }, line: { color: C.accent4 } });
  s.addText("LOGIC", { x: 0.5, y: 0.3, w: 1.5, h: 0.38, fontSize: 13, bold: true, color: "0A1A3A", align: "center", valign: "middle", margin: 0 });
  s.addText("Core Intuition & Algorithm", { x: 2.15, y: 0.3, w: 7, h: 0.38, fontSize: 18, bold: true, color: C.white, align: "left", valign: "middle", margin: 0 });

  // Two columns
  const logicPoints = [
    { title: "Key Observation", body: "If total gas ≥ total cost, a valid solution always exists — guaranteed by the problem." },
    { title: "Greedy Reset", body: "If curr_gas < 0 at station i, no station from start..i can be the answer → reset start = i+1." },
    { title: "Why it works", body: "If we can't reach station i from start, all intermediate stations are also invalid starting points." },
    { title: "Single pass", body: "One loop handles both the total check (feasibility) and the start-point search simultaneously." },
  ];

  logicPoints.forEach((pt, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.4 + col * 4.75;
    const y = 0.88 + row * 2.05;
    const accent = [C.accent4, C.accent2, C.accent, C.accent3][i];

    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 4.5, h: 1.85, fill: { color: C.card }, line: { color: "2A3040" }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.1, h: 1.85, fill: { color: accent }, line: { color: accent } });
    s.addText(`${i + 1}. ${pt.title}`, { x: x + 0.25, y: y + 0.18, w: 4.1, h: 0.38, fontSize: 14, bold: true, color: accent, margin: 0 });
    s.addText(pt.body, { x: x + 0.25, y: y + 0.6, w: 4.1, h: 1.1, fontSize: 12.5, color: C.textMain, margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Slide 4 — Logic & Intuition", { x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0 });
}

// ─────────────────────────────────────────────
// SLIDE 5: TEST CASES (5 cases)
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent3 }, line: { color: C.accent3 } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 2.1, h: 0.38, fill: { color: C.accent3 }, line: { color: C.accent3 } });
  s.addText("TEST CASES", { x: 0.5, y: 0.3, w: 2.1, h: 0.38, fontSize: 13, bold: true, color: "2A0A0A", align: "center", valign: "middle", margin: 0 });
  s.addText("5 Cases — Edge, Basic, Impossible", { x: 2.75, y: 0.3, w: 7, h: 0.38, fontSize: 18, bold: true, color: C.white, align: "left", valign: "middle", margin: 0 });

  const tests = [
    { num: "TC 1", gas: "[1,2,3,4,5]", cost: "[3,4,5,1,2]", output: "3", verdict: "PASS", type: "Basic Case" },
    { num: "TC 2", gas: "[2,3,4]",     cost: "[3,4,3]",     output: "-1", verdict: "PASS", type: "Impossible" },
    { num: "TC 3", gas: "[5]",         cost: "[4]",          output: "0",  verdict: "PASS", type: "Single Station" },
    { num: "TC 4", gas: "[1,2,3,4,5]", cost: "[3,4,5,2,1]", output: "-1", verdict: "PASS", type: "Total Gas = Total Cost" },
    { num: "TC 5", gas: "[3,1,1]",     cost: "[1,2,2]",     output: "0",  verdict: "PASS", type: "Start at 0" },
  ];

  // Table header
  const headers = ["#", "gas[ ]", "cost[ ]", "Expected", "Status", "Type"];
  const colX    = [0.35, 1.1, 3.2, 5.4, 6.8, 7.7];
  const colW    = [0.7, 2.05, 2.15, 1.35, 0.85, 1.9];

  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 0.88, w: 9.3, h: 0.43, fill: { color: "1E293B" }, line: { color: "2A3040" } });
  headers.forEach((h, i) => {
    s.addText(h, { x: colX[i], y: 0.88, w: colW[i], h: 0.43, fontSize: 12, bold: true, color: C.accent, align: "center", valign: "middle", margin: 0 });
  });

  tests.forEach((tc, r) => {
    const y = 1.38 + r * 0.76;
    const bg = r % 2 === 0 ? C.card : "151A27";
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 9.3, h: 0.66, fill: { color: bg }, line: { color: "2A3040" } });

    const vals = [tc.num, tc.gas, tc.cost, tc.output, tc.verdict, tc.type];
    vals.forEach((v, i) => {
      const isVerdict = i === 4;
      s.addText(v, {
        x: colX[i], y, w: colW[i], h: 0.66,
        fontSize: 11, align: "center", valign: "middle", margin: 0,
        color: isVerdict ? C.accent2 : C.textMain,
        bold: isVerdict,
        fontFace: i <= 3 ? "Consolas" : "Calibri",
      });
    });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Slide 5 — Test Cases", { x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0 });
}

// ─────────────────────────────────────────────
// SLIDE 6: DRY RUN (blank template)
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: "A855F7" }, line: { color: "A855F7" } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 2.0, h: 0.38, fill: { color: "A855F7" }, line: { color: "A855F7" } });
  s.addText("DRY RUN", { x: 0.5, y: 0.3, w: 2.0, h: 0.38, fontSize: 13, bold: true, color: "1A0A2E", align: "center", valign: "middle", margin: 0 });
  s.addText("Trace Through Manually — Fill This In!", { x: 2.65, y: 0.3, w: 7, h: 0.38, fontSize: 18, bold: true, color: C.white, align: "left", valign: "middle", margin: 0 });

  // Input box
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 0.88, w: 9.2, h: 0.68, fill: { color: C.card }, line: { color: "2A3040" } });
  s.addText("Input:  gas = [1, 2, 3, 4, 5]   cost = [3, 4, 5, 1, 2]   →  Expected: 3", {
    x: 0.7, y: 0.88, w: 8.8, h: 0.68, fontSize: 13, color: C.textSub, fontFace: "Consolas", valign: "middle", margin: 0
  });

  // Step table skeleton
  const headers = ["i", "gas[i]", "cost[i]", "diff", "curr_gas", "total_gas", "start"];
  const colX    = [0.35, 0.95, 1.85, 2.75, 3.65, 5.0, 6.9];
  const colW    = [0.58, 0.88, 0.88, 0.88, 1.33, 1.88, 1.8];

  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.72, w: 9.3, h: 0.42, fill: { color: "1E293B" }, line: { color: "2A3040" } });
  headers.forEach((h, i) => {
    s.addText(h, { x: colX[i], y: 1.72, w: colW[i], h: 0.42, fontSize: 12, bold: true, color: "A855F7", align: "center", valign: "middle", margin: 0 });
  });

  for (let r = 0; r < 5; r++) {
    const y = 2.2 + r * 0.52;
    const bg = r % 2 === 0 ? C.card : "151A27";
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 9.3, h: 0.47, fill: { color: bg }, line: { color: "2A3040" } });
    // i column prefilled
    s.addText(String(r), { x: colX[0], y, w: colW[0], h: 0.47, fontSize: 12, color: C.accent, align: "center", valign: "middle", margin: 0, fontFace: "Consolas" });
    // rest empty (dashes)
    for (let c = 1; c < headers.length; c++) {
      s.addText("—", { x: colX[c], y, w: colW[c], h: 0.47, fontSize: 12, color: "2A3040", align: "center", valign: "middle", margin: 0 });
    }
  }

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Slide 6 — Dry Run  |  Fill in values step-by-step during presentation", { x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0 });
}

// ─────────────────────────────────────────────
// SLIDE 7: PROBLEMS FACED & LEARNINGS
// ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.bg };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C.accent2 }, line: { color: C.accent2 } });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 0.3, w: 2.5, h: 0.38, fill: { color: C.accent2 }, line: { color: C.accent2 } });
  s.addText("REFLECTION", { x: 0.5, y: 0.3, w: 2.5, h: 0.38, fontSize: 13, bold: true, color: "0A1A0F", align: "center", valign: "middle", margin: 0 });
  s.addText("Problems Faced & Key Learnings", { x: 3.15, y: 0.3, w: 6.5, h: 0.38, fontSize: 18, bold: true, color: C.white, align: "left", valign: "middle", margin: 0 });

  // Left column — Problems
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 0.88, w: 4.3, h: 0.42, fill: { color: C.accent3 }, line: { color: C.accent3 } });
  s.addText("⚠  Problems Faced", { x: 0.55, y: 0.88, w: 4.15, h: 0.42, fontSize: 14, bold: true, color: C.white, valign: "middle", margin: 0 });

  const problems = [
    "Initially tried brute force O(n²) — TLE on large inputs.",
    "Confused about when to reset the start pointer.",
    "Edge case: single station took extra thought.",
    "Forgot the total_gas check → returned wrong answer when no solution exists.",
  ];

  problems.forEach((p, i) => {
    const y = 1.42 + i * 0.85;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 4.3, h: 0.75, fill: { color: C.card }, line: { color: "2A3040" } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y, w: 0.08, h: 0.75, fill: { color: C.accent3 }, line: { color: C.accent3 } });
    s.addText(`${i + 1}.  ${p}`, { x: 0.6, y: y + 0.06, w: 3.9, h: 0.63, fontSize: 11.5, color: C.textMain, margin: 0 });
  });

  // Right column — Learnings
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 0.88, w: 4.3, h: 0.42, fill: { color: C.accent2 }, line: { color: C.accent2 } });
  s.addText("✓  Key Learnings", { x: 5.45, y: 0.88, w: 4.15, h: 0.42, fontSize: 14, bold: true, color: "0A1A0F", valign: "middle", margin: 0 });

  const learnings = [
    "Greedy is powerful when local decisions imply global optimality.",
    "Circular problem → one pass works if we track total and current gas.",
    "Resetting start greedily avoids revisiting stations unnecessarily.",
    "Two-in-one loop: feasibility check + answer search in O(n).",
  ];

  learnings.forEach((l, i) => {
    const y = 1.42 + i * 0.85;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 4.3, h: 0.75, fill: { color: C.card }, line: { color: "2A3040" } });
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y, w: 0.08, h: 0.75, fill: { color: C.accent2 }, line: { color: C.accent2 } });
    s.addText(`${i + 1}.  ${l}`, { x: 5.5, y: y + 0.06, w: 3.9, h: 0.63, fontSize: 11.5, color: C.textMain, margin: 0 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 5.33, w: 10, h: 0.3, fill: { color: C.card }, line: { color: C.card } });
  s.addText("Slide 7 — Reflection  |  Edit with your actual experience", { x: 0, y: 5.33, w: 10, h: 0.3, fontSize: 11, color: C.textSub, align: "center", valign: "middle", margin: 0 });
}

// Save
pres.writeFile({ fileName: "/home/claude/gas_station_134.pptx" })
  .then(() => console.log("Done: gas_station_134.pptx"))
  .catch(e => console.error(e));