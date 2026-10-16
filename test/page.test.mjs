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

test("adds a readable dark mode and a WhatsApp link to +591 78070058", () => {
  assert.match(page, /id="theme-toggle"/);
  assert.match(page, /Modo oscuro/);
  assert.match(page, /https:\/\/wa\.me\/59178070058/);
  assert.match(css, /data-theme="dark"/);
  assert.match(css, /#101820/i);
  assert.match(css, /#ffffff/i);
});

test("matches the supplied layout and stays responsive", () => {
  assert.match(page, /SOLUCIONES DIGITALES PARA NEGOCIOS/);
  assert.match(page, /Nosotros/);
  assert.match(page, /Solicitar una propuesta/);
  assert.match(page, /name="viewport"/);
  assert.match(css, /@media/);
});
