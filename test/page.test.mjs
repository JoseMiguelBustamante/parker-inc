import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const page = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");

test("offers landing pages, CRM, and Freelancer", () => {
  assert.match(page, /Landing pages/);
  assert.match(page, />CRM</);
  assert.match(page, /Freelancer/);
  assert.match(page, /PARKER INC\./);
});

test("uses the supplied logo and its ink on a white canvas", () => {
  assert.match(page, /assets\/logo\.png/);
  assert.match(css, /#101820/i);
  assert.match(css, /#ffffff/i);
});
