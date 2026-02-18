Differ V3.0 | The Committed Patcher

Differ is a high-performance, token saving, browser-based utility designed for surgically patching monolithic codebases and facilitating AI-assisted development workflows.

Unlike standard git-diff tools which rely on strict line numbers or rigid context matching, Differ uses a "Forgiving Search" algorithm that supports fuzzy matching, range anchors, and direct line injection. It runs entirely in the browser (offline-capable) and features a Sandbox Engine to preview complex PWAs in memory.

🚀 Key Features

Single File Architecture: The entire application lives in Differ.html. Zero dependencies to install.

AI Integration: Built-in support for Google Gemini, OpenAI, Anthropic Claude, xAI (Grok), and Local Ollama models.

Monolith Ready: Virtualized rendering engine handles 10,000+ line files without freezing the browser.

Sandbox Preview: Built-in blob: polyfill engine allows PWAs to boot up and run inside the preview pane without a server.

Strict Patching Engine: Uses a context-aware "Search & Replace" algorithm (V3) to ensure patches are applied safely.

Live Console: Integrated terminal to capture logs from the sandboxed code.

Detachable Preview: Pop out the result window to a separate screen for multi-monitor workflows.

Code Indexer: Auto-detects functions, classes, and regions for quick navigation and block highlighting.

Inception Safe: Capable of patching its own source code without breaking the parser (Variable Fence logic).

🛠️ How to Use

Open: Launch Differ.html in any modern web browser (Chrome/Edge recommended).

Load Source: Paste your target code into the center column (Column 2) or use the Folder/File load options.

Configure AI: (Optional) Click the Key icon to configure your API keys for AI patching.

Input Patches: Paste your diff blocks into the left column (Column 1) or use the AI Chatbox to generate them.

Review: Use the Queue to toggle specific patches on or off.

Apply: Click Commit on individual items or Apply All in the header.

Preview: Check the right column (Column 3) to see the code or run the Render mode.

📝 Patch Syntax Guide

Differ V3 accepts a unified patch format. You can chain multiple patches in a single paste.

1. Standard Block (Exact/Soft Match)

Best for general code replacement. Ignores indentation differences.

<<<< SEARCH
function oldLogic() {
  return false;
}
==== REPLACE
function newLogic() {
  return true;
}
>>>>


2. Range Anchors (>>)

Best for replacing massive blocks where you only know the start and end.

<<<< SEARCH
<div id="start-of-messy-block">
>>
</div> <!-- end-of-messy-block -->
==== REPLACE
<div id="clean-block" />
>>>>


3. Line Number Targeting

Best for surgical strikes on repetitive code.

<<<< SEARCH
#100
:
#105
==== REPLACE
  // This replaces lines 100 through 105 inclusive
  newCode();
>>>>


4. Meta-Patching (The "Inception" Rule)

If you are using Differ to patch code that contains patch syntax (e.g., updating Differ itself), you must use Variable Fences (5+ characters) to avoid parser collisions.

<<<<< SEARCH
  const pattern = "<<<< SEARCH";
===== REPLACE
  const pattern = "<<<<< SEARCH";
>>>>>


⚡ PWA & Offline Installation

To install Differ as a standalone desktop app:

Host the file (Differ.html) on GitHub Pages or a local server.

Open the URL in Chrome/Edge.

Click the Install icon in the address bar.

Note: For single-file usage on desktop without a server, simply use Chrome's "More Tools > Create Shortcut... > Open as Window" feature.


Editor's note:
Specififcally for Gemini I had to generate a patch canvas so it automatically knows how to output the patches because the code says so:
--------------------------
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Differ Ledger</title><script src="https://cdn.tailwindcss.com"></script></head>
<body class="bg-[#0b1221] text-slate-500 p-4 font-mono text-[10px] uppercase leading-tight">
  <div class="max-w-xl mx-auto border border-slate-800 rounded bg-slate-900 shadow-2xl overflow-hidden">
    <div class="bg-slate-800 px-3 py-1.5 border-b border-slate-700 flex justify-between font-bold text-slate-300 tracking-tighter">
      <span>DIFFER V3.24 LEDGER</span> <span class="text-emerald-500 flex items-center gap-1"><i class="fa-solid fa-circle text-[6px]"></i> SYNC'D</span>
    </div>
    <div class="p-3 space-y-3">
      <div class="border-b border-slate-800 pb-1 text-blue-400 font-bold tracking-widest">Optimization Rules</div>
      <ul class="space-y-1 lowercase first-letter:uppercase">
        <li><b>Anchors:</b> Use <code class="text-slate-300 font-bold">>></code> for &gt;5 line blocks. Match unique start/end.</li>
        <li><b>Context:</b> Min 2 lines unique context. Prevent search collisions.</li>
        <li><b>Safety:</b> Verify <code class="text-slate-300 font-bold">const/let</code> to avoid re-declaration syntax errors.</li>
        <li><b>Fences:</b> Use <code class="text-slate-300 font-bold">&lt;&lt;&lt;&lt;&lt;</code> (5+ chars) for meta-patching Differ.</li>
      </ul>
      <div class="border-b border-slate-800 pb-1 text-emerald-500 font-bold tracking-widest">Active Queue</div>
      <div id="patchContainer" class="py-1 opacity-40 italic lowercase">No pending patches. All features verified in source.</div>
    </div>
  </div>
</body>
</html>
----------------------------
Hopefully that allows consitent patch outputs...

License

MIT
