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

License

MIT