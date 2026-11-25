// Worst Superpower — make.fun entry (program/v1, Node 22, stdlib only).
//
// Entry: a real summoning power applied to the most worthless object
// imaginable, rate-limited to once a day, and — the kicker — it only
// works anywhere EXCEPT where the hero is standing, so they can never
// even see, use, or verify their own grain of sand. Not a curse (it
// harms nobody), not quietly helpful (a grain of sand helps nobody),
// just a genuine power achieving absolutely nothing.
//
// Rejected candidates (brainstormed, not chosen):
//   - "I can tell, with total certainty, whether a traffic light is red
//     while staring directly at it." (clear, but the "detect the obvious"
//     shape feels familiar)
//   - "I can telepathically talk to my own left elbow, but it never
//     answers back." (funny, but less concrete in use than the grain)
//   - "I can sense buried treasure, but only after someone else has
//     already dug it up." (good kicker, but treasure-sensing is a
//     familiar power trope)
//   - "I can make ice cubes melt 0.4 seconds faster, but only while
//     staring directly at them." (risks reading as merely weak, not
//     genuinely useless)
//   - "I can remember, word for word, every terms-and-conditions page
//     I have never read." (funny, but hard to picture in use)
//   - "I can turn invisible to houseplants." (too close to the
//     invisible-when-nobody-watches cliche the judge warns about)
//   - "I can make toast land butter-side up, but only toast I dropped
//     yesterday." (clever, but the time-travel wrinkle muddies it)
//   - "I can speak fluent dolphin, but only to dolphins that are
//     asleep." (funny, but the asleep-audience gag is a known shape)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I can summon a single grain of sand once a day, anywhere on Earth except where I am standing.";

// The gate requires 1-140 characters, a single line, UTF-8, not
// whitespace-only. Validate the constant in code before writing it.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be whitespace-only");
}
if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
  throw new Error("entry must be valid UTF-8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
