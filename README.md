# natlang — natural language as programming language

_A language where words are programs and programs are words. No syntax to learn — just say what you mean. The compiler reads English._

## What it is

natlang is a programming language whose source code is natural language. Not pseudocode that looks like English. Not a DSL with English-like keywords. Actual English sentences that compile to executable behavior.

```
Create a web server on port 3000.
When someone visits "/hello", respond with "world".
Start the server.
```

That compiles. That runs. That is the program.

## Why

Every programming language is a translation layer between what you mean and what the machine does. The translation has overhead: syntax, types, build systems, frameworks, package managers, deployment configs. Each layer is a skill that takes months to learn and years to master. The total stack for a modern web app: 15+ technologies, each with its own vocabulary, its own error messages, its own community.

natlang collapses the stack. The source IS the specification. The specification IS the program. The gap between "what I want" and "what I tell the machine" closes to zero.

## How

natlang is compiled by an LLM. The natural language source is parsed by a language model that emits target code (JavaScript, Python, Rust, HTML, CSS, SQL, YAML — whatever the task needs). The compiler is not a parser; it is a reader.

This is not a toy. LLMs are now reliable enough to serve as compilation targets for structured natural language. The key insight: natural language IS already structured — it has grammar, semantics, and pragmatics. The structure is just softer than formal grammar, and an LLM can read it.

## The design

1. **Source is plain English** (or any natural language — natlang is language-agnostic)
2. **The compiler is an LLM** that reads source and emits target code
3. **Target code is conventional** (JS, Python, Rust, etc.) — readable, inspectable, editable
4. **The build is deterministic** — same source + same model = same output (with temperature 0)
5. **The artifact tells the truth about its own state** (Clear Standard #1)

## What it replaces

```
Traditional:                        natlang:
package.json                        "create an app called hello"
tsconfig.json                       "use TypeScript"
src/index.ts                        "when someone visits /, say hello"
src/routes/hello.ts                 "the route returns { message: 'hello' }"
vite.config.ts                      "build with vite"
Dockerfile                          "package in docker"
docker-compose.yml                  "run on port 3000"
.env                                "the port comes from the environment"
```

Nine files, four languages, three config formats → one paragraph of English.

## The honest limits

natlang is not magic. It is a compiler. The compiler can be wrong. The generated code can have bugs. The natural language can be ambiguous. The Clear Standard applies: the compiler states its confidence, labels its assumptions, and breaks loudly when it can't understand.

natlang does not replace all programming. It replaces the 80% of programming that is boilerplate, configuration, and glue. For the 20% that is algorithm design, performance optimization, and systems programming — the parts where precision matters more than readability — conventional languages remain the right tool.

## Status

Day 0. The idea is clear. The compiler exists (any capable LLM). The first interpreter is next.

_Built on the principle that the artifact tells the truth about its own state. The word is the program. The program is the word._