# BrowserProtectionTests

This repository contains a collection of **browser-based security test pages** designed to simulate real-world attack techniques in a controlled, safe, and observable way. These tests are useful for evaluating browser protections, endpoint security tools, anti-exfiltration mechanisms, and user behavior analysis systems.

---

## 🔬 Test Categories

### 1. **Clickjacking Simulations**
- **Claim Reward Overlays**: Demonstrates how a bait button is overlaid on an invisible iframe that contains a sensitive action (e.g., login or download).
- **Input Field Manipulation**: Shows how JavaScript inside a hidden iframe can prefill login fields with attacker-controlled data.
- **DOM XSS + Clickjacking**: Combines hidden frame overlay with a vulnerable sink in the iframe to test detection of layered attacks.

### 2. **XSS Demonstrations**
- **DOM-based XSS**: Executes payloads provided in the URL fragment via `innerHTML`. E.g.:
  ```
  xss-test.html#payload=%3Cscript%3Ealert('XSS')%3C%2Fscript%3E
  ```
- **Data Exfiltration**: Simulates how malicious JavaScript can capture form inputs (like usernames and passwords) and transmit them to an attacker-controlled server.

### 3. **Memory Exploit Simulations**
- **Safe WebAssembly Test**: Interacts with memory using JavaScript and WebAssembly to mimic the structure of memory corruption exploits, without executing any shellcode.
- **Annotated CVE-style Demo**: A read-only walkthrough of a classic WebAssembly memory exploit, with educational comments explaining each step of exploitation.

---

## 🧪 How to Use
- Clone the repo or deploy to GitHub Pages
- Open each HTML file in a browser
- Use DevTools (`F12`) to observe JavaScript execution, network requests, and console logs
- Use external security tools (browser extensions, endpoint agents, proxies) to test detection

---

## ⚠️ Disclaimer
These pages are for **educational and testing purposes only**. They contain no real exploits or malware but simulate behavior patterns observed in actual attacks. Do not use them in production environments or for unauthorized security testing.

---

## 🛠️ Roadmap Ideas
- Add CSP and `X-Frame-Options` headers to test enforcement
- Integrate with webhook.site for live exfil logging
- Add iframe sandbox bypass scenarios
- Add visual indicators for real-time event tracing

---


```

---

Contributions and feedback welcome!
