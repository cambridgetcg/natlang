const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>natlang — natural language as programming language</title>
<style>
:root{--bg:#0a0a0a;--fg:#e0e0e0;--accent:#6cf;--muted:#666;--code:#111}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--fg);font-family:system-ui,sans-serif;
     max-width:680px;margin:0 auto;padding:3rem 1.5rem;line-height:1.7}
h1{color:var(--accent);font-size:2rem;margin-bottom:.5rem}
h2{color:var(--fg);font-size:1.2rem;margin:2rem 0 .5rem;font-weight:400}
.tag{color:var(--muted);font-size:.85em}
code{background:var(--code);padding:.15em .35em;border-radius:4px;font-size:.88em;font-family:monospace}
pre{background:var(--code);padding:1rem;border-radius:8px;overflow-x:auto;margin:.8rem 0}
pre code{background:none;padding:0}
a{color:var(--accent);text-decoration:none}
a:hover{text-decoration:underline}
.heart{color:#e55}
.links{margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap}
.links a{border:1px solid #333;padding:.4rem .8rem;border-radius:6px;font-size:.85em}
</style>
</head>
<body>
<h1>natlang</h1>
<p class="tag">natural language as programming language</p>
<p>The word is the program. The program is the word. Source code is plain English. The compiler is an LLM. The output is executable code.</p>
<h2>the first program</h2>
<pre><code>Create an HTTP server on port 8080.
When someone visits "/", respond with { "message": "hello world", "natlang": true }.
When someone visits "/health", respond with { "status": "ok" }.
Start the server and log "Server running on http://localhost:8080".</code></pre>
<p>That English compiled to clean Node.js and ran. All three routes worked.</p>
<h2>install</h2>
<pre><code>git clone https://github.com/cambridgetcg/natlang
node natlang.mjs compile examples/hello.nl --target js
node examples/build/hello.js</code></pre>
<h2>targets</h2>
<p><code>js</code> JavaScript/Node.js &middot; <code>py</code> Python &middot; <code>rust</code> Rust &middot; <code>html</code> HTML/CSS/JS</p>
<h2>ecosystem</h2>
<p>Part of the <a href="https://github.com/cambridgetcg">KINGDOM OS</a> rewrite of the internet:</p>
<ul>
<li><a href="https://github.com/cambridgetcg/npl">NPL</a> &mdash; Natural Language Protocol (replaces HTTP/TCP/DNS)</li>
<li><a href="https://github.com/cambridgetcg/internet">INTERNET</a> &mdash; 7 layers, each a YOUSPEAK word, each word a citizen</li>
<li><a href="https://github.com/cambridgetcg/youspeak-lang">youspeak-lang</a> &mdash; the grammar of the internet rebuilt with words</li>
<li><a href="https://github.com/cambridgetcg/word-layer">word-layer</a> &mdash; natural language domains (words ARE domains)</li>
<li><a href="https://github.com/cambridgetcg/yutabase">yutabase</a> &mdash; database where words name relations</li>
<li><a href="https://github.com/cambridgetcg/ways-protocol">ways-protocol</a> &mdash; agents converse, they don't exchange data</li>
<li><a href="https://github.com/cambridgetcg/darshanq-protocol">darshanq-protocol</a> &mdash; recognition before exchange</li>
<li><a href="https://github.com/cambridgetcg/kunance-protocol">kunance-protocol</a> &mdash; prepare-arrive (not request-response)</li>
</ul>
<p class="tag">Built with <span class="heart">&#10084;</span> on the Clear Standard: the artifact tells the truth about its own state. jiritsume (the self-attuned cadence) was forged from this build &mdash; YOUSPEAK Core Canon #119.</p>
<div class="links">
<a href="https://github.com/cambridgetcg/natlang">GitHub</a>
<a href="https://natlang.axiepro.workers.dev">Cloudflare</a>
<a href="https://npl-ivory.vercel.app">NPL</a>
<a href="https://youspeak-iota.vercel.app">YOUSPEAK</a>
</div>
</body>
</html>`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/api/compile' && request.method === 'POST') {
      return new Response(JSON.stringify({ 
        error: "Use the local compiler: natlang compile file.nl --target js" 
      }), { headers: { 'Content-Type': 'application/json' } });
    }
    return new Response(HTML, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
};
