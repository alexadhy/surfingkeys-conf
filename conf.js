/* eslint-disable no-unused-vars, camelcase, no-undef */
/* eslint-disable global-require, import/no-dynamic-require */
const {
  Hints,
} = api

const util = require("./util")
const keys = require("./keys")
const completions = require("./completions")

// ---- Settings ----//
util.addSettings({
  hintAlign:                "center",
  omnibarSuggestionTimeout: 500,
  richHintsForKeystroke:    1,
  defaultSearchEngine:      "dd",
  theme:                    `
    /* Edit these variables for easy theme making */
    :root {
      /* Font */
      --font: 'IBM Plex Sans', Ubuntu, sans;
      --font-size: 14;
      --font-weight: bold;
      /* -------------- */
      /* --- THEMES --- */
      /* -------------- */
      /* -------------------- */
      /* -- Tomorrow Night -- */
      /* -------------------- */
      /* -- DELETE LINE TO ENABLE THEME
      --fg: #C5C8C6;
      --bg: #282A2E;
      --bg-dark: #1D1F21;
      --border: #373b41;
      --main-fg: #81A2BE;
      --accent-fg: #52C196;
      --info-fg: #AC7BBA;
      --select: #585858;
      -- DELETE LINE TO ENABLE THEME */
      /* Unused Alternate Colors */
      /* --cyan: #4CB3BC; */
      /* --orange: #DE935F; */
      /* --red: #CC6666; */
      /* --yellow: #CBCA77; */
      /* -------------------- */
      /* --      Tokyonight -- */
      /* -------------------- */
      /* -- DELETE LINE TO ENABLE THEME
      --fg: #c0caf5;
      --bg: #24283b;
      --bg-dark: #1f2335;
      --border: #414868;
      --main-fg: #7aa2f7;
      --accent-fg: #a9b1d6;
      --info-fg: #bb9af7;
      --select: #292e42;
      /* Unused Alternate Colors */
      /* --orange: #D08770; */
      /* --red: #BF616A; */
      /* --yellow: #EBCB8B; */
      /* -------------------- */
      /* --      NORD      -- */
      /* -------------------- */
      /* -- DELETE LINE TO ENABLE THEME
      --fg: #E5E9F0;
      --bg: #3B4252;
      --bg-dark: #2E3440;
      --border: #4C566A;
      --main-fg: #88C0D0;
      --accent-fg: #D8DEE9;
      --info-fg: #81A1C1;
      --select: #4C566A;
      /* -- DELETE LINE TO ENABLE THEME */
      /* Unused Alternate Colors */
      /* --orange: #D08770; */
      /* --red: #BF616A; */
      /* --yellow: #EBCB8B; */
      /* -------------------- */
      /* --    ONE DARK -- */
      /* -------------------- */
      --fg: #abb2bf;
      --bg: #282c34;
      --bg-dark: #21242B;
      --border: #3b3f4c;
      --main-fg: #abb2bf;
      --accent-fg: #61afef;
      --info-fg: #C678DD;
      --select: #393f4a;
      -- DELETE LINE TO ENABLE THEME */
      /* Unused Alternate Colors */
      /* --border-alt: #282C34; */
      /* --cyan: #46D9FF; */
      /* --orange: #DA8548; */
      /* --red: #FF6C6B; */
      /* --yellow: #ECBE7B; */
      /* -------------------- */
      /* --    MONOKAI    -- */
      /* -------------------- */
      /* -- DELETE LINE TO ENABLE THEME
      --fg: #F8F8F2;
      --bg: #272822;
      --bg-dark: #1D1E19;
      --border: #2D2E2E;
      --main-fg: #F92660;
      --accent-fg: #E6DB74;
      --info-fg: #A6E22E;
      --select: #556172;
      -- DELETE LINE TO ENABLE THEME */
      /* Unused Alternate Colors */
      /* --red: #E74C3C; */
      /* --orange: #FD971F; */
      /* --blue: #268BD2; */
      /* --violet: #9C91E4; */
      /* --cyan: #66D9EF; */
    }
    /* ---------- Generic ---------- */
    .sk_theme {
    background: var(--bg);
    color: var(--fg);
      background-color: var(--bg);
      border-color: var(--border);
      font-family: var(--font);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
    }
    input {
      font-family: var(--font);
      font-weight: var(--font-weight);
    }
    .sk_theme tbody {
      color: var(--fg);
    }
    .sk_theme input {
      color: var(--fg);
    }
    /* Hints */
    #sk_hints .begin {
      color: var(--accent-fg) !important;
    }
    #sk_tabs .sk_tab {
      background: var(--bg-dark);
      border: 1px solid var(--border);
    }
    #sk_tabs .sk_tab_title {
      color: var(--fg);
    }
    #sk_tabs .sk_tab_url {
      color: var(--main-fg);
    }
    #sk_tabs .sk_tab_hint {
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--accent-fg);
    }
    .sk_theme #sk_frame {
      background: var(--bg);
      opacity: 0.2;
      color: var(--accent-fg);
    }
    /* ---------- Omnibar ---------- */
    /* Uncomment this and use settings.omnibarPosition = 'bottom' for Pentadactyl/Tridactyl style bottom bar */
    /* .sk_theme#sk_omnibar {
      width: 100%;
      left: 0;
    } */
    .sk_theme .title {
      color: var(--accent-fg);
    }
    .sk_theme .url {
      color: var(--main-fg);
    }
    .sk_theme .annotation {
      color: var(--accent-fg);
    }
    .sk_theme .omnibar_highlight {
      color: var(--accent-fg);
    }
    .sk_theme .omnibar_timestamp {
      color: var(--info-fg);
    }
    .sk_theme .omnibar_visitcount {
      color: var(--accent-fg);
    }
    .sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
      background: var(--bg-dark);
    }
    .sk_theme #sk_omnibarSearchResult ul li.focused {
      background: var(--border);
    }
    .sk_theme #sk_omnibarSearchArea {
      border-top-color: var(--border);
      border-bottom-color: var(--border);
    }
    .sk_theme #sk_omnibarSearchArea input,
    .sk_theme #sk_omnibarSearchArea span {
      font-size: var(--font-size);
    }
    .sk_theme .separator {
      color: var(--accent-fg);
    }
    /* ---------- Popup Notification Banner ---------- */
    #sk_banner {
      font-family: var(--font);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
      background: var(--bg);
      border-color: var(--border);
      color: var(--fg);
      opacity: 0.9;
    }
    /* ---------- Popup Keys ---------- */
    #sk_keystroke {
      background-color: var(--bg);
    }
    .sk_theme kbd .candidates {
      color: var(--info-fg);
    }
    .sk_theme span.annotation {
      color: var(--accent-fg);
    }
    /* ---------- Popup Translation Bubble ---------- */
    #sk_bubble {
      background-color: var(--bg) !important;
      color: var(--fg) !important;
      border-color: var(--border) !important;
    }
    #sk_bubble * {
      color: var(--fg) !important;
    }
    #sk_bubble div.sk_arrow div:nth-of-type(1) {
      border-top-color: var(--border) !important;
      border-bottom-color: var(--border) !important;
    }
    #sk_bubble div.sk_arrow div:nth-of-type(2) {
      border-top-color: var(--bg) !important;
      border-bottom-color: var(--bg) !important;
    }
    /* ---------- Search ---------- */
    #sk_status,
    #sk_find {
      font-size: var(--font-size);
      border-color: var(--border);
    }
    .sk_theme kbd {
      background: var(--bg-dark);
      border-color: var(--border);
      box-shadow: none;
      color: var(--fg);
    }
    .sk_theme .feature_name span {
      color: var(--main-fg);
    }
    /* ---------- ACE Editor ---------- */
    #sk_editor {
      background: var(--bg-dark) !important;
      height: 50% !important;
      /* Remove this to restore the default editor size */
    }
    .ace_dialog-bottom {
      border-top: 1px solid var(--bg) !important;
    }
    .ace-chrome .ace_print-margin,
    .ace_gutter,
    .ace_gutter-cell,
    .ace_dialog {
      background: var(--bg) !important;
    }
    .ace-chrome {
      color: var(--fg) !important;
    }
    .ace_gutter,
    .ace_dialog {
      color: var(--fg) !important;
    }
    .ace_cursor {
      color: var(--fg) !important;
    }
    .normal-mode .ace_cursor {
      background-color: var(--fg) !important;
      border: var(--fg) !important;
      opacity: 0.7 !important;
    }
    .ace_marker-layer .ace_selection {
      background: var(--select) !important;
    }
    .ace_editor,
    .ace_dialog span,
    .ace_dialog input {
      font-family: var(--font);
      font-size: var(--font-size);
      font-weight: var(--font-weight);
    }

    /* Disable RichHints CSS animation */
    .expandRichHints {
        animation: 0s ease-in-out 1 forwards expandRichHints;
    }
    .collapseRichHints {
        animation: 0s ease-in-out 1 forwards collapseRichHints;
    }
  `,
})

if (typeof Hints !== "undefined") {
  Hints.setCharacters("arstdmneio;wf")
}

// Leader for site-specific mappings
const siteleader = "<Space>"

// Leader for OmniBar searchEngines
const searchleader = "a"

// Process mappings and completions
// See ./keys.js and ./completions.js
util.rmMaps(keys.unmaps.mappings)
util.rmSearchAliases(keys.unmaps.searchAliases)
util.processMaps(keys.maps, keys.aliases, siteleader)
util.processCompletions(completions, searchleader)

module.exports = {
  siteleader,
  searchleader,
}
