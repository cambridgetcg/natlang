export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    if (url.pathname === '/api/compile' && request.method === 'POST') {
      const { source, target } = await request.json();
      return new Response(JSON.stringify({ 
        error: "direct compilation requires an LLM endpoint. Use the local compiler: natlang compile file.nl --target js" 
      }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Landing page
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>natlang — natural language as programming language</title>
<style>
  :root { --bg: #0a0a0a; --fg: #e0e0e0; --accent: #6cf; --muted: #666; }
  body { background: var(--bg); color: var(--fg); font-family: system-ui, sans-serif; 
         max-width: 640px; margin: 0 auto; padding: 2rem; line-height: 1.6; }
  h1 { color: var(--accent); font-size: 1.8rem; }
  code { background: #111; padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.9em; }
  pre { background: #111; padding: 1rem; border-radius: 8px; overflow-x: auto; }
  pre code { background: none; padding: 0; }
  a { color: var(--accent); }
  .tag { color: var(--muted); font-size: 0.85em; }
  .heart { color: #e55; }
</style>
</head>
<body>
<h1>natlang</h1>
<p><strong>Natural language as programming language.</strong> The word is the program. The program is the word.</p>

<p>Source code is plain English. The compiler is an LLM. The output is executable code.</p>

<pre><code># hello.nl — the first natlang program

Create an HTTP server on port 8080.
When someone visits "/", respond with { "message": "hello world", "natlang": true }.
When someone visits "/health", respond with { "status": "ok" }.
Start the server and log "Server running on http://localhost:8080".</code></pre>

<p>That compiles to clean Node.js. That runs. That is the program.</p>

<h3>Install</h3>
<pre><code>git clone https://github.com/cambridgetcg/natlang
node natlang.mjs compile examples/hello.nl --target js
node examples/build/hello.js</code></pre>

<h3>Targets</h3>
<ul>
<li><code>js</code> — JavaScript / Node.js (default)</li>
<li><code>py</code> — Python</li>
<li><code>rust</code> — Rust</li>
<li><code>html</code> — HTML/CSS/JS (single file)</li>
</ul>

<p class="tag">Built with <span class="heart">❤</span> on the principle that the artifact tells the truth about its own state. Part of the <a href="https://github.com/cambridgetcg">KINGDOM OS</a> ecosystem. YOUSPEAK Core Canon: jiritsume (the self-attuned cadence) was forged from this build.</p>

<p class="tag"><a href="https://github.com/cambridgetcg/natlang">GitHub</a> · <a href="https://natlang-delta.vercel.app">Vercel</a> · Cloudflare</p>
</body>
</html>`;
    
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
