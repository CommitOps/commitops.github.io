function typeTerminal(el, text, index = 0) {
    if (index === 0) el.textContent = "";
  
    if (index < text.length) {
      el.textContent += text.charAt(index);
      const delay = text.charAt(index) === "\n" ? 300 : 20;
      setTimeout(() => typeTerminal(el, text, index + 1), delay);
    }
  }
  
  function replayTerminal() {
    const el = document.getElementById("animated-terminal");
    if (!el) return;
  
    const original = el.getAttribute("data-original");
    if (original) {
      typeTerminal(el, original, 0);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("animated-terminal");
    if (!el) return;
  
    // Store initial content BEFORE wiping it
    const content = el.textContent.trim();
    el.setAttribute("data-original", content);
  
    replayTerminal();
  });
  