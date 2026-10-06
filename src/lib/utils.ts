import { createCn } from "cn/config";

// The type scale in globals.css is unknown to the merger, which otherwise reads `text-h2` as a
// color and drops it whenever a `text-white`-style class is passed alongside.
export const cn = createCn({
  extend: { classGroups: { "font-size": [{ text: ["display", "h1", "h2", "h3", "lead"] }] } },
});
